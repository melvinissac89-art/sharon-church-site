"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar({ liveUrl = "/#livestream" }: { liveUrl?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Watch", href: "/sermons" },
    { name: "Ministries", href: "/ministries" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isExternal = liveUrl.startsWith("http")

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-primary flex items-center gap-3 group transition-transform hover:scale-[1.02]">
          <motion.span 
            whileHover={{ rotate: [-10, 10, 0] }}
            className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-serif italic shadow-lg shadow-primary/20"
          >
            S
          </motion.span>
          <span className="tracking-tight text-text">Sharon Fellowship</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-muted hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 pl-8 border-l border-muted/10">
            <Link href={liveUrl} target={isExternal ? "_blank" : undefined}>
              <Button variant="primary" size="sm" className="h-10 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 animate-pulse-slow uppercase tracking-widest text-xs">
                Watch Live
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-text p-2 hover:bg-muted/5 rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-muted/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col space-y-4 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-primary">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="w-full pt-8 border-t border-muted/10 flex flex-col gap-4">
                <Link href={liveUrl} onClick={() => setIsOpen(false)} className="w-full" target={isExternal ? "_blank" : undefined}>
                  <Button variant="primary" className="w-full h-14 rounded-2xl font-bold shadow-lg shadow-primary/20 uppercase tracking-widest">Watch Live</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
