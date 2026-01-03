import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Mail, MessageCircle, Send, CheckCircle, Clock, 
  HelpCircle, Bug, Lightbulb, Briefcase, ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond within 24-48 hours.",
      });
      setFormData({ name: '', email: '', subject: '', category: 'general', message: '' });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              We'd Love to <span className="text-gradient">Hear From You</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? Our team is here to help. 
              We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <HelpCircle className="h-7 w-7 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">General Support</h3>
                <p className="text-xs text-muted-foreground">Questions about usage</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Bug className="h-7 w-7 text-destructive mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Bug Reports</h3>
                <p className="text-xs text-muted-foreground">Something not working?</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Lightbulb className="h-7 w-7 text-warning mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Feature Ideas</h3>
                <p className="text-xs text-muted-foreground">Suggest improvements</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Briefcase className="h-7 w-7 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Business</h3>
                <p className="text-xs text-muted-foreground">Partnerships & media</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email Support</h4>
                    <a 
                      href="mailto:support@typely.xyz" 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      support@typely.xyz
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Business Inquiries</h4>
                    <a 
                      href="mailto:business@typely.xyz" 
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Briefcase className="h-4 w-4" />
                      business@typely.xyz
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24-48 hours during business days. 
                        For urgent issues, please indicate so in your subject line.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>What You Can Contact Us About</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Technical Issues:</strong> Problems using 
                        the typing test, display issues, or browser compatibility questions.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Bug Reports:</strong> Found something 
                        that's not working correctly? Let us know so we can fix it.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Feature Suggestions:</strong> Have an idea 
                        for improving Typely? We'd love to hear it.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">General Feedback:</strong> Share your 
                        experience using Typely.xyz with us.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Business Inquiries:</strong> Partnerships, 
                        media inquiries, and collaboration opportunities.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-stat">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    Quick Answers
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Many common questions are answered in our FAQ section.
                  </p>
                  <Link to="/faq">
                    <Button variant="outline" size="sm" className="gap-2 w-full">
                      Visit FAQ
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="card-featured">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you within 24-48 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="bg-background"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="general">General Support</option>
                            <option value="bug">Bug Report</option>
                            <option value="feature">Feature Suggestion</option>
                            <option value="feedback">Feedback</option>
                            <option value="business">Business Inquiry</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="How can we help?"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Please describe your question, issue, or suggestion in detail..."
                          rows={6}
                          className="bg-background resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>We respect your privacy. Your information will only be used to respond to your inquiry.</span>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full btn-glow" 
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
