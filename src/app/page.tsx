"use client"

import { useState } from "react"
import {
  Shield,
  Eye,
  Zap,
  Target,
  Activity,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  BarChart3,
  AlertTriangle,
  Building2,
  Search,
  Bell,
  Menu,
  X,
} from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: Shield,
    title: "Advanced Fraud Detection",
    description:
      "AI-powered algorithms detect suspicious patterns and fraudulent activities in real-time across cryptocurrency networks.",
    color: "text-red-600",
  },
  {
    icon: Eye,
    title: "Wallet Surveillance",
    description: "Monitor and track cryptocurrency wallets with comprehensive risk scoring and behavioral analysis.",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Transaction Flow Analysis",
    description: "Visualize complex transaction flows and money laundering patterns with interactive network graphs.",
    color: "text-purple-600",
  },
  {
    icon: Building2,
    title: "Bank Account Integration",
    description:
      "Connect cryptocurrency activities to traditional banking systems for complete financial intelligence.",
    color: "text-green-600",
  },
  {
    icon: Target,
    title: "Entity Profiling",
    description: "Build comprehensive profiles of suspicious entities with KYC data and business intelligence.",
    color: "text-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Risk Assessment",
    description: "Automated risk scoring with customizable thresholds and alert systems for proactive monitoring.",
    color: "text-cyan-600",
  },
]

const stats = [
  { label: "Wallets Monitored", value: "2.5M+", icon: Users },
  { label: "Fraud Cases Detected", value: "15,000+", icon: AlertTriangle },
  { label: "Money Recovered", value: "$50M+", icon: TrendingUp },
  { label: "Active Investigations", value: "1,200+", icon: Activity },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Financial Crime Investigator",
    company: "Global Bank Indonesia",
    content:
      "JagaCrypto has revolutionized our fraud investigation process. We can now track complex money laundering schemes across multiple cryptocurrencies with unprecedented accuracy.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Compliance Director",
    company: "CryptoSecure Exchange",
    content:
      "The real-time monitoring and risk assessment features have helped us prevent millions in fraudulent transactions. Essential tool for any crypto business.",
    rating: 5,
  },
  {
    name: "Dr. Amanda Foster",
    role: "Cybercrime Specialist",
    company: "National Police Cyber Unit",
    content:
      "The transaction flow visualization is incredibly powerful. We've solved cases in days that previously took months of manual investigation.",
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams and individual investigators",
    features: [
      "Up to 10,000 wallet monitoring",
      "Basic fraud detection",
      "Transaction flow analysis",
      "Email support",
      "Standard reporting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$899",
    period: "/month",
    description: "Advanced features for growing organizations",
    features: [
      "Up to 100,000 wallet monitoring",
      "Advanced AI fraud detection",
      "Real-time alerts",
      "Bank account integration",
      "Priority support",
      "Custom reporting",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited wallet monitoring",
      "Custom AI models",
      "Dedicated support team",
      "On-premise deployment",
      "Advanced integrations",
      "Compliance reporting",
      "Training & consultation",
    ],
    popular: false,
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();

  const handleClickDashboard = () => router.push('dashboard');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">JagaCrypto</h1>
                <p className="text-xs text-gray-500">Forensic Intelligence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors" onClick={handleClickDashboard}>
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors" onClick={handleClickDashboard}>
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors" onClick={handleClickDashboard}>
                    Sign In
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors" onClick={handleClickDashboard}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Advanced Crypto Forensics Platform
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Protect Your
                  <span className="text-blue-600"> Crypto Assets</span> Against Fraud
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced AI-powered forensic intelligence system that detects, analyzes, and prevents cryptocurrency
                  fraud in real-time. Trusted by financial institutions, exchanges, and law enforcement worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-medium flex items-center justify-center transition-colors" onClick={handleClickDashboard}>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg font-medium flex items-center justify-center transition-colors" onClick={handleClickDashboard}>
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-500">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">&lt; 1s</div>
                  <div className="text-sm text-gray-500">Detection Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Live Threat Detection</h3>
                  <div className="inline-flex items-center bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-sm">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    High Risk
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <code className="text-sm text-blue-600">0x1234...5678</code>
                    </div>
                    <span className="text-red-600 font-semibold">95% Risk</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <code className="text-sm text-blue-600">0x9876...4321</code>
                    </div>
                    <span className="text-yellow-600 font-semibold">75% Risk</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <code className="text-sm text-blue-600">0xabcd...ef01</code>
                    </div>
                    <span className="text-green-600 font-semibold">15% Risk</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Transactions Analyzed</span>
                    <span className="text-gray-900 font-semibold">1,247,892</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Crypto Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools designed to detect, analyze, and prevent cryptocurrency fraud with
              unprecedented accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How JagaCrypto Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI system processes millions of transactions in real-time to identify suspicious patterns and
              prevent fraud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Data Collection</h3>
              <p className="text-gray-600">
                Continuously monitor blockchain networks, exchanges, and traditional banking systems for suspicious
                activities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze patterns, calculate risk scores, and identify potential
                fraud indicators.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Real-time Alerts</h3>
              <p className="text-gray-600">
                Instant notifications and detailed reports help you take immediate action against fraudulent activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about JagaCrypto&apos;s impact on their fraud prevention efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to meet the needs of individuals, teams, and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg p-6 relative shadow-sm ${
                  plan.popular ? "ring-2 ring-blue-500 border-blue-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                  </div>
                )}
                <div className="text-center pb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Secure Your Crypto Assets?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of organizations worldwide who trust JagaCrypto to protect their cryptocurrency investments
            and prevent fraud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-medium flex items-center justify-center transition-colors">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg font-medium transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">JagaCrypto</h3>
                  <p className="text-xs text-gray-500">Forensic Intelligence</p>
                </div>
              </div>
              <p className="text-gray-600">
                Advanced AI-powered forensic intelligence system for cryptocurrency fraud detection and prevention.
              </p>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 JagaCrypto. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}