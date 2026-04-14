// This is the homepage of VenkyAI
// First page users see when they open the website

import { APP_CONFIG } from "@/lib/config"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">{APP_CONFIG.name}</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="/builder" className="hover:text-blue-600">Builder</a>
          <a href="/templates" className="hover:text-blue-600">Templates</a>
          <a href="/ats" className="hover:text-blue-600">ATS Score</a>
          <a href="/biodata" className="hover:text-blue-600">Govt Biodata</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Build Your Resume.<br />
          <span className="text-blue-600">Get Hired Faster.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          {APP_CONFIG.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/builder" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
            Build From Scratch
          </a>
          <a href="/builder" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all">
            Upload My Resume
          </a>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 max-w-5xl mx-auto">
        <FeatureCard
          emoji="✅"
          title="Free ATS Score"
          description="Know your exact ATS score before applying. Fix mistakes with clear suggestions. No subscription needed."
        />
        <FeatureCard
          emoji="🎨"
          title="Smart Templates"
          description="System picks the best template for your job description automatically. No other tool does this."
        />
        <FeatureCard
          emoji="⚡"
          title="Download Free"
          description="Fill details, see live preview, download PDF. Free. No watermark. No hidden charges. Ever."
        />
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <p className="text-2xl font-bold mb-2">100% Free to Download</p>
        <p className="text-blue-100">No credit card. No subscription. No watermark. Ever.</p>
      </section>

    </main>
  )
}

// FeatureCard — small reusable component
// Shows one feature with emoji, title, and description
function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}