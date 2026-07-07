import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Wrench } from "@phosphor-icons/react";
import UnderlinedHeading from "./ui/UnderlinedHeading";

const machines = [
  {
    naam: "Freesbank: Style BT-1500+ CNC",
    afbeelding: "/machines/bt1500.webp",
    specs: [
      { label: "X-as", waarde: "1500 mm" },
      { label: "Y-as", waarde: "650 mm" },
      { label: "Z-as", waarde: "700 mm" },
      { label: "Tafelafmeting", waarde: "1850 x 610 mm" },
      { label: "Max. tafelbelasting", waarde: "1000 kg" },
      { label: "Spindelopname", waarde: "BT 40 (SK/DIN 69871)" },
      { label: "Spindeltoerental", waarde: "6000 - 12000 rpm" },
      { label: "Gereedschapswisselaar", waarde: "24 posities" },
    ],
  },
  {
    naam: "Draaibank: Style 510 CNC",
    afbeelding: "/machines/cnc.webp",
    specs: [
      { label: "X-as", waarde: "1300 mm" },
      { label: "Z-as", waarde: "400 mm" },
      { label: "Tussen de centers", waarde: "1350 mm" },
      { label: "Draaibare diameter boven het bed", waarde: "510 mm" },
      { label: "Werkstuk tussen de centers", waarde: "600 kg" },
      { label: "Spindelgat", waarde: "80 mm" },
    ],
  },
  {
    naam: "Freesbank: Tos FGS 40t Plus",
    afbeelding: "/machines/freesbank.webp",
    specs: [
      { label: "Bouwjaar", waarde: "2002" },
      { label: "X-as", waarde: "1000 mm" },
      { label: "Y-as", waarde: "450 mm" },
      { label: "Z-as", waarde: "450 mm" },
      { label: "Tafelafmeting", waarde: "400 x 1400 mm" },
      { label: "Gewicht op bed", waarde: "800 kg" },
    ],
  },
  {
    naam: "Draaibank: Tarnow TUJ-50M",
    afbeelding: "/machines/draaibank.webp",
    specs: [
      { label: "Bouwjaar", waarde: "1992" },
      { label: "X-as", waarde: "1500 mm" },
      { label: "Z-as", waarde: "450 mm" },
      { label: "Tussen de centers", waarde: "1400 mm" },
      { label: "Draaibare diameter boven het bed", waarde: "560 mm" },
      { label: "Werkstukgewicht tussen de centers", waarde: "300 kg" },
      { label: "Spindelgat", waarde: "90 mm" },
      { label: "Draaibare diameter zonder bed", waarde: "800 mm" },
    ],
  },
  {
    naam: "Kolomboormachine: WMW BK 25",
    afbeelding: "/machines/kolomboor.webp",
    specs: [
      { label: "Bouwjaar", waarde: "1976" },
      { label: "Boorcapaciteit in staal", waarde: "40 mm" },
      { label: "Boorslag", waarde: "220 mm" },
      { label: "Afmeting tafel", waarde: "530 x 420 mm" },
      { label: "Verstelling van de kop", waarde: "280 mm" },
    ],
  },
  {
    naam: "Lintzaag",
    afbeelding: "/machines/zaag.webp",
    specs: [
      { label: "Zaagbladlengte", waarde: "3660 x 27 x 1 mm" },
      { label: "Zaagdoorsnede", waarde: "250 x 250 mm" },
    ],
  },
  {
    naam: "Taparm: MW-tech ETA2416",
    afbeelding: "/machines/taparm.webp",
    specs: [
      { label: "Bouwjaar", waarde: "2022" },
      { label: "Lengte", waarde: "1600 mm" },
      { label: "Opname", waarde: "M6 - M24" },
    ],
  },
  {
    naam: "3D-printer: Creality 3D Ender 3 V2",
    afbeelding: "/machines/printer.webp",
    specs: [
      { label: "Bouwjaar", waarde: "2021" },
      { label: "X-as", waarde: "220 mm" },
      { label: "Y-as", waarde: "220 mm" },
      { label: "Z-as", waarde: "250 mm" },
      { label: "Printvolume", waarde: "12 liter" },
      { label: "Diameter filament", waarde: "1.75 mm" },
      { label: "Nozzlemaat", waarde: "0,3 - 0,8 mm" },
      { label: "Bedtemperatuur", waarde: "0 - 100 °C" },
      { label: "Nozzletemperatuur", waarde: "0 - 250 °C" },
    ],
  },
];

function MachineImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-100 text-gray-400">
        <Wrench size={40} weight="light" />
        <span className="text-xs font-medium uppercase tracking-wide">
          Foto volgt
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Machinepark() {
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      aria-labelledby="machinepark-heading"
      id="machinepark"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl py-16 lg:max-w-7xl lg:py-28 px-6 xl:px-0">
        <div ref={introRef} className="max-w-3xl">
          <div
            style={{
              opacity: introInView ? 1 : 0,
              transform: introInView ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0s, transform 0.6s ease-out 0s",
            }}
          >
            <UnderlinedHeading>Machinepark</UnderlinedHeading>
          </div>
          <p
            className="mt-4 text-lg text-gray-900 font-light"
            style={{
              opacity: introInView ? 1 : 0,
              transform: introInView ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            Om maatwerk van hoog niveau te leveren, beschikken wij over een
            uitgebreid en modern machinepark. Van onze Style BT-1500+
            CNC-freesbank en Style 510 CNC-draaibank tot conventionele frees-,
            boor- en zaagmachines: hieronder vind je een overzicht van de
            machines waarmee wij jouw opdracht tot in de puntjes uitvoeren.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2"
        >
          {machines.map((machine, index) => (
            <div
              key={machine.naam}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60 shadow-sm"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100">
                <MachineImage
                  src={machine.afbeelding}
                  alt={`${machine.naam} bij BaKu metaalbewerking`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium tracking-tight text-bakublue">
                  {machine.naam}
                </h3>
                <dl className="mt-4 divide-y divide-gray-200/70 text-sm">
                  {machine.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-4 py-2"
                    >
                      <dt className="text-gray-500 font-light">{spec.label}</dt>
                      <dd className="shrink-0 text-right font-medium text-gray-900">
                        {spec.waarde}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
