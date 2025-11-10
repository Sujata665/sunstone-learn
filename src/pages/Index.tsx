import { Link } from 'react-router-dom';
import { FileText, Bot, Headphones, FileStack } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaveBackground } from '@/components/WaveBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PalmTreeIcon } from '@/components/PalmTreeIcon';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-deep">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 star-field">
          <WaveBackground />
          <div className="container relative z-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  learn anything.
                  <br />
                  stay <span className="text-gradient">Palmy.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground italic max-w-lg">
                  Upload anything, get everything. Notes, flashcards, tests, and more - all in the palm of your hand.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                  <PalmTreeIcon className="w-64 h-64 md:w-80 md:h-80 text-foreground relative z-10 palm-sway" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-medium/50 to-transparent"></div>
          <div className="container px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
              Trusted by Students from The World's Leading Universities
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['LSE', 'EHL', 'Imperial College London', 'MIT', 'Stanford'].map((uni, idx) => (
                <div 
                  key={uni}
                  className="bg-white rounded-2xl p-6 md:p-8 hover-scale animate-fade-in flex items-center justify-center min-w-[160px] md:min-w-[200px] h-24 md:h-28"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-xl md:text-2xl font-bold text-gray-800">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transform Content Section */}
        <section className="py-8 md:py-12 container px-4">
          <p className="text-center text-muted-foreground text-sm md:text-base mb-12 animate-fade-in">
            Transform any content into personalized learning experiences in just three simple steps
          </p>
        </section>

        {/* Three-Step Process */}
        <section className="py-8 md:py-16 container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 01 */}
            <Card className="group hover-scale bg-black/40 backdrop-blur border-border/30 overflow-hidden animate-fade-in">
              <CardContent className="p-8 md:p-10">
                <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">01</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Upload Your Materials</h3>
                <p className="text-muted-foreground mb-8 text-sm md:text-base">
                  Add any type of study content
                </p>
              </CardContent>
            </Card>

            {/* Step 02 */}
            <Card className="group hover-scale bg-black/40 backdrop-blur border-accent/30 overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 md:p-10">
                <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">02</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">AI Creates Your Content</h3>
                <p className="text-muted-foreground mb-8 text-sm md:text-base">
                  Transform into learning tools
                </p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-cyan-bright/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-cyan-bright" />
                    </div>
                    <span className="text-xs text-center">Notes</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-cyan-bright/10 flex items-center justify-center">
                      <FileStack className="h-6 w-6 text-cyan-bright" />
                    </div>
                    <span className="text-xs text-center">Flashcards</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-cyan-bright/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-cyan-bright" />
                    </div>
                    <span className="text-xs text-center">Tests</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-cyan-bright/10 flex items-center justify-center">
                      <Headphones className="h-6 w-6 text-cyan-bright" />
                    </div>
                    <span className="text-xs text-center">Audio</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 03 */}
            <Card className="group hover-scale bg-black/40 backdrop-blur border-border/30 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 md:p-10">
                <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">03</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Ask Your AI Tutor</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Ask any question about your uploaded materials, notes, flashcards, and tests.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden star-field">
          <WaveBackground />
          <div className="container relative z-10 px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Start Your Learning Journey Today
            </h2>
            <Link to="/auth">
              <Button size="lg" className="gradient-sunset text-lg px-8 hover-scale">
                Try for Free →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
