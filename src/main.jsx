import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { LayoutProvider } from "./layout/context/layoutcontext.tsx";
// import { SessionProvider } from "./hooks/SessionContext.jsx";
import "./styles/demo/Demos.scss";
import "./styles/layout/layout.scss";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      {/* <LayoutProvider> */}
      <App />
      {/* </LayoutProvider> */}
    </PrimeReactProvider>
  </React.StrictMode>
);
