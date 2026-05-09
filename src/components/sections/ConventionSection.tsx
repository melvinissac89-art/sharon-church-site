"use client"

import { Calendar, Clock, MapPin, Phone, Music, Mic2, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ConventionSection() {
  return (
    <section className="section-padding bg-transparent overflow-hidden min-h-[70vh] flex items-center justify-center">
      <div className="w-full px-2 md:px-4 lg:px-6 relative z-10 py-1">

        {/* Site Style Header - Ultra Compact */}
        <div className="mb-4">
          <span className="inline-block px-2 py-0.5 mb-1 text-[10px] font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            Special Event
          </span>
          <h2 className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-rose-500 bg-clip-text text-transparent">
            Upcoming Convention & Music Feast
          </h2>
        </div>

        {/* Main Section Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden bg-white/30 backdrop-blur-3xl border border-white/50 shadow-2xl p-4 md:p-5 lg:p-6"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-0 lg:items-stretch">

            {/* Photo Side - with anchored Date */}
            <div className="w-full lg:w-[52%] flex items-center gap-2 lg:gap-4 shrink-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[500px] border border-white/30 bg-white/10 shrink-0">
                <img
                  src="/sharon-church-site/images/gallery/Convention.jpeg"
                  alt="Convention Advertisement"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Date Indicator - Upright & Static */}
              <div className="hidden lg:flex flex-col items-center justify-center shrink-0 z-20">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-black text-primary/30 tracking-[0.2em] mb-[-10px] uppercase">MAY</span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">20</span>
                  <div className="w-6 h-0.5 bg-primary/20 rounded-full mt-2" />
                </div>
              </div>
            </div>

            {/* Content Side - Right Column */}
            <div className="flex-1 flex flex-col justify-between py-1 pl-4 lg:pl-8">

              {/* Top Section */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary leading-tight">
                    ശാരോൻ ഫെല്ലോഷിപ്പ് ചർച്ച്
                  </h3>
                  <p className="text-sm md:text-base font-bold text-muted/60 font-manrope">
                    കൈതപ്പറമ്പ് സഭയുടെ ആഭിമുഖ്യത്തിൽ
                  </p>
                </div>

                <div className="h-0.5 bg-primary/10 w-full" />

                <h4 className="text-xl md:text-2xl font-black leading-snug">
                  <span className="text-primary">ഏകദിന സുവിശേഷ യോഗവും</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600 uppercase tracking-tighter">
                    സംഗീത വിരുന്നും
                  </span>
                </h4>
              </div>

              {/* Middle Section - Logistics */}
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <p className="text-sm md:text-base font-bold text-text">2026 മേയ് 20, ബുധനാഴ്ച</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-sm md:text-base font-bold text-text">5:30 pm - 9:00 pm</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-sm md:text-base font-bold text-text">അമ്മോണത് ഗ്രൗണ്ടിൽ, കൈതപ്പറമ്പ്</p>
                </div>
              </div>

              {/* Bottom Section - Guests & Contact */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2 py-2">
                  <div className="flex items-center gap-2">
                    <Mic2 className="w-4 h-4 text-primary opacity-60" />
                    <p className="text-sm font-black text-text/80">ജോയി പാറയ്ക്കൽ അങ്കമാലി</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-purple-600 opacity-60" />
                    <p className="text-sm font-black text-text/80">ശാരോൻ ക്വയർ</p>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-sm border border-primary/5">
                  <span className="text-[11px] font-black text-primary/70 uppercase tracking-widest">ഏവർക്കും സ്വാഗതം</span>
                  <div className="flex gap-4">
                    <a href="tel:+919947876228" className="text-sm font-black text-primary">9947876228</a>
                    <a href="tel:+919447196176" className="text-sm font-black text-primary">9447196176</a>
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
