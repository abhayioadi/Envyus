import { useState } from "react";
import { mockResults } from "./mockData";
import { Trophy, Search, Medal, Award } from "lucide-react";

export function LiveResults() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = mockResults.filter((res) => {
    const term = searchTerm.toLowerCase();
    return res.name.toLowerCase().includes(term) || res.eventName.toLowerCase().includes(term);
  });

  return (
    <div className="bg-white dark:bg-[#121214] rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-zinc-200 dark:border-white/10 overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 right-0 p-32 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="p-6 md:p-10 border-b border-zinc-200 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-zinc-50 dark:bg-white/[0.02] relative z-10 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3.5 rounded-2xl text-white shadow-[0_10px_20px_rgba(245,158,11,0.2)] dark:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Live Results</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 font-medium">Check out the winners from recent events</p>
          </div>
        </div>
 
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name or event..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-zinc-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/50 dark:bg-white/5 text-zinc-900 dark:text-white placeholder:text-zinc-500 transition-all shadow-inner"
          />
        </div>
      </div>

      <div className="h-[450px] overflow-y-auto custom-scrollbar relative z-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-zinc-50 dark:bg-[#0a0a0b] sticky top-0 z-20 shadow-sm dark:shadow-md transition-colors duration-300">
            <tr>
              <th className="px-8 py-5 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-white/5">Participant</th>
              <th className="px-8 py-5 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-white/5">Semester</th>
              <th className="px-8 py-5 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-white/5">Branch</th>
              <th className="px-8 py-5 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-white/5">Event</th>
              <th className="px-8 py-5 font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-xs border-b border-zinc-200 dark:border-white/5">Position</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-white/5 bg-transparent transition-colors duration-300">
            {filteredResults.length > 0 ? (
              filteredResults.map((result, idx) => (
                <tr key={result.id} className="hover:bg-zinc-50 dark:hover:bg-white/[0.03] transition-colors group">
                  <td className="px-8 py-5 font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                      {result.name.charAt(0)}
                    </div>
                    {result.name}
                  </td>
                  <td className="px-8 py-5 text-zinc-500 dark:text-zinc-400 font-medium">{result.sem}</td>
                  <td className="px-8 py-5 text-zinc-500 dark:text-zinc-400 font-medium">{result.branch}</td>
                  <td className="px-8 py-5 text-zinc-700 dark:text-zinc-300 font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">{result.eventName}</td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                        result.position === "1st"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                          : result.position === "2nd"
                          ? "bg-zinc-300/10 text-zinc-300 border border-zinc-300/20 shadow-[0_0_10px_rgba(212,212,216,0.1)]"
                          : "bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]"
                      }`}
                    >
                      {result.position === "1st" && <Trophy className="w-3.5 h-3.5" />}
                      {result.position === "2nd" && <Medal className="w-3.5 h-3.5" />}
                      {result.position === "3rd" && <Award className="w-3.5 h-3.5" />}
                      {result.position}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-8 py-16 text-center text-zinc-500">
                  <Trophy className="w-16 h-16 text-white/5 mx-auto mb-4" />
                  <span className="font-medium text-lg">No results found matching "{searchTerm}"</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}