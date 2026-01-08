import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark/50 border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scissors className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-display font-bold gradient-text">
                LuxeCuts
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Premium salon experience with expert stylists and luxurious treatments.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Hair Cutting & Styling',
                'Hair Coloring',
                'Hair Treatments',
                'Makeup Artistry',
                'Hair Extensions',
                'Spa Services'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-white/70">123 Beauty Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-primary-400">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@luxecuts.com" className="text-white/70 hover:text-primary-400">
                  info@luxecuts.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} LuxeCuts Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;