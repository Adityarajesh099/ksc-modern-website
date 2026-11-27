
import { useEffect, useState } from "react";
import "./WebsiteLoader.css";

export default function WebsiteLoader() {
  const [progress, setProgress] = useState(0);
  const [pageReady, setPageReady] = useState(false);
  const [minimumTimeDone, setMinimumTimeDone] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  // Minimum loader display time
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimeDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Progress estimate while critical assets load
  useEffect(() => {
    if (pageReady) {
      setProgress(100);
      return;
    }

    const timer = setInterval(() => {
      setProgress((current) => {
        if (current < 30) return Math.min(current + 2, 30);
        if (current < 70) return Math.min(current + 1, 70);
        if (current < 90) return Math.min(current + 0.3, 90);
        return current;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [pageReady]);

  // Wait for the initial homepage content
  useEffect(() => {
    let cancelled = false;

    const withTimeout = (promise, ms = 8000) =>
      Promise.race([
        promise,
        new Promise((resolve) => setTimeout(resolve, ms)),
      ]);

    const waitForImage = (img) => {
      if (!img) return Promise.resolve();

      if (img.complete) {
        return img.decode?.().catch(() => {}) || Promise.resolve();
      }

      return withTimeout(
        new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        })
      );
    };

    const waitForVideo = (video) => {
      if (!video) return Promise.resolve();

      if (video.readyState >= 2) return Promise.resolve();

      return withTimeout(
        new Promise((resolve) => {
          video.addEventListener("loadeddata", resolve, { once: true });
          video.addEventListener("canplay", resolve, { once: true });
          video.addEventListener("error", resolve, { once: true });
        }),
        10000
      );
    };

    const prepareHomepage = async () => {
      // Wait for the document
      if (document.readyState !== "complete") {
        await withTimeout(
          new Promise((resolve) => {
            window.addEventListener("load", resolve, { once: true });
          }),
          10000
        );
      }

      if (cancelled) return;

      // Wait until the homepage hero exists
      const waitForHero = () =>
        new Promise((resolve) => {
          const findHero = () => {
            const hero = document.querySelector(".hero");

            if (hero) {
              observer.disconnect();
              resolve(hero);
            }
          };

          const observer = new MutationObserver(findHero);
          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });

          findHero();
        });

      const hero = await withTimeout(waitForHero(), 10000);

      if (cancelled) return;

      if (hero) {
        // Wait for the initial hero video
        const video = hero.querySelector("video");
        await waitForVideo(video);

        if (cancelled) return;

        // Wait for the first hero image
        const firstImage = hero.querySelector(".hero-slide");
        await waitForImage(firstImage);
      }

      if (cancelled) return;

      // Wait for fonts
      if (document.fonts?.ready) {
        await withTimeout(document.fonts.ready, 5000);
      }

      if (cancelled) return;

      // Allow homepage to paint
      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      if (!cancelled) {
        setPageReady(true);
      }
    };

    prepareHomepage();

    return () => {
      cancelled = true;
    };
  }, []);

  // Exit when the homepage is ready
  useEffect(() => {
    if (!pageReady || !minimumTimeDone || progress !== 100) return;

    const timer = setTimeout(() => {
      setExiting(true);
    }, 300);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [pageReady, minimumTimeDone, progress]);

  if (!visible) return null;

  return (
    <div className={`website-loader ${exiting ? "loader-exit" : ""}`}>
      <div className="loader-content">

        <div className="ksc-chasing-loader">
          <div className="ksc-square square-k">K</div>
          <div className="ksc-square square-s">S</div>
          <div className="ksc-square square-c">C</div>
        </div>

        <div className="ksc-progress-container">
          <div className="ksc-progress-info">
            <span>LOADING</span>
            <strong>{Math.floor(progress)}%</strong>
          </div>

          <div className="ksc-progress-track">
            <div
              className="ksc-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="ksc-progress-footer">
            <span>{pageReady ? "READY" : "PLEASE WAIT..."}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
