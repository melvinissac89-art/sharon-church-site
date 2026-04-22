"use client"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function Hero({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wider text-primary bg-primary/5 rounded-full uppercase">
            Welcome to Sharon Fellowship
          </span>
          <h1 className="mb-8 tracking-tight">
            {title || "A Sanctuary for the Soul, A Community for the Spirit"}
          </h1>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle || "Join us as we explore faith, find purpose, and build lasting connections in the light of Christ's love."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="group">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Live
            </Button>
            <Button variant="outline" size="lg">
              Facebook Live
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Scroll</span>
        <div className="w-px h-12 bg-muted/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
