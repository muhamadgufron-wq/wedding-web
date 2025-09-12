"use client"
import { 
  Heart, Phone, Mail, MapPin, Instagram, Facebook, 
  Twitter, Youtube, Star, Award, ArrowRight, Clock, Send, Sparkles
} from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-rose-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl">
                    <Heart className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Eternal Moments</h3>
                    <p className="text-gray-400">Wedding Organizer</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Menciptakan momen tak terlupakan di hari bahagia Anda dengan sentuhan profesional dan detail yang sempurna.
                </p>
                
                {/* Awards */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="text-yellow-400" size={20} />
                    <span className="text-sm text-gray-300">Best Wedding Organizer 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-400" size={20} />
                    <span className="text-sm text-gray-300">4.9/5 Rating dari 500+ Client</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-6 flex items-center">
                  <Sparkles className="mr-2 text-rose-400" size={20} />
                  Layanan Kami
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/planning" className="text-gray-300 hover:text-rose-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Wedding Planning
                    </a>
                  </li>
                  <li>
                    <a href="/services/decoration" className="text-gray-300 hover:text-rose-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Decoration & Styling
                    </a>
                  </li>
                  <li>
                    <a href="/services/photography" className="text-gray-300 hover:text-rose-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Photography & Video
                    </a>
                  </li>
                  <li>
                    <a href="/services/venue" className="text-gray-300 hover:text-rose-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Venue & Catering
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-lg mb-6 flex items-center">
                  <Phone className="mr-2 text-rose-400" size={20} />
                  Hubungi Kami
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-rose-400 mt-1" size={18} />
                    <div>
                      <p className="text-gray-300">
                        Jl. Merdeka No. 123<br />
                        Jakarta Pusat 10110<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-rose-400" size={18} />
                    <a href="tel:+6281234567890" className="text-gray-300 hover:text-rose-400 transition-colors">
                      +62 812-3456-7890
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-rose-400" size={18} />
                    <a href="mailto:hello@eternalmoments.id" className="text-gray-300 hover:text-rose-400 transition-colors">
                      hello@eternalmoments.id
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-rose-400" size={18} />
                    <div className="text-gray-300">
                      <p>Senin - Sabtu</p>
                      <p className="text-sm text-gray-400">09:00 - 18:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter & Social */}
              <div>
                <h4 className="font-bold text-lg mb-6 flex items-center">
                  <Heart className="mr-2 text-rose-400" size={20} />
                  Stay Connected
                </h4>
                
                {/* Newsletter */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm mb-4">
                    Dapatkan tips dan inspirasi wedding terbaru
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-rose-500"
                    />
                    <button className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3 rounded-r-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                      <Send size={18} />
                    </button>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <p className="text-gray-300 text-sm mb-4">Follow us</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-rose-500 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-blue-500 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-blue-400 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-red-500 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <p>&copy; 2024 Eternal Moments Wedding Organizer. All rights reserved.</p>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-rose-400 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-gray-400 hover:text-rose-400 transition-colors">
                    Terms of Service
                  </a>
                  <a href="/sitemap" className="text-gray-400 hover:text-rose-400 transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-2"
        >
          <Phone size={24} />
          <span className="hidden sm:block font-medium">WhatsApp</span>
        </a>
      </div>
    </>
  );
}