"use client"

import { Clock, MapPin, Calendar, Star, Navigation } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const sundayServices = [
  { name: "Sunday School", day: "Sunday", time: "08:30 AM to 09:45 AM", sub: "Classrooms" },
  { name: "Holy Worship", day: "Sunday", time: "10:00 AM to 01:00 PM", sub: "Main Sanctuary", highlight: true },
  { name: "Youth Meeting", day: "2nd Sunday", time: "12:15 PM – 01:00 PM", sub: "After Worship" },
]

const weekdayMeetings = [
  { name: "Ladies Meeting", day: "Tue", time: "10:30 AM" },
  { name: "Cottage Meeting", day: "Thu", time: "06:30 PM" },
  { name: "Fasting Prayer", day: "Fri", time: "10:30 AM" },
  { name: "Blessing Prayer", day: "Sat", time: "07:00 PM" },
  { name: "Morning Prayer", day: "Daily", time: "05:00 AM" },
]

interface ServiceTimesProps {
  sunday?: any
  weekday?: any
}

export default function ServiceTimes({ sunday, weekday }: ServiceTimesProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Dynamic horizontal movement based on scroll progress
  const xTranslation = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -100])

  return (
    <section ref={containerRef} id="services" className="section-padding bg-transparent relative overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div 
          style={{ x: xTranslation }}
          className="text-left mb-10"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Service Times & Location
          </motion.h2>
          <p className="text-xl text-muted/60 max-w-2xl font-manrope font-medium">
            Join us for worship, fellowship, and prayer throughout the week.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          style={{ x: xTranslation }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          
          {/* Sunday Services (col-span-7) */}
          <div className="lg:col-span-7 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 border border-white/50 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#4648d4] to-[#b4136d]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-wider text-muted/40">Sunday Services</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {sundayServices.map((service, idx) => (
                <div key={idx} className={`flex justify-between items-center p-6 rounded-3xl border transition-all ${service.highlight ? 'bg-primary/5 border-primary/20 shadow-inner' : 'bg-white/50 border-white/50'}`}>
                  <div>
                    <h4 className={`text-xl font-extrabold ${service.highlight ? 'text-primary' : 'text-text'}`}>{service.name}</h4>
                    <p className="text-muted/60 font-manrope font-medium text-sm">{service.sub}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-black ${service.highlight ? 'text-primary' : 'text-text/70'}`}>{service.time.split(' to ')[0]}</span>
                    <span className="block text-xs font-bold text-muted/40 tracking-wider">START TIME</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly Service Integration */}
            <div className="mt-8 pt-6 border-t border-muted/10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-[#b4136d] mb-1">Monthly Service</h4>
                <p className="text-muted/60 font-medium font-manrope">Fasting Prayer & Holy Communion • <span className="text-text font-bold">Last 3 days</span></p>
              </div>
            </div>
          </div>

          {/* Weekday Gatherings (col-span-5) */}
          <div className="lg:col-span-5 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 border border-white/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#b4136d] to-orange-400" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#b4136d] flex items-center justify-center shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-wider text-muted/40">Weekdays</h3>
            </div>

            <div className="space-y-2">
              {weekdayMeetings.map((meeting, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-muted/10 last:border-0 group transition-all">
                  <span className="font-bold text-lg text-text group-hover:text-primary transition-colors">{meeting.name}</span>
                  <div className="text-right">
                    <span className="block font-bold text-xs text-muted/40 uppercase tracking-widest">{meeting.day}</span>
                    <span className="text-primary font-black tracking-tighter">{meeting.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card (col-span-12) */}
          <div className="lg:col-span-12 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-6 md:p-8 border border-white/50 shadow-2xl relative overflow-hidden mt-2">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-400 via-[#4648d4] to-[#b4136d]" />
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight">Our Location</h3>
                </div>
                <p className="text-2xl text-text leading-snug font-bold mb-8 font-manrope">
                  Sharon Fellowship Church, Kaithaparambu<br/>
                  <span className="text-muted/60 text-xl font-medium tracking-normal">Kerala 691526</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a 
                    href="https://maps.app.goo.gl/FpfH8Pw2Pr1VK1Pv9" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all hover:scale-[1.02] tracking-wide"
                  >
                    <Navigation className="w-5 h-5 fill-current" />
                    Get Directions
                  </a>
                  <div className="px-6 py-4 bg-white/50 rounded-2xl border border-white font-manrope">
                    <span className="block text-[10px] font-black text-muted/40 uppercase tracking-[0.2em] mb-1">Plus Code</span>
                    <span className="text-primary font-black tracking-widest">4Q7H+W79</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 h-[350px] rounded-[2rem] overflow-hidden border border-white shadow-inner relative group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBafzo3WboR_hS4ZMfUjxP0Pe06rCOsOoUrpUmM81SxN-n6-Iw5HnPRnUfQixosqtlC-ruJiF369y11LJcXgNUwHwVIvketrDH-gIJRa-MxlcBfLR5vZTGIyrwU2RZoVRwmWHSV256ch9Cf_2O7DY6fzWTB6gn2DDof4j7w_7xtL7M98biGh52H_jkLmS0MSO2ye03z-_3BQFzvVkwxM5MVplIwRiQCSxnsTud2ig_c6JzphqlQVoy4B19LFh2zrPh_mwwsJxXdOJY"
                  alt="Kaithaparambu Location Map"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
