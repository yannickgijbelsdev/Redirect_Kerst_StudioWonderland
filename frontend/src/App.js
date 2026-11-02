import { useEffect } from "react";
import "@/App.css";

const TARGET_URL = "https://studiowonderland.eu/hethuisvandekerstman";

function App() {
  useEffect(() => {
    // Immediate, history-replacing redirect. Query params are stripped by design.
    window.location.replace(TARGET_URL);
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
        <a data-testid="redirect-fallback-link" href={TARGET_URL}>
          Continue
        </a>
      </noscript>
    </div>
  );
}

export default App;
