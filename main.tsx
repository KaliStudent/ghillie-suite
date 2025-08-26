
import React from "react";
import ReactDOM from "react-dom/client";
import { GhillieWalletProvider } from "./wallet/WalletProvider";
import App from "./pages/App.withWallets";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GhillieWalletProvider>
      <App />
    </GhillieWalletProvider>
  </React.StrictMode>
);
