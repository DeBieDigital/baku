import draaien2 from "../../assets/draaien2.webp";
import frezen from "../../assets/frezen.webp";
import boren from "../../assets/boren.webp";
import zagen from "../../assets/zagen.webp";
import brootsen from "../../assets/brootsen.webp";
import draad from "../../assets/draad.webp";

const link = (href, tekst) => (
  <a key={href} href={href} className="text-bakublue hover:underline">
    {tekst}
  </a>
);

export const diensten = [
  {
    slug: "cnc-draaien",
    naam: "CNC draaien",
    kop: "CNC draaien en conventioneel draaiwerk",
    kaartTekst:
      "Precisiedraaiwerk met onze Style 510 CNC-draaibank en conventionele Tarnow TUJ-50M. Enkelstuks tot kleine series.",
    heroImage: draaien2,
    heroAlt: "CNC draaiwerk bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Draaiwerk is de kern van ons vak. Met de Style 510 CNC-draaibank leveren we precisiewerk van hoog niveau, van enkelstuks tot kleine series. Voor opknapwerk, aanpassingen en eenvoudig draaiwerk zetten we daarnaast onze conventionele Tarnow TUJ-50M draaibank in.",
      "We draaien assen, bussen, flenzen, wielen en andere ronde onderdelen in staal, rvs, aluminium en andere metalen. In- en uitwendig draadsnijden op de draaibank behoort ook tot de mogelijkheden. Werkstukken maken we op basis van jouw tekening, schets of een aangeleverd voorbeeld.",
    ],
    machinesTitel: "Onze draaibanken",
    machines: [
      {
        naam: "Style 510 CNC-draaibank",
        afbeelding: "/machines/cnc.webp",
        specs: [
          { label: "X-as", waarde: "1300 mm" },
          { label: "Z-as", waarde: "400 mm" },
          { label: "Tussen de centers", waarde: "1350 mm" },
          { label: "Spindelgat", waarde: "80 mm" },
        ],
      },
      {
        naam: "Tarnow TUJ-50M draaibank",
        afbeelding: "/machines/draaibank.webp",
        tekst:
          "Onze conventionele draaibank voor enkelstuks, reparaties en draaiwerk waar handwerk en vakmanschap het verschil maken.",
      },
    ],
    secties: [
      {
        titel: "Van enkelstuk tot kleine serie",
        tekst: (
          <>
            Dankzij de combinatie van CNC en conventioneel draaien kiezen we
            altijd de efficiëntste route voor jouw opdracht. Eén vervangend
            onderdeel voor een machine die stilstaat? Dat kan snel op de
            conventionele bank. Een kleine serie nauwkeurige onderdelen? Die
            programmeren en draaien we op de CNC.
          </>
        ),
      },
      {
        titel: "Materialen",
        tekst: (
          <>
            We draaien onder andere staal, rvs en aluminium. Twijfel je over het
            juiste materiaal voor jouw toepassing? We denken graag mee over
            sterkte, corrosiebestendigheid en bewerkbaarheid.
          </>
        ),
      },
    ],
    ctaTitel: "Draaiwerk nodig?",
    ctaTekst:
      "Stuur je tekening of omschrijving en we maken vrijblijvend een prijsopgave. Je spreekt direct met de vakman die jouw onderdeel maakt.",
    related: ["frezen", "draad-tappen-en-snijden", "zagen"],
  },
  {
    slug: "frezen",
    naam: "Frezen",
    kop: "CNC frezen met precisie en capaciteit",
    kaartTekst:
      "CNC-frezen op de Style BT-1500+ freesbank: spiebanen, vlakken en gaten op steekmaten, van enkelstuk tot kleine serie.",
    heroImage: frezen,
    heroAlt: "Freeswerk bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Met onze Style BT-1500+ CNC-freesbank frezen we nauwkeurig en met veel capaciteit: een X-as van 1500 mm en een tafel van 1850 x 610 mm bieden ruimte aan flinke werkstukken.",
      "Denk aan het frezen van spiebanen, het vlakken van oppervlakken, het nauwkeurig boren van gaten op steekmaten en het passend maken van onderdelen. In staal, rvs, aluminium en andere metalen, als enkelstuk of kleine serie.",
    ],
    machinesTitel: "Onze freesbank",
    machines: [
      {
        naam: "Style BT-1500+ CNC-freesbank",
        afbeelding: "/machines/bt1500.webp",
        specs: [
          { label: "X-as", waarde: "1500 mm" },
          { label: "Y-as", waarde: "650 mm" },
          { label: "Z-as", waarde: "700 mm" },
          { label: "Tafelafmeting", waarde: "1850 x 610 mm" },
        ],
      },
      {
        naam: "Van tekening tot onderdeel",
        tekst: (
          <>
            We programmeren en frezen op basis van jouw tekening, schets of een
            aangeleverd voorbeeld. CNC-frezen is herhaalbaar en nauwkeurig, dus
            ook voor een kleine serie ben je verzekerd van identieke
            onderdelen.
          </>
        ),
      },
    ],
    secties: [
      {
        titel: "Combinatie met andere bewerkingen",
        tekst: (
          <>
            Freeswerk combineren we vaak met{" "}
            {link("/diensten/cnc-draaien/", "draaien")},{" "}
            {link("/diensten/boren/", "boren")} en{" "}
            {link("/diensten/draad-tappen-en-snijden/", "draad tappen")}. Zo
            leveren we jouw onderdeel compleet af, uit één hand.
          </>
        ),
      },
    ],
    ctaTitel: "Freeswerk nodig?",
    ctaTekst:
      "Stuur je tekening of omschrijving en we maken vrijblijvend een prijsopgave. Korte lijnen, duidelijke afspraken.",
    related: ["cnc-draaien", "brootsen", "boren"],
  },
  {
    slug: "boren",
    naam: "Boren",
    kop: "Boren in metaal tot Ø40 mm",
    kaartTekst:
      "Boren tot 40 mm met onze WMW BK 25 kolomboormachine, en nauwkeurig boorwerk op de CNC-draaibank en freesbank.",
    heroImage: boren,
    heroAlt: "Boorwerk bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Met onze krachtige WMW BK 25 kolomboormachine boren we gaten tot Ø40 mm in staal, rvs en aluminium. Voor boorwerk dat op de tiende millimeter moet kloppen, bijvoorbeeld gaten op steekmaten, zetten we de CNC-draaibank of de freesbank in.",
      "Van een enkel gat in een balk of flens tot compleet boorwerk in een serie onderdelen: we bepalen per opdracht de beste aanpak en machine. Ook verzinken en opruimen van gaten verzorgen we netjes.",
    ],
    machinesTitel: "Waarmee we boren",
    machines: [
      {
        naam: "WMW BK 25 kolomboormachine",
        afbeelding: "/machines/kolomboor.webp",
        specs: [
          { label: "Boorcapaciteit", waarde: "tot Ø40 mm" },
          { label: "Materialen", waarde: "staal, rvs, aluminium" },
        ],
      },
      {
        naam: "CNC-draaibank en freesbank",
        tekst: (
          <>
            Voor nauwkeurig boorwerk op positie: gaten op steekmaten, centrische
            gaten in gedraaide delen en boorpatronen in freeswerk. Zo combineren
            we boren direct met {link("/diensten/cnc-draaien/", "draaien")} en{" "}
            {link("/diensten/frezen/", "frezen")} in één opspanning.
          </>
        ),
      },
    ],
    secties: [],
    ctaTitel: "Boorwerk nodig?",
    ctaTekst:
      "Klein of groot, enkelstuk of serie: stuur je omschrijving en we maken vrijblijvend een prijsopgave.",
    related: ["draad-tappen-en-snijden", "frezen", "zagen"],
  },
  {
    slug: "zagen",
    naam: "Zagen",
    kop: "Metaal zagen op maat",
    kaartTekst:
      "Op maat zagen van profielen en massief materiaal met onze lintzaag, ook voor grote afmetingen.",
    heroImage: zagen,
    heroAlt: "Zaagwerk met de lintzaag bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Met onze lintzaag zagen we profielen, buizen en massief materiaal snel en nauwkeurig op lengte, ook bij zeer grote afmetingen. Handig als je exact passend materiaal nodig hebt voor je eigen productie, of als eerste stap voordat wij het werkstuk verder bewerken.",
      "We zagen staal, rvs en aluminium. Eén stuk of een reeks afkortingen op vaste lengte: je krijgt strakke, haakse zaagsnedes met minimale materiaalverspilling.",
    ],
    machinesTitel: "Onze lintzaag",
    machines: [
      {
        naam: "Lintzaag",
        afbeelding: "/machines/zaag.webp",
        tekst:
          "Geschikt voor grote afmetingen, met hoge nauwkeurigheid en efficiëntie. Ideaal voor het afkorten van balken, assenmateriaal en plaatstroken.",
      },
      {
        naam: "Zagen als onderdeel van je opdracht",
        tekst: (
          <>
            Zaagwerk is vaak de eerste stap: daarna{" "}
            {link("/diensten/cnc-draaien/", "draaien")},{" "}
            {link("/diensten/frezen/", "frezen")} of{" "}
            {link("/diensten/boren/", "boren")} we het onderdeel direct af. Zo
            komt jouw werkstuk compleet uit één werkplaats.
          </>
        ),
      },
    ],
    secties: [],
    ctaTitel: "Zaagwerk nodig?",
    ctaTekst:
      "Geef de maten en het materiaal door en we maken vrijblijvend een prijsopgave. Snel geregeld, netjes gezaagd.",
    related: ["cnc-draaien", "frezen", "boren"],
  },
  {
    slug: "brootsen",
    naam: "Brootsen",
    kop: "Brootsen van spiebanen en vormgaten",
    kaartTekst:
      "Spiebanen en vormgaten brootsen met een hydraulische en elektrische pers, geschikt voor alle gangbare maten.",
    heroImage: brootsen,
    heroAlt: "Brootsen van een spiebaan bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Brootsen is de manier om een nauwkeurige spiebaan of een vormgat in een boring aan te brengen, bijvoorbeeld in tandwielen, poelies, koppelingen en hefboomarmen. Bij BaKu brootsen we met behulp van een hydraulische en een elektrische pers, geschikt voor alle gangbare maten en toepassingen.",
      "We brootsen in staal, rvs en aluminium. Vaak combineren we het met draaiwerk: eerst draaien we de boring op maat, daarna brootsen we de spiebaan er strak in. Zo past het onderdeel direct op de as.",
    ],
    machinesTitel: null,
    machines: [],
    secties: [
      {
        titel: "Wanneer brootsen?",
        tekst: (
          <>
            Zit er speling tussen as en naaf, of moet een nieuw tandwiel of
            poelie passend gemaakt worden op een bestaande as? Dan is een
            gebrootste spiebaan de nette, duurzame oplossing. Ook voor het
            herstellen van uitgeslagen spiebanen ben je bij ons aan het juiste
            adres.
          </>
        ),
      },
      {
        titel: "Compleet afgewerkt",
        tekst: (
          <>
            In combinatie met {link("/diensten/cnc-draaien/", "draaien")},{" "}
            {link("/diensten/frezen/", "frezen")} en{" "}
            {link("/diensten/boren/", "boren")} leveren we het complete
            onderdeel: boring, spiebaan en passing in één keer goed.
          </>
        ),
      },
    ],
    ctaTitel: "Spiebaan nodig?",
    ctaTekst:
      "Stuur de maten van as en boring door en we maken vrijblijvend een prijsopgave. Meestal kan het op korte termijn.",
    related: ["cnc-draaien", "frezen", "draad-tappen-en-snijden"],
  },
  {
    slug: "draad-tappen-en-snijden",
    naam: "Draad tappen en snijden",
    kop: "Draad tappen en snijden tot M24",
    kaartTekst:
      "Draad tappen tot M24 met de MW-tech ETA2416 taparm en in- en uitwendig draadsnijden op de CNC-draaibank.",
    heroImage: draad,
    heroAlt: "Draad tappen bij BaKu metaalbewerking in Helvoirt",
    intro: [
      "Met onze elektrische MW-tech ETA2416 taparm tappen we schroefdraad tot M24, recht en zonder gebroken tappen. Voor inwendige en uitwendige draad die op de draaibank thuishoort, snijden we de draad op onze Style 510 CNC-draaibank.",
      "Van een reeks tapgaten in een machineframe tot een as met uitwendige draad op maat: we leveren strak, passend draadwerk in staal, rvs en aluminium.",
    ],
    machinesTitel: "Waarmee we draad maken",
    machines: [
      {
        naam: "MW-tech ETA2416 taparm",
        afbeelding: "/machines/taparm.webp",
        specs: [
          { label: "Tapbereik", waarde: "tot M24" },
          { label: "Type", waarde: "elektrische taparm" },
        ],
      },
      {
        naam: "Draadsnijden op de CNC-draaibank",
        tekst: (
          <>
            Inwendige en uitwendige draad snijden we nauwkeurig op de{" "}
            {link("/diensten/cnc-draaien/", "Style 510 CNC-draaibank")}. Ideaal
            voor draad op assen, bussen en speciale passingen die niet met een
            standaard tap of snijplaat te maken zijn.
          </>
        ),
      },
    ],
    secties: [],
    ctaTitel: "Draadwerk nodig?",
    ctaTekst:
      "Geef de maat, spoed en het materiaal door en we maken vrijblijvend een prijsopgave.",
    related: ["boren", "cnc-draaien", "frezen"],
  },
];

export function dienstBySlug(slug) {
  return diensten.find((d) => d.slug === slug);
}
