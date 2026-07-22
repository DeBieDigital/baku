import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DienstPagina from "./components/diensten/DienstPagina";
import DienstenOverzicht from "./components/diensten/DienstenOverzicht";

const slug = window.location.pathname
  .replace(/^\/diensten\/?/, "")
  .replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {slug ? <DienstPagina slug={slug} /> : <DienstenOverzicht />}
  </StrictMode>,
);
