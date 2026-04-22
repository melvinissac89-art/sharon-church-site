"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "@/components/ui/SocialIcons"

export default function Pastor({ 
  name = "Pastor John Mathews", 
  bio = "Pastor John has been leading Sharon Fellowship Church for over 15 years with a passion for teaching the Word and building strong, faithful communities.",
  image = "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop"
}: { name?: string, bio?: string, image?: string }) {
  return (
    <section id="pastor" className="section-padding bg-surface">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] overflow-hidden shadow-soft flex flex-col md:flex-row items-stretch border border-muted/5 hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden group">
            <Image 
              src={image} 
              alt={name} 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full self-center md:self-start">
              Meet Our Senior Pastor
            </span>
            <h2 className="mb-6 font-serif tracking-tight text-3xl md:text-4xl">{name}</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed italic last:mb-0">
              &quot;My calling is to shepherd this flock with integrity and to preach the Word in season and out of season.&quot;
            </p>
            <p className="text-muted mb-10 leading-relaxed text-lg">
              {bio}
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
              <span className="text-sm font-bold uppercase tracking-wider text-text">Follow:</span>
              <div className="flex space-x-6 text-muted">
                <motion.a whileHover={{ y: -3, color: "var(--color-primary)" }} href="#" className="transition-colors"><Facebook className="w-6 h-6" /></motion.a>
                <motion.a whileHover={{ y: -3, color: "var(--color-primary)" }} href="#" className="transition-colors"><Twitter className="w-6 h-6" /></motion.a>
                <motion.a whileHover={{ y: -3, color: "var(--color-primary)" }} href="#" className="transition-colors"><Instagram className="w-6 h-6" /></motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
