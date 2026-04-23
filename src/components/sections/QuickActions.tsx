import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { PlayCircle, Calendar, Heart, MapPin, ArrowRight } from "lucide-react"

const actions = [
  {
    title: "Watch Live",
    description: "Join our community in real-time worship.",
    icon: PlayCircle,
    color: "bg-blue-500",
    href: "#livestream"
  },
  {
    title: "Events",
    description: "See what's happening this month.",
    icon: Calendar,
    color: "bg-purple-500",
    href: "/events"
  },
  {
    title: "Visit Us",
    description: "Find directions and service times.",
    icon: MapPin,
    color: "bg-orange-500",
    href: "#contact"
  }
]

export default function QuickActions() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action, idx) => (
            <Link key={idx} href={action.href} className="group">
              <Card className="h-full p-8 hover:-translate-y-2 border border-muted/5 group-hover:border-primary/20 group-hover:shadow-lg">
                <div className={`w-12 h-12 ${action.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-soft transition-transform group-hover:scale-110`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-3 font-bold">{action.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {action.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Get Started <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
