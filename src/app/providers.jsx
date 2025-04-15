'use client'

import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
import { wagmiConfig, ethereumClient, projectId } from '../lib/wallet'

export default function Providers({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  )
}
