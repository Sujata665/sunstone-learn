import { Link } from 'react-router-dom';
import { Search, User, LogOut } from 'lucide-react';
import { PalmTreeIcon } from './PalmTreeIcon';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <PalmTreeIcon className="w-8 h-8 text-primary palm-sway" />
          <span className="text-xl font-bold">EduFlow</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What do you want to learn?"
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/courses">
            <Button variant="ghost">Browse Courses</Button>
          </Link>

          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="secondary">Dashboard</Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {user.name}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link to="/auth">
              <Button className="gradient-sunset">Get Started</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
