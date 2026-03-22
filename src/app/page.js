'use client';

import { useState, Suspense, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float, ContactShadows, Image, DragControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three'; 

function Item({ url, scale, position, rotation, ...props }) {
  const gltf = useGLTF(url);
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive object={gltf.scene} scale={scale} position={position} rotation={rotation} {...props} />
    </Float>
  );
}

function PortfolioItem({ url, targetHeight, position, visible, opacity = 1, onClick, startPosition = [0, -1, 0] }) {
  const texture = useTexture(url);
  const outerGroupRef = useRef(); 
  const imageRef = useRef(); 

  const { width, height } = texture.image;
  const aspectRatio = width / height;

  useFrame((state, delta) => {
    if (!outerGroupRef.current) return;

    const targetX = visible ? position[0] : startPosition[0];
    const targetY = visible ? position[1] : startPosition[1];
    const targetZ = visible ? position[2] : startPosition[2];

    const targetScale = visible ? 1 : 0;
    const targetOpacity = visible ? opacity : 0;
    const speed = 6; 

    outerGroupRef.current.position.x = THREE.MathUtils.lerp(outerGroupRef.current.position.x, targetX, delta * speed);
    outerGroupRef.current.position.y = THREE.MathUtils.lerp(outerGroupRef.current.position.y, targetY, delta * speed);
    outerGroupRef.current.position.z = THREE.MathUtils.lerp(outerGroupRef.current.position.z, targetZ, delta * speed);

    const currentScale = outerGroupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * speed);
    outerGroupRef.current.scale.set(nextScale, nextScale, nextScale);

    if (imageRef.current && imageRef.current.material) {
      imageRef.current.material.opacity = THREE.MathUtils.lerp(imageRef.current.material.opacity, targetOpacity, delta * speed);
    }
  });

  return (
    <group ref={outerGroupRef} position={startPosition} scale={[0, 0, 0]}>
      <DragControls>
        <Float speed={3} rotationIntensity={0.1} floatIntensity={0.8}>
          <Image 
            ref={imageRef} url={url} scale={[targetHeight * aspectRatio, targetHeight]} transparent={true} onClick={onClick} 
            onPointerOver={() => visible && (document.body.style.cursor = 'grab')}
            onPointerOut={() => visible && (document.body.style.cursor = "url('/cursor.png'), auto")}
            onPointerDown={() => visible && (document.body.style.cursor = 'grabbing')}
            onPointerUp={() => visible && (document.body.style.cursor = 'grab')}
          />
        </Float>
      </DragControls>
    </group>
  );
}

