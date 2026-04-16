import React from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Users, Trophy, Star, MapPin, Sparkles, Zap, Flame } from "lucide-react";
import { mockEvents } from "./mockData";

export function HomeLandingPage() {
  const topEvents = mockEvents.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0a0b] text-zinc-100 selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 flex items-center justify-center min-h-[90vh]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzOGg0djRoLTR2LTR6bTAtMmg0di00aC00djR6bS0yIDJoLTR2NGg0di00em0wLTJoLTR2LTRoNHY0eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <img src="/src/imports/images.png" alt="EventHub Logo" className="h-28 w-auto object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
          </div>
          
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <Sparkles className="w-4 h-4" />
            Welcome to the New EventHub
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Elevate Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Live Experiences
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 font-medium">
            Discover, track, and register for premier hackathons, cultural fests, and esports tournaments happening globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link to="/events" className="px-8 py-4 bg-zinc-100 text-[#0a0a0b] font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
              Explore Events <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/registration" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all backdrop-blur-md flex items-center justify-center gap-2">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Built for the Modern Attendee</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A complete ecosystem to find, track, and dominate the events that matter most to your career and social life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-indigo-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-32 h-32 text-indigo-400" />
              </div>
              <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Real-Time Schedules</h3>
              <p className="text-zinc-400 relative z-10 leading-relaxed">Experience a dynamic interface that automatically shifts events from scheduled to live as time passes. Never miss a moment.</p>
            </div>
            
            <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-pink-500/50 transition-all group relative overflow-hidden md:-translate-y-4">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32 text-pink-400" />
              </div>
              <div className="w-14 h-14 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Team Coordination</h3>
              <p className="text-zinc-400 relative z-10 leading-relaxed">Find the perfect event for your exact group size. Filter by team requirements and discover opportunities tailored to your squad.</p>
            </div>

            <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-amber-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-32 h-32 text-amber-400" />
              </div>
              <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Live Leaderboards</h3>
              <p className="text-zinc-400 relative z-10 leading-relaxed">Check the results instantly. See the winners for ongoing and past events with our dedicated live results tracking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 relative border-t border-white/5 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Trending Now</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">Featured Events</h2>
            </div>
            <Link to="/events" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2">
              View Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topEvents.map(event => (
              <Link key={event.id} to={`/event/${event.id}`} className="group bg-[#121214] rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent z-10"></div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-indigo-300 font-semibold rounded-full text-xs uppercase tracking-wider">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col relative z-20 -mt-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{event.title}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                    <div className="flex items-center text-zinc-400 gap-2">
                      <MapPin className="w-4 h-4 text-indigo-400" /> {event.location}
                    </div>
                    <div className="flex items-center text-amber-400 font-medium gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      <Star className="w-3.5 h-3.5 fill-current" /> 4.9
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-indigo-950/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">Don't Miss Out.</h2>
          <p className="text-zinc-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Join the definitive platform for discovering and participating in the world's most exciting technical and cultural events.</p>
          <Link to="/registration" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(99,102,241,0.4)] text-lg gap-3">
            Get Started Now <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}