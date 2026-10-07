import { notFound } from "next/navigation";

/**
 * The site and /quicklinks use separate root layouts, so there is no
 * top-level layout to wrap unmatched URLs. This catch-all routes them into the
 * (site) group, so the 404 keeps the site's navbar, footer and styling.
 * Real routes always take priority over a catch-all.
 */
export default function CatchAll() {
  notFound();
}
