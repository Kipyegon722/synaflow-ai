import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WorkflowExamples from '@/components/WorkflowExamples';
import WhySynaflow from '@/components/WhySynaflow';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WorkflowExamples />
      <WhySynaflow />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
