"use client";

import { useState } from "react";
import { LATEST_SERMON } from "@/config/sermon";

function extractYouTubeId(url: string) {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtube\.com\/live\/|youtu\.be\/)([^&?/]+)/
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

export default function LatestSermonInline() {
  const [play, setPlay] = useState(false);

  const videoId = extractYouTubeId(LATEST_SERMON.youtubeUrl);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
      {!play ? (
        <div
          className="relative cursor-pointer group h-full"
          onClick={() => setPlay(true)}
        >
          <img
            src={getThumbnail(videoId)}
            alt="Latest Sermon"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = getFallbackThumbnail(videoId);
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-8 border border-white/30 group-hover:scale-110 transition shadow-2xl">
              <span className="text-white text-3xl">▶</span>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={getEmbedUrl(videoId)}
          className="w-full h-full border-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
