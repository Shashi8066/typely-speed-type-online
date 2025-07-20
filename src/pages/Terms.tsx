import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Scale, Shield } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground">
            Terms of use for Typely.xyz
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-6 w-6 text-primary mr-2" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Typely.xyz, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Service Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Typely.xyz provides a free online typing speed test tool that allows users to:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Test typing speed (Words Per Minute - WPM)</li>
                <li>• Measure typing accuracy</li>
                <li>• Track typing performance in real-time</li>
                <li>• Practice typing with various text passages</li>
              </ul>
              <p>
                The service is provided "as is" and is available free of charge to all users.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Acceptable Use */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 text-success mr-2" />
              Acceptable Use
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>You agree to use Typely.xyz only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Use the service for any illegal or unauthorized purpose</li>
                <li>• Attempt to interfere with or disrupt the service or servers</li>
                <li>• Use automated scripts or bots to manipulate typing test results</li>
                <li>• Reverse engineer or attempt to extract the source code</li>
                <li>• Use the service in any way that could damage our reputation or business</li>
                <li>• Violate any applicable local, state, national, or international law</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-warning mr-2" />
              Disclaimer of Warranties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Use at Your Own Risk:</strong> Typely.xyz is provided on an "as is" and 
                "as available" basis. We make no representations or warranties of any kind, 
                express or implied, regarding the service.
              </p>
              <p>
                <strong>No Guarantee of Accuracy:</strong> While we strive to provide accurate 
                typing speed and accuracy measurements, we do not guarantee the precision of 
                our calculations or results.
              </p>
              <p>
                <strong>Service Availability:</strong> We do not warrant that the service will 
                be uninterrupted, secure, or error-free. The service may be temporarily 
                unavailable due to maintenance or technical issues.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
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
                To the fullest extent permitted by applicable law, Typely.xyz and its operators 
                shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Loss of profits or data</li>
                <li>• Business interruption</li>
                <li>• Loss of business opportunities</li>
                <li>• Any other commercial damages or losses</li>
              </ul>
              <p>
                This limitation applies whether the alleged liability is based on contract, 
                tort, negligence, strict liability, or any other basis.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Our Content:</strong> The Typely.xyz website design, logo, and original 
                content are protected by copyright and other intellectual property laws.
              </p>
              <p>
                <strong>Text Passages:</strong> The typing test passages used on our site may 
                be from various sources. We do not claim ownership of third-party content and 
                use such content under fair use provisions for educational purposes.
              </p>
              <p>
                <strong>User Generated Content:</strong> Since our service doesn't store user 
                data, there is no user-generated content that requires licensing terms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, 
              which also governs your use of the service, to understand our practices.
            </p>
          </CardContent>
        </Card>

        {/* Modifications */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Modifications to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be posted 
              on this page with an updated "Last updated" date. Your continued use of the 
              service after any changes constitutes acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may terminate or suspend access to our service immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation 
              if you breach the Terms.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These Terms shall be interpreted and governed by the laws of the jurisdiction 
              in which Typely.xyz operates, without regard to its conflict of law provisions.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please contact us 
              through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}