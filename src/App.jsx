import { useState } from 'react';
import { Scissors, Phone, MapPin, Clock, Instagram, Facebook, Star, ChevronRight, Menu, X } from 'lucide-react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
 import Booking from './components/Booking/Booking';
 import Footer from './components/Footer/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services/>
      <Portfolio/>
      <Booking/>
      <Footer/>
     
      
      {/* Floating Booking Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-full shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-110 group">
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Book Now
        </span>
      </button>
    </div>
  );
}

export default App;