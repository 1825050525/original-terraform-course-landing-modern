'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Users,
  BookOpen,
  DollarSign,
  MessageCircle,
  Sparkles,
  Crown
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// Navigation items with enhanced metadata
const navigation = [
  {
    name: '講座概要',
    href: '#overview',
    icon: BookOpen,
    description: 'カリキュラムの詳細',
    badge: null
  },
  {
    name: 'カリキュラム',
    href: '#curriculum',
    icon: Zap,
    description: '8週間の学習プログラム',
    badge: 'Premium'
  },
  {
    name: '講師紹介',
    href: '#instructor',
    icon: Users,
    description: '久光悠士について',
    badge: null
  },
  {
    name: '受講料金',
    href: '#pricing',
    icon: DollarSign,
    description: '料金プランと特典',
    badge: 'Hot'
  },
  {
    name: 'お問い合わせ',
    href: '#contact',
    icon: MessageCircle,
    description: 'サポート・質問',
    badge: null
  }
]

// Mobile menu item component
function MobileMenuItem({
  item,
  index,
  onClose
}: {
  item: typeof navigation[0]
  index: number
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Link
        href={item.href}
        onClick={onClose}
        className="group relative flex items-center px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 active:scale-95"
      >
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform">
          <item.icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-white group-hover:text-gradient transition-colors">
              {item.name}
            </span>
            {item.badge && (
              <span className={cn(
                "ml-2 px-2 py-1 text-xs font-bold rounded-full",
                item.badge === 'Hot'
                  ? 'bg-red-500 text-white'
                  : item.badge === 'Premium'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  : 'bg-blue-500 text-white'
              )}>
                {item.badge}
              </span>
            )}
          </div>
          <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
            {item.description}
          </p>
        </div>

        <ChevronDown className="w-5 h-5 text-white/40 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()

  // Handle scroll effects
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  // Initialize component
  useEffect(() => {
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navigation.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              <Link href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white font-black text-lg">TF</span>
                  </motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{
                      rotate: [0, 20, -20, 0],
                      scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Crown className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                </div>

                <div className="hidden sm:block">
                  <span className={cn(
                    "text-xl font-black transition-colors",
                    isScrolled ? "text-gray-900" : "text-white"
                  )}>
                    Terraform
                  </span>
                  <span className="text-gradient ml-1">Master</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105",
                      activeSection === item.href.slice(1)
                        ? isScrolled
                          ? "text-blue-600 bg-blue-50"
                          : "text-white bg-white/10"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      {item.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={cn(
                            "ml-2 px-2 py-1 text-xs font-bold rounded-full",
                            item.badge === 'Hot'
                              ? 'bg-red-500 text-white animate-pulse'
                              : item.badge === 'Premium'
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                              : 'bg-blue-500 text-white'
                          )}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </span>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId={activeSection === item.href.slice(1) ? 'activeSection' : undefined}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden lg:block"
              >
                <Link href="#pricing">
                  <motion.button
                    className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>無料体験を始める</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={toggleMenu}
                className={cn(
                  "lg:hidden relative p-3 rounded-xl transition-all duration-300",
                  isMenuOpen
                    ? isScrolled
                      ? "bg-blue-50 text-blue-600"
                      : "bg-white/10 text-white"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>

                {/* Menu button indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/80 backdrop-blur-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">TF</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Terraform Master</div>
                      <div className="text-white/60 text-sm">プレミアム講座</div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white/60 hover:text-white transition-colors rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navigation.map((item, index) => (
                      <MobileMenuItem
                        key={item.name}
                        item={item}
                        index={index}
                        onClose={() => setIsMenuOpen(false)}
                      />
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <Link href="#pricing">
                    <motion.button
                      className="w-full relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      <span>無料体験を始める</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </Link>

                  <div className="text-center mt-4">
                    <p className="text-white/60 text-sm">
                      ✨ 特別価格は期間限定
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}