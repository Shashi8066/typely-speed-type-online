import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Keyboard } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/typing-guide', label: 'Typing Guide' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      to={href}
      className={`text-sm font-medium smooth-transition hover:text-primary ${
        isActivePage(href) ? 'text-primary' : 'text-muted-foreground'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Keyboard className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">Typely.xyz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <Link
                    to="/"
                    className="flex items-center space-x-2 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Keyboard className="h-6 w-6 text-primary" />
                    <span className="text-gradient">Typely.xyz</span>
                  </Link>
                  
                  <div className="flex flex-col space-y-4">
                    {navigationLinks.map((link) => (
                      <NavLink key={link.href} {...link} />
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}