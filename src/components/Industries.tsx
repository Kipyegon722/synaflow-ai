import { Home, GraduationCap, Briefcase, ShoppingCart } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Automate lead qualification, property alerts, client follow-ups, and transaction management.',
      benefits: ['Lead scoring & routing', 'Automated property matching', 'Contract management']
    },
    {
      icon: GraduationCap,
      title: 'Coaches & Consultants',
      description: 'Streamline client acquisition, onboarding, scheduling, and program delivery workflows.',
      benefits: ['Discovery call booking', 'Client progress tracking', 'Content delivery automation']
    },
    {
      icon: Briefcase,
      title: 'Service Businesses',
      description: 'Optimize project management, client communications, invoicing, and service delivery.',
      benefits: ['Project status updates', 'Automated invoicing', 'Client feedback collection']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Enhance customer journeys, inventory management, order processing, and support.',
      benefits: ['Cart abandonment recovery', 'Inventory alerts', 'Customer support automation']
    }
  ];

  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industries We Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI automation solutions are designed to solve real challenges across various industries,
            helping businesses scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.title}
              className="bg-card border border-border rounded-xl p-8 group hover:border-primary/50 smooth-transition elegant-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 smooth-transition">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;