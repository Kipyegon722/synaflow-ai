import { Zap, Brain, DollarSign, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Quick Deployment (2–7 days)",
    description: "Get your custom AI workflows running fast with full documentation and training included."
  },
  {
    icon: Brain,
    title: "Cut operational hours by 30–70%",
    description: "Eliminate repetitive manual tasks and improve accuracy while scaling with lean staff."
  },
  {
    icon: DollarSign,
    title: "Measurable ROI",
    description: "Track time saved, costs cut, and leads increased with our intelligent automation systems."
  },
  {
    icon: Target,
    title: "Long-term Support",
    description: "We provide ongoing iteration and support to ensure your automations continue delivering results."
  }
];

const WhySynaflow = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How We Help Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build an AI-driven growth system without hiring developers. Respond to leads faster, 
            eliminate manual tasks, and scale operations intelligently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="workflow-node group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 smooth-transition">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySynaflow;