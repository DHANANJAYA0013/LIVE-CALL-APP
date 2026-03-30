import VideoTile from "./VideoTile";

export default function Room({ localStream, remoteStreams, roomId, onLeave }) {
  const peerCount = remoteStreams.length;

  const gridClass =
    peerCount === 0
      ? "grid grid-cols-1"
      : peerCount === 1
      ? "grid grid-cols-1 md:grid-cols-2"
      : peerCount <= 3
      ? "grid grid-cols-1 sm:grid-cols-2"
      : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div className="h-screen w-full flex flex-col bg-background font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(239_84%_67%/0.08),transparent_60%)] pointer-events-none" />

      <header className="relative z-10 px-3 sm:px-6 py-3 border-b border-border/60 bg-card/80 backdrop-blur-xl flex items-center gap-2 sm:gap-3">
        <div className="w-9 h-9 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shadow-card">
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2.5" />
            <path d="M14 20C14 18.343 15.343 17 17 17H25C26.657 17 28 18.343 28 20V28C28 29.657 26.657 31 25 31H17C15.343 31 14 29.657 14 28V20Z" stroke="currentColor" strokeWidth="2.5" />
            <path d="M28 22L34 19V29L28 26V22Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <span className="text-sm sm:text-base font-semibold text-foreground">NexMeet</span>
          <p className="text-xs text-muted-foreground">Live mentor room</p>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/25 bg-destructive/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-destructive">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
            LIVE
          </span>
          <span className="hidden sm:inline-flex rounded-full bg-muted px-3 py-1 text-xs font-mono text-muted-foreground">
            Room: {roomId}
          </span>
          <span className="hidden md:inline text-xs text-muted-foreground">
            {peerCount + 1} participant{peerCount !== 0 ? "s" : ""}
          </span>
        </div>

        <button
          className="rounded-lg border border-destructive/25 bg-destructive/10 px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-medium text-destructive flex items-center gap-1.5 transition-colors hover:bg-destructive/15"
          onClick={onLeave}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="hidden sm:inline">Leave</span>
        </button>
      </header>

      <main className="relative z-10 flex-1 p-3 sm:p-5 lg:p-6 pb-24 sm:pb-28 overflow-auto">
        {peerCount === 0 ? (
          <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md px-6">
            <div className="w-16 h-16 rounded-full border-2 border-primary/35 bg-primary/10 animate-pulse mb-4" />
            <p className="text-base sm:text-lg font-semibold text-foreground">Waiting for others to join...</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Share room ID <strong className="text-primary font-mono">{roomId}</strong> with your friends.
            </p>
          </div>
        ) : (
          <section className="h-full">
            <div className={`${gridClass} gap-3 sm:gap-4 auto-rows-fr h-full`}>
              {remoteStreams.map(({ peerId, stream }) => (
                <VideoTile key={peerId} stream={stream} peerId={peerId} />
              ))}
            </div>
          </section>
        )}
      </main>

      <div className="absolute right-3 bottom-3 sm:right-6 sm:bottom-6 w-28 sm:w-44 md:w-52 z-20 rounded-xl overflow-hidden border border-primary/30 shadow-elevated bg-card">
        <VideoTile stream={localStream} label="You" isLocal />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
    </div>
  );
}