'use client';

import { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float, ContactShadows, Image, DragControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three'; 

// --- KOMPONEN TAS 3D ---
function Item({ url, scale, position, rotation, ...props }) {
  const gltf = useGLTF(url);
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive 
        object={gltf.scene} 
        scale={scale} 
        position={position} 
        rotation={rotation}
        {...props} 
      />
    </Float>
  );
}

// --- KOMPONEN PROJECT UTAMA (DRAG-ABLE) ---
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
            ref={imageRef}
            url={url} 
            scale={[targetHeight * aspectRatio, targetHeight]} 
            transparent={true} 
            onClick={onClick} 
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

// --- KOMPONEN KARTU KIPAS (HOVER FOKUS & BISA FLIP!) ---
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

    // FIX FLIP: Pindah ke tengah dan maju biar gampang dibaca
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
    if (description) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <group ref={outerGroupRef} position={startPosition} scale={[0, 0, 0]}>
      <Image 
        ref={imageRef}
        url={url} 
        scale={[targetHeight * aspectRatio, targetHeight]} 
        transparent={true} 
        onClick={handleCardClick}
        onPointerOver={(e) => { 
          e.stopPropagation(); 
          if(visible) { setHovered(true); document.body.style.cursor = description ? 'pointer' : 'default'; }
        }}
        onPointerOut={() => { 
          if(visible) { setHovered(false); document.body.style.cursor = "url('/cursor.png'), auto"; }
        }}
      />
      
      {/* HTML OVERLAY (Panel Belakang) */}
      {description && isFlipped && (
        <Html 
          transform 
          distanceFactor={1.5} 
          position={[0, 0, -0.01]} 
          rotation={[0, Math.PI, 0]} 
          zIndexRange={[100, 0]} // Pastikan z-index tinggi biar bisa diklik
        >
          {/* FIX: rounded-none, ukuran tinggi memanjang, bg solid */}
          <div 
            onClick={handleCardClick}
            className="w-[420px] h-[680px] overflow-y-auto bg-[#1a0505] p-10 rounded-none shadow-2xl text-white cursor-pointer pointer-events-auto flex flex-col justify-center border border-white/10"
          >
            {description}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [folderStep, setFolderStep] = useState(0); 

  const uniformHeight = 2; 
  const cardHeight = 3.5; 

  const handleBagClick = () => {
    setShowAbout(!showAbout);
    if (showAbout) setFolderStep(0); 
  };

  const handleFolderClick = (e) => {
    e.stopPropagation();
    setFolderStep((prev) => (prev + 1) % 3);
  };

  const mainItemsOpacity = folderStep > 0 ? 0.05 : 1; 

  let gdPosition = [0, 2.5, 1]; 
  let gdOpacity = 1;

  if (folderStep === 1) {
    gdPosition = [0, 0, 3.5]; 
    gdOpacity = 1;
  } else if (folderStep === 2) {
    gdPosition = [0, 1.5, 1]; 
    gdOpacity = 0.1; 
  }

  const explodeStartPos = [0, 0, 3.5]; 

  // --- KONTEN DESKRIPSI NYEPI ---
  const nyepiDescription = (
    <div className="text-[14px] font-sans flex flex-col gap-5">
      <h2 className="text-2xl font-black mb-2 text-[#A81F30] tracking-tighter uppercase leading-tight">Project Overview:<br/>Hari Raya Nyepi Greeting<br/><span className="text-white/70 text-lg">Del Programming Club</span></h2>
      <p className="text-white/90 leading-relaxed font-medium pb-4 border-b border-white/10">
        This project focused on creating a commemorative visual for Hari Raya Nyepi (Saka New Year 1948) for the Del Programming Club (Delpro). The objective was to design a greeting that conveys peace and reflection, blending modern graphic techniques with traditional cultural elements.
      </p>
      
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg text-white">Key Highlights</h3>
        <ul className="list-disc pl-5 space-y-3 text-white/80">
          <li><strong className="text-[#A81F30]">Visual Strategy:</strong> Integrated a halftone pattern into the background to provide a contemporary texture and visual depth to the photograph of the Pura Ulun Danu.</li>
          <li><strong className="text-[#A81F30]">Typography:</strong> Utilized a high-contrast font pairing—an elegant script for "Selamat" and a bold, structured sans-serif for "Hari Raya Nyepi"—to establish a clear and engaging visual hierarchy.</li>
          <li><strong className="text-[#A81F30]">Branding Integration:</strong> Strategically placed Delpro’s identity in the header and footer (including the club's email and Instagram handle) to maintain brand consistency for social media distribution.</li>
          <li><strong className="text-[#A81F30]">Color Palette:</strong> Applied a deep, maroon-toned gradient to evoke a sense of solemnity and sanctity, perfectly matching the spiritual significance of the Nyepi holiday.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
        <h3 className="font-bold text-lg text-white">Tools Used</h3>
        <ul className="list-disc pl-5 text-white/80">
          <li><strong className="text-[#A81F30]">Canva:</strong> Used for the entire layout process, asset editing, filter applications, and final graphic composition.</li>
        </ul>
      </div>
    </div>
  );

  return (
    <main className="h-screen w-full bg-[#f5f5f5] relative overflow-hidden">
      
      <div className={`absolute top-10 left-10 z-10 pointer-events-none transition-all duration-500 ${showAbout ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        <h1 className="text-5xl font-black text-neutral-800 tracking-tighter">
          WHAT'S IN <br /> MY BAG?
        </h1>
        <p className="text-neutral-500 mt-2">Joice's Interactive Portfolio</p>
      </div>

      <Canvas camera={{ position: [0, 10, 5], fov: 35 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} />

        <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={0} /> 

        <Item 
          url="/models/bag.glb" 
          scale={2}  
          position={[0, -1, 0]} 
          rotation={[0, 0, 0]} 
          onClick={handleBagClick} 
          onPointerOver={() => document.body.style.cursor = "url('/cursor.png'), pointer"}
          onPointerOut={() => document.body.style.cursor = "url('/cursor.png'), auto"}
        />

        <Suspense fallback={null}>
          <PortfolioItem url="/soraapp.png" targetHeight={uniformHeight} position={[-3.5, 2, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          <PortfolioItem url="/scholarsaveapp.png" targetHeight={uniformHeight} position={[3.5, 2, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          <PortfolioItem url="/whooshapp.png" targetHeight={uniformHeight} position={[4.5, 0, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          <PortfolioItem url="/about-me.png" targetHeight={uniformHeight} position={[-4.5, 0, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          <PortfolioItem url="/joydeeapp.png" targetHeight={uniformHeight} position={[-3.5, -2, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          <PortfolioItem url="/studycase.png" targetHeight={uniformHeight} position={[3.5, -2, 1]} visible={showAbout} opacity={mainItemsOpacity} />
          
          <PortfolioItem 
            url="/graphicdesign.png"   
            targetHeight={folderStep === 1 ? 2.5 : uniformHeight} 
            position={gdPosition} 
            visible={showAbout} 
            opacity={gdOpacity}
            onClick={handleFolderClick} 
          />

          {/* KARTU NYEPI (Bisa diflip & diklik balik!) */}
          <HoverFanCard 
            url="/Nyepi.png"   
            targetHeight={cardHeight}       
            position={[-2.2, 0, 3.1]}  
            rotation={[0, 0, 0.25]} 
            startPosition={explodeStartPos} 
            visible={showAbout && folderStep === 2} 
            description={nyepiDescription} 
          />
          
          <HoverFanCard 
            url="/CNY.png"   
            targetHeight={cardHeight}       
            position={[-0.75, 0.3, 3.2]}  
            rotation={[0, 0, 0.08]} 
            startPosition={explodeStartPos}
            visible={showAbout && folderStep === 2} 
          />
          
          <HoverFanCard 
            url="/HimsiValentine.jpeg"   
            targetHeight={cardHeight}       
            position={[0.75, 0.3, 3.3]}  
            rotation={[0, 0, -0.08]} 
            startPosition={explodeStartPos}
            visible={showAbout && folderStep === 2} 
          />
          
          <HoverFanCard 
            url="/idulfitri.png"   
            targetHeight={cardHeight}       
            position={[2.2, 0, 3.4]}  
            rotation={[0, 0, -0.25]} 
            startPosition={explodeStartPos}
            visible={showAbout && folderStep === 2} 
          />

        </Suspense>
      </Canvas>
    </main>
  );
}