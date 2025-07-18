import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection</h2>
              <p>
                Synaflow AI collects information you provide directly to us, such as when you contact us 
                for automation services, fill out forms, or communicate with us via email or WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our AI automation services</li>
                <li>To communicate with you about your projects and services</li>
                <li>To send you relevant updates about our services (with your consent)</li>
                <li>To analyze and improve our service offerings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p>
                <strong>We do not share your information with third parties.</strong> Your data is used 
                solely for automation services and communication. We maintain strict confidentiality 
                regarding all client information and business processes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
                This Privacy Policy may be updated from time to time. We will notify you of any 
                significant changes by posting the new policy on this page.
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

export default Privacy;