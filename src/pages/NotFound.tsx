import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <Card className="card-elegant max-w-lg mx-auto text-center">
            <CardContent className="p-8">
              <AlertTriangle className="h-16 w-16 text-warning mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
              <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-muted-foreground mb-6">
                Oops! The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
              <div className="space-y-4">
                <Button asChild className="btn-glow w-full">
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Return to Home
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Tried URL: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
