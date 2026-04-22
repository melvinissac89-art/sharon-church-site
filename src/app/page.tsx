import { getCollection, getItem } from "@/lib/markdown"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import LiveStream from "@/components/sections/LiveStream"
import QuickActions from "@/components/sections/QuickActions"
import NewHere from "@/components/sections/NewHere"
import About from "@/components/sections/About"
import Pastor from "@/components/sections/Pastor"
import Sermons from "@/components/sections/Sermons"
import ServiceTimes from "@/components/sections/ServiceTimes"
import Events from "@/components/sections/Events"
import Ministries from "@/components/sections/Ministries"
import PrayerRequest from "@/components/sections/PrayerRequest"
import Contact from "@/components/sections/Contact"
import BibleVerse from "@/components/sections/BibleVerse"

export const revalidate = 60

export default function HomePage() {
  const homeContent = getItem("pages", "home")
  const aboutContent = getItem("pages", "about")
  const pastorContent = getItem("settings", "pastor")
  const serviceContent = getItem("settings", "services")
  const announcementContent = getItem("settings", "announcements")
  const liveContent = getItem("settings", "live")
  
  const sermons = getCollection("sermons")
  const events = getCollection("events")
  const ministries = getCollection("ministries")

  const latestSermon = sermons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  return (
    <main className="min-h-screen flex flex-col">
      <AnnouncementBar text={announcementContent?.text} />
      <Navbar />
      
      <div className="flex-grow">
        <Hero 
          title={homeContent?.heroTitle} 
          subtitle={homeContent?.heroSubtitle} 
        />
        
        <div id="livestream">
          <LiveStream 
            isLive={liveContent?.is_live} 
            url={liveContent?.youtube_link} 
            facebookUrl={liveContent?.facebook_link}
            latestSermon={latestSermon}
          />
        </div>
        
        <QuickActions />
        <NewHere />
        
        <About 
          mission={aboutContent?.mission} 
          vision={aboutContent?.vision} 
        />
        
        <Pastor 
          name={pastorContent?.name} 
          bio={pastorContent?.bio} 
          image={pastorContent?.image} 
        />
        
        <Sermons sermons={sermons} />
        
        <ServiceTimes 
          sunday={serviceContent?.sunday} 
          weekday={serviceContent?.weekday} 
        />
        
        <Events events={events} />
        
        <Ministries ministries={ministries} />
        
        <PrayerRequest />
        <Contact />
        <BibleVerse />
      </div>

      <Footer />
    </main>
  )
}
