"use client"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Youtube } from "@/components/ui/SocialIcons"
import { ExternalLink } from "lucide-react"

interface LiveStreamProps {
  isLive?: boolean
  url?: string
  facebookUrl?: string
  latestSermon?: {
    title: string
    youtube_link: string
    thumbnail: string
    speaker: string
  }
}

const getEmbedUrl = (url: string) => {
  if (!url) return ""
  
  // YouTube Detection and Conversion
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  const ytMatch = url.match(ytRegex)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`
  }

  // Facebook Detection and Conversion
  if (url.includes("facebook.com")) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`
  }

  return url
}

export default function LiveStream({ isLive = false, url = "", facebookUrl = "", latestSermon }: LiveStreamProps) {
  const embedUrl = getEmbedUrl(url || facebookUrl)

  return (
    <section id="livestream" className="section-padding bg-surface border-y border-muted/5 scroll-mt-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-2/3">
            {isLive ? (
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-black group">
                <iframe
                  src={embedUrl || (url ? url.replace("watch?v=", "embed/") : "https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID")}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title="Live Stream"
                />
                <div className="absolute top-8 left-8 flex items-center gap-3">
                  <span className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl animate-pulse shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    LIVE NOW
                  </span>
                </div>
              </div>
            ) : latestSermon ? (
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-black group transition-all duration-500 hover:scale-[1.01]">
                <img 
                  src={latestSermon.thumbnail} 
                  alt={latestSermon.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-white/70">Latest Sermon</span>
                  <h3 className="text-3xl md:text-4xl text-white mb-2">{latestSermon.title}</h3>
                  <p className="text-white/60 font-medium">with {latestSermon.speaker}</p>
                </div>
                <iframe
                  src={getEmbedUrl(latestSermon.youtube_link)}
                  className="absolute inset-0 w-full h-full opacity-0 group-active:opacity-100 focus:opacity-100 transition-opacity"
                  allowFullScreen
                  title={latestSermon.title}
                />
              </div>
            ) : (
              <div className="rounded-[2.5rem] bg-white border border-muted/10 aspect-video flex flex-col items-center justify-center p-12 text-center shadow-soft">
                <Youtube className="w-16 h-16 text-muted/20 mb-8" />
                <h3 className="mb-4">We are currently offline</h3>
                <p className="text-muted max-w-sm mb-8 leading-relaxed">
                  Join us for our next live stream on Sunday at 10:00 AM.
                </p>
                <Link href="/sermons">
                  <Button variant="outline">View Sermon Archive</Button>
                </Link>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase">
              Worship With Us
            </span>
            <h2 className="mb-8">Join Our Global Congregation</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Experience the power of community from anywhere in the world. Our digital sanctuary is open for all who seek spiritual fellowship.
            </p>
            
            <div className="space-y-4">
              <Link href={facebookUrl || "https://facebook.com"} target="_blank">
                <Button variant="primary" className="w-full h-14 gap-3 bg-[#1877F2] hover:bg-[#1877F2]/90 border-none">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Watch on Facebook Live
                </Button>
              </Link>
              <Link href={url || "https://youtube.com"} target="_blank">
                <Button variant="outline" className="w-full h-14 gap-3">
                  <Youtube className="w-5 h-5 text-red-600" />
                  Subscribe on YouTube
                </Button>
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted italic flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Over 500+ people joined us last week
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
