import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-24">
      <div className="relative h-[calc(100vh-96px)] bg-white">
        <section className="relative h-full w-full pb-8">
          {/* BACKGROUND VIDEO */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
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
                className="w-[80%] md:max-w-[400px] h-auto object-contain invert"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
                priority
              />
            </FadeIn>
          </div>

          {/* TAGLINE */}
          <div className="absolute inset-x-0 bottom-10 z-20 flex justify-center items-center">
            <FadeIn delay={0.4} direction="up">
              <p className="text-sm md:text-base tracking-[0.35em] uppercase text-black text-center font-medium whitespace-nowrap">
                THE HOME FOR ARTISTS WHO DEFINE TODAY&apos;S SOUND.
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </main>
  );
}
