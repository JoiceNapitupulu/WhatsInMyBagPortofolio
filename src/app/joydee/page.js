'use client';

import Link from 'next/link';

// --- KOMPONEN BINGKAI HP CSS (ANTI PECAH) ---
const PhoneMockup = ({ src, alt, className = "" }) => (
  <div className={`relative border-[10px] md:border-[14px] border-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-900 flex-shrink-0 aspect-[9/19.5] ${className}`}>
    <div className="absolute top-0 inset-x-0 h-5 md:h-6 bg-slate-900 rounded-b-2xl w-24 md:w-32 mx-auto z-20"></div>
    <div className="absolute top-20 -left-[14px] w-1 h-10 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-36 -left-[14px] w-1 h-14 bg-slate-800 rounded-l-md"></div>
    <div className="absolute top-28 -right-[14px] w-1 h-16 bg-slate-800 rounded-r-md"></div>
    <div className="w-full h-full overflow-hidden bg-[#FFF5F6] relative z-10 flex items-center justify-center text-[#D47A7E] text-sm text-center p-4">
       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top z-10" onError={(e) => e.target.style.display = 'none'} />
       <span>Membutuhkan gambar<br/><b>{src}</b><br/>di folder public</span>
    </div>
  </div>
);

export default function JoyDeeCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FFFBFB] text-[#4A3535] font-sans selection:bg-[#D47A7E] selection:text-white pb-24">
      
      {/* HEADER NAV */}
      <nav className="w-full bg-[#FFFBFB]/80 backdrop-blur-md border-b border-[#F5E1E2] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#4A3535] font-bold text-sm hover:underline flex items-center gap-2">
            <span>←</span> Back to Bag
          </Link>
          <div className="font-black tracking-tighter text-xl text-[#4A3535] flex items-center gap-2">
            JoyDee<span className="text-[#D47A7E]">.</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full bg-[#C27A7E] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D9888A] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 -left-24 w-72 h-72 bg-[#A35C60] rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-20">
            <p className="text-[#FFE4E6] font-bold tracking-widest uppercase text-sm mb-4">UX/UI Case Study</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              JoyDee
            </h1>
            <p className="text-lg md:text-xl font-medium text-pink-50 max-w-xl leading-relaxed mx-auto md:mx-0">
              A Sweet Digital Experience Exploration. <br/><strong className="font-light">Premium dessert shop concept with a minimalist UI and soft color palettes.</strong>
            </p>
            
            {/* Button Explore Now - LINK DIPERBARUI */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://www.figma.com/proto/ZrDAwCkeWRblN75Ij1KFR2/JoyDee?node-id=1-94&t=aZ83AiOayfeny31R-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#C27A7E] px-8 py-3.5 rounded-full font-bold text-base hover:bg-pink-50 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center gap-2"
              >
                Explore Now <span className="text-xl leading-none mb-1">↗</span>
              </a>
            </div>

          </div>
          
          <div className="flex-1 flex justify-center relative w-full mt-10 md:mt-0 z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
             <PhoneMockup src="/JoyDee2.png" alt="JoyDee Home" className="w-56 md:w-64 hover:-translate-y-4 transition-transform duration-500 ease-out shadow-[0_30px_60px_rgba(163,92,96,0.5)]" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-28">

        {/* OVERVIEW SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 sticky top-24">
            <h2 className="text-3xl font-black text-[#4A3535] mb-4">Project Overview</h2>
            <div className="w-16 h-1.5 bg-[#D47A7E] rounded-full"></div>
          </div>
          <div className="md:col-span-2 text-lg text-[#5C4343] leading-relaxed space-y-6">
            <p>
              <strong>JoyDee</strong> is a mobile application concept designed for a premium dessert shop. Created as a personal exploration project during high school, it served as a creative sandbox to master Figma's design tools, focusing on minimalist UI, soft color palettes, and a seamless digital ordering journey.
            </p>
            <p>
              The project aims to visualize a modern, inviting interface where dessert enthusiasts can discover and order their favorite treats with ease. The design prioritizes "visual hunger" using high-quality imagery to entice users paired with a clean, pastel-toned layout.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F5E1E2]">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1E2]">
                <div className="text-xl font-black text-[#C27A7E] mb-1">High School</div>
                <div className="text-xs font-bold text-[#8A6A6A] uppercase tracking-wide">Project Type</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1E2]">
                <div className="text-xl font-black text-[#C27A7E] mb-1">Aesthetics</div>
                <div className="text-xs font-bold text-[#8A6A6A] uppercase tracking-wide">Core Focus</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1E2]">
                <div className="text-xl font-black text-[#C27A7E] mb-1">Figma</div>
                <div className="text-xs font-bold text-[#8A6A6A] uppercase tracking-wide">Primary Tool</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOLUTION (USER FLOW) */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-[#F5E1E2] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF5F6] rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl font-black text-[#4A3535] mb-4">The Solution</h2>
            <p className="text-[#8A6A6A] max-w-2xl mx-auto">Designing a seamless user flow from discovery to checkout.</p>
            <div className="w-16 h-1.5 bg-[#D47A7E] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-[#FFF5F6] p-8 rounded-2xl border-l-4 border-[#D47A7E] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#4A3535]">01. Personalized Discovery</h3>
              <p className="text-[#5C4343] text-sm">A home screen that greets users by name ("Hi, Rafayel!") and features "Our Top Picks" and "What's New?" sections to simplify decision-making.</p>
            </div>
            <div className="bg-[#FFF5F6] p-8 rounded-2xl border-l-4 border-[#C27A7E] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#4A3535]">02. Transparency</h3>
              <p className="text-[#5C4343] text-sm">Detailed product pages showing ingredients (e.g., Fresh Strawberries, Heavy Cream) and price clarity (IDR 45.000).</p>
            </div>
            <div className="bg-[#FFF5F6] p-8 rounded-2xl border-l-4 border-[#A35C60] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#4A3535]">03. Frictionless Checkout</h3>
              <p className="text-[#5C4343] text-sm">A multi-step payment process supporting major digital methods like PayPal, Visa, and Mastercard.</p>
            </div>
            <div className="bg-[#FFF5F6] p-8 rounded-2xl border-l-4 border-[#4A3535] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#4A3535]">04. Order Confidence</h3>
              <p className="text-[#5C4343] text-sm">A comprehensive "Review your Order" screen providing shipping details and payment summaries before final confirmation.</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#4A3535] mb-4">Key Features</h2>
            <div className="w-16 h-1.5 bg-[#D47A7E] rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#D47A7E] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-black opacity-20 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Interactive Menu</h3>
              <p className="text-pink-50 text-sm leading-relaxed">Clean cards for popular items like Strawberry Mousse, Pink Macaroons, and Ichigo Whip.</p>
            </div>
            <div className="bg-[#C27A7E] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-black opacity-20 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Featured Hero Items</h3>
              <p className="text-pink-50 text-sm leading-relaxed">Large, high-impact visuals for new arrivals like the "Oreo Overload" waffle.</p>
            </div>
            <div className="bg-[#A35C60] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-black opacity-20 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Secure Payment UI</h3>
              <p className="text-pink-50 text-sm leading-relaxed">Minimalist card entry and password verification screens.</p>
            </div>
            <div className="bg-[#4A3535] text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-black opacity-20 mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Success Feedback</h3>
              <p className="text-pink-50 text-sm leading-relaxed">A clear, visual confirmation screen once the transaction is successful.</p>
            </div>
          </div>
        </section>

        {/* BRANDING & IDENTITY */}
        <section className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-[#F5E1E2] flex flex-col md:flex-row items-center gap-12 mt-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-black text-[#4A3535] mb-4">Branding & Identity</h2>
            <div className="space-y-4 text-[#5C4343]">
              <p><strong>The Name:</strong> "JoyDee" — representing the "joy" of eating desserts.</p>
              <p><strong>Visual Style:</strong> A signature soft pink, peach, and brown palette to evoke feelings of sweetness, comfort, and warmth.</p>
              <p><strong>Tagline:</strong> "Let's get you signed in and grab your fav sweets!"</p>
              <p><strong>Mascot:</strong> A cute fish-inspired character, adding a playful and memorable touch to the brand.</p>
            </div>
          </div>
          <div className="flex-1 w-full bg-[#FFF5F6] rounded-2xl p-10 flex flex-col items-center justify-center shadow-inner gap-4 border border-[#F5E1E2]">
             <img src="/JoyDee logo.png" alt="JoyDee Mascot Logo" className="w-full max-w-[200px] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md" />
          </div>
        </section>

        {/* DESIGN SHOWCASE */}
        <section className="pt-10 border-t border-[#F5E1E2]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#4A3535] mb-4">Design Showcase</h2>
            <p className="text-[#8A6A6A] max-w-2xl mx-auto">End-to-end user journey for a sweet experience.</p>
            <div className="w-16 h-1.5 bg-[#D47A7E] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="space-y-16">
            
            {/* HERO APP SCREENS OVERLAP */}
            <div className="relative w-full h-[500px] md:h-[650px] flex justify-center items-center overflow-hidden py-10">
               <PhoneMockup src="/JoyDee1.png" alt="Login" className="w-36 md:w-60 absolute -translate-x-[110%] md:-translate-x-[130%] scale-75 opacity-80 blur-[1px] z-0 hover:z-30 hover:scale-90 hover:opacity-100 hover:blur-none transition-all duration-500" />
               <PhoneMockup src="/JoyDee4.png" alt="Product" className="w-40 md:w-64 absolute -translate-x-[55%] md:-translate-x-[70%] scale-90 opacity-95 z-10 hover:z-30 hover:scale-100 transition-all duration-500" />
               <PhoneMockup src="/JoyDee2.png" alt="Discovery" className="w-48 md:w-72 absolute z-20 hover:-translate-y-6 transition-transform duration-500 shadow-[0_30px_60px_rgba(74,53,53,0.3)]" />
               <PhoneMockup src="/JoyDee9.png" alt="Review" className="w-40 md:w-64 absolute translate-x-[55%] md:translate-x-[70%] scale-90 opacity-95 z-10 hover:z-30 hover:scale-100 transition-all duration-500" />
               <PhoneMockup src="/JoyDee8.png" alt="Success" className="w-36 md:w-60 absolute translate-x-[110%] md:translate-x-[130%] scale-75 opacity-80 blur-[1px] z-0 hover:z-30 hover:scale-90 hover:opacity-100 hover:blur-none transition-all duration-500" />
            </div>

            {/* USER JOURNEY FLOW GRID (6 MAIN SCREENS DENGAN DESKRIPSI) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-10 border-t border-[#F5E1E2] pt-16">
               <div className="flex flex-col items-center gap-6">
                 <PhoneMockup src="/JoyDee1.png" alt="JoyDee Onboarding" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#D47A7E] text-white flex items-center justify-center font-bold mx-auto mb-3">1</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Onboarding</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Minimalist login screen for quick access.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
                 <PhoneMockup src="/JoyDee2.png" alt="JoyDee Discovery" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#C27A7E] text-white flex items-center justify-center font-bold mx-auto mb-3">2</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Discovery</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Home screen featuring Top Picks and New arrivals.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10 lg:mt-0">
                 <PhoneMockup src="/JoyDee4.png" alt="JoyDee Product Detail" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#A35C60] text-white flex items-center justify-center font-bold mx-auto mb-3">3</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Transparency</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Detailed product pages with ingredients and prices.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10">
                 <PhoneMockup src="/JoyDee9.png" alt="JoyDee Review Order" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#D47A7E] text-white flex items-center justify-center font-bold mx-auto mb-3">4</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Order Confidence</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Review your order with shipping and payment summaries.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10">
                 <PhoneMockup src="/JoyDee6.png" alt="JoyDee Checkout" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#C27A7E] text-white flex items-center justify-center font-bold mx-auto mb-3">5</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Secure Checkout</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Multi-step payment supporting major digital methods.</p>
                 </div>
               </div>

               <div className="flex flex-col items-center gap-6 mt-10">
                 <PhoneMockup src="/JoyDee8.png" alt="JoyDee Success" className="w-full max-w-[240px] hover:scale-105 transition-transform duration-300 shadow-[0_15px_40px_rgba(212,122,126,0.15)]" />
                 <div className="text-center mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#A35C60] text-white flex items-center justify-center font-bold mx-auto mb-3">6</div>
                    <h3 className="font-bold text-[#4A3535] text-lg">Success Feedback</h3>
                    <p className="text-[#8A6A6A] text-sm px-2">Clear visual confirmation once transaction is successful.</p>
                 </div>
               </div>
            </div>

            {/* ADDITIONAL SCREENS (SISA MOCKUPS) */}
            <div className="bg-[#FFF5F6] rounded-3xl mt-20 p-10 border border-[#F5E1E2]">
              <h3 className="text-2xl font-black text-center text-[#4A3535] mb-10">Additional Interfaces</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                 <div className="flex flex-col items-center gap-4">
                   <PhoneMockup src="/JoyDee3.png" alt="Product Variation" className="w-full max-w-[200px] hover:-translate-y-2 transition-transform duration-300 shadow-md" />
                   <h3 className="font-bold text-[#4A3535] text-sm">Product Variation</h3>
                 </div>
                 <div className="flex flex-col items-center gap-4 mt-8 md:mt-0">
                   <PhoneMockup src="/JoyDee5.png" alt="Shopping Cart" className="w-full max-w-[200px] hover:-translate-y-2 transition-transform duration-300 shadow-md" />
                   <h3 className="font-bold text-[#4A3535] text-sm">Shopping Cart</h3>
                 </div>
                 <div className="flex flex-col items-center gap-4 mt-8 lg:mt-0">
                   <PhoneMockup src="/JoyDee7.png" alt="Security PIN" className="w-full max-w-[200px] hover:-translate-y-2 transition-transform duration-300 shadow-md" />
                   <h3 className="font-bold text-[#4A3535] text-sm">Security Verification</h3>
                 </div>
                 <div className="flex flex-col items-center gap-4 mt-8 lg:mt-0">
                   <PhoneMockup src="/JoyDee10.png" alt="Brand Splash" className="w-full max-w-[200px] hover:-translate-y-2 transition-transform duration-300 shadow-md" />
                   <h3 className="font-bold text-[#4A3535] text-sm">Brand Splash</h3>
                 </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}