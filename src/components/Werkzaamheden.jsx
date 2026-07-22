import draaien2 from "../assets/draaien2.webp";
import frezen from "../assets/frezen.webp";
import boren from "../assets/boren.webp";
import zagen from "../assets/zagen.webp";
import brootsen from "../assets/brootsen.webp";
import draad from "../assets/draad.webp";
import UnderlinedHeading from "./ui/UnderlinedHeading";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import { useInView } from "react-intersection-observer";

const werkzaamheden = [
  {
    naam: "Draaien",
    href: "/diensten/cnc-draaien/",
    beschrijving:
      "Dankzij onze moderne CNC-draaibank kunnen wij een breed scala aan onderdelen produceren, van enkelstuks tot kleine series, met hoge precisie..",
  },
  {
    naam: "Frezen",
    href: "/diensten/frezen/",
    beschrijving:
      "Met onze robuuste conventionele freesbank kunnen wij diverse bewerkingen uitvoeren, zoals het frezen van spiebanen en het nauwkeurig boren van gaten op steekmaten.",
  },
  {
    naam: "Boren",
    href: "/diensten/boren/",
    beschrijving:
      "Boren tot Ø40 mm is mogelijk met onze krachtige kolomboormachine. Daarnaast kunnen wij ook nauwkeurig boren met onze CNC-draaibank en freesbank.",
  },
  {
    naam: "Zagen",
    href: "/diensten/zagen/",
    beschrijving:
      "Met onze lintzaag kunnen wij materialen zagen tot zeer grote afmetingen, met hoge nauwkeurigheid en efficiëntie.",
  },
  {
    naam: "Brootsen",
    href: "/diensten/brootsen/",
    beschrijving:
      "Wij brootsen met behulp van een hydraulische en elektrische pers, geschikt voor alle gangbare maten en toepassingen.",
  },
  {
    naam: "Draad tappen/snijden",
    href: "/diensten/draad-tappen-en-snijden/",
    beschrijving:
      "Draad tappen doen wij met een elektrische taparm tot M24. Daarnaast snijden wij zowel inwendige als uitwendige draad met onze CNC-draaibank.",
  },
];

export default function Werkzaamheden() {
  const { ref: werkzaamhedenRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: werkzaamhedenIntroRef, inView: werkzaamhedenIntroInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <>
      {/* Improved CSS animation */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
          
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
            width: fit-content;
            display: flex;
            flex-shrink: 0;
          }

          .product-container {
            overflow: hidden;
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
          }

          .product-slide {
            display: flex;
            width: auto;
            padding-right: 16px; /* Increase spacing between images */
            height: 100%;
            align-items: center;
          }
          
          .product-slide img {
            height: 180px; /* Larger base height */
            width: auto;
            object-fit: cover; /* Change back to cover for better appearance */
            max-width: none; /* Prevent image from being constrained */
          }
          
          @media (min-width: 1024px) {
            .product-slide img {
              height: 210px; /* Much larger height for desktop */
            }
          }
        `}
      </style>

      <section aria-labelledby="werkzaamheden-heading" id="werkzaamheden">
        <div className="relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 py-10 lg:py-28 lg:max-w-7xl lg:grid-cols-2 px-6 xl:px-0">
            <div className="">
              <div ref={werkzaamhedenIntroRef}>
                <div
                  style={{
                    opacity: werkzaamhedenIntroInView ? 1 : 0,
                    transform: werkzaamhedenIntroInView
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.6s ease-out 0s, transform 0.6s ease-out 0s",
                  }}
                >
                  <UnderlinedHeading>Werkzaamheden</UnderlinedHeading>
                </div>
                <p
                  className="mt-4 text-lg text-gray-900 font-light"
                  style={{
                    opacity: werkzaamhedenIntroInView ? 1 : 0,
                    transform: werkzaamhedenIntroInView
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
                  }}
                >
                  Wij zijn gespecialiseerd in het draaien en frezen van diverse
                  materialen, zowel op conventionele machines als met onze
                  moderne CNC-draaibank. Daarnaast voeren we ook zaag-, boor-,
                  broots- en perswerk uit. Dankzij deze mix van technieken
                  kunnen we flexibel en nauwkeurig inspelen op uiteenlopende
                  opdrachten.
                </p>
              </div>

              <dl
                ref={werkzaamhedenRef}
                className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
              >
                {werkzaamheden.map((werk, index) => (
                  <div
                    key={werk.naam}
                    className="border-t border-l-4 border-t-gray-200 border-l-transparent hover:border-l-bakublue transition-colors duration-200 pt-4 pl-4"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <dt className="text-bakublue text-lg font-medium tracking-tight">
                      <a href={werk.href} className="hover:underline">
                        {werk.naam}
                      </a>
                    </dt>
                    <dd className="mt-2 text-base text-gray-900 font-light">
                      {werk.beschrijving}{" "}
                      <a
                        href={werk.href}
                        className="whitespace-nowrap text-bakublue hover:underline"
                      >
                        Lees meer
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-10">
                <a
                  href="/diensten/"
                  className="text-bakublue font-medium hover:underline"
                >
                  Bekijk alle diensten →
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
              <img
                alt="Draaien"
                src={draaien2}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
              <img
                alt="Frezen"
                src={frezen}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
              <img
                alt="Boren"
                src={boren}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
              <img
                alt="Zagen"
                src={zagen}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
              <img
                alt="Brootsen"
                src={brootsen}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
              <img
                alt="Draad tappen/snijden"
                src={draad}
                className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
                loading="lazy"
                decoding="async"
                width="2174"
                height="1464"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-12 lg:pb-28 overflow-hidden">
        <div className="mx-auto">
          <div className="product-container">
            <div className="animate-infinite-scroll">
              {/* First set of products */}
              {[
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
              ].map((image, index) => (
                <div key={`first-${index}`} className="product-slide">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="object-cover"
                    loading="lazy"
                    decoding="async"
                    width="2600"
                    height="1750"
                  />
                </div>
              ))}

              {/* Duplicate set of products for seamless looping */}
              {[
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
              ].map((image, index) => (
                <div key={`second-${index}`} className="product-slide">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="object-cover"
                    loading="lazy"
                    decoding="async"
                    width="2600"
                    height="1750"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
