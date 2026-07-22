import { useState } from "react";
import PropTypes from "prop-types";
import headerimage from "../assets/header-image.webp";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = {
  pages: [
    { naam: "Werkzaamheden", href: "/#werkzaamheden" },
    { naam: "Diensten", href: "/diensten/" },
    { naam: "Machinepark", href: "/#machinepark" },
    { naam: "Over ons", href: "/#over-ons" },
    { naam: "Contact", href: "/#contact" },
  ],
};

export default function Header({ actief }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
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
                            className={`flex items-center text-sm font-medium hover:text-bakublue border-b-2 hover:border-bakublue hover:border-b-2 px-4 tracking-wide pt-1 ${
                              actief === page.naam
                                ? "text-bakublue border-b-bakublue"
                                : "text-black border-b-transparent"
                            }`}
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
    </>
  );
}

Header.propTypes = {
  actief: PropTypes.string,
};
