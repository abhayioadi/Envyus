import { useState, useEffect } from "react";
import { EventItem, isEventLive } from "./mockData";
import { Link } from "react-router";
import { ChevronRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { format } from "date-fns";

interface HeroCarouselProps {
  events: EventItem[];
}

export function HeroCarousel({ events }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredEvents = events.slice(0, 5); // Take top 5 for carousel

  useEffect(() => {
    if (featuredEvents.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  if (featuredEvents.length === 0) return null;

  const activeEvent = featuredEvents[activeIndex];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
          Featured Highlights
        </h2>
        <div className="flex gap-2">
          {featuredEvents.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-zinc-200 dark:bg-white/20'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Big Box */}
      <Link 
        to={`/event/${activeEvent.id}`} 
        className="relative w-full h-[400px] md:h-[520px] rounded-[2rem] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-zinc-50 dark:bg-[#121214] block border border-zinc-200 dark:border-white/10 transition-colors duration-300"
      >
        <img 
          src={activeEvent.image} 
          alt={activeEvent.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 dark:opacity-60 dark:mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-[#0a0a0b] dark:via-[#0a0a0b]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/10 dark:from-[#0a0a0b]/80 dark:via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 z-10 text-zinc-900 dark:text-white w-full md:w-3/4">
          <div className="flex gap-3 items-center mb-6">
            <span className="px-4 py-1.5 bg-zinc-900/10 dark:bg-white/10 border border-zinc-900/20 dark:border-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] dark:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              {activeEvent.type}
            </span>
            {isEventLive(activeEvent) && (
              <span className="px-4 py-1.5 bg-red-500/20 border border-red-500/50 text-red-400 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.2)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" /> Live
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            {activeEvent.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-zinc-600 dark:text-zinc-300 font-medium mb-8">
            <span className="flex items-center gap-2.5 bg-zinc-900/5 dark:bg-white/5 px-4 py-2 rounded-xl border border-zinc-900/10 dark:border-white/10 backdrop-blur-sm">
              <CalendarDays className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> {format(new Date(activeEvent.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-2.5 bg-zinc-900/5 dark:bg-white/5 px-4 py-2 rounded-xl border border-zinc-900/10 dark:border-white/10 backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-pink-500 dark:text-pink-400" /> {activeEvent.venue}
            </span>
          </div>
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-[#0a0a0b] hover:bg-black dark:hover:bg-zinc-200 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Explore Event <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Link>

      {/* Thumbnails row */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-2 custom-scrollbar">
        {featuredEvents.map((ev, index) => (
          <button
            key={ev.id}
            onClick={() => setActiveIndex(index)}
            className={`relative w-48 h-28 shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              index === activeIndex 
                ? "ring-2 ring-indigo-500 scale-100 shadow-[0_0_20px_rgba(99,102,241,0.3)] opacity-100" 
                : "ring-1 ring-white/10 opacity-50 hover:opacity-80 scale-95 hover:scale-100"
            }`}
          >
            <img src={ev.image} alt={ev.title} className="w-full h-full object-cover dark:mix-blend-screen opacity-90 dark:opacity-100" />
            <div className={`absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0b] via-white/50 dark:via-[#0a0a0b]/40 to-transparent transition-opacity ${index === activeIndex ? "opacity-80" : "opacity-90"}`} />
            <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
              <p className="text-xs text-zinc-900 dark:text-white font-bold line-clamp-2 leading-tight drop-shadow-sm dark:drop-shadow-md">
                {ev.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}