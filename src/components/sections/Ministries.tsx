"use client"

import { Card } from "@/components/ui/Card"
import { Users, Music, Baby, Book, Globe, Lightbulb, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function Ministries({ ministries = [] }: { ministries?: any[] }) {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Dynamic horizontal movement based on scroll progress
  const xTranslation = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -100])

  const defaultIcons: { [key: string]: any } = {
    children: Baby,
    youth: Users,
    worship: Music,
    missions: Globe,
    bible: Book,
    creative: Lightbulb
  }
  
  const contentMap: { [key: string]: { title: string, description: string } } = {
    children: {
      title: "Children",
      description: "Building a foundation of faith for our little ones.",
    },
    youth: {
      title: "Youth",
      description: "Empowering the next generation for Christ.",
    },
    worship: {
      title: "Worship",
      description: "Honoring God through music and creative arts.",
    },
    missions: {
      title: "Missions",
      description: "Sharing the Gospel locally and globally.",
    },
    bible: {
      title: "Bible Study",
      description: "Dive deeper into the Word every week.",
    },
    creative: {
      title: "Creative",
      description: "Using technology and design to share the truth.",
    }
  }

  const routeMap: { [key: string]: string } = {
    children: "children",
    youth: "youth",
    worship: "worship",
    missions: "missions",
    bible: "bible-study",
    creative: "creative",
  };

  const ids = ["children", "youth", "worship", "missions", "bible", "creative"]

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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={containerRef} id="ministries" className="section-padding py-16 bg-surface overflow-hidden relative">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <motion.div
          style={{ x: xTranslation }}
          className="text-left max-w-2xl mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black tracking-[0.2em] text-primary uppercase bg-white rounded-full shadow-sm">
            Our Ministries
          </span>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl tracking-tight font-black leading-tight">A Place for Everyone to Serve</h2>
          <p className="text-muted/70 leading-relaxed text-lg font-manrope font-medium text-left">
            Find your community where you can grow, serve, and find your purpose within our church family.
          </p>
        </motion.div>

        <motion.div 
          style={{ x: xTranslation }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {ids.map((id, idx) => {
            const data = contentMap[id]
            const Icon = defaultIcons[id]
            return (
              <motion.div variants={itemVariants} key={id} className="h-full">
                <Link 
                  href={`/ministries/${routeMap[id]}`} 
                  scroll={true}
                  className="block h-full"
                >
                  <Card 
                    className="p-7 hover:border-primary/20 transition-all group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-[2.2rem] border-muted/5 shadow-soft bg-white cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{data.title}</h3>
                    <p className="text-muted/70 leading-relaxed mb-6 flex-grow text-base font-manrope text-left">
                      {data.description}
                    </p>
                    <div className="font-bold text-xs text-primary flex items-center gap-2 group-hover:gap-3 transition-all mt-auto tracking-[0.2em] uppercase">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

