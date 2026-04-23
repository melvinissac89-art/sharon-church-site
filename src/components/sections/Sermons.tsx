"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Sermons({ sermons = [] }: { sermons?: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="sermons" className="section-padding bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-full">
                Sermon Archive
              </span>
              <h2 className="tracking-tight text-3xl md:text-4xl lg:text-5xl">Recent Messages</h2>
            </motion.div>
          </div>
          <Link href="/sermons">
            <Button variant="outline" className="group h-12 rounded-xl px-6 font-bold uppercase tracking-widest text-xs">
              View All Sermons <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {sermons.slice(0, 3).map((sermon, idx) => (
            <motion.div variants={cardVariants} key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-soft group-hover:shadow-2xl transition-all duration-500 border border-muted/5">
                <Image 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <Play className="w-6 h-6 text-white fill-current" />
                  </motion.div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{sermon.title}</h3>
                <div className="flex items-center justify-between text-muted text-sm font-bold uppercase tracking-widest">
                  <span>{sermon.speaker}</span>
                  <span className="opacity-50">{new Date(sermon.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
