import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, Zap, Shield, Smartphone, Calculator, Clock, 
  Keyboard, Target, Award, BookOpen, ArrowRight, Users, TrendingUp
} from 'lucide-react';

const faqData = [
  {
    id: 'free',
    category: 'General',
    question: 'Is Typely.xyz completely free to use?',
    answer: 'Yes, Typely.xyz is 100% free to use with no hidden costs. There are no premium tiers, subscription fees, or feature limitations. All features including multiple difficulty levels, various test durations, progress tracking, and our comprehensive typing guide are available to everyone at no charge. We believe that tools for self-improvement should be accessible to all.',
    icon: <Zap className="h-5 w-5 text-success" />
  },
  {
    id: 'registration',
    category: 'General',
    question: 'Do I need to create an account or register?',
    answer: 'No registration is required. You can start using our typing speed test immediately without providing any personal information, creating an account, or even entering an email address. Simply visit the site and begin typing. Your test results are saved locally on your device, so you can track your progress without an account.',
    icon: <Shield className="h-5 w-5 text-primary" />
  },
  {
    id: 'data-storage',
    category: 'Privacy',
    question: 'Do you store my typing data or personal information?',
    answer: 'No, we do not store any of your typing data or personal information on our servers. All typing speed calculations are performed locally in your web browser using JavaScript. Your recent test results are stored in your browser\'s local storage on your device, not on our servers. We don\'t use tracking cookies or analytics that collect personal data. Your privacy is fully protected.',
    icon: <Shield className="h-5 w-5 text-warning" />
  },
  {
    id: 'wpm-calculation',
    category: 'Technical',
    question: 'How is my WPM (Words Per Minute) calculated?',
    answer: 'WPM is calculated using the industry-standard formula: (Total characters typed ÷ 5) ÷ Time in minutes. The number 5 represents the standard word length (including spaces), which is used universally in typing tests. We calculate "Net WPM" which accounts for errors—only correctly typed characters count toward your score. This gives you an accurate measure of your effective typing speed that\'s comparable across different platforms.',
    icon: <Calculator className="h-5 w-5 text-primary" />
  },
  {
    id: 'accuracy-calculation',
    category: 'Technical',
    question: 'How is typing accuracy calculated?',
    answer: 'Accuracy is calculated as: (Number of correct characters ÷ Total characters typed) × 100%. Each character you type is compared against the expected character in the text passage. Correct characters are marked in green, while incorrect characters are marked in red. Your accuracy percentage updates in real-time as you type, giving you immediate feedback on your precision.',
    icon: <Target className="h-5 w-5 text-success" />
  },
  {
    id: 'mobile-support',
    category: 'Technical',
    question: 'Can I use Typely on my phone or tablet?',
    answer: 'Yes, Typely.xyz is fully responsive and works on smartphones, tablets, and other mobile devices. However, for the most accurate typing speed results, we recommend using a physical keyboard on a desktop or laptop computer. Touchscreen keyboards typically result in slower typing speeds and may not reflect your true typing ability. That said, mobile practice can still be valuable for building familiarity with key positions.',
    icon: <Smartphone className="h-5 w-5 text-accent" />
  },
  {
    id: 'average-speed',
    category: 'Typing Skills',
    question: 'What is considered a good typing speed?',
    answer: 'Typing speed varies by skill level. Beginners typically type 0-25 WPM. The average typing speed is around 40 WPM. Above average typists achieve 40-60 WPM. Fast typists reach 60-80 WPM, which is suitable for most professional roles. Very fast typists exceed 80 WPM, which is considered expert level. Professional typists and transcriptionists often type 65-75+ WPM. The world record is over 200 WPM, though that\'s exceptionally rare.',
    icon: <Award className="h-5 w-5 text-secondary" />
  },
  {
    id: 'improve-speed',
    category: 'Typing Skills',
    question: 'How can I improve my typing speed?',
    answer: 'Improving typing speed requires consistent practice and proper technique. Key tips: 1) Learn touch typing—use all ten fingers and don\'t look at the keyboard. 2) Focus on accuracy first; speed follows naturally. 3) Practice 15-30 minutes daily rather than long occasional sessions. 4) Use proper finger placement with fingers resting on the home row (ASDF JKL;). 5) Maintain good posture with wrists floating. 6) Practice with varied content. Check out our comprehensive Typing Guide for detailed techniques and exercises.',
    icon: <TrendingUp className="h-5 w-5 text-primary" />
  },
  {
    id: 'difficulty-levels',
    category: 'Features',
    question: 'What do the different difficulty levels mean?',
    answer: 'Easy level features simple vocabulary, short sentences, and common words—ideal for beginners or warm-up sessions. Medium level includes standard sentences with everyday vocabulary, suitable for intermediate typists and regular practice. Hard level contains complex sentences, technical vocabulary, and longer passages that challenge advanced typists and help build versatility for professional typing scenarios.',
    icon: <Target className="h-5 w-5 text-warning" />
  },
  {
    id: 'test-duration',
    category: 'Features',
    question: 'What test durations are available?',
    answer: 'We offer four test duration options: 30 seconds for quick skill checks and warm-ups; 1 minute (60 seconds) for standard typing tests, which is the most common duration for measuring WPM; 2 minutes (120 seconds) for more comprehensive assessment; and 5 minutes (300 seconds) for endurance testing and accurate long-term speed measurement. Longer tests typically provide more accurate results as they reduce the impact of initial adjustment time.',
    icon: <Clock className="h-5 w-5 text-success" />
  },
  {
    id: 'progress-tracking',
    category: 'Features',
    question: 'How does progress tracking work?',
    answer: 'Your most recent test results are automatically saved in your browser\'s local storage. This includes your WPM, accuracy, difficulty level, and test duration for each completed test. You can see your recent results displayed on the main page, and your best WPM score is highlighted. Since data is stored locally, your progress stays on your device and persists across browser sessions. Clearing your browser data will reset your saved results.',
    icon: <TrendingUp className="h-5 w-5 text-primary" />
  },
  {
    id: 'browser-compatibility',
    category: 'Technical',
    question: 'Which web browsers are supported?',
    answer: 'Typely.xyz works with all modern web browsers including Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera. We recommend using the latest version of your preferred browser for optimal performance and accuracy. JavaScript must be enabled for the typing test to function. Older browsers (such as Internet Explorer) may not be fully supported.',
    icon: <HelpCircle className="h-5 w-5 text-primary" />
  },
  {
    id: 'errors-counted',
    category: 'Technical',
    question: 'How are typing errors counted?',
    answer: 'Errors are counted in real-time as you type. Each character that doesn\'t match the expected character is counted as an error and highlighted in red. Your error count and accuracy are updated with each keystroke. Note that once a character is typed incorrectly, it counts as an error even if you continue typing correctly afterward. This encourages careful, accurate typing from the start.',
    icon: <Calculator className="h-5 w-5 text-destructive" />
  },
  {
    id: 'different-texts',
    category: 'Features',
    question: 'Can I practice with different texts?',
    answer: 'Yes! Each time you start a new test or click the "New Text" button, you\'ll receive a randomly selected passage from our curated collection. Different difficulty levels have different text collections, so switching between Easy, Medium, and Hard gives you access to varied vocabulary and sentence structures. This variety helps you develop well-rounded typing skills applicable to real-world scenarios.',
    icon: <BookOpen className="h-5 w-5 text-success" />
  },
  {
    id: 'keyboard-layout',
    category: 'Technical',
    question: 'Does Typely work with different keyboard layouts?',
    answer: 'Typely.xyz works with any keyboard layout because it simply compares the characters you type against the expected text. Whether you use QWERTY, AZERTY, QWERTZ, Dvorak, Colemak, or any other layout, the test functions the same way. Your WPM and accuracy are measured based on the characters produced, not the physical keys pressed.',
    icon: <Keyboard className="h-5 w-5 text-accent" />
  }
];

