"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About({ 
  mission = "To spread the Gospel of Jesus Christ and build a community of faithful believers.",
  vision = "To be a lighthouse in our community, transforming lives through the truth of the Word." 
}: { mission?: string, vision?: string }) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Dynamic horizontal movement based on scroll progress
  const xTranslation = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -100])

  return (
    <section ref={containerRef} id="about" className="section-padding pt-0 bg-white relative overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            style={{ x: xTranslation }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full px-4">
                Our Foundation
              </span>
              <h2 className="mb-2 leading-tight text-2xl md:text-3xl lg:text-4xl font-extrabold pb-1">For the Glory of God and the Good of the City</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-surface p-4 md:p-6 rounded-[1.5rem] border border-muted/5 shadow-soft hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-bold mb-1">Our Mission</h3>
                <p className="text-muted leading-relaxed text-base">
                  {mission}
                </p>
              </div>
              
              <div className="bg-surface p-4 md:p-6 rounded-[1.5rem] border border-muted/5 shadow-soft hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-bold mb-1">Our Vision</h3>
                <p className="text-muted leading-relaxed text-base">
                  {vision}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ x: xTranslation }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <Image 
                src="/sharon-church-site/images/gallery/moment12.png" 
                alt="Community Gathering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
