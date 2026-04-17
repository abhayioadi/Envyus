import React from "react";
import { EventItem } from "./mockData";

interface FilterSidebarProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  isMobile?: boolean;
}

export function FilterSidebar({ filters, setFilters, isMobile }: FilterSidebarProps) {
  const eventTypes = ["tech", "cultural", "sports", "workshop", "gaming"];
  const teamSizes = [1, 2, 3, 4];

  const handleTypeToggle = (type: string) => {
    setFilters((prev: any) => {
      const isSelected = prev.type.includes(type);
      return {
        ...prev,
        type: isSelected ? prev.type.filter((t: string) => t !== type) : [...prev.type, type],
      };
    });
  };

  const handleTeamSizeToggle = (size: number) => {
    setFilters((prev: any) => {
      const isSelected = prev.teamSize.includes(size);
      return {
        ...prev,
        teamSize: isSelected ? prev.teamSize.filter((s: number) => s !== size) : [...prev.teamSize, size],
      };
    });
  };

  return (
    <aside className={isMobile ? "w-full" : "w-full md:w-64 shrink-0 md:border-r border-zinc-200 dark:border-white/10 md:pr-8 md:sticky md:top-24 self-start h-auto md:h-[calc(100vh-6rem)] overflow-y-auto hidden md:block custom-scrollbar pb-10"}>
      <div className="space-y-8 bg-white dark:bg-[#0a0a0b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div>
          <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-6 uppercase tracking-widest text-sm opacity-80 border-b border-zinc-200 dark:border-white/10 pb-3">Filters</h3>
        </div>

        {/* Status Filter */}
        <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
          <h4 className="font-bold text-zinc-600 dark:text-zinc-300 text-xs mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Status
          </h4>
          <div className="space-y-3">
            {["all", "live", "scheduled"].map((status) => (
              <label key={status} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={filters.status === status}
                  onChange={() => setFilters({ ...filters, status })}
                  className="w-4 h-4 text-indigo-500 bg-white/5 border-zinc-300 dark:border-white/10 focus:ring-indigo-500/50 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
                />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 capitalize transition-colors">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
          <h4 className="font-bold text-zinc-600 dark:text-zinc-300 text-xs mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> Event Type
          </h4>
          <div className="space-y-3">
            {eventTypes.map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="w-4 h-4 rounded bg-white/5 border-zinc-300 dark:border-white/10 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
                />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 capitalize transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Cost Filter */}
        <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
          <h4 className="font-bold text-zinc-600 dark:text-zinc-300 text-xs mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Cost
          </h4>
          <div className="space-y-3">
            {["all", "free", "paid"].map((cost) => (
              <label key={cost} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="cost"
                  value={cost}
                  checked={filters.cost === cost}
                  onChange={() => setFilters({ ...filters, cost })}
                  className="w-4 h-4 text-indigo-500 bg-white/5 border-zinc-300 dark:border-white/10 focus:ring-indigo-500/50 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
                />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 capitalize transition-colors">{cost}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Team Size */}
        <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
          <h4 className="font-bold text-zinc-600 dark:text-zinc-300 text-xs mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Team Size
          </h4>
          <div className="space-y-3">
            {teamSizes.map((size) => (
              <label key={size} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.teamSize.includes(size)}
                  onChange={() => handleTeamSizeToggle(size)}
                  className="w-4 h-4 rounded bg-white/5 border-zinc-300 dark:border-white/10 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0b]"
                />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  {size === 1 ? "Solo (1)" : `${size} Members`}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}