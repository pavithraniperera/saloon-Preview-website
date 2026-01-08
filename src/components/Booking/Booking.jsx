import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Scissors } from 'lucide-react';
import { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    'Haircut & Styling',
    'Hair Coloring',
    'Hair Treatment',
    'Makeup',
    'Extensions',
    'Spa Package'
  ];

  const timeSlots = [
    '9:00 AM', '10:30 AM', '12:00 PM',
    '2:00 PM', '3:30 PM', '5:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm">Book Your Visit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready for Your
              <span className="block gradient-text">Transformation?</span>
            </h2>
            
            <p className="text-white/70 mb-8">
              Book your appointment with our expert stylists. We'll help you achieve 
              the perfect look you've been dreaming of.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <User className="w-6 h-6" />,
                  title: "Expert Stylists",
                  desc: "15+ certified professionals"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Flexible Hours",
                  desc: "Open 7 days a week"
                },
                {
                  icon: <Scissors className="w-6 h-6" />,
                  title: "Premium Products",
                  desc: "Only top-quality brands"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-500/10 flex items-center justify-center">
                    <div className="text-primary-400">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="text-white/60">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">Book Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary-400 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary-400 transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/70 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary-400 transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/70 mb-2">Select Service</label>
                  <select
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-400 transition-colors appearance-none text-black"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-2">Select Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="date"
                        required
                        className="w-full bg-black/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary-400 transition-colors"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2">Select Time</label>
                    <select
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-400 transition-colors appearance-none text-black"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/30 transition-all mt-6"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;