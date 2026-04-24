import { Quote, BookOpen } from "lucide-react"
import VerseOfTheHour from "@/components/VerseOfTheHour"

export default function BibleVerse() {
  return (
    <section className="section-padding bg-surface text-text relative overflow-hidden py-32 border-y border-muted/5">
      {/* Decorative background - Very subtle for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-[0.03] pointer-events-none">
        <Quote className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Accent bible icon replacement */}
          <div className="w-20 h-20 rounded-3xl bg-white shadow-soft border border-muted/5 flex items-center justify-center mx-auto mb-16 group hover:shadow-xl transition-all duration-700">
            <BookOpen className="w-8 h-8 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="relative">
            <VerseOfTheHour />
          </div>
          
        </div>
      </div>
    </section>
  )
}
