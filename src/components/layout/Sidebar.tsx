import {
  BarChart3,
  BookOpenText,
  Briefcase,
  Compass,
  Flag,
  Home,
  MessageSquareText,
  Settings,
  Users,
  Video,
} from "lucide-react";

const navItems = [
  { label: "Trang chủ", icon: Home, active: true },
  { label: "Khám phá", icon: Compass },
  { label: "Bạn bè", icon: Users },
  { label: "Tin nhắn", icon: MessageSquareText },
  { label: "Video", icon: Video },
  { label: "Trang", icon: Flag },
  { label: "Bài viết", icon: BookOpenText },
  { label: "Thống kê", icon: BarChart3 },
  { label: "Cài đặt", icon: Settings },
];

const shortcuts = [
  { name: "Design Team", color: "from-violet-500 to-fuchsia-500" },
  { name: "Startup Lab", color: "from-emerald-500 to-teal-500" },
  { name: "Travel Club", color: "from-sky-500 to-cyan-500" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/80 xl:block">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Overview
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-2xl bg-indigo-50 px-3 py-2 dark:bg-indigo-500/10">
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Tổng kết
              </span>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                +12.4%
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-emerald-50 px-3 py-2 dark:bg-emerald-500/10">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Tương tác
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                8.2k
              </span>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              className={[
                "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition",
                active
                  ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
              ].join(" ")}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Lối tắt</p>
            <button type="button" className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
              Xem thêm
            </button>
          </div>
          <div className="space-y-3">
            {shortcuts.map((group) => (
              <div key={group.name} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-2 dark:bg-slate-800/80">
                <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${group.color}`} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{group.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
