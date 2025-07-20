'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, TrendingUp, Shield, Smartphone, ChevronRight, Check, Menu, X, BarChart3, Calculator, User } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  const smoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
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
    { type: 'user', text: 'Merhaba, Türkiye\'nin son 5 yıllık enflasyon verilerini görebilir miyim?' },
    { type: 'bot', text: 'Tabii! TÜİK verilerine göre son 5 yıllık TÜFE oranları:\n\n📊 2020: %14.60\n📊 2021: %36.08\n📊 2022: %64.27\n📊 2023: %64.77\n📊 2024: %44.38' },
    //{ type: 'user', text: 'İstanbul\'da konut fiyatları nasıl değişmiş?' },
    //{ type: 'bot', text: 'İstanbul konut fiyat endeksi (2017=100):\n\n🏠 2022: 528.7\n🏠 2023: 892.4\n🏠 2024: 1156.3\n\n📈 Yıllık artış: %29.6\nDetaylı rapor ister misiniz?' }
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
              <span className="font-bold text-xl text-gray-800">TÜİK Veri Asistanı</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={smoothScroll} className="text-gray-700 hover:text-green-600 transition-colors">Özellikler</a>
              <a href="#how-it-works" onClick={smoothScroll} className="text-gray-700 hover:text-green-600 transition-colors">Nasıl Çalışır?</a>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg">
                Hemen Başla
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
              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-700 text-sm font-semibold">ChatGPT Powered</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-500">TÜİK Verilerine</span> WhatsApp'tan Anında Erişin
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enflasyon, işsizlik, konut fiyatları ve daha fazlası... Tüm TÜİK istatistiklerini WhatsApp üzerinden sorgulayın, yapay zeka ile yorumlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp'ta Başla</span>
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
                      <h3 className="text-white font-semibold">TÜİK Veri Asistanı</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden TÜİK Veri Asistanı?</h2>
            <p className="text-xl text-gray-600">TÜİK verilerine erişimin en kolay ve hızlı yolu</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kapsamlı Veri Erişimi</h3>
              <p className="text-gray-600">Enflasyon, işsizlik, üretim, dış ticaret ve daha fazla TÜİK verisine anında ulaşın</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Resmi ve Güvenilir</h3>
              <p className="text-gray-600">Doğrudan TÜİK veri tabanından güvenilir ve güncel istatistikler</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Destekli Yorumlama</h3>
              <p className="text-gray-600">Karmaşık verileri anlaşılır özetler ve görselleştirmelerle sunar</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600">3 basit adımda TÜİK verilerine erişin</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-green-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp'a Mesaj Atın</h3>
                <p className="text-gray-600">Botumuzla WhatsApp üzerinden iletişime geçin</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-8 left-[100%] w-[calc(100%-2rem)] h-0.5 bg-green-200 hidden md:block z-0"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Veri Talebinizi İletin</h3>
                <p className="text-gray-600">İstediğiniz TÜİK verilerini sorun: enflasyon, işsizlik, üretim verileri vb.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sonuç ve Analiz Alın</h3>
                <p className="text-gray-600">Veriler, grafikler ve AI destekli yorumlar ile detaylı analiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            TÜİK Verilerine Hemen Erişmeye Başlayın
          </h2>
          <p className="text-xl text-green-100 mb-8">
            WhatsApp üzerinden tüm TÜİK istatistiklerine anında ulaşın, AI destekli analizler alın
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl font-semibold text-lg flex items-center justify-center space-x-2 mx-auto">
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp'ta Başla</span>
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
              <span className="font-bold text-lg">TÜİK Veri Asistanı</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 TÜİK Veri Asistanı. TÜİK MCP Server ile güçlendirilmiştir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;