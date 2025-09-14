'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BookOpen,
  Clock,
  Users,
  Code,
  Play,
  CheckCircle,
  Layers,
  Shield,
  GitBranch,
  Monitor,
  Cloud,
  Zap,
  Star,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CurriculumSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeWeek, setActiveWeek] = useState(0)

  const weeks = [
    {
      week: 1,
      title: 'Terraform基礎',
      subtitle: 'Infrastructure as Codeの概念と基本操作',
      icon: BookOpen,
      duration: '1.5時間',
      lessons: 8,
      projects: 1,
      color: 'from-blue-500 to-cyan-500',
      topics: [
        'Infrastructure as Codeとは',
        'Terraformの概要とメリット',
        'HCL（HashiCorp Configuration Language）',
        'Provider設定とAuthentication',
        'terraform init, plan, applyの基本',
        'Stateファイルの概念と重要性',
        '最初のEC2インスタンス作成',
        'エラーハンドリングの基本'
      ],
      practicalProject: {
        title: 'AWS EC2インスタンスの作成',
        description: 'Terraformを使用してAWS上にEC2インスタンスを作成し、基本的なワークフローを理解'
      }
    },
    {
      week: 2,
      title: 'リソース管理',
      subtitle: '効率的なリソース管理とモジュール設計',
      icon: Layers,
      duration: '2時間',
      lessons: 10,
      projects: 2,
      color: 'from-purple-500 to-pink-500',
      topics: [
        'Variables（変数）の活用方法',
        'Outputsの設定と参照',
        'Local Valuesの使い方',
        'Data Sourcesによる既存リソース参照',
        'Resource Dependencies（依存関係）',
        'Count と for_each による繰り返し処理',
        'Conditional Expressions による条件分岐',
        'Terraformモジュールの作成',
        'モジュールの公開と再利用',
        'Module Registry の活用'
      ],
      practicalProject: {
        title: 'VPCとサブネットの構築',
        description: 'モジュールを活用してVPC、サブネット、セキュリティグループを含むネットワーク基盤を構築'
      }
    },
    {
      week: 3,
      title: 'State管理',
      subtitle: 'チーム開発に必要なState管理とワークフロー',
      icon: GitBranch,
      duration: '2時間',
      lessons: 9,
      projects: 2,
      color: 'from-green-500 to-emerald-500',
      topics: [
        'Local State vs Remote State',
        'S3 + DynamoDBによるState管理',
        'State Lockingのメカニズム',
        'Workspacesによる環境分離',
        'terraform importによる既存リソース管理',
        'State操作の高度なコマンド',
        'GitHubとの連携ワークフロー',
        'CI/CDパイプラインの構築',
        '自動テストの実装'
      ],
      practicalProject: {
        title: 'CI/CDパイプライン構築',
        description: 'GitHub Actionsを使用してTerraformの自動デプロイパイプラインを構築'
      }
    },
    {
      week: 4,
      title: 'セキュリティ',
      subtitle: 'セキュアなインフラ構築とベストプラクティス',
      icon: Shield,
      duration: '2時間',
      lessons: 11,
      projects: 2,
      color: 'from-orange-500 to-red-500',
      topics: [
        'IAMロールとポリシーの適切な設定',
        'セキュリティグループの設計パターン',
        'VPC Endpointsによるセキュアな通信',
        '暗号化設定（EBS、S3、RDS等）',
        'Secretsの安全な管理方法',
        'セキュリティスキャンツールの活用',
        'コンプライアンス対応',
        '監査ログの設定',
        'セキュリティインシデントへの対応',
        '定期的なセキュリティレビュー',
        'ゼロトラストアーキテクチャ'
      ],
      practicalProject: {
        title: 'セキュアな3層アーキテクチャ',
        description: 'セキュリティベストプラクティスを適用した3層Webアプリケーションインフラを構築'
      }
    },
    {
      week: 5,
      title: 'スケーラビリティ',
      subtitle: '高可用性・高スケーラビリティなインフラ設計',
      icon: Zap,
      duration: '2.5時間',
      lessons: 12,
      projects: 3,
      color: 'from-indigo-500 to-purple-500',
      topics: [
        'Auto Scaling Groupの設計と設定',
        'Application Load Balancerの構成',
        'Multi-AZ構成による高可用性',
        'RDSのマスタースレーブ構成',
        'ElastiCacheによるキャッシング戦略',
        'CloudFrontによるCDN設定',
        'Route 53によるDNS設定',
        '災害復旧（DR）戦略の設計',
        'バックアップとリストア戦略',
        'パフォーマンステストの実装',
        'キャパシティプランニング',
        'コスト最適化手法'
      ],
      practicalProject: {
        title: '高可用性Webアプリケーション',
        description: 'Auto Scaling、Load Balancer、Multi-AZを活用した本番対応のWebアプリケーションインフラを構築'
      }
    },
    {
      week: 6,
      title: '監視とロギング',
      subtitle: '運用に必要な監視・ロギングシステムの構築',
      icon: Monitor,
      duration: '1.5時間',
      lessons: 8,
      projects: 2,
      color: 'from-teal-500 to-cyan-500',
      topics: [
        'CloudWatch メトリクスとアラーム設定',
        'カスタムメトリクスの作成',
        'ログ集約とCloudWatch Logs',
        'X-Ray による分散トレーシング',
        'SNSによるアラート通知',
        'ダッシュボードの作成',
        '外部監視ツールとの連携',
        'ヘルスチェックの実装'
      ],
      practicalProject: {
        title: '包括的監視システム',
        description: 'CloudWatch、SNS、Lambda を組み合わせた監視・アラートシステムを構築'
      }
    },
    {
      week: 7,
      title: 'マルチクラウド',
      subtitle: 'AWS以外のクラウドプロバイダーとの連携',
      icon: Cloud,
      duration: '2時間',
      lessons: 10,
      projects: 2,
      color: 'from-yellow-500 to-orange-500',
      topics: [
        'Azure Resource Managerとの比較',
        'Google Cloud Deploymentとの比較',
        'マルチクラウド戦略の設計',
        'クラウド間のデータ連携',
        'ハイブリッドクラウドの構築',
        'クラウド移行戦略',
        'ベンダーロックイン対策',
        'コスト比較と最適化',
        '各クラウドの特性理解',
        '統合監視の実装'
      ],
      practicalProject: {
        title: 'マルチクラウドアプリケーション',
        description: 'AWS とAzure を組み合わせたハイブリッドクラウドアーキテクチャを構築'
      }
    },
    {
      week: 8,
      title: '運用最適化',
      subtitle: '本番運用での課題解決とパフォーマンス最適化',
      icon: Star,
      duration: '2時間',
      lessons: 9,
      projects: 2,
      color: 'from-pink-500 to-rose-500',
      topics: [
        'よくあるTerraformエラーと解決法',
        'State corruption の対処法',
        'リソース競合状態の解決',
        'パフォーマンス最適化手法',
        '大規模インフラの管理戦略',
        'チーム開発でのベストプラクティス',
        '技術負債の管理と解消',
        '継続的改善のプロセス',
        '運用コストの最適化'
      ],
      practicalProject: {
        title: '総合演習プロジェクト',
        description: 'これまでの学習内容を統合した大規模なWebアプリケーションインフラを設計・構築'
      }
    }
  ]

  const stats = [
    { icon: Clock, value: '15', unit: '時間', label: '動画コンテンツ' },
    { icon: Code, value: '70+', unit: '', label: '実習項目' },
    { icon: Play, value: '16', unit: '個', label: '実践プロジェクト' },
    { icon: CheckCircle, value: '100', unit: '%', label: 'ハンズオン形式' }
  ]

  return (
    <section id="curriculum" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />

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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            8週間完結カリキュラム
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            体系的な
            <span className="text-gradient block mt-2">学習プログラム</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            基礎から実践まで、段階的にTerraformをマスターできる
            <br className="hidden sm:block" />
            <span className="font-semibold text-purple-600">業界最高水準</span>
            のカリキュラムを提供します
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">
                {stat.value}
                <span className="text-lg text-gray-600">{stat.unit}</span>
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Week Selector */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {weeks.map((week, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveWeek(index)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300 border",
                  activeWeek === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105 border-transparent"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md border-gray-200 shadow-sm"
                )}
                whileHover={{ scale: activeWeek === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                第{week.week}週
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Week Content */}
        <motion.div
          key={activeWeek}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Week Overview */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-20 h-20 bg-gradient-to-br rounded-3xl flex items-center justify-center mr-6",
                    weeks[activeWeek].color
                  )}>
                    {(() => {
                      const IconComponent = weeks[activeWeek].icon
                      return <IconComponent className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <div>
                    <div className="text-sm text-purple-600 font-semibold">
                      第{weeks[activeWeek].week}週
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                      {weeks[activeWeek].title}
                    </h3>
                    <p className="text-gray-600">
                      {weeks[activeWeek].subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-purple-50 rounded-2xl">
                    <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      {weeks[activeWeek].duration}
                    </div>
                    <div className="text-xs text-gray-600">動画時間</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-2xl">
                    <Play className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      {weeks[activeWeek].lessons}レッスン
                    </div>
                    <div className="text-xs text-gray-600">実習項目</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <Code className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      {weeks[activeWeek].projects}プロジェクト
                    </div>
                    <div className="text-xs text-gray-600">実践課題</div>
                  </div>
                </div>
              </div>

              {/* Topics & Project */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Learning Topics */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <BookOpen className="w-6 h-6 text-purple-600 mr-3" />
                      学習トピック
                    </h4>
                    <div className="space-y-3">
                      {weeks[activeWeek].topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: topicIndex * 0.05 }}
                          className="flex items-start group"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-pink-500 transition-colors" />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {topic}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Project */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Code className="w-6 h-6 text-blue-600 mr-3" />
                      実践プロジェクト
                    </h4>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-900 mb-4 text-lg">
                        {weeks[activeWeek].practicalProject.title}
                      </h5>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {weeks[activeWeek].practicalProject.description}
                      </p>

                      <div className="flex items-center text-purple-600 font-semibold">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        実際に手を動かして学習
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative">
              <h4 className="text-3xl font-black mb-4">
                今すぐTerraformの専門家になりませんか？
              </h4>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                久光悠士による直接指導で、8週間であなたもTerraformのプロフェッショナルに
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('instructor')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="w-5 h-5 mr-2" />
                講師紹介を見る
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}