"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function NewHere() {
  return (
    <section className="section-padding bg-surface overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="w-full px-2 md:px-4 lg:px-6 relative z-10 py-2">
        
        {/* Header Section - Compact */}
        <div className="mb-4">
          <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            First Time Visiting?
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-rose-500 bg-clip-text text-transparent pb-0.5">
            Welcome Home. <br />
            We&apos;ve Been Waiting for <span className="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">YOU.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          
          {/* Image Container - Scaled Down */}
          <div className="w-full lg:w-[40%] relative shrink-0">
            <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[350px]">
              <Image 
                src="/sharon-church-site/images/gallery/moment2.jpg" 
                alt="Worship Culture" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Subtle decor */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/5 rounded-full blur-[40px] z-0" />
          </div>

          {/* Content Side - Highly Compact */}
          <div className="flex-1 space-y-3">
            <p className="text-muted/70 text-xs md:text-sm font-manrope font-medium leading-relaxed">
              You are not here by accident. The Lord has brought you, and you are welcome in His presence. Whether you are seeking, returning, or simply curious, there is a place for you here.
            </p>
            
            <p className="text-muted/70 text-xs md:text-sm font-manrope font-medium leading-relaxed">
              We are a family gathered in Christ, growing in truth, love, and grace. Here, the Word of God is taught faithfully, and lives are being transformed by the power of the Holy Spirit.
            </p>

            <p className="text-muted/70 text-xs md:text-sm font-manrope font-medium leading-relaxed">
              No matter where you come from or what you carry, you are invited to draw near and experience the peace that comes from knowing Him. We believe in worship that honors God and fellowship that strengthens one another.
            </p>

            {/* Verse - Inline and Small */}
            <div className="pl-4 border-l-2 border-primary/20 bg-primary/5 py-3 pr-4 rounded-r-xl">
              <p className="text-xs md:text-sm text-secondary font-serif italic font-bold leading-snug">
                &ldquo;Therefore welcome one another, just as Christ also welcomed us, to the glory of God.&rdquo;
              </p>
              <p className="text-[9px] font-black tracking-widest text-[#b4136d] uppercase mt-1">
                Romans 15:7
              </p>
            </div>

            <p className="text-sm md:text-base font-black text-text/80 leading-tight uppercase tracking-tight pt-2">
              COME AS YOU ARE, AND ENCOUNTER THE LIVING GOD.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
