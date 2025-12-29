import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">

        {/* Header */}
        <FadeIn className="mb-16 md:mb-24" direction="down">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">ABOUT</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Championing artists who define today&apos;s sound.
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="max-w-4xl">
          <FadeIn delay={0.2} direction="up">
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-neutral-800">
              <p>
                <span className="font-semibold">2BM</span> is a record company focused on supporting and developing the career&apos;s of tomorrow&apos;s defining artists and shaping today&apos;s sound. Music is the backbone of life and culture, and the artists who create authentically deserve to shine globally.
              </p>

              <p>
                Our purpose is to champion and partner with visionary creatives who set the pace for where music is headed, giving them support across recorded music, film, brand partnerships, visual storytelling, and building meaningful artist-to-fan connections. Real artistry deserves to be everywhere - woven into the world ubiquitously.
              </p>
            </div>
          </FadeIn>

          {/* Values Section */}
          {/* Values Section — Bolder Grid */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-20 md:mt-32 border-t border-neutral-200 pt-12 md:pt-20">
              <div className="grid md:grid-cols-3 gap-12 md:gap-x-20">
                {/* 01 VISION */}
                <div className="group">
                  <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-4 text-black">VISION</h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    To elevate artists who push boundaries and redefine what&apos;s possible in music and culture.
                  </p>
                </div>

                {/* 02 MISSION */}
                <div className="group">
                  <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-4 text-black">MISSION</h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    Provide comprehensive support across all aspects of an artist&apos;s career, from creation to global reach.
                  </p>
                </div>

                {/* 03 VALUES */}
                <div className="group">
                  <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-4 text-black">VALUES</h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    Authenticity, innovation, and partnership. We believe real artistry deserves to be ubiquitous.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>


        </div>
      </div>
    </main>
  );
}
