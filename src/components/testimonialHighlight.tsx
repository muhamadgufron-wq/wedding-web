"use client"
import { useState, useEffect } from 'react';
import { Star, Quote, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialHighlight() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Sample testimonials data - replace with your actual client data
  const testimonials = [
    {
      id: 1,
      name: "Sarah & David",
      wedding_date: "Oktober 2023",
      location: "Bali",
      photo: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      client_photo: "https://images.unsplash.com/photo-1494790108755-2616b612b2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Tim wedding organizer terbaik yang pernah kami temui! Mereka berhasil mewujudkan pernikahan impian kami dengan detail yang sempurna. Dari awal konsultasi hingga hari H, semuanya berjalan lancar dan sesuai harapan. Terima kasih telah membuat hari spesial kami menjadi tak terlupakan!",
      highlight: "Pernikahan Impian di Bali"
    },
    {
      id: 2,
      name: "Rina & Ahmad",
      wedding_date: "Desember 2023",
      location: "Jakarta",
      photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      client_photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Pelayanan yang sangat profesional dan memuaskan! Tim sangat membantu dalam koordinasi vendor dan memastikan semua berjalan sesuai timeline. Dekorasi yang mereka buat sangat elegan dan sesuai dengan tema yang kami inginkan. Highly recommended untuk pasangan yang ingin pernikahan sempurna!",
      highlight: "Elegant Garden Wedding"
    },
    {
      id: 3,
      name: "Maya & Rizki",
      wedding_date: "September 2023",
      location: "Bandung",
      photo: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      client_photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Luar biasa! Mereka tidak hanya mengatur acara, tapi juga memberikan saran-saran kreatif yang membuat pernikahan kami semakin istimewa. Photography dan videography teamnya juga sangat profesional. Hasil dokumentasinya melebihi ekspektasi kami. Worth every penny!",
      highlight: "Traditional Javanese Wedding"
    },
    {
      id: 4,
      name: "Lisa & Tony",
      wedding_date: "November 2023",
      location: "Yogyakarta",
      photo: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      client_photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Tim yang sangat responsif dan detail oriented! Mereka membantu kami mengatur budget dengan bijak tanpa mengurangi kualitas. Semua vendor yang mereka rekomendasikan sangat berkualitas. Acara berjalan sangat lancar dan semua tamu memberikan pujian. Terima kasih banyak!",
      highlight: "Intimate Modern Wedding"
    }
  ];

  // Auto testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-rose-200/40 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart size={16} />
            Testimoni Client
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cerita Bahagia Dari Client Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepercayaan dan kepuasan client adalah prioritas utama kami dalam setiap pernikahan yang kami tangani
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Wedding Photo */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={currentClient.photo}
                    alt={`${currentClient.name} Wedding`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Photo Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {currentClient.highlight}
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="space-y-6">
                {/* Quote Icon */}
                <Quote size={40} className="text-pink-400" />

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {renderStars(currentClient.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">({currentClient.rating}/5)</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                  "{currentClient.review}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={currentClient.client_photo}
                    alt={currentClient.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{currentClient.name}</h4>
                    <p className="text-gray-500">
                      {currentClient.wedding_date} • {currentClient.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
            <div className="text-gray-600">Pasangan Bahagia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ingin menjadi bagian dari cerita bahagia selanjutnya?
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Mulai Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}