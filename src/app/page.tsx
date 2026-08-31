const stories = [
  { name: "Linh", color: "from-pink-500 to-rose-400" },
  { name: "Huy", color: "from-violet-500 to-indigo-500" },
  { name: "Mai", color: "from-cyan-500 to-sky-500" },
  { name: "Tùng", color: "from-emerald-500 to-teal-500" },
  { name: "An", color: "from-amber-500 to-orange-500" },
];

const suggestions = [
  { name: "Mỹ Linh", mutual: "12 bạn chung" },
  { name: "Đức Huy", mutual: "8 bạn chung" },
  { name: "Phương Vy", mutual: "6 bạn chung" },
];

const posts = [
  {
    author: "Minh Anh",
    time: "2 giờ trước",
    text: "Cuối tuần này mình lên kế hoạch đi picnic với team. Ai muốn cùng đi không? Mình đã chốt địa điểm gần hồ bơi tuyệt đẹp!",
    stats: { likes: "1.2K", comments: "183", shares: "42" },
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    author: "Hoàng Nam",
    time: "4 giờ trước",
    text: "Sáng nay làm việc ở quán cà phê mới, view đẹp và không khí cực chill. Có ai muốn ghé qua cùng mình không?",
    stats: { likes: "864", comments: "94", shares: "18" },
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl pb-8">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_312px]">
        <main className="space-y-6">
          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
              <button
                type="button"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Bạn đang nghĩ gì?
              </button>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                { label: "Ảnh/video", tone: "text-emerald-600" },
                { label: "Cảm xúc", tone: "text-amber-600" },
                { label: "Sự kiện", tone: "text-violet-600" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="rounded-2xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <span className={`mr-2 ${item.tone}`}>●</span>
                  {item.label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Tin của bạn
              </h3>
              <button
                type="button"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
              >
                Tất cả
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {stories.map((story) => (
                <div
                  key={story.name}
                  className="group cursor-pointer rounded-[22px] border border-slate-200 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-800/80"
                >
                  <div
                    className={`mb-3 h-32 rounded-[18px] bg-gradient-to-br ${story.color}`}
                  />
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {story.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            {posts.map((post) => (
              <article
                key={post.author}
                className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {post.time}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-full px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    •••
                  </button>
                </div>

                <p className="mb-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {post.text}
                </p>

                <div
                  className={`mb-4 h-64 rounded-[22px] bg-gradient-to-br ${post.accent}`}
                />

                <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                      👍
                    </span>
                    <span>{post.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{post.stats.comments} bình luận</span>
                    <span>{post.stats.shares} chia sẻ</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm font-medium">
                  {[
                    { label: "Thích", icon: "👍" },
                    { label: "Bình luận", icon: "💬" },
                    { label: "Chia sẻ", icon: "↗" },
                  ].map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      <span className="mr-2">{action.icon}</span>
                      {action.label}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </main>

        <aside className="hidden space-y-5 xl:block">
          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Bạn có thể biết
            </h3>
            <div className="space-y-3">
              {suggestions.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-2 dark:bg-slate-800/80"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-violet-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {person.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {person.mutual}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500"
                  >
                    Kết bạn
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Sự kiện sắp tới
            </h3>
            <div className="space-y-3">
              {[
                { title: "Workshop UI/UX", date: "15 Tháng 9" },
                { title: "Hội thảo công nghệ", date: "20 Tháng 9" },
                { title: "Cuộc họp team", date: "25 Tháng 9" },
              ].map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/80"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {event.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {event.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
