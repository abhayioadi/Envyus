import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Filter, X, Zap } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import { HeroCarousel } from "./HeroCarousel";
import { EventSection } from "./EventSection";
import { LiveResults } from "./LiveResults";
import { mockEvents, isEventLive } from "./mockData";

export function HomePage() {
  const [searchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: [] as string[],
    status: "all", // all, live, scheduled
    cost: "all", // all, free, paid
    teamSize: [] as number[],
  });

  // Re-evaluate live status continuously to automatically shift events
  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 10000); // refresh every 10s
    return () => clearInterval(timer);
  }, []);

  // Derived filtered events
  const filteredEvents = mockEvents.filter((ev) => {
    const live = isEventLive(ev);
    // Search Q Filter
    const query = searchParams.get("q")?.toLowerCase() || "";
    if (query && !ev.title.toLowerCase().includes(query)) return false;

    // Type Filter
    if (filters.type.length > 0 && !filters.type.includes(ev.type)) return false;

    // Status Filter
    if (filters.status === "live" && !live) return false;
    if (filters.status === "scheduled" && live) return false;

    // Cost Filter
    if (filters.cost !== "all" && ev.cost !== filters.cost) return false;

    // Team Size Filter
    if (filters.teamSize.length > 0 && !filters.teamSize.includes(ev.teamSize)) return false;

    return true;
  });

  const liveEvents = filteredEvents.filter((ev) => isEventLive(ev));
  const upcomingEvents = filteredEvents.filter((ev) => !isEventLive(ev) && new Date(ev.date).getTime() > Date.now());

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full pt-4 md:pt-8 px-4 sm:px-6 lg:px-8 gap-8 pb-16 bg-[#0a0a0b] text-zinc-100">
      <div className="md:hidden flex items-center justify-between mb-4">
        <h1 className="text-2xl font-black text-white">Events</h1>
        <button 
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/10 transition-colors"
        >
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-xl p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 rounded-full hover:bg-white/10 text-zinc-400">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="block md:hidden">
            <FilterSidebar filters={filters} setFilters={setFilters} isMobile={true} />
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>
      
      <div className="flex-1 flex flex-col gap-16 min-w-0">
        {/* Carousel */}
        <section>
          <HeroCarousel events={mockEvents} />
        </section>

        {/* Live Events Section */}
        {liveEvents.length > 0 && (
          <section className="relative">
            <div className="absolute -left-10 top-0 bottom-0 w-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              </div>
              Live Now
            </h2>
            <EventSection events={liveEvents} isLive={true} />
          </section>
        )}

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-indigo-400" />
              Upcoming Events
            </h2>
            <EventSection events={upcomingEvents} isLive={false} />
          </section>
        )}

        {upcomingEvents.length === 0 && liveEvents.length === 0 && (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
            <h3 className="text-xl font-bold text-zinc-300 mb-2">No events found</h3>
            <p className="text-zinc-500">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => setFilters({ type: [], status: "all", cost: "all", teamSize: [] })}
              className="mt-6 px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full font-medium hover:bg-indigo-500 hover:text-white transition-all border border-indigo-500/30"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Live Results Section */}
        <section className="border-t border-white/10 pt-16 mt-8">
          <LiveResults />
        </section>
      </div>
    </div>
  );
}