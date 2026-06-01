'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ArrowRight, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const categories = ['All', 'AI/ML', 'IoT', 'Web Dev', 'Data Science', 'Blockchain']

const allProjects = [
  {
    id: 1,
    title: 'Face Recognition Attendance System',
    category: 'AI/ML',
    description:
      'Real-time face detection & recognition for automated attendance using OpenCV and deep learning.',
    tech: ['Python', 'OpenCV', 'Flask', 'SQLite'],
    price: 5999,
    level: 'Intermediate',
    includes: ['Source Code', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 2,
    title: 'Sentiment Analysis Dashboard',
    category: 'AI/ML',
    description:
      'NLP-based sentiment analysis of product reviews & social media posts with interactive dashboard.',
    tech: ['Python', 'NLTK', 'Streamlit', 'Pandas'],
    price: 3999,
    level: 'Beginner',
    includes: ['Source Code', 'PPT', 'Report'],
  },
  {
    id: 3,
    title: 'Plant Disease Detection (CNN)',
    category: 'AI/ML',
    description:
      'Convolutional neural network to detect crop diseases from leaf images with 95%+ accuracy.',
    tech: ['TensorFlow', 'Python', 'Keras', 'Flask'],
    price: 6999,
    level: 'Advanced',
    includes: ['Source Code', 'Research Paper', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 4,
    title: 'Stock Price Prediction (LSTM)',
    category: 'AI/ML',
    description:
      'Time-series forecasting of stock prices using LSTM networks with live market data integration.',
    tech: ['Python', 'LSTM', 'Matplotlib', 'yfinance'],
    price: 4999,
    level: 'Advanced',
    includes: ['Source Code', 'PPT', 'Report'],
  },
  {
    id: 5,
    title: 'Smart Agriculture Monitoring',
    category: 'IoT',
    description:
      'ESP32-based soil moisture, temperature & humidity monitoring with real-time React dashboard.',
    tech: ['ESP32', 'MQTT', 'React', 'Node.js'],
    price: 7999,
    level: 'Intermediate',
    includes: ['Source Code', 'Circuit Diagram', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 6,
    title: 'Smart Home Automation Hub',
    category: 'IoT',
    description:
      'Voice + app controlled home automation using Raspberry Pi with MQTT and mobile app.',
    tech: ['Raspberry Pi', 'Python', 'MQTT', 'Flutter'],
    price: 5499,
    level: 'Intermediate',
    includes: ['Source Code', 'Circuit Diagram', 'PPT', 'Report'],
  },
  {
    id: 7,
    title: 'Water Quality Monitoring IoT',
    category: 'IoT',
    description:
      'Multi-parameter water quality sensor system with cloud logging and SMS alerts for anomalies.',
    tech: ['Arduino', 'pH Sensor', 'Node.js', 'Twilio'],
    price: 4999,
    level: 'Beginner',
    includes: ['Source Code', 'Circuit Diagram', 'PPT', 'Report'],
  },
  {
    id: 8,
    title: 'E-Commerce Platform (MERN)',
    category: 'Web Dev',
    description:
      'Full-featured MERN stack e-commerce with authentication, Stripe payments, admin panel & cart.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    price: 8999,
    level: 'Advanced',
    includes: ['Source Code', 'Deployment Guide', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 9,
    title: 'Hospital Management System',
    category: 'Web Dev',
    description:
      'Complete HMS with patient records, doctor scheduling, billing and lab reports management.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    price: 6999,
    level: 'Advanced',
    includes: ['Source Code', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 10,
    title: 'Real-time Chat Application',
    category: 'Web Dev',
    description:
      'WebSocket-powered chat app with rooms, private messaging, file sharing and typing indicators.',
    tech: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    price: 3999,
    level: 'Intermediate',
    includes: ['Source Code', 'PPT', 'Report'],
  },
  {
    id: 11,
    title: 'Customer Churn Prediction',
    category: 'Data Science',
    description:
      'ML pipeline to predict customer churn with feature importance, model comparison & Streamlit UI.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    price: 4499,
    level: 'Intermediate',
    includes: ['Source Code', 'PPT', 'Report'],
  },
  {
    id: 12,
    title: 'IPL Analytics Dashboard',
    category: 'Data Science',
    description:
      'Deep-dive cricket analytics on 10 years of IPL data with interactive Plotly visualizations.',
    tech: ['Python', 'Plotly', 'Pandas', 'Streamlit'],
    price: 2999,
    level: 'Beginner',
    includes: ['Source Code', 'PPT', 'Report'],
  },
  {
    id: 13,
    title: 'Decentralized Voting System',
    category: 'Blockchain',
    description:
      'Ethereum smart contract-based voting system with MetaMask authentication and React frontend.',
    tech: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
    price: 9999,
    level: 'Advanced',
    includes: ['Source Code', 'Smart Contracts', 'PPT', 'Report', 'Viva Support'],
  },
  {
    id: 14,
    title: 'NFT Marketplace (DApp)',
    category: 'Blockchain',
    description:
      'Full DApp for minting, buying and selling NFTs on Polygon with IPFS storage and Next.js UI.',
    tech: ['Solidity', 'Next.js', 'IPFS', 'Hardhat'],
    price: 14999,
    level: 'Advanced',
    includes: ['Source Code', 'Deployment Guide', 'PPT', 'Report'],
  },
]

const categoryColor: Record<string, string> = {
  'AI/ML': 'text-accent-green bg-accent-green/10 border-accent-green/20',
  IoT: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
  'Web Dev': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Data Science': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Blockchain: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
}

const levelColor: Record<string, string> = {
  Beginner: 'text-green-400',
  Intermediate: 'text-yellow-400',
  Advanced: 'text-red-400',
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allProjects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-4">
              Project Marketplace
            </p>
            <h1 className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary mb-4">
              Final Year <span className="text-gradient-green">Projects</span>
            </h1>
            <p className="text-txt-secondary max-w-xl mx-auto text-lg mb-8">
              Ready-made projects with source code, documentation, PPT & viva support. All
              projects are unique and customizable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-txt-secondary">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" /> Source Code Included
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" /> Full Documentation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" /> Viva Support Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" /> 100% Unique Projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-dark/95 backdrop-blur-md border-b border-surface-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-accent-green text-dark'
                      : 'bg-surface border border-surface-border text-txt-secondary hover:text-txt-primary hover:border-accent-green/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-muted" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-txt-muted text-sm">
            <span className="text-txt-primary font-medium">{filtered.length}</span> projects found
          </p>
          <div className="flex items-center gap-2 text-txt-muted text-sm">
            <Filter size={14} />
            {activeCategory !== 'All' && (
              <button
                onClick={() => setActiveCategory('All')}
                className="text-accent-green hover:text-accent-green/80 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col p-6 rounded-2xl bg-surface card-border hover:shadow-card-hover transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                      categoryColor[project.category] ??
                      'text-txt-secondary bg-surface-light border-surface-border'
                    }`}
                  >
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-medium ${levelColor[project.level]}`}
                  >
                    {project.level}
                  </span>
                </div>

                {/* Title & description */}
                <h3 className="font-syne font-semibold text-txt-primary mb-2 leading-snug group-hover:text-accent-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-txt-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-surface-light border border-surface-border text-txt-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.includes.map((item) => (
                    <span key={item} className="text-xs text-txt-muted flex items-center gap-1">
                      <span className="text-accent-green">✓</span> {item}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                  <span className="font-syne font-bold text-lg text-accent-green">
                    ₹{project.price.toLocaleString('en-IN')}
                  </span>
                  <a
                    href={`https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%27m%20interested%20in%20the%20%22${encodeURIComponent(project.title)}%22%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green text-sm font-medium hover:bg-accent-green hover:text-dark transition-all"
                  >
                    <MessageCircle size={13} />
                    Get This
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-txt-muted text-lg mb-2">No projects found</p>
            <p className="text-txt-muted text-sm">
              Try a different category or{' '}
              <a
                href="https://wa.me/919959691347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-green hover:underline"
              >
                ask us for a custom project
              </a>
              .
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-surface-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold text-txt-primary mb-3">
            Need a <span className="text-gradient-green">Custom Project</span>?
          </h2>
          <p className="text-txt-secondary mb-7">
            Don&apos;t see what you&apos;re looking for? We build fully custom projects tailored
            to your exact requirements, institution guidelines, and budget.
          </p>
          <a
            href="https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%20need%20a%20custom%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-green text-dark font-semibold hover:bg-accent-green/90 transition-all hover:shadow-green-glow group"
          >
            Request Custom Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}
