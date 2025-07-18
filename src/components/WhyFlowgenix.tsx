import { Zap, Clock, DollarSign, TrendingUp } from 'lucide-react';

const WhyFlowgenix = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your automations up and running in days, not months. We use proven templates and frameworks to accelerate implementation.',
      stat: '7-14 days'
    },
    {
      icon: Clock,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology including ChatGPT, Claude, and custom AI models to create intelligent automations.',
      stat: '24/7 AI'
    },
    {
      icon: DollarSign,
      title: 'Affordable',
      description: 'Enterprise-level automation at small business prices. No huge upfront costs or complex licensing fees.',
      stat: 'ROI in 30 days'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line: more leads, higher conversion, reduced costs.',
      stat: '3x efficiency'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Flowgenix AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another automation agency. We're your strategic partner in building 
            intelligent systems that scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 smooth-transition glow-effect">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {benefit.stat}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Value Props */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Kenya-Based</div>
              <p className="text-muted-foreground">Local expertise with global standards</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Make.com Certified</div>
              <p className="text-muted-foreground">Official partner with advanced certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">n8n Specialists</div>
              <p className="text-muted-foreground">Open-source automation experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFlowgenix;