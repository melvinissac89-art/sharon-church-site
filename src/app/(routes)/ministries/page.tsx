import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import { Card } from "@/components/ui/Card"
import { Users, Music, Baby, Book, Globe, Lightbulb, Heart, Shield, Star } from "lucide-react"

export default function MinistriesPage() {
  const groups = [
    { name: "Children", icon: Baby, desc: "Building a foundation of faith for our little ones through engaging stories and activities." },
    { name: "Youth", icon: Users, desc: "Empowering the next generation to lead with faith, integrity, and purpose in a modern world." },
    { name: "Worship", icon: Music, desc: "Honoring God through musical excellence and creating atmospheres of sincere praise." },
    { name: "Missions", icon: Globe, desc: "Taking the Gospel beyond our walls to serve the marginalized and share Christ globally." },
    { name: "Bible Study", icon: Book, desc: "Collective exploration of the Scriptures to enrich our minds and transform our hearts." },
    { name: "Creative", icon: Lightbulb, desc: "Leveraging digital media, design, and technology to communicate the unchanging truth." },
    { name: "Pastoral Care", icon: Heart, desc: "Providing support, counseling, and prayerful companionship through life's trials." },
    { name: "Security", icon: Shield, desc: "Ensuring a safe and peaceful environment for all who come to worship with us." },
    { name: "Outreach", icon: Star, desc: "Active community engagement to serve the practical needs of our neighborhood." }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 text-center max-w-3xl mb-24">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase">
            Serve & Grow
          </span>
          <h1 className="mb-6">Our Ministries</h1>
          <p className="text-muted text-lg">Every member has a gift, and every gift has a place. Discover how you can grow spiritually and serve others through our diverse ministry areas.</p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map((group, idx) => (
            <Card key={idx} className="p-12 hover:border-primary/20 transition-all group hover:shadow-2xl flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <group.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
              <p className="text-muted leading-relaxed mb-8">
                {group.desc}
              </p>
              <a href="#" className="mt-auto font-bold text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Involved <span>→</span>
              </a>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
