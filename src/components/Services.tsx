import { Bot, Mail, Users, Database, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'AI-Powered Lead Capture Systems',
      description: 'Automatically collect, qualify, and follow up with leads via email, WhatsApp, or CRM using advanced LLMs.'
    },
    {
      icon: Users,
      title: 'Client Onboarding Automation',
      description: 'Convert inquiries into clients with streamlined onboarding: forms, docs, notifications, and smart routing.'
    },
    {
      icon: Mail,
      title: 'Smart Email & Messaging Workflows',
      description: 'Auto-generate personalized replies, follow-ups, and drip campaigns using GPT-4, Claude, and Gemini.'
    },
    {
      icon: Bot,
      title: 'Social Media Content Automation',
      description: 'Use AI to generate and post captions, hashtags, visuals, and schedule content across platforms.'
    },
    {
      icon: Database,
      title: 'Sales Process Optimization',
      description: 'Automate task assignments, reminders, and updates for your sales pipeline with intelligent workflows.'
    },
    {
      icon: Zap,
      title: 'Custom Workflow Integrations',
      description: 'We analyze your business and create bespoke automation blueprints that save time and money.'
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
            Synaflow AI builds intelligent, reliable, and tailored automation systems for businesses using 
            state-of-the-art LLMs including GPT-4 Turbo, Claude, Gemini, Mistral, and open-source models like LLaMA.
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