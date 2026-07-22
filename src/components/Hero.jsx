import { useState } from "react";
import { useInView } from "react-intersection-observer";
import frezenzw from "../assets/frezen-zw.webp";
import mainachtergrond from "../assets/main-achtergrond.webp";
import mainachtergrondgroot from "../assets/main-achtergrond-groot.webp";
import headerimage from "../assets/header-image.webp";
import {
  ChatsCircle,
  FacebookLogo,
  InstagramLogo,
  Lightbulb,
  Target,
} from "@phosphor-icons/react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = {
  pages: [
    { naam: "Werkzaamheden", href: "#werkzaamheden" },
    { naam: "Diensten", href: "/diensten/" },
    { naam: "Machinepark", href: "#machinepark" },
    { naam: "Over ons", href: "#over-ons" },
    { naam: "Contact", href: "#contact" },
  ],
};

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref: uspsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-8 pb-2 pt-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-lg p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="space-y-4 border-gray-200 px-8 py-6">
              {navigation.pages.map((page) => (
                <div key={page.naam} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {page.naam}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="sticky top-0 z-30 shadow-sm">
        <nav aria-label="Top">
          <div className="bg-bakublue">
            <div className="mx-auto flex py-2 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Nieuw: STYLE BT-1500+ CNC-freesbank! Meer precisie, meer
                capaciteit, we kunnen nu nog meer werk aan.
              </p>
            </div>
          </div>

          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden lg:flex lg:items-center">
                    <a href="/">
                      <span className="sr-only">BaKu metaalbewerking</span>
                      <img
                        alt="BaKu logo"
                        src={headerimage}
                        className="h-8 w-auto"
                        width="1920"
                        height="600"
                        fetchPriority="high"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    <PopoverGroup className="ml-10">
                      <div className="flex h-full justify-center space-x-10">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.naam}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-black hover:text-bakublue border-b-2 border-b-transparent hover:border-bakublue hover:border-b-2 px-4 tracking-wide pt-1"
                          >
                            {page.naam}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-ml-2 rounded-lg bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                  </div>

                  <a href="/" className="lg:hidden">
                    <span className="sr-only">BaKu metaalbewerking</span>
                    <img
                      alt="BaKu logo"
                      src={headerimage}
                      className="h-8 w-auto"
                      width="1920"
                      height="600"
                      fetchPriority="high"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-2 lg:space-x-4">
                        <div className="flex">
                          <a
                            href="https://www.facebook.com/bakumetaalbewerking/"
                            className="-m-2 p-2 text-gray-400 lg:text-gray-900 hover:text-gray-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="sr-only">Facebook</span>
                            <FacebookLogo
                              size={22}
                              className="text-gray-400 lg:text-gray-900"
                            />
                          </a>
                        </div>

                        <span
                          aria-hidden="true"
                          className="mx-4 h-6 w-px bg-gray-300 lg:bg-gray-400 lg:mx-6"
                        />

                        <div className="flex">
                          <a
                            href="https://www.instagram.com/bakumetaalbewerking/"
                            className="-m-2 p-2 text-gray-400 lg:text-gray-900 hover:text-gray-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="sr-only">Instagram</span>
                            <InstagramLogo
                              size={22}
                              className="text-gray-400 lg:text-gray-900"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
                    Met onze Style 510 CNC-draaibank leveren we precisiewerk van
                    hoog niveau. Daarnaast zijn we gespecialiseerd in
                    conventioneel draaien, frezen, zagen, boren, brootsen en
                    persen van diverse materialen. Geen uitdaging is te groot.
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
