import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Palette, Zap, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Styling",
      description: "Precision cuts, modern styles, and personalized consultations",
      price: "From $45",
      features: ["Consultation", "Wash & Style", "Finishing"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Hair Coloring",
      description: "Expert color correction, balayage, and creative coloring",
      price: "From $85",
      features: ["Color Analysis", "Treatment", "Style"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Hair Treatments",
      description: "Revitalizing treatments for damaged or dry hair",
      price: "From $60",
      features: ["Keratin", "Hydration", "Repair"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Makeup Artistry",
      description: "Professional makeup for any occasion",
      price: "From $75",
      features: ["Bridal", "Evening", "Special Events"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hair Extensions",
      description: "Premium quality extensions for volume and length",
      price: "From $200",
      features: ["Consultation", "Installation", "Aftercare"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Spa Services",
      description: "Relaxing facial treatments and skincare",
      price: "From $90",
      features: ["Facial", "Massage", "Skincare"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Premium <span className="gradient-text">Beauty Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience our range of expert services designed to enhance your natural beauty
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/15 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-primary-400">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-2xl font-bold gradient-text">{service.price}</span>
                <button className="text-primary-400 hover:text-primary-300 transition-colors">
                  Book Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;