'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden selection:bg-pink-200">
      
      {/* Audio Element Hidden */}
      <audio ref={audioRef} src="/steeeam.m4a" loop />

      {/* Tombol Back */}
      <Link href="/" className="absolute top-6 left-6 z-50 text-black font-bold text-sm md:text-base hover:underline flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-sm">
        <span>←</span> Back to Bag
      </Link>

      <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-8 pt-24">
        
        {/* KOLOM KIRI - KUMPULAN STIKER & GAMBAR */}
        <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
          
          {/* CONTAINER UTAMA: Ditambah -translate-y-16 md:-translate-y-24 biar posisinya naik ke atas! */}
          <div className="relative w-64 md:w-80 flex items-center justify-center -translate-y-12 md:-translate-y-24">
            
            {/* 1. Tools Palette */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-16 z-10">
              <img src="/tools.png" alt="Tools" className="w-20 md:w-28 drop-shadow-md" />
            </div>

            {/* 2. ID Card Utama */}
            <img 
              src="/about-me.png" 
              alt="Joice ID Card" 
              className="w-full relative z-20 hover:-rotate-2 transition-transform duration-300 drop-shadow-2xl" 
            />

            {/* 3. Who is this popup */}
            <div className="absolute top-24 md:top-40 -right-16 md:-right-28 z-30 animate-bounce">
              <img src="/whoisthis.png" alt="Who is this?" className="w-32 md:w-40 drop-shadow-xl" />
            </div>

            {/* 4. iPod */}
            <div 
              className="absolute -bottom-8 md:-bottom-12 -right-12 md:-right-24 z-40 cursor-pointer hover:scale-105 transition-transform duration-300 group"
              onClick={togglePlay}
            >
              <img src="/ipod.png" alt="iPod Playing Steeeam" className="w-56 md:w-72 drop-shadow-2xl rotate-6" />
              
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full font-bold text-[10px] md:text-xs backdrop-blur-md transition-all ${isPlaying ? 'bg-black/70 text-green-400' : 'bg-black/50 text-white group-hover:bg-pink-500'}`}>
                {isPlaying ? '⏸ Playing' : '▶ Play'}
              </div>
            </div>

          </div>
        </div>

        {/* KOLOM KANAN - INFORMASI TEKS */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pb-20 md:pb-0 selection:bg-black selection:text-white">
          
          <h1 className="text-5xl md:text-7xl font-serif italic font-black tracking-tighter mb-8 text-black drop-shadow-sm">
            It's Joice!
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl font-black mb-3">About me</h2>
            <p className="text-sm font-medium leading-relaxed text-gray-800 text-justify">
              I’m a 4th-semester student at Institut Teknologi Del specializing in creating seamless digital experiences through a mix of logical programming and creative design. My background as a Google Student Ambassador and my work with HIMSI and Delpro have taught me how to manage projects from concept to execution. I believe that great design is a language, and I use tools to help organizations speak clearly to their audience.
            </p>
          </div>

          <hr className="border-black/20 border-2 my-6" />

          {/* Let's work together Section */}
          <div className="mb-8">
            <h3 className="text-xl font-black mb-4">Let's work together!!</h3>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:jooiceans@gmail.com" className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-neutral-800 transition-all shadow-md flex items-center gap-2">
                ✉️ Gmail
              </a>
              <a href="https://instagram.com/jooicean" target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-neutral-800 transition-all shadow-md flex items-center gap-2">
                📸 Instagram
              </a>
              <a href="https://linkedin.com/in/joicenapitupulu" target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-neutral-800 transition-all shadow-md flex items-center gap-2">
                💼 LinkedIn
              </a>
              <a href="https://github.com/joicenapitupulu" target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-neutral-800 transition-all shadow-md flex items-center gap-2">
                🔗 GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            
            <div>
              <h3 className="text-xl font-black mb-3">Softwares</h3>
              <div className="flex flex-wrap gap-2">
                <div className="w-10 h-10 bg-[#FF9A00] rounded-[10px] flex items-center justify-center font-bold text-white text-sm shadow-md">Ai</div>
                <div className="w-10 h-10 bg-[#00C4CC] rounded-[10px] flex items-center justify-center font-bold text-white text-sm shadow-md">Cv</div>
                <div className="w-10 h-10 bg-[#E34F26] rounded-[10px] flex items-center justify-center font-bold text-white text-sm shadow-md">Ht</div>
                <div className="w-10 h-10 bg-[#1572B6] rounded-[10px] flex items-center justify-center font-bold text-white text-sm shadow-md">Cs</div>
                <div className="w-10 h-10 bg-[#F7DF1E] rounded-[10px] flex items-center justify-center font-bold text-black text-sm shadow-md">Js</div>
                <div className="w-10 h-10 bg-black rounded-[10px] flex items-center justify-center font-bold text-white text-sm shadow-md">Gh</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-3">Experiences</h3>
              <div className="mb-3">
                <h4 className="font-bold text-sm leading-tight">Google Student Ambassador</h4>
                <p className="text-xs text-gray-600">2025 Cohort</p>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">HIMSI & Delpro UKM</h4>
                <p className="text-xs text-gray-600">Active Contributor</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-3">Education</h3>
              <h4 className="font-bold text-sm leading-tight">Institut Teknologi Del</h4>
              <p className="text-xs text-gray-600">4th Semester - Present</p>
            </div>

            <div>
              <h3 className="text-xl font-black mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold text-black">UI/UX</span>
                <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold text-black">Web Dev</span>
                <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold text-black">Branding</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}