import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TypingTest from '@/components/TypingTest';
import Leaderboard from '@/components/Leaderboard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Keyboard, Zap, Target, Clock, Shield, TrendingUp, 
  Users, Award, CheckCircle, ArrowRight, BookOpen,
  Smartphone, Globe, BarChart3
} from 'lucide-react';

const Index = () => {
  const [leaderboardRefresh, setLeaderboardRefresh] = useState(0);

  const handleScoreSaved = () => {
    setLeaderboardRefresh(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-10 max-w-3xl mx-auto">
            <Badge className="badge-featured">
              Free Online Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Test Your <span className="text-gradient">Typing Speed</span> in Seconds
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Measure your Words Per Minute (WPM) and accuracy with our free online typing test. 
              No registration required. Practice and improve your keyboard skills today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>No Sign-up</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>

          {/* Typing Test Component */}
          <TypingTest onScoreSaved={handleScoreSaved} />
          
          {/* Leaderboard */}
          <div className="mt-8">
            <Leaderboard refreshTrigger={leaderboardRefresh} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</div>
              <p className="text-sm text-muted-foreground">Tests Taken</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-1">95%</div>
              <p className="text-sm text-muted-foreground">User Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">40+</div>
              <p className="text-sm text-muted-foreground">Avg WPM Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">3</div>
              <p className="text-sm text-muted-foreground">Difficulty Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gradient">Improve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our typing test is designed to help you measure, track, and improve your typing skills 
              with powerful features and detailed analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-primary mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Multiple Difficulty Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose from Easy, Medium, or Hard difficulty levels. Each level features 
                  carefully curated text passages appropriate for your skill level, from simple 
                  sentences to complex technical content.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-success mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Real-time Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Watch your WPM, accuracy, and error count update in real-time as you type. 
                  Get instant visual feedback with color-coded characters showing correct 
                  and incorrect keystrokes.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-accent mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Flexible Time Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Select your preferred test duration: 30 seconds for quick checks, 1 minute 
                  for standard tests, or up to 5 minutes for comprehensive skill assessment 
                  and endurance testing.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-secondary mb-3">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your recent test results are automatically saved locally on your device. 
                  Track your best WPM scores and monitor your improvement over time without 
                  creating an account.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-primary mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy completely. No registration required, no personal 
                  data collected, no tracking cookies. All typing data is processed locally 
                  in your browser.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader className="pb-3">
                <div className="feature-icon feature-icon-success mb-3">
                  <Smartphone className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Works Everywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fully responsive design that works on desktop, laptop, tablet, and mobile 
                  devices. Practice your typing skills anywhere, anytime, on any device 
                  with a keyboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Testing in <span className="text-gradient">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Settings</h3>
              <p className="text-muted-foreground">
                Select your preferred difficulty level (Easy, Medium, or Hard) and test 
                duration (30 seconds to 5 minutes).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Typing</h3>
              <p className="text-muted-foreground">
                Click in the text area and begin typing the displayed passage. The timer 
                starts automatically with your first keystroke.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Results</h3>
              <p className="text-muted-foreground">
                View your WPM, accuracy percentage, and error count. Compare with your 
                previous results and track your improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typing Speed Guide Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Speed Guide</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Understanding <span className="text-gradient">Typing Speed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wondering how your typing speed compares? Here's a breakdown of different 
              typing speed levels and what they mean for your productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <Card className="card-stat">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-muted-foreground mb-1">0-25</div>
                <div className="text-sm font-medium mb-2">WPM</div>
                <Badge variant="outline" className="difficulty-easy">Beginner</Badge>
                <p className="text-xs text-muted-foreground mt-3">
                  Just starting out with typing. Focus on learning proper finger placement.
                </p>
              </CardContent>
            </Card>

            <Card className="card-stat">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-info mb-1">25-40</div>
                <div className="text-sm font-medium mb-2">WPM</div>
                <Badge variant="outline" className="difficulty-medium">Average</Badge>
                <p className="text-xs text-muted-foreground mt-3">
                  Around the average typing speed. Good for casual computer use.
                </p>
              </CardContent>
            </Card>

            <Card className="card-stat">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-success mb-1">40-70</div>
                <div className="text-sm font-medium mb-2">WPM</div>
                <Badge variant="outline" className="bg-success/10 text-success border-success/30">Proficient</Badge>
                <p className="text-xs text-muted-foreground mt-3">
                  Above average. Suitable for most professional typing tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="card-stat">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-primary mb-1">70+</div>
                <div className="text-sm font-medium mb-2">WPM</div>
                <Badge variant="outline" className="difficulty-hard">Expert</Badge>
                <p className="text-xs text-muted-foreground mt-3">
                  Professional level. Excellent for careers requiring heavy typing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/typing-guide">
              <Button className="btn-glow gap-2">
                Learn How to Improve Your Speed
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge variant="outline" className="mb-4">Why Typing Matters</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of <span className="text-gradient">Fast Typing</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="feature-icon feature-icon-primary flex-shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Increased Productivity</h3>
                    <p className="text-sm text-muted-foreground">
                      Faster typing means you can complete documents, emails, and reports 
                      in less time, boosting your overall work output significantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="feature-icon feature-icon-success flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Better Career Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Many jobs require strong typing skills. Proficiency can open doors 
                      to data entry, transcription, programming, and administrative roles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="feature-icon feature-icon-accent flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Reduced Fatigue</h3>
                    <p className="text-sm text-muted-foreground">
                      Proper touch typing technique reduces strain on your hands and 
                      wrists, allowing you to type comfortably for longer periods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="feature-icon feature-icon-secondary flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Communication</h3>
                    <p className="text-sm text-muted-foreground">
                      Quick typing helps you communicate more efficiently in chats, 
                      emails, and collaborative tools in our digital-first world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="card-featured">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Keyboard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">40 WPM</div>
                      <div className="text-sm text-muted-foreground">Average typing speed</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The average typing speed is around 40 words per minute. With regular 
                    practice using Typely.xyz, most users improve by 15-25 WPM within a month.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Did You Know?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Professional typists average 65-75 WPM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>The world record is over 200 WPM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Touch typing is 20% faster than hunt-and-peck</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>15 minutes of daily practice shows improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <Card className="card-featured max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Improve Your Typing Speed?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Start practicing now and track your progress. Our free typing test helps 
                you measure your current speed and provides the tools to improve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="btn-glow px-8"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Start Typing Test
                </Button>
                <Link to="/typing-guide">
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Read Typing Guide
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
