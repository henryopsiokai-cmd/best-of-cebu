'use client';

import { useEffect, useState } from 'react';

export default function Custom404() {
  const [mounted, setMounted] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const popularSpots = [
    { name: 'Sakura Dining', emoji: '🌸', href: '/sakura' },
    { name: 'Gureum Cafe', emoji: '☕', href: '/gureum' },
    { name: 'Tablea Chocolate', emoji: '🍫', href: '/tablea' },
    { name: 'Hatte Cafe', emoji: '🥐', href: '/hatte' },
    { name: 'Pukot Kitchen', emoji: '🌊', href: '/pukot' },
    { name: 'Tamp Cafe', emoji: '📚', href: '/tamp' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating palm leaves */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,180 Q60,140 20,100 Q60,120 100,100 Q140,120 180,100 Q140,140 100,180"
            fill="#22c55e"
          />
        </svg>
      </div>
      <div className="absolute top-10 right-10 w-48 h-48 opacity-15 animate-spin-slow-reverse">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,180 Q60,140 20,100 Q60,120 100,100 Q140,120 180,100 Q140,140 100,180"
            fill="#22c55e"
          />
        </svg>
      </div>

      {/* Ocean waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGradient)"
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,60 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Logo */}
        <div className="mb-8 animate-float">
          <svg width="280" height="70" viewBox="0 0 400 100" className="drop-shadow-lg">
            <defs>
              <linearGradient id="logoGrad404" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <text
              x="200"
              y="50"
              fontFamily="'Playfair Display', serif"
              fontSize="36"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Best of Cebu
            </text>
            <text
              x="200"
              y="80"
              fontFamily="'Inter', sans-serif"
              fontSize="14"
              fill="#c4b5fd"
              textAnchor="middle"
              letterSpacing="3"
            >
              PHILIPPINES
            </text>
          </svg>
        </div>

        {/* 404 Display */}
        <div className="relative mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-50 animate-pulse" />
          
          {/* Main 404 text */}
          <div className="relative">
            <h1
              className="text-[12rem] md:text-[16rem] font-bold leading-none select-none animate-text-glow"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Inter', sans-serif",
                textShadow: 'none',
              }}
            >
              404
            </h1>
          </div>

          {/* Decorative elements around 404 */}
          <div className="absolute -top-4 -left-8 text-4xl animate-bounce-slow">🌴</div>
          <div className="absolute -top-2 -right-6 text-3xl animate-bounce-slow-delay">🥥</div>
          <div className="absolute -bottom-4 left-1/4 text-3xl animate-bounce-slow-delay-2">🐚</div>
          <div className="absolute -bottom-2 right-1/4 text-2xl animate-bounce-slow">⚓</div>
        </div>

        {/* Message */}
        <div className="text-center mb-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 animate-fade-in-up">
            You&apos;ve wandered off the beaten path...
          </h2>
          <p className="text-lg text-purple-200 mb-2 animate-fade-in-up-delay">
            Even the best explorers get a little lost in paradise.
          </p>
          <p className="text-sm text-purple-300/70 animate-fade-in-up-delay-2">
            But don&apos;t worry — we&apos;ll help you find your way back to the good stuff.
          </p>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-md mb-10 animate-fade-in-up-delay-3">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for a café, restaurant, or spot..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Popular spots */}
        <div className="text-center mb-10 animate-fade-in-up-delay-4">
          <p className="text-sm text-purple-300 mb-4 uppercase tracking-wider">Or check out these popular spots</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSpots.map((spot) => (
              <a
                key={spot.href}
                href={spot.href}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 flex items-center gap-2"
              >
                <span>{spot.emoji}</span>
                <span>{spot.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://dev.bestofcebu.com"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in-up-delay-5"
        >
          {/* Button gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Shine effect */}
          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
          
          <span className="relative text-white font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Best of Cebu
          </span>
        </a>

        {/* Footer quote */}
        <div className="mt-16 text-center animate-fade-in-up-delay-6">
          <p className="text-purple-300/50 text-sm italic">
            &ldquo;Not all those who wander are lost — but some just need a better map.&rdquo;
          </p>
          <p className="text-purple-400/30 text-xs mt-2">
            Cebu, Philippines • est. 2024
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes bounce-slow-delay-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes shine {
          100% { transform: translateX(250%); }
        }
        
        @keyframes text-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.5)); }
          50% { filter: drop-shadow(0 0 40px rgba(249, 115, 22, 0.8)); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-bounce-slow-delay { animation: bounce-slow-delay 2.5s ease-in-out infinite 0.5s; }
        .animate-bounce-slow-delay-2 { animation: bounce-slow-delay 2.8s ease-in-out infinite 1s; }
        .animate-wave { animation: wave 15s linear infinite; }
        .animate-shine { animation: shine 3s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-up-delay-2 { animation: fade-in-up 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-up-delay-3 { animation: fade-in-up 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-fade-in-up-delay-4 { animation: fade-in-up 0.8s ease-out 0.8s forwards; opacity: 0; }
        .animate-fade-in-up-delay-5 { animation: fade-in-up 0.8s ease-out 1s forwards; opacity: 0; }
        .animate-fade-in-up-delay-6 { animation: fade-in-up 0.8s ease-out 1.2s forwards; opacity: 0; }
      `}</style>
    </div>
  );
}
