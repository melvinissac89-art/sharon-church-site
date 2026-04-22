import { Quote } from "lucide-react"

export default function BibleVerse() {
  return (
    <section className="section-padding bg-text text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <Quote className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="w-12 h-12 text-accent mx-auto mb-12 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
            &quot;For I know the plans I have for you,&quot; declares the Lord, &quot;plans to prosper you and not to harm you, plans to give you hope and a future.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Jeremiah 29:11</span>
            <div className="h-px w-8 bg-accent/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