const TrendingUp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

export default function FAQ() {
  const categories = ['General', 'Features', 'Technical', 'Typing Skills', 'Privacy'];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-featured">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Typely.xyz, typing speed measurement, 
              and how to improve your keyboard skills.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Zap className="h-7 w-7 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">100% Free</h3>
                <p className="text-xs text-muted-foreground">No hidden costs</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Shield className="h-7 w-7 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Privacy First</h3>
                <p className="text-xs text-muted-foreground">No data collected</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Smartphone className="h-7 w-7 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">All Devices</h3>
                <p className="text-xs text-muted-foreground">Desktop & mobile</p>
              </CardContent>
            </Card>
            
            <Card className="card-stat text-center">
              <CardContent className="p-5">
                <Users className="h-7 w-7 text-secondary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">No Sign-up</h3>
                <p className="text-xs text-muted-foreground">Instant access</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ by Category */}
          {categories.map((category) => {
            const categoryFaqs = faqData.filter(faq => faq.category === category);
            if (categoryFaqs.length === 0) return null;
            
            return (
              <Card key={category} className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {categoryFaqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <div className="flex items-center gap-3">
                            {faq.icon}
                            <span className="text-sm md:text-base">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pl-8 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}

          {/* Typing Tips Quick Reference */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Quick Typing Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">For Beginners</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Start with proper finger placement on home row (ASDF JKL;)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Focus on accuracy before speed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Practice 15-30 minutes daily for best results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Resist the urge to look at the keyboard
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-success">For Improvement</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Maintain a consistent rhythm while typing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Use all ten fingers for maximum efficiency
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Keep wrists elevated and relaxed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      Practice with varied content and difficulty levels
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link to="/typing-guide">
                  <Button className="gap-2">
                    Read Full Typing Guide
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Still Have Questions */}
          <Card className="card-featured">
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Couldn't find what you were looking for? We're here to help! 
                Reach out to us with any questions, feedback, or suggestions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="btn-glow">Contact Support</Button>
                </Link>
                <a href="mailto:support@typely.xyz">
                  <Button variant="outline">Email Us</Button>
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
}
