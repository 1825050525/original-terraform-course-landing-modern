'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Award,
  Star,
  Users,
  CheckCircle,
  Trophy,
  Briefcase,
  GraduationCap,
  Heart,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon
} from 'lucide-react'

export default function InstructorSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const instructor = {
    name: '久光 悠士',
    title: 'クラウドアーキテクト',
    company: 'AWS Premier Consulting Partner',
    experience: '4年以上',
    avatar: '/api/placeholder/200/200',
    bio: 'IT企業にて複数のクラウドプロジェクトを経験。AWS、Azure、GCPでの豊富な実務経験を持ち、Infrastructure as Codeのノウハウを持つ。',
    specialties: [
      'Terraform / CloudFormation',
      'AWS / Azure / GCP',
      'Kubernetes / Docker',
      'CI/CD Pipeline',
      'Infrastructure Security',
      'Cost Optimization'
    ],
    achievements: [
      {
        icon: Trophy,
        title: 'AWS認定ソリューションアーキテクト',
        description: 'Professional レベル取得'
      },
      {
        icon: Award,
        title: 'Microsoft Azure Expert',
        description: 'Solutions Architect認定'
      },
      {
        icon: Star,
        title: 'Google Cloud Professional',
        description: 'Cloud Architect認定'
      },
      {
        icon: Users,
        title: '講師実績',
        description: '現役クラウドエンジニア'
      }
    ],
    stats: [
      {
        number: '500+',
        label: 'プロジェクト実績',
        description: '大小様々なインフラ構築'
      },
      {
        number: '2+',
        label: '指導実績',
        description: '現役エンジニア育成'
      },
      {
        number: '98%',
        label: '受講生満足度',
        description: '実践的な指導力'
      },
      {
        number: '24時間',
        label: 'サポート対応',
        description: '質問への迅速回答'
      }
    ],
    testimonials: [
      {
        name: '山田 太郎',
        position: 'インフラエンジニア',
        company: '株式会社テクノソリューション',
        content: '田中さんの指導により、Terraformの実務レベルのスキルを短期間で身につけることができました。現在はチームのリーダーとして活躍しています。',
        rating: 5
      },
      {
        name: '佐藤 花子',
        position: 'DevOpsエンジニア',
        company: 'クラウドテック株式会社',
        content: '実際の現場で使える知識とベストプラクティスを学べました。特にセキュリティとコスト最適化の部分が非常に参考になりました。',
        rating: 5
      },
      {
        name: '鈴木 一郎',
        position: 'システム管理者',
        company: 'デジタルイノベーション株式会社',
        content: '初心者の私でも理解できるよう丁寧に教えていただきました。今ではインフラの自動化を任されるまでになりました。',
        rating: 5
      }
    ]
  }

  const experiences = [
    {
      year: '2014-2017',
      title: 'インフラエンジニア',
      company: '大手システムインテグレーター',
      description: 'オンプレミス環境でのインフラ構築・運用、仮想化技術の導入'
    },
    {
      year: '2017-2020',
      title: 'クラウドエンジニア',
      company: 'クラウド専門コンサルティング会社',
      description: 'AWS、Azureでのクラウド移行プロジェクト多数担当、Terraformによる自動化'
    },
    {
      year: '2020-2022',
      title: 'シニアDevOpsエンジニア',
      company: 'スタートアップ企業',
      description: 'CI/CDパイプライン構築、Kubernetesクラスター運用、開発チーム支援'
    },
    {
      year: '2022-現在',
      title: 'クラウドアーキテクト / 講師',
      company: 'AWS Premier Partner',
      description: '大規模システムの設計・構築、技術者育成、Terraformコース開発'
    }
  ]

  return (
    <section id="instructor" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-200/10 to-cyan-200/10 rounded-full blur-3xl" />

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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-6"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            講師紹介
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            業界のプロフェッショナルが
            <span className="text-gradient block mt-2">直接指導</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            実務経験豊富な現役エンジニアが、現場で本当に使える知識とスキルを
            <br className="hidden sm:block" />
            <span className="font-semibold text-blue-600">実践的なアプローチ</span>
            で指導します
          </p>
        </motion.div>

        {/* Instructor Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image & Basic Info */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative inline-block mb-8"
                >
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
                      <div className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                          <Users className="w-20 h-20 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {instructor.company} | {instructor.experience}の実務経験
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                    {[
                      { icon: LinkedinIcon, label: 'LinkedIn' },
                      { icon: TwitterIcon, label: 'Twitter' },
                      { icon: GithubIcon, label: 'GitHub' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bio & Specialties */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">プロフィール</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {instructor.bio}
                  </p>

                  <h5 className="text-lg font-bold text-gray-900 mb-4">専門技術</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {instructor.specialties.map((specialty, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-700 font-medium">{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {instructor.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-black text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              認定資格・
              <span className="text-gradient">実績</span>
            </h3>
            <p className="text-xl text-gray-600">
              業界トップレベルの認定資格と豊富な実務経験
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructor.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group text-center p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              キャリア
              <span className="text-gradient">ヒストリー</span>
            </h3>
            <p className="text-xl text-gray-600">
              現場での豊富な経験から得た実践的知識
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border border-gray-200/50">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {exp.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              受講生の
              <span className="text-gradient">声</span>
            </h3>
            <p className="text-xl text-gray-600">
              実際に受講された方々からの評価
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {instructor.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                className="group relative p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Quote Mark */}
                <div className="absolute top-4 left-6 text-4xl text-blue-500/20 font-bold">
                  &quot;
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="text-center border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-blue-600">
                    {testimonial.company}
                  </div>
                </div>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative">
              <h4 className="text-3xl font-black mb-4">
                プロから直接学べるチャンスです
              </h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                現場で培った実践的な知識とスキルを、分かりやすく体系的に学習できます
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="w-5 h-5 mr-2" />
                今すぐ学習を始める
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}