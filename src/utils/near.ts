import { writable } from "svelte/store";
import { connect, keyStores, WalletConnection, Near, ConnectConfig } from "near-api-js";
import { Buffer } from 'buffer';

const nearStore = writable<NearProps>({
  connect: nearConnect,
  user: undefined,
  wallet: undefined
})

export default nearStore

interface NearProps {
  connect(): Promise<void>;
  user: string;
  wallet: WalletConnection | undefined
}

const config: ConnectConfig = {
  networkId: "mainnet",
  headers: {},
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org"
};


async function nearConnect(): Promise<void> {
  window.Buffer = Buffer;
  window.global = window;
  const near = await connect(config);
  const wallet = new WalletConnection(near, "svelte.near");
  const user = wallet.getAccountId();

  nearStore.update(n => {
    return { 
      ...n,
      user,
      wallet
    }
  })
}


