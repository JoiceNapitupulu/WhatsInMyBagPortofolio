'use client';

import Link from 'next/link';

// --- KOMPONEN BINGKAI HP CSS (ANTI PECAH) ---
const PhoneMockup = ({ src, alt, className = "" }) => (
  <div className={`relative border-[10px] md:border-[14px] border-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-900 flex-shrink-0 aspect-[9/19.5] ${className}`}>
    <div className="absolute top-0 inset-x-0 h-5 md:h-6 bg-slate-900 rounded-b-2xl w-24 md:w-32 mx-auto z-20"></div>
    <div className="absolute top-20 -left-[14px] w-1 h-10 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-36 -left-[14px] w-1 h-14 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-28 -right-[14px] w-1 h-16 bg-slate-800 rounded-r-md"></div>
    <div className="w-full h-full overflow-hidden bg-[#E8EBE6] relative z-10">
       <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  </div>
);

export default function WhooshCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F4F6F4] text-slate-900 font-sans selection:bg-[#8C9C85] selection:text-white pb-24">
      
      {/* HEADER NAV */}
      <nav className="w-full bg-[#F4F6F4]/80 backdrop-blur-md border-b border-[#D8DED5] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#546654] font-bold text-sm hover:underline flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </Link>
          <div className="font-black tracking-tighter text-xl text-[#546654] flex items-center gap-2">
            WHOOSHH<span className="text-[#8C9C85]">.</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full bg-[#546654] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8C9C85] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 -left-24 w-72 h-72 bg-[#3A4A3A] rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-20">
            <p className="text-[#AEC2A5] font-bold tracking-widest uppercase text-sm mb-4">UX/UI Case Study</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              WHOOSHH
            </h1>
            <p className="text-lg md:text-xl font-light text-[#D8DED5] max-w-xl leading-relaxed mx-auto md:mx-0">
              Simplifying the high-speed train booking process in Indonesia. <br/><strong className="text-white">Quick, intuitive, and paperless.</strong>
            </p>
          </div>
          
          <div className="flex-1 flex justify-center relative w-full mt-10 md:mt-0 z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
             <PhoneMockup src="/Whoosh3.png" alt="Whoosh Home" className="w-56 md:w-64 hover:-translate-y-4 transition-transform duration-500 ease-out" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-28">

        {/* OVERVIEW SECTION DENGAN TAMBAHAN KONTEKS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 sticky top-24">
            <h2 className="text-3xl font-black text-[#546654] mb-4">Project Overview</h2>
            <div className="w-16 h-1.5 bg-[#8C9C85] rounded-full"></div>
          </div>
          <div className="md:col-span-2 text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              WHOOSHH is a mobile application concept designed to simplify the high-speed train booking process in Indonesia. Developed as a <strong>mandatory practical assignment for graduation in my high school Informatics class</strong>, it combines a modern "Sage Green" aesthetic with a streamlined interface to provide a quick, intuitive, and paperless experience for every traveler.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D8DED5]">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EBE6]">
                <div className="text-3xl font-black text-[#546654] mb-1">15+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Custom UI Screens</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EBE6]">
                <div className="text-3xl font-black text-[#546654] mb-1">1</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">End-to-end Flow</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8EBE6]">
                <div className="text-3xl font-black text-[#546654] mb-1">Figma</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Primary Tool</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4 italic">
              * Objective: To create a user-friendly interface that allows students and travelers to book tickets in under 3 minutes.
            </p>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-[#D8DED5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4F6F4] rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-black text-[#546654] mb-4">Problem Statement</h2>
            <div className="w-16 h-1.5 bg-[#8C9C85] rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-[#F4F6F4] p-8 rounded-2xl border-t-4 border-[#8C9C85] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#546654]">01. Complex Navigation</h3>
              <p className="text-slate-600 text-sm">Many existing booking platforms are cluttered with ads and unnecessary information, overwhelming the user.</p>
            </div>
            <div className="bg-[#F4F6F4] p-8 rounded-2xl border-t-4 border-[#546654] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#546654]">02. Friction in Booking</h3>
              <p className="text-slate-600 text-sm">Long, tedious steps required to select seats and complete payments can be deeply frustrating, especially for younger users.</p>
            </div>
            <div className="bg-[#F4F6F4] p-8 rounded-2xl border-t-4 border-[#3A4A3A] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#546654]">03. Digital Gap</h3>
              <p className="text-slate-600 text-sm">There is a clear need for a dedicated, fast, and highly-focused interface specifically for the modern high-speed rail service.</p>
            </div>
          </div>
        </section>

        {/* SOLUTION & KEY FEATURES */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#546654] mb-4">Solution & Key Features</h2>
            <div className="w-16 h-1.5 bg-[#8C9C85] rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#546654] text-white p-8 rounded-3xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Streamlined Search</h3>
              <p className="text-[#D8DED5] text-sm leading-relaxed">A clean home screen where users can select their origin, destination, and travel date instantly without distractions.</p>
            </div>
            <div className="bg-[#8C9C85] text-white p-8 rounded-3xl shadow-lg hover:translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Interactive Seat Selection</h3>
              <p className="text-white/80 text-sm leading-relaxed">A clear, intuitive visual map allowing users to easily choose between Economy and Business class seats.</p>
            </div>
            <div className="bg-[#3A4A3A] text-white p-8 rounded-3xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Integrated Payments</h3>
              <p className="text-[#D8DED5] text-sm leading-relaxed">A drastically simplified checkout process supporting modern E-wallets and Credit Cards for a seamless transaction.</p>
            </div>
            <div className="bg-slate-700 text-white p-8 rounded-3xl shadow-lg hover:translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Instant Digital Ticket</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Auto-generated QR codes delivered instantly upon payment success, guaranteeing a paperless boarding experience.</p>
            </div>
          </div>
        </section>

        {/* VISUAL IDENTITY */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-[#D8DED5]">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#546654] mb-4">Visual Identity</h2>
            <div className="w-16 h-1.5 bg-[#8C9C85] rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div>
                <h3 className="text-xl font-bold mb-4 text-[#546654]">Color Palette</h3>
                <p className="text-slate-600 text-sm mb-6">A refreshing "Sage Green" and "Cream" theme, representing modern technology and comfort.</p>
                <div className="flex rounded-xl overflow-hidden h-24 w-full">
                  <div className="flex-1 bg-[#A5B29F]"></div>
                  <div className="flex-1 bg-[#8C9C85]"></div>
                  <div className="flex-1 bg-[#546654]"></div>
                </div>
             </div>
             <div>
                <h3 className="text-xl font-bold mb-4 text-[#546654]">Typography</h3>
                <p className="text-slate-600 text-sm">Clean, sans-serif fonts chosen specifically to ensure high readability and a modern aesthetic on all mobile devices.</p>
                <div className="mt-6 p-6 bg-[#F4F6F4] rounded-xl text-center">
                  <span className="text-2xl font-bold text-[#546654] block mb-2">Aa</span>
                  <span className="text-sm font-medium text-slate-500">Modern Sans-Serif</span>
                </div>
             </div>
             <div>
                <h3 className="text-xl font-bold mb-4 text-[#546654]">Iconography</h3>
                <p className="text-slate-600 text-sm mb-6">Minimalist line icons utilized for primary navigation (Home, Search, Favorites, Profile) to keep the interface uncluttered.</p>
                <div className="flex items-center justify-center p-4 bg-[#F4F6F4] rounded-xl">
                   <img src="/WhooshLogo.png" alt="Whoosh Logo" className="w-24 object-contain" />
                </div>
             </div>
          </div>
        </section>

        {/* DESIGN SHOWCASE */}
        <section className="pt-10 border-t border-[#D8DED5]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#546654] mb-4">Design Showcase</h2>
            <div className="w-16 h-1.5 bg-[#8C9C85] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-24">
            
            {/* FULL APP SCREENS OVERLAP */}
            <div className="relative w-full h-[500px] md:h-[700px] flex justify-center items-center overflow-hidden py-10">
               <PhoneMockup src="/Whoosh2.png" alt="Whoosh Login" className="w-32 md:w-56 absolute -translate-x-[110%] md:-translate-x-[150%] scale-75 opacity-70 blur-[2px] z-0" />
               <PhoneMockup src="/Whoosh4.png" alt="Whoosh Search Results" className="w-40 md:w-64 absolute -translate-x-[60%] md:-translate-x-[80%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
               <PhoneMockup src="/Whoosh3.png" alt="Whoosh Home" className="w-48 md:w-72 absolute z-20 hover:-translate-y-6 transition-transform duration-300" />
               <PhoneMockup src="/Whoosh5.png" alt="Whoosh Seats" className="w-40 md:w-64 absolute translate-x-[60%] md:translate-x-[80%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
               <PhoneMockup src="/Whoosh9.png" alt="Whoosh Ticket" className="w-32 md:w-56 absolute translate-x-[110%] md:translate-x-[150%] scale-75 opacity-70 blur-[2px] z-0" />
            </div>

            {/* USER FLOW - 4 KOLOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto border-t border-b border-[#D8DED5] py-16">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/Whoosh2.png" alt="Whoosh Onboarding" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(84,102,84,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#546654] text-white flex items-center justify-center font-bold mx-auto mb-3">1</div>
                    <h3 className="font-bold text-[#546654] text-lg">Onboarding</h3>
                    <p className="text-slate-500 text-sm px-2">Simple Login and Sign-up screens.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-12 lg:mt-0">
                 <PhoneMockup src="/Whoosh3.png" alt="Whoosh Discovery" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(84,102,84,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#8C9C85] text-white flex items-center justify-center font-bold mx-auto mb-3">2</div>
                    <h3 className="font-bold text-[#546654] text-lg">Discovery</h3>
                    <p className="text-slate-500 text-sm px-2">The dashboard and route search.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-12 lg:mt-0">
                 <PhoneMockup src="/Whoosh6.png" alt="Whoosh Transaction" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(84,102,84,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#546654] text-white flex items-center justify-center font-bold mx-auto mb-3">3</div>
                    <h3 className="font-bold text-[#546654] text-lg">Transaction</h3>
                    <p className="text-slate-500 text-sm px-2">Multi-method payment gateway.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-12 lg:mt-0">
                 <PhoneMockup src="/Whoosh9.png" alt="Whoosh Fulfilment" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(84,102,84,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#8C9C85] text-white flex items-center justify-center font-bold mx-auto mb-3">4</div>
                    <h3 className="font-bold text-[#546654] text-lg">Fulfilment</h3>
                    <p className="text-slate-500 text-sm px-2">Digital Ticket with a QR code.</p>
                 </div>
               </div>
            </div>

            {/* ADDITIONAL SCREENS - 2 KOLOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto px-10 pb-10">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/Whoosh7.png" alt="Whoosh Booking Summary" className="w-full max-w-[280px] hover:-translate-y-4 transition-transform duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.1)]" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#546654] text-lg">Trip Summary</h3>
                    <p className="text-slate-500 text-sm">Clear review before payment.</p>
                 </div>
               </div>
               <div className="flex flex-col items-center gap-6 md:mt-20">
                 <PhoneMockup src="/Whoosh8.png" alt="Whoosh Success" className="w-full max-w-[280px] hover:-translate-y-4 transition-transform duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.1)]" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#546654] text-lg">Payment Success</h3>
                    <p className="text-slate-500 text-sm">Confirmation & ticket download.</p>
                 </div>
               </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}