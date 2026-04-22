import { Clock, MapPin, Calendar } from "lucide-react"

export default function ServiceTimes({ 
  sunday = "Sunday Worship: 10:00 AM\nSunday School: 9:00 AM",
  weekday = "Wednesday Bible Study: 7:00 PM\nFriday Prayer: 7:00 PM"
}: { sunday?: string, weekday?: string }) {
  const schedule = [
    { title: "Sunday Services", time: sunday, icon: Clock },
    { title: "Weekday Gatherings", time: weekday, icon: Calendar }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase">
            Gather with Us
          </span>
          <h2 className="mb-6 font-serif">Service Times & Location</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
          {schedule.map((item, idx) => (
            <div key={idx} className="bg-surface p-10 rounded-[2rem] border border-muted/5 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
              <div className="text-muted leading-relaxed whitespace-pre-line text-lg">
                {item.time}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-surface p-10 rounded-[3rem] border border-muted/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center shrink-0">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Our Location</h3>
              <p className="text-muted text-lg">123 Faith Avenue, Grace City, GC 54321</p>
            </div>
          </div>
          <a href="#" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-xl transition-all">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
