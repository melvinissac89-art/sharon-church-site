"use client"

import { Button } from "@/components/ui/Button"
import { MapPin, Phone, ExternalLink } from "lucide-react"

export default function Contact() {
  const googleMapsUrl = "https://maps.app.goo.gl/FpfH8Pw2Pr1VK1Pv9"

  return (
    <section className="section-padding bg-transparent overflow-hidden" id="contact">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black tracking-[0.2em] text-accent uppercase bg-white rounded-full shadow-sm">
              Visit Us
            </span>
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-1 leading-tight">
              Get in Touch
            </h2>
            <p className="text-muted/70 text-xl mb-8 leading-relaxed text-left font-manrope font-medium">
              We look forward to welcoming you to our church family. Reach out to us or visit our sanctuary in Kaithaparambu.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-muted/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-black mb-1.5 text-lg uppercase tracking-wider text-text/40">Address</h4>
                  <p className="text-text font-bold leading-relaxed text-xl">
                    Sharon Fellowship Church Kaithaparambu, <br />
                    Kaithaparambu, Kerala 691526
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-muted/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-black mb-1.5 text-lg uppercase tracking-wider text-text/40">Phone</h4>
                  <p className="text-primary font-black leading-relaxed text-2xl tracking-tighter">
                    +91 99478 76228
                  </p>
                  <a
                    href="https://wa.me/919947876228?text=Hello%20Pastor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-[#25D366] font-bold hover:underline group/wa"
                  >
                    <span className="text-xl">💬</span>
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full gap-3 py-8 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                  Directions on Google Maps <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[500px] relative rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white self-stretch group">
             <img 
                src="/sharon-church-site/images/gallery/moment13.png"
                alt="Sharon Fellowship Church Sanctuary"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="block text-[10px] font-black text-muted/40 uppercase tracking-[0.2em] mb-1">Church Location</span>
                <span className="text-primary font-black tracking-widest text-lg">Kaithaparambu</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

