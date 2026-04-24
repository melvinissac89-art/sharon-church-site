import Link from "next/link"
import { Facebook, Youtube, Instagram, Twitter } from "@/components/ui/SocialIcons"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-surface py-24 border-t border-muted/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-primary/10">
              <img 
                src="/sharon-church-site/images/gallery/logo.png" 
                alt="Sharon Fellowship Church Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            Sharon Fellowship
          </Link>
          <p className="text-muted max-w-md mb-8 leading-relaxed">
            A place of worship, fellowship, and spiritual growth. We are dedicated to sharing the love of Christ and serving our community with grace and compassion.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-muted">
            <li><Link href="/#livestream" className="hover:text-primary transition-colors">Watch Online</Link></li>
            <li><Link href="/ministries" className="hover:text-primary transition-colors">Our Ministries</Link></li>
            <li><Link href="/#about" className="hover:text-primary transition-colors">Who We Are</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>Sharon Fellowship Church, Kaithaparambu, Kerala 691526</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>+91 99478 76228</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-muted/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© 2026 Sharon Fellowship Church. Designed and developed by Melvin.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
