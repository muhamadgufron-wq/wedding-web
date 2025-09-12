"use client"
import { useState } from 'react';
import { Heart, Star, Users, Award, Calendar, CheckCircle, Quote, Trophy, Target, Eye } from 'lucide-react';

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState('story');

  // Company data
  const companyData = {
    story: {
      title: "Perjalanan Kami",
      content: "Eternal Moments Wedding Organizer didirikan pada tahun 2018 oleh pasangan suami istri, Sarah dan Michael Thompson, yang memiliki passion mendalam dalam menciptakan momen-momen tak terlupakan. Berawal dari pengalaman pribadi mereka dalam merencanakan pernikahan sendiri yang penuh tantangan, mereka memutuskan untuk membantu pasangan lain mewujudkan pernikahan impian tanpa stress.\n\nDari sebuah studio kecil di Jakarta, kini kami telah berkembang menjadi salah satu wedding organizer terpercaya di Indonesia dengan lebih dari 500 pernikahan yang telah berhasil kami tangani. Setiap wedding yang kami kerjakan adalah cerminan dari dedikasi, kreativitas, dan profesionalisme tim kami.",
      highlights: ["Didirikan 2018", "500+ Wedding", "15+ Kota", "50+ Vendor Partner"]
    },
    vision: {
      title: "Visi & Misi Kami",
      vision: "Menjadi wedding organizer terdepan di Indonesia yang dikenal karena inovasi, kualitas, dan kemampuan menciptakan pernikahan yang tidak hanya indah secara visual, tetapi juga bermakna dan berkesan sepanjang masa.",
      mission: [
        "Menyediakan layanan wedding planning yang komprehensif dan personal",
        "Menghadirkan inovasi terbaru dalam industri pernikahan",
        "Membangun partnership yang kuat dengan vendor-vendor terbaik",
        "Memberikan pengalaman yang melampaui ekspektasi setiap klien",
        "Menjaga nilai-nilai tradisi sambil mengadaptasi tren modern"
      ]
    }
  };

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Thompson",
      position: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "8+ Years",
      specialty: "Creative Design & Styling",
      description: "Lulusan Fashion Design dari London College of Fashion dengan pengalaman 8 tahun di industri wedding. Sarah dikenal karena kemampuannya mengubah visi menjadi kenyataan yang menakjubkan."
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "Co-Founder & Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "10+ Years",
      specialty: "Project Management & Logistics",
      description: "Background di Event Management dengan pengalaman mengelola acara skala besar. Michael memastikan setiap detail teknis berjalan sempurna di hari H."
    },
    {
      id: 3,
      name: "Diana Rossi",
      position: "Senior Wedding Planner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "6+ Years",
      specialty: "Traditional & Cultural Weddings",
      description: "Spesialis dalam upacara adat dan tradisional dari berbagai budaya. Diana telah menangani lebih dari 150 pernikahan dengan tema tradisional."
    },
    {
      id: 4,
      name: "Kevin Sutanto",
      position: "Lead Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "5+ Years",
      specialty: "Venue Management & Vendor Coordination",
      description: "Expert dalam koordinasi vendor dan manajemen venue. Kevin dikenal karena kemampuannya menyelesaikan masalah dengan cepat dan efektif."
    }
  ];

  // Achievements data
  const achievements = [
    {
      year: "2024",
      title: "Best Wedding Organizer Indonesia",
      organization: "Indonesian Wedding Awards",
      type: "award"
    },
    {
      year: "2023",
      title: "Top 10 Wedding Planner Asia",
      organization: "Asia Wedding Excellence",
      type: "recognition"
    },
    {
      year: "2023",
      title: "Certified Wedding Planner International",
      organization: "International Association of Wedding Planners",
      type: "certification"
    },
    {
      year: "2022",
      title: "Innovation in Wedding Design",
      organization: "Wedding Industry Council",
      type: "award"
    },
    {
      year: "2022",
      title: "Excellence in Customer Service",
      organization: "Indonesia Service Excellence Awards",
      type: "award"
    },
    {
      year: "2021",
      title: "Sustainable Wedding Practices",
      organization: "Green Wedding Alliance",
      type: "certification"
    }
  ];

  // Philosophy points
  const philosophyPoints = [
    {
      icon: Heart,
      title: "Love First",
      description: "Setiap keputusan dimulai dari cinta - cinta pasangan, cinta keluarga, dan cinta terhadap detail yang membuat pernikahan menjadi istimewa."
    },
    {
      icon: Star,
      title: "Excellence in Everything",
      description: "Kami berkomitmen pada standar kualitas tertinggi dalam setiap aspek, dari konsep hingga eksekusi akhir."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Pernikahan adalah hasil kolaborasi yang indah antara pasangan, keluarga, dan tim profesional kami."
    },
    {
      icon: CheckCircle,
      title: "Attention to Detail",
      description: "Detail kecil membuat perbedaan besar. Kami memastikan setiap elemen mendapat perhatian yang layak."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart size={16} />
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eternal Moments Wedding Organizer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari sekedar wedding organizer, kami adalah partner terpercaya dalam mewujudkan pernikahan impian Anda
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'story'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Perjalanan Kami
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'vision'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Visi & Misi
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'team'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Tim Kami
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'achievements'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Pencapaian
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'philosophy'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md'
            }`}
          >
            Filosofi
          </button>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500">
          {/* Company Story Tab */}
          {activeTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{companyData.story.title}</h3>
                <div className="prose text-gray-600 leading-relaxed space-y-4">
                  {companyData.story.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg">{paragraph}</p>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {companyData.story.highlights.map((highlight, index) => (
                    <div key={index} className="bg-rose-50 p-4 rounded-xl text-center">
                      <div className="font-bold text-rose-600">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600">2018</div>
                    <div className="text-sm text-gray-600">Didirikan</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vision & Mission Tab */}
          {activeTab === 'vision' && (
            <div className="space-y-12">
              {/* Vision */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="text-rose-600" size={32} />
                  <h3 className="text-3xl font-bold text-gray-900">Visi Kami</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{companyData.vision.vision}</p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-purple-600" size={32} />
                  <h3 className="text-3xl font-bold text-gray-900">Misi Kami</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyData.vision.mission.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-purple-600 mt-1" size={20} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Tim Profesional Kami</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-rose-100"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {member.experience}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-rose-600 font-semibold mb-2">{member.position}</p>
                      <p className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">{member.specialty}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Pencapaian & Sertifikasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-rose-500 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {achievement.type === 'award' ? (
                          <Award className="text-yellow-500" size={32} />
                        ) : achievement.type === 'certification' ? (
                          <CheckCircle className="text-green-500" size={32} />
                        ) : (
                          <Trophy className="text-blue-500" size={32} />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-rose-600 mb-1">{achievement.year}</div>
                        <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm">{achievement.organization}</p>
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          achievement.type === 'award' ? 'bg-yellow-100 text-yellow-700' :
                          achievement.type === 'certification' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Philosophy Tab */}
          {activeTab === 'philosophy' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Filosofi Kami</h3>
              <div className="text-center mb-12">
                <Quote className="text-rose-400 mx-auto mb-4" size={48} />
                <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
                  "Setiap pernikahan adalah kisah cinta yang unik. Tugas kami adalah membantu menceritakan kisah tersebut dengan cara yang paling indah dan bermakna."
                </p>
                <p className="text-gray-500 mt-4">- Sarah Thompson, Creative Director</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {philosophyPoints.map((point, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <point.icon className="text-rose-600" size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{point.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Wedding Sukses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="opacity-90">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Kota di Indonesia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Kepuasan Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}