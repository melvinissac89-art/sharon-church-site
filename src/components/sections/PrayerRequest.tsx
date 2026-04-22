"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Input, Textarea } from "@/components/ui/Input"
import { Heart, Send, CheckCircle, ArrowRight } from "lucide-react"

export default function PrayerRequest() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/prayer", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })

      if (response.ok) {
        setStatus("success")
        setMessage("Your heart has been heard. Our prayer team will lift up your request.")
      } else {
        throw new Error()
      }
    } catch (error) {
      setStatus("error")
      setMessage("Safe handling of your request failed. Please try again soon.")
    }
  }

  return (
    <section className="section-padding scroll-mt-24 bg-white overflow-hidden" id="prayer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-full">
              Prayer Support
            </span>
            <h2 className="mb-8 font-serif leading-[1.2]">How Can We Pray For You?</h2>
            <p className="text-muted text-xl mb-12 leading-relaxed">
              We believe in the power of prayer. Our community of faith is here to stand with you in times of need, gratitude, and reflection.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface p-10 rounded-[2.5rem] border border-muted/5 shadow-soft relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Heart className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">Confidential & Caring</span>
                </div>
                <p className="text-muted italic leading-relaxed text-lg">
                  &quot;Therefore confess your sins to each other and pray for each other so that you may be healed.&quot; — James 5:16
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 max-w-2xl"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl border border-green-100 text-center"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h2 className="mb-6 font-serif">Request Received</h2>
                    <p className="text-muted text-xl mb-12 leading-relaxed">{message}</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="h-16 px-10 text-lg rounded-2xl"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-muted/5 grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted pl-1">Full Name</label>
                      <Input name="name" placeholder="John Doe" className="h-16 rounded-2xl bg-surface border-none focus:ring-2 focus:ring-primary/20" required disabled={status === "loading"} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted pl-1">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" className="h-16 rounded-2xl bg-surface border-none focus:ring-2 focus:ring-primary/20" required disabled={status === "loading"} />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted pl-1">Your Prayer Request</label>
                      <Textarea name="message" placeholder="How can our community support you today?" className="min-h-[180px] rounded-2xl bg-surface border-none focus:ring-2 focus:ring-primary/20 p-6" required disabled={status === "loading"} />
                    </div>
                    
                    <div className="md:col-span-2 pt-6">
                      {status === "error" && <p className="text-red-500 text-sm mb-6 bg-red-50 p-4 rounded-xl border border-red-100">{message}</p>}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-18 text-xl rounded-2xl gap-3 shadow-lg hover:shadow-primary/20 transition-all group" 
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? "Submitting..." : "Send Prayer Request"}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
