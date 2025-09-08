import werkplaats from "../assets/werkplaats.webp";
import bartzw from "../assets/bart-zw.webp";
import DiagonalButton from "./ui/DiagonalButton";
import UnderlinedHeading from "./ui/UnderlinedHeading";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatValue = ({ value, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const current = Math.floor(percentage * value);
      setDisplayValue(current);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, inView]);

  const formattedValue = displayValue.toLocaleString("nl-NL");

  const suffix = " +";

  return (
    <>
      {formattedValue}
      {suffix}
    </>
  );
};

export default function OverOns() {
  const stats = [
    { id: 1, name: "Hoogwaardige onderdelen opgeleverd", value: 10000 },
    { id: 2, name: "Tevreden en terugkerende klanten", value: 50 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aboutTextRef, inView: aboutTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="relative overflow-hidden mt-16 lg:mt-8">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden">
            <img
              alt=""
              src={werkplaats}
              className="size-full object-cover bg-gray-100 opacity-90 shadow-xl"
            />
          </div>
          <div className="absolute inset-0 bg-white/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25" />
        </div>

        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center pt-32 text-center"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-3xl font-bold tracking-tight text-bakublue sm:text-4xl lg:text-5xl"
            >
              Wat kunnen wij voor u betekenen?
            </h2>
            <p className="mx-auto mt-4 text-base text-gray-900">
              Neem contact op via{" "}
              <span className="font-bold">+31629425926</span> of{" "}
              <span className="font-bold">info@bakumetaal.nl</span> – we helpen
              u graag snel verder.
            </p>
            <DiagonalButton href="tel:+31629425926" className="mt-6 w-auto">
              Neem telefonisch contact op
            </DiagonalButton>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-7xl py-16 lg:pt-32 lg:pb-24" id="over-ons">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="px-6 xl:px-0">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-left mb-8">
                <span className="relative whitespace-nowrap text-bakublue">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-400/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative"></span>
                </span>
              </h2>
              <UnderlinedHeading>Over ons</UnderlinedHeading>

              <div ref={aboutTextRef}>
                <h2
                  className="text-bakublue my-3 text-lg font-medium tracking-tight"
                  style={{
                    opacity: aboutTextInView ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out 0s",
                  }}
                >
                  Wie of wat is BaKu metaalbewerking?
                </h2>
                <p
                  className="my-3 text-base text-gray-900 font-light"
                  style={{
                    opacity: aboutTextInView ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out 0.1s",
                  }}
                >
                  BaKu Metaalbewerking, opgericht op 1 januari 2022, combineert
                  een levenslange passie voor metaalbewerking met vakmanschap en
                  ervaring. We bewerken materialen zoals staal, rvs, aluminium,
                  brons en diverse kunststoffen met behulp van frees- en
                  draaibanken en hebben inmiddels honderden producten op maat
                  geleverd. Klantgerichtheid en snelle levering staan centraal
                  in ons werk.
                </p>
                <h2
                  className="text-bakublue my-3 text-lg font-medium tracking-tight"
                  style={{
                    opacity: aboutTextInView ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out 0.2s",
                  }}
                >
                  Even voorstellen, Bart van Kuijk, eigenaar van BaKu
                  metaalbewerking
                </h2>
                <p
                  className="my-3 text-base text-gray-900 font-light"
                  style={{
                    opacity: aboutTextInView ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out 0.3s",
                  }}
                >
                  Sinds mijn jeugd heb ik een passie voor techniek. Na de
                  middelbare school rondde ik in 2014 de opleidingen Verspaner
                  en Constructiewerker aan het Koning Willem I College in twee
                  jaar af. Daarna behaalde ik bij het SOMA College de
                  diploma&apos;s Allround Monteur en Technicus Mobiele
                  Werktuigen. Met deze kennis startte ik mijn eigen onderneming,
                  BaKu Metaalbewerking, en maakte ik van mijn passie mijn
                  beroep.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                alt=""
                src={bartzw}
                className="aspect-[3/2] w-full object-cover"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pb-24 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl
            ref={ref}
            className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2"
          >
            {stats.map((stat) => {
              return (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base text-gray-900 font-light">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-bakublue sm:text-5xl">
                    <StatValue value={stat.value} inView={inView} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </>
  );
}
