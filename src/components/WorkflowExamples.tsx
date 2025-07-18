import { ArrowRight, ArrowDown } from 'lucide-react';
import automationDiagram from '@/assets/automation-diagram.jpg';

const WorkflowExamples = () => {
  const workflows = [
    {
      title: 'Lead Capture to CRM',
      steps: [
        'Website form submission',
        'AI lead qualification',
        'CRM data entry',
        'Sales team notification'
      ]
    },
    {
      title: 'Client Onboarding',
      steps: [
        'Welcome email sequence',
        'Document collection',
        'Calendar scheduling',
        'Project kickoff'
      ]
    },
    {
      title: 'E-commerce Order Flow',
      steps: [
        'Order confirmation',
        'Inventory update',
        'Shipping notification',
        'Follow-up review request'
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Workflow Examples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI automations work in practice with these common business workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Workflow Diagrams */}
          <div className="space-y-8">
            {workflows.map((workflow, index) => (
              <div key={workflow.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {workflow.title}
                </h3>
                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                        {stepIndex + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                      {stepIndex < workflow.steps.length - 1 && (
                        <ArrowDown className="w-4 h-4 text-primary ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Diagram */}
          <div className="relative">
            <img 
              src={automationDiagram} 
              alt="Automation Workflow Diagram" 
              className="rounded-2xl elegant-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            
            {/* Animated flow indicators */}
            <div className="absolute top-1/2 left-4 right-4 h-px">
              <div className="workflow-line relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-workflow-flow" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Automate Your Workflows?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can build custom automations for your specific business needs.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition glow-effect">
              Schedule a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowExamples;