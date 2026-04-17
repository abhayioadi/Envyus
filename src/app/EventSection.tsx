import { EventItem } from "./mockData";
import { Link } from "react-router";
import { format } from "date-fns";
import { MapPin, Clock, Users, Zap } from "lucide-react";

interface EventSectionProps {
  events: EventItem[];
  isLive: boolean;
}

export function EventSection({ events, isLive }: EventSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((ev) => (
        <Link 
          to={`/event/${ev.id}`} 
          key={ev.id}
          className="group block bg-zinc-50 dark:bg-[#121214] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500"
        >
          {/* Card Image */}
          <div className="relative h-56 w-full overflow-hidden bg-zinc-200 dark:bg-[#0a0a0b]">
            <img 
              src={ev.image} 
              alt={ev.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 dark:opacity-70 dark:mix-blend-screen" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/20 dark:from-[#121214] dark:via-[#121214]/20 to-transparent" />
            
            {isLive ? (
              <div className="absolute top-4 right-4 bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.2)] backdrop-blur-md z-10">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                Live Now
              </div>
            ) : (
              <div className="absolute top-4 left-4 bg-white/10 border border-white/20 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md z-10">
                {ev.type}
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="p-6 flex flex-col relative z-20 -mt-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors drop-shadow-sm">
              {ev.title}
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 gap-3 bg-zinc-100 dark:bg-white/5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/5">
                <Clock className="w-4 h-4 shrink-0 text-indigo-500 dark:text-indigo-400" />
                <span className="truncate">{format(new Date(ev.date), "MMM d, yyyy • h:mm a")}</span>
              </div>
              
              <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 gap-3 bg-zinc-100 dark:bg-white/5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/5">
                <MapPin className="w-4 h-4 shrink-0 text-pink-500 dark:text-pink-400" />
                <span className="truncate">{ev.venue}</span>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
              {/* Conditional bottom info */}
              {isLive ? (
                <div className="w-full text-center">
                  <span className="inline-flex items-center justify-center gap-2 w-full py-3 bg-indigo-500/10 text-indigo-400 font-bold text-sm rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                    <Zap className="w-4 h-4" /> Watch Live Feed
                  </span>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1.5">
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block w-max">
                      {ev.cost}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400" />
                      {ev.teamSize === 1 ? "Solo" : `Teams of ${ev.teamSize}`}
                    </span>
                  </div>
                  <button className="bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white text-sm font-bold px-6 py-2.5 rounded-xl border border-zinc-200 dark:border-white/20 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-[#0a0a0b] transition-all hover:scale-105 shadow-md">
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}