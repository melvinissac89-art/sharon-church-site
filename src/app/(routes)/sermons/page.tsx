import { getCollection } from "@/lib/markdown"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import AnnouncementBar from "@/components/layout/AnnouncementBar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Calendar, User, Play } from "lucide-react"

export const revalidate = 60

export default function SermonsPage() {
  const sermons = getCollection("sermons")

  return (
    <main className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-primary uppercase">
              The Word of God
            </span>
            <h1 className="mb-6">Sermon Archives</h1>
            <p className="text-muted text-lg">Explore our library of past messages and discover the truth of the Gospel from our teaching team.</p>
          </div>
          
          {!sermons.length ? (
            <div className="bg-surface p-16 rounded-[2rem] text-center border border-muted/5">
              <Play className="w-16 h-16 text-muted/20 mx-auto mb-8" />
              <h3 className="mb-4">No sermons found</h3>
              <p className="text-muted">We are currently updating our archive. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sermons.map((sermon: any) => (
                <Card key={sermon.slug} className="group overflow-hidden border-none hover:shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={sermon.thumbnail} 
                      alt={sermon.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {sermon.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{sermon.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(sermon.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
