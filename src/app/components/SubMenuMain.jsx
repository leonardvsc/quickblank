"use client";

import { useEffect, useRef, useState } from "react";
import { LINKS_DATA } from "./MainLinks";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const SubMenuMain = () => {
  const menuLinks = Object.entries(LINKS_DATA).map(([key, section]) => ({
    name: section.title,
    href: `#${key}`,
  }));

  const containerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // --- DRAG STATE ---
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const movedRef = useRef(false);

  // ---------------------
  // |     CHEVRONS      |
  // ---------------------
  const updateScrollIndicators = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollNext = () => {
    containerRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    containerRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  // Detectar scroll e resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollIndicators();

    const onScroll = () => updateScrollIndicators();
    const onResize = () => updateScrollIndicators();

    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ---------------------
  // |     DRAG LOGIC     |
  // ---------------------
  const startDrag = (clientX) => {
    const el = containerRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    setIsDragging(true);

    startXRef.current = clientX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    movedRef.current = false;

    el.classList.add("active-grabbing");
  };

  const moveDrag = (clientX) => {
    if (!isDraggingRef.current) return;

    const el = containerRef.current;
    if (!el) return;

    const x = clientX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;

    if (Math.abs(x - startXRef.current) > 5) movedRef.current = true;

    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const endDrag = () => {
    const el = containerRef.current;
    el?.classList.remove("active-grabbing");

    isDraggingRef.current = false;
    setIsDragging(false);

    setTimeout(() => (movedRef.current = false), 50);
  };

  // Mouse + Touch global events
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      moveDrag(e.pageX);
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      endDrag();
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX);
    };

    const onTouchEnd = () => {
      if (!isDraggingRef.current) return;
      endDrag();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: false });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handleLinkClick = (e) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="sticky top-20 z-40 mx-auto mb-12 max-w-7xl px-6">
      {/* LEFT CHEVRON */}
      {canScrollLeft && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-50 -translate-y-1/2 rounded-full p-1 text-white transition"
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>
      )}

      {/* SCROLL AREA */}
      <div className="flex w-full justify-center">
        <div
          ref={containerRef}
          className="no-scrollbar flex cursor-grab select-none gap-1 overflow-x-auto whitespace-nowrap rounded-full border border-white/10 bg-[#0a0a0a]/80 p-1 shadow-xl shadow-black/50 backdrop-blur-xl active:cursor-grabbing"
          onMouseDown={(e) => e.button === 0 && startDrag(e.pageX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onDragStart={(e) => e.preventDefault()}
        >
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="inline-block rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT CHEVRON */}
      {canScrollRight && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-50 -translate-y-1/2 rounded-full p-1 text-white transition"
        >
          <FaChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
