import { Link } from 'react-router-dom';
import { Sparkles, FileText, Bot, Upload, Link as LinkIcon, MoreHorizontal, FileCode } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaveBackground } from '@/components/WaveBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PalmTreeIcon } from '@/components/PalmTreeIcon';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 star-field">
          <WaveBackground />
          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <PalmTreeIcon className="w-32 h-32 text-primary/80 palm-sway" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                learn differently.
                <br />
                <span className="text-gradient">stay EduFlow.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto italic">
                Upload anything, get everything. Notes, flashcards, tests, and more - all in the palm of your hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/dashboard">
                  <Button size="lg" className="gradient-sunset text-lg px-8 hover-scale">
                    Go to Dashboard <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Free forever. Upgrade anytime. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Step Process */}
        <section className="py-16 md:py-24 container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01 */}
            <Card className="group hover-scale bg-card/80 backdrop-blur border-border/50 overflow-hidden animate-fade-in">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-cyan-bright/30 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-3">Upload Your Materials</h3>
                <p className="text-muted-foreground mb-6">
                  Add any type of study content
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Upload className="h-6 w-6 text-cyan-bright" />
                    <span className="text-xs font-medium">Images</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <LinkIcon className="h-6 w-6 text-cyan-bright" />
                    <span className="text-xs font-medium">Websites</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-6 w-6 text-cyan-bright" />
                    <span className="text-xs font-medium">And More</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <FileCode className="h-6 w-6 text-cyan-bright" />
                    <span className="text-xs font-medium">Documents</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 02 */}
            <Card className="group hover-scale bg-card/80 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-secondary/30 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-3">AI Creates Your Content</h3>
                <p className="text-muted-foreground mb-6">
                  Transform into learning tools
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <FileText className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Smart Notes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Flashcards</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Bot className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Practice Tests</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 03 */}
            <Card className="group hover-scale bg-card/80 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-accent/30 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-3">Ask Your AI Tutor</h3>
                <p className="text-muted-foreground mb-6">
                  Ask any question about your uploaded materials, notes, flashcards, and tests.
                </p>
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <Bot className="h-8 w-8 text-accent mb-2" />
                  <p className="text-sm text-muted-foreground">
                    24/7 AI assistance ready to help you master your materials
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden star-field">
          <WaveBackground />
          <div className="container relative z-10 px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Your Learning Journey Today
            </h2>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                Start Your Learning Journey Today →
              </Button>
            </Link>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 border-t border-border/40">
          <div className="container px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Trusted by Students from The World's Leading Universities
            </h3>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
