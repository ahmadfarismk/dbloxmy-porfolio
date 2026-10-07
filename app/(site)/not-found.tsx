import { styles } from "next/dist/client/components/styles/access-error-styles";

/**
 * Next's default 404, rendered inside the site layout (navbar + footer) exactly
 * as unmatched URLs looked before the site and /quicklinks were split into
 * separate root layouts. Same markup and styles as Next's built-in fallback,
 * minus its <title>, so the tab keeps the site title as it did before.
 * Replace with a custom 404 whenever you like.
 */
export default function NotFound() {
  return (
    <div style={styles.error}>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}",
          }}
        />
        <h1 className="next-error-h1" style={styles.h1}>
          404
        </h1>
        <div style={styles.desc}>
          <h2 style={styles.h2}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
