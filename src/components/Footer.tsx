import { Link } from 'react-router-dom';
import { Keyboard, Heart } from 'lucide-react';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/typing-guide', label: 'Typing Guide' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/contact', label: 'Contact' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Keyboard className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gradient">Typely.xyz</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Free online typing speed test tool. Test your typing speed and accuracy with our clean, simple interface.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal & Support</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Typely.xyz. All rights reserved.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for typing enthusiasts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}