import PropTypes from "prop-types";

export default function DienstKaart({ dienst, headingAs: Heading = "h2" }) {
  return (
    <a
      href={`/diensten/${dienst.slug}/`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-gray-50/60 p-6 shadow-sm transition-colors duration-200 hover:border-bakublue"
    >
      <Heading className="text-lg font-medium tracking-tight text-bakublue">
        {dienst.naam}
      </Heading>
      <p className="mt-2 flex-1 text-base text-gray-900 font-light">
        {dienst.kaartTekst}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-bakublue group-hover:underline">
        Lees meer
      </span>
    </a>
  );
}

DienstKaart.propTypes = {
  dienst: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    naam: PropTypes.string.isRequired,
    kaartTekst: PropTypes.string.isRequired,
  }).isRequired,
  headingAs: PropTypes.string,
};
