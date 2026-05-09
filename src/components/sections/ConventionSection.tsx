"use client"

import { Calendar, Clock, MapPin, Phone, Music, Mic2, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ConventionSection() {
  return (
    <section className="py-6 md:py-10 px-2 md:px-6 relative overflow-hidden bg-transparent">
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        
        {/* Main Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-3xl border border-white/50 shadow-2xl p-4 md:p-6 lg:p-8"
        >
          {/* Accent Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

          <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
            
            {/* Photo Side (Left) - Enlarged */}
            <div className="w-full lg:w-[55%] relative group shrink-0">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/10] lg:aspect-auto lg:h-full border border-white/20">
                <img 
                  src="/sharon-church-site/images/gallery/Convention.jpeg" 
                  alt="Convention Advertisement" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Decorative Blur Elements */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-[60px] z-0" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] z-0" />

              {/* Floating Date Badge - Compact */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white z-20 transform hover:-translate-y-1 transition-transform cursor-default hidden md:block">
                <p className="text-3xl font-black text-primary leading-none mb-0.5">20</p>
                <p className="text-[10px] font-black text-muted/60 uppercase tracking-widest">MAY 2026</p>
              </div>
            </div>

            {/* Content Side (Right) - Tightened */}
            <div className="flex-1 flex flex-col justify-between py-2">
              
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
                  >
                    Special Event
                  </motion.span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text leading-tight mb-2">
                    ശാരോൻ ഫെല്ലോഷിപ്പ് ചർച്ച്
                  </h2>
                  <p className="text-lg md:text-xl font-bold text-muted/60 font-manrope">
                    കൈതപ്പനത്ത് സഭയുടെ ആഭിമുഖ്യത്തിൽ
                  </p>
                </div>

                {/* Main Title - Reduced Size */}
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-primary leading-snug">
                    ഏകദിന സുവിശേഷ യോഗവും <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                      സംഗീത വിരുന്നും
                    </span>
                  </h3>
                </div>

                {/* Quick Details List - Compact */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary border border-primary/5">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted/40 uppercase tracking-widest">DATE & DAY</p>
                      <p className="text-lg font-bold text-text">2026 മേയ് 20, ബുധനാഴ്ച</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary border border-primary/5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted/40 uppercase tracking-widest">TIME</p>
                      <p className="text-lg font-bold text-text">വൈകിട്ട് 5:30 - രാത്രി 9:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary border border-primary/5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted/40 uppercase tracking-widest">LOCATION</p>
                      <p className="text-lg font-bold text-text">അമ്മോനത്ത് ഗ്രൗണ്ടിൽ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest & Contact Bottom Section */}
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted/5">
                  <div className="flex items-center gap-3">
                    <Mic2 className="w-5 h-5 text-primary opacity-50" />
                    <p className="text-sm font-bold text-text leading-tight">പാസ്റ്റർ. ജോയി പായ്ക്കൽ</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-purple-600 opacity-50" />
                    <p className="text-sm font-bold text-text leading-tight">ശാരോൻ ക്വയർ</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/40 p-4 rounded-2xl border border-white/60">
                  <span className="font-bold text-sm text-text">ഏവർക്കും സ്വാഗതം...</span>
                  <div className="flex gap-4">
                    <a href="tel:+919947876228" className="text-primary text-sm font-black hover:scale-105 transition-transform">
                      +91 99478 76228
                    </a>
                    <a href="tel:+919447196176" className="text-primary text-sm font-black hover:scale-105 transition-transform">
                      +91 94471 96176
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
