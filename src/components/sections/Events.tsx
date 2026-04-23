"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Events({ events = [] }: { events?: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="events" className="section-padding bg-surface scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-white rounded-full shadow-sm px-4">
                Mark Your Calendar
              </span>
              <h2 className="tracking-tight text-3xl md:text-4xl lg:text-5xl">Upcoming Events</h2>
            </motion.div>
          </div>
          <Link href="/events">
            <Button variant="outline" className="group h-12 rounded-xl px-6 font-bold uppercase tracking-widest text-xs">
              See All Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.slice(0, 3).map((event, idx) => (
            <motion.div variants={itemVariants} key={idx} className="h-full">
              <Card className="overflow-hidden group h-full flex flex-col hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] border-none bg-white shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex flex-col items-center z-10 transition-transform group-hover:scale-110 duration-500">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest text-[10px]">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-2xl font-serif font-bold text-text">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted text-sm mb-6 font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted leading-relaxed line-clamp-3 mb-8 flex-grow text-lg">
                    {event.body || event.description}
                  </p>
                  <Button variant="ghost" className="w-full group/btn justify-between px-0 hover:bg-transparent text-primary font-bold text-xs tracking-[0.2em] uppercase">
                    Event Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
