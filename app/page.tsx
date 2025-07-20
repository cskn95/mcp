'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, TrendingUp, Shield, Smartphone, ChevronRight, Check, Menu, X, BarChart3, Calculator, User } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
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
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">Gelecek Planlayıcım</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={smoothScroll} className="text-gray-700 hover:text-green-600 transition-colors">Özellikler</a>
              <a href="#how-it-works" onClick={smoothScroll} className="text-gray-700 hover:text-green-600 transition-colors">Nasıl Çalışır?</a>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg">
                Hemen Planla
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
              <a href="#features" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-green-600">Özellikler</a>
              <a href="#how-it-works" onClick={smoothScroll} className="block px-3 py-2 text-gray-700 hover:text-green-600">Nasıl Çalışır?</a>
              <button className="w-full bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Hemen Planla
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
              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-700 text-sm font-semibold">ChatGPT Powered</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-500">Hayatındaki Büyük Kararları</span> Veriye Dayalı Al
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hangi mesleği seçmeli, nerede yaşamalı, ne zaman ev almalı? TÜİK verileriyle hayatının önemli kararlarını simüle et, geleceğini planla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Planlamaya Başla</span>
                </button>
                <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-green-500 flex items-center justify-center space-x-2">
                  <span className="font-semibold">Demo İzle</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl transform rotate-6 scale-105 opacity-20 blur-xl"></div>
              <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl p-4 h-[420px] flex flex-col">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Gelecek Planlayıcım</h3>
                      <p className="text-green-400 text-sm">Çevrimiçi</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-hidden">
                    <div className="space-y-4">
                      {demoMessages.slice(0, activeDemo + 1).map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${idx === activeDemo ? 'animate-slideIn' : ''}`}
                        >
                          <div className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.type === 'user' 
                              ? 'bg-green-500 text-white rounded-br-none' 
                              : 'bg-gray-700 text-white rounded-bl-none'
                          }`}>
                            <p className="text-sm whitespace-pre-line">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Gelecek Planlayıcım?</h2>
            <p className="text-xl text-gray-600">Hayatının büyük kararlarını veriye dayalı al, pişman olma riskini azalt</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kariyer Simülatörü</h3>
              <p className="text-gray-600">Hangi mesleği seçersen hangi yaşam standardına ulaşabileceğini hesapla, gerçekçi beklentiler kur</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Yatırım Planlayıcı</h3>
              <p className="text-gray-600">Ev almak, araba değiştirmek, emeklilik... Büyük harcamalar için ne kadar biriktirmen gerektiğini öğren</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Şehir Karşılaştırıcı</h3>
              <p className="text-gray-600">İstanbul'dan Ankara'ya mı taşınsan? Hangi şehirde yaşam maliyeti düşük ama fırsatlar çok?</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600">3 basit adımda hayatının yol haritasını çiz</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-green-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hedefini Belirle</h3>
                <p className="text-gray-600">Ne yapmak istiyorsun? Kariyer değişikliği, ev alma, şehir değiştirme...</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-green-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Durumunu Anlat</h3>
                <p className="text-gray-600">Mevcut durumun, gelirin, yaşadığın şehir gibi temel bilgileri paylaş</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Simülasyon ve Plan Al</h3>
                <p className="text-gray-600">Veriye dayalı senaryo analizleri, zaman çizelgeleri ve eylem planları</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hayatının Büyük Kararlarını Şansa Bırakma
          </h2>
          <p className="text-xl text-green-100 mb-8">
            TÜİK verileriyle kararlarını simüle et, hangi yolun seni nereye götüreceğini gör
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl font-semibold text-lg flex items-center justify-center space-x-2 mx-auto">
            <MessageCircle className="w-6 h-6" />
            <span>Planlamaya Başla</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Gelecek Planlayıcım</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Gelecek Planlayıcım. TÜİK MCP Server ile güçlendirilmiştir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;