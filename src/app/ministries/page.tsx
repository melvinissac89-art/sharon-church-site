import { Card } from "@/components/ui/Card"
import { Users, Music, Baby, Book, Globe, Lightbulb, Heart, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function MinistriesPage() {
  const groups = [
    { id: "children", name: "Children", icon: Baby, desc: "Building a foundation of faith for our little ones through engaging stories and activities.", path: "children" },
    { id: "youth", name: "Youth", icon: Users, desc: "Empowering the next generation to lead with faith, integrity, and purpose in a modern world.", path: "youth" },
    { id: "worship", name: "Worship", icon: Music, desc: "Honoring God through musical excellence and creating atmospheres of sincere praise.", path: "worship" },
    { id: "missions", name: "Missions", icon: Globe, desc: "Taking the Gospel beyond our walls to serve the marginalized and share Christ globally.", path: "missions" },
    { id: "bible-study", name: "Bible Study", icon: Book, desc: "Collective exploration of the Scriptures to enrich our minds and transform our hearts.", path: "bible-study" },
    { id: "creative", name: "Creative", icon: Lightbulb, desc: "Leveraging digital media, design, and technology to communicate the unchanging truth.", path: "creative" },
    { id: "pastoral-care", name: "Pastoral Care", icon: Heart, desc: "Providing support, counseling, and prayerful companionship through life's trials.", path: "pastoral-care" },
    { id: "security", name: "Security", icon: Shield, desc: "Ensuring a safe and peaceful environment for all who come to worship with us.", path: "security" },
    { id: "outreach", name: "Outreach", icon: Star, desc: "Active community engagement to serve the practical needs of our neighborhood.", path: "outreach" }
  ]

  return (
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
          <Link key={idx} href={`/ministries/${group.path}`} scroll={true} className="block">
            <Card className="p-12 hover:border-primary/20 transition-all group hover:shadow-2xl flex flex-col items-center text-center h-full hover:-translate-y-1">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <group.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
              <p className="text-muted leading-relaxed mb-8">
                {group.desc}
              </p>
              <div className="mt-auto font-bold text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
