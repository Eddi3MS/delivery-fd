'use client'

export default function Home() {
  return (
    <>
      <section className="min-h-[280px] md:h-[70vh] flex flex-col items-center justify-center gap-8 relative pb-4 md:pb-0 isolate px-4">
        <div
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dcag6rujo/image/upload/v1718214020/guochjuombevr38sayc1.jpg)',
          }}
          className="absolute left-0 right-0 top-0 bg-cover bg-[90%_90%] h-full z-0"
        />

        <h1 className="text-5xl md:text-8xl font-extrabold text-white drop-shadow-2xl text-center">
          O melhor burger
          <br className="lg:hidden" /> da cidade
        </h1>
      </section>
    </>
  )
}

