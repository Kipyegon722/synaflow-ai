import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import workflowHero from '@/assets/workflow-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            We Automate.{' '}
            <span className="hero-gradient bg-clip-text text-transparent">
              You Grow.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Synaflow AI helps Kenyan and global businesses scale smarter with powerful AI-driven workflows and automations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="glow-effect group">
              Request Free Automation Plan
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 smooth-transition" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Automations Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI Working</div>
            </div>
          </div>
        </div>

        {/* Right Content - Workflow Visual */}
        <div className="animate-slide-in-right">
          <div className="relative">
            <img 
              src={workflowHero} 
              alt="AI Workflow Automation" 
              className="rounded-2xl elegant-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            
            {/* Floating workflow nodes */}
            <div className="absolute top-4 right-4 workflow-node animate-glow-pulse">
              <div className="text-xs font-medium text-foreground">AI Processing</div>
            </div>
            <div className="absolute bottom-4 left-4 workflow-node">
              <div className="text-xs font-medium text-foreground">Auto Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;