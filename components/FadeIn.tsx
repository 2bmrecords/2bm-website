"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
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
    const ref = useRef(null);
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
        <motion.div
            ref={ref}
            initial={getInitialProps()}
            animate={isInView ? getAnimateProps() : getInitialProps()}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Smooth custom easing
            }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
