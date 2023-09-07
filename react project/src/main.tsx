import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import PageProvider from "./components/PageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);
