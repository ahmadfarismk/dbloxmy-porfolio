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
};

const GAMES = [
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
        <div className={styles.stack}>
          {GAMES.map((game, i) => (
            <a
              key={game.key}
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
                priority={i === 0}
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
      </section>
    </main>
  );
}
