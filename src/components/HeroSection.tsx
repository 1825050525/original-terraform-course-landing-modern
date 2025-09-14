'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import {
  Zap,
  Shield,
  Layers,
  Play,
  ArrowRight,
  Users,
  Clock,
  Star,
  Sparkles,
  Code,
  Server,
  Cloud
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// 3D Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  )
}

// Floating Icon Component
function FloatingIcon({
  icon: Icon,
  delay = 0,
  className = "",
  ...props
}: {
  icon: React.ComponentType<{ className?: string }>
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.8, 1],
        y: [100, -20, -10, -20],
        scale: [0, 1.2, 0.9, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }}
      className={cn("absolute text-blue-400/60", className)}
      {...props}
    >
      <div className="relative">
        <Icon className="w-8 h-8 drop-shadow-lg" />
        <motion.div
          className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}

// Particle System Component
function ParticleField() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{
    x: number
    y: number
    scale: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    setMounted(true)
    // Generate consistent particle positions on client
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      x: (i * 137.508) % window.innerWidth, // Golden angle for even distribution
      y: (i * 100) % window.innerHeight,
      scale: 0.5 + ((i * 0.618033988749) % 1) * 0.5, // Golden ratio for variation
      duration: 2 + ((i * 0.1) % 3),
      delay: (i * 0.2) % 2
    }))
    setParticles(newParticles)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale
          }}
          animate={{
            y: [particle.y, particle.y - 100],
            opacity: [0, 1, 0],
            scale: [particle.scale, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.1])

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        const { clientX, clientY } = e
        const x = (clientX / window.innerWidth - 0.5) * 2
        const y = (clientY / window.innerHeight - 0.5) * 2
        setMousePosition({ x, y })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const stats = [
    { icon: Users, value: "1000+", label: "満足した受講生", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, value: "15時間", label: "プレミアムコンテンツ", color: "from-purple-500 to-pink-500" },
    { icon: Star, value: "4.9★", label: "平均評価", color: "from-yellow-500 to-orange-500" },
    { icon: Code, value: "実践的", label: "ハンズオン学習", color: "from-green-500 to-emerald-500" }
  ]

  const floatingIcons = [
    { icon: Zap, delay: 0, style: { top: '15%', left: '10%' } },
    { icon: Shield, delay: 0.5, style: { top: '25%', right: '15%' } },
    { icon: Layers, delay: 1, style: { top: '60%', left: '8%' } },
    { icon: Server, delay: 1.5, style: { bottom: '20%', right: '12%' } },
    { icon: Cloud, delay: 2, style: { top: '45%', left: '85%' } },
    { icon: Code, delay: 2.5, style: { bottom: '40%', left: '5%' } },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 aurora opacity-20" />
        <div className="absolute inset-0 gradient-mesh opacity-30" />
      </div>

      {/* 3D Background Element */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Particle System */}
      <ParticleField />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={index}
          icon={item.icon}
          delay={item.delay}
          style={item.style}
        />
      ))}

      {/* Mouse Parallax Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 group hover:scale-105 transition-transform"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3"
          />
          <span className="text-white/90 font-medium">
            ✨ 2025年最新カリキュラム導入 - 受講者限定募集中
          </span>
          <Sparkles className="w-4 h-4 ml-2 text-yellow-400" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block text-white mb-4">
            クラウドインフラの
          </span>
          <span className="block text-gradient text-shadow-lg relative">
            未来を築こう
            <motion.span
              className="absolute -top-4 -right-4 text-2xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🚀
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-gradient-orange font-semibold">現役クラウドエンジニア</span>
          が直接指導する、業界最高峰の
          <br className="hidden sm:block" />
          <span className="text-gradient-green font-semibold">Terraform</span>
          実践マスター講座
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link href="#pricing">
            <motion.button
              className="group relative inline-flex items-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 ease-out-cubic rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <span className="relative z-10 mr-3">今すぐ始める</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </Link>

          <Link href="#demo">
            <motion.button
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-red-500 rounded-full mr-3"
              />
              <span className="mr-2">デモを見る</span>
              <Play className="w-5 h-5 fill-current" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:scale-105 transition-all duration-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div className={cn(
                "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform",
                stat.color
              )}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-white mb-2 group-hover:text-gradient transition-all">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={cn("absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity", stat.color.replace('to-', 'to-transparent from-'))}
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            if (typeof window !== 'undefined') {
              document.getElementById('overview')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          }}
        >
          <span className="text-sm font-medium mb-2">スクロールして詳細を見る</span>
          <motion.div
            className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center"
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, 8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}