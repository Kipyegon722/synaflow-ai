import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Faith Wanjiku',
      company: 'Real Estate Consultant',
      role: 'Nairobi',
      content: 'I used to manually respond to all my leads. Now I have a smart WhatsApp follow-up bot and a CRM I didn\'t even have before. Game changer!',
      rating: 5,
      result: '50% faster responses'
    },
    {
      name: 'Brian Kiptoo',
      company: 'Online Business Coach',
      role: 'Eldoret',
      content: 'Synaflow AI automated my customer onboarding process in just 3 days. It\'s like having a digital assistant I don\'t pay monthly.',
      rating: 5,
      result: '3-day setup'
    },
    {
      name: 'Winnie Muthoni',
      company: 'Legal Services',
      role: 'Mombasa',
      content: 'The AI-generated emails are better than what I\'d write myself. Very impressed with the quality and personalization.',
      rating: 5,
      result: 'Better email quality'
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses are transforming their operations with our AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 relative elegant-shadow hover:border-primary/50 smooth-transition"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                
                <div className="mt-3 inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Automations Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;