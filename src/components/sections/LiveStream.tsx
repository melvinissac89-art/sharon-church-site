"use client"

import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/Button"
import { Youtube } from "@/components/ui/SocialIcons"
import { Play, Calendar, Clock, ArrowRight } from "lucide-react"
import LiveSection from "./LiveSection"

export default function LiveStream() {
  return (
    <section id="livestream" className="section-padding pt-8 pb-6 bg-transparent scroll-mt-24 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        
        {/* Live Hero Section - Compressed */}
        <div className="flex flex-col items-start text-left space-y-3 mb-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-black tracking-[0.2em] uppercase rounded-full">
              Worship Live
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-1">
              Sunday Worship Live
            </h2>
            <p className="text-base md:text-lg text-muted/60 max-w-2xl font-manrope font-medium leading-relaxed">
              Join our vibrant community for an uplifting service of worship, teaching, and fellowship. Every Sunday morning.
            </p>
          </div>
 
          {/* Video Player Area - Scaled Down */}
          <div className="w-full max-w-3xl aspect-video bg-white/40 backdrop-blur-3xl rounded-[2rem] overflow-hidden relative shadow-[0_24px_48px_-12px_rgba(70,72,212,0.15)] border border-white/50 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-orange-400 z-10" />
            <LiveSection />
          </div>
        </div>
      </div>
    </section>
  )
}
