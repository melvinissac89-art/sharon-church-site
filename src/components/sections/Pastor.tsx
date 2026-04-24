"use client"

import Image from "next/image"
import { Facebook } from "@/components/ui/SocialIcons"

export default function Pastor({ 
  name = "Pastor Johnson Thomas", 
  bio = "Pastor Johnson has been leading Sharon Fellowship Church with a passion for teaching the Word and building strong, faithful communities.",
  image = "/sharon-church-site/images/gallery/moment11.png"
}: { name?: string, bio?: string, image?: string }) {
  return (
    <section id="pastor" className="section-padding bg-surface overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Meet Our Senior Pastor
          </h2>
        </div>

        <div 
          className="bg-white rounded-[32px] overflow-hidden shadow-soft flex flex-col md:flex-row items-stretch border border-muted/5 hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden group">
            <Image 
              src={image} 
              alt={name} 
              fill
              className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-left">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full self-start">
              Leadership
            </span>
            <h2 className="mb-4 tracking-tight text-3xl md:text-4xl">{name}</h2>
            <p className="text-muted text-lg mb-4 leading-relaxed italic last:mb-0">
              &quot;My calling is to shepherd this flock with integrity and to preach the Word in season and out of season.&quot;
            </p>
            <p className="text-muted mb-6 leading-relaxed text-lg">
              {bio}
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 justify-start">
              <span className="text-sm font-bold uppercase tracking-wider text-text">Follow:</span>
              <div className="flex space-x-6 text-muted">
                <a 
                  href="https://www.facebook.com/share/1B3YFanJaj/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary hover:-translate-y-1 transform transition-transform duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

