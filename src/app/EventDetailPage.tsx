import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { mockEvents, isEventLive } from "./mockData";
import { CalendarDays, MapPin, Users, Info, ChevronLeft, Star, ArrowRight, Clock, Trophy } from "lucide-react";
import { format } from "date-fns";

export function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.id === id);

  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-[#0a0a0b] text-white">
        <h2 className="text-4xl font-black text-white mb-4">Event Not Found</h2>
        <p className="text-zinc-500 mb-8 text-lg font-medium">The event you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate("/")} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          Return Home
        </button>
      </div>
    );
  }

  // Calculate optimistic rating
  const displayedRating = userRating > 0 
    ? ((event.rating * event.totalRatings) + userRating) / (event.totalRatings + 1)
    : event.rating;

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0b] text-zinc-100">
      <Link to="/events" className="inline-flex items-center text-zinc-400 font-bold hover:text-white mb-10 group bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all hover:bg-white/10">
        <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Events
      </Link>

      {/* Header */}
      <div className="mb-10 max-w-4xl">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            {event.type}
          </span>
          {isEventLive(event) && (
            <span className="px-4 py-1.5 bg-red-500/20 border border-red-500/50 text-red-400 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" /> Live Now
            </span>
          )}
          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest">
            {event.cost}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight leading-tight mb-8">
          {event.title}
        </h1>
      </div>

      {/* Hero Image Box */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 mb-16 bg-[#121214] group">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzOGg0djRoLTR2LTR6bTAtMmg0di00aC00djR6bS0yIDJoLTR2NGg0di00em0wLTJoLTR2LTRoNHY0eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-[#121214] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
            <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
              <Info className="w-8 h-8 text-indigo-400" /> Event Details
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="whitespace-pre-wrap leading-loose text-zinc-300 font-medium text-lg">{event.description}</p>
            </div>
          </section>

          {/* Ratings Section */}
          <section className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 p-8 md:p-10 rounded-[2rem] border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-amber-400" /> Rate this Experience
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex flex-col items-center bg-white/5 px-8 py-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                <span className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{displayedRating.toFixed(1)}</span>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2">out of 5</span>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/10 mx-2"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-all hover:scale-125"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || userRating || Math.round(displayedRating))
                            ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                            : "fill-transparent text-white/20 hover:text-amber-400/50"
                        } transition-all duration-300`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-zinc-400 font-medium text-sm">
                  {userRating > 0 ? "Thanks for your rating!" : "Click a star to submit your rating"}
                </p>
                <p className="text-zinc-500 text-xs mt-1 font-semibold uppercase tracking-wider">{event.totalRatings + (userRating > 0 ? 1 : 0)} Total Ratings</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-8">
          <div className="bg-[#121214] p-8 rounded-[2rem] border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.2)] sticky top-24">
            <h3 className="text-xl font-black text-white mb-8 pb-4 border-b border-white/10 uppercase tracking-widest text-sm">Logistics</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-5 items-start group">
                <div className="bg-indigo-500/10 p-4 rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Date</p>
                  <p className="text-white font-bold text-lg">{format(new Date(event.date), "MMMM d, yyyy")}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="bg-pink-500/10 p-4 rounded-2xl text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Time</p>
                  <p className="text-white font-bold text-lg">{format(new Date(event.date), "h:mm a")}</p>
                  <p className="text-zinc-400 text-sm font-medium mt-1">Duration: {event.duration}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="bg-amber-500/10 p-4 rounded-2xl text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Venue</p>
                  <p className="text-white font-bold text-lg">{event.venue}</p>
                  <p className="text-zinc-400 text-sm font-medium mt-1">{event.location}</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Team Requirements</p>
                  <p className="text-white font-bold text-lg">{event.teamSize === 1 ? "Individual Entry" : `Teams of ${event.teamSize}`}</p>
                </div>
              </div>
            </div>

            {/* Registration Call to Action */}
            <div className="pt-8 border-t border-white/10">
              <Link 
                to={`/register/${event.id}`} 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black px-6 py-4 rounded-2xl hover:scale-105 hover:from-indigo-400 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] text-lg border border-indigo-400/30"
              >
                Register Now <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-center text-xs font-bold text-zinc-500 mt-4 uppercase tracking-widest">Spots fill up fast!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}