import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import DiagonalButton from "../ui/DiagonalButton";
import { Envelope, Phone } from "@phosphor-icons/react";
import { dienstBySlug } from "./dienstenData";

function Breadcrumb({ naam }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex flex-wrap gap-2">
        <li>
          <a href="/" className="hover:text-bakublue">
            Home
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <a href="/diensten/" className="hover:text-bakublue">
            Diensten
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-gray-900">
          {naam}
        </li>
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  naam: PropTypes.string.isRequired,
};

function MachineCard({ machine }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60 shadow-sm">
      {machine.afbeelding && (
        <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100">
          <img
            src={machine.afbeelding}
            alt={`${machine.naam} bij BaKu metaalbewerking`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium tracking-tight text-bakublue">
          {machine.naam}
        </h3>
        {machine.specs && (
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
        )}
        {machine.tekst && (
          <p className="mt-4 text-base text-gray-900 font-light">
            {machine.tekst}
          </p>
        )}
      </div>
    </div>
  );
}

MachineCard.propTypes = {
  machine: PropTypes.shape({
    naam: PropTypes.string.isRequired,
    afbeelding: PropTypes.string,
    specs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        waarde: PropTypes.string.isRequired,
      }),
    ),
    tekst: PropTypes.node,
  }).isRequired,
};

export function ContactCta({ titel, tekst }) {
  return (
    <section className="mt-16 rounded-2xl border border-gray-100 bg-gray-50/60 px-6 py-10 sm:px-10">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
        {titel}
      </h2>
      <p className="mt-2 max-w-2xl text-lg text-gray-900 font-light">{tekst}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <DiagonalButton href="tel:+31629425926">
          <span className="flex items-center gap-2">
            <Phone size={20} />
            +31 6 29 42 59 26
          </span>
        </DiagonalButton>
        <DiagonalButton href="mailto:info@bakumetaal.nl">
          <span className="flex items-center gap-2">
            <Envelope size={20} />
            info@bakumetaal.nl
          </span>
        </DiagonalButton>
      </div>
      <p className="mt-4 text-base text-gray-900 font-light">
        Liever schriftelijk? Gebruik het{" "}
        <a
          href="/#contact"
          className="font-medium text-bakublue hover:underline"
        >
          contactformulier
        </a>
        .
      </p>
    </section>
  );
}

ContactCta.propTypes = {
  titel: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
};

function Related({ slugs }) {
  const items = slugs.map((slug) => dienstBySlug(slug)).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-lg font-medium tracking-tight text-gray-900">
        Ook interessant
      </h2>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
        {items.map((item) => (
          <a
            key={item.slug}
            href={`/diensten/${item.slug}/`}
            className="rounded-full border border-gray-200 px-4 py-2 text-bakublue hover:border-bakublue"
          >
            {item.naam}
          </a>
        ))}
      </div>
    </section>
  );
}

Related.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function DienstPagina({ slug }) {
  const dienst = dienstBySlug(slug);

  if (!dienst) {
    return null;
  }

  return (
    <div className="bg-white">
      <Header actief="Diensten" />
      <main>
        <div className="mx-auto max-w-2xl px-6 py-12 lg:max-w-7xl lg:py-20 xl:px-0">
          <Breadcrumb naam={dienst.naam} />

          <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {dienst.kop}
              </h1>
              {dienst.intro.map((alinea) => (
                <p
                  key={alinea.slice(0, 32)}
                  className="mt-4 text-lg text-gray-900 font-light"
                >
                  {alinea}
                </p>
              ))}
            </div>
            <img
              src={dienst.heroImage}
              alt={dienst.heroAlt}
              className="rounded-xl bg-gray-100 shadow-xl"
              width="2174"
              height="1464"
            />
          </div>

          {dienst.machines.length > 0 && (
            <section className="mt-16">
              {dienst.machinesTitel && (
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {dienst.machinesTitel}
                </h2>
              )}
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {dienst.machines.map((machine) => (
                  <MachineCard key={machine.naam} machine={machine} />
                ))}
              </div>
            </section>
          )}

          {dienst.secties.length > 0 && (
            <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
              {dienst.secties.map((sectie) => (
                <div key={sectie.titel}>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    {sectie.titel}
                  </h2>
                  <p className="mt-4 text-base text-gray-900 font-light">
                    {sectie.tekst}
                  </p>
                </div>
              ))}
            </section>
          )}

          <ContactCta titel={dienst.ctaTitel} tekst={dienst.ctaTekst} />

          <Related slugs={dienst.related} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

DienstPagina.propTypes = {
  slug: PropTypes.string.isRequired,
};
