import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section className="section-padding bg-surface" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase">
              Visit Us
            </span>
            <h2 className="mb-8 font-serif">Get in Touch</h2>
            <p className="text-muted text-lg mb-12 leading-relaxed">
              Have questions about our services, ministries, or how to get involved? We&apos;re here to help. Reach out to us via phone, email, or visit our office.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Address", content: "123 Church Street, Suite 400, Faith District, State 12345" },
                { icon: Phone, title: "Phone", content: "(123) 456-7890" },
                { icon: Mail, title: "Email", content: "info@sharonfellowship.church" },
                { icon: Clock, title: "Office Hours", content: "Mon - Fri: 9:00 AM - 5:00 PM" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-muted/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-base">{item.title}</h4>
                    <p className="text-muted leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-16 border-t border-muted/10 flex flex-col sm:flex-row gap-4">
              <Button size="lg">Send Message</Button>
              <Button variant="outline" size="lg" className="gap-2">
                Directions on Google Maps <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.95373531532135!3d-37.81627977975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db5d!2sChurch%20St%2C%20Richmond%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1652134567890!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
