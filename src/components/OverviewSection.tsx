'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart3,
  Server,
  Target,
  Lightbulb,
  Rocket,
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function OverviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Terraformを使ったインフラの自動化とバージョン管理を実践的に学習',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Cloud,
      title: 'マルチクラウド対応',
      description: 'AWS、Azure、GCPなど複数のクラウドプロバイダーでの実践的な構築手法',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Shield,
      title: 'セキュリティ重視',
      description: '本番環境で使えるセキュアな設計パターンとベストプラクティス',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'CI/CD統合',
      description: 'TerraformとCI/CDパイプラインの統合による完全自動化',
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      icon: Users,
      title: 'チーム開発',
      description: '複数人でのTerraform開発における効率的な協業手法',
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      icon: BarChart3,
      title: '運用・監視',
      description: 'インフラの監視、コスト管理、トラブルシューティングまで網羅',
      color: 'from-teal-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-teal-50 to-cyan-50'
    }
  ]

  const stats = [
    {
      icon: Target,
      number: '15',
      unit: '時間',
      label: '実践動画',
      description: 'プロが厳選した高品質コンテンツ'
    },
    {
      icon: Server,
      number: '8',
      unit: '個',
      label: 'プロジェクト',
      description: '段階的な実戦形式の学習'
    },
    {
      icon: Award,
      number: '95',
      unit: '%',
      label: '満足度',
      description: '受講生からの高い評価'
    },
    {
      icon: TrendingUp,
      number: '100',
      unit: '%',
      label: 'ハンズオン',
      description: '全て実践的なカリキュラム'
    }
  ]

  const benefits = [
    {
      icon: Lightbulb,
      title: '実戦経験を積める',
      description: '理論だけでなく、実際のプロジェクトを通じて実務レベルのスキルを習得'
    },
    {
      icon: Rocket,
      title: 'キャリアアップ',
      description: 'DevOpsエンジニアとしての市場価値を大幅に向上させる専門スキル'
    },
    {
      icon: CheckCircle,
      title: '即戦力になれる',
      description: 'コース修了後すぐに現場で活躍できる実践的な知識とスキル'
    }
  ]

  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            なぜ選ばれるのか
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            業界最高峰の
            <span className="text-gradient block mt-2">Terraform学習体験</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            現代のクラウドインフラ構築において必須のスキルであるTerraformを、
            <br className="hidden sm:block" />
            初心者から上級者まで体系的に学べる
            <span className="font-semibold text-blue-600">唯一の実践型講座</span>
            です
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-baseline justify-center mb-2">
                  <motion.span
                    className="text-4xl font-black text-gray-900 group-hover:text-gradient transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-lg font-semibold text-gray-600 ml-1">
                    {stat.unit}
                  </span>
                </div>

                <div className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                feature.gradient
              )} />

              <div className="relative">
                <div className={cn(
                  "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                  feature.color
                )}>
                  <feature.icon className="w-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              なぜこの講座が
              <span className="text-gradient">選ばれるのか</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              単なる学習ではなく、あなたのキャリアを次のレベルに押し上げます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : index === 1 ? 0 : 30, y: 30 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                className="group text-center p-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                  {benefit.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative">
              <h4 className="text-3xl font-black mb-4">
                今すぐTerraformマスターへの道を始めませんか？
              </h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                業界のプロフェッショナルが直接指導する、他では学べない実践的なカリキュラム
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                詳細なカリキュラムを見る
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}