export default function AnnouncementBar({ text = "Join us this Sunday at 10 AM for service!" }: { text?: string }) {
  return (
    <div className="bg-primary text-white py-3 px-6 text-center text-sm font-medium tracking-wide">
      <div className="container mx-auto">
        {text}
      </div>
    </div>
  )
}
