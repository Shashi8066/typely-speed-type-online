import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AlertTriangle, Info, Scale, Target } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">Disclaimer</h1>
          <p className="text-xl text-muted-foreground">
            Important information about using Typely.xyz
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        {/* General Disclaimer */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-warning mr-2" />
              General Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The information and services provided by Typely.xyz are for general informational 
              and educational purposes only. We provide this typing speed test tool "as is" 
              without any representations or warranties, express or implied.
            </p>
          </CardContent>
        </Card>

        {/* Accuracy Disclaimer */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 text-primary mr-2" />
              Accuracy of Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>No Guarantee of Precision:</strong> While we strive to provide accurate 
                typing speed (WPM) and accuracy calculations, we do not guarantee the absolute 
                precision of our measurements.
              </p>
              <p>
                <strong>Factors Affecting Results:</strong> Your typing test results may be 
                influenced by various factors including:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Device performance and browser capabilities</li>
                <li>• Internet connection stability</li>
                <li>• Keyboard hardware and settings</li>
                <li>• Environmental factors and distractions</li>
                <li>• Personal factors such as fatigue or stress</li>
              </ul>
              <p>
                <strong>Comparative Use Only:</strong> Results should be used for general 
                comparison and improvement tracking rather than absolute measurement standards.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Limitations */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="h-6 w-6 text-success mr-2" />
              Technical Limitations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Browser Compatibility:</strong> This service is designed to work with 
                modern web browsers. Older browsers may not provide accurate timing or may 
                not function properly.
              </p>
              <p>
                <strong>JavaScript Dependency:</strong> Our typing test requires JavaScript 
                to be enabled in your browser. Disabling JavaScript will prevent the service 
                from functioning.
              </p>
              <p>
                <strong>Performance Variations:</strong> Results may vary between different 
                devices, operating systems, and browsers due to differences in processing 
                speed and implementation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Educational Purpose */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Educational Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Learning Tool:</strong> Typely.xyz is intended as an educational tool 
                to help users practice and improve their typing skills. It should not be used 
                as the sole assessment method for professional or academic evaluation.
              </p>
              <p>
                <strong>Not a Professional Assessment:</strong> Our typing test is not a 
                substitute for professional typing assessments or certified typing speed tests 
                that may be required for employment or academic purposes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Liability Limitations */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="h-6 w-6 text-destructive mr-2" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Use at Your Own Risk:</strong> You acknowledge that you use this 
                service at your own risk. We are not responsible for any consequences 
                resulting from your use of this typing test.
              </p>
              <p>
                <strong>No Warranties:</strong> We make no warranties, expressed or implied, 
                regarding the accuracy, reliability, or suitability of the information or 
                services provided.
              </p>
              <p>
                <strong>Limitation of Damages:</strong> In no event shall Typely.xyz be 
                liable for any direct, indirect, incidental, special, or consequential 
                damages arising out of or in any way connected with the use of this service.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* External Links */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>External Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our website may contain links to external sites. We are not responsible for 
              the content, privacy policies, or practices of these external websites. 
              Clicking on external links is done at your own discretion and risk.
            </p>
          </CardContent>
        </Card>

        {/* Health and Safety */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Health and Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Repetitive Strain:</strong> Extended typing practice may lead to 
                repetitive strain injuries. Take regular breaks and maintain proper ergonomics 
                while using our service.
              </p>
              <p>
                <strong>Eye Strain:</strong> Prolonged screen time may cause eye strain. 
                Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away 
                for 20 seconds.
              </p>
              <p>
                <strong>Individual Responsibility:</strong> It is your responsibility to 
                ensure that your use of this service does not cause physical discomfort 
                or injury.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates and Changes */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Updates and Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify this disclaimer at any time without prior notice. 
              Changes will be posted on this page with an updated "Last updated" date. 
              Your continued use of the service constitutes acceptance of any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have any questions about this disclaimer or our service, please 
              contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}