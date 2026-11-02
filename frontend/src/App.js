import { useEffect } from "react";
import "@/App.css";

const DEFAULT_TARGET = "https://studiowonderland.eu/degrotesinterklaasshow";

// Map URL path -> redirect target. Query params are stripped by design.
const ROUTES = {
  "/": DEFAULT_TARGET,
  "/sinterklaasshow": DEFAULT_TARGET,
  "/degrotesinterklaasshow": DEFAULT_TARGET,
  "/kerstman": "https://studiowonderland.eu/hethuisvandekerstman",
  "/hethuisvandekerstman": "https://studiowonderland.eu/hethuisvandekerstman",
};

function resolveTarget() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return ROUTES[path] || DEFAULT_TARGET;
}

function App() {
  useEffect(() => {
    // Immediate, history-replacing redirect (no back-button trap).
    window.location.replace(resolveTarget());
  }, []);

  return (
    <div
      data-testid="redirect-root"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <noscript>
        <a data-testid="redirect-fallback-link" href={resolveTarget()}>
          Continue
        </a>
      </noscript>
    </div>
  );
}

export default App;
