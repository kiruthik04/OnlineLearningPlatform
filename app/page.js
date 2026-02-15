import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center flex-col px-5 md:px-20">
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-5xl font-extrabold text-primary leading-tight">
            AI Course Generator
            <span className="block text-2xl font-medium text-black mt-2">
              Transform Your Learning with AI
            </span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            Create personalized learning paths, generate structured courses, and
            track your progress seamlessly with our AI-powered platform. Join
            thousands of learners today!
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/workspace">
              <Button size="lg" className="px-8 text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/workspace">
              <Button variant="outline" size="lg" className="px-8 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Optional: Add a hero image if available */}
        <div className="mt-10 relative w-full max-w-5xl h-[400px]">
          {/* Placeholder for Hero Image - user can replace later */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-3xl"></div>
          <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <span className="text-gray-400">Dashboard Preview (Screenshot)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
