import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ElementContextProvider } from "./contexts/ElementContext.tsx";
import { EditElementContextProvider } from "./contexts/EditElementContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ElementContextProvider>
        <EditElementContextProvider>
          <App />
        </EditElementContextProvider>
      </ElementContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
