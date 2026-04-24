"use client"
import { Button } from "@/components/ui/Button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"

export default function Hero({ title, subtitle }: { title?: string; subtitle?: string }) {
  const { scrollY } = useScroll()
  
  // Dynamic horizontal movement based on scroll
  const xTranslation = useTransform(scrollY, [0, 600], [0, -150])
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <motion.div
          style={{ x: xTranslation, opacity: opacityFade }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.span 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="inline-block mb-1 text-L font-bold tracking-[0.5em] text-primary uppercase"
          >
            WELCOME TO
          </motion.span>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-2 text-[48px] md:text-[72px]"
          >
            Sharon Fellowship Church
          </motion.h1>

          {/* Subheading */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-4 text-2xl md:text-3xl font-manrope font-bold text-muted/80"
          >
            Kaithaparambu
          </motion.div>

          {/* Supporting line */}
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xl text-muted/60 mb-6 leading-relaxed font-manrope"
          >
            Join us in worship, word, and fellowship
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 rounded-full shadow-lg shadow-primary/20">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Live
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 rounded-full border-2">
              Facebook Live
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 flex items-center gap-4"
      >
        <div className="w-12 h-px bg-muted" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Scroll to Explore</span>
      </motion.div>
    </section>
  )
}
