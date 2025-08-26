
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.withWallets'
import './styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import { GhillieWalletProvider } from './wallet/WalletProvider'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GhillieWalletProvider>
      <App />
    </GhillieWalletProvider>
  </React.StrictMode>
)
