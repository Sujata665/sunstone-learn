import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { PalmTreeIcon } from '@/components/PalmTreeIcon';
import { LogOut, User } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-border/20 bg-navy-deep/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <PalmTreeIcon className="w-8 h-8" />
            <span className="text-xl font-bold">palmy.co</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Creator Programme
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
                  Dashboard
                </Link>
                <Link to="/upload" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
                  Upload
                </Link>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="gradient-sunset rounded-full px-6">
                  Try for Free
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
