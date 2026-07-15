"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  
  const preloadedSources = useRef<Set<string>>(new Set());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Minimum display time of 1.5 seconds to ensure smooth UI animation
    const minTimePromise = new Promise((resolve) => setTimeout(resolve, 1500));

    let isDone = false;
    const watchedImages = new Set<HTMLImageElement>();

    const checkImages = () => {
      if (isDone) return;

      // Scan all images in the DOM
      const allImgs = Array.from(document.querySelectorAll("img"));
      
      // Filter only images that have a valid src and are not inline data URIs
      const imgs = allImgs.filter((img) => {
        const src = img.getAttribute("src");
        return src && !src.startsWith("data:");
      });

      if (imgs.length === 0) {
        setProgress(100);
        if (document.readyState === "complete") {
          isDone = true;
        }
        return;
      }

      let loadedCount = 0;
      imgs.forEach((img) => {
        // Bypass lazy-loading by changing to eager
        if (img.loading === "lazy") {
          img.loading = "eager";
        }

        // Programmatically preload source to force background fetch
        const src = img.currentSrc || img.src;
        if (src && !src.startsWith("data:")) {
          if (!preloadedSources.current.has(src)) {
            preloadedSources.current.add(src);
            const tempImg = new window.Image();
            tempImg.src = src;
          }
        }

        // If image is complete (successfully loaded or errored/broken), count as done
        if (img.complete) {
          loadedCount++;
        } else {
          if (!watchedImages.has(img)) {
            watchedImages.add(img);
            const onImageLoad = () => {
              watchedImages.delete(img);
              checkImages();
              img.removeEventListener("load", onImageLoad);
              img.removeEventListener("error", onImageLoad);
            };
            img.addEventListener("load", onImageLoad);
            img.addEventListener("error", onImageLoad);
          }
        }
      });

      const percentage = Math.round((loadedCount / imgs.length) * 100);
      setProgress((prev) => Math.max(prev, percentage));

      if (loadedCount === imgs.length && document.readyState === "complete") {
        isDone = true;
      }
    };

    // Initial check
    checkImages();

    // Listen to document ready state changes
    const handleStateChange = () => {
      checkImages();
    };
    document.addEventListener("readystatechange", handleStateChange);

    // Watch for dynamically added images during hydration/mounting
    const observer = new MutationObserver(() => {
      checkImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Periodic check interval in case events are missed
    const interval = setInterval(checkImages, 100);

    // Coordinate the loading completion with minimum display time
    Promise.all([
      minTimePromise,
      new Promise<void>((resolve) => {
        const checkInterval = setInterval(() => {
          if (isDone || (document.readyState === "complete" && progress === 100)) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 50);
      }),
    ]).then(() => {
      setProgress(100);
      
      // Delay to let the "Ready 100%" state settle in UI
      setTimeout(() => {
        setShouldRender(false);
        
        // Disable scroll lock after the fade-out exit animation (0.6s) completes
        setTimeout(() => {
          setIsScrollLocked(false);
        }, 600);
      }, 300);
    });

    return () => {
      isDone = true;
      document.removeEventListener("readystatechange", handleStateChange);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [isMounted]);

  // Lock scrolling (both wheel and touch) while the loading overlay is active
  useEffect(() => {
    if (isScrollLocked) {
      const preventScroll = (e: Event) => {
        e.preventDefault();
      };
      
      // Add passive: false to allow e.preventDefault()
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      
      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }
  }, [isScrollLocked]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-deepblue text-white select-none pointer-events-auto"
        >
          {/* Glowing background shapes for a premium look */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brightblue/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brightblue/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Loader Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xs sm:max-w-md w-full px-8 text-center pointer-events-none">
            {/* Pulsing and scaling logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: [1, 1.04, 1],
                opacity: 1,
              }}
              transition={{
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.6,
                },
              }}
              className="mb-6"
            >
              <Image
                src="/logohome.png"
                alt="Runnars Logo"
                width={112}
                height={70}
                className="object-contain filter drop-shadow-[0_0_15px_rgba(21,112,239,0.4)]"
                priority
              />
            </motion.div>

            {/* Title / Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base font-bold tracking-[0.2em] text-gray uppercase mb-1"
            >
              RUNNARS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-lighttext mb-8"
            >
              Wellness for You. Wellness for Your Pet.
            </motion.p>

            {/* Rolling Spinner */}
            <div className="relative w-14 h-14 mb-5 flex items-center justify-center">
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-brightblue/10 border-t-brightblue filter drop-shadow-[0_0_8px_rgba(21,112,239,0.5)]"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "linear",
                }}
              />
            </div>

            {/* Status text */}
            <div className="text-[10px] text-gray uppercase tracking-widest font-semibold">
              {progress < 100 ? "Loading assets" : "Ready"}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
