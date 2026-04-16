import { User } from "lucide-react";

export function ProfilePage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-start">
      <div className="bg-white rounded-3xl p-10 shadow-lg border border-neutral-100 max-w-lg w-full text-center">
        <div className="mx-auto w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
          <User className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">User Profile</h1>
        <p className="text-neutral-500 mb-8">student@university.edu</p>

        <div className="space-y-4 text-left border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold text-neutral-800 mb-4">Your Registered Events</h2>
          
          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex justify-between items-center">
             <div>
                <p className="font-bold text-neutral-900">Global Tech Symposium 2026</p>
                <p className="text-sm text-neutral-500">Tech Event</p>
             </div>
             <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Confirmed</span>
          </div>
          
          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex justify-between items-center">
             <div>
                <p className="font-bold text-neutral-900">Overnight Hackathon X</p>
                <p className="text-sm text-neutral-500">Coding Event</p>
             </div>
             <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Confirmed</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
     <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-black text-neutral-900 mb-6">About EventHub</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
          EventHub is the premier platform for discovering and registering for events happening around your campus and city. 
          From high-stakes hackathons to cultural festivals, we bring you closer to the experiences that matter.
        </p>
        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-900">
           <h3 className="font-bold text-xl mb-2">Our Mission</h3>
           <p>To seamlessly connect students, organizers, and institutions, fostering a vibrant community of continuous learning and celebration.</p>
        </div>
     </div>
  )
}