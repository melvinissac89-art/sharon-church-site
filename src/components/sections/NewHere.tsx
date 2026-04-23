"use client"

import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function NewHere() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            First Time Visiting?
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-rose-500 bg-clip-text text-transparent pb-4">
            Welcome Home. We&apos;ve Been Waiting for <span className="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">You.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image 
                src="/sharon-church-site/images/gallery/moment2.jpg" 
                alt="Worship Culture" 
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-[60px] z-0" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] z-0" />
          </div>

          <div className="w-full lg:w-1/2 pt-4 max-w-[650px]">
            <p className="text-muted/70 text-2xl mb-8 leading-relaxed font-manrope font-medium">
              You are not here by accident. The Lord has brought you, and you are welcome in His presence.
            </p>
            
            <p className="text-muted/70 text-2xl mb-12 leading-relaxed font-manrope font-medium">
              Whether you are seeking, returning, or simply curious, there is a place for you here. We are a family gathered in Christ, growing in truth, love, and grace.
            </p>

            <div className="mb-12 pl-8 border-l-4 border-primary/20">
              <p className="text-xl text-muted/50 italic font-medium leading-relaxed mb-4">
                &ldquo;Therefore welcome one another, just as Christ also welcomed us, to the glory of God.&rdquo;
              </p>
              <p className="text-sm font-black tracking-widest text-[#b4136d] uppercase">
                Romans 15:7 (LSB)
              </p>
            </div>

            <p className="text-2xl font-black text-text/80 leading-relaxed uppercase tracking-tight">
              Come as you are, and encounter the living God among His people.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
