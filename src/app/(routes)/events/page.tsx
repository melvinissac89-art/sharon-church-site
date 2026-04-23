import { getCollection } from "@/lib/markdown"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import { Card } from "@/components/ui/Card"
import { Calendar as CalendarIcon, MapPin, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export const revalidate = 60

export default function EventsPage() {
  const events = getCollection("events")

  return (
    <main className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase">
              Join the Family
            </span>
            <h1 className="mb-6">Upcoming Events</h1>
            <p className="text-muted text-lg">Stay connected with our community through life-giving events, services, and gatherings for all ages.</p>
          </div>
          
          {!events.length ? (
            <div className="bg-surface p-16 rounded-[2rem] text-center border border-muted/5">
              <CalendarIcon className="w-16 h-16 text-muted/20 mx-auto mb-8" />
              <h3 className="mb-4">No upcoming events</h3>
              <p className="text-muted">We are planning some amazing things for the coming months. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {events.map((event: any) => (
                <Card key={event.slug} className="group overflow-hidden border-none hover:shadow-2xl flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 flex flex-col items-center bg-white rounded-xl shadow-lg p-2 min-w-[60px]">
                      <span className="text-xs font-bold text-muted uppercase">
                        {new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}
                      </span>
                      <span className="text-2xl font-serif font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                    <div className="space-y-3 text-sm text-muted mb-8">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-muted/10">
                      <Link href={`/events/${event.slug}`} className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
