import draaien2 from "../assets/draaien2.webp";
import frezen from "../assets/frezen.webp";
import boren from "../assets/boren.webp";
import zagen from "../assets/zagen.webp";
import brootsen from "../assets/brootsen.webp";
import draad from "../assets/draad.webp";
import UnderlinedHeading from "./ui/UnderlinedHeading";
import DienstKaart from "./diensten/DienstKaart";
import { diensten } from "./diensten/dienstenData";
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

const collage = [
  { src: draaien2, alt: "Draaien" },
  { src: frezen, alt: "Frezen" },
  { src: boren, alt: "Boren" },
  { src: zagen, alt: "Zagen" },
  { src: brootsen, alt: "Brootsen" },
  { src: draad, alt: "Draad tappen/snijden" },
];

const producten = [
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
];

export default function Diensten() {
  const { ref: kaartenRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: introRef, inView: introInView } = useInView({
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

      <section aria-labelledby="diensten-heading" id="diensten">
        <div className="relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 py-10 lg:py-28 lg:max-w-7xl lg:grid-cols-2 px-6 xl:px-0">
            <div className="">
              <div ref={introRef}>
                <div
                  style={{
                    opacity: introInView ? 1 : 0,
                    transform: introInView
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.6s ease-out 0s, transform 0.6s ease-out 0s",
                  }}
                >
                  <UnderlinedHeading>Diensten</UnderlinedHeading>
                </div>
                <p
                  className="mt-4 text-lg text-gray-900 font-light"
                  style={{
                    opacity: introInView ? 1 : 0,
                    transform: introInView
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
                  }}
                >
                  Wij zijn gespecialiseerd in het draaien en frezen van diverse
                  materialen, met onze moderne CNC-draaibank en CNC-freesbank en
                  een conventionele draaibank. Daarnaast voeren we ook zaag-,
                  boor-, broots- en perswerk uit. Dankzij deze mix van
                  technieken kunnen we flexibel en nauwkeurig inspelen op
                  uiteenlopende opdrachten.
                </p>
              </div>

              <div
                ref={kaartenRef}
                className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
              >
                {diensten.map((dienst, index) => (
                  <div
                    key={dienst.slug}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <DienstKaart dienst={dienst} headingAs="h3" />
                  </div>
                ))}
              </div>

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
              {collage.map((foto) => (
                <img
                  key={foto.alt}
                  alt={foto.alt}
                  src={foto.src}
                  className="bg-gray-100 opacity-90 shadow-xl rounded-lg"
                  style={{ filter: "brightness(0.95) contrast(0.95)" }}
                  loading="lazy"
                  decoding="async"
                  width="2174"
                  height="1464"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-12 lg:pb-28 overflow-hidden">
        <div className="mx-auto">
          <div className="product-container">
            <div className="animate-infinite-scroll">
              {/* First set of products */}
              {producten.map((image, index) => (
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
              {producten.map((image, index) => (
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
