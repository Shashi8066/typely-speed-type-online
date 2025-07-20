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
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <div className="flex items-center justify-center mb-3">
              <Keyboard className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                Typely.xyz
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Test your typing speed with multiple difficulty levels
            </p>
          </div>

          {/* Typing Test Component */}
          <TypingTest />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Features</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-elegant text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Easy, Medium, and Hard difficulty levels to match your skill.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-success mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Live WPM, accuracy, and error tracking as you type.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-warning mx-auto mb-2" />
                <CardTitle className="text-lg">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No registration, no data stored. Complete privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Button 
            className="btn-glow px-6 py-2"
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
