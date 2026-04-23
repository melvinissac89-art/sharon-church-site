"use client"

import { Card } from "@/components/ui/Card"
import { Users, Music, Baby, Book, Globe, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function Ministries({ ministries = [] }: { ministries?: any[] }) {
  const defaultIcons = [Baby, Users, Music, Globe, Book, Lightbulb]
  
  const displayMinistries = ministries.length > 0 ? ministries : [
    { title: "Children", description: "Building a foundation of faith for our little ones." },
    { title: "Youth", description: "Empowering the next generation for Christ." },
    { title: "Worship", description: "Honoring God through music and creative arts." },
    { title: "Missions", description: "Sharing the Gospel locally and globally." },
    { title: "Bible Study", description: "Dive deeper into the Word every week." },
    { title: "Creative", description: "Using technology and design to share the truth." }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="ministries" className="section-padding bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-white rounded-full shadow-sm">
              Our Ministries
            </span>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl tracking-tight">A Place for Everyone to Serve</h2>
            <p className="text-muted leading-relaxed text-xl">
              Whether you&apos;re a child, a student, or a professional, we have a community where you can grow, serve, and find your purpose.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayMinistries.map((group, idx) => {
            const Icon = defaultIcons[idx % defaultIcons.length]
            return (
              <motion.div variants={itemVariants} key={idx} className="h-full">
                <Card className="p-10 hover:border-primary/20 transition-all group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-[2.5rem] border-muted/5 shadow-soft bg-white">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{group.title}</h3>
                  <p className="text-muted leading-relaxed mb-10 flex-grow text-lg">
                    {group.description}
                  </p>
                  <a href="#" className="font-bold text-xs text-primary flex items-center gap-2 group-hover:gap-3 transition-all mt-auto tracking-[0.2em] uppercase">
                    Learn More <span>→</span>
                  </a>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
