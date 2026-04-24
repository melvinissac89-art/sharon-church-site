"use client"

import { Card } from "@/components/ui/Card"
import { Users, Music, Baby, Book, Globe, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Ministries({ ministries = [] }: { ministries?: any[] }) {
  const defaultIcons: { [key: string]: any } = {
    children: Baby,
    youth: Users,
    worship: Music,
    missions: Globe,
    bible: Book,
    creative: Lightbulb
  }
  
  const contentMap: { [key: string]: { title: string, description: string } } = {
    children: {
      title: "Children",
      description: "Building a foundation of faith for our little ones.",
    },
    youth: {
      title: "Youth",
      description: "Empowering the next generation for Christ.",
    },
    worship: {
      title: "Worship",
      description: "Honoring God through music and creative arts.",
    },
    missions: {
      title: "Missions",
      description: "Sharing the Gospel locally and globally.",
    },
    bible: {
      title: "Bible Study",
      description: "Dive deeper into the Word every week.",
    },
    creative: {
      title: "Creative",
      description: "Using technology and design to share the truth.",
    }
  }

  const routeMap: { [key: string]: string } = {
    children: "children",
    youth: "youth",
    worship: "worship",
    missions: "missions",
    bible: "bible-study",
    creative: "creative",
  };

  const ids = ["children", "youth", "worship", "missions", "bible", "creative"]

  return (
    <section id="ministries" className="section-padding pt-16 pb-8 bg-transparent overflow-hidden relative">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="text-left max-w-2xl mb-12">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black tracking-[0.2em] text-primary uppercase bg-white rounded-full shadow-sm">
            Our Ministries
          </span>
          <h2 className="mb-6 text-5xl md:text-7xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent pb-1 leading-tight">A Place for Everyone to Serve</h2>
          <p className="text-muted/70 leading-relaxed text-lg font-manrope font-medium text-left">
            Find your community where you can grow, serve, and find your purpose within our church family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ids.map((id, idx) => {
            const data = contentMap[id]
            const Icon = defaultIcons[id]
            return (
              <div key={id} className="h-full">
                <Link 
                  href={`/ministries/${routeMap[id]}`} 
                  scroll={true}
                  className="block h-full"
                >
                  <Card 
                    className="p-7 hover:border-primary/20 transition-all group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-[2.2rem] border-muted/5 shadow-soft bg-white cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{data.title}</h3>
                    <p className="text-muted/70 leading-relaxed mb-6 flex-grow text-base font-manrope text-left">
                      {data.description}
                    </p>
                    <div className="font-bold text-xs text-primary flex items-center gap-2 group-hover:gap-3 transition-all mt-auto tracking-[0.2em] uppercase">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


