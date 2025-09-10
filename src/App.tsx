import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Camera, 
  BookOpen, 
  Headphones, 
  Calendar, 
  Mountain, 
  Users, 
  Globe,
  ChevronRight,
  Play,
  Download,
  Star,
  Clock,
  Navigation
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tours', 'map', 'archives', 'audio', 'calendar'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      established: "1966",
      image: "https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The largest monastery in Sikkim, seat of the Karmapa",
      tours: 245,
      rating: 4.9
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      established: "1705",
      image: "https://images.pexels.com/photos/7139334/pexels-photo-7139334.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "One of the oldest monasteries in Sikkim",
      tours: 189,
      rating: 4.8
    },
    {
      id: 3,
      name: "Enchey Monastery",
      location: "Gangtok",
      established: "1909",
      image: "https://images.pexels.com/photos/3264730/pexels-photo-3264730.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Famous for its annual Cham dance",
      tours: 167,
      rating: 4.7
    }
  ];

  const events = [
    {
      id: 1,
      name: "Losar Festival",
      date: "February 15-17, 2025",
      monastery: "Multiple Monasteries",
      type: "Festival",
      description: "Tibetan New Year celebration with traditional dances and ceremonies"
    },
    {
      id: 2,
      name: "Buddha Jayanti",
      date: "May 12, 2025",
      monastery: "All Monasteries",
      type: "Religious",
      description: "Celebration of Buddha's birthday with special prayers and offerings"
    },
    {
      id: 3,
      name: "Hemis Festival",
      date: "June 20-21, 2025",
      monastery: "Hemis Monastery",
      type: "Cultural",
      description: "Sacred masked dances commemorating Guru Padmasambhava"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-red-800" />
              <span className="text-xl font-bold text-gray-900">Monastery360</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'tours', label: 'Virtual Tours' },
                { id: 'map', label: 'Interactive Map' },
                { id: 'archives', label: 'Archives' },
                { id: 'audio', label: 'Audio Guide' },
                { id: 'calendar', label: 'Events' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-red-800 border-b-2 border-red-800'
                      : 'text-gray-700 hover:text-red-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'tours', label: 'Virtual Tours' },
                  { id: 'map', label: 'Interactive Map' },
                  { id: 'archives', label: 'Archives' },
                  { id: 'audio', label: 'Audio Guide' },
                  { id: 'calendar', label: 'Events' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-800 hover:bg-gray-50 rounded-md w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-900 via-red-800 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Sikkim's Sacred
                <span className="block text-yellow-400">Monasteries</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Immerse yourself in the spiritual heritage of over 200 monasteries through virtual tours,
                interactive maps, and digital archives. Preserve culture, inspire tourism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('tours')}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <Camera className="h-5 w-5" />
                  <span>Start Virtual Tour</span>
                </button>
                <button 
                  onClick={() => scrollToSection('map')}
                  className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Explore Map</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Monastery in Sikkim"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-800">200+</div>
                    <div className="text-sm text-gray-600">Monasteries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-800">360°</div>
                    <div className="text-sm text-gray-600">Virtual Tours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-800">1000+</div>
                    <div className="text-sm text-gray-600">Artifacts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours Section */}
      <section id="tours" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">360° Virtual Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the spiritual ambiance and architectural beauty of Sikkim's monasteries 
              through immersive virtual reality tours with expert narration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monasteries.map((monastery) => (
              <div
                key={monastery.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Play className="h-5 w-5 text-red-800" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{monastery.rating}</span>
                      <span>({monastery.tours} tours)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-red-600 font-medium">{monastery.location}</span>
                    <span className="text-sm text-gray-500">Est. {monastery.established}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{monastery.name}</h3>
                  <p className="text-gray-600 mb-4">{monastery.description}</p>
                  <button className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                    <Camera className="h-5 w-5" />
                    <span>Start Virtual Tour</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Interactive Monastery Map</h2>
              <p className="text-lg text-gray-600 mb-8">
                Navigate through Sikkim's sacred landscape with our geo-tagged interactive map. 
                Discover monasteries by region, plan your spiritual journey, and access real-time 
                travel information.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GPS Navigation</h4>
                    <p className="text-sm text-gray-600">Turn-by-turn directions to every monastery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Navigation className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Travel Routes</h4>
                    <p className="text-sm text-gray-600">Optimized paths and nearby attractions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Services</h4>
                    <p className="text-sm text-gray-600">Transport, guides, and accommodations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Info</h4>
                    <p className="text-sm text-gray-600">Opening hours and weather updates</p>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200">
                <MapPin className="h-5 w-5" />
                <span>Explore Interactive Map</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 h-96">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Monastery Locations</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Placeholder for interactive map */}
                <div className="relative h-72 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">Interactive Map Integration</p>
                    <p className="text-sm text-gray-400">200+ monasteries geo-tagged</p>
                  </div>
                  
                  {/* Sample location markers */}
                  <div className="absolute top-12 left-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-16 left-24 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-16 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Archives Section */}
      <section id="archives" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Archives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore rare manuscripts, ancient murals, and historical documents through 
              our AI-powered digital archive system with advanced search capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="h-8 w-8 text-amber-700" />
                    <h3 className="text-lg font-bold text-gray-900">Ancient Manuscripts</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    High-resolution scans of sacred texts and historical documents dating back centuries.
                  </p>
                  <div className="flex items-center text-sm text-amber-700">
                    <span>500+ Documents</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Camera className="h-8 w-8 text-purple-700" />
                    <h3 className="text-lg font-bold text-gray-900">Sacred Murals</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Detailed photography of monastery wall paintings and artistic treasures.
                  </p>
                  <div className="flex items-center text-sm text-purple-700">
                    <span>1000+ Images</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-8 w-8 text-green-700" />
                    <h3 className="text-lg font-bold text-gray-900">Cultural Artifacts</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    3D models and detailed documentation of ritual objects and historical items.
                  </p>
                  <div className="flex items-center text-sm text-green-700">
                    <span>300+ Artifacts</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-blue-700" />
                    <h3 className="text-lg font-bold text-gray-900">Oral Histories</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Audio recordings of monastery elders sharing traditions and stories.
                  </p>
                  <div className="flex items-center text-sm text-blue-700">
                    <span>100+ Recordings</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">AI-Powered Search</h3>
              
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search manuscripts, murals, artifacts..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-2 p-2 text-gray-400 hover:text-red-600">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Manuscripts', 'Murals', 'Artifacts', 'Audio', '17th Century', 'Buddhism'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border hover:border-red-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Recent Additions</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Pemayangtse murals (HD scans)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Rumtek manuscripts (Tibetan)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Elder interviews (Lepcha)</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                <Download className="h-5 w-5" />
                <span>Access Archives</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Guide Section */}
      <section id="audio" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Smart Audio Guide</h2>
              <p className="text-xl text-slate-300 mb-8">
                Enhance your monastery visits with location-based audio guides featuring expert 
                narration, ambient monastery sounds, and multi-language support.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Headphones className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">GPS-Triggered Content</h4>
                    <p className="text-slate-300">Automatically play relevant audio as you explore different areas of each monastery.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Multi-Language Support</h4>
                    <p className="text-slate-300">Available in English, Hindi, Nepali, Lepcha, and Bhutia languages.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Download className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Offline Mode</h4>
                    <p className="text-slate-300">Download audio guides before your visit for uninterrupted experience in remote areas.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                  <Download className="h-5 w-5" />
                  <span>Download App</span>
                </button>
                <button className="border border-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                  <Play className="h-5 w-5" />
                  <span>Preview Audio</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Audio Guide Player</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-400">Live</span>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Rumtek Monastery"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">Rumtek Monastery</h4>
                      <p className="text-slate-400 text-sm">Main Prayer Hall</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">2:34</span>
                      <span className="text-slate-400">8:45</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-6 mt-6">
                    <button className="p-2 text-slate-400 hover:text-white">
                      <ChevronRight className="h-5 w-5 rotate-180" />
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 p-4 rounded-full">
                      <Play className="h-6 w-6 text-white" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg text-sm font-medium text-center transition-colors duration-200">
                    Switch Language
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg text-sm font-medium text-center transition-colors duration-200">
                    Download Offline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Calendar Section */}
      <section id="calendar" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your spiritual journey around sacred festivals, ceremonies, and cultural events. 
              Book your participation and immerse yourself in authentic monastery traditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-red-800 to-orange-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                  <p className="text-red-100 text-sm">{event.monastery}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-800 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                      Book Now
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                      <Calendar className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 mx-auto transition-colors duration-200">
              <Calendar className="h-5 w-5" />
              <span>View Full Calendar</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-red-400" />
                <span className="text-xl font-bold">Monastery360</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                A digital heritage platform preserving and showcasing Sikkim's sacred monasteries 
                for cultural preservation and sustainable tourism development.
              </p>
              <div className="text-sm text-slate-400">
                <p className="mb-1">Government of Sikkim</p>
                <p>Department of Higher & Technical Education</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#tours" className="hover:text-white transition-colors duration-200">Virtual Tours</a></li>
                <li><a href="#map" className="hover:text-white transition-colors duration-200">Interactive Map</a></li>
                <li><a href="#archives" className="hover:text-white transition-colors duration-200">Digital Archives</a></li>
                <li><a href="#audio" className="hover:text-white transition-colors duration-200">Audio Guide</a></li>
                <li><a href="#calendar" className="hover:text-white transition-colors duration-200">Cultural Calendar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Monastery360. All rights reserved. A Government of Sikkim Initiative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;