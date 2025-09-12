"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { 
  Menu, X, Heart, ChevronDown, Star, Camera, 
  Users, Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items
  const menuItems = [
    { 
      name: 'Beranda', 
      href: '/',
      icon: null
    },
    { 
      name: 'Layanan', 
      href: '#services',
      icon: ChevronDown,
      dropdown: [
        { name: 'Wedding Planning', href: '/services/planning', icon: Sparkles },
        { name: 'Decoration & Styling', href: '/services/decoration', icon: Star },
        { name: 'Photography & Video', href: '/services/photography', icon: Camera },
        { name: 'Venue & Catering', href: '/services/venue', icon: Users }
      ]
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio',
      icon: null
    },
    { 
      name: 'Tentang Kami', 
      href: '/about',
      icon: null
    },
    { 
      name: 'Testimoni', 
      href: '#testimonials',
      icon: null
    },
    { 
      name: 'Kontak', 
      href: '#contact',
      icon: null
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-rose-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Heart className="text-white" size={28} />
            </div>
            <div>
              <h1 className={`font-bold text-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Tangerang.Wedding
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Wedding Organizer
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-rose-600 hover:bg-rose-50' 
                      : 'text-white hover:text-rose-200 hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.icon && <item.icon size={16} />}
                </Link>


                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4 space-y-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          href={dropItem.href}
                          className="flex items-center space-x-3 p-3 rounded-xl text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-all duration-200"
                        >
                          <dropItem.icon size={20} className="text-rose-500" />
                          <span className="font-medium">{dropItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Konsultasi Gratis
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200"
                    onClick={() => item.dropdown && toggleDropdown(index)}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.icon && <item.icon size={16} />}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          href={dropItem.href}
                          className="flex items-center space-x-3 p-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200"
                        >
                          <dropItem.icon size={16} className="text-rose-500" />
                          <span>{dropItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}