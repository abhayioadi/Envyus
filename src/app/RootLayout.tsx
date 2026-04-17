import { Link, Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0b] dark:text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
