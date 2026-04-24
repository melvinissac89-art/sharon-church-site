"use client"

import Image from "next/image"

export default function NewHere() {
  return (
    <section className="section-padding pt-10 bg-surface overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-black tracking-[0.2em] text-[#b4136d] uppercase bg-[#b4136d]/5 rounded-full">
            First Time Visiting?
          </span>
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-rose-500 bg-clip-text text-transparent pb-1">
              Welcome Home. <br />
              We&apos;ve Been Waiting for <span className="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">YOU.</span>
            </h2>
          </div>
        </div>

        <div className="block">
          {/* Image Container with Float for Desktop */}
          <div className="w-full lg:w-[45%] lg:float-left lg:mr-12 lg:mb-10 relative mb-8 lg:mb-0">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <Image 
                src="/sharon-church-site/images/gallery/moment2.jpg" 
                alt="Worship Culture" 
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-[60px] z-0" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] z-0" />
          </div>

          <div className="space-y-6">
            <p className="text-muted/70 text-lg md:text-xl leading-relaxed font-manrope font-medium">
              You are not here by accident. The Lord has brought you, and you are welcome in His presence.
            </p>
            
            <p className="text-muted/70 text-lg md:text-xl leading-relaxed font-manrope font-medium">
              Whether you are seeking, returning, or simply curious, there is a place for you here. We are a family gathered in Christ, growing in truth, love, and grace.
            </p>

            <p className="text-muted/70 text-lg md:text-xl leading-relaxed font-manrope font-medium">
              Here, the Word of God is taught faithfully, prayer is lifted continually, and lives are being transformed by the power of the Holy Spirit. No matter where you come from or what you carry, you are invited to draw near and experience the peace that comes from knowing Him.
            </p>

            <p className="text-muted/70 text-lg md:text-xl leading-relaxed font-manrope font-medium">
              We believe in worship that honors God, fellowship that strengthens one another, and a mission that reaches beyond ourselves to share the gospel with the world.
            </p>

            <div className="my-8 pl-8 border-l-4 border-primary/20 bg-primary/5 py-6 pr-6 rounded-r-3xl clear-right lg:clear-none">
              <p className="text-lg md:text-xl text-secondary font-serif italic font-bold leading-relaxed mb-2">
                &ldquo;Therefore welcome one another, just as Christ also welcomed us, to the glory of God.&rdquo;
              </p>
              <p className="text-[11px] font-black tracking-[0.2em] text-[#b4136d] uppercase">
                Romans 15:7 (LSB)
              </p>
            </div>

            <p className="text-muted/70 text-lg md:text-xl leading-relaxed font-manrope font-medium">
              Come with your questions, come with your burdens, come with expectation. The Lord meets those who seek Him.
            </p>

            <p className="text-xl md:text-2xl font-black text-text/80 leading-tight uppercase tracking-tight pt-6">
              COME AS YOU ARE, AND ENCOUNTER THE LIVING GOD AMONG HIS PEOPLE.
            </p>
          </div>
          {/* Clearfix for the float */}
          <div className="clear-both" />
        </div>

      </div>
    </section>
  )
}

