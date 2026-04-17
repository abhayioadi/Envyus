import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  Search, 
  ChevronDown, 
  User, 
  CalendarDays, 
  ArrowRight,
  MonitorPlay,
  Palette,
  Wrench,
  Gamepad2,
  CalendarClock,
  Menu,
  X,
  Sparkles,
  Home,
  Calendar,
  ClipboardList,
  Info,
  Moon,
  Sun
} from "lucide-react";
import { mockEvents, isEventLive } from "./mockData";

export function Navbar() {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    // Check for View Transition API support
    if (typeof document !== 'undefined' && (document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        setIsDark((prev) => {
          const next = !prev;
          if (next) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
          return next;
        });
      });
    } else {
      // Fallback for older browsers
      setIsDark((prev) => {
        const next = !prev;
        if (next) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        return next;
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/events?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-6 shrink-0">
          <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-white font-black text-xl hover:scale-105 transition-transform group">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-shadow">
              <CalendarDays className="h-5 w-5 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">EventHub</span>
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:text-indigo-400 transition-colors" />
            <input
              type="text"
              placeholder="Search events, organizers, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-full text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-600 focus:bg-white dark:focus:bg-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
            />
          </form>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          <Link to="/" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
            <Home className="h-4 w-4" />
            Home
          </Link>
          
          {/* Dropdown Events */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsEventsOpen(true)}
            onMouseLeave={() => setIsEventsOpen(false)}
          >
            <Link to="/events" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer">
              <Calendar className="h-4 w-4" />
              Events <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isEventsOpen ? 'rotate-180 text-indigo-400' : ''}`} />
            </Link>
            
            {isEventsOpen && (
              <div className="absolute top-full pt-1 left-1/2 -translate-x-1/2 w-[520px] z-50">
                <div className="bg-[#121214]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex overflow-hidden ring-1 ring-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Left Column: Upcoming Events */}
                <div className="w-[220px] shrink-0 bg-white/5 p-5 border-r border-white/10 flex flex-col">
                  <div className="flex items-center gap-2 mb-4 px-1">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Upcoming</span>
                  </div>
                  <div className="flex-1 overflow-y-auto max-h-[240px] custom-scrollbar pr-2 flex flex-col gap-2">
                    {mockEvents.filter(ev => !isEventLive(ev) && new Date(ev.date).getTime() > Date.now()).map(ev => (
                      <Link 
                        key={ev.id} 
                        to={`/event/${ev.id}`} 
                        className="group flex flex-col gap-1 p-2.5 rounded-xl hover:bg-white/10 hover:border-white/20 border border-transparent transition-all text-left"
                      >
                        <span className="text-sm font-semibold text-zinc-200 group-hover:text-indigo-300 line-clamp-1">{ev.title}</span>
                        <span className="text-[11px] text-zinc-500 font-medium">
                          {new Date(ev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </Link>
                    ))}
                    {mockEvents.filter(ev => !isEventLive(ev) && new Date(ev.date).getTime() > Date.now()).length === 0 && (
                      <div className="text-xs text-zinc-600 text-center py-6 font-medium">No upcoming events</div>
                    )}
                  </div>
                </div>

                {/* Right Column: Links & Register CTA */}
                <div className="flex-1 p-5 flex flex-col bg-gradient-to-b from-transparent to-white/[0.02]">
                  {/* Register CTA */}
                  <div className="mb-6">
                    <Link 
                      to="/registration" 
                      className="group flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl p-4 transition-all shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-bold">Register for Events</span>
                        <span className="text-xs text-indigo-100/80 mt-0.5 font-medium">Secure your spot now</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Category Links */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/events?type=tech" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 text-zinc-300 hover:text-white transition-all group">
                      <div className="bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white p-2 rounded-lg transition-colors border border-indigo-500/30">
                        <MonitorPlay className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Tech Events</span>
                    </Link>
                    <Link to="/events?type=cultural" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 text-zinc-300 hover:text-white transition-all group">
                      <div className="bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white p-2 rounded-lg transition-colors border border-pink-500/30">
                        <Palette className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Cultural Fests</span>
                    </Link>
                    <Link to="/events?type=workshop" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 text-zinc-300 hover:text-white transition-all group">
                      <div className="bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white p-2 rounded-lg transition-colors border border-amber-500/30">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Workshops</span>
                    </Link>
                    <Link to="/events?type=gaming" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 text-zinc-300 hover:text-white transition-all group">
                      <div className="bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white p-2 rounded-lg transition-colors border border-purple-500/30">
                        <Gamepad2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">E-Sports</span>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/registration" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <ClipboardList className="h-4 w-4" />
            Registration
          </Link>

          <Link to="/about" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Info className="h-4 w-4" />
            About
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all group"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* User Icon */}
          <Link to="/profile" className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Link to="/profile" className="p-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400">
            <User className="h-5 w-5" />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a0b]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl overflow-y-auto max-h-[calc(100vh-4rem)] animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <form onSubmit={(e) => { 
              e.preventDefault();
              if (searchQuery.trim()) {
                navigate(`/events?q=${encodeURIComponent(searchQuery)}`);
              }
              setIsMobileMenuOpen(false); 
            }} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-zinc-100 focus:bg-white/10 focus:border-indigo-500 outline-none"
              />
            </form>
            
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-sm font-semibold text-zinc-300">Theme Preference</span>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:text-white hover:bg-indigo-500 transition-all flex items-center gap-2"
              >
                {isDark ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-300 font-semibold flex items-center gap-3"
              >
                <Home className="h-5 w-5 text-indigo-400" />
                Home
              </Link>
              
              <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-zinc-300 font-semibold flex items-center gap-3 hover:bg-white/5 rounded-xl">
                <Calendar className="h-5 w-5 text-indigo-400" />
                Events
              </Link>

              {/* Nested Mobile Categories */}
              <div className="pl-6 flex flex-col space-y-2 border-l-2 border-white/5 ml-4 my-2">
                <Link to="/events?type=tech" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <MonitorPlay className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium">Tech Events</span>
                </Link>
                <Link to="/events?type=cultural" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Palette className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium">Cultural Fests</span>
                </Link>
                <Link to="/events?type=workshop" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium">Workshops</span>
                </Link>
                <Link to="/events?type=gaming" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Gamepad2 className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">E-Sports</span>
                </Link>
              </div>

              <Link 
                to="/registration" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-300 font-semibold flex items-center gap-3"
              >
                <ClipboardList className="h-5 w-5 text-indigo-400" />
                Registration
              </Link>
              
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-300 font-semibold flex items-center gap-3"
              >
                <Info className="h-5 w-5 text-indigo-400" />
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}