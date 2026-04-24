"use client";

import { useState } from "react";
import { LIVE } from "@/config/live";

function extractYouTubeId(url: string) {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/live\/)([^&?/]+)/
  );

  return match ? match[1] : null;
}

function getThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

function getFallbackThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function getEmbedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
}

export default function LiveSection() {
  const [play, setPlay] = useState(false);

  const videoId = extractYouTubeId(LIVE.youtubeUrl);

  const isValid = LIVE.isLive && videoId;

  if (!isValid) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full p-12">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/50 backdrop-blur-xl flex items-center justify-center mb-8 shadow-xl border border-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 md:w-10 md:h-10 text-muted/30"
          >
            <path d="m16 16 3 3" />
            <path d="M10 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-.59 1.41" />
            <path d="M7 21h10" />
            <path d="M9 17H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
            <path d="m2 2 20 20" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-text mb-4">
          Currently Offline
        </h3>
        <div className="flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-black tracking-widest text-primary uppercase">
            Next live: {LIVE.nextLive}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full aspect-video rounded-2xl overflow-hidden">
      {!play ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          <img
            src={getThumbnail(videoId)}
            alt="Live thumbnail"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = getFallbackThumbnail(videoId);
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 shadow-2xl group-hover:scale-110 transition duration-500">
              <span className="text-white text-2xl">▶</span>
            </div>
          </div>
          
          <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-1.5 bg-red-600 rounded-lg text-white font-black text-xs tracking-widest uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white" />
            LIVE NOW
          </div>
        </div>
      ) : (
        <iframe
          src={getEmbedUrl(videoId)}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Live Stream"
        />
      )}
    </div>
  );
}
