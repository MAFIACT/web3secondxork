'use client'

import { configureChains, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient } from '@web3modal/ethereum'
import { createWeb3Modal } from '@web3modal/wagmi'

export const projectId = '465e1e1d0e40f88070f30ea5af2cd7fd'

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Connect Wallet & View PNL',
  url: 'https://web3secondxork.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const { chains, publicClient } = configureChains([base], [publicProvider()])

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  metadata
})
