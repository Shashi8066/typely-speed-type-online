import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Database, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is our priority
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 text-primary mr-2" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At Typely.xyz, we are committed to protecting your privacy and ensuring 
              that your personal information remains secure. This Privacy Policy explains 
              how we handle information when you use our free online typing speed test tool.
            </p>
          </CardContent>
        </Card>

        {/* What We Don't Collect */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-6 w-6 text-success mr-2" />
              What We Don't Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-success mr-2">✓</span>
                <span><strong>No Personal Information:</strong> We don't require or collect names, email addresses, or any personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2">✓</span>
                <span><strong>No Account Registration:</strong> Our service works without creating an account or logging in.</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2">✓</span>
                <span><strong>No Typing Data Storage:</strong> Your typed text and test results are not saved on our servers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2">✓</span>
                <span><strong>No Tracking Cookies:</strong> We don't use cookies to track your behavior or identify you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2">✓</span>
                <span><strong>No Third-Party Analytics:</strong> We don't use Google Analytics or similar tracking services.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* How the Service Works */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-6 w-6 text-primary mr-2" />
              How Our Service Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Client-Side Processing:</strong> All typing speed calculations (WPM, accuracy, timing) 
                are performed directly in your web browser using JavaScript. No data is sent to our servers 
                during the typing test.
              </p>
              <p>
                <strong>Local Storage Only:</strong> Any preferences you set (such as dark/light theme) 
                are stored locally in your browser's local storage and never transmitted to our servers.
              </p>
              <p>
                <strong>Static Content:</strong> The website serves static content (HTML, CSS, JavaScript) 
                and doesn't require dynamic server-side processing of your personal data.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Information */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-6 w-6 text-warning mr-2" />
              Technical Information We May Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Like most websites, our web server may automatically collect certain technical information 
                for basic website functionality and security purposes:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• IP address (for security and spam protection)</li>
                <li>• Browser type and version (for compatibility)</li>
                <li>• Operating system (for optimization)</li>
                <li>• Referring website (to understand traffic sources)</li>
                <li>• Pages visited and time spent (for performance optimization)</li>
              </ul>
              <p>
                This information is used solely for website maintenance, security, and improving 
                the user experience. It is not used to identify individual users.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Since we don't collect or store personal data, there's minimal risk to your privacy. 
              However, we still implement appropriate security measures to protect our website 
              and ensure reliable service delivery. Our website uses HTTPS encryption to secure 
              the connection between your browser and our servers.
            </p>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Web Hosting:</strong> Our website is hosted by a third-party hosting provider. 
                Standard web server logs may be generated as part of normal hosting operations.
              </p>
              <p>
                <strong>Content Delivery:</strong> We may use content delivery networks (CDNs) to 
                improve website loading speeds. These services don't access or store your personal information.
              </p>
              <p>
                <strong>Future Advertising:</strong> We may implement Google AdSense or similar 
                advertising services in the future. If we do, we will update this privacy policy 
                and notify users of any changes to data collection practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>No Data to Access:</strong> Since we don't store personal data, there's no personal information to access or download.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>No Data to Delete:</strong> We don't maintain user profiles or stored typing results that need deletion.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Browser Controls:</strong> You can clear your browser's local storage to remove any locally stored preferences.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted 
              on this page with an updated "Last updated" date. We encourage you to review 
              this policy periodically to stay informed about how we protect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}