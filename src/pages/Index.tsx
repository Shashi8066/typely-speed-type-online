import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TypingTest from '@/components/TypingTest';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Keyboard, Zap, Target, Clock, Star, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center mb-4">
              <Keyboard className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Typely.xyz
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Free Typing Speed Test
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Instantly test your typing speed and accuracy. Free, fast, and simple online typing test tool.
            </p>
          </div>

          {/* Typing Test Component */}
          <TypingTest />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Typely.xyz?</h3>
            <p className="text-lg text-muted-foreground">Simple, accurate, and completely free typing speed testing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get real-time feedback on your typing speed, accuracy, and performance. 
                  No waiting, no delays - see your results as you type.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No registration required, no data stored. Your typing information stays 
                  on your device. Complete privacy protection.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-warning mx-auto mb-4" />
                <CardTitle>Accurate Measurements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry-standard WPM calculations and detailed accuracy metrics. 
                  Professional-grade typing assessment tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Free Forever</div>
            </div>
            
            <div>
              <Clock className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">Instant</div>
              <div className="text-muted-foreground">No Loading</div>
            </div>
            
            <div>
              <Shield className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-3xl font-bold text-warning">Zero</div>
              <div className="text-muted-foreground">Data Stored</div>
            </div>
            
            <div>
              <Target className="h-8 w-8 text-destructive mx-auto mb-2" />
              <div className="text-3xl font-bold text-destructive">24/7</div>
              <div className="text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Test Your Typing Speed?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who improve their typing skills daily with our free, 
            accurate, and privacy-focused typing speed test.
          </p>
          <Button 
            className="btn-glow text-lg px-8 py-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Start Typing Test
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
