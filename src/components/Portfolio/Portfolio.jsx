import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      category: 'haircuts',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600',
      title: 'Modern Bob Cut',
      rating: 4.9
    },
    {
      category: 'coloring',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mPTX16AzAud1OlRlMHBYrf-vdZKLD6cvXg&s?auto=format&fit=crop&w=600',
      title: 'Balayage Masterpiece',
      rating: 5.0
    },
    {
      category: 'styling',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600',
      title: 'Elegant Updo',
      rating: 4.8
    },
    {
      category: 'makeup',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600',
      title: 'Bridal Makeup',
      rating: 4.9
    },
    {
      category: 'treatments',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600',
      title: 'Keratin Smoothing',
      rating: 4.7
    },
    {
      category: 'extensions',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600',
      title: 'Volume Extensions',
      rating: 4.9
    }
  ];

  const filters = ['all', 'haircuts', 'coloring', 'styling', 'makeup', 'treatments'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our <span className="gradient-text">Work Portfolio</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse through our collection of transformations and satisfied clients
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="glass-card rounded-xl p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${
                        i < Math.floor(item.rating) ? 'text-accent fill-accent' : 'text-white/30'
                      }`} />
                    ))}
                    <span className="ml-2 text-white/70">{item.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;