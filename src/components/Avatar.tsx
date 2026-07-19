"use client";

import { useEffect, useState } from "react";

/** Shows an initials monogram until a real photo at `src` loads, then swaps to it.
 *  No broken-image state — drop /public/avatar.jpg and it appears, nicely cropped. */
export function Avatar({ src, initials }: { src: string; initials: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <div className="about__avatar" aria-hidden>
      {loaded ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={124} height={124} />
      ) : (
        initials
      )}
    </div>
  );
}
