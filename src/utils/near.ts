import { writable } from "svelte/store";
import type { WalletConnection } from 'near-api-js'

declare global {
  interface Window {
    nearApi
  }
}

interface NearProps {
  connect(): Promise<void>
  wallet?: WalletConnection
  user?: string
}

const nearStore = writable<NearProps>({
  connect: nearConnect,
})

export default nearStore


async function nearConnect(): Promise<void> {

  const config = {
    networkId: "mainnet",
    headers: {},
    keyStore: new window.nearApi.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org"
  };

  const near = await window.nearApi.connect(config);
  const wallet = new window.nearApi.WalletConnection(near, "svelte.near");
  const user: string = wallet.getAccountId();

  nearStore.update(n => {
    return { 
      ...n,
      user,
      wallet
    }
  })
}


