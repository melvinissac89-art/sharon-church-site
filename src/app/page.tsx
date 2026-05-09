import { getCollection, getItem } from "@/lib/markdown"
import Hero from "@/components/sections/Hero"
import LiveStream from "@/components/sections/LiveStream"
import PhotoReel from "@/components/sections/PhotoReel"
import NewHere from "@/components/sections/NewHere"
import About from "@/components/sections/About"
import Pastor from "@/components/sections/Pastor"
import Sermons from "@/components/sections/Sermons"
import ServiceTimes from "@/components/sections/ServiceTimes"
import Events from "@/components/sections/Events"
import Ministries from "@/components/sections/Ministries"
import Contact from "@/components/sections/Contact"
import BibleVerse from "@/components/sections/BibleVerse"
import ConventionSection from "@/components/sections/ConventionSection"

export const revalidate = 60

export default function HomePage() {
  const homeContent = getItem("pages", "home")
  const aboutContent = getItem("pages", "about")
  const pastorContent = getItem("settings", "pastor")
  const serviceContent = getItem("settings", "services")
  const liveContent = getItem("settings", "live")
  
  const sermons = getCollection("sermons")
  const events = getCollection("events")
  const ministries = getCollection("ministries")

  const latestSermon = sermons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  return (
    <div className="flex-grow">
      <Hero 
        title={homeContent?.heroTitle} 
        subtitle={homeContent?.heroSubtitle} 
      />
      
      <NewHere />

      <ConventionSection />

      <ServiceTimes 
        sunday={serviceContent?.sunday} 
        weekday={serviceContent?.weekday} 
      />

      <div id="livestream">
        <LiveStream />
      </div>

      <Sermons sermons={sermons} />
      
      <PhotoReel />
      
      <About 
        mission={aboutContent?.mission} 
        vision={aboutContent?.vision} 
      />
      
      <Pastor 
        name={pastorContent?.name} 
        bio={pastorContent?.bio} 
        image={pastorContent?.image} 
      />
      
      <Ministries ministries={ministries} />
      
      <BibleVerse />
      <Contact />
    </div>
  )
}

