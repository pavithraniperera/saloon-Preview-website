import { motion } from 'framer-motion';
import { Scissors, Sparkles, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-900/20 to-dark"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm">Premium Salon Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Transform Your
              <span className="block gradient-text">Style & Confidence</span>
            </h1>
            
            <p className="text-white/70 text-lg mb-8">
              Experience luxury haircare, expert styling, and personalized beauty treatments 
              in our state-of-the-art salon. Where artistry meets perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/30 transition-all flex items-center justify-center group">
                Book Appointment
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="glass-card px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
                View Services
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '15+', label: 'Experts' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative glass-card rounded-3xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800"
                  alt="Salon Interior"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Sarah Miller</div>
                      <div className="text-white/60 text-sm">Master Stylist</div>
                    </div>
                  </div>
                  <p className="text-sm">"15 years of transforming beauty with precision cuts."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;