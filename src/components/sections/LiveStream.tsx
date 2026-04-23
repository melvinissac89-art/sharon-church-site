"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Youtube } from "@/components/ui/SocialIcons"
import { Play, Calendar, Clock, ArrowRight, VideoOff } from "lucide-react"

interface LiveStreamProps {
  isLive?: boolean
  url?: string
  facebookUrl?: string
  latestSermon?: {
    title: string
    youtube_link: string
    thumbnail: string
    speaker: string
    date?: string
    duration?: string
  }
}

const getEmbedUrl = (url: string) => {
  if (!url) return ""
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  const ytMatch = url.match(ytRegex)
  if (ytMatch && ytMatch[1]) return `https://www.youtube.com/embed/${ytMatch[1]}`
  if (url.includes("facebook.com")) return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`
  return url
}

export default function LiveStream({ isLive = false, url = "", facebookUrl = "", latestSermon }: LiveStreamProps) {
  const embedUrl = getEmbedUrl(url || facebookUrl)

  return (
    <section id="livestream" className="py-24 bg-transparent scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* Live Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-black tracking-[0.2em] uppercase rounded-full">
              Worship Live
            </span>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-3">
              Sunday Worship Live
            </h2>
            <p className="text-xl text-muted/60 max-w-2xl mx-auto font-manrope font-medium leading-relaxed">
              Join our vibrant community for an uplifting service of worship, teaching, and fellowship. Every Sunday morning.
            </p>
          </motion.div>
 
          {/* Video Player Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl aspect-video bg-white/40 backdrop-blur-3xl rounded-[3rem] overflow-hidden relative shadow-[0_32px_64px_-16px_rgba(70,72,212,0.15)] border border-white/50 group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-orange-400 z-10" />
            
            {isLive ? (
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="Live Stream"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-xl flex items-center justify-center mb-8 shadow-xl border border-white">
                  <VideoOff className="w-10 h-10 text-muted/30" />
                </div>
                <h3 className="text-3xl font-black text-text mb-4">Currently Offline</h3>
                <div className="flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-black tracking-widest text-primary uppercase">Next Live: Sunday 10:00 AM</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Sermon Archive Bento Grid */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-muted/10 pb-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-text">Sermon Archive</h3>
              <p className="text-muted/60 font-manrope font-medium text-lg">Catch up on recent messages and teaching series.</p>
            </div>
            <Link href="/sermons">
              <button className="flex items-center gap-2 text-xs font-black tracking-[0.2em] text-primary uppercase hover:gap-4 transition-all group">
                View All Archives
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Sermon (Large Card) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-1/2 min-h-[300px] relative overflow-hidden bg-primary/5">
                <img 
                  src={latestSermon?.thumbnail || "https://images.unsplash.com/photo-1438032005730-c77930514931?auto=format&fit=crop&q=80&w=800"} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  alt={latestSermon?.title}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl border border-white/30">
                    <Play className="w-8 h-8 text-white fill-current translate-x-1" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black tracking-widest uppercase rounded-full self-start mb-6">
                  Latest Message
                </span>
                <h4 className="text-3xl font-black text-text mb-4 leading-tight group-hover:text-primary transition-colors">
                  {latestSermon?.title || "Finding Peace in Chaos"}
                </h4>
                <p className="text-muted/60 font-medium font-manrope mb-8 line-clamp-3">
                  Join us as we examine spiritual principles and how we can maintain inner tranquility despite external circumstances.
                </p>
                <div className="flex items-center gap-6 text-xs font-bold text-muted/40 uppercase">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {latestSermon?.date || "Oct 15, 2023"}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {latestSermon?.duration || "42 mins"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Sermons (Small Cards Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-8 flex-1 border border-white/50 group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-orange-400/10 text-orange-600 text-[10px] font-black tracking-widest uppercase rounded-full">
                    Series: Romans
                  </span>
                  <Play className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                </div>
                <h5 className="text-xl font-black text-text mb-2 group-hover:text-primary transition-colors">The Power of Grace</h5>
                <p className="text-sm text-muted/60 font-manrope line-clamp-2">Understanding the unmerited favor detailed in Romans chapter 5.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-8 flex-1 border border-white/50 group cursor-pointer hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase rounded-full">
                    Guest Speaker
                  </span>
                  <Play className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                </div>
                <h5 className="text-xl font-black text-text mb-2 group-hover:text-primary transition-colors">Living Purposefully</h5>
                <p className="text-sm text-muted/60 font-manrope line-clamp-2">Special insights on finding and walking in your unique calling.</p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
