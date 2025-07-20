import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { HelpCircle, Zap, Shield, Smartphone, Calculator, Clock } from 'lucide-react';

const faqData = [
  {
    id: 'free',
    question: 'Is Typely.xyz free to use?',
    answer: 'Yes! Typely.xyz is completely free to use. There are no subscription fees, no premium features, and no hidden costs. Our typing speed test is available to everyone at no charge.',
    icon: <Zap className="h-5 w-5 text-success" />
  },
  {
    id: 'registration',
    question: 'Do I need to register or create an account?',
    answer: 'No registration is required. You can start using our typing speed test immediately without creating an account, providing any personal information, or signing up for anything.',
    icon: <Shield className="h-5 w-5 text-primary" />
  },
  {
    id: 'data-storage',
    question: 'Do you store my typing data?',
    answer: 'No, we do not store any of your typing data on our servers. All calculations are performed locally in your browser, and your results are not saved or transmitted to us. Your privacy is completely protected.',
    icon: <Shield className="h-5 w-5 text-warning" />
  },
  {
    id: 'wpm-calculation',
    question: 'How is my WPM (Words Per Minute) calculated?',
    answer: 'WPM is calculated using the industry standard formula: (Total characters typed ÷ 5) ÷ (Time in minutes). We use 5 characters as the average word length, which is the standard method used by most typing tests.',
    icon: <Calculator className="h-5 w-5 text-primary" />
  },
  {
    id: 'mobile-support',
    question: 'Can I use Typely on mobile devices?',
    answer: 'Yes! Our typing test is fully responsive and works on smartphones and tablets. However, for the most accurate results, we recommend using a physical keyboard on a desktop or laptop computer.',
    icon: <Smartphone className="h-5 w-5 text-success" />
  },
  {
    id: 'accuracy-calculation',
    question: 'How is typing accuracy calculated?',
    answer: 'Accuracy is calculated as: ((Total characters typed - Number of errors) ÷ Total characters typed) × 100%. Each incorrectly typed character counts as one error, even if you correct it.',
    icon: <Calculator className="h-5 w-5 text-warning" />
  },
  {
    id: 'improve-speed',
    question: 'How can I improve my typing speed?',
    answer: 'Practice regularly with proper finger placement, maintain good posture, focus on accuracy over speed initially, and use all ten fingers. Start slowly and gradually increase your speed as muscle memory develops.',
    icon: <Zap className="h-5 w-5 text-primary" />
  },
  {
    id: 'average-speed',
    question: 'What is a good typing speed?',
    answer: 'Average typing speeds: Beginner (0-20 WPM), Intermediate (20-40 WPM), Good (40-60 WPM), Fast (60-80 WPM), Very Fast (80+ WPM). Professional typists often type 65-75 WPM or higher.',
    icon: <Clock className="h-5 w-5 text-success" />
  },
  {
    id: 'browser-compatibility',
    question: 'Which browsers are supported?',
    answer: 'Typely.xyz works best with modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for optimal performance.',
    icon: <HelpCircle className="h-5 w-5 text-primary" />
  },
  {
    id: 'errors-counted',
    question: 'How are errors counted?',
    answer: 'Errors are counted in real-time as you type. Each character that doesn\'t match the expected character is counted as an error. Even if you correct the mistake, it still counts toward your error total.',
    icon: <Calculator className="h-5 w-5 text-destructive" />
  },
  {
    id: 'test-duration',
    question: 'How long is the typing test?',
    answer: 'Our typing tests use text passages that are typically 3-5 sentences long. The test duration depends on your typing speed - faster typists complete it quicker. You can restart with a new passage anytime.',
    icon: <Clock className="h-5 w-5 text-warning" />
  },
  {
    id: 'different-texts',
    question: 'Can I practice with different texts?',
    answer: 'Yes! Each time you restart the test, you\'ll get a randomly selected text passage from our collection. This helps you practice with different vocabulary and sentence structures.',
    icon: <HelpCircle className="h-5 w-5 text-success" />
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Typely.xyz
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-elegant text-center">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">100% Free</h3>
              <p className="text-sm text-muted-foreground">No costs or subscriptions</p>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-semibold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">No data stored or tracked</p>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center">
            <CardContent className="p-6">
              <Smartphone className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-semibold">Mobile Ready</h3>
              <p className="text-sm text-muted-foreground">Works on all devices</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-6 w-6 text-primary mr-2" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      {faq.icon}
                      <span className="ml-2">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Still Have Questions */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Didn't find what you were looking for? We're here to help! 
              Feel free to reach out to us with any questions or feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:contact@typely.xyz"
                className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors"
              >
                Email Support
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Typing Tips */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Quick Typing Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">For Beginners</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Start with proper finger placement on home row (ASDF JKL;)</li>
                  <li>• Focus on accuracy before speed</li>
                  <li>• Practice 10-15 minutes daily</li>
                  <li>• Don't look at the keyboard while typing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-success">For Improvement</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Maintain consistent rhythm</li>
                  <li>• Use all ten fingers</li>
                  <li>• Keep wrists elevated and relaxed</li>
                  <li>• Practice common word patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}