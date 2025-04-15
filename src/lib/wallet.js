'use client'

import { configureChains, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient } from '@web3modal/ethereum'

export const projectId = '050d3abd2409cfc2ab142c17fbd0a77c'

const { chains, publicClient } = configureChains([base], [publicProvider()])

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
