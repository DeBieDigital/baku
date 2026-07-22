import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bakumetaalbewerking/",
    icon: <InstagramLogo size={24} color="#fff" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bakumetaalbewerking/",
    icon: <FacebookLogo size={24} color="#fff" />,
  },
];

const diensten = [
  { naam: "CNC draaien", href: "/diensten/cnc-draaien/" },
  { naam: "Frezen", href: "/diensten/frezen/" },
  { naam: "Boren", href: "/diensten/boren/" },
  { naam: "Zagen", href: "/diensten/zagen/" },
  { naam: "Brootsen", href: "/diensten/brootsen/" },
  { naam: "Draad tappen en snijden", href: "/diensten/draad-tappen-en-snijden/" },
];

export default function Footer() {
  return (
    <footer className="bg-bakublue">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <nav aria-label="Diensten" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-light text-white">
            {diensten.map((dienst) => (
              <li key={dienst.href}>
                <a href={dienst.href} className="hover:underline">
                  {dienst.naam}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center gap-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm/6 text-white md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} BaKu metaalbewerking. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
