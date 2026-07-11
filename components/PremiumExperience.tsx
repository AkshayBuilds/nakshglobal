"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PremiumExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".card",
          ".glass-card",
          "article",
          "form",
          "a[class*='rounded-2xl'][class*='border']",
          "div[class*='rounded-2xl'][class*='border']",
          "div[class*='rounded-xl'][class*='border']",
        ].join(",")
      )
    );

    cards.forEach((card) => {
      card.classList.add("premium-card-motion");
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    const interactive = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".btn-primary, .btn-outline, .btn-outline-white, button, a[href]"
      )
    );

    interactive.forEach((element) => {
      element.classList.add("premium-magnetic");
      element.addEventListener("pointermove", handleMagneticMove);
      element.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
      interactive.forEach((element) => {
        element.removeEventListener("pointermove", handleMagneticMove);
        element.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, [pathname]);

  return null;
}

function handlePointerMove(event: Event) {
  const pointer = event as PointerEvent;
  const element = pointer.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const x = ((pointer.clientX - rect.left) / rect.width) * 100;
  const y = ((pointer.clientY - rect.top) / rect.height) * 100;
  element.style.setProperty("--pointer-x", `${x}%`);
  element.style.setProperty("--pointer-y", `${y}%`);
}

function handleMagneticMove(event: Event) {
  const pointer = event as PointerEvent;
  const element = pointer.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const x = pointer.clientX - rect.left - rect.width / 2;
  const y = pointer.clientY - rect.top - rect.height / 2;
  element.style.setProperty("--magnetic-x", `${x * 0.08}px`);
  element.style.setProperty("--magnetic-y", `${y * 0.08}px`);
  handlePointerMove(event);
}

function handlePointerLeave(event: Event) {
  const element = event.currentTarget as HTMLElement;
  element.style.setProperty("--magnetic-x", "0px");
  element.style.setProperty("--magnetic-y", "0px");
  element.style.removeProperty("--pointer-x");
  element.style.removeProperty("--pointer-y");
}
