"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Sermons({ sermons = [] }: { sermons?: any[] }) {
  return (
    <section id="sermons" className="py-6 md:py-10 scroll-mt-24">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-full">
            Sermon Archive
          </span>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <h2 className="tracking-tight text-5xl md:text-7xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-1 leading-tight mb-0">
              Recent Messages
            </h2>
            <Link
              href="/sermons"
              className="group flex items-center justify-center transition-all duration-500 shrink-0"
            >
              <span className="text-4xl md:text-6xl font-light text-text/40 group-hover:text-primary transition-all duration-500 transform group-hover:translate-x-4">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sermons.slice(0, 3).map((sermon, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-soft group-hover:shadow-2xl transition-all duration-500 border border-muted/5">
                <Image 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-95">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{sermon.title}</h3>
                <div className="flex items-center justify-between text-muted text-sm font-bold uppercase tracking-widest">
                  <span>{sermon.speaker}</span>
                  <span className="opacity-50">{new Date(sermon.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

