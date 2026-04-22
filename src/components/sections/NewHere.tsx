import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function NewHere() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1543191879-16987f73db13?q=80&w=2070&auto=format&fit=crop" 
                alt="Worship Culture" 
                width={800} 
                height={1000}
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decoraive elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-[60px] z-0" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] z-0" />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Next Steps</h4>
                  <p className="text-xs text-muted">Join our community today</p>
                </div>
              </div>
              <p className="text-sm font-medium">100+ new members joined this month</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase">
              First Time Visiting?
            </span>
            <h2 className="mb-8 font-serif">Welcome Home. We&apos;ve Been Waiting for You.</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Stepping into a new church can be intimidating. We want to make your first visit as smooth and welcoming as possible. Here, you aren&apos;t just a visitor—you&apos;re family.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                { title: "Plan Your Visit", desc: "Let us know you're coming so we can welcome you personally." },
                { title: "Casual Atmosphere", desc: "Come as you are. We're more interested in you than what you're wearing." },
                { title: "Engaging Worship", desc: "Experience modern worship and practical teaching that applies to your life." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-1">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-6 font-serif">
              <Button size="lg">I&apos;m New Here</Button>
              <Button variant="ghost" size="lg">Learn About Our Beliefs</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
