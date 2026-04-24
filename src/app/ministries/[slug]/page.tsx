import { notFound } from "next/navigation";
import { Baby, Users, Music, Globe, Book, Lightbulb, Heart, Shield, Star, ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

type MinistrySlug =
  | "children"
  | "youth"
  | "worship"
  | "missions"
  | "bible-study"
  | "creative"
  | "pastoral-care"
  | "security"
  | "outreach";

interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
}

interface MinistryContent {
  title: string;
  description: string;
  fullContent: string;
  icon: any;
  schedule: ScheduleItem[];
  color: string;
}

const contentMap: Record<MinistrySlug, MinistryContent> = {
  "children": {
    title: "Children",
    description: "Building a foundation of faith for our little ones.",
    fullContent: "Our Children's Ministry is dedicated to nurturing young hearts in the knowledge of God from an early age. Through age-appropriate teaching, engaging Bible stories, and interactive activities, children are introduced to the truth of Scripture in a way they can understand and love. We focus on building a strong spiritual foundation, helping children grow in faith, obedience, and character.",
    icon: Baby,
    color: "bg-blue-500",
    schedule: [
      { day: "Sunday", time: "9:00 AM", activity: "Sunday School" },
      { day: "Wednesday", time: "6:30 PM", activity: "Kids' Bible Club" }
    ]
  },
  "youth": {
    title: "Youth",
    description: "Empowering the next generation for Christ.",
    fullContent: "The Youth Ministry exists to guide the next generation to know Christ personally and stand firm in their faith. In a world full of distractions and confusion, we aim to ground young people in the truth of God’s Word. Through Bible teaching, fellowship, and open discussions, youth are encouraged to grow spiritually and develop godly character.",
    icon: Users,
    color: "bg-purple-500",
    schedule: [
      { day: "Saturday", time: "5:00 PM", activity: "Youth Service" },
      { day: "Friday", time: "7:00 PM", activity: "Small Groups" }
    ]
  },
  "worship": {
    title: "Worship",
    description: "Honoring God through music and creative arts.",
    fullContent: "The Worship Ministry is committed to honoring God through music and praise that exalts His name. Our goal is not performance, but leading the congregation into genuine worship. We believe worship is a response to who God is, expressed through song, humility, and surrender.",
    icon: Music,
    color: "bg-indigo-500",
    schedule: [
      { day: "Thursday", time: "7:00 PM", activity: "Choir Practice" },
      { day: "Sunday", time: "8:30 AM", activity: "Pre-service Prayer" }
    ]
  },
  "missions": {
    title: "Missions",
    description: "Sharing the Gospel locally and globally.",
    fullContent: "The Missions Ministry carries the burden of taking the gospel beyond the church walls. We are committed to sharing the message of Christ both locally and globally. Through outreach programs, evangelism, and support for mission work, we seek to reach those who have not yet heard the truth.",
    icon: Globe,
    color: "bg-green-500",
    schedule: [
      { day: "Monthly", time: "Last Sat", activity: "Local Outreach" },
      { day: "Quarterly", time: "TBD", activity: "Missions Focus" }
    ]
  },
  "bible-study": {
    title: "Bible Study",
    description: "Dive deeper into the Word every week.",
    fullContent: "Our Bible Study Ministry is focused on deepening understanding of God’s Word through structured and faithful teaching. Each session encourages believers to grow in knowledge, discernment, and spiritual maturity. We study Scripture verse by verse, allowing the Bible to interpret itself.",
    icon: Book,
    color: "bg-amber-500",
    schedule: [
      { day: "Tuesday", time: "10:00 AM", activity: "Morning Study" },
      { day: "Thursday", time: "7:30 PM", activity: "Evening Study" }
    ]
  },
  "creative": {
    title: "Creative",
    description: "Using technology and design to share the truth.",
    fullContent: "The Creative Ministry uses technology, design, and media to communicate the message of the gospel clearly and effectively. From visual design to digital outreach, this ministry supports the church’s mission by presenting truth in ways that engage and reach people in today’s world.",
    icon: Lightbulb,
    color: "bg-cyan-500",
    schedule: [
      { day: "Monday", time: "6:00 PM", activity: "Media Team Sync" },
      { day: "Saturday", time: "10:00 AM", activity: "Production Prep" }
    ]
  },
  "pastoral-care": {
    title: "Pastoral Care",
    description: "Support and prayer for every season.",
    fullContent: "Our Pastoral Care team provides prayer, counseling, and practical support to members of our congregation during times of need, illness, or transition. We believe in bearing one another's burdens and walking together in the love of Christ.",
    icon: Heart,
    color: "bg-rose-500",
    schedule: [
      { day: "Daily", time: "Available", activity: "Prayer Support" },
      { day: "Thursday", time: "2:00 PM", activity: "Visitation Team" }
    ]
  },
  "security": {
    title: "Security",
    description: "Ensuring a safe place to worship.",
    fullContent: "The Security Ministry is dedicated to maintaining a safe and peaceful environment for everyone who attends our services and events. Our team works diligently to ensure that families can focus on worship with peace of mind.",
    icon: Shield,
    color: "bg-slate-500",
    schedule: [
      { day: "Sunday", time: "8:30 AM", activity: "Service Coverage" },
      { day: "Special", time: "As needed", activity: "Event Security" }
    ]
  },
  "outreach": {
    title: "Outreach",
    description: "Serving our community with love.",
    fullContent: "The Outreach Ministry is the hands and feet of Jesus in our neighborhood. We engage in various community service projects, food drives, and local events to share God's love through practical action and genuine relationship.",
    icon: Star,
    color: "bg-yellow-500",
    schedule: [
      { day: "Saturday", time: "9:00 AM", activity: "Community Service" },
      { day: "Monthly", time: "1st Sun", activity: "Donation Drive" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(contentMap).map((slug) => ({
    slug: slug,
  }));
}

export default async function MinistryPage({ params }: { params: Promise<{ slug: MinistrySlug }> }) {
  const { slug } = await params;
  const ministry = contentMap[slug];

  if (!ministry) {
    notFound();
  }

  const Icon = ministry.icon;

  return (
    <div className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-6">
          <Link href="/ministries" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Ministries
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl ${ministry.color} text-white flex items-center justify-center shadow-2xl`}>
              <Icon className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase">
                Ministry Spotlight
              </span>
              <h1 className="mb-4 text-4xl md:text-6xl font-black">{ministry.title}</h1>
              <p className="text-muted text-xl max-w-2xl">{ministry.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">About the Ministry</h2>
          <div className="prose prose-lg max-w-none text-muted leading-relaxed mb-12">
            <p>{ministry.fullContent}</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-muted/5">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" /> Activities & Schedule
            </h3>
            <div className="space-y-6">
              {ministry.schedule.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-surface hover:bg-primary/5 transition-colors group">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary font-bold">
                      {item.day.substring(0, 3)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.activity}</h4>
                      <p className="text-sm text-muted/70 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {item.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-muted/50 uppercase tracking-widest">
                    <MapPin className="w-3 h-3" /> Main Hall
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-primary text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <h3 className="text-2xl font-bold mb-6 relative z-10">Get Involved</h3>
            <p className="mb-8 text-white/80 relative z-10">We believe everyone has a gift to contribute. Join us as we serve and grow together.</p>
            <Link href="/#contact" className="inline-block w-full py-4 bg-white text-primary font-bold text-center rounded-2xl hover:bg-opacity-90 transition-all shadow-xl">
              Join this Ministry
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
