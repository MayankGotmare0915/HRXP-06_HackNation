"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Target, Map, TrendingUp, Lightbulb, Clock } from "lucide-react"

export default function FeaturesSection() {
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

export const SkeletonOne = () => {
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

export const SkeletonTwo = () => {
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

export const SkeletonThree = () => {
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

export const SkeletonFour = () => {
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
