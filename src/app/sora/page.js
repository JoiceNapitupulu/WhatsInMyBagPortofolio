'use client';

import Link from 'next/link';

// --- KOMPONEN BINGKAI HP CSS (ANTI PECAH) ---
const PhoneMockup = ({ src, alt, className = "" }) => (
  <div className={`relative border-[10px] md:border-[14px] border-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-900 flex-shrink-0 aspect-[9/19.5] ${className}`}>
    <div className="absolute top-0 inset-x-0 h-5 md:h-6 bg-slate-900 rounded-b-2xl w-24 md:w-32 mx-auto z-20"></div>
    <div className="absolute top-20 -left-[14px] w-1 h-10 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-36 -left-[14px] w-1 h-14 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-28 -right-[14px] w-1 h-16 bg-slate-800 rounded-r-md"></div>
    <div className="w-full h-full overflow-hidden bg-white relative z-10">
       <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  </div>
);

export default function SoraCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#2980B9] selection:text-white pb-24">
      
      {/* HEADER NAV */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#0C2D6B] font-bold text-sm hover:underline flex items-center gap-2">
            <span>←</span> Back to Bag
          </Link>
          <div className="font-black tracking-tighter text-xl text-[#0C2D6B] flex items-center gap-2">
            Sora<span className="text-[#2980B9]">.</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full bg-[#0C2D6B] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2980B9] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-10 -left-24 w-72 h-72 bg-[#1A4B9C] rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-20">
            <p className="text-[#2980B9] font-bold tracking-widest uppercase text-sm mb-4">UX/UI Case Study</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              Sora <br/><span className="text-3xl md:text-5xl font-light italic text-slate-300">(Samosir E-Boat)</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-slate-300 max-w-xl leading-relaxed mx-auto md:mx-0">
              Digitalizing Lake Toba's Water Transportation. <br/><strong className="text-white">Your Freedom, On the Water.</strong>
            </p>
            
            {/* Button Explore Now */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://www.figma.com/proto/9YcaCf0sZvmT2HfLinBQIp/Sora-kelompok-10?node-id=392-348&t=gBRAoWq0o64tAori-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=392%3A2" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#0C2D6B] px-8 py-3.5 rounded-full font-bold text-base hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-2"
              >
                Explore Now <span className="text-xl leading-none mb-1">↗</span>
              </a>
            </div>

          </div>
          
          <div className="flex-1 flex justify-center relative w-full mt-10 md:mt-0 z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
             <PhoneMockup src="/sora1.png" alt="Sora Home" className="w-56 md:w-64 hover:-translate-y-4 transition-transform duration-500 ease-out" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-28">

        {/* OVERVIEW SECTION DENGAN TAMBAHAN KONTEKS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 sticky top-24">
            <h2 className="text-3xl font-black text-[#0C2D6B] mb-4">Project Overview</h2>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full"></div>
          </div>
          <div className="md:col-span-2 text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              Created as a final project for the <strong>Technopreneurship</strong> course, Sora (Samosir E-Boat) is a mobile application platform designed to provide tourists with a seamless, practical, and transparent way to book and pay for water transportation in the Samosir region of Lake Toba.
            </p>
            <p>
              Inspired by the "sounds" of nature—waves, wind, and the laughter of adventurers—Sora acts as a digital bridge between travelers and local boat operators. It aims to empower tourists to plan their trips with price certainty while helping local boat associations manage their schedules and revenue more efficiently.
            </p>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-black text-[#0C2D6B] mb-4">Problem Statement</h2>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#E34F26] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">01. Manual & Inefficient Booking</h3>
              <p className="text-slate-600">Tourists must physically visit docks and wait in long lines without knowing if a boat is available.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#FF9A00] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">02. Lack of Price Transparency</h3>
              <p className="text-slate-600">Hard to compare prices between different operators, leading to potential price uncertainty or "tourist traps".</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#F7DF1E] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">03. Cash-Only Dependency</h3>
              <p className="text-slate-600">Relying on physical cash is inconvenient for modern travelers and prone to calculation errors or fraud.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#0C2D6B] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">04. Information Scarcity</h3>
              <p className="text-slate-600">No real-time data regarding boat capacity, current location, or estimated arrival times.</p>
            </div>
          </div>
        </section>

        {/* SOLUTION STATEMENT */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#0C2D6B] mb-4">Solution Statement</h2>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2980B9] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black opacity-20 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Seamless Mobile Booking</h3>
              <p className="text-blue-100 text-sm leading-relaxed">A dedicated platform to book various types of watercraft (Jetski, Banana Boat, Speed Boat) anytime, anywhere.</p>
            </div>
            <div className="bg-[#1A4B9C] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black opacity-20 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Integrated Digital Payments</h3>
              <p className="text-blue-100 text-sm leading-relaxed">Secure, cashless transactions via QRIS and major E-wallets like OVO, Dana, and GoPay.</p>
            </div>
            <div className="bg-[#0C2D6B] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black opacity-20 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Real-time GPS Tracking</h3>
              <p className="text-blue-100 text-sm leading-relaxed">Allows users to monitor the boat's live location and status, reducing frustration and wait times.</p>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300 md:col-span-1">
              <div className="text-5xl font-black opacity-20 mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Transparent Price & Capacity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Real-time updates on available seats and dynamic pricing based on market conditions.</p>
            </div>
            <div className="bg-slate-700 text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300 md:col-span-2">
              <div className="text-5xl font-black opacity-20 mb-4">05</div>
              <h3 className="text-xl font-bold mb-3">Multi-language Accessibility</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Support for both Indonesian and English to accommodate international tourists exploring Lake Toba.</p>
            </div>
          </div>
        </section>

        {/* REVENUE STRATEGY */}
        <section className="bg-[#E3F2FD] p-10 md:p-16 rounded-3xl border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0C2D6B] mb-4">Revenue Strategy</h2>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#0C2D6B]">01. Dynamic Pricing</h3>
              <p className="text-slate-600 text-sm">Intelligent price fluctuations based on peak seasons, weather conditions, and real-time demand to maximize revenue.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#0C2D6B]">02. Commission Model</h3>
              <p className="text-slate-600 text-sm">A 15% service fee from every successful transaction, ensuring a win-win partnership with local boat owners.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#0C2D6B]">03. Customer Loyalty</h3>
              <p className="text-slate-600 text-sm">A tiered membership system (Basic to Platinum) that rewards frequent users with booking discounts and priority support.</p>
            </div>
          </div>
        </section>

        {/* BRANDING & LOGO */}
        <section className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-black mb-4">Branding & Visual Identity</h2>
            <div className="space-y-4 text-slate-300">
              <p><strong className="text-white">The Name:</strong> "Sora" represents a "call to adventure" and honors the rhythmic sounds of Lake Toba.</p>
              <p><strong className="text-white">The Logo:</strong> A unique Logotype/Wordmark that incorporates traditional Batak script, blending modern exploration with deep-rooted cultural heritage.</p>
              <p><strong className="text-white">Tagline:</strong> "Your Freedom On The Water" - describing the feeling of liberty and ease that customers experience through the service.</p>
            </div>
          </div>
          <div className="flex-1 w-full bg-white rounded-2xl p-10 flex flex-col items-center justify-center shadow-inner gap-4">
             <img src="/LOGO 2.png" alt="Sora Logo" className="w-full max-w-[280px] object-contain hover:scale-105 transition-transform duration-300" />
          </div>
        </section>

        {/* UI STYLE GUIDE */}
        <section className="pt-10">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0C2D6B] mb-4">UI Style Guide</h2>
            <p className="text-slate-500 max-w-2xl">This Style Guide is used for the User Interface in the Sora application. The design includes colors, typography, icons, buttons, logos, and images.</p>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full mt-6"></div>
          </div>

          <div className="space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <img src="/ColorPalettes.png" alt="Color Palettes" className="w-full rounded-xl object-contain" />
              </div>
              <div className="space-y-4 flex items-center">
                <img src="/Typography.png" alt="Typography" className="w-full rounded-xl object-contain" />
              </div>
            </div>
            <hr className="border-slate-100" />
            <div className="w-full">
              <img src="/Icons.png" alt="Icons" className="w-full max-w-4xl mx-auto rounded-xl object-contain" />
            </div>
            <hr className="border-slate-100" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img src="/Buttons.png" alt="Buttons" className="w-full rounded-xl object-contain" />
              </div>
              <div>
                <img src="/Fields.png" alt="Input Fields" className="w-full rounded-xl object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN SHOWCASE */}
        <section className="pt-10 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0C2D6B] mb-4">Design Showcase</h2>
            <div className="w-16 h-1.5 bg-[#2980B9] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-24">
            
            {/* FULL APP SCREENS OVERLAP */}
            <div className="relative w-full h-[500px] md:h-[700px] flex justify-center items-center overflow-hidden py-10">
               <PhoneMockup src="/sora7.png" alt="Sora Help" className="w-32 md:w-56 absolute -translate-x-[110%] md:-translate-x-[150%] scale-75 opacity-70 blur-[2px] z-0" />
               <PhoneMockup src="/sora6.png" alt="Sora Refund" className="w-40 md:w-64 absolute -translate-x-[60%] md:-translate-x-[80%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
               <PhoneMockup src="/sora1.png" alt="Sora Home" className="w-48 md:w-72 absolute z-20 hover:-translate-y-6 transition-transform duration-300" />
               <PhoneMockup src="/sora8.png" alt="Sora Loyalty" className="w-40 md:w-64 absolute translate-x-[60%] md:translate-x-[80%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
               <PhoneMockup src="/sora9.png" alt="Sora Referral" className="w-32 md:w-56 absolute translate-x-[110%] md:translate-x-[150%] scale-75 opacity-70 blur-[2px] z-0" />
            </div>

            {/* 3 KOLOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/sora2.png" alt="Sora Login" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Onboarding</h3>
                    <p className="text-slate-500 text-sm">Clean & intuitive login.</p>
                 </div>
               </div>
               
               <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                 <PhoneMockup src="/sora3.png" alt="Sora Booking" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Smart Booking</h3>
                    <p className="text-slate-500 text-sm">Seamless selection flow.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                 <PhoneMockup src="/sora5.png" alt="Sora Payment" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Integrated Payment</h3>
                    <p className="text-slate-500 text-sm">Multiple E-Wallet options.</p>
                 </div>
               </div>
            </div>

            {/* 2 KOLOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto px-10">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/sora4.png" alt="Sora Categories" className="w-full max-w-[280px] hover:-translate-y-4 transition-transform duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.2)]" />
               </div>
               <div className="flex flex-col items-center gap-6 md:mt-20">
                 <PhoneMockup src="/sora10.png" alt="Sora Promos" className="w-full max-w-[280px] hover:-translate-y-4 transition-transform duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.2)]" />
               </div>
            </div>

            {/* 3 KOLOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10 pb-10 mt-10">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/sora11.png" alt="Sora Promo Campaign" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Promos & Campaigns</h3>
                    <p className="text-slate-500 text-sm">Engaging offers to boost sales.</p>
                 </div>
               </div>
               
               <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                 <PhoneMockup src="/sora12.png" alt="Sora Help Center" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Help Center & FAQ</h3>
                    <p className="text-slate-500 text-sm">24/7 Support and easy guides.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                 <PhoneMockup src="/sora13.png" alt="Sora Refund" className="w-full max-w-[260px] hover:scale-105 transition-transform duration-300" />
                 <div className="text-center">
                    <h3 className="font-bold text-[#0C2D6B] text-lg">Refund Management</h3>
                    <p className="text-slate-500 text-sm">Clear and transparent policies.</p>
                 </div>
               </div>
            </div>
            
          </div>
        </section>

      </div>
    </main>
  );
}