"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About({ 
  mission = "To spread the Gospel of Jesus Christ and build a community of faithful believers.",
  vision = "To be a lighthouse in our community, transforming lives through the truth of the Word." 
}: { mission?: string, vision?: string }) {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full px-4">
                Our Foundation
              </span>
              <h2 className="mb-10 leading-tight">For the Glory of God and the Good of the City</h2>
            </div>
            
            <div className="grid gap-12">
              <div className="bg-surface p-10 rounded-[2rem] border border-muted/5 shadow-soft hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed text-lg">
                  {mission}
                </p>
              </div>
              
              <div className="bg-surface p-10 rounded-[2rem] border border-muted/5 shadow-soft hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed text-lg">
                  {vision}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <Image 
                src="https://images.unsplash.com/photo-1544427928-c49cdbed39a6?q=80&w=1974&auto=format&fit=crop" 
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
