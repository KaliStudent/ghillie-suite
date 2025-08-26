import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { Button } from './Button'

function formatAddress(a?: string){ return a ? a.slice(0,4)+'…'+a.slice(-4) : '' }

export function WalletConnectButton() {
  const { publicKey, connected, connecting } = useWallet()
  const { setVisible } = useWalletModal()
  const label = connecting ? 'Connecting…' : (connected && publicKey ? formatAddress(publicKey.toBase58()) : 'Connect Wallet')
  return (
    <Button onClick={()=>setVisible(true)} disabled={connecting} title={publicKey?.toBase58() || 'Connect Wallet'}>
      {label}
    </Button>
  )
}
export default WalletConnectButton
