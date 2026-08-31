import { Bell, Compass, Search, Sparkles } from "lucide-react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 text-white shadow-lg shadow-indigo-500/20">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Network
            </p>
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
              Social Hub
            </h1>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <label className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-500 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <Search size={16} />
            <input
              type="text"
              placeholder="Tìm kiếm bạn bè, bài viết..."
              className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex"
            aria-label="Explore"
          >
            <Compass size={18} />
          </button>
          <button
            type="button"
            className="relative rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-medium text-white">
              3
            </span>
          </button>
          <ThemeToggle />
          <div className="ml-1 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-900">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Nguyễn An
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
