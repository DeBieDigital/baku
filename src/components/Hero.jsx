import { useInView } from "react-intersection-observer";
import frezenzw from "../assets/frezen-zw.webp";
import mainachtergrond from "../assets/main-achtergrond.webp";
import mainachtergrondgroot from "../assets/main-achtergrond-groot.webp";
import { ChatsCircle, Lightbulb, Target } from "@phosphor-icons/react";
import Header from "./Header";

const usps = [
  {
    naam: "Korte lijntjes",
    imageSrc: <ChatsCircle size={48} color="#065495" />,
    beschrijving:
      "Je hebt altijd rechtstreeks contact met de persoon die aan jouw opdracht werkt. Dat zorgt voor korte lijnen, transparantie en een persoonlijke aanpak.",
  },
  {
    naam: "Kwaliteit",
    imageSrc: <Target size={48} color="#065495" />,
    beschrijving:
      "We werken met de grootste zorg aan jouw opdracht, zodat je altijd verzekerd bent van topkwaliteit.",
  },
  {
    naam: "Flexibiliteit",
    imageSrc: <Lightbulb size={48} color="#065495" />,
    beschrijving:
      "Flexibiliteit is belangrijk in elke samenwerking. Het aanbod wordt afgestemd op de wensen en behoeften van de klant, met ruimte voor maatwerk en overleg.",
  },
];

export default function Hero() {
  const { ref: uspsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      <Header />
      <main>
        <div
          aria-hidden="true"
          className="absolute h-[200%] w-full lg:hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom,
                rgba(255,255,255,0) 50%,
                rgba(255,255,255,1) 100%),
                  url(${mainachtergrondgroot})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute h-[90%] w-full hidden lg:block"
          style={{
            backgroundImage: `linear-gradient(to bottom,
                rgba(255,255,255,0) 50%,
                rgba(255,255,255,1) 100%),
                  url(${mainachtergrond})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="relative">
          <div className="mx-auto max-w-7xl py-16 lg:py-24">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                <div className="px-6 xl:px-0">
                  <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl text-left">
                    <span className="relative whitespace-nowrap text-bakublue">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-400/70"
                        preserveAspectRatio="none"
                      >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                      </svg>
                      <span className="relative">Maatwerk</span>
                    </span>{" "}
                    in draaien en frezen van metaal.
                  </h1>
                  <p className="mt-4 text-lg text-gray-900 font-light">
                    Met onze Style 510 CNC-draaibank en Style BT-1500+
                    CNC-freesbank leveren we precisiewerk van hoog niveau.
                    Daarnaast zijn we gespecialiseerd in conventioneel draaien,
                    zagen, boren, brootsen en persen van diverse materialen.
                    Geen uitdaging is te groot.
                  </p>
                </div>

                {/* Optimized image with picture element for responsive images */}
                <picture className="rounded-xl overflow-hidden block">
                  <source
                    srcSet={`${frezenzw} 1200w`}
                    type="image/webp"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <img
                    src={frezenzw}
                    alt="Metaalbewerking voorbeeld"
                    className="aspect-[3/2] w-full object-cover"
                    style={{
                      maxHeight: "400px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    fetchPriority="high"
                    width="2174"
                    height="1464"
                  />
                </picture>
              </div>

              <div
                ref={uspsRef}
                className="mt-16 md:mt-24 lg:mt-32 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-3 px-6 xl:px-0"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 1s ease-out, transform 1s ease-out",
                }}
              >
                {usps.map((usp) => (
                  <div
                    key={usp.naam}
                    className="sm:flex lg:block rounded-2xl border border-gray-100 bg-gray-50/60 p-6"
                  >
                    <div className="sm:shrink-0">
                      {/* Only one instance of the icon */}
                      {usp.imageSrc}
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-lg text-gray-900 font-medium tracking-tight">
                        {usp.naam}
                      </h3>
                      <p className="mt-2 text-lg text-gray-900 font-light">
                        {usp.beschrijving}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
