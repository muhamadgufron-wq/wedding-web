"use client"
import { useState, useEffect } from 'react';
import { Heart, Star, Calendar, Palette, Camera, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function WeddingHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample wedding images - replace with your actual images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wujudkan Pernikahan Impian Anda",
      subtitle: "Kami hadir untuk menciptakan momen yang tak terlupakan di hari bahagia Anda"
    },
    {
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Dekorasi Elegan & Mewah",
      subtitle: "Setiap detail dirancang dengan penuh perhatian untuk kesempurnaan hari istimewa Anda"
    },
    {
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
      title: "Layanan Profesional Terpercaya",
      subtitle: "Tim berpengalaman siap membantu mewujudkan pernikahan sesuai dengan visi dan budget Anda"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`Wedding slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="text-pink-400" size={20} />
                <span>500+ Pasangan Bahagia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="text-yellow-400" size={20} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="text-blue-400" size={20} />
                <span>5+ Tahun Pengalaman</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 z-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">2024</div>
              <div className="text-sm">Best Wedding Organizer</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-16 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Layanan Pernikahan Terlengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dari konsep hingga eksekusi, kami menyediakan solusi menyeluruh untuk mewujudkan pernikahan impian Anda
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Wedding Planning */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wedding Planning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Perencanaan lengkap dari A-Z termasuk timeline, vendor coordination, dan manajemen budget untuk pernikahan sempurna.
              </p>
              
              <a 
                href="/services/wedding-planning"
                className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 group/link"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Service 2: Decoration & Styling */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dekorasi & Styling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desain dekorasi custom sesuai tema dan budget. Dari minimalis elegant hingga luxury grandeur dengan detail sempurna.
              </p>
              
              <a 
                href="/services/decoration"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300 group/link"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Service 3: Photography & Videography */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography & Video</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dokumentasi profesional dengan tim photographer & videographer berpengalaman untuk mengabadikan setiap momen berharga.
              </p>
              
              <a 
                href="/services/photography"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/link"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Service 4: Venue & Catering */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Venue & Catering</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rekomendasi venue terbaik dan paket catering berkualitas dengan menu variatif sesuai selera dan tradisi keluarga.
              </p>
              
              <a 
                href="/services/venue-catering"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 group/link"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Merencanakan Pernikahan Impian?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Konsultasi gratis dengan wedding planner berpengalaman kami
              </p>
              <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Hubungi Kami Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}