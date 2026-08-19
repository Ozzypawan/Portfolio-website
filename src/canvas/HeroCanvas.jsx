import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useApp } from '../context/AppContext'

const THEME_COLORS = {
  cyan:    { main: '#00d9ff', emissive: '#003d4d', light1: '#00d9ff', light2: '#7c3aed' },
  purple:  { main: '#a855f7', emissive: '#2a0050', light1: '#a855f7', light2: '#ec4899' },
  emerald: { main: '#10b981', emissive: '#003322', light1: '#10b981', light2: '#06b6d4' },
}

function TorusKnot() {
  const meshRef = useRef()
  const { theme } = useApp()
  const c = THEME_COLORS[theme] || THEME_COLORS.cyan

  useFrame((state) => {
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * 0.12
    meshRef.current.rotation.z = t * 0.08
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2.2, 0, 0]} scale={1.3}>
        <torusKnotGeometry args={[1, 0.32, 256, 32]} />
        <meshStandardMaterial
          key={theme}
          color={c.main}
          emissive={c.emissive}
          emissiveIntensity={0.7}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
    </Float>
  )
}

function Lights() {
  const { theme } = useApp()
  const c = THEME_COLORS[theme] || THEME_COLORS.cyan
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight key={`l1-${theme}`} position={[5, 8, 5]}   intensity={3}   color={c.light1} />
      <pointLight key={`l2-${theme}`} position={[-8, -5, -5]} intensity={1.8} color={c.light2} />
    </>
  )
}

export default function HeroCanvas() {
  const wrapRef = useRef()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        frameloop={visible ? 'always' : 'never'}
      >
        <Lights />
        <TorusKnot />
        <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.4} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.6} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
