import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trophy, Zap, Target, Star } from 'lucide-react';

interface NameInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  wpm: number;
  accuracy: number;
}

export default function NameInputModal({ isOpen, onClose, onSubmit, wpm, accuracy }: NameInputModalProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Please enter your name');
      return;
    }
    
    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    
    if (trimmedName.length > 20) {
      setError('Name must be 20 characters or less');
      return;
    }
    
    onSubmit(trimmedName);
    setName('');
    setError('');
  };

  const handleSkip = () => {
    onClose();
    setName('');
    setError('');
  };

  const getPerformanceMessage = (wpm: number) => {
    if (wpm >= 80) return { text: 'Outstanding performance!', icon: <Star className="h-5 w-5 text-yellow-500" /> };
    if (wpm >= 60) return { text: 'Excellent typing speed!', icon: <Trophy className="h-5 w-5 text-primary" /> };
    if (wpm >= 40) return { text: 'Great job!', icon: <Zap className="h-5 w-5 text-success" /> };
    return { text: 'Good effort!', icon: <Target className="h-5 w-5 text-info" /> };
  };

  const performance = getPerformanceMessage(wpm);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleSkip()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Trophy className="h-6 w-6 text-primary" />
            Save Your Score
          </DialogTitle>
          <DialogDescription>
            Add your name to the leaderboard and compete with others!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Score Summary */}
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              {performance.icon}
              <span className="font-medium text-foreground">{performance.text}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{wpm}</div>
                <div className="text-xs text-muted-foreground">Words Per Minute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">{accuracy}%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
          
          {/* Name Input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                className="text-lg"
                maxLength={20}
                autoFocus
              />
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <p className="text-xs text-muted-foreground">
                {name.length}/20 characters
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button type="submit" className="flex-1 btn-glow">
                <Trophy className="h-4 w-4 mr-2" />
                Save to Leaderboard
              </Button>
              <Button type="button" variant="outline" onClick={handleSkip}>
                Skip
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
