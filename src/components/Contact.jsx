"use client";

import { useState } from "react";
import DiagonalButton from "./ui/DiagonalButton";
import { Envelope, Phone } from "@phosphor-icons/react";
import UnderlinedHeading from "./ui/UnderlinedHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });

  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        naam: "",
        email: "",
        telefoon: "",
        bericht: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white max-w-7xl mx-auto" id="contact">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-5 px-6 xl:px-0">
        <div className="pt-16 lg:col-span-2 lg:py-24 xl:pr-12 ">
          <div className="mx-auto max-w-lg">
            <UnderlinedHeading>Neem contact op</UnderlinedHeading>
            <p className="mt-3 text-base text-gray-900 font-light">
              Neem gerust contact met ons op via telefoon of e-mail. We staan
              klaar om al uw vragen te beantwoorden en u verder te helpen met uw
              project.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Adres</dt>
                <dd>
                  <p>Cromvoirtseweg 3</p>
                  <p>5268 LJ Helvoirt</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Telefoonnummer</dt>
                <dd className="flex">
                  <Phone size={24} className="shrink-0 text-gray-400" />
                  <span className="ml-3">+31 (0)6 29 42 59 26</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Envelope size={24} className="shrink-0 text-gray-400" />
                  <span className="ml-3">info@bakumetaal.nl</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 lg:col-span-3 lg:py-24 lg:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="naam" className="sr-only">
                  Naam
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  placeholder="Naam"
                  autoComplete="name"
                  value={formData.naam}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefoon" className="sr-only">
                  Telefoonnummer
                </label>
                <input
                  id="telefoon"
                  name="telefoon"
                  type="text"
                  placeholder="Telefoonnummer"
                  autoComplete="tel"
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                />
              </div>
              <div>
                <label htmlFor="bericht" className="sr-only">
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  placeholder="Bericht"
                  value={formData.bericht}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                  required
                />
              </div>
              {status === "success" && (
                <p className="text-green-600 font-light">
                  Bedankt voor uw bericht! We nemen snel contact met u op.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-light">
                  Er is iets misgegaan. Probeer het later opnieuw.
                </p>
              )}
              <div>
                <DiagonalButton as="button" type="submit" disabled={loading}>
                  {loading ? "Versturen..." : "Verstuur"}
                </DiagonalButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
