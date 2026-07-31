import { useEffect, useState } from "react";

const stack = [
  { k: "AI & LLM", v: "LangChain · LangGraph · RAG Pipelines · Multi-Agent Systems" },
  { k: "Backend", v: "Python · Django · DRF · Celery · Websocket" },
  { k: "Frontend", v: "React · Tailwind · JavaScript" },
  { k: "Database", v: "PostgreSQL · MySQL · SQLite" },
  { k: "Systems", v: "Redis · RabbitMQ" },
  { k: "Infra", v: "Docker · GitHub Actions" },
];

const work = [
  {
    n: "01",
    title: "InsightDocs AI",
    year: "2025",
    stack: "Django · Postgres · LangChain · Redis · Celery · Django Channels · RAG · Google Gemini ",
    body: "InsightDocs AI is an intelligent SaaS platform that transforms static documents into active conversations.",
    github: "https://github.com/NikhilAmbure/InsightDocs_AI",
  },
  {
    n: "02",
    title: "Agentic Research Assistant",
    year: "2026",
    stack: "Django · Python · LangChain · LangGraph · Pydantic · Groq LLM, ",
    body: "An AI-powered research assistant built with Django and LangGraph that autonomously searches the web, synthesizes information, and delivers well-structured research responses through a conversational chat interface.",
    github: "https://github.com/NikhilAmbure/Agentic-Research-Assistant",
  },
  {
    n: "03",
    title: "Agentic AI Chess Strategist",
    year: "2026",
    stack: "LangGraph · Chess Engine: Stockfish · Hugging Face Spaces · Groq (Llama-3.3-70B) · Streamlit",
    body: "An AI-powered chess analysis dashboard that combines deterministic engine evaluation with LLM-generated strategic explanations. The system is designed to avoid hallucinations by grounding all insights in a real chess engine.",
    github: "https://github.com/NikhilAmbure/agentic-chess-ai",
  },
  {
    n: "04",
    title: "Zeno",
    year: "2025",
    stack: "Python · SQLite · Django · Razorpay",
    body: "Zeno is a robust e-commerce platform built with Django, featuring a complete shopping experience with secure payment integration, user authentication, and order management.",
    github: "https://github.com/NikhilAmbure/Zeno",
  },
];


const leet = {
  handle: "N1kh1L_A",
  rank: "205,144",
  rating: 1460,
  solved: { total: 497, easy: 287, medium: 201, hard: 9 },
  streak: 247,
  contests: 47,
  badges: ["200 Days"],
  recent: [
    { d: "M", ok: false }, { d: "T", ok: false }, { d: "W", ok: false },
    { d: "T", ok: false }, { d: "F", ok: false }, { d: "S", ok: false }, { d: "S", ok: false },
  ],
};

const nav = [
  { id: "top", label: "Home", key: "1" },
  { id: "stack", label: "Stack", key: "2" },
  { id: "work", label: "Work", key: "3" },
  { id: "leet", label: "LeetCode", key: "4" },
  { id: "reach", label: "Reach", key: "5" },
];

const now = [
  "building → a tiny vector search for personal notes",
  "reading → Designing Data-Intensive Applications",
  "listening → John Denver, BoyWithUke, Ed Sheeran",
  "coffee → single-origin, black, no sugar",
  "learning → React, Agentic AI (slowly, painfully, happily)",
  "shipping → 3 side projects, 1 might survive",
];

const stats = [
  { n: "50k", k: "lines shipped", s: "this year" },
  { n: "28", k: "repos", s: "public on github" },
  { n: "80", k: "commits", s: "past 365 days" },
  { n: "∞", k: "cups of coffee", s: "and counting" },
];


function App() {
  const [time, setTime] = useState("");
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const [active, setActive] = useState("top");

  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit", minute: "2-digit",
        timeZone: "Asia/Kolkata", hour12: false,
      }).format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const m = (e) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const [hint, setHint] = useState(false);
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const match = nav.find((n) => n.key === e.key);
      if (match) {
        e.preventDefault();
        document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        setHint((v) => !v);
      }
      if (e.key === "Escape") setHint(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  const solvedPct = (n) => Math.round((n / leet.solved.total) * 100);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(500px circle at ${pos.x * 100}% ${pos.y * 100}%, oklch(0.82 0.14 170 / 0.10), transparent 55%)`,
        }}
      />


      {/* Floating pill nav */}
      <nav
        aria-label="Primary"
        className="fixed left-1/2 top-4 z-40 -translate-x-1/2 rise"
        style={{ animationDelay: "0.2s" }}
      >
        <div
          className="mono flex items-center gap-1 rounded-full border border-border px-1.5 py-1 text-[11px] shadow-lg backdrop-blur-md"
          style={{ background: "oklch(0.18 0.008 60 / 0.72)" }}
        >
          <span className="ml-2 mr-1 hidden items-center gap-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
            <span className="text-muted-foreground">nikhil</span>
          </span>
          <span className="mx-1 hidden h-3 w-px bg-border sm:block" />
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                active === n.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        {/* Top corner meta */}
        <div className="mono flex items-center justify-end pt-6 text-[11px] text-muted-foreground">
          <span>IST {time || "--:--"}</span>
        </div>


        {/* HERO — shorter, calmer */}
        <section id="top" className="relative z-10 pt-28 pb-16 md:pt-32">
          <p className="label rise mb-4">◍ Nikhil Ambure</p>
          <h1
            className="rise text-3xl leading-[1.15] tracking-tight md:text-[2.4rem]"
            style={{ animationDelay: "0.1s" }}
          >
            Python full-stack developer.{" "}
            <span className="text-muted-foreground">
              I build <span className="text-accent">quiet, useful</span> web
              things.
            </span>
          </h1>
          <p
            className="rise mono mt-6 text-xs text-muted-foreground"
            style={{ animationDelay: "0.25s" }}
          >
            Pune, Maharashtra · Open to Work
          </p>
        </section>

        {/* NOW — marquee */}
        <section aria-label="now" className="relative -mx-6 border-y border-border bg-surface/40 py-3 md:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="mono flex items-center gap-3 overflow-hidden text-[11px] text-muted-foreground">
            <span className="ml-4 shrink-0 rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-foreground">
              // now
            </span>
            <div className="flex w-max marquee-track">
              {[...now, ...now].map((n, i) => (
                <span key={i} className="mx-6 whitespace-nowrap">
                  <span className="text-accent">●</span> {n}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* STACK */}
        <section id="stack" className="border-t border-border py-12 scroll-mt-24">
          <p className="label mb-6">§ 01 — Stack</p>
          <dl className="divide-y divide-border">
            {stack.map((s) => (
              <div key={s.k} className="grid grid-cols-12 items-baseline gap-3 py-3">
                <dt className="mono col-span-4 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="col-span-8 text-sm md:text-base">{s.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* WORK — clean list, no images */}
        <section id="work" className="border-t border-border py-12 scroll-mt-24">
          <p className="label mb-8">§ 02 — Selected work</p>

          <ul className="divide-y divide-border">
            {work.map((p) => (
              <li key={p.n} className="group py-6 first:pt-0">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-2">
                    <span className="mono col-span-2 text-[11px] text-muted-foreground md:col-span-1">
                      {p.n}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent md:text-xl">
                          {p.title}{" "}
                          <span className="mono text-[11px] text-muted-foreground/70">
                            ↗
                          </span>
                        </h3>
                        <span className="mono text-[11px] text-muted-foreground">
                          {p.year}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {p.body}
                      </p>
                      <p className="mono mt-2 text-[11px] text-muted-foreground/70">
                        {p.stack}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>


        {/* LEETCODE */}
        <section id="leet" className="border-t border-border py-12 scroll-mt-24">
          <div className="mb-8 flex items-baseline justify-between">
            <p className="label">§ 03 — LeetCode</p>
            <a
              href={`https://leetcode.com/${leet.handle}`}
              target="_blank"
              className="mono text-[11px] text-muted-foreground hover:text-accent"
            >
              @{leet.handle} ↗
            </a>
          </div>

          <div className="flex items-end gap-4">
            <div className="mono text-6xl font-medium leading-none tracking-tight md:text-7xl">
              {leet.solved.total}
            </div>
            <div className="mono pb-2 text-[11px] text-muted-foreground">
              problems solved<br/>
              <span className="text-foreground/80">rating {leet.rating}</span>
              <span className="text-border"> · </span>
              <span className="text-foreground/80">top 58.31%</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-surface">
              <div style={{ width: `${solvedPct(leet.solved.easy)}%`, background: "oklch(0.78 0.14 155)" }} />
              <div style={{ width: `${solvedPct(leet.solved.medium)}%`, background: "oklch(0.78 0.15 75)" }} />
              <div style={{ width: `${solvedPct(leet.solved.hard)}%`, background: "oklch(0.68 0.18 25)" }} />
            </div>
            <div className="mono mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span><span className="text-[oklch(0.78_0.14_155)]">●</span> easy {leet.solved.easy}</span>
              <span><span className="text-[oklch(0.78_0.15_75)]">●</span> medium {leet.solved.medium}</span>
              <span><span className="text-[oklch(0.68_0.18_25)]">●</span> hard {leet.solved.hard}</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-4">
            <div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Highest streak</div>
              <div className="mt-1 text-lg">{leet.streak}<span className="text-sm text-muted-foreground"> days</span></div>
            </div>
            <div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">contests</div>
              <div className="mt-1 text-lg">{leet.contests}</div>
            </div>
            <div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">global rank</div>
              <div className="mt-1 text-lg">#{leet.rank}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mono mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              last seven days
            </div>
            <div className="flex gap-1.5">
              {leet.recent.map((d, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="h-8 rounded-sm"
                    style={{
                      background: d.ok ? "var(--color-accent)" : "var(--color-surface)",
                      opacity: d.ok ? 0.85 : 1,
                    }}
                  />
                  <div className="mono mt-1 text-center text-[10px] text-muted-foreground">{d.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mono mt-6 flex flex-wrap gap-2 text-[11px]">
            {leet.badges.map((b) => (
              <span key={b} className="rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                ◆ {b}
              </span>
            ))}
          </div>
        </section>

        {/* BY THE NUMBERS */}
        <section className="border-t border-border py-12 scroll-mt-24">
          <p className="label mb-6">§ 04 — By the numbers</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k} className="group">
                <div className="mono text-3xl tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                  {s.n}
                </div>
                <div className="mono mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
                <div className="mono text-[11px] text-muted-foreground/60">
                  {s.s}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REACH */}
        <section id="reach" className="border-t border-border py-14 scroll-mt-24">
          <p className="label mb-4">§ 05 — Reach</p>
          <p className="text-lg md:text-xl">
            Have something small and specific in mind?{" "}
            <a
              href="mailto:nikhilambure25@gmail.com"
              target="_blank"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              nikhilambure25@gmail.com
            </a>
          </p>
          <div className="mono mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
            <a href="https://github.com/NikhilAmbure" target="_blank" className="hover:text-accent">github/NikhilAmbure</a>
            <a href="https://www.linkedin.com/in/nikhil-ambure-8a41a7248/" target="_blank" className="hover:text-accent">linkedin/in/NikhilAmbure</a>
            <a href="https://leetcode.com/u/N1kh1L_A/" target="_blank" className="hover:text-accent">leetcode/N1kh1L_A</a>
            <a href="https://x.com/N1kh1l_A0" target="_blank" className="hover:text-accent">x/N1kh1l_A0</a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-border py-8 text-[11px] text-muted-foreground md:flex-row md:justify-between">
          <span className="mono">© 2025 Nikhil Ambure</span>
          <button
            onClick={() => setHint((v) => !v)}
            className="mono text-left hover:text-accent"
          >
            press <kbd className="rounded border border-border px-1 text-foreground">?</kbd> for shortcuts
          </button>
          <a href="#top" className="mono hover:text-accent">↑ top</a>
        </footer>
      </div>

      {/* KEYBOARD HINT OVERLAY */}
      {hint && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm"
          onClick={() => setHint(false)}
        >
          <div
            className="kbd-pop mono w-[min(360px,90vw)] rounded-xl border border-border bg-surface p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>keyboard</span>
              <button onClick={() => setHint(false)} className="hover:text-accent">esc</button>
            </div>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.id} className="flex items-center justify-between">
                  <span className="text-muted-foreground">jump to {n.label.toLowerCase()}</span>
                  <kbd className="rounded border border-border bg-background px-2 py-0.5 text-[11px]">
                    {n.key}
                  </kbd>
                </li>
              ))}
              <li className="flex items-center justify-between pt-2">
                <span className="text-muted-foreground">toggle this panel</span>
                <kbd className="rounded border border-border bg-background px-2 py-0.5 text-[11px]">?</kbd>
              </li>
            </ul>
          </div>
        </div>
      )}
    </main>

  );
}

export default App;