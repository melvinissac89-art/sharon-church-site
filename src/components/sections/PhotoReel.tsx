"use client"

import { motion, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const basePath = "/sharon-church-site"
const reelImages = Array.from({ length: 11 }, (_, i) => `${basePath}/images/gallery/moment${i + 1}.jpg`)

// Fallback images if local files aren't ready
const fallbacks = [
  "https://images.unsplash.com/photo-1438032005730-c77930514931?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544427928-c49cd049ccfb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1529070532779-d88fd473f90a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1477610268355-8350c367356c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1543165796-5426273cd297?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506765515384-028bb6a19d3f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531050171651-71fb5de1ba72?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
]

export default function PhotoReel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const xOffset = useMotionValue(0)
  const x = useSpring(xOffset, { stiffness: 100, damping: 20, restDelta: 0.001 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect()
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        e.preventDefault()
        // Calculate new offset (horizontal)
        const newX = xOffset.get() - e.deltaY * 1.5
        
        // Bounds check (don't scroll past the ends)
        // 11 cards (550px each) + 10 gaps (32px each) + padding (48px total) = 6418
        const totalWidth = (reelImages.length * 550) + ((reelImages.length - 1) * 32) + 48
        const minX = -(totalWidth - rect.width + 400) // 400px buffer for breathe room
        
        if (newX <= 0 && newX >= minX) {
          xOffset.set(newX)
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [xOffset])

  return (
    <section className="pt-0 pb-24 bg-transparent transition-colors duration-500 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#4648d4] to-[#b4136d] bg-clip-text text-transparent">
            Church Family Moments
          </h2>
        </motion.div>
      </div>

      <div ref={containerRef} className="flex items-center overflow-hidden h-[300px] md:h-[450px] select-none">
        <motion.div style={{ x }} className="flex gap-8 px-6 pb-12">
          {reelImages.map((src, idx) => (
            <PhotoCard key={idx} src={src} fallback={fallbacks[idx]} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PhotoCard({ src, fallback, index }: { src: string; fallback: string; index: number }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-[280px] h-[180px] md:w-[550px] md:h-[340px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 bg-white/5 flex-shrink-0"
    >
      <Image
        src={imgSrc}
        alt={`Church Family Moment ${index + 1}`}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 300px, 450px"
        onError={() => setImgSrc(fallback)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}


