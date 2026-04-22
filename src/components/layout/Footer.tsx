import Link from "next/link"
import { Facebook, Youtube, Instagram, Twitter } from "@/components/ui/SocialIcons"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-surface py-24 border-t border-muted/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-serif font-bold text-primary flex items-center gap-2 mb-8">
            <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xl font-serif italic">S</span>
            Sharon Fellowship
          </Link>
          <p className="text-muted max-w-md mb-8 leading-relaxed">
            A place of worship, fellowship, and spiritual growth. We are dedicated to sharing the love of Christ and serving our community with grace and compassion.
          </p>
          <div className="flex space-x-5 text-muted">
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-muted">
            <li><Link href="/sermons" className="hover:text-primary transition-colors">Watch Online</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
            <li><Link href="/ministries" className="hover:text-primary transition-colors">Our Ministries</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">Who We Are</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>123 Church Street, City, State 12345</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>info@sharonfellowship.church</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-muted/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Sharon Fellowship Church. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
