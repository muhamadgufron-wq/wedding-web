"use client"
import { useState } from 'react';
import { 
  Sparkles, Palette, Users, Music, Calendar, Heart, 
  ChevronDown, ChevronUp, Check, X, Star, ArrowRight,
  MapPin, Clock, DollarSign, Camera, Mic, Flower2,
  Lightbulb, Utensils, HelpCircle, Shield, Trophy
} from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('premium');

  // Service packages data
  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: 'Rp 15.000.000',
      duration: '6 bulan planning',
      popular: false,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Konsultasi awal & konsep dasar',
        'Venue selection (3 pilihan)',
        'Basic vendor coordination',
        'Timeline planning sederhana',
        'Budget management dasar',
        'Day-of coordination (6 jam)',
        'Basic decoration package',
        'MC profesional',
        'Photography (4 jam)',
        'Guest management'
      ],
      notIncluded: [
        'Lighting design',
        'Live music/band',
        'Videography',
        'Flower arrangement premium',
        'Custom backdrop'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 'Rp 35.000.000',
      duration: '8 bulan planning',
      popular: true,
      color: 'from-rose-500 to-pink-500',
      features: [
        'Full wedding planning consultation',
        'Venue selection (5+ pilihan)',
        'Complete vendor coordination',
        'Detailed timeline planning',
        'Advanced budget management',
        'Day-of coordination (10 jam)',
        'Premium decoration & styling',
        'Lighting design profesional',
        'MC & entertainment coordination',
        'Photography & videography (8 jam)',
        'Flower arrangement premium',
        'Custom backdrop & photo booth',
        'Catering management & taste testing',
        'Guest management & RSVP'
      ],
      notIncluded: [
        'Live band (bisa di-add on)',
        'Traditional ceremony specialist'
      ]
    },
    {
      id: 'luxury',
      name: 'Luxury Package',
      price: 'Rp 60.000.000',
      duration: '12 bulan planning',
      popular: false,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Unlimited wedding planning consultation',
        'Venue selection & site visits',
        'Premium vendor network access',
        'Comprehensive timeline management',
        'Full budget management & tracking',
        'Full day coordination (12+ jam)',
        'Luxury decoration & custom design',
        'Advanced lighting & sound system',
        'Professional entertainment package',
        'Full day photography & videography',
        'Premium flower arrangements',
        'Custom backdrop & luxury photo booth',
        'Complete catering management',
        'Guest management & concierge service',
        'Live music/band coordination',
        'Traditional ceremony specialist',
        'Bridal party coordination',
        'Honeymoon planning assistance'
      ],
      notIncluded: []
    }
  ];

  // Services detail data
  const servicesDetail = {
    planning: {
      title: 'Wedding Planning Lengkap',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      description: 'Perencanaan menyeluruh dari konsep hingga eksekusi sempurna',
      services: [
        {
          name: 'Konsep dan Tema Pernikahan',
          icon: Heart,
          details: ['Mood board creation', 'Color scheme selection', 'Style consultation', 'Theme development']
        },
        {
          name: 'Venue Selection',
          icon: MapPin,
          details: ['Location scouting', 'Site visits coordination', 'Contract negotiation', 'Backup venue options']
        },
        {
          name: 'Vendor Coordination',
          icon: Users,
          details: ['Vendor screening & selection', 'Contract management', 'Timeline coordination', 'Quality assurance']
        },
        {
          name: 'Timeline Planning',
          icon: Clock,
          details: ['Master timeline creation', 'Milestone tracking', 'Task delegation', 'Contingency planning']
        },
        {
          name: 'Budget Management',
          icon: DollarSign,
          details: ['Budget allocation', 'Cost tracking', 'Payment scheduling', 'Financial reporting']
        }
      ]
    },
    decoration: {
      title: 'Dekorasi dan Styling',
      icon: Palette,
      color: 'from-purple-500 to-indigo-500',
      description: 'Transformasi venue menjadi impian dengan sentuhan artistik',
      services: [
        {
          name: 'Dekorasi Venue',
          icon: Star,
          details: ['Entrance decoration', 'Ceremony setup', 'Reception styling', 'Table arrangements']
        },
        {
          name: 'Flower Arrangement',
          icon: Flower2,
          details: ['Bridal bouquet', 'Centerpieces', 'Altar arrangements', 'Seasonal flower selection']
        },
        {
          name: 'Lighting Design',
          icon: Lightbulb,
          details: ['Ambient lighting', 'Accent lighting', 'Dance floor lighting', 'Photo lighting setup']
        },
        {
          name: 'Backdrop dan Photo Booth',
          icon: Camera,
          details: ['Custom backdrop design', 'Photo booth setup', 'Props selection', 'Digital backdrop options']
        }
      ]
    },
    catering: {
      title: 'Catering Management',
      icon: Utensils,
      color: 'from-emerald-500 to-teal-500',
      description: 'Pengalaman kuliner tak terlupakan untuk tamu istimewa',
      services: [
        {
          name: 'Menu Consultation',
          icon: Utensils,
          details: ['Menu planning', 'Dietary requirements', 'Cultural preferences', 'Seasonal specialties']
        },
        {
          name: 'Vendor Catering Terpercaya',
          icon: Shield,
          details: ['Vendor selection', 'Quality assessment', 'Halal certification', 'Service standards']
        },
        {
          name: 'Taste Testing Coordination',
          icon: Star,
          details: ['Menu tasting sessions', 'Quality evaluation', 'Portion sizing', 'Final menu confirmation']
        }
      ]
    },
    entertainment: {
      title: 'Entertainment',
      icon: Music,
      color: 'from-blue-500 to-cyan-500',
      description: 'Hiburan berkualitas untuk momen yang berkesan',
      services: [
        {
          name: 'MC Profesional',
          icon: Mic,
          details: ['Experienced MC', 'Bilingual capability', 'Custom script', 'Audience engagement']
        },
        {
          name: 'Live Music/Band',
          icon: Music,
          details: ['Band selection', 'Sound system setup', 'Playlist coordination', 'Special requests']
        },
        {
          name: 'Photography & Videography',
          icon: Camera,
          details: ['Professional photographers', 'Cinematic videography', 'Drone coverage', 'Same day editing']
        },
        {
          name: 'Traditional Ceremony',
          icon: Trophy,
          details: ['Cultural ceremonies', 'Traditional attire', 'Ritual coordination', 'Cultural consultants']
        }
      ]
    },
    coordination: {
      title: 'Wedding Day Coordination',
      icon: Calendar,
      color: 'from-rose-500 to-pink-500',
      description: 'Koordinasi sempurna di hari bahagia Anda',
      services: [
        {
          name: 'Day-of Coordination',
          icon: Calendar,
          details: ['Timeline execution', 'Vendor management', 'Setup supervision', 'Real-time adjustments']
        },
        {
          name: 'Timeline Execution',
          icon: Clock,
          details: ['Schedule management', 'Activity coordination', 'Time monitoring', 'Smooth transitions']
        },
        {
          name: 'Problem Solving',
          icon: Shield,
          details: ['Emergency handling', 'Quick solutions', 'Backup planning', 'Stress management']
        },
        {
          name: 'Guest Management',
          icon: Users,
          details: ['Guest coordination', 'Seating arrangements', 'Special needs assistance', 'Flow management']
        }
      ]
    }
  };

  // FAQ data
  const faqData = [
    {
      question: 'Berapa lama proses perencanaan wedding yang ideal?',
      answer: 'Idealnya 6-12 bulan untuk persiapan yang optimal. Untuk wedding dengan tema dan dekorasi kompleks, kami merekomendasikan 8-12 bulan. Namun kami juga bisa menangani wedding dengan waktu persiapan 3-6 bulan dengan koordinasi yang lebih intensif.'
    },
    {
      question: 'Apakah bisa custom paket sesuai budget dan kebutuhan?',
      answer: 'Tentu saja! Kami memahami setiap pasangan memiliki kebutuhan dan budget yang berbeda. Tim kami akan membantu menyesuaikan paket layanan sesuai dengan prioritas dan anggaran Anda tanpa mengurangi kualitas layanan.'
    },
    {
      question: 'Bagaimana jika ada perubahan rencana di tengah jalan?',
      answer: 'Kami memberikan fleksibilitas untuk perubahan rencana. Setiap perubahan akan kami diskusikan dampaknya terhadap timeline dan budget. Tim kami berpengalaman menangani perubahan last-minute dengan solusi terbaik.'
    },
    {
      question: 'Apakah ada garansi jika ada masalah di hari H?',
      answer: 'Ya, kami memberikan garansi kepuasan untuk layanan coordination di hari H. Tim koordinator berpengalaman kami akan standby full time dan memiliki backup plan untuk setiap kemungkinan yang terjadi.'
    },
    {
      question: 'Berapa banyak revisi yang bisa dilakukan untuk konsep dekorasi?',
      answer: 'Untuk paket Premium dan Luxury, kami memberikan unlimited revisi konsep hingga Anda puas. Untuk paket Basic, tersedia hingga 3 kali major revisi. Setiap revisi akan kami presentasikan dengan visualisasi yang jelas.'
    },
    {
      question: 'Apakah bisa menangani wedding di luar kota?',
      answer: 'Ya, kami melayani wedding di seluruh Indonesia. Untuk wedding di luar Jakarta, akan ada additional cost untuk transportation dan accommodation tim. Kami memiliki network vendor terpercaya di berbagai kota besar.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Paket Layanan Wedding Terlengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari konsep hingga eksekusi, kami menyediakan solusi menyeluruh untuk mewujudkan pernikahan impian Anda
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'overview'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Overview Paket
          </button>
            <button
            onClick={() => setActiveTab('details')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'details'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Detail Layanan
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'faq'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            FAQ Layanan
          </button>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-16">
              {/* Pricelist Image Section */}
              <div className="text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Pricelist Paket Layanan Kami</h3>
                    <p className="text-gray-600 text-lg">Berikut adalah daftar lengkap paket layanan wedding organizer kami dengan harga terbaru</p>
                  </div>
                  
                  {/* Placeholder for Pricelist Image */}
                  <div className="relative group">
                    <img
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Pricelist Paket Wedding Organizer"
                      className="w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                    />
                    
                    {/* Overlay untuk menunjukkan ini adalah placeholder */}
                    <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-6">
                        <h4 className="text-2xl font-bold mb-2">Pricelist Detail</h4>
                        <p className="text-lg mb-4">Klik untuk melihat pricelist dalam resolusi tinggi</p>
                        <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                          View Full Size
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Download/Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                      <ArrowRight size={20} />
                      Download Pricelist
                    </button>
                    <button className="border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <Heart size={20} />
                      Konsultasi Paket
                    </button>
                  </div>
                </div>
              </div>

              {/* Package Categories Overview */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Kategori Paket Layanan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  
                  {/* Basic Wedding Package */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Basic Wedding</h4>
                      <p className="text-gray-600 text-sm">Paket essential untuk pernikahan sederhana namun berkesan</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Wedding planning dasar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Dekorasi sederhana</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>MC & dokumentasi</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">Mulai dari</div>
                      <div className="text-2xl font-bold text-rose-600">Rp 15 Juta</div>
                    </div>
                  </div>

                  {/* Premium Wedding Package */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Star className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Wedding</h4>
                      <p className="text-gray-600 text-sm">Paket lengkap dengan layanan profesional terbaik</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Full wedding planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Premium decoration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Photo & videography</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">Mulai dari</div>
                      <div className="text-2xl font-bold text-rose-600">Rp 35 Juta</div>
                    </div>
                  </div>

                  {/* Luxury Wedding Package */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Trophy className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Luxury Wedding</h4>
                      <p className="text-gray-600 text-sm">Paket mewah dengan layanan all-inclusive premium</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Luxury planning service</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Custom luxury decoration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Premium entertainment</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">Mulai dari</div>
                      <div className="text-2xl font-bold text-purple-600">Rp 60 Juta</div>
                    </div>
                  </div>

                  {/* Custom Wedding Package */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Wedding</h4>
                      <p className="text-gray-600 text-sm">Paket disesuaikan dengan kebutuhan dan budget Anda</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Flexible planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Budget customization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-green-500" size={14} />
                        <span>Personal consultation</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">Konsultasi</div>
                      <div className="text-2xl font-bold text-emerald-600">Gratis</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="text-center bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Butuh Paket Yang Disesuaikan?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Setiap pasangan memiliki impian yang unik. Tim kami siap membantu menyesuaikan paket layanan sesuai dengan visi dan budget Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Konsultasi Gratis Sekarang
                  </button>
                  <button className="border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    Lihat Portfolio Kami
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="space-y-12">
              {Object.entries(servicesDetail).map(([key, service]) => (
                <div key={key} className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.services.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <item.icon className="text-gray-600" size={20} />
                          </div>
                          <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                        </div>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                              <ArrowRight size={14} className="text-rose-500" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <HelpCircle className="text-rose-500 mx-auto mb-4" size={48} />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600">Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang layanan kami</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="text-rose-500" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
                <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Hubungi Tim Konsultan Kami
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}