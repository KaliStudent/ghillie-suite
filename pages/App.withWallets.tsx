
import React from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Switch } from '../components/Switch'
import { Checkbox } from '../components/Checkbox'
import { Chip } from '../components/Chip'
import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { WalletConnectButton } from '../components/WalletConnectButton'
import { Chart } from '../components/Chart'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-gunmetal/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-4">
          <div className="font-extrabold tracking-tight">THE GHILLIE SUITE</div>
          <div className="ml-auto flex items-center gap-3">
            <input className="h-9 w-72 rounded-lg bg-gunmetal border border-white/15 px-3 text-sm placeholder:text-fog/70 focus:border-accent focus:outline-none" placeholder="Search tokens, mints, wallets…" />
            <WalletConnectButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-[240px_1fr_360px] gap-6">
        <aside className="card p-3">
          <div className="text-sm font-medium mb-2">Nav</div>
          <nav className="space-y-1 text-sm">
            <a className="block rounded-md px-2 py-2 bg-slate/60">Coin Pit</a>
            <a className="block rounded-md px-2 py-2 hover:bg-slate/50">Screeners</a>
            <a className="block rounded-md px-2 py-2 hover:bg-slate/50">Alerts</a>
            <a className="block rounded-md px-2 py-2 hover:bg-slate/50">Backtests (Pro)</a>
            <a className="block rounded-md px-2 py-2 hover:bg-slate/50">Docs</a>
            <a className="block rounded-md px-2 py-2 hover:bg-slate/50">Settings</a>
          </nav>
          <div className="mt-4 text-xs text-fog/80">Data age: 320ms</div>
        </aside>

        <section className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">Chart</div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">1m</Button>
                <Button variant="secondary" size="sm">5m</Button>
                <Button variant="secondary" size="sm">1h</Button>
              </div>
            </div>
            <div className="h-72">
              <Chart />
            </div>
            <div className="mt-2 text-xs text-fog/80">Lightweight Charts wired — feed your data when ready.</div>
          </Card>

          <Card>
            <div className="font-semibold mb-3">Live Tape</div>
            <div className="grid grid-cols-1 gap-2">
              {Array.from({length: 12}).map((_,i)=>(
                <div key={i} className="h-7 rounded-md bg-gunmetal border border-white/10" />
              ))}
            </div>
          </Card>
        </section>

        <aside className="space-y-6">
          <Card>
            <div className="font-semibold">Signals</div>
            <div className="mt-3 text-sm text-fog">CamoScore</div>
            <div className="mt-1 h-2 rounded-full bg-gunmetal">
              <div className="h-2 rounded-full bg-accent w-3/5" />
            </div>
            <div className="mt-3 text-sm text-fog">Ghillie Intel</div>
            <div className="text-sm">Likely ↑ next 2–6h • Conf 68%</div>
            <div className="mt-3 text-sm text-fog">Sentiment</div>
            <div className="text-sm">Mentions +23% • Positive</div>
          </Card>

          <Card>
            <div className="font-semibold mb-2">Razor Trades</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-fog/80">Entry</div>
              <Input placeholder="0.0000" />
              <div className="text-fog/80">Targets</div>
              <div className="space-y-2">
                <div className="h-2 rounded bg-gunmetal" />
                <div className="h-2 rounded bg-gunmetal" />
              </div>
              <div className="text-fog/80">SL</div>
              <Input placeholder="0.0000" />
            </div>
            <div className="mt-3">
              <Button className="w-full">Execute</Button>
            </div>
          </Card>

          <Banner tone="warning">Low liquidity — slippage risk high.</Banner>
          <Banner tone="error">Contract flags present — review before executing.</Banner>
        </aside>
      </main>
    </div>
  )
}
