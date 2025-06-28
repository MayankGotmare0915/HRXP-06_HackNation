"use client"

import { motion } from "framer-motion"

export default function TestimonialSection() {
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
