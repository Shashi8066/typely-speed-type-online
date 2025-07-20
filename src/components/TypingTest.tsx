import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Clock, Target, Zap } from 'lucide-react';

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog near the riverbank. This sentence contains every letter of the alphabet and provides a good typing challenge for beginners and experts alike.",
  "Technology has revolutionized the way we communicate and work in the modern world. From smartphones to artificial intelligence, innovation continues to shape our daily lives in remarkable ways.",
  "Typing speed and accuracy are essential skills in today's digital workplace. Regular practice can significantly improve your performance and boost your confidence when working with computers.",
  "The art of programming requires patience, logical thinking, and attention to detail. Each line of code serves a purpose in creating software that can solve complex problems efficiently.",
  "Climate change presents one of the greatest challenges of our time. Scientists around the world are working together to develop sustainable solutions for future generations."
];

interface TypingStats {
  wpm: number;
  accuracy: number;
  timeElapsed: number;
  errors: number;
  totalChars: number;
}

export default function TypingTest() {
  const [currentText, setCurrentText] = useState(SAMPLE_TEXTS[0]);
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 100,
    timeElapsed: 0,
    errors: 0,
    totalChars: 0
  });
  const [isFinished, setIsFinished] = useState(false);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate statistics
  const calculateStats = (input: string, timeElapsed: number): TypingStats => {
    const words = input.length / 5; // Standard: 5 characters = 1 word
    const minutes = timeElapsed / 60;
    const wpm = minutes > 0 ? Math.round(words / minutes) : 0;
    
    let errors = 0;
    const minLength = Math.min(input.length, currentText.length);
    
    for (let i = 0; i < minLength; i++) {
      if (input[i] !== currentText[i]) {
        errors++;
      }
    }
    
    const accuracy = input.length > 0 ? Math.round(((input.length - errors) / input.length) * 100) : 100;
    
    return {
      wpm,
      accuracy: Math.max(0, accuracy),
      timeElapsed,
      errors,
      totalChars: input.length
    };
  };

  // Handle input change
  const handleInputChange = (value: string) => {
    if (!isActive && value.length > 0) {
      setIsActive(true);
      setStartTime(Date.now());
      startTimer();
    }
    
    setUserInput(value);
    
    if (value.length >= currentText.length) {
      finishTest();
    }
  };

  // Start timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      if (startTime) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const currentStats = calculateStats(userInput, elapsed);
        setStats(currentStats);
      }
    }, 100);
  };

  // Finish test
  const finishTest = () => {
    setIsActive(false);
    setIsFinished(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (startTime) {
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      const finalStats = calculateStats(userInput, finalTime);
      setStats(finalStats);
    }
  };

  // Reset test
  const resetTest = () => {
    setUserInput('');
    setIsActive(false);
    setIsFinished(false);
    setStartTime(null);
    setStats({ wpm: 0, accuracy: 100, timeElapsed: 0, errors: 0, totalChars: 0 });
    setCurrentText(SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)]);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Focus input after reset
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Render text with highlighting
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = 'typing-text';
      
      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += ' text-success bg-success/10';
        } else {
          className += ' text-destructive bg-destructive/10';
        }
      } else if (index === userInput.length) {
        className += ' bg-primary/20 typing-cursor';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Stats Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-elegant">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">WPM</span>
            </div>
            <div className="text-2xl font-bold text-primary">{stats.wpm}</div>
          </CardContent>
        </Card>
        
        <Card className="card-elegant">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-success mr-2" />
              <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-success">{stats.accuracy}%</div>
          </CardContent>
        </Card>
        
        <Card className="card-elegant">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-warning mr-2" />
              <span className="text-sm font-medium text-muted-foreground">Time</span>
            </div>
            <div className="text-2xl font-bold text-warning">{stats.timeElapsed}s</div>
          </CardContent>
        </Card>
        
        <Card className="card-elegant">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">Errors</span>
            </div>
            <div className="text-2xl font-bold text-destructive">{stats.errors}</div>
          </CardContent>
        </Card>
      </div>

      {/* Typing Area */}
      <Card className="card-elegant">
        <CardContent className="p-6">
          {/* Text Display */}
          <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
            <div className="text-lg leading-relaxed font-mono select-none">
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
              className="w-full h-32 p-4 text-lg font-mono bg-background border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder={isFinished ? "Test completed! Click restart to try again." : "Start typing here..."}
              autoFocus
            />
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Button
                onClick={resetTest}
                variant="outline"
                className="btn-glow"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                {isFinished ? 'Try Again' : 'Restart'}
              </Button>
              
              {isFinished && (
                <div className="text-center sm:text-right">
                  <p className="text-lg font-semibold text-primary">
                    Test Complete! 🎉
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stats.wpm} WPM with {stats.accuracy}% accuracy
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Instructions */}
      <Card className="card-elegant">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">How to Use</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Click in the text area and start typing the text shown above</li>
            <li>• Your typing speed (WPM) and accuracy will be calculated in real-time</li>
            <li>• Green highlights show correct characters, red shows errors</li>
            <li>• Complete the entire text to see your final results</li>
            <li>• Click "Restart" to try again with a new text</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}