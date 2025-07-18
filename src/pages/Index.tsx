import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WorkflowExamples from '@/components/WorkflowExamples';
import WhyFlowgenix from '@/components/WhyFlowgenix';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WorkflowExamples />
      <WhyFlowgenix />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