function HoverFanCard({ url, targetHeight, position, rotation = [0, 0, 0], visible, startPosition = [0, -1, 0], description }) {
  const texture = useTexture(url);
  const outerGroupRef = useRef(); 
  const imageRef = useRef();
  
  const [hovered, setHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); 

  const { width, height } = texture.image;
  const aspectRatio = width / height;

  useFrame((state, delta) => {
    if (!outerGroupRef.current) return;
    const isHovered = (hovered || isFlipped) && visible;

    const targetX = visible ? (isFlipped ? 0 : position[0]) : startPosition[0];
    const targetY = visible ? (isFlipped ? 1.5 : (isHovered ? position[1] + 0.4 : position[1])) : startPosition[1];
    const targetZ = visible ? (isFlipped ? 4.5 : (isHovered ? position[2] + 1.5 : position[2])) : startPosition[2];

    const targetRotY = visible ? (isFlipped ? Math.PI : 0) : 0; 
    const targetRotZ = visible ? (isFlipped ? 0 : (isHovered ? 0 : rotation[2])) : 0;

    const targetScale = visible ? (isFlipped ? 1.3 : (isHovered ? 1.15 : 1)) : 0;
    const targetOpacity = visible ? (isFlipped ? 0.05 : 1) : 0; 
    const speed = 6; 

    outerGroupRef.current.position.x = THREE.MathUtils.lerp(outerGroupRef.current.position.x, targetX, delta * speed);
    outerGroupRef.current.position.y = THREE.MathUtils.lerp(outerGroupRef.current.position.y, targetY, delta * speed);
    outerGroupRef.current.position.z = THREE.MathUtils.lerp(outerGroupRef.current.position.z, targetZ, delta * speed);
    outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(outerGroupRef.current.rotation.y, targetRotY, delta * speed);
    outerGroupRef.current.rotation.z = THREE.MathUtils.lerp(outerGroupRef.current.rotation.z, targetRotZ, delta * speed);

    const currentScale = outerGroupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * speed);
    outerGroupRef.current.scale.set(nextScale, nextScale, nextScale);

    if (imageRef.current && imageRef.current.material) {
      imageRef.current.material.opacity = THREE.MathUtils.lerp(imageRef.current.material.opacity, targetOpacity, delta * speed);
    }
  });

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (description) setIsFlipped(!isFlipped);
  };

  return (
    <group ref={outerGroupRef} position={startPosition} scale={[0, 0, 0]}>
      <Image 
        ref={imageRef} url={url} scale={[targetHeight * aspectRatio, targetHeight]} transparent={true} onClick={handleCardClick}
        onPointerOver={(e) => { e.stopPropagation(); if(visible) { setHovered(true); document.body.style.cursor = description ? 'pointer' : 'default'; } }}
        onPointerOut={() => { if(visible) { setHovered(false); document.body.style.cursor = "url('/cursor.png'), auto"; } }}
      />
      {description && isFlipped && (
        <Html transform distanceFactor={1.5} position={[0, 0, -0.01]} rotation={[0, Math.PI, 0]} zIndexRange={[100, 0]}>
          <div onClick={handleCardClick} className="w-[420px] h-[680px] overflow-y-auto bg-[#1a0505] p-10 rounded-none shadow-2xl text-white cursor-pointer pointer-events-auto flex flex-col border border-white/10">
            {description}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function Home() {
  const router = useRouter(); 
  const [showAbout, setShowAbout] = useState(false);
  const [folderStep, setFolderStep] = useState(0); 
  const [aboutStep, setAboutStep] = useState(0);
  const [soraStep, setSoraStep] = useState(0);
  
  // STATE BARU UNTUK WHOOSH
  const [whooshStep, setWhooshStep] = useState(0);

  const uniformHeight = 2; 
  const cardHeight = 3.5; 

  const handleBagClick = () => {
    setShowAbout(!showAbout);
    if (showAbout) {
      setFolderStep(0); 
      setAboutStep(0);
      setSoraStep(0); 
      setWhooshStep(0); // Reset Whoosh
    }
  };

  const handleFolderClick = (e) => {
    e.stopPropagation();
    setAboutStep(0); 
    setSoraStep(0);
    setWhooshStep(0);
    setFolderStep((prev) => (prev + 1) % 3);
  };

  const handleAboutClick = (e) => {
    e.stopPropagation();
    if (aboutStep === 0) {
      setFolderStep(0); 
      setSoraStep(0);
      setWhooshStep(0);
      setAboutStep(1); 
    } else if (aboutStep === 1) {
      router.push('/about'); 
    }
  };

  const handleSoraClick = (e) => {
    e.stopPropagation();
    if (soraStep === 0) {
      setFolderStep(0);
      setAboutStep(0);
      setWhooshStep(0);
      setSoraStep(1); 
    } else if (soraStep === 1) {
      router.push('/sora'); 
    }
  };

  // LOGIKA KLIK WHOOSH
  const handleWhooshClick = (e) => {
    e.stopPropagation();
    if (whooshStep === 0) {
      setFolderStep(0);
      setAboutStep(0);
      setSoraStep(0);
      setWhooshStep(1); 
    } else if (whooshStep === 1) {
      router.push('/whoosh'); 
    }
  };

  const isFocusingAny = folderStep > 0 || aboutStep > 0 || soraStep > 0 || whooshStep > 0;
  const fadeOutOpacity = isFocusingAny ? 0.05 : 1; 

  let gdPosition = [0, 2.5, 1]; 
  let gdOpacity = folderStep > 0 ? 1 : fadeOutOpacity;
  if (folderStep === 1) gdPosition = [0, 0, 3.5]; 
  else if (folderStep === 2) { gdPosition = [0, 1.5, 1]; gdOpacity = 0.1; }

  let amPosition = [-4.5, 0, 1];
  let amOpacity = aboutStep > 0 ? 1 : fadeOutOpacity;
  if (aboutStep === 1) amPosition = [0, 0, 3.5]; 

  let soraPosition = [-3.5, 2, 1];
  let soraOpacity = soraStep > 0 ? 1 : fadeOutOpacity;
  if (soraStep === 1) soraPosition = [0, 0, 3.5];

  // POSISI WHOOSH
  let whooshPosition = [4.5, 0, 1];
  let whooshOpacity = whooshStep > 0 ? 1 : fadeOutOpacity;
  if (whooshStep === 1) whooshPosition = [0, 0, 3.5];

  const explodeStartPos = [0, 0, 3.5]; 

  const nyepiDesc = (
    <div className="text-[13px] font-sans flex flex-col gap-4">
      <h2 className="text-[22px] font-black leading-tight text-[#A81F30] uppercase tracking-tighter">Project Overview: Hari Raya Nyepi Greeting – Del Programming Club</h2>
      <p className="text-white/90 leading-relaxed font-medium pb-3 border-b border-white/10">This project focused on creating a commemorative visual for Hari Raya Nyepi (Saka New Year 1948) for the Del Programming Club (Delpro). The objective was to design a greeting that conveys peace and reflection, blending modern graphic techniques with traditional cultural elements.</p>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[16px] text-white">Key Highlights</h3>
        <ul className="list-disc pl-4 space-y-2 text-white/80 text-[12px]">
          <li><strong>Visual Strategy:</strong> Integrated a halftone pattern into the background to provide a contemporary texture and visual depth to the photograph of the Pura Ulun Danu.</li>
          <li><strong>Typography:</strong> Utilized a high-contrast font pairing—an elegant script for "Selamat" and a bold, structured sans-serif for "Hari Raya Nyepi"—to establish a clear and engaging visual hierarchy.</li>
          <li><strong>Branding Integration:</strong> Strategically placed Delpro’s identity in the header and footer (including the club's email and Instagram handle) to maintain brand consistency for social media distribution.</li>
          <li><strong>Color Palette:</strong> Applied a deep, maroon-toned gradient to evoke a sense of solemnity and sanctity, perfectly matching the spiritual significance of the Nyepi holiday.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
        <h3 className="font-bold text-[16px] text-white">Tools Used</h3>
        <p className="text-white/80 text-[12px]"><strong>Canva:</strong> Used for the entire layout process, asset editing, filter applications, and final graphic composition.</p>
      </div>
    </div>
  );
  
  const cnyDesc = (
    <div className="text-[13px] font-sans flex flex-col gap-4">
      <h2 className="text-[22px] font-black leading-tight text-[#D32F2F] uppercase tracking-tighter">Project Overview: Chinese New Year Greeting – Del Programming Club</h2>
      <p className="text-white/90 leading-relaxed font-medium pb-3 border-b border-white/10">This project involved designing a celebratory digital poster for Chinese New Year 2026, specifically honoring the Year of the Horse, for the Del Programming Club (Delpro). The goal was to create a high-energy visual that symbolizes progress and good fortune for the club members and the wider community.</p>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[16px] text-white">Key Highlights</h3>
        <ul className="list-disc pl-4 space-y-2 text-white/80 text-[12px]">
          <li><strong>Visual Concept:</strong> Created a custom, high-impact horse illustration.</li>
          <li><strong>Typography:</strong> Employed a bold, heavy sans-serif typeface for the primary slogan, "RIDE THE WAVE OF LUCK," to ensure maximum readability and impact on mobile screens.</li>
          <li><strong>Color Palette:</strong> Utilized a classic combination of deep red (representing luck and joy) and a dark charcoal gradient to create a sophisticated, modern aesthetic that aligns with a tech-focused organization.</li>
          <li><strong>Composition & Branding:</strong> Maintained a clean layout by positioning the Delpro logo in the top-right corner, ensuring brand recognition while allowing the central artwork to remain the focal point.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
        <h3 className="font-bold text-[16px] text-white">Tools Used</h3>
        <p className="text-white/80 text-[12px]"><strong>Adobe Illustrator:</strong> Used for the entire creation process, including generating the initial vector illustration of the horse, precisely applying the custom halftone pattern, managing the complex typography, and handling the precise color gradient and final layout.</p>
      </div>
    </div>
  );
  
  const himsiDesc = (
    <div className="text-[13px] font-sans flex flex-col gap-4">
      <h2 className="text-[22px] font-black leading-tight text-[#C62828] uppercase tracking-tighter">Project Overview: Valentine Menfess Campaign – HIMSI IT Del</h2>
      <p className="text-white/90 leading-relaxed font-medium pb-3 border-b border-white/10">This project involved designing a digital social media poster for the Information Systems Student Association (HIMSI) at Institut Teknologi Del. The campaign was launched for Valentine’s Day, specifically to promote an anonymous "menfess" (mention confession) platform, allowing students to send messages and greetings within the campus community.</p>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[16px] text-white">Key Highlights</h3>
        <ul className="list-disc pl-4 space-y-2 text-white/80 text-[12px]">
          <li><strong>Visual Concept:</strong> The design adopts a "secret love letter" aesthetic. By using a maroon and cream lace-bordered card against a blurred school locker background, the visual evokes a nostalgic and relatable campus atmosphere.</li>
          <li><strong>Typography:</strong> Featured a strong visual contrast between the bold, modern sans-serif for the hook—"Too Nervous To Make a Move?"—and a delicate script for the decorative elements, creating a clear and engaging visual hierarchy.</li>
          <li><strong>Interactive Integration:</strong> Strategically integrated a digital call-to-action (CTA) by featuring the NGL.LINK sticker, bridging the gap between the static graphic and the functional anonymous messaging platform.</li>
          <li><strong>Branding & Identity:</strong> Included the official IT Del and HIMSI logos for organizational authority, alongside the campaign hashtag #TUMBURSATAHI and the HIMSI IT DEL 2026 footer to maintain consistent branding for the current cabinet.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
        <h3 className="font-bold text-[16px] text-white">Tools Used</h3>
        <p className="text-white/80 text-[12px]"><strong>Canva:</strong> Utilized for layout composition, asset layering (lockers, envelopes, and stationery elements), and typography management.</p>
      </div>
    </div>
  );
  
  const idulfitriDesc = (
    <div className="text-[13px] font-sans flex flex-col gap-4">
      <h2 className="text-[22px] font-black leading-tight text-[#E8D5B5] uppercase tracking-tighter">Project Overview: Eid Al-Fitr Greeting – Del Programming Club</h2>
      <p className="text-white/90 leading-relaxed font-medium pb-3 border-b border-white/10">This project involved creating a digital greeting for Eid Al-Fitr (1 Syawal 1447 H) for the Del Programming Club (Delpro). The design aims to convey a message of victory, purity, and solemnity through a clean, modern, and professional aesthetic.</p>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[16px] text-white">Key Highlights</h3>
        <ul className="list-disc pl-4 space-y-2 text-white/80 text-[12px]">
          <li><strong>Visual Strategy:</strong> Utilized a low-angle photograph of a mosque minaret to evoke a sense of grandeur and spirituality. A halftone pattern was integrated into the sky background to provide a contemporary, tech-inspired texture.</li>
          <li><strong>Typography:</strong> Combined an elegant script font for "Happy" with a bold, structured sans-serif for "EID AL-FITR." This pairing creates a dynamic visual balance that is both celebratory and formal.</li>
          <li><strong>Color Palette:</strong> Adopted a warm sepia/monochromatic color scheme to evoke a sense of nostalgia, peace, and simplicity, which aligns with the spiritual significance of the holiday.</li>
          <li><strong>Branding Integration:</strong> Maintained consistent Delpro branding by placing the club logo at the top and the official contact information (email and Instagram) in the footer for clear communication and brand recognition.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
        <h3 className="font-bold text-[16px] text-white">Tools Used</h3>
        <p className="text-white/80 text-[12px]"><strong>Canva:</strong> Used for the entire layout process, including image filtering, typography management, and final graphic composition.</p>
      </div>
    </div>
  );

  return (
    <main className="h-screen w-full bg-[#f5f5f5] relative overflow-hidden">
      
      <div className={`absolute top-10 left-10 z-10 pointer-events-none transition-all duration-500 ${showAbout ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        <h1 className="text-5xl font-black text-neutral-800 tracking-tighter">WHAT'S IN <br /> MY BAG?</h1>
        <p className="text-neutral-500 mt-2">Joice's Interactive Portfolio</p>
      </div>

      <Canvas camera={{ position: [0, 10, 5], fov: 35 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} />
        <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={0} /> 

        <Item url="/models/bag.glb" scale={2} position={[0, -1, 0]} rotation={[0, 0, 0]} onClick={handleBagClick} onPointerOver={() => document.body.style.cursor = "url('/cursor.png'), pointer"} onPointerOut={() => document.body.style.cursor = "url('/cursor.png'), auto"} />

        <Suspense fallback={null}>
          
          <PortfolioItem 
            url="/soraapp.png" 
            targetHeight={soraStep === 1 ? 2.5 : uniformHeight} 
            position={soraPosition} 
            visible={showAbout} 
            opacity={soraOpacity} 
            onClick={handleSoraClick}
          />

          <PortfolioItem url="/scholarsaveapp.png" targetHeight={uniformHeight} position={[3.5, 2, 1]} visible={showAbout} opacity={fadeOutOpacity} />
          
          {/* --- WHOOSH CARD YANG SUDAH INTERAKTIF --- */}
          <PortfolioItem 
            url="/whooshapp.png" 
            targetHeight={whooshStep === 1 ? 2.5 : uniformHeight} 
            position={whooshPosition} 
            visible={showAbout} 
            opacity={whooshOpacity} 
            onClick={handleWhooshClick}
          />

          <PortfolioItem url="/joydeeapp.png" targetHeight={uniformHeight} position={[-3.5, -2, 1]} visible={showAbout} opacity={fadeOutOpacity} />
          <PortfolioItem url="/studycase.png" targetHeight={uniformHeight} position={[3.5, -2, 1]} visible={showAbout} opacity={fadeOutOpacity} />
          
          <PortfolioItem url="/about-me.png" targetHeight={aboutStep === 1 ? 2.5 : uniformHeight} position={amPosition} visible={showAbout} opacity={amOpacity} onClick={handleAboutClick} />

          <PortfolioItem url="/graphicdesign.png" targetHeight={folderStep === 1 ? 2.5 : uniformHeight} position={gdPosition} visible={showAbout} opacity={gdOpacity} onClick={handleFolderClick} />

          <HoverFanCard url="/Nyepi.png" targetHeight={cardHeight} position={[-2.2, 0, 3.1]} rotation={[0, 0, 0.25]} startPosition={explodeStartPos} visible={showAbout && folderStep === 2} description={nyepiDesc} />
          <HoverFanCard url="/CNY.png" targetHeight={cardHeight} position={[-0.75, 0.3, 3.2]} rotation={[0, 0, 0.08]} startPosition={explodeStartPos} visible={showAbout && folderStep === 2} description={cnyDesc} />
          <HoverFanCard url="/HimsiValentine.jpeg" targetHeight={cardHeight} position={[0.75, 0.3, 3.3]} rotation={[0, 0, -0.08]} startPosition={explodeStartPos} visible={showAbout && folderStep === 2} description={himsiDesc} />
          <HoverFanCard url="/idulfitri.png" targetHeight={cardHeight} position={[2.2, 0, 3.4]} rotation={[0, 0, -0.25]} startPosition={explodeStartPos} visible={showAbout && folderStep === 2} description={idulfitriDesc} />
        </Suspense>
      </Canvas>
    </main>
  );
}