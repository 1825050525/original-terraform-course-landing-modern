'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Check,
  X,
  Star,
  Crown,
  Shield,
  Clock,
  BookOpen,
  Rocket,
  Gift,
  TrendingUp,
  AlertCircle,
  Timer
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const plans = [
    {
      name: 'ベーシックプラン',
      description: 'Terraform初心者向けの基本コース',
      price: '29,800',
      originalPrice: '39,800',
      period: '買い切り',
      popular: false,
      color: 'from-gray-600 to-gray-700',
      gradient: 'bg-gradient-to-br from-gray-50 to-slate-50',
      features: [
        { name: '基礎動画コンテンツ（8時間）', included: true },
        { name: '基本的なハンズオン（4プロジェクト）', included: true },
        { name: 'PDF学習資料', included: true },
        { name: 'コミュニティアクセス', included: true },
        { name: '基本的なQ&Aサポート', included: true },
        { name: '修了証明書', included: true },
        { name: '上級コンテンツ（7時間）', included: false },
        { name: '個別メンタリング', included: false },
        { name: '転職サポート', included: false },
        { name: '企業向けプロジェクト', included: false }
      ],
      badge: null,
      cta: '今すぐ始める'
    },
    {
      name: 'プロフェッショナルプラン',
      description: '実務レベルを目指す本格コース',
      price: '59,800',
      originalPrice: '79,800',
      period: '買い切り',
      popular: true,
      color: 'from-blue-600 to-indigo-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      features: [
        { name: '全動画コンテンツ（15時間）', included: true },
        { name: '実践的ハンズオン（8プロジェクト）', included: true },
        { name: 'PDF学習資料 + 演習問題', included: true },
        { name: 'コミュニティアクセス', included: true },
        { name: 'Q&Aサポート（24時間以内）', included: true },
        { name: '修了証明書', included: true },
        { name: '上級コンテンツ（7時間）', included: true },
        { name: '月1回グループメンタリング', included: true },
        { name: 'キャリア相談', included: true },
        { name: '企業向けプロジェクト', included: false }
      ],
      badge: {
        text: '人気No.1',
        icon: Crown,
        color: 'bg-gradient-to-r from-blue-500 to-indigo-500'
      },
      cta: '最もお得'
    },
    {
      name: 'エンタープライズプラン',
      description: '転職・キャリアアップ完全サポート',
      price: '98,800',
      originalPrice: '128,800',
      period: '買い切り',
      popular: false,
      color: 'from-purple-600 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: [
        { name: '全動画コンテンツ（15時間）', included: true },
        { name: '実践的ハンズオン（8プロジェクト）', included: true },
        { name: 'PDF学習資料 + 演習問題', included: true },
        { name: 'プライベートコミュニティ', included: true },
        { name: '優先Q&Aサポート（12時間以内）', included: true },
        { name: '修了証明書 + LinkedIn推薦状', included: true },
        { name: '上級コンテンツ（7時間）', included: true },
        { name: '個別メンタリング（月2回）', included: true },
        { name: '転職サポート（履歴書添削・面接対策）', included: true },
        { name: '企業向けプロジェクト（実案件）', included: true }
      ],
      badge: {
        text: 'プレミアム',
        icon: Star,
        color: 'bg-gradient-to-r from-purple-500 to-pink-500'
      },
      cta: '全力サポート'
    }
  ]

  const guarantees = [
    {
      icon: Shield,
      title: '30日間返金保証',
      description: 'ご満足いただけない場合は全額返金いたします'
    },
    {
      icon: Clock,
      title: '無期限アクセス',
      description: '一度ご購入いただければ、永続的にコンテンツにアクセス可能'
    },
    {
      icon: TrendingUp,
      title: '無料アップデート',
      description: '新しいコンテンツが追加されても追加料金なし'
    }
  ]

  const faqs = [
    {
      question: '初心者でも受講できますか？',
      answer: 'はい、基本的なLinuxコマンドを理解していれば大丈夫です。ベーシックプランから始めて段階的に学習できます。'
    },
    {
      question: '受講期間に制限はありますか？',
      answer: 'いいえ、買い切り型のため受講期間に制限はありません。ご自身のペースで学習していただけます。'
    },
    {
      question: 'どのくらいの学習時間が必要ですか？',
      answer: '週に5-10時間程度の学習で、約2-3ヶ月で完了できます。個人のペースに合わせて調整可能です。'
    },
    {
      question: '法人での利用は可能ですか？',
      answer: 'はい、可能です。複数名でのご利用の場合は、別途企業向けプランをご用意しておりますので、お問い合わせください。'
    }
  ]

  const bonuses = [
    {
      icon: BookOpen,
      title: 'Terraform設計パターン集',
      value: '15,000円相当',
      description: '実務で使える設計パターンとベストプラクティス'
    },
    {
      icon: Shield,
      title: 'セキュリティチェックリスト',
      value: '8,000円相当',
      description: '本番環境で必須のセキュリティ要件一覧'
    },
    {
      icon: Rocket,
      title: 'CI/CD統合テンプレート',
      value: '12,000円相当',
      description: 'GitHub Actions、GitLab CI等のテンプレート集'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/10 to-cyan-200/10 rounded-full blur-3xl" />

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
            <Gift className="w-4 h-4 mr-2" />
            特別価格
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            今だけ特別価格で
            <span className="text-gradient block mt-2">始められます</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            あなたのスキルレベルと目標に合わせて選べる3つのプラン
            <br className="hidden sm:block" />
            <span className="font-semibold text-blue-600">30日間返金保証付き</span>
            で安心してスタートできます
          </p>

          {/* Limited Time Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl text-lg font-bold shadow-lg"
          >
            <Timer className="w-5 h-5 mr-2" />
            期間限定 25% OFF - 残り48時間
          </motion.div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={cn(
                "group relative rounded-3xl overflow-hidden transition-all duration-500",
                plan.popular
                  ? "scale-105 shadow-2xl shadow-blue-500/20 hover:shadow-3xl hover:shadow-blue-500/30"
                  : "hover:shadow-2xl hover:-translate-y-2"
              )}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={cn(
                    "flex items-center px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg",
                    plan.badge.color
                  )}>
                    <plan.badge.icon className="w-4 h-4 mr-2" />
                    {plan.badge.text}
                  </div>
                </div>
              )}

              {/* Card Background */}
              <div className={cn(
                "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
                plan.gradient
              )} />

              <div className="relative bg-white border border-gray-200/50 h-full p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-lg text-gray-500 line-through mr-3">
                        ¥{plan.originalPrice}
                      </span>
                      <span className="text-4xl font-black text-gray-900">
                        ¥{plan.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {plan.period}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full py-4 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300",
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                    )}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        feature.included
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400"
                      )}>
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <span className={cn(
                        "text-sm leading-relaxed",
                        feature.included ? "text-gray-700" : "text-gray-400"
                      )}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              さらに
              <span className="text-gradient">特典付き</span>
            </h3>
            <p className="text-xl text-gray-600">
              総額35,000円相当の特典を無料でプレゼント
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-orange-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <bonus.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {bonus.title}
                </h4>
                <div className="text-lg font-bold text-orange-600 mb-3">
                  {bonus.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {bonus.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              安心の
              <span className="text-gradient">保証制度</span>
            </h3>
            <p className="text-xl text-gray-600">
              リスクなしで始められる充実のサポート体制
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group text-center p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {guarantee.title}
                </h4>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              よくある
              <span className="text-gradient">質問</span>
            </h3>
            <p className="text-xl text-gray-600">
              受講前の疑問にお答えします
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="group p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mt-1">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative">
              <h4 className="text-4xl font-black mb-6">
                Terraformマスターへの道を
                <br />
                今すぐ始めませんか？
              </h4>

              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                業界最高峰の講師から学ぶ、実践的なTerraformスキル。
                <br />
                あなたのキャリアを次のレベルに押し上げる投資です。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2 inline" />
                  今すぐ学習を始める
                </motion.button>

                <div className="text-blue-100 text-sm">
                  30日間返金保証付き
                </div>
              </div>

              <div className="flex justify-center items-center space-x-8 text-blue-100">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  安心保証
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  無期限アクセス
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  無料アップデート
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}