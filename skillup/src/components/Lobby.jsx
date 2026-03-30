import { useState } from "react";

export default function Lobby({ onJoin, error }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onJoin(input);
  };

  const randomRoom = () => {
    setInput(Math.random().toString(36).slice(2, 8).toUpperCase());
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-background font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(239_84%_67%/0.1),transparent_60%)]" />

      <div className="relative w-full max-w-md glass border border-border/50 rounded-3xl p-6 sm:p-8 shadow-elevated animate-in fade-in slide-in-from-bottom-3 duration-500">
        <div className="mx-auto mb-4 w-16 h-16 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center shadow-card-hover">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
            <path d="M14 20C14 18.343 15.343 17 17 17H25C26.657 17 28 18.343 28 20V28C28 29.657 26.657 31 25 31H17C15.343 31 14 29.657 14 28V20Z" stroke="currentColor" strokeWidth="2" />
            <path d="M28 22L34 19V29L28 26V22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-center text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Join a
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Live Room</span>
        </h1>
        <p className="mt-2 text-center text-sm sm:text-base text-muted-foreground">
          Create or join a room to start your session with mentors and peers.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter room ID…"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
              className="flex-1 rounded-xl border border-border bg-card/80 px-4 py-3 font-mono tracking-[0.14em] text-foreground placeholder:text-muted-foreground outline-none ring-offset-background transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              maxLength={20}
              autoFocus
            />
            <button
              type="button"
              className="rounded-xl border border-border bg-card/70 px-3 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              onClick={randomRoom}
              title="Generate random room ID"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 3 21 3 21 8" />
                <line x1="4" y1="20" x2="21" y2="3" />
                <polyline points="21 16 21 21 16 21" />
                <line x1="15" y1="15" x2="21" y2="21" />
              </svg>
            </button>
          </div>

          {error && (
            <p className="rounded-xl border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl gradient-primary border-0 px-4 py-3 text-sm sm:text-base font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!input.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            Start Call
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Share the room ID with others so they can join.
        </p>
      </div>
    </div>
  );
}
