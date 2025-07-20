import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Keyboard, Target, Shield, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">About Typely.xyz</h1>
          <p className="text-xl text-muted-foreground">
            Your free, fast, and simple online typing speed test tool
          </p>
        </div>

        {/* Mission Section */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 text-primary mr-2" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At Typely.xyz, we believe that typing skills are essential in today's digital world. 
              Our mission is to provide a clean, distraction-free environment where anyone can test 
              and improve their typing speed and accuracy. We've designed our tool to be simple, 
              fast-loading, and accessible to everyone – no registration required, no complicated 
              features, just pure typing practice.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 text-success mr-2" />
                Instant Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get real-time feedback on your typing speed (WPM), accuracy percentage, and error count. 
                Our algorithm calculates your performance instantly as you type.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Privacy First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We respect your privacy. No data is stored on our servers, no cookies are used for tracking, 
                and no personal information is required. Your typing data stays on your device.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Keyboard className="h-5 w-5 text-warning mr-2" />
                Simple Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No complicated setup or registration process. Just visit our site, start typing, 
                and get instant feedback on your performance. It's that simple.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 text-destructive mr-2" />
                Accurate Measurements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our typing test uses industry-standard calculations for WPM (words per minute) 
                and provides detailed accuracy metrics to help you track your improvement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Start Typing</h4>
                  <p className="text-muted-foreground">Click in the text area and begin typing the provided text passage.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Real-time Feedback</h4>
                  <p className="text-muted-foreground">Watch your WPM and accuracy update in real-time as you type.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Complete & Review</h4>
                  <p className="text-muted-foreground">Finish the passage to see your final results and try again with a new text.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Why Choose Typely.xyz?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Free Forever:</strong> No subscription fees, no premium features, completely free to use.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>No Registration:</strong> Start testing immediately without creating an account.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Mobile Friendly:</strong> Works perfectly on desktop, tablet, and mobile devices.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Fast Loading:</strong> Optimized for speed with minimal loading times.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Clean Design:</strong> Distraction-free interface focused on your typing experience.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}