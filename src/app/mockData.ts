export type EventType = "tech" | "cultural" | "sports" | "workshop" | "gaming";

export interface EventItem {
  id: string;
  title: string;
  type: EventType;
  cost: "free" | "paid";
  teamSize: 1 | 2 | 3 | 4;
  image: string;
  date: string; // ISO String
  endDate: string; // ISO String
  venue: string;
  description: string;
  registrations: number;
  rating: number;
  totalRatings: number;
}

export const isEventLive = (event: EventItem) => {
  const now = new Date();
  return now >= new Date(event.date) && now <= new Date(event.endDate);
};

export const mockEvents: EventItem[] = [
  {
    id: "e1",
    title: "Global Tech Symposium 2026",
    type: "tech",
    cost: "free",
    teamSize: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXZlbnR8ZW58MXx8fHwxNzc2Mjk2MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: new Date(Date.now() - 3600000).toISOString(),
    endDate: new Date(Date.now() + 3600000 * 5).toISOString(),
    venue: "Main Auditorium",
    description: "Join the largest tech gathering of the year featuring visionary speakers, hands-on sessions, and unparalleled networking opportunities. Dive deep into AI, Web3, and the future of software engineering.",
    registrations: 450,
    rating: 4.8,
    totalRatings: 120,
  },
  {
    id: "e2",
    title: "Overnight Hackathon X",
    type: "tech",
    cost: "paid",
    teamSize: 4,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob258ZW58MXx8fHwxNzc2MzE0NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: new Date(Date.now() - 7200000).toISOString(),
    endDate: new Date(Date.now() + 86400000).toISOString(),
    venue: "Innovation Lab 3",
    description: "A 24-hour coding marathon to solve real-world problems. Form a team of 4, build innovative solutions, and win exciting prizes. Food and energy drinks are on us!",
    registrations: 120,
    rating: 4.5,
    totalRatings: 45,
  },
  {
    id: "e3",
    title: "Summer Music Festival",
    type: "cultural",
    cost: "paid",
    teamSize: 1,
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnR8ZW58MXx8fHwxNzc2Mjg3NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
    endDate: new Date(Date.now() + 86400000 * 2 + 10800000).toISOString(),
    venue: "Open Grounds",
    description: "Experience a magical evening filled with live performances from top indie artists, food trucks, and a vibrant community atmosphere.",
    registrations: 850,
    rating: 0,
    totalRatings: 0,
  },
  {
    id: "e4",
    title: "UI/UX Masterclass Workshop",
    type: "workshop",
    cost: "free",
    teamSize: 1,
    image: "https://images.unsplash.com/photo-1623652554515-91c833e3080e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcHxlbnwxfHx8fDE3NzYzMTQ1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
    endDate: new Date(Date.now() + 86400000 * 5 + 7200000).toISOString(),
    venue: "Design Studio A",
    description: "Learn the secrets of crafting beautiful, user-centric interfaces from industry veterans. Ideal for beginners and intermediate designers.",
    registrations: 60,
    rating: 0,
    totalRatings: 0,
  },
  {
    id: "e5",
    title: "Valorant Esports Championship",
    type: "gaming",
    cost: "paid",
    teamSize: 4,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzfGVufDF8fHx8MTc3NjI1MzkwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    date: new Date(Date.now() + 86400000 * 1).toISOString(), // 1 day from now
    endDate: new Date(Date.now() + 86400000 * 1 + 18000000).toISOString(),
    venue: "E-Sports Arena",
    description: "Compete against the best teams in the region in this high-stakes Valorant tournament. Big prize pool, live commentary, and massive crowd.",
    registrations: 32,
    rating: 0,
    totalRatings: 0,
  }
];

export interface LiveResult {
  id: string;
  name: string;
  sem: string;
  branch: string;
  eventName: string;
  position: "1st" | "2nd" | "3rd";
}

export const mockResults: LiveResult[] = [
  { id: "r1", name: "Alice Johnson", sem: "4th", branch: "Computer Science", eventName: "Hackathon X", position: "1st" },
  { id: "r2", name: "Bob Smith", sem: "6th", branch: "Information Tech", eventName: "Hackathon X", position: "2nd" },
  { id: "r3", name: "Charlie Davis", sem: "2nd", branch: "Electronics", eventName: "Valorant Esports", position: "1st" },
  { id: "r4", name: "Diana Prince", sem: "8th", branch: "Mechanical", eventName: "Robo Wars", position: "3rd" },
  { id: "r5", name: "Ethan Hunt", sem: "4th", branch: "Computer Science", eventName: "UI/UX Challenge", position: "1st" },
  { id: "r6", name: "Fiona Gallagher", sem: "6th", branch: "Civil Engineering", eventName: "Bridge Building", position: "2nd" },
  { id: "r7", name: "George Mason", sem: "2nd", branch: "Computer Science", eventName: "Code Relay", position: "1st" },
];
