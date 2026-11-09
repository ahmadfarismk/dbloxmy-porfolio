import Image from "next/image";

import styles from "../quicklinks.module.css";

/*
 * All copy lives here.
 *   [brief]  = exact wording/links from the brief — do not change
 *   [D'Blox] = taken from the games' own Roblox descriptions
 *   [draft]  = written for this page — review and replace freely
 */
const COPY = {
  title: "D'Blox Games", // [brief]
  tagline: "Studio permainan Roblox dari Malaysia.", // [draft]
  playLabel: "Main di Roblox", // [brief] Option 1
  aboutLabel: "Kenali kami", // [brief] Option 2
  ownLabel: "Permainan D'Blox", // [draft]
  flyhighLabel: "Bersama FlyHigh", // [draft]
  cta: "Main sekarang", // [draft]
  collab: {
    // [draft] wording of the brief's collaboration line
    before: "Kedua-dua permainan ini dibangunkan dengan kerjasama ",
    partner: "FlyHigh Education Centre", // [brief]
    after: ".",
  },
  website: {
    title: "Laman web D'Blox", // [brief]
    url: "https://dblox.my", // [brief]
    display: "dblox.my",
  },
  discord: {
    title: "Sertai Discord kami", // [draft]
    url: "https://discord.gg/CRu9pq6R7",
    display: "discord.gg/CRu9pq6R7",
  },
};

const OWN_GAMES = [
  {
    key: "gepuk",
    name: "SELL A GEPUK!",
    desc: "Buka gerai ayam gepuk anda sendiri!", // [draft]
    href: "https://www.roblox.com/games/81156081841695/SELL-A-GEPUK",
    thumb: "/quicklinks/sell-a-gepuk-thumb.png",
    className: styles.gepuk,
  },
];

const FLYHIGH_GAMES = [
  {
    key: "pksk",
    name: "PKSK Onboard: Misi ke Asrama", // [brief]
    desc: "Sedia untuk PKSK dengan cara yang seronok.", // [D'Blox]
    href: "https://www.roblox.com/games/126056624561474/PKSK-Onboard-Misi-ke-Asrama", // [brief]
    thumb: "/quicklinks/pksk-thumb.jpg",
    className: styles.pksk,
  },
  {
    key: "jejak",
    name: "Jejak Wahyu", // [brief]
    desc: "Jelajahi Sirah Rasulullah SAW.", // [D'Blox]
    href: "https://www.roblox.com/games/124356726222612/Jejak-Wahyu", // [brief]
    thumb: "/quicklinks/jejak-wahyu-thumb.jpg",
    className: styles.jejak,
  },
];

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function GameCard({ game, priority }: { game: (typeof FLYHIGH_GAMES)[number]; priority?: boolean }) {
  return (
    <a
      href={game.href}
      target="_blank"
      rel="noopener"
      className={`${styles.card} ${game.className}`}
    >
      <Image
        className={styles.thumb}
        src={game.thumb}
        alt={`${game.name} — gambar permainan`}
        width={84}
        height={118}
        sizes="84px"
        priority={priority}
      />
      <span className={styles.cardBody}>
        <span className={styles.gameName}>{game.name}</span>
        <span className={styles.gameDesc}>{game.desc}</span>
        <span className={styles.cta}>
          {COPY.cta}
          <ExternalIcon />
        </span>
      </span>
    </a>
  );
}

export default function QuicklinksPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static mark */}
        <img
          className={styles.logo}
          src="/logo/dblox-mark-white.png"
          alt="D'Blox"
          width={46}
          height={52}
        />
        <h1 className={styles.title}>{COPY.title}</h1>
        <p className={styles.tagline}>{COPY.tagline}</p>
      </header>

      <section className={styles.section} aria-labelledby="ql-play">
        <h2 id="ql-play" className={styles.sectionLabel}>
          {COPY.playLabel}
        </h2>
        <h3 className={styles.subLabel}>{COPY.ownLabel}</h3>
        <div className={styles.stack}>
          {OWN_GAMES.map((game) => (
            <GameCard key={game.key} game={game} priority />
          ))}
        </div>

        <h3 className={styles.subLabel}>{COPY.flyhighLabel}</h3>
        <div className={styles.stack}>
          {FLYHIGH_GAMES.map((game) => (
            <GameCard key={game.key} game={game} />
          ))}

          <p className={styles.collab}>
            <span className={styles.collabIcon} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m11 17 2 2a1 1 0 0 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 0 0 3-3M3 4h8" />
              </svg>
            </span>
            <span>
              {COPY.collab.before}
              <strong>{COPY.collab.partner}</strong>
              {COPY.collab.after}
            </span>
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ql-about">
        <h2 id="ql-about" className={styles.sectionLabel}>
          {COPY.aboutLabel}
        </h2>
        <a
          href={COPY.website.url}
          target="_blank"
          rel="noopener"
          className={styles.webCard}
        >
          <span className={styles.webIcon}>
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny static mark */}
            <img src="/logo/dblox-mark-white.png" alt="" width={26} height={30} />
          </span>
          <span className={styles.webText}>
            <span className={styles.webTitle}>{COPY.website.title}</span>
            <span className={styles.webUrl}>{COPY.website.display}</span>
          </span>
          <ExternalIcon className={styles.arrow} />
        </a>
        <a
          href={COPY.discord.url}
          target="_blank"
          rel="noopener"
          className={`${styles.webCard} ${styles.discord}`}
        >
          <span className={styles.webIcon}>
            {/* Discord mark, from Simple Icons (CC0) */}
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </span>
          <span className={styles.webText}>
            <span className={styles.webTitle}>{COPY.discord.title}</span>
            <span className={styles.webUrl}>{COPY.discord.display}</span>
          </span>
          <ExternalIcon className={styles.arrow} />
        </a>
      </section>
    </main>
  );
}
