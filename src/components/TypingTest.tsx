import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, Clock, Target, Zap, AlertCircle, Trophy, Timer, Keyboard } from 'lucide-react';
import NameInputModal from './NameInputModal';
import { addToLeaderboard } from './Leaderboard';

const SAMPLE_TEXTS = {
  easy: [
    "The sun is shining bright today. The birds are singing in the trees. It is a good day to go outside and play.",
    "I like to read books in the morning. Reading helps me learn new things. Books are my best friends.",
    "The cat sat on the warm mat. It was a lazy afternoon. The cat closed its eyes and slept peacefully.",
    "Water is essential for life. We need to drink water every day. Clean water keeps us healthy and strong.",
    "The dog ran across the green field. It was chasing a red ball. The dog loves to play fetch with its owner."
  ],
  medium: [
    "Technology continues to reshape how we work and communicate in the modern world. From smartphones to cloud computing, innovation drives progress in every industry. Staying updated with these changes is essential for success.",
    "Regular exercise and a balanced diet are the cornerstones of a healthy lifestyle. Physical activity strengthens your heart, improves mental health, and boosts energy levels throughout the day.",
    "The ocean covers more than seventy percent of our planet's surface. Marine ecosystems support countless species and play a crucial role in regulating Earth's climate and weather patterns.",
    "Learning a new language opens doors to different cultures and perspectives. It enhances cognitive abilities, improves memory, and creates opportunities for personal and professional growth.",
    "Climate change presents significant challenges for communities worldwide. Scientists are developing innovative solutions to reduce carbon emissions and protect our environment for future generations."
  ],
  hard: [
    "The implementation of artificial intelligence in healthcare has revolutionized diagnostic procedures and treatment planning. Machine learning algorithms can now analyze medical imaging with remarkable accuracy, identifying patterns that might escape even experienced radiologists. This technological advancement promises to democratize access to quality healthcare across the globe.",
    "Quantum computing represents a paradigm shift in computational capabilities, leveraging the principles of quantum mechanics to perform calculations exponentially faster than classical computers. While still in its nascent stages, this technology holds tremendous potential for cryptography, drug discovery, and complex optimization problems that were previously intractable.",
    "The intersection of neuroscience and psychology has unveiled fascinating insights into human behavior and decision-making processes. Research indicates that our brains employ sophisticated heuristics and cognitive shortcuts that, while efficient, can sometimes lead to predictable biases in judgment and perception.",
    "Sustainable architecture integrates environmental considerations throughout the design and construction process, minimizing ecological footprint while maximizing occupant comfort and energy efficiency. Green building practices increasingly incorporate renewable materials, passive heating and cooling strategies, and innovative waste management systems.",
    "The global financial system operates through intricate networks of institutions, regulations, and market mechanisms that facilitate the flow of capital across borders. Understanding these interconnected systems requires knowledge of monetary policy, international trade dynamics, and risk management principles."
  ]
};

const TIME_OPTIONS = [30, 60, 120, 300];

type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface TypingStats {
  wpm: number;
  rawWpm: number;
  accuracy: number;
  timeElapsed: number;
  errors: number;
  totalChars: number;
  correctChars: number;
}

interface TestResult {
  wpm: number;
  accuracy: number;
  difficulty: DifficultyLevel;
  timeLimit: number;
  date: Date;
}

interface TypingTestProps {
  onScoreSaved?: () => void;
}

export default function TypingTest({ onScoreSaved }: TypingTestProps) {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [currentText, setCurrentText] = useState(SAMPLE_TEXTS.medium[0]);
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    rawWpm: 0,
    accuracy: 100,
    timeElapsed: 0,
    errors: 0,
    totalChars: 0,
    correctChars: 0
  });
  const [isFinished, setIsFinished] = useState(false);
  const [recentResults, setRecentResults] = useState<TestResult[]>([]);
  const [bestWpm, setBestWpm] = useState<number>(0);
  const [showNameModal, setShowNameModal] = useState(false);
  const [pendingScore, setPendingScore] = useState<{ wpm: number; accuracy: number } | null>(null);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved results from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('typely_results');
    if (saved) {
      const results = JSON.parse(saved);
      setRecentResults(results);
      const best = Math.max(...results.map((r: TestResult) => r.wpm), 0);
      setBestWpm(best);
    }
  }, []);

  // Calculate statistics
  const calculateStats = useCallback((input: string, timeElapsed: number): TypingStats => {
    const words = input.length / 5;
    const minutes = timeElapsed / 60;
    const rawWpm = minutes > 0 ? Math.round(words / minutes) : 0;
    
    let errors = 0;
    let correctChars = 0;
    const minLength = Math.min(input.length, currentText.length);
    
    for (let i = 0; i < minLength; i++) {
      if (input[i] === currentText[i]) {
        correctChars++;
      } else {
        errors++;
      }
    }
    
    const accuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100;
    const netWords = (correctChars / 5);
    const wpm = minutes > 0 ? Math.round(netWords / minutes) : 0;
    
    return {
      wpm: Math.max(0, wpm),
      rawWpm,
      accuracy: Math.max(0, accuracy),
      timeElapsed,
      errors,
      totalChars: input.length,
      correctChars
    };
  }, [currentText]);

  // Handle input change
  const handleInputChange = (value: string) => {
    if (isFinished) return;
    
    if (!isActive && value.length > 0) {
      setIsActive(true);
      setStartTime(Date.now());
      startTimer();
      startCountdown();
    }
    
    setUserInput(value);
    
    if (value.length >= currentText.length) {
      finishTest();
    }
  };

  // Start stats timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      if (startTime) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const currentStats = calculateStats(userInput, elapsed);
        setStats(currentStats);
      }
    }, 100);
  };

  // Start countdown timer
  const startCountdown = () => {
    setTimeRemaining(timeLimit);
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Finish test
  const finishTest = useCallback(() => {
    setIsActive(false);
    setIsFinished(true);
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    
    if (startTime) {
      const finalTime = Math.min(Math.floor((Date.now() - startTime) / 1000), timeLimit);
      const finalStats = calculateStats(userInput, finalTime);
      setStats(finalStats);
      
      // Save result
      const result: TestResult = {
        wpm: finalStats.wpm,
        accuracy: finalStats.accuracy,
        difficulty,
        timeLimit,
        date: new Date()
      };
      
      const updatedResults = [result, ...recentResults].slice(0, 10);
      setRecentResults(updatedResults);
      localStorage.setItem('typely_results', JSON.stringify(updatedResults));
      
      if (finalStats.wpm > bestWpm) {
        setBestWpm(finalStats.wpm);
      }
      
      // Show name input modal for leaderboard
      if (finalStats.wpm > 0) {
        setPendingScore({ wpm: finalStats.wpm, accuracy: finalStats.accuracy });
        setShowNameModal(true);
      }
    }
  }, [startTime, timeLimit, userInput, calculateStats, difficulty, recentResults, bestWpm]);

  // Handle save to leaderboard
  const handleSaveToLeaderboard = (name: string) => {
    if (pendingScore) {
      addToLeaderboard({
        name,
        wpm: pendingScore.wpm,
        accuracy: pendingScore.accuracy,
        difficulty,
        timeLimit,
        date: new Date().toISOString()
      });
      onScoreSaved?.();
    }
    setShowNameModal(false);
    setPendingScore(null);
  };

  // Reset test
  const resetTest = () => {
    setUserInput('');
    setIsActive(false);
    setIsFinished(false);
    setStartTime(null);
    setTimeRemaining(timeLimit);
    setStats({ wpm: 0, rawWpm: 0, accuracy: 100, timeElapsed: 0, errors: 0, totalChars: 0, correctChars: 0 });
    const texts = SAMPLE_TEXTS[difficulty];
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Render text with highlighting
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = 'typing-text inline';
      
      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += ' text-success';
        } else {
          className += ' text-destructive bg-destructive/10 rounded';
        }
      } else if (index === userInput.length) {
        className += ' bg-primary/30 rounded typing-cursor';
      } else {
        className += ' text-muted-foreground';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  // Handle difficulty change
  const handleDifficultyChange = (newDifficulty: DifficultyLevel) => {
    setDifficulty(newDifficulty);
    const texts = SAMPLE_TEXTS[newDifficulty];
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
    resetTest();
  };

  // Handle time change
  const handleTimeChange = (newTime: number) => {
    setTimeLimit(newTime);
    setTimeRemaining(newTime);
    resetTest();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Get performance rating
  const getPerformanceRating = (wpm: number) => {
    if (wpm >= 80) return { label: 'Expert', color: 'text-primary', emoji: '🏆' };
    if (wpm >= 60) return { label: 'Advanced', color: 'text-success', emoji: '⭐' };
    if (wpm >= 40) return { label: 'Intermediate', color: 'text-info', emoji: '👍' };
    if (wpm >= 25) return { label: 'Beginner', color: 'text-warning', emoji: '📈' };
    return { label: 'Getting Started', color: 'text-muted-foreground', emoji: '🎯' };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((timeLimit - timeRemaining) / timeLimit) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Configuration Row */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Difficulty Selection */}
        <Card className="card-elegant">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-semibold">Difficulty Level</span>
              </div>
              {bestWpm > 0 && (
                <Badge variant="secondary" className="text-xs">
                  <Trophy className="h-3 w-3 mr-1" />
                  Best: {bestWpm} WPM
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDifficultyChange(level)}
                  className={`capitalize min-w-[80px] ${difficulty === level ? 'btn-glow' : ''}`}
                >
                  {level}
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {difficulty === 'easy' && 'Simple words and short sentences for beginners'}
              {difficulty === 'medium' && 'Standard sentences with common vocabulary'}
              {difficulty === 'hard' && 'Complex sentences with technical vocabulary'}
            </p>
          </CardContent>
        </Card>

        {/* Time Selection */}
        <Card className="card-elegant">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Timer className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Test Duration</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TIME_OPTIONS.map((time) => (
                <Button
                  key={time}
                  variant={timeLimit === time ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTimeChange(time)}
                  className={timeLimit === time ? 'btn-glow' : ''}
                >
                  {time < 60 ? `${time}s` : `${time / 60}m`}
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Complete the text or wait for the timer to finish
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="card-stat stat-card-wpm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">WPM</span>
            </div>
            <div className="text-3xl font-bold text-primary stat-value">{stats.wpm}</div>
            <p className="text-xs text-muted-foreground mt-1">Words per minute</p>
          </CardContent>
        </Card>
        
        <Card className="card-stat stat-card-accuracy">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Target className="h-4 w-4 text-success" />
              <span className="text-xs font-medium text-muted-foreground">Accuracy</span>
            </div>
            <div className="text-3xl font-bold text-success stat-value">{stats.accuracy}%</div>
            <p className="text-xs text-muted-foreground mt-1">Correct characters</p>
          </CardContent>
        </Card>
        
        <Card className="card-stat stat-card-time">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-warning" />
              <span className="text-xs font-medium text-muted-foreground">Time Left</span>
            </div>
            <div className={`text-3xl font-bold stat-value ${timeRemaining <= 10 && isActive ? 'text-destructive pulse-live' : 'text-warning'}`}>
              {formatTime(timeRemaining)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Remaining time</p>
          </CardContent>
        </Card>
        
        <Card className="card-stat stat-card-errors">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span className="text-xs font-medium text-muted-foreground">Errors</span>
            </div>
            <div className="text-3xl font-bold text-destructive stat-value">{stats.errors}</div>
            <p className="text-xs text-muted-foreground mt-1">Mistakes made</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      {isActive && (
        <div className="progress-bar h-2">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Typing Area */}
      <Card className="typing-container">
        <CardContent className="p-6">
          {/* Text Display */}
          <div className="mb-6 p-5 bg-muted/50 rounded-xl border border-border">
            <div className="text-lg md:text-xl leading-relaxed font-mono select-none tracking-wide">
              {renderTextWithHighlight()}
            </div>
          </div>
          
          {/* Input Area */}
          <div className="space-y-4">
            <textarea
              ref={inputRef}
              value={userInput}
              onChange={(e) => handleInputChange(e.target.value)}
              disabled={isFinished}
              className="w-full h-32 p-4 text-lg font-mono bg-background border-2 border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder={isFinished ? "Test completed! Click 'Try Again' to restart." : "Click here and start typing to begin the test..."}
              autoFocus
            />
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Button
                onClick={resetTest}
                variant="outline"
                className="btn-secondary-glow gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                {isFinished ? 'Try Again' : 'New Text'}
              </Button>
              
              {isFinished && (
                <div className="text-center sm:text-right animate-fade-in">
                  <div className="flex items-center gap-2 justify-center sm:justify-end">
                    <span className="text-2xl">{getPerformanceRating(stats.wpm).emoji}</span>
                    <p className={`text-xl font-bold ${getPerformanceRating(stats.wpm).color}`}>
                      {getPerformanceRating(stats.wpm).label}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stats.wpm} WPM with {stats.accuracy}% accuracy
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Instructions & Tips */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="card-elegant">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Keyboard className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">How to Take the Test</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span>Select your preferred difficulty level and test duration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span>Click in the text area and start typing to begin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span>Type the displayed text as accurately as possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span>Your WPM and accuracy are calculated in real-time</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-warning" />
              <h3 className="font-semibold">Quick Tips for Better Results</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Focus on accuracy first, speed will follow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Keep your fingers on the home row (ASDF JKL;)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Avoid looking at the keyboard while typing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Practice regularly for consistent improvement</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recent Results */}
      {recentResults.length > 0 && (
        <Card className="card-elegant">
          <CardContent className="p-5">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Recent Test Results
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {recentResults.slice(0, 5).map((result, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg text-center">
                  <div className="text-xl font-bold text-primary">{result.wpm}</div>
                  <div className="text-xs text-muted-foreground">WPM</div>
                  <div className="text-xs text-success mt-1">{result.accuracy}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Name Input Modal for Leaderboard */}
      <NameInputModal
        isOpen={showNameModal}
        onClose={() => {
          setShowNameModal(false);
          setPendingScore(null);
        }}
        onSubmit={handleSaveToLeaderboard}
        wpm={pendingScore?.wpm || 0}
        accuracy={pendingScore?.accuracy || 0}
      />
    </div>
  );
}
