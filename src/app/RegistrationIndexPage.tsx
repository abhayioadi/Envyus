import { Link } from "react-router";
import { mockEvents, isEventLive } from "./mockData";
import { CalendarClock, MapPin, Users } from "lucide-react";

export function RegistrationIndexPage() {
  const upcomingEvents = mockEvents.filter((ev) => !isEventLive(ev) && new Date(ev.date).getTime() > Date.now());

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Event Registrations</h1>
        <p className="text-lg text-neutral-600">
          Browse our upcoming events and secure your spot today. Spaces fill up fast!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all flex flex-col group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-700 font-semibold rounded-full text-xs uppercase tracking-wider shadow-sm">
                  {event.type}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-neutral-400" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>Team Size: {event.teamSize}</span>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500">Entry Fee</span>
                  <span className="font-bold text-lg text-indigo-600">
                    {event.cost === "free" ? "Free" : `$${event.price}`}
                  </span>
                </div>
                <Link 
                  to={`/register/${event.id}`} 
                  className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-md transition-all active:scale-95"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ))}
        {upcomingEvents.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-neutral-500 text-lg">No upcoming events available for registration right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}