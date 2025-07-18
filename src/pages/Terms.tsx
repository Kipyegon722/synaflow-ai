import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Agreement</h2>
              <p>
                By using Synaflow AI services, you agree to fair use of AI tools and automation systems. 
                Our services are designed to help businesses scale through intelligent automation workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Delivery</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom AI workflows are typically delivered within 2-7 days per setup</li>
                <li>All deliverables include full documentation and training</li>
                <li>We provide ongoing support and iteration for delivered systems</li>
                <li>Final results depend on the accuracy of client input and business environment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information about business processes and requirements</li>
                <li>Ensure access to necessary systems and platforms for integration</li>
                <li>Test and provide feedback on delivered automation systems</li>
                <li>Use AI tools and automations in compliance with platform terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Revisions and Support</h2>
              <p>
                We offer revisions and limited support for each delivered system. The scope of 
                revisions will be defined in the project agreement. Additional modifications 
                beyond the agreed scope may incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                While we strive for excellence in all our automation solutions, final results 
                depend on various factors including the accuracy of client input, business 
                environment, and proper implementation of provided systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p>
                Custom automation workflows developed for your business become your property upon 
                full payment. However, we retain the right to use general methodologies and 
                non-confidential techniques in future projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms or our services, contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p>Email: kipyegon722@gmail.com</p>
                <p>Phone: 0758663405</p>
                <p>Address: 18628-00100, Nairobi, Kenya</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates</h2>
              <p>
                These terms may be updated from time to time. Continued use of our services 
                constitutes acceptance of any updates.
              </p>
              <p className="mt-4 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;