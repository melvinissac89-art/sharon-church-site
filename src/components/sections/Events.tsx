"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Events({ events = [] }: { events?: any[] }) {
  return (
    <section id="events" className="section-padding bg-surface scroll-mt-24 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="text-left">
            <div>
              <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-white rounded-full shadow-sm">
                Mark Your Calendar
              </span>
              <h2 className="tracking-tight text-3xl md:text-5xl lg:text-6xl font-extrabold pb-1">Upcoming Events</h2>
            </div>
          </div>
          <Link href="/events">
            <Button variant="outline" className="group h-12 rounded-xl px-6 font-bold uppercase tracking-widest text-xs">
              See All Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.slice(0, 3).map((event, idx) => (
            <div key={idx} className="h-full">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted text-sm mb-3 font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted leading-relaxed line-clamp-3 mb-4 flex-grow text-lg">
                    {event.body || event.description}
                  </p>
                  <Button variant="ghost" className="w-full group/btn justify-between px-0 hover:bg-transparent text-primary font-bold text-xs tracking-[0.2em] uppercase">
                    Event Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

