'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, TrendingUp, Shield, Smartphone, ChevronRight, Check, Menu, X, BarChart3, Calculator, User, Clock, Globe, Zap, Users, ArrowRight, Star, Phone, Send, CheckCircle, Heart, Brain, Target, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demoMessages = [
    { type: 'user', text: 'İyi para kazanan ama işsiz kalma riskim düşük olan bir meslek seçmek istiyorum. Önerebilir misin?' },
    { type: 'bot', text: 'Son 5 yılda hem maaşı en çok artan hem de işsizlik oranı en düşük sektörler:\n\n💻 Bilgi ve İletişim: Ort. maaş ₺18.500, İşsizlik %3.2\n💼 Finans-Sigorta: Ort. maaş ₺16.800, İşsizlik %4.1\n🏥 Sağlık: Ort. maaş ₺14.200, İşsizlik %2.8\n\nHangi alan ilgini çekiyor?' },
    //{ type: 'user', text: 'Bilgi ve İletişim ilgimi çekiyor. Bu alanda İstanbul\'da ne kadar sürede ev sahibi olabilirim?' },
    //{ type: 'bot', text: 'Yazılım geliştirici olarak başlarsan:\n\n📊 Başlangıç maaşı: ₺12.000-15.000\n🏠 İstanbul ort. ev fiyatı: ₺1.2M\n💰 Gerekli peşinat (%30): ₺360.000\n\n⏰ Mevcut enflasyon ve fiyat artışlarını hesaba katarak, aylık ₺3.000 birikim yapsan yaklaşık 12-15 yıl sürer.\n\nBaşka senaryo deneyelim mi?' }
  ];

  const testimonials = [
    {
      name: "Ayşe K.",
      age: 28,
      city: "İstanbul",
      role: "Pazarlama Uzmanı",
      text: "WhatsApp'tan yazdım, 10 dakikada kariyer değişikliği için net bir yol haritası aldım. Artık hangi sektöre geçeceğimi biliyorum!",
      rating: 5
    },
    {
      name: "Mehmet Y.",
      age: 32,
      city: "Ankara",
      role: "Öğretmen",
      text: "Ev almak için ne kadar biriktirmem gerektiğini tam olarak gösterdi. Telegram'dan hızlıca ulaştım, hemen cevap aldım.",
      rating: 5
    },
    {
      name: "Zeynep T.",
      age: 25,
      city: "İzmir",
      role: "Yeni Mezun",
      text: "Hangi şehirde iş bulma şansımın yüksek olduğunu görmek muhteşemdi. Uygulama indirmeden WhatsApp'tan hallettim!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [demoMessages.length]);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Kariyer Simülatörü",
      description: "Hangi mesleği seçersen hangi yaşam standardına ulaşabileceğini hesapla"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Yatırım Planlayıcı", 
      description: "Ev, araba, emeklilik için ne kadar biriktirmen gerektiğini öğren"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Şehir Karşılaştırıcı",
      description: "81 il arasında yaşam maliyeti ve fırsat karşılaştırması yap"
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Eğitim Yatırım Analizi",
      description: "Hangi eğitimin kariyerine katkısı daha fazla olur?"
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Aile Bütçe Planlayıcı",
      description: "Evlilik, çocuk sahibi olma gibi kararların mali etkilerini gör"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Emeklilik Hesaplayıcı",
      description: "Ne zaman emekli olabilirsin, nasıl bir yaşam standardın olur?"
    }
  ];

  const stats = [
    { number: "50K+", label: "Aktif Kullanıcı" },
    { number: "2M+", label: "Simülasyon Yapıldı" },
    { number: "4.8/5", label: "Kullanıcı Puanı" },
    { number: "24/7", label: "Destek" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-[#fbe9e7] overflow-x-hidden">
      {/* Blurry red circles background - use inline styles for position/size */}
      <div className="pointer-events-none select-none absolute inset-0" style={{zIndex: -1}}>
        <div className="bg-[#ef9a9a]/60 rounded-full blur-3xl opacity-60" style={{position: 'absolute', top: -100, left: -100, width: 300, height: 300}} />
        <div className="bg-[#e57373]/50 rounded-full blur-2xl opacity-50" style={{position: 'absolute', top: '20%', right: -120, width: 250, height: 250}} />
        <div className="bg-[#ffcdd2]/40 rounded-full blur-2xl opacity-40" style={{position: 'absolute', bottom: -80, left: '10%', width: 200, height: 200}} />
        <div className="bg-[#b71c1c]/50 rounded-full blur-2xl opacity-50" style={{position: 'absolute', bottom: '10%', right: '15%', width: 180, height: 180}} />
        <div className="bg-[#f8bbd0]/30 rounded-full blur-2xl opacity-30" style={{position: 'absolute', top: '40%', left: -60, width: 120, height: 120}} />
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/DDSADA.png" alt="logo" className="w-10 h-10 rounded-full bg-[#ef9a9a]/60 object-cover" onError={(e) => { e.currentTarget.style.background = '#ef9a9a'; e.currentTarget.src = ''; }} />
              <span className="font-bold text-xl text-[#b71c1c]">cepassist</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={smoothScroll} className="text-gray-700 hover:text-[#b71c1c] transition-colors">Özellikler</a>
              <a href="#how-it-works" onClick={smoothScroll} className="text-gray-700 hover:text-[#b71c1c] transition-colors">Nasıl Çalışır?</a>
              <a href="#platforms" onClick={smoothScroll} className="text-gray-700 hover:text-[#b71c1c] transition-colors">Platform</a>
              <a href="#testimonials" onClick={smoothScroll} className="text-gray-700 hover:text-[#b71c1c] transition-colors">Yorumlar</a>
              <button className="bg-[#b71c1c] text-white px-6 py-2 rounded-full hover:bg-[#9e0000] transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Hemen Başla</span>
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-[#b71c1c]">Özellikler</a>
              <a href="#how-it-works" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-[#b71c1c]">Nasıl Çalışır?</a>
              <a href="#platforms" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-[#b71c1c]">Platform</a>
              <a href="#testimonials" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-[#b71c1c]">Yorumlar</a>
              <button className="w-full bg-[#b71c1c] text-white px-6 py-2 rounded-full hover:bg-[#9e0000] transition-colors">
                Hemen Başla
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-[#ffcdd2] px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-[#b71c1c] mr-2" />
                <span className="text-[#b71c1c] text-sm font-semibold">ChatGPT ile Güçlendirilmiş AI Asistan</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#b71c1c] leading-tight">
                <span className="text-[#ef9a9a]">WhatsApp</span> veya <span className="text-[#b71c1c]">Telegram</span>'dan Hayatını Planla
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Uygulama indirmene gerek yok! TÜİK verileriyle desteklenen AI asistanımızla WhatsApp veya Telegram üzerinden kariyer, yatırım ve yaşam kararlarını simüle et.
              </p>
              
              {/* Platform Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/905555555555?text=Merhaba" className="bg-[#ef9a9a] text-white px-8 py-4 rounded-full hover:bg-[#b71c1c] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3 animate-pulse-slow">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="font-semibold">WhatsApp'tan Başla</span>
                  </a>
                  <a href="https://t.me/cepassist_bot" className="bg-[#b71c1c] text-white px-8 py-4 rounded-full hover:bg-[#9e0000] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span className="font-semibold">Telegram'dan Başla</span>
                  </a>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  <CheckCircle className="w-4 h-4 inline text-[#ef9a9a] mr-1" />
                  Uygulama indirmeye gerek yok, hemen kullanmaya başla!
                </p>
              </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ef9a9a] to-[#b71c1c] rounded-3xl transform rotate-6 scale-105 opacity-20 blur-xl"></div>
              <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl p-4 h-[480px] flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img src="/DDSADA.png" alt="logo" className="w-12 h-12 rounded-full bg-[#ef9a9a]/60 object-cover" onError={(e) => { e.currentTarget.style.background = '#ef9a9a'; e.currentTarget.src = ''; }} />
                      <div>
                        <h3 className="text-white font-semibold">cepassist</h3>
                        <p className="text-[#ef9a9a] text-sm">Çevrimiçi • WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedPlatform('whatsapp')}
                        className={`px-3 py-1 rounded-full text-xs transition-all ${selectedPlatform === 'whatsapp' ? 'bg-[#ef9a9a] text-white' : 'bg-gray-700 text-gray-400'}`}
                      >
                        WhatsApp
                      </button>
                      <button 
                        onClick={() => setSelectedPlatform('telegram')}
                        className={`px-3 py-1 rounded-full text-xs transition-all ${selectedPlatform === 'telegram' ? 'bg-[#b71c1c] text-white' : 'bg-gray-700 text-gray-400'}`}
                      >
                        Telegram
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      {demoMessages.slice(0, activeDemo + 1).map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${idx === activeDemo ? 'animate-slideIn' : ''}`}
                        >
                          <div className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.type === 'user' 
                              ? `${selectedPlatform === 'whatsapp' ? 'bg-[#ef9a9a]' : 'bg-[#b71c1c]'} text-white rounded-br-none` 
                              : 'bg-gray-700 text-white rounded-bl-none'
                          }`}>
                            <p className="text-sm whitespace-pre-line">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="text" 
                        placeholder="Mesajınızı yazın..."
                        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full text-sm focus:outline-none"
                        disabled
                      />
                      <button className={`p-2 rounded-full ${selectedPlatform === 'whatsapp' ? 'bg-[#ef9a9a]' : 'bg-[#b71c1c]'}`}>
                        <Send className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ef9a9a] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platforms" className="py-20 bg-gradient-to-br from-[#fbe9e7] to-[#f8bbd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">İndirmeden, Hemen Kullan!</h2>
            <p className="text-xl text-gray-600">Favori mesajlaşma uygulamanı seç, anında planlamaya başla</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#ffcdd2] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ef9a9a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-[#ef9a9a] text-sm font-semibold">En Popüler</span>
              </div>
              <h3 className="text-2xl font-bold text-[#b71c1c] mb-4">WhatsApp ile Başla</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#ef9a9a] mr-3 flex-shrink-0" />
                  <span>Telefon numaranla hemen başla</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#ef9a9a] mr-3 flex-shrink-0" />
                  <span>Sesli mesaj desteği</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#ef9a9a] mr-3 flex-shrink-0" />
                  <span>Dosya ve görsel paylaşımı</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#ef9a9a] mr-3 flex-shrink-0" />
                  <span>Tanıdık arayüz</span>
                </li>
              </ul>
              <a href="https://wa.me/905555555555?text=Merhaba" className="w-full bg-[#ef9a9a] text-white py-3 rounded-full hover:bg-[#b71c1c] transition-all flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">WhatsApp'ta Aç</span>
              </a>
            </div>

            {/* Telegram Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#b71c1c] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#b71c1c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <span className="text-[#b71c1c] text-sm font-semibold">Hızlı & Güvenli</span>
              </div>
              <h3 className="text-2xl font-bold text-[#b71c1c] mb-4">Telegram ile Başla</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#b71c1c] mr-3 flex-shrink-0" />
                  <span>Telefon numarasız kullanım</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#b71c1c] mr-3 flex-shrink-0" />
                  <span>Daha hızlı yanıt süresi</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#b71c1c] mr-3 flex-shrink-0" />
                  <span>Büyük dosya desteği</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-[#b71c1c] mr-3 flex-shrink-0" />
                  <span>Gelişmiş gizlilik</span>
                </li>
              </ul>
              <a href="https://t.me/cepassist_bot" className="w-full bg-[#b71c1c] text-white py-3 rounded-full hover:bg-[#9e0000] transition-all flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span className="font-semibold">Telegram'da Aç</span>
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">Tek Mesajla Hayatını Planla</h2>
            <p className="text-xl text-gray-600">TÜİK verilerini kullanarak gelecek planlamanı kolaylaştırıyoruz</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#fbe9e7] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#ef9a9a] rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#b71c1c] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">3 Adımda Başla</h2>
            <p className="text-xl text-gray-600">Uygulama indirmeden, sadece mesaj atarak planlamaya başla</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-gray-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#ef9a9a] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#b71c1c] mb-4">Mesaj At</h3>
                <p className="text-gray-600 mb-4">WhatsApp veya Telegram'dan "Merhaba" yazarak başla</p>
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  <p className="text-gray-500">Örnek:</p>
                  <p className="text-gray-700 italic">"Merhaba, kariyer planlamamda yardımcı olur musun?"</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-gray-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#ef9a9a] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#b71c1c] mb-4">Soruları Yanıtla</h3>
                <p className="text-gray-600 mb-4">AI asistanımız sana kısa sorular soracak</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-[#ef9a9a] mr-2" />
                    <span>Yaşın ve mesleğin</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-[#ef9a9a] mr-2" />
                    <span>Yaşadığın şehir</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-[#ef9a9a] mr-2" />
                    <span>Hedeflerin</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#ef9a9a] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#b71c1c] mb-4">Planını Al</h3>
                <p className="text-gray-600 mb-4">TÜİK verileriyle hazırlanmış kişisel planın hazır!</p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#ef9a9a] mr-2 mt-0.5" />
                      <span className="text-gray-700">Detaylı zaman çizelgesi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#ef9a9a] mr-2 mt-0.5" />
                      <span className="text-gray-700">Alternatif senaryolar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#ef9a9a] mr-2 mt-0.5" />
                      <span className="text-gray-700">Risk analizi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-[#fbe9e7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">Kimler Kullanıyor?</h2>
            <p className="text-xl text-gray-600">Her yaştan ve meslekten insanlar hayat kararlarını cepassist ile veriyor</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#b71c1c] rounded-full flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-[#b71c1c]" />
              </div>
              <h4 className="font-semibold text-[#b71c1c] mb-2">Yeni Mezunlar</h4>
              <p className="text-sm text-gray-600">Hangi sektöre girmeliyim? Hangi şehirde iş bulma şansım yüksek?</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#ef9a9a] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#ef9a9a]" />
              </div>
              <h4 className="font-semibold text-[#b71c1c] mb-2">Genç Aileler</h4>
              <p className="text-sm text-gray-600">Çocuk sahibi olmak için doğru zaman mı? Bütçemiz yeterli mi?</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#ef9a9a] rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#ef9a9a]" />
              </div>
              <h4 className="font-semibold text-[#b71c1c] mb-2">Kariyer Değiştirenler</h4>
              <p className="text-sm text-gray-600">Yeni sektöre geçiş yapmak mantıklı mı? Maaş düşer mi?</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#ef9a9a] rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#ef9a9a]" />
              </div>
              <h4 className="font-semibold text-[#b71c1c] mb-2">Yatırımcılar</h4>
              <p className="text-sm text-gray-600">Ev mi alsam, arsa mı? Hangi şehirde yatırım daha mantıklı?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">Kullanıcılarımız Ne Diyor?</h2>
            <p className="text-xl text-gray-600">Gerçek kullanıcılardan gerçek yorumlar</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeTestimonial ? 'bg-[#ef9a9a] w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-8 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#b71c1c]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].city}</p>
                </div>                <div className="bg-gray-100 px-4 py-2 rounded-full">
                  <p className="text-[#ef9a9a] text-sm font-semibold">{testimonials[activeTestimonial].age} yaşında</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b71c1c] mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-xl text-gray-600">Merak ettiklerinizi yanıtladık</p>
          </div>
          
          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#b71c1c]">Gerçekten uygulama indirmeme gerek yok mu?</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Evet! cepassist tamamen WhatsApp ve Telegram üzerinden çalışır. Telefonunuzda zaten yüklü olan bu uygulamalardan birini açıp mesaj atmanız yeterli. Hiçbir ek uygulama, üyelik veya kurulum gerektirmez.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#b71c1c]">Verileriniz ne kadar güncel ve güvenilir?</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Tüm verilerimizi TÜİK'in (Türkiye İstatistik Kurumu) resmi verilerinden alıyoruz. Veriler aylık olarak güncellenir. Enflasyon, istihdam, konut fiyatları gibi tüm istatistikler resmi kaynaklardan gelir.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#b71c1c]">Kişisel bilgilerim güvende mi?</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Kesinlikle! Mesajlaşmalarınız WhatsApp ve Telegram'ın uçtan uca şifreleme sistemleriyle korunur. Biz sadece anonim istatistiksel veri toplarız, kişisel bilgilerinizi asla saklamaz veya paylaşmayız.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#b71c1c]">Ücretsiz mi?</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                İlk 3 simülasyon tamamen ücretsiz! Sonrasında aylık sınırsız kullanım için çok küçük bir ücret talep ediyoruz. Tek seferlik kullanımlar için kredi paketi seçeneği de mevcut.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#b71c1c]">Hangi konularda yardım alabiliyorum?</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Kariyer seçimi, maaş tahminleri, ev/araba alma planlaması, şehir değiştirme kararları, emeklilik planlaması, eğitim yatırımları, aile bütçesi planlaması gibi hayatın her alanında veri bazlı kararlar almanıza yardımcı oluyoruz.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Neden Bize Güvenmelisiniz?</h2>
            <p className="text-xl text-gray-300">Veriye dayalı, şeffaf ve kullanıcı odaklıyız</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ef9a9a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">TÜİK Onaylı Veriler</h3>
              <p className="text-gray-400">Tüm verilerimiz resmi istatistik kurumundan gelir, manipüle edilmez</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ef9a9a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">7/24 Erişim</h3>
              <p className="text-gray-400">İstediğiniz zaman, istediğiniz yerden mesaj atarak kullanabilirsiniz</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ef9a9a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">50.000+ Kullanıcı</h3>
              <p className="text-gray-400">Binlerce kişi hayat kararlarını bizimle veriyor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ef9a9a] via-[#b71c1c] to-[#b71c1c]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hayatının Kontrolünü Eline Al
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Şansa bırakma, veriye güven. Hemen mesaj at, geleceğini planlamaya başla!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://wa.me/905555555555?text=Merhaba%20cepassist,%20kariyer%20planlamamda%20yardımcı%20olur%20musun?" className="bg-white text-[#ef9a9a] px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl font-semibold text-lg flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>                </svg>
                <span>WhatsApp'tan Başla</span>
              </a>
              <a href="https://t.me/cepassist_bot" className="bg-[#b71c1c] text-white px-8 py-4 rounded-full hover:bg-[#9e0000] transition-all transform hover:scale-105 shadow-xl font-semibold text-lg flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram'dan Başla</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Anında Yanıt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>%100 Güvenli</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>İlk 3 Simülasyon Ücretsiz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/DDSADA.png" alt="logo" className="w-10 h-10 rounded-full bg-[#ef9a9a]/60 object-cover" onError={(e) => { e.currentTarget.style.background = '#ef9a9a'; e.currentTarget.src = ''; }} />
                <span className="font-bold text-xl">cepassist</span>
              </div>
              <p className="text-gray-400 text-sm">
                TÜİK verileriyle hayatının büyük kararlarını simüle et, veriye dayalı kararlar al.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/905555555555" className="w-10 h-10 bg-[#ef9a9a] rounded-full flex items-center justify-center hover:bg-[#b71c1c] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="https://t.me/cepassist_bot" className="w-10 h-10 bg-[#b71c1c] rounded-full flex items-center justify-center hover:bg-[#9e0000] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Özellikler</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer Simülatörü</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yatırım Planlayıcı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Şehir Karşılaştırıcı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emeklilik Hesaplayıcı</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Şirket</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Basında Biz</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Destek</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Kılavuzu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 cepassist. TÜİK MCP Server ile güçlendirilmiştir. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with ❤️ in Turkey</span>
                <span>•</span>
                <span>Powered by ChatGPT</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;