'use client';

// 1. Tambahkan useRef dan useFrame untuk animasi
import { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float, ContactShadows, Image, DragControls, useTexture } from '@react-three/drei';
import * as THREE from 'three'; // Import fungsi matematika 3D

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

// --- KOMPONEN FOTO (DENGAN ANIMASI TERBANG DARI TAS) ---
function FixedRatioDraggablePhoto({ url, targetHeight, position, visible }) {
  const texture = useTexture(url);
  const outerGroupRef = useRef(); // Referensi untuk mengontrol posisi & ukuran grup

  const { width, height } = texture.image;
  const aspectRatio = width / height;

  // 2. RUMUS ANIMASI TERBANG (Dieksekusi setiap frame / 60fps)
  useFrame((state, delta) => {
    if (!outerGroupRef.current) return;

    // Tentukan Tujuan Posisi:
    // Kalau 'visible' = terbang ke posisi masing-masing
    // Kalau '!visible' = balik ke titik tengah tas (0, -1, 0)
    const targetX = visible ? position[0] : 0;
    const targetY = visible ? position[1] : -1;
    const targetZ = visible ? position[2] : 0;

    // Tentukan Tujuan Ukuran (Skala): 1 = Penuh, 0 = Menghilang
    const targetScale = visible ? 1 : 0;

    const speed = 6; // Kecepatan animasi terbangnya

    // Lakukan pergerakan halus (Lerp) untuk Posisi
    outerGroupRef.current.position.x = THREE.MathUtils.lerp(outerGroupRef.current.position.x, targetX, delta * speed);
    outerGroupRef.current.position.y = THREE.MathUtils.lerp(outerGroupRef.current.position.y, targetY, delta * speed);
    outerGroupRef.current.position.z = THREE.MathUtils.lerp(outerGroupRef.current.position.z, targetZ, delta * speed);

    // Lakukan pergerakan halus (Lerp) untuk Ukuran
    const currentScale = outerGroupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * speed);
    outerGroupRef.current.scale.set(nextScale, nextScale, nextScale);
  });

  // Karena kita mau dia mengecil ke dalam tas, kita TIDAK mereturn null.
  // Komponennya selalu ada, hanya saja ukurannya jadi 0 saat disembunyikan.
  return (
    // Grup pembungkus ini bermula dari dalam tas [0, -1, 0] dengan ukuran 0
    <group ref={outerGroupRef} position={[0, -1, 0]} scale={[0, 0, 0]}>
      <DragControls>
        <Float speed={3} rotationIntensity={0.1} floatIntensity={0.8}>
          <Image 
            url={url} 
            scale={[targetHeight * aspectRatio, targetHeight]} 
            transparent={true} 
            opacity={1} 
            // Kursor hanya berubah kalau gambarnya lagi muncul (visible)
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

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
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

      {/* KANVAS 3D */}
      <Canvas camera={{ position: [0, 10, 5], fov: 35 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={20} blur={2} />

        <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={0} /> 

        {/* TAS UTAMA */}
        <Item 
          url="/models/bag.glb" 
          scale={2}  
          position={[0, -1, 0]} 
          rotation={[0, 0, 0]} 
          onClick={() => setShowAbout(!showAbout)} 
          onPointerOver={() => document.body.style.cursor = "url('/cursor.png'), pointer"}
          onPointerOut={() => document.body.style.cursor = "url('/cursor.png'), auto"}
        />

        {/* KUMPULAN FOTO */}
        <Suspense fallback={null}>
          <FixedRatioDraggablePhoto url="/soraapp.png" targetHeight={uniformHeight} position={[-3.5, 2, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/scholarsaveapp.png" targetHeight={uniformHeight} position={[3.5, 2, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/whooshapp.png" targetHeight={uniformHeight} position={[4.5, 0, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/about-me.png" targetHeight={uniformHeight} position={[-4.5, 0, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/joydeeapp.png" targetHeight={uniformHeight} position={[-3.5, -2, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/studycase.png" targetHeight={uniformHeight} position={[3.5, -2, 1]} visible={showAbout} />
          <FixedRatioDraggablePhoto url="/graphicdesign.png" targetHeight={uniformHeight} position={[0, 2.5, 1]} visible={showAbout} />
        </Suspense>

      </Canvas>
    </main>
  );
}