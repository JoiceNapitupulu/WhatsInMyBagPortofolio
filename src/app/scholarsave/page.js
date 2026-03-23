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

export default function ScholarSaveCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#3B82F6] selection:text-white pb-24">
      
      {/* HEADER NAV */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#1E3A8A] font-bold text-sm hover:underline flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </Link>
          <div className="font-black tracking-tighter text-xl text-[#1E3A8A] flex items-center gap-2">
            ScholarSave<span className="text-[#3B82F6]">.</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full bg-[#1E3A8A] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 -left-24 w-72 h-72 bg-[#1E40AF] rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-20">
            <p className="text-[#93C5FD] font-bold tracking-widest uppercase text-sm mb-4">UX/UI Case Study & Business Plan</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              ScholarSave
            </h1>
            <p className="text-lg md:text-xl font-light text-blue-100 max-w-xl leading-relaxed mx-auto md:mx-0">
              Exclusive Student Discount Platform. <br/><strong className="text-white">Transforming student status into a tangible privilege.</strong>
            </p>
            
            {/* Button Explore Now */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://www.figma.com/proto/vEkqSs9zj89SsWBBk9yVnC/ScholarSave?node-id=100-47&t=lTbZVbYqbZJWcdUq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A167" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#1E3A8A] px-8 py-3.5 rounded-full font-bold text-base hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-2"
              >
                Explore Now <span className="text-xl leading-none mb-1">↗</span>
              </a>
            </div>

          </div>
          
          <div className="flex-1 flex justify-center relative w-full mt-10 md:mt-0 z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
             {/* Hero image pakai halaman Home/Discovery */}
             <PhoneMockup src="/ScholarSave3.png" alt="ScholarSave Home" className="w-56 md:w-64 hover:-translate-y-4 transition-transform duration-500 ease-out" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-28">

        {/* OVERVIEW & STATS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 sticky top-24">
            <h2 className="text-3xl font-black text-[#1E3A8A] mb-4">Project Overview</h2>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full"></div>
          </div>
          <div className="md:col-span-2 text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              Developed by the <strong>SI-Preneurs Team</strong> from Institut Teknologi Del for the <strong>Gemastik XVIII ICT Business Development competition</strong>.
            </p>
            <p>
              ScholarSave is a digital ecosystem designed to bridge the gap between students' need for affordability and local MSMEs' (UMKM) desire to reach a loyal, high-potential market. Starting as a pilot project in the Toba Region, our vision is to transform student status into a tangible, nationwide privilege.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-black text-[#1E3A8A] mb-1">26.9M</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">TAM (National)</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-black text-[#1E3A8A] mb-1">1.43M</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">SAM (Sumut)</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-black text-[#1E3A8A] mb-1">28.5k</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">SOM (Toba)</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-black text-[#3B82F6] mb-1">4.2k</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Yr 1 Target Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-black text-[#1E3A8A] mb-4">Problem Statement</h2>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-[#E34F26] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">01. For Students</h3>
              <p className="text-slate-600 text-sm">Promo information is scattered and difficult to find. Limited funds prevent students from fully exploring life experiences.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-[#FF9A00] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">02. For Merchants</h3>
              <p className="text-slate-600 text-sm">MSMEs struggle to attract the student segment because prices often don't match student budgets.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-[#1E3A8A] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">03. Lack of Trust</h3>
              <p className="text-slate-600 text-sm">Businesses need a credible space to offer discounts as a "privilege" rather than just a "clearance sale".</p>
            </div>
          </div>
        </section>

        {/* SOLUTION STATEMENT */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#1E3A8A] mb-4">Solution Statement</h2>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Centralized App & Promo Map</h3>
              <p className="text-blue-100 text-sm leading-relaxed">A one-stop application for all student-specific discounts, complete with a location-based map.</p>
            </div>
            <div className="bg-[#3B82F6] text-white p-8 rounded-3xl shadow-lg hover:translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Verified Exclusivity</h3>
              <p className="text-white/90 text-sm leading-relaxed">A secure system that ensures discounts are only accessible to verified, active students.</p>
            </div>
            <div className="bg-[#0F172A] text-white p-8 rounded-3xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Merchant Dashboard</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Tools for partners to monitor promo performance, redemption data, and student engagement.</p>
            </div>
            <div className="bg-slate-700 text-white p-8 rounded-3xl shadow-lg hover:translate-x-2 transition-transform duration-300 flex flex-col justify-center">
              <div className="text-5xl font-black opacity-20 mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Smart Financial Management</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Helping students manage their finances while enjoying more experiences during their academic years.</p>
            </div>
          </div>
        </section>

        {/* BUSINESS & REVENUE STRATEGY */}
        <section className="bg-[#EFF6FF] p-10 md:p-16 rounded-3xl border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1E3A8A] mb-4">Business & Revenue Strategy</h2>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">Growth Phases</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li><strong>Phase 1 (0-12 Months):</strong> Validation and reaching Break-Even Point (BEP) in the Toba region.</li>
                <li><strong>Phase 2 (13+ Months):</strong> Organic growth and profit maximization through internal cash flow.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">Success Metrics</h3>
              <p className="text-slate-600 text-sm">Targeting a <strong>Retention Rate &gt; 50%</strong> and a <strong>Monthly Active User Growth &gt; 20%</strong>.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#3B82F6]">
            <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">Revenue Streams</h3>
            <p className="text-slate-600 text-sm mb-4">Income is generated through transaction commissions from redeemed discounts and premium merchant subscriptions for exclusive features.</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-[#1E3A8A] font-bold rounded-lg text-sm border border-blue-100">EduFlash</span>
              <span className="px-4 py-2 bg-blue-50 text-[#1E3A8A] font-bold rounded-lg text-sm border border-blue-100">CampusConnect</span>
              <span className="px-4 py-2 bg-blue-50 text-[#1E3A8A] font-bold rounded-lg text-sm border border-blue-100">ScholarLink</span>
            </div>
          </div>
        </section>

        {/* TEAM PROFILE */}
        <section className="pt-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1E3A8A] mb-4">SI-Preneurs Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The minds behind the business strategy and product execution.</p>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">M</div>
              <h3 className="text-xl font-bold text-[#1E3A8A]">Maxwell Rumahorbo</h3>
              <p className="text-[#3B82F6] font-bold text-sm mb-4">CEO</p>
              <p className="text-slate-600 text-sm leading-relaxed">Leads the overarching business flow and pitch deck strategy. Translates market needs into strategic business solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">J</div>
              <h3 className="text-xl font-bold text-[#1E3A8A]">Joice Napitupulu</h3>
              <p className="text-[#1E3A8A] font-bold text-sm mb-4">CPO</p>
              <p className="text-slate-600 text-sm leading-relaxed">Directs the product vision, design strategy, and overall user experience. Maintains UI/UX quality standards.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">R</div>
              <h3 className="text-xl font-bold text-[#1E3A8A]">Rony Pangaribuan</h3>
              <p className="text-slate-500 font-bold text-sm mb-4">CMO</p>
              <p className="text-slate-600 text-sm leading-relaxed">Manages visual communication, marketing campaigns, and brand identity to attract the target audience.</p>
            </div>
          </div>
        </section>

        {/* BRANDING & LOGO */}
        <section className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-black mb-4">Branding & Visual Identity</h2>
            <div className="space-y-4 text-slate-300">
              <p><strong className="text-white">Primary Identity:</strong> The "S" mortarboard logo representing education and smart savings.</p>
              <p><strong className="text-white">Tagline:</strong> "Being Student is Privilege!"</p>
              <p><strong className="text-white">UI Focus:</strong> A clean, organized interface with categorized promos for Culinary, Entertainment, Education, and Travel.</p>
            </div>
          </div>
          <div className="flex-1 w-full bg-white rounded-2xl p-10 flex flex-col items-center justify-center shadow-inner gap-4">
             <img src="/ScholarSave Logo.png" alt="ScholarSave Logo" className="w-full max-w-[220px] object-contain hover:scale-105 transition-transform duration-300" />
          </div>
        </section>

        {/* DESIGN SHOWCASE UPDATED - NO DESCRIPTIONS */}
        <section className="pt-10 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1E3A8A] mb-4">Design Showcase</h2>
            <div className="w-16 h-1.5 bg-[#3B82F6] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-24">
            
            {/* HERO APP SCREENS OVERLAP */}
            <div className="relative w-full h-[500px] md:h-[650px] flex justify-center items-center overflow-hidden py-10">
               <PhoneMockup src="/ScholarSave2.png" alt="Login" className="w-36 md:w-60 absolute -translate-x-[80%] md:-translate-x-[110%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
               <PhoneMockup src="/ScholarSave10.png" alt="Discovery" className="w-48 md:w-72 absolute z-20 hover:-translate-y-6 transition-transform duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
               <PhoneMockup src="/ScholarSave4.png" alt="Promo Lists" className="w-36 md:w-60 absolute translate-x-[80%] md:translate-x-[110%] scale-90 opacity-90 z-10 hover:-translate-y-4 transition-transform duration-300" />
            </div>

            {/* 6 KOLOM GRID (HANYA MOCKUP TANPA DESKRIPSI TEKS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-10 border-t border-slate-200 pt-20">
               <div className="flex flex-col items-center">
                 <PhoneMockup src="/ScholarSave5.png" alt="ScholarSave Interface 1" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
               <div className="flex flex-col items-center mt-10 md:mt-0">
                 <PhoneMockup src="/ScholarSave6.png" alt="ScholarSave Interface 2" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
               <div className="flex flex-col items-center mt-10 lg:mt-0">
                 <PhoneMockup src="/ScholarSave10.png" alt="ScholarSave Interface 3" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
               <div className="flex flex-col items-center mt-10">
                 <PhoneMockup src="/ScholarSave11.png" alt="ScholarSave Interface 4" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
               <div className="flex flex-col items-center mt-10">
                 <PhoneMockup src="/ScholarSave12.png" alt="ScholarSave Interface 5" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
               <div className="flex flex-col items-center mt-10">
                 <PhoneMockup src="/ScholarSave13.png" alt="ScholarSave Interface 6" className="w-full max-w-[270px] hover:-translate-y-4 transition-transform duration-300 shadow-xl" />
               </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}