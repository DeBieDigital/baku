import Header from "../Header";
import Footer from "../Footer";
import UnderlinedHeading from "../ui/UnderlinedHeading";
import DienstKaart from "./DienstKaart";
import { ContactCta } from "./DienstPagina";
import { diensten } from "./dienstenData";

export default function DienstenOverzicht() {
  return (
    <div className="bg-white">
      <Header actief="Diensten" />
      <main>
        <div className="mx-auto max-w-2xl px-6 py-12 lg:max-w-7xl lg:py-20 xl:px-0">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex flex-wrap gap-2">
              <li>
                <a href="/" className="hover:text-bakublue">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">
                Diensten
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <UnderlinedHeading>Diensten</UnderlinedHeading>
            <p className="mt-4 text-lg text-gray-900 font-light">
              BaKu metaalbewerking draait, freest, boort, zaagt, brootst en tapt
              draad voor bedrijven en particulieren. Van enkelstuks tot kleine
              series, in staal, rvs, aluminium en andere metalen. Hieronder vind
              je al onze diensten. Vragen over jouw opdracht? Bel of mail ons
              gerust.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((dienst) => (
              <DienstKaart key={dienst.slug} dienst={dienst} />
            ))}
          </div>

          <ContactCta
            titel="Vrijblijvend overleggen over jouw opdracht?"
            tekst="Korte lijnen, eerlijk advies en maatwerk. Je spreekt altijd direct met de persoon die aan jouw opdracht werkt."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
