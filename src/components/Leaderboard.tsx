import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, Crown, Flame, Calendar, Target, Zap, Trash2 } from 'lucide-react';

export interface LeaderboardEntry {
  id: string;
  name: string;
  wpm: number;
  accuracy: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
  date: string;
}

const LEADERBOARD_KEY = 'typely_leaderboard';

export const getLeaderboard = (): LeaderboardEntry[] => {
  const saved = localStorage.getItem(LEADERBOARD_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
};

export const addToLeaderboard = (entry: Omit<LeaderboardEntry, 'id'>): LeaderboardEntry => {
  const leaderboard = getLeaderboard();
  const newEntry: LeaderboardEntry = {
    ...entry,
    id: Date.now().toString()
  };
  
  const updated = [...leaderboard, newEntry]
    .sort((a, b) => b.wpm - a.wpm)
    .slice(0, 50); // Keep top 50
  
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
  return newEntry;
};

export const clearLeaderboard = () => {
  localStorage.removeItem(LEADERBOARD_KEY);
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />;
    default:
      return <Award className="h-4 w-4 text-muted-foreground" />;
  }
};

const getRankBadge = (rank: number) => {
  if (rank === 1) return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30';
  if (rank === 2) return 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30';
  if (rank === 3) return 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30';
  return '';
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-success/10 text-success border-success/30';
    case 'medium':
      return 'bg-warning/10 text-warning border-warning/30';
    case 'hard':
      return 'bg-destructive/10 text-destructive border-destructive/30';
    default:
      return '';
  }
};

interface LeaderboardProps {
  refreshTrigger?: number;
}

export default function Leaderboard({ refreshTrigger }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [filter, setFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  useEffect(() => {
    setEntries(getLeaderboard());
  }, [refreshTrigger]);

  const filteredEntries = filter === 'all' 
    ? entries 
    : entries.filter(e => e.difficulty === filter);

  const handleClearLeaderboard = () => {
    if (confirm('Are you sure you want to clear the entire leaderboard? This cannot be undone.')) {
      clearLeaderboard();
      setEntries([]);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (entries.length === 0) {
    return (
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No scores yet!</p>
            <p className="text-sm mt-2">Complete a typing test to be the first on the leaderboard.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-elegant">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Leaderboard
            <Badge variant="secondary" className="ml-2">
              {entries.length} {entries.length === 1 ? 'score' : 'scores'}
            </Badge>
          </CardTitle>
          
          <div className="flex flex-wrap gap-2">
            {(['all', 'easy', 'medium', 'hard'] as const).map((level) => (
              <Button
                key={level}
                variant={filter === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(level)}
                className="capitalize text-xs"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {/* Header Row */}
          <div className="hidden sm:grid grid-cols-12 gap-2 px-4 py-3 bg-muted/30 text-xs font-medium text-muted-foreground">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2 text-center">WPM</div>
            <div className="col-span-2 text-center">Accuracy</div>
            <div className="col-span-2 text-center">Level</div>
            <div className="col-span-2 text-center">Date</div>
          </div>
          
          {/* Entries */}
          {filteredEntries.slice(0, 20).map((entry, index) => {
            const rank = entries.findIndex(e => e.id === entry.id) + 1;
            
            return (
              <div 
                key={entry.id} 
                className={`grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-muted/30 transition-colors ${getRankBadge(rank)}`}
              >
                {/* Rank */}
                <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1">
                  {getRankIcon(rank)}
                  <span className={`text-sm font-bold ${rank <= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                    {rank}
                  </span>
                </div>
                
                {/* Name */}
                <div className="col-span-5 sm:col-span-3">
                  <div className="font-semibold text-sm truncate flex items-center gap-1">
                    {rank === 1 && <Flame className="h-3 w-3 text-orange-500" />}
                    {entry.name}
                  </div>
                </div>
                
                {/* WPM */}
                <div className="col-span-2 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Zap className="h-3 w-3 text-primary hidden sm:block" />
                    <span className="text-lg font-bold text-primary">{entry.wpm}</span>
                  </div>
                </div>
                
                {/* Accuracy */}
                <div className="col-span-3 sm:col-span-2 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Target className="h-3 w-3 text-success hidden sm:block" />
                    <span className="text-sm font-medium text-success">{entry.accuracy}%</span>
                  </div>
                </div>
                
                {/* Difficulty */}
                <div className="hidden sm:flex col-span-2 justify-center">
                  <Badge 
                    variant="outline" 
                    className={`text-xs capitalize ${getDifficultyColor(entry.difficulty)}`}
                  >
                    {entry.difficulty}
                  </Badge>
                </div>
                
                {/* Date */}
                <div className="hidden sm:flex col-span-2 justify-center items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(entry.date)}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 bg-muted/20 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            Showing top {Math.min(filteredEntries.length, 20)} of {filteredEntries.length} scores
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearLeaderboard}
            className="text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Clear All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
