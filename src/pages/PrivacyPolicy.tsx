import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Shield, Eye, Database, Lock, Globe, Server, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is fundamental to how we build and operate Typely.xyz. 
              Learn how we protect your data and respect your rights.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Privacy Summary */}
          <Card className="card-featured">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No personal data collection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No registration required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No tracking cookies</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No typing data stored on servers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">All processing happens locally</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">HTTPS encryption on all connections</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At Typely.xyz ("we," "our," or "us"), we are committed to protecting your privacy 
                and ensuring that your personal information remains secure. This Privacy Policy 
                explains how we handle information when you use our free online typing speed test 
                service (the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have designed Typely.xyz with privacy as a core principle. Unlike many online 
                services, we do not require accounts, collect personal information, or track your 
                behavior. Our goal is to provide a useful typing test tool while respecting your 
                fundamental right to privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Typely.xyz, you agree to the practices described in this Privacy Policy. 
                If you do not agree with these practices, please discontinue use of our Service.
              </p>
            </CardContent>
          </Card>

          {/* What We Don't Collect */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-success" />
                Information We Do NOT Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We take a privacy-first approach. Here is what we explicitly do NOT collect:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Personal Identification Information:</strong> We 
                    do not collect names, email addresses, phone numbers, addresses, or any other 
                    personally identifiable information (PII).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Account Information:</strong> We do not require 
                    or offer user accounts. There is no registration, login, or profile system.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Typing Content:</strong> The text you type 
                    during tests is processed entirely in your browser and is never transmitted to 
                    our servers.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Test Results:</strong> Your WPM scores, 
                    accuracy rates, and other test metrics are not stored on our servers. They 
                    remain only in your browser's local storage.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Tracking Cookies:</strong> We do not use 
                    cookies for tracking, advertising, or user identification purposes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Third-Party Analytics:</strong> We do not 
                    use Google Analytics, Facebook Pixel, or other tracking and analytics services 
                    that collect user data.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How the Service Works */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                How Our Service Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Client-Side Processing</h4>
                <p className="text-muted-foreground leading-relaxed">
                  All typing speed calculations, including Words Per Minute (WPM), accuracy 
                  percentages, and error counts, are performed entirely in your web browser 
                  using JavaScript. No typing data is sent to our servers during or after 
                  the typing test. This means your keystrokes and test results stay on your 
                  device.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Local Storage</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We use your browser's local storage feature to save certain preferences 
                  and your recent test results. This data is stored only on your device and 
                  is never transmitted to our servers. Data stored locally includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Theme preference (dark/light mode)</li>
                  <li>Recent test results (WPM, accuracy, difficulty, date)</li>
                  <li>Best WPM score</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  You can clear this data at any time by clearing your browser's local storage 
                  or using your browser's "Clear site data" function.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Static Content Delivery</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Typely.xyz serves static files (HTML, CSS, JavaScript, images) that run 
                  in your browser. There is no server-side processing of your personal data 
                  or typing activity. The website functions entirely as a client-side application.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Information */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-warning" />
                Technical Information We May Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Like all websites, our web hosting infrastructure may automatically collect 
                certain technical information for operational and security purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span><strong>IP Address:</strong> Temporarily logged for security and DDoS protection. Not used to identify individual users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span><strong>Browser Type & Version:</strong> Used for compatibility monitoring and debugging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span><strong>Operating System:</strong> Used for performance optimization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span><strong>Referring URL:</strong> May be logged to understand traffic sources.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span><strong>Timestamp:</strong> When pages are accessed, for infrastructure monitoring.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This information is collected at the web server level and is not linked to 
                individual users. It is used solely for maintaining service availability, 
                security monitoring, and infrastructure optimization. Server logs are 
                typically retained for a limited period and then deleted.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-success" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical measures to protect the integrity and 
                availability of our Service:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">HTTPS Encryption:</strong> All connections 
                    to Typely.xyz are encrypted using HTTPS (TLS/SSL), protecting data in transit 
                    between your browser and our servers.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Minimal Data Architecture:</strong> By not 
                    collecting personal data, we eliminate the risk of data breaches affecting 
                    user information. You cannot lose what you never had.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Regular Security Updates:</strong> We keep 
                    our platform and dependencies updated to protect against known vulnerabilities.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Web Hosting</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is hosted by a third-party hosting provider. Standard web server 
                  logs may be generated as part of normal hosting operations. These logs are 
                  managed according to the hosting provider's data retention policies.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Content Delivery Network (CDN)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We may use CDN services to improve website loading speeds globally. CDNs 
                  cache and serve static content from servers closer to you. These services 
                  do not access or store your personal information.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Advertising</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Typely.xyz may display advertisements through Google AdSense or similar 
                  advertising networks. These third-party advertising services may use cookies 
                  or similar technologies to serve ads based on your browsing history. You can 
                  opt out of personalized advertising by visiting{' '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Ads Settings
                  </a>{' '}
                  or{' '}
                  <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AboutAds.info
                  </a>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">External Fonts</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We use Google Fonts to display typography on our website. When you load our 
                  pages, your browser may connect to Google's servers to retrieve font files. 
                  Google's privacy policy applies to this data collection.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Because we collect minimal data, many traditional privacy rights are inherently 
                satisfied:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Right to Access:</strong> Since we don't 
                    store personal data, there is no personal information to access.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Right to Deletion:</strong> We don't maintain 
                    user data that requires deletion. Local storage data can be cleared through your browser.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Right to Data Portability:</strong> Your test 
                    results in local storage can be accessed through your browser's developer tools.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Browser Controls:</strong> You can clear local 
                    storage, block cookies, and use private/incognito browsing at any time.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Typely.xyz is designed to be used by individuals of all ages. Since we do not 
                collect personal information, our service is safe for users under the age of 13 
                (or the applicable age of digital consent in your jurisdiction). We do not 
                knowingly collect personal information from children. If you are a parent or 
                guardian and believe your child has provided personal information through our 
                contact form, please contact us so we can address the matter.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices, technology, legal requirements, or for other operational reasons. 
                When we make material changes, we will update the "Last updated" date at the 
                top of this page. We encourage you to review this Privacy Policy periodically 
                to stay informed about how we protect your privacy. Your continued use of 
                Typely.xyz after any changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or our privacy practices, please don't hesitate to contact us.
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
