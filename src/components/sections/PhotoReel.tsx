"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
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
  const contentRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const contentWidth = contentRef.current.scrollWidth
        setConstraints({ 
          left: Math.min(0, -(contentWidth - containerWidth + 64)), 
          right: 0 
        })
      }
    }
    
    updateConstraints()
    window.addEventListener("resize", updateConstraints)
    const timer = setTimeout(updateConstraints, 500)
    return () => {
      window.removeEventListener("resize", updateConstraints)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 1) return
      e.preventDefault()
      
      const newX = x.get() - e.deltaY * 5.0
      const clampedX = Math.max(constraints.left, Math.min(constraints.right, newX))
      
      // Use animate for smooth springy wheel interaction
      animate(x, clampedX, { 
        type: "spring", 
        stiffness: 150, 
        damping: 30,
        mass: 0.5,
        restDelta: 0.01
      })
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [x, constraints])

  return (
    <section className="pt-0 pb-12 bg-transparent overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#4648d4] to-[#b4136d] bg-clip-text text-transparent">
            Church Family Moments
          </h2>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex items-center overflow-hidden h-[300px] md:h-[450px] cursor-grab active:cursor-grabbing"
      >
        <motion.div 
          ref={contentRef}
          style={{ x }}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.15}
          className="flex gap-8 px-6 pb-4"
        >
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
    <div
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
    </div>
  )
}




