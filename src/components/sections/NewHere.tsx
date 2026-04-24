"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function NewHere() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Dynamic horizontal movement based on scroll progress
  const xTranslation = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -100])

  return (
    <section ref={containerRef} className="section-padding pt-10 bg-surface overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        {/* Header Section */}
        <motion.div 
          style={{ x: xTranslation }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            First Time Visiting?
          </span>
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-rose-500 bg-clip-text text-transparent pb-1">
              Welcome Home. <br />
              We&apos;ve Been Waiting for <span className="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">YOU.</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
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

          <motion.div 
            style={{ x: xTranslation }}
            className="w-full lg:w-1/2 pt-0 max-w-[700px]"
          >
            <div className="space-y-4">
              <p className="text-muted/70 text-lg leading-relaxed font-manrope font-medium text-left">
                You are not here by accident. The Lord has brought you, and you are welcome in His presence.
              </p>
              
              <p className="text-muted/70 text-lg leading-relaxed font-manrope font-medium text-left">
                Whether you are seeking, returning, or simply curious, there is a place for you here. We are a family gathered in Christ, growing in truth, love, and grace.
              </p>

              <p className="text-muted/70 text-lg leading-relaxed font-manrope font-medium text-left">
                Here, the Word of God is taught faithfully, prayer is lifted continually, and lives are being transformed by the power of the Holy Spirit. No matter where you come from or what you carry, you are invited to draw near and experience the peace that comes from knowing Him.
              </p>

              <p className="text-muted/70 text-lg leading-relaxed font-manrope font-medium text-left">
                We believe in worship that honors God, fellowship that strengthens one another, and a mission that reaches beyond ourselves to share the gospel with the world.
              </p>

              <div className="my-6 pl-8 border-l-4 border-primary/20 bg-primary/5 py-4 pr-4 rounded-r-2xl">
                <p className="text-base text-secondary font-serif italic font-bold leading-relaxed mb-1">
                  &ldquo;Therefore welcome one another, just as Christ also welcomed us, to the glory of God.&rdquo;
                </p>
                <p className="text-[10px] font-black tracking-[0.2em] text-[#b4136d] uppercase">
                  Romans 15:7 (LSB)
                </p>
              </div>

              <p className="text-muted/70 text-lg leading-relaxed font-manrope font-medium text-left">
                Come with your questions, come with your burdens, come with expectation. The Lord meets those who seek Him.
              </p>

              <p className="text-xl font-black text-text/80 leading-tight uppercase tracking-tight pt-4 text-left">
                COME AS YOU ARE, AND ENCOUNTER THE LIVING GOD AMONG HIS PEOPLE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
