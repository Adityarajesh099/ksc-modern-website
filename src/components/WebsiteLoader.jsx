
import { useEffect, useState } from "react";
import "./WebsiteLoader.css";

export default function WebsiteLoader() {
  const [pageReady, setPageReady] = useState(false);
  const [minimumTimeDone, setMinimumTimeDone] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  // Keep the loader visible for at least 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimeDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Detect website loading
  useEffect(() => {
    const handleLoad = () => setPageReady(true);

    if (document.readyState === "complete") {
      setPageReady(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Hide loader after loading
  useEffect(() => {
    if (pageReady && minimumTimeDone) {
      setExiting(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [pageReady, minimumTimeDone]);

  if (!visible) return null;

  return (
    <div className={`website-loader ${exiting ? "loader-exit" : ""}`}>
      <div className="ksc-chasing-loader">
        <div className="ksc-square square-k">K</div>
        <div className="ksc-square square-s">S</div>
        <div className="ksc-square square-c">C</div>
      </div>
    </div>
  );
}
