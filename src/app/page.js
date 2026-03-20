'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
// PERHATIKAN: Ganti 'useTexture' dengan 'useLoader' untuk performa lebih baik di R3F
import { OrbitControls, Environment, useGLTF, Float, ContactShadows, Image, DragControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// --- KOMPONEN TAS 3D (CENTER & BISA DIKLIK) ---
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

// --- KOMPONEN FOTO YANG BISA DI-DRAG, TIDAK GEPENG, & OPACITY 100% ---
function FixedRatioDraggablePhoto({ url, targetHeight, position, visible }) {
  // Kalau fotonya lagi disembunyikan, gak usah di-render
  if (!visible) return null;

  // 1. Pre-load texture untuk mendapatkan aspek rasio asli file PNG
  // useTexture di R3F akan otomatis handling loading-nya
  const texture = useTexture(url);
  
  // Pastikan texture sudah ke-load sempurna
  if (!texture || !texture.image) return null;

  const { width, height } = texture.image;
  const aspectRatio = width / height;

  return (
    // 2. DragControls membungkus foto biar bisa ditarik-tarik
    <DragControls>
      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.8}>
        <Image 
          url={url} 
          // 3. KUNCINYA DI SINI: Set skala berdasarkan aspek rasio asli
          // Kita pakai targetHeight seragam (2) agar ukurannya mirip About Me
          scale={[targetHeight * aspectRatio, targetHeight]} 
          position={position} 
          rotation={[0, 0, 0]} // Berdiri tegak menghadap kamera
          transparent={true} // Wajib true biar background PNG bolong
          opacity={1} // FIX OPACITY: Set penuh 100%
          
          // Efek kursor berubah jadi "tangan menggenggam" pas di-drag
          onPointerOver={() => document.body.style.cursor = 'grab'}
          onPointerOut={() => document.body.style.cursor = "url('/cursor.png'), auto"}
          onPointerDown={() => document.body.style.cursor = 'grabbing'}
          onPointerUp={() => document.body.style.cursor = 'grab'}
        />
      </Float>
    </DragControls>
  );
}

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  // Tinggi seragam untuk semua gambar (seukuran dengan About Me kemarin)
  const uniformHeight = 2;

  return (
    <main className="h-screen w-full bg-[#f5f5f5] relative overflow-hidden">
      
      {/* JUDUL */}
      <div className={`absolute top-10 left-10 z-10 pointer-events-none transition-all duration-500 ${showAbout ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        <h1 className="text-5xl font-black text-neutral-800 tracking-tighter">
          WHAT'S IN <br /> MY BAG?
        </h1>
        <p className="text-neutral-500 mt-2">Joice's Interactive Portfolio</p>
      </div>

      {/* TOMBOL TUTUP/SIMPAN */}
      {showAbout && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
          <button 
            onClick={() => setShowAbout(false)} 
            className="px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition shadow-lg cursor-pointer"
          >
            Simpan Foto
          </button>
        </div>
      )}

      {/* KANVAS 3D */}
      <Canvas camera={{ position: [0, 10, 5], fov: 35 }}>
        {/* Environment preset 'city' memberikan pencahayaan studio yang cerah */}
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} />

        {/* OrbitControls wajib makeDefault supaya conflict dengan DragControls teratasi */}
        <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={0} /> 

        {/* --- TAS UTAMA (CENTER & KLIK) --- */}
        <Item 
          url="/models/bag.glb" 
          scale={2}  
          position={[0, -1, 0]} 
          rotation={[0, 0, 0]} 
          onClick={() => setShowAbout(true)} // Memicu foto menyebar
          onPointerOver={() => document.body.style.cursor = "url('/cursor.png'), pointer"}
          onPointerOut={() => document.body.style.cursor = "url('/cursor.png'), auto"}
        />

        {/* --- KUMPULAN FOTO PORTFOLIO (MENYEBAR, GAK GEPENG, DRAG-ABLE) --- */}
        {/* Semua targetHeight di-set uniformHeight (2)
            Semua posisi Z di-set 1 biar mengapung di depan tas.
            Posisi X dan Y di-set untuk menyebar tanpa overlap. */}
        
        {/* 1. Sora App (Kiri Atas) */}
        <FixedRatioDraggablePhoto 
          url="/soraapp.png"   
          targetHeight={uniformHeight}       
          position={[-3.5, 2, 1]}  
          visible={showAbout} 
        />

        {/* 2. ScholarSave App (Kanan Atas) */}
        <FixedRatioDraggablePhoto 
          url="/scholarsaveapp.png"   
          targetHeight={uniformHeight}       
          position={[3.5, 2, 1]}  
          visible={showAbout} 
        />

        {/* 3. Whoosh App (Kanan Tengah) */}
        <FixedRatioDraggablePhoto 
          url="/whooshapp.png"   
          targetHeight={uniformHeight}       
          position={[4.5, 0, 1]}  
          visible={showAbout} 
        />

        {/* 4. About Me (Kiri Tengah) */}
        <FixedRatioDraggablePhoto 
          url="/about-me.png"   
          targetHeight={uniformHeight}       
          position={[-4.5, 0, 1]}  
          visible={showAbout} 
        />

        {/* 5. Joydee App (Kiri Bawah) */}
        <FixedRatioDraggablePhoto 
          url="/joydeeapp.png"   
          targetHeight={uniformHeight}       
          position={[-3.5, -2, 1]}  
          visible={showAbout} 
        />

        {/* 6. StudyCase (Portrait - Kanan Bawah) */}
        <FixedRatioDraggablePhoto 
          url="/studycase.png"   
          targetHeight={uniformHeight}       
          position={[3.5, -2, 1]}  
          visible={showAbout} 
        />

        {/* 7. Graphic Design (Tengah Atas) */}
        <FixedRatioDraggablePhoto 
          url="/graphicdesign.png"   
          targetHeight={uniformHeight}       
          position={[0, 2.5, 1]}  
          visible={showAbout} 
        />

      </Canvas>
    </main>
  );
}