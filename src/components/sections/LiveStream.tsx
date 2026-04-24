"use client"

import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/Button"
import { Youtube } from "@/components/ui/SocialIcons"
import { Play, Calendar, Clock, ArrowRight } from "lucide-react"
import LiveSection from "./LiveSection"

export default function LiveStream() {
  return (
    <section id="livestream" className="section-padding pt-16 pb-12 bg-transparent scroll-mt-24 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        
        {/* Live Hero Section */}
        <div className="flex flex-col items-start text-left space-y-6 mb-10">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-black tracking-[0.2em] uppercase rounded-full">
              Worship Live
            </span>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-1">
              Sunday Worship Live
            </h2>
            <p className="text-xl text-muted/60 max-w-2xl font-manrope font-medium leading-relaxed">
              Join our vibrant community for an uplifting service of worship, teaching, and fellowship. Every Sunday morning.
            </p>
          </div>
 
          {/* Video Player Area */}
          <div className="w-full max-w-4xl aspect-video bg-white/40 backdrop-blur-3xl rounded-[3rem] overflow-hidden relative shadow-[0_32px_64px_-16px_rgba(70,72,212,0.15)] border border-white/50 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-orange-400 z-10" />
            <LiveSection />
          </div>
        </div>
      </div>
    </section>
  )
}
