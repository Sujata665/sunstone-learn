import { Link } from 'react-router-dom';
import { PalmTreeIcon } from './PalmTreeIcon';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PalmTreeIcon className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">EduFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming education through AI-powered learning experiences.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/manifesto" className="hover:text-primary transition-colors">Manifesto</Link></li>
              <li><Link to="/intern" className="hover:text-primary transition-colors">Become an Intern</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 EduFlow. All rights reserved.
          </p>
          <a href="mailto:admin@eduflow.io" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            admin@eduflow.io
          </a>
        </div>
      </div>
    </footer>
  );
}
