import { Bot, Mail, Users, Database, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Automation',
      description: 'Capture, qualify, and nurture leads automatically with AI-powered workflows that work 24/7.'
    },
    {
      icon: Users,
      title: 'Client Onboarding',
      description: 'Streamline client intake with automated forms, welcome sequences, and document collection.'
    },
    {
      icon: Mail,
      title: 'AI Email Workflows',
      description: 'Intelligent email sequences that respond, follow up, and convert based on customer behavior.'
    },
    {
      icon: Database,
      title: 'CRM Sync',
      description: 'Keep all your tools in perfect sync with bi-directional data flows and real-time updates.'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Deploy smart chatbots that handle customer inquiries and qualify leads automatically.'
    },
    {
      icon: Zap,
      title: 'Custom Automations',
      description: 'Bespoke automation solutions tailored to your unique business processes and requirements.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in building intelligent automation systems that eliminate repetitive tasks 
            and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="workflow-node group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;