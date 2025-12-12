import { useRef, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mobile (sometimes requires explicit play formatting)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  }, []);

  return (
    <main className="-mt-24">
      <div className="relative h-[calc(100vh-96px)] bg-white">
        <section className="relative h-full w-full pb-8">
          {/* BACKGROUND VIDEO */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* BOTTOM FADE */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-[2px] z-10" />

          {/* TAGLINE */}

          {/* LOGO */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-center items-center">
            <FadeIn delay={0.2} direction="up">
              <Image
                src="/logo.png"
                alt="Two Biquitous Music"
                width={500}
                height={100}
                className="max-w-[400px] h-auto object-contain invert"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
                priority
              />
            </FadeIn>
          </div>

          {/* TAGLINE */}
          <div className="absolute inset-x-0 bottom-10 z-20 flex justify-center items-center px-4">
            <FadeIn delay={0.4} direction="up">
              <p className="text-sm md:text-base tracking-[0.25em] md:tracking-[0.35em] uppercase text-black text-center font-medium md:whitespace-nowrap max-w-[90vw] md:max-w-none mx-auto text-balance">
                THE HOME FOR ARTISTS WHO DEFINE TODAY&apos;S SOUND.
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
