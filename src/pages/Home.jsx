import {
  FaArchive,
  FaBell,
  FaCheck,
  FaFolder,
  FaPlus,
  FaSearch,
  FaSignInAlt,
  FaStar,
  FaStickyNote,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const notes = [
  {
    title: "Plan for the week",
    text: "Review priorities, make space for deep work, and keep the small promises.",
    date: "Today, 9:42 AM",
    color: "border-cyan-300/30 bg-cyan-300/10",
    tag: "Planning",
  },
  {
    title: "Project ideas",
    text: "A calm place to collect the ideas that are worth returning to later.",
    date: "Yesterday, 4:18 PM",
    color: "border-violet-300/30 bg-violet-300/10",
    tag: "Ideas",
  },
  {
    title: "Reading list",
    text: "The books, essays, and curious rabbit holes waiting for a quiet evening.",
    date: "Monday, 11:06 AM",
    color: "border-amber-300/30 bg-amber-300/10",
    tag: "Personal",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d1d] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 px-6 py-8 lg:block">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-xl text-[#080d1d] shadow-lg shadow-cyan-500/20">
              <FaStickyNote />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Cosmic Notes
            </span>
          </Link>

          <nav className="mt-12 space-y-2" aria-label="Main navigation">
            <button className="flex w-full items-center gap-3 rounded-xl bg-cyan-300/15 px-4 py-3 text-left text-cyan-200">
              <FaStickyNote /> All notes
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-indigo-100/65 transition hover:bg-white/5 hover:text-white">
              <FaStar /> Favorites
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-indigo-100/65 transition hover:bg-white/5 hover:text-white">
              <FaArchive /> Archive
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-indigo-100/65 transition hover:bg-white/5 hover:text-white">
              <FaTrash /> Trash
            </button>
          </nav>

          <div className="mt-12 border-t border-white/10 pt-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-indigo-100/40">
              Folders
            </p>
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-indigo-100/65 transition hover:bg-white/5 hover:text-white">
              <FaFolder className="text-amber-300" /> Personal
            </button>
            <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-indigo-100/65 transition hover:bg-white/5 hover:text-white">
              <FaFolder className="text-cyan-300" /> Work
            </button>
          </div>

          <Link
            to="/signin"
            className="mt-auto flex items-center gap-3 pt-16 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            <FaSignInAlt /> Sign in to sync
          </Link>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cyan-300">
                Monday, September 14
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                Your notes
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifications"
                title="Notifications"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-indigo-100/70 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <FaBell />
              </button>
              <Link
                to="/signin"
                className="hidden items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20 sm:flex"
              >
                <FaSignInAlt /> Sign in
              </Link>
            </div>
          </header>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-indigo-100/45 focus-within:border-cyan-300/50">
              <FaSearch />
              <input
                type="search"
                placeholder="Search your notes"
                className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/40"
              />
            </label>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-[#07101c] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              <FaPlus /> New note
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-indigo-100/55">Total notes</p>
              <p className="mt-2 text-2xl font-bold">24</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-indigo-100/55">Favorites</p>
              <p className="mt-2 text-2xl font-bold">08</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-indigo-100/55">Folders</p>
              <p className="mt-2 text-2xl font-bold">04</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-indigo-100/55">Completed</p>
              <p className="mt-2 flex items-center gap-2 text-2xl font-bold">
                <FaCheck className="text-sm text-emerald-300" /> 12
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent notes</h2>
            <button
              type="button"
              className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              View all
            </button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
              <article
                key={note.title}
                className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${note.color}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <button
                    type="button"
                    aria-label={`Favorite ${note.title}`}
                    title="Add to favorites"
                    className="text-indigo-100/50 transition hover:text-amber-300"
                  >
                    <FaStar />
                  </button>
                </div>
                <p className="mt-4 min-h-20 text-sm leading-6 text-indigo-50/70">
                  {note.text}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-indigo-100/50">
                  <span>{note.date}</span>
                  <span className="rounded-full bg-black/15 px-2.5 py-1 text-indigo-100/70">
                    {note.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
