import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { AlertTriangle, Info, Scale, Target, Monitor, Heart, Shield, CheckCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Disclaimer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important information about using the Typely.xyz typing speed test service. 
              Please read carefully before using our platform.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* General Disclaimer */}
          <Card className="card-featured">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                General Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The information, tools, and services provided by Typely.xyz are offered for 
                general informational and educational purposes only. We provide this typing 
                speed test tool "as is" and "as available" without any representations or 
                warranties, express or implied, regarding its accuracy, reliability, suitability, 
                or availability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide a useful and accurate typing measurement tool, 
                Typely.xyz makes no guarantees about the completeness, accuracy, reliability, 
                or suitability of the information, test results, or services provided. Any 
                reliance you place on the Service is strictly at your own risk.
              </p>
            </CardContent>
          </Card>

          {/* Accuracy of Results */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Accuracy of Typing Test Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">No Guarantee of Precision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  While we utilize industry-standard formulas for calculating Words Per Minute 
                  (WPM) and accuracy, we cannot guarantee the absolute precision of our measurements. 
                  Typing test results should be considered estimates rather than exact measurements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Factors Affecting Results</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your typing test results may be influenced by numerous factors beyond our control, 
                  including but not limited to:
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Device Performance:</strong> CPU speed, RAM availability, and overall device responsiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Browser Capabilities:</strong> JavaScript engine performance and browser optimizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Network Conditions:</strong> Internet connection stability (for initial page load)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Keyboard Hardware:</strong> Key travel distance, switch type, and keyboard layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Environmental Factors:</strong> Distractions, lighting, seating position, and ergonomics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span><strong>Personal Factors:</strong> Fatigue, stress, time of day, and physical condition</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-info/10 border border-info/30 rounded-lg">
                <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-info" />
                  Comparative Use
                </h5>
                <p className="text-sm text-muted-foreground">
                  Results from Typely.xyz are best used for personal progress tracking and 
                  general skill assessment rather than as absolute measurements. For consistent 
                  comparison, we recommend taking tests under similar conditions each time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Limitations */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6 text-accent" />
                Technical Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Browser Requirements</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This Service is designed to work with modern web browsers that support 
                  current JavaScript standards. Older browsers, including Internet Explorer, 
                  may not function correctly or may produce inaccurate results. We recommend 
                  using the latest version of Chrome, Firefox, Safari, or Edge.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">JavaScript Dependency</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our typing test requires JavaScript to be enabled in your browser. Disabling 
                  JavaScript will prevent the Service from functioning. Browser extensions that 
                  block or modify JavaScript execution may also affect test accuracy.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performance Variations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Results may vary between different devices, operating systems, and browsers 
                  due to differences in processing speed, timing precision, and JavaScript 
                  implementation. For the most consistent results, use the same device and 
                  browser configuration for all tests.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Mobile Device Considerations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  While Typely.xyz works on mobile devices, touchscreen keyboards produce 
                  different typing speeds than physical keyboards. Mobile test results should 
                  not be directly compared with desktop results and may not reflect your 
                  physical keyboard typing ability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Educational Purpose */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-success" />
                Educational Purpose and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Intended Use</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Typely.xyz is intended as an educational and self-improvement tool to help 
                  users practice and develop their typing skills. It is designed for personal 
                  use, skill assessment, and practice purposes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Not a Professional Assessment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our typing test is <strong>not</strong> intended as a substitute for:
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Professional typing assessments or certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Employment screening or job qualification tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Academic evaluation or grading purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Official typing speed certifications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">No Guarantees of Improvement</h4>
                <p className="text-muted-foreground leading-relaxed">
                  While regular practice can improve typing skills for most users, we make no 
                  guarantees about specific improvement outcomes. Individual results depend on 
                  various factors including practice consistency, technique, and individual 
                  learning capacity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Health and Safety */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-destructive" />
                Health and Safety Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  Extended typing practice can lead to physical strain. Please take regular 
                  breaks and maintain proper ergonomics.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Repetitive Strain Injury (RSI)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Extended periods of typing can contribute to repetitive strain injuries, 
                  including carpal tunnel syndrome, tendonitis, and other musculoskeletal 
                  disorders. We recommend:
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Taking a 5-10 minute break every 30-60 minutes of typing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Performing hand and wrist stretches during breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Maintaining proper wrist position (neutral, not bent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Using ergonomic keyboards and proper desk setup</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Eye Strain</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Prolonged screen time may cause eye strain, dry eyes, and headaches. 
                  Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet 
                  away for 20 seconds. Ensure adequate lighting and consider using screen 
                  filters or blue light glasses.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Individual Responsibility</h4>
                <p className="text-muted-foreground leading-relaxed">
                  It is your responsibility to monitor your physical comfort while using 
                  this Service. If you experience pain, discomfort, numbness, or tingling 
                  in your hands, wrists, arms, or shoulders, stop typing immediately and 
                  consult a healthcare professional.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-destructive" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Use at Your Own Risk:</strong> You 
                acknowledge and agree that you use this Service entirely at your own risk. 
                Typely.xyz, its operators, and affiliates are not responsible for any 
                consequences—direct, indirect, incidental, or consequential—resulting from 
                your use of this typing test.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No Warranties:</strong> We make no 
                warranties, expressed or implied, regarding the accuracy, reliability, 
                completeness, or suitability of the information, test results, or services 
                provided by Typely.xyz for any particular purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Limitation of Damages:</strong> In no 
                event shall Typely.xyz be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to 
                loss of data, loss of profits, or business interruption, arising out of or 
                in any way connected with the use of this Service.
              </p>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                External Links and Third-Party Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites or resources that are not 
                owned or controlled by Typely.xyz. We are not responsible for the content, 
                privacy policies, practices, or availability of these external sites. Clicking 
                on external links is done at your own discretion and risk. The inclusion of 
                any link does not imply endorsement, approval, or recommendation by Typely.xyz.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Disclaimer */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Changes to This Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this Disclaimer at any time without prior 
                notice. Changes will be posted on this page with an updated "Last updated" 
                date. We encourage you to review this Disclaimer periodically for any changes. 
                Your continued use of the Service after any modifications constitutes your 
                acceptance of the revised Disclaimer.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Questions About This Disclaimer?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions about this Disclaimer or our Service, please 
                don't hesitate to reach out. We're here to help clarify any concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors btn-glow"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/terms" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Terms & Conditions
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
