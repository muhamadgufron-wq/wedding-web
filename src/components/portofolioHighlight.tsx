"use client"
import { useState } from 'react';
import { Camera, Heart, Eye, X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

export default function PortfolioHighlight() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Portfolio gallery data - replace with your actual wedding photos
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Elegant Garden Wedding",
      couple: "Sarah & Michael",
      location: "Bali",
      date: "Oktober 2023",
      category: "Outdoor Wedding",
      description: "Pernikahan romantis di taman dengan dekorasi minimalis elegan dan nuansa natural yang memukau."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Ballroom Reception",
      couple: "Rina & David",
      location: "Jakarta",
      date: "Desember 2023",
      category: "Indoor Wedding",
      description: "Resepsi mewah dengan dekorasi glamour dan lighting yang menciptakan suasana magis sepanjang malam."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Traditional Javanese Ceremony",
      couple: "Maya & Ahmad",
      location: "Yogyakarta",
      date: "September 2023",
      category: "Traditional Wedding",
      description: "Upacara adat Jawa yang sakral dengan detail tradisional yang autentik dan penuh makna budaya."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Beach Wedding Sunset",
      couple: "Lisa & Tony",
      location: "Lombok",
      date: "November 2023",
      category: "Beach Wedding",
      description: "Pernikahan pantai yang romantis dengan backdrop sunset yang menawan dan dekorasi nautical yang fresh."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1525258117556-20e10085cc81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Intimate Garden Party",
      couple: "Dina & Reza",
      location: "Bandung",
      date: "Agustus 2023",
      category: "Garden Wedding",
      description: "Perayaan intim di taman pribadi dengan suasana hangat dan dekorasi rustic yang menawan."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Minimalist Wedding",
      couple: "Sari & Budi",
      location: "Surabaya",
      date: "Juli 2023",
      category: "Modern Wedding",
      description: "Konsep minimalis modern dengan clean design dan fokus pada momen kebahagiaan pasangan."
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vintage Rustic Celebration",
      couple: "Nina & Andi",
      location: "Malang",
      date: "Juni 2023",
      category: "Rustic Wedding",
      description: "Tema vintage rustic dengan sentuhan antik dan dekorasi kayu yang menciptakan atmosfer hangat."
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Royal Palace Wedding",
      couple: "Dewi & Rizky",
      location: "Solo",
      date: "Mei 2023",
      category: "Luxury Wedding",
      description: "Pernikahan royal dengan kemegahan istana dan detail luxury yang memukau setiap mata."
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = portfolioItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % portfolioItems.length;
    } else {
      newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    }
    
    setSelectedImage(portfolioItems[newIndex]);
  };

  return (
    <>
      <section className="py-2 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Camera size={16} />
              Portfolio Kami
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              Galeri Wedding Terbaik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi momen-momen indah dari pernikahan yang telah kami tangani dengan penuh dedikasi dan kreativitas
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${index === 1 ? 'lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredImage(item.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => openLightbox(item)}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'aspect-square' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm mb-2">{item.couple}</p>
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={16} className="text-white" />
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-4 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Wedding Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">50+</div>
                <div className="text-gray-600">Venues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600 mb-6">
              Ingin melihat portfolio lengkap kami?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Lihat Portfolio Lengkap
              </button>
              <button className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Request Konsultasi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 p-3 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 p-3 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image */}
            <div className="relative max-h-[80vh] max-w-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  <div className="mb-2">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-lg mb-2">{selectedImage.couple}</p>
                  <p className="text-white/90 mb-3">{selectedImage.description}</p>
                  <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {selectedImage.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {selectedImage.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}