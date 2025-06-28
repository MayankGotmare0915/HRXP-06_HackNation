"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Target,
  Map,
  TrendingUp,
  Lightbulb,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.3), transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">ProjectPilot</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300">Sign Up</Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Generate Projects with
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}
            AI Precision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          ProjectPilot creates personalized projects based on your skill level, provides detailed roadmaps, and tracks
          your progress like no other AI tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
          >
            Start Building Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            Watch Demo
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, 20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      title: "Smart Project Generation",
      description: "Generate projects tailored to your skill level and learning goals with our advanced AI algorithm.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Progress Tracking",
      description: "Track your learning journey with detailed progress analytics and milestone achievements.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Business Niche Integration",
      description: "Every project comes with real-world business applications and market insights.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Personalized Roadmaps",
      description: "Get step-by-step learning paths with estimated timelines and recommended tech stacks.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Everything you need to master any skill
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          ProjectPilot combines AI-powered project generation with comprehensive progress tracking, giving you the
          complete learning experience other tools can't match.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

// Feature Card Components
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  )
}

// Skeleton Components
const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-6 w-6 text-blue-500" />
            <span className="font-semibold">Project Generator</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded">
              <span className="text-sm">Beginner Level</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">React</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded">
              <span className="text-sm">Intermediate Level</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Full Stack</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded">
              <span className="text-sm">Advanced Level</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-green-500" />
            <span className="font-semibold">Progress Tracker</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">React Fundamentals</span>
              <span className="text-sm font-semibold text-green-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Node.js Backend</span>
              <span className="text-sm font-semibold text-blue-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            <span className="font-semibold">Business Insights</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded">
              <div className="text-xs text-blue-600 dark:text-blue-300">E-commerce</div>
              <div className="text-sm font-semibold">$2.4T Market</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded">
              <div className="text-xs text-green-600 dark:text-green-300">FinTech</div>
              <div className="text-sm font-semibold">$310B Market</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded">
              <div className="text-xs text-purple-600 dark:text-purple-300">HealthTech</div>
              <div className="text-sm font-semibold">$659B Market</div>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded">
              <div className="text-xs text-orange-600 dark:text-orange-300">EdTech</div>
              <div className="text-sm font-semibold">$404B Market</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkeletonFour = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Map className="h-6 w-6 text-purple-500" />
            <span className="font-semibold">Learning Roadmap</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Setup Development Environment</span>
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">2 days</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Build Core Features</span>
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">2 weeks</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-sm">Testing & Deployment</span>
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">1 week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Testimonial Section Component
function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      content:
        "ProjectPilot helped me transition from frontend to full-stack development with perfectly tailored projects.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Marcus Johnson",
      role: "CS Student",
      content: "The progress tracking feature is incredible. I can see exactly how much I've learned and what's next.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      content: "Finally, an AI tool that understands business context. Every project has real market applications.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      content:
        "ProjectPilot's roadmaps are spot-on. The estimated timelines helped me plan my learning schedule perfectly.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Priya Patel",
      role: "Software Engineer",
      content: "The difficulty progression is amazing. Each project builds perfectly on the previous one.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Alex Thompson",
      role: "Freelancer",
      content: "I've tried many learning platforms, but ProjectPilot's personalized approach is unmatched.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
    <div className="flex-shrink-0 w-80 mx-4 p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-800">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
    </div>
  )

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Loved by developers worldwide
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          Join thousands of developers who've accelerated their learning with ProjectPilot
        </p>
      </div>

      {/* First Row - Left to Right */}
      <div className="mb-8">
        <motion.div
          className="flex"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="mb-8">
        <motion.div
          className="flex"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[
            ...testimonials.slice().reverse(),
            ...testimonials.slice().reverse(),
            ...testimonials.slice().reverse(),
          ].map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Third Row - Left to Right */}
      <div>
        <motion.div
          className="flex"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`row3-${index}`} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ProjectPilot</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The AI-powered project generator that creates personalized learning experiences, tracks your progress, and
              connects you with real business opportunities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 ProjectPilot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
