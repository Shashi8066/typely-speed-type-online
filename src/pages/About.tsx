import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Keyboard, Target, Shield, Clock, Users, Award, 
  Heart, Globe, Zap, CheckCircle, TrendingUp, BookOpen
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Helping You Type <span className="text-gradient">Faster & Better</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Typely.xyz is a free online typing speed test platform dedicated to helping 
              millions of users improve their keyboard skills and boost productivity.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Mission Section */}
          <Card className="card-featured">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In today's digital world, typing is an essential skill that impacts everything from 
                academic success to professional productivity. Yet, many people never receive proper 
                typing instruction and develop inefficient habits that limit their potential.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Our mission is simple:</strong> to provide a free, 
                accessible, and effective platform where anyone can measure their typing speed, 
                identify areas for improvement, and track their progress over time. We believe that 
                everyone deserves access to tools that help them succeed in our increasingly digital world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike other platforms that require subscriptions or bombard users with ads, Typely.xyz 
                is designed to be clean, fast, and focused entirely on helping you improve. We've stripped 
                away unnecessary features to create a distraction-free environment where you can focus 
                on what matters most: your typing.
              </p>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">50,000+</div>
                <p className="text-xs text-muted-foreground">Tests Completed</p>
              </CardContent>
            </Card>
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Globe className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold">120+</div>
                <p className="text-xs text-muted-foreground">Countries Reached</p>
              </CardContent>
            </Card>
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">25+</div>
                <p className="text-xs text-muted-foreground">Avg WPM Improvement</p>
              </CardContent>
            </Card>
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-muted-foreground">User Rating</p>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>What Makes Typely.xyz Different</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-primary flex-shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Privacy-First Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        We don't collect personal data, require registration, or track your behavior. 
                        Your typing data stays in your browser and is never transmitted to our servers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-success flex-shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lightning Fast</h4>
                      <p className="text-sm text-muted-foreground">
                        Our platform is optimized for speed. No bloated frameworks, no unnecessary 
                        scripts. Just a clean, fast typing test that loads in under 2 seconds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-accent flex-shrink-0">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">100% Free Forever</h4>
                      <p className="text-sm text-muted-foreground">
                        No premium tiers, no feature gates, no "upgrade to unlock" prompts. 
                        Every feature is available to everyone, completely free.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-secondary flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Testing Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose from multiple difficulty levels and test durations to match your 
                        skill level and available time. Practice for 30 seconds or 5 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-primary flex-shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Accurate Measurements</h4>
                      <p className="text-sm text-muted-foreground">
                        Our WPM and accuracy calculations follow industry standards, giving you 
                        reliable metrics that you can trust and compare.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="feature-icon feature-icon-success flex-shrink-0">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Educational Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Beyond just testing, we provide comprehensive guides and tips to help 
                        you actually improve your typing speed and technique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How WPM is Calculated */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-6 w-6 text-primary" />
                How We Calculate Your Speed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Typing speed is measured in Words Per Minute (WPM), the industry-standard metric used 
                by employers, educators, and typing certification programs worldwide. Understanding 
                how WPM is calculated helps you interpret your results accurately.
              </p>

              <div className="bg-muted/50 rounded-lg p-5 border border-border">
                <h4 className="font-semibold mb-3">The Standard WPM Formula</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="p-3 bg-background rounded border border-border">
                    <code className="text-primary font-mono">
                      WPM = (Total Characters Typed ÷ 5) ÷ Time in Minutes
                    </code>
                  </div>
                  <p>
                    The standard word length is defined as 5 characters (including spaces). This 
                    standardization allows for fair comparison across different text samples and 
                    testing platforms.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h5 className="font-semibold mb-2 text-primary">Gross WPM</h5>
                  <p className="text-sm text-muted-foreground">
                    Total words typed regardless of errors. This shows your raw typing speed 
                    but doesn't reflect actual productivity.
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h5 className="font-semibold mb-2 text-success">Net WPM (Our Default)</h5>
                  <p className="text-sm text-muted-foreground">
                    Correct words only, accounting for errors. This is your effective typing 
                    speed and what employers typically measure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Our Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Accessibility:</strong>
                    <span className="text-muted-foreground ml-1">
                      Everyone should have access to tools that help them improve their skills, 
                      regardless of their financial situation or technical expertise.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Simplicity:</strong>
                    <span className="text-muted-foreground ml-1">
                      A clean, focused interface that lets you concentrate on what matters. 
                      No clutter, no distractions, no unnecessary complexity.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Privacy:</strong>
                    <span className="text-muted-foreground ml-1">
                      Your data is yours. We don't track you, sell your information, or 
                      require personal details to use our service.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Continuous Improvement:</strong>
                    <span className="text-muted-foreground ml-1">
                      We're constantly updating our platform based on user feedback and the 
                      latest research in typing pedagogy.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Have Questions or Feedback?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We'd love to hear from you. Whether you have suggestions for improving Typely.xyz, 
                questions about typing techniques, or just want to say hello, our team is here to help.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors btn-glow"
              >
                Contact Us
              </Link>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
}
