'use client'

import { useAccount } from 'wagmi'
import { Web3Button } from '@web3modal/react'

export default function Home() {
  const { address, isConnected } = useAccount()

  const pnl = 5423.76
  const tokens = [
    { symbol: "SKINME", value: 420, price: 0.0002088 },
    { symbol: "MOT", value: 100000, price: 0.047666 },
    { symbol: "DOGI", value: 50000, price: 0.000736 },
    { symbol: "BRETT", value: 3500, price: 0.03526 },
    { symbol: "AI", value: 100, price: 2.8 }
  ]

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">🧠 Web3 Dashboard</h1>
        <Web3Button />
      </header>

      {isConnected && (
        <>
          <section className="mb-8">
            <h2 className="text-xl mb-2">💰 Your PNL</h2>
            <p className="text-3xl font-bold text-green-400">${pnl.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">Connected: {address}</p>
          </section>
          <section>
            <h2 className="text-xl mb-4">📦 Portfolio</h2>
            <ul className="space-y-2">
              {tokens.map((token, i) => (
                <li key={i} className="flex justify-between">
                  <span>{token.symbol}</span>
                  <span className="text-gray-400">{token.value} × ${token.price.toFixed(6)}</span>
                  <span className="text-green-400">
                    ${(token.value * token.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  )
}
