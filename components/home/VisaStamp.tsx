"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface StampData {
  id: string;
  country: string;
  code: string;
  category: "STUDY" | "WORK" | "VISIT" | "RESIDENCE";
  subtitle: string;
  date: string;
  color: "#1F4E8C" | "#B3262E" | "#2F7D5B";
  rotation: number;
  xPercent: number;
  yPercent: number;
  shape: "hexagon" | "oval" | "rect" | "circle" | "octagon";
}

interface VisaStampProps {
  stamp: StampData;
  isLatest: boolean;
}

export default function VisaStamp({ stamp, isLatest }: VisaStampProps) {
  const shouldReduceMotion = useReducedMotion();
  const filterId = useMemo(() => `ink-bleed-${stamp.id}`, [stamp.id]);

  // Entrance animation for newly pressed stamp (THE ONLY ANIMATION)
  const initial = shouldReduceMotion || !isLatest
    ? { scale: 1, opacity: 0.92, rotate: stamp.rotation }
    : { scale: 1.18, opacity: 0, rotate: stamp.rotation - 4 };

  const animate = {
    scale: 1,
    opacity: 0.92,
    rotate: stamp.rotation,
  };

  const transition = shouldReduceMotion || !isLatest
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      style={{
        position: "absolute",
        left: `${stamp.xPercent}%`,
        top: `${stamp.yPercent}%`,
        transformOrigin: "center center",
      }}
      className="pointer-events-none select-none z-10 w-[140px] sm:w-[155px] -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        viewBox="0 0 160 110"
        className="w-full h-auto drop-shadow-[0_1px_1px_rgba(20,33,61,0.08)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle ink bleed / rough edge texture */}
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        <g filter={`url(#${filterId})`} stroke={stamp.color} fill={stamp.color}>
          {stamp.shape === "rect" && (
            <>
              {/* Double border rectangle with clipped/notched corners */}
              <rect
                x="4"
                y="4"
                width="152"
                height="102"
                rx="4"
                fill="none"
                strokeWidth="2.5"
                strokeDasharray="140 2 8 2"
              />
              <rect
                x="9"
                y="9"
                width="142"
                height="92"
                rx="2"
                fill="none"
                strokeWidth="1"
                opacity="0.85"
              />
            </>
          )}

          {stamp.shape === "oval" && (
            <>
              <ellipse
                cx="80"
                cy="55"
                rx="74"
                ry="48"
                fill="none"
                strokeWidth="2.5"
              />
              <ellipse
                cx="80"
                cy="55"
                rx="69"
                ry="43"
                fill="none"
                strokeWidth="1"
                strokeDasharray="6 2"
                opacity="0.8"
              />
            </>
          )}

          {stamp.shape === "hexagon" && (
            <>
              <polygon
                points="24,6 136,6 154,55 136,104 24,104 6,55"
                fill="none"
                strokeWidth="2.5"
              />
              <polygon
                points="27,10 133,10 149,55 133,100 27,100 11,55"
                fill="none"
                strokeWidth="1"
                strokeDasharray="5 2"
                opacity="0.8"
              />
            </>
          )}

          {stamp.shape === "circle" && (
            <>
              <circle
                cx="80"
                cy="55"
                r="49"
                fill="none"
                strokeWidth="2.5"
              />
              <circle
                cx="80"
                cy="55"
                r="44"
                fill="none"
                strokeWidth="1"
                strokeDasharray="8 3"
                opacity="0.8"
              />
            </>
          )}

          {stamp.shape === "octagon" && (
            <>
              <polygon
                points="30,5 130,5 154,29 154,81 130,105 30,105 6,81 6,29"
                fill="none"
                strokeWidth="2.5"
              />
              <polygon
                points="33,9 127,9 149,31 149,79 127,101 33,101 11,79 11,31"
                fill="none"
                strokeWidth="1"
                opacity="0.8"
              />
            </>
          )}

          {/* Consular Stamp Text Content */}
          <text
            x="80"
            y="27"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="1.2"
            fill={stamp.color}
            stroke="none"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {stamp.country.toUpperCase()} CONSULAR
          </text>

          {/* Center Visa Category Banner */}
          <line
            x1="22"
            y1="34"
            x2="138"
            y2="34"
            strokeWidth="0.8"
            opacity="0.6"
          />

          <text
            x="80"
            y="52"
            textAnchor="middle"
            fontSize="14"
            fontWeight="900"
            letterSpacing="1.8"
            fill={stamp.color}
            stroke="none"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {stamp.category}
          </text>

          <text
            x="80"
            y="65"
            textAnchor="middle"
            fontSize="8"
            fontWeight="800"
            letterSpacing="1.5"
            fill={stamp.color}
            stroke="none"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            ★ APPROVED ★
          </text>

          <line
            x1="22"
            y1="73"
            x2="138"
            y2="73"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Post and Date Details */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fontSize="7"
            fontWeight="600"
            letterSpacing="1"
            fill={stamp.color}
            stroke="none"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            POST: AHMEDABAD (AMD)
          </text>

          <text
            x="80"
            y="96"
            textAnchor="middle"
            fontSize="6.5"
            fontWeight="600"
            letterSpacing="0.8"
            fill={stamp.color}
            stroke="none"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            {stamp.date} · VERIFIED
          </text>
        </g>
      </svg>
    </motion.div>
  );
}
