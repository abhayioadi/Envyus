import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { mockEvents } from "./mockData";
import { ChevronLeft, CheckCircle2 } from "lucide-react";

export function RegistrationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.id === id);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    branch: "",
    semester: "1st",
    teamMembers: "",
  });

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Event Not Found</h2>
        <button onClick={() => navigate("/")} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Return Home
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd submit this to a backend
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center w-full px-4 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-neutral-100 max-w-md w-full text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Registration Successful!</h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            You've successfully registered for <strong>{event.title}</strong>. A confirmation email has been sent to your inbox.
          </p>
          <div className="space-y-4">
            <Link to={`/event/${event.id}`} className="block w-full bg-neutral-100 text-neutral-900 font-semibold py-3 rounded-xl hover:bg-neutral-200 transition-colors">
              Back to Event Details
            </Link>
            <Link to="/" className="block w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors">
              Explore More Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to={`/event/${event.id}`} className="inline-flex items-center text-indigo-600 font-medium hover:underline mb-8 group">
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Details
      </Link>

      <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 overflow-hidden">
        <div className="p-8 md:p-10 border-b border-neutral-100 bg-neutral-50/50">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Register for Event</h1>
          <p className="text-neutral-600 text-lg">{event.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-neutral-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="studentId" className="block text-sm font-semibold text-neutral-700">Student ID / Roll No</label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                value={formData.studentId}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="Ex: 21BCE1001"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="branch" className="block text-sm font-semibold text-neutral-700">Branch</label>
              <input
                id="branch"
                name="branch"
                type="text"
                required
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="semester" className="block text-sm font-semibold text-neutral-700">Semester</label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white"
              >
                {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map((sem) => (
                  <option key={sem} value={sem}>{sem} Semester</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2 flex flex-col justify-end pb-3">
               <p className="text-sm font-medium text-neutral-600">Event Fee: <strong className="text-indigo-600 uppercase">{event.cost}</strong></p>
            </div>
          </div>

          {event.teamSize > 1 && (
            <div className="space-y-2 pt-4 border-t border-neutral-100">
              <label htmlFor="teamMembers" className="block text-sm font-semibold text-neutral-700">
                Team Member Details (Max {event.teamSize - 1} more)
              </label>
              <textarea
                id="teamMembers"
                name="teamMembers"
                rows={3}
                value={formData.teamMembers}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-none"
                placeholder="Enter names and roll numbers of your team members, separated by commas."
              />
            </div>
          )}

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-95 text-lg"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
