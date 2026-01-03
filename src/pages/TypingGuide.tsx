import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Keyboard, Target, Zap, Clock, Award, BookOpen, 
  CheckCircle, Hand, Monitor, ArrowRight, Lightbulb,
  TrendingUp, AlertTriangle, Timer
} from 'lucide-react';

export default function TypingGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Complete Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              The Ultimate Guide to <span className="text-gradient">Faster Typing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn proven techniques to improve your typing speed and accuracy. From proper 
              finger placement to advanced drills, master the keyboard with our comprehensive guide.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Table of Contents */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                <a href="#fundamentals" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">1</span>
                  Touch Typing Fundamentals
                </a>
                <a href="#finger-placement" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">2</span>
                  Proper Finger Placement
                </a>
                <a href="#posture" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">3</span>
                  Ergonomics & Posture
                </a>
                <a href="#practice" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">4</span>
                  Practice Techniques
                </a>
                <a href="#speed-accuracy" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">5</span>
                  Speed vs Accuracy
                </a>
                <a href="#common-mistakes" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/50">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">6</span>
                  Common Mistakes to Avoid
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Section 1: Fundamentals */}
          <section id="fundamentals" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon feature-icon-primary">
                    <Keyboard className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 1</Badge>
                    <CardTitle>Touch Typing Fundamentals</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Touch typing is the ability to type without looking at the keyboard. This skill is 
                    fundamental to achieving fast typing speeds because it allows your eyes to stay on 
                    the screen, reducing errors and increasing efficiency. Studies show that touch typists 
                    are on average 20-30% faster than those who use the hunt-and-peck method.
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-3 text-foreground">Key Principles of Touch Typing</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Home Row Position:</strong> Your fingers should always return 
                        to the home row keys (ASDF for left hand, JKL; for right hand) after each keystroke.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Muscle Memory:</strong> Through repetition, your fingers learn 
                        the position of each key, allowing you to type without conscious thought about key locations.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Consistent Rhythm:</strong> Maintain a steady typing rhythm rather 
                        than bursting and pausing. This leads to more consistent speed and fewer errors.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">All Ten Fingers:</strong> Each finger is responsible for specific 
                        keys. Using all fingers distributes the work and increases speed.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm mb-1">Pro Tip</h5>
                      <p className="text-sm text-muted-foreground">
                        If you currently look at the keyboard while typing, try covering your hands with a 
                        cloth or using a keyboard cover. This forces you to rely on muscle memory and 
                        accelerates the learning process.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Finger Placement */}
          <section id="finger-placement" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon feature-icon-success">
                    <Hand className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 2</Badge>
                    <CardTitle>Proper Finger Placement</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Correct finger placement is the foundation of efficient typing. Each finger is assigned 
                  specific keys to press, which minimizes hand movement and maximizes typing speed.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Left Hand Assignments</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">A</span>
                        <span className="text-sm text-muted-foreground">Pinky finger - also Q, Z, 1, Shift, Tab, Caps</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">S</span>
                        <span className="text-sm text-muted-foreground">Ring finger - also W, X, 2</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">D</span>
                        <span className="text-sm text-muted-foreground">Middle finger - also E, C, 3</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">F</span>
                        <span className="text-sm text-muted-foreground">Index finger - also R, T, V, B, G, 4, 5</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Right Hand Assignments</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">J</span>
                        <span className="text-sm text-muted-foreground">Index finger - also Y, U, H, N, M, 6, 7</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">K</span>
                        <span className="text-sm text-muted-foreground">Middle finger - also I, comma, 8</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">L</span>
                        <span className="text-sm text-muted-foreground">Ring finger - also O, period, 9</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="keyboard-key">;</span>
                        <span className="text-sm text-muted-foreground">Pinky finger - also P, slash, 0, Enter</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    The Home Row Bump
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Most keyboards have small bumps on the F and J keys. These tactile markers help you 
                    find the home row position without looking. Your index fingers should rest on these keys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Ergonomics */}
          <section id="posture" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon feature-icon-accent">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 3</Badge>
                    <CardTitle>Ergonomics & Posture</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Proper ergonomics not only improves typing comfort but also prevents repetitive strain 
                  injuries (RSI) and allows you to type for longer periods without fatigue. Poor posture 
                  can lead to chronic pain and reduced productivity.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-stat">
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-3">Chair & Desk Setup</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Feet flat on the floor or footrest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Thighs parallel to the ground</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Back supported by chair</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Keyboard at elbow height</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card-stat">
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-3">Hand & Wrist Position</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Wrists floating, not resting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Fingers curved naturally</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Arms at 90-degree angle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Shoulders relaxed, not hunched</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-warning/10 rounded-lg p-4 border border-warning/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm mb-1">Take Regular Breaks</h5>
                      <p className="text-sm text-muted-foreground">
                        Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 
                        20 seconds. Also, take a 5-minute break every hour to stretch and rest your hands.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Practice Techniques */}
          <section id="practice" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon feature-icon-secondary">
                    <Timer className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 4</Badge>
                    <CardTitle>Effective Practice Techniques</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Consistent, focused practice is the key to improving your typing speed. Research shows 
                  that 15-30 minutes of daily practice is more effective than occasional long sessions.
                </p>

                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">1</span>
                      Start with Accuracy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Begin each practice session by focusing on accuracy rather than speed. Type slowly 
                      and deliberately, ensuring each keystroke is correct. Speed will naturally follow 
                      as accuracy improves.
                    </p>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">2</span>
                      Practice Problem Keys
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Identify the keys you struggle with most and practice words containing those letters. 
                      Common problem areas include Q, Z, X, and numbers. Dedicate extra time to these weak spots.
                    </p>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">3</span>
                      Use Varied Content
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practice with different types of text: articles, code, emails, and random word lists. 
                      This builds versatility and prepares you for real-world typing scenarios.
                    </p>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">4</span>
                      Track Your Progress
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Keep a log of your WPM and accuracy over time. Seeing improvement motivates 
                      continued practice. Typely.xyz automatically saves your recent results for easy tracking.
                    </p>
                  </div>
                </div>

                <div className="bg-success/10 rounded-lg p-4 border border-success/30">
                  <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-success" />
                    Recommended Practice Schedule
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">15-30</div>
                      <div className="text-xs text-muted-foreground">minutes daily</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">5-7</div>
                      <div className="text-xs text-muted-foreground">days per week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">4-8</div>
                      <div className="text-xs text-muted-foreground">weeks for results</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Speed vs Accuracy */}
          <section id="speed-accuracy" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon feature-icon-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 5</Badge>
                    <CardTitle>Balancing Speed and Accuracy</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Many beginners focus solely on speed, but accuracy is equally important. Errors slow you 
                  down because you have to backspace and correct mistakes. The goal is to find the optimal 
                  balance between speed and accuracy for maximum efficiency.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">The 97% Rule</h4>
                    <p className="text-sm text-muted-foreground">
                      Aim for at least 97% accuracy. Below this threshold, the time spent correcting 
                      errors negates any speed gains. If your accuracy drops below 95%, slow down and 
                      focus on precision.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">97%+</div>
                      <div className="text-sm text-muted-foreground">Target accuracy rate</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Net WPM vs Gross WPM</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Gross WPM</strong> counts all words typed regardless of errors. <strong>Net WPM</strong> 
                      subtracts errors, giving your true effective speed. Typely.xyz shows your Net WPM 
                      for accurate performance measurement.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-2">Formula:</div>
                      <code className="text-sm text-primary">Net WPM = (Correct Characters / 5) / Time (min)</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6: Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="feature-icon" style={{ background: 'hsl(var(--destructive) / 0.1)', color: 'hsl(var(--destructive))' }}>
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Section 6</Badge>
                    <CardTitle>Common Mistakes to Avoid</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Being aware of common typing mistakes helps you avoid developing bad habits that are 
                  difficult to unlearn later. Here are the most frequent errors beginners make.
                </p>

                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                    <h4 className="font-semibold mb-1">Looking at the Keyboard</h4>
                    <p className="text-sm text-muted-foreground">
                      This is the #1 habit that slows typists down. Every time you look at the keyboard, 
                      you lose your place in the text and must re-orient. Force yourself to look only at 
                      the screen.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-warning bg-warning/5 rounded-r-lg">
                    <h4 className="font-semibold mb-1">Using Only Index Fingers (Hunt and Peck)</h4>
                    <p className="text-sm text-muted-foreground">
                      While it may feel natural at first, this method has a low speed ceiling. Using all 
                      ten fingers distributes the workload and dramatically increases potential speed.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-warning bg-warning/5 rounded-r-lg">
                    <h4 className="font-semibold mb-1">Ignoring the Home Row</h4>
                    <p className="text-sm text-muted-foreground">
                      Not returning fingers to the home row after each keystroke causes disorientation. 
                      The home row is your anchor point – always return to ASDF JKL;.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-warning bg-warning/5 rounded-r-lg">
                    <h4 className="font-semibold mb-1">Prioritizing Speed Over Accuracy</h4>
                    <p className="text-sm text-muted-foreground">
                      Rushing leads to errors, which require backspacing and retyping. It's faster to 
                      type correctly the first time than to fix mistakes. Build accuracy first, then 
                      gradually increase speed.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-warning bg-warning/5 rounded-r-lg">
                    <h4 className="font-semibold mb-1">Inconsistent Practice</h4>
                    <p className="text-sm text-muted-foreground">
                      Practicing sporadically doesn't build muscle memory effectively. Short, daily 
                      practice sessions are far more effective than occasional long sessions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Ready to Put These Tips into Practice?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Now that you know the techniques, it's time to apply them. Start with our free 
                typing test and track your improvement over time.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button className="btn-glow gap-2">
                    Start Typing Test
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline">View FAQ</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
}
