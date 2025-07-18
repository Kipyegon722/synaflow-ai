import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Lead Automation', href: '#services' },
    { name: 'Client Onboarding', href: '#services' },
    { name: 'AI Email Workflows', href: '#services' },
    { name: 'CRM Integration', href: '#services' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/victor-kipyegon/' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://www.x.com/victor_k_k_' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Kipyegon722' }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">Synaflow AI</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI-driven automations for Kenyan and global businesses. Scale smarter with intelligent workflows.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 smooth-transition"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary smooth-transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:kipyegon722@gmail.com"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  kipyegon722@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:0758663405"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  0758663405
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">18628-00100, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Synaflow AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground hover:text-primary text-sm smooth-transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary text-sm smooth-transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;