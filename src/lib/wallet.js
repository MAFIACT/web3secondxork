'use client'

import { configureChains, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient } from '@web3modal/ethereum'

export const projectId = '465e1e1d0e40f88070f30ea5af2cd7fd'

const { chains, publicClient } = configureChains([base], [publicProvider()])

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
