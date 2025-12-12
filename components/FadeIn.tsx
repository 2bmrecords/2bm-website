"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const MotionDiv = motion.div as any; // sidestep weird MotionProps typing issues

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref as any, { once: true, margin: "-50px" });

    const getInitialProps = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 40 };
            case "down":
                return { opacity: 0, y: -40 };
            case "left":
                return { opacity: 0, x: 40 };
            case "right":
                return { opacity: 0, x: -40 };
            case "none":
            default:
                return { opacity: 0 };
        }
    };

    const getAnimateProps = () => {
        switch (direction) {
            case "up":
            case "down":
                return { opacity: 1, y: 0 };
            case "left":
            case "right":
                return { opacity: 1, x: 0 };
            case "none":
            default:
                return { opacity: 1 };
        }
    };

    return (
        <MotionDiv
            ref={ref}
            initial={getInitialProps()}
            animate={isInView ? getAnimateProps() : getInitialProps()}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </MotionDiv>
    );
}
