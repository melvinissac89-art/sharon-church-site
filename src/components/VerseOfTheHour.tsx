"use client"

import { useState, useEffect } from "react"
import { verses } from "@/data/verses"

/**
 * Returns a verse based on the current hour of the day.
 */
function getVerseOfTheHour() {
  const hour = new Date().getHours()
  const index = hour % verses.length
  return verses[index]
}

export default function VerseOfTheHour() {
  const [verse, setVerse] = useState<{ text: string, ref: string } | null>(null)

  useEffect(() => {
    // Set initial verse on mount to avoid hydration mismatch
    setVerse(getVerseOfTheHour())

    // Optional: Refresh if the user stays on the page through an hour change
    const interval = setInterval(() => {
      setVerse(getVerseOfTheHour())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!verse) return null

  return (
    <div className="transition-verse">
      <p className="text-[28px] md:text-[42px] font-black leading-[1.25] bg-gradient-to-r from-[#4648d4] via-[#b4136d] to-orange-400 bg-clip-text text-transparent max-w-4xl mx-auto tracking-tight">
        &ldquo;{verse.text}&rdquo;
      </p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <div className="h-px w-12 bg-[#b4136d]/20" />
        <p className="text-sm md:text-lg tracking-[0.5em] text-[#b4136d] uppercase font-black">
          {verse.ref}
        </p>
        <div className="h-px w-12 bg-[#b4136d]/20" />
      </div>
    </div>
  )
}
