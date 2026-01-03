import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, Scale, Shield, CheckCircle, BookOpen, Globe, Ban } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using Typely.xyz. 
              By accessing our service, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Agreement to Terms */}
          <Card className="card-featured">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions ("Terms") constitute a legally binding agreement 
                between you ("User," "you," or "your") and Typely.xyz ("we," "us," or "our") 
                governing your access to and use of the Typely.xyz website and typing test 
                service (collectively, the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our Service, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms. If you do not agree to all of these Terms, 
                you are prohibited from using the Service and must discontinue use immediately.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting to this page. Your continued use of the Service after 
                any changes constitutes acceptance of the modified Terms.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Typely.xyz provides a free online typing speed test tool that allows users to 
                measure their typing speed in Words Per Minute (WPM) and accuracy. The Service 
                includes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Typing speed tests with multiple difficulty levels (Easy, Medium, Hard)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Real-time WPM and accuracy calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Multiple test duration options (30 seconds to 5 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Local progress tracking and result history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Educational resources and typing improvement guides</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Service is provided free of charge and is available to all users without 
                the need for registration or account creation.
              </p>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-success" />
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service only for lawful purposes and in accordance with 
                these Terms. You represent and warrant that you will not:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Ban className="h-4 w-4 text-destructive" />
                    Prohibited Activities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use the Service for any illegal or unauthorized purpose</li>
                    <li>• Attempt to interfere with, compromise, or disrupt the Service or servers</li>
                    <li>• Use automated scripts, bots, or software to artificially manipulate test results</li>
                    <li>• Attempt to probe, scan, or test the vulnerability of our systems</li>
                    <li>• Reverse engineer, decompile, or disassemble any part of the Service</li>
                    <li>• Copy, modify, or create derivative works based on the Service</li>
                    <li>• Use the Service in any way that could damage our reputation or business</li>
                    <li>• Violate any applicable local, state, national, or international law or regulation</li>
                    <li>• Transmit any viruses, malware, or other malicious code</li>
                    <li>• Engage in any activity that imposes an unreasonable load on our infrastructure</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or restrict your access to the Service at any 
                time, without notice, for any violation of these Terms or for any other reason 
                at our sole discretion.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Our Content</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its entire contents, features, and functionality—including but 
                  not limited to the website design, layout, graphics, logos, text, software, and 
                  code—are owned by Typely.xyz, its licensors, or other content providers and are 
                  protected by international copyright, trademark, patent, trade secret, and other 
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Text Passages</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The typing test passages used in our Service may include content from various 
                  public domain sources or content created specifically for educational purposes. 
                  We do not claim ownership of third-party content and use such content under 
                  fair use provisions for educational and testing purposes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Limited License</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to 
                  access and use the Service for your personal, non-commercial use. This license 
                  does not include the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Transfer the materials to another person</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer of Warranties */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                Disclaimer of Warranties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT 
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                We expressly disclaim all warranties of any kind, whether express, implied, 
                statutory, or otherwise, including but not limited to:
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span><strong>Implied warranties</strong> of merchantability, fitness for a particular purpose, and non-infringement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span><strong>Accuracy:</strong> We do not guarantee the precision of WPM or accuracy calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span><strong>Availability:</strong> We do not warrant that the Service will be uninterrupted, secure, or error-free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span><strong>Results:</strong> We make no guarantees about improvement in your typing skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span><strong>Third-party services:</strong> We are not responsible for third-party services or content</span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                You acknowledge that your use of the Service is at your sole risk. The Service 
                may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>
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
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TYPELY.XYZ SHALL NOT BE 
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Typely.xyz, its operators, affiliates, employees, or licensors 
                be liable to you or any third party for any of the following, whether based on 
                warranty, contract, tort, negligence, strict liability, or any other legal theory:
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Loss of profits, revenue, data, or business opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Business interruption or loss of goodwill</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Personal injury or property damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Any indirect, incidental, special, or consequential damages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Damages arising from your use or inability to use the Service</span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                This limitation applies even if we have been advised of the possibility of such 
                damages. Some jurisdictions do not allow the exclusion of certain warranties or 
                limitation of liability for certain damages, so some of the above limitations may 
                not apply to you.
              </p>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless Typely.xyz, its operators, 
                affiliates, licensors, and service providers, and their respective officers, 
                directors, employees, contractors, agents, licensors, suppliers, successors, 
                and assigns from and against any claims, liabilities, damages, judgments, awards, 
                losses, costs, expenses, or fees (including reasonable attorneys' fees) arising 
                out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to the Service immediately, without 
                prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use the Service will cease immediately. All 
                provisions of these Terms which by their nature should survive termination 
                shall survive, including ownership provisions, warranty disclaimers, indemnity, 
                and limitations of liability.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of 
                the jurisdiction in which Typely.xyz operates, without regard to its conflict 
                of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any dispute arising out of or relating to these Terms or the Service shall be 
                resolved through good-faith negotiation between the parties. If the dispute 
                cannot be resolved through negotiation, it shall be submitted to binding 
                arbitration in accordance with the rules of a recognized arbitration organization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You agree that any dispute resolution proceedings will be conducted on an 
                individual basis and not in a class, consolidated, or representative action.
              </p>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Severability and Waiver</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Severability:</strong> If any provision of 
                these Terms is held to be invalid, illegal, or unenforceable, the remaining 
                provisions shall continue in full force and effect. The invalid provision shall 
                be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No Waiver:</strong> Our failure to exercise 
                or enforce any right or provision of these Terms shall not constitute a waiver 
                of such right or provision. Any waiver must be in writing and signed by us.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions about these Terms and Conditions, please contact us. 
                We're happy to clarify any provisions or address your concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors btn-glow"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Privacy Policy
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
