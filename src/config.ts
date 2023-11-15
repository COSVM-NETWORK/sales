import { bsc, bscTestnet, mainnet } from "wagmi/chains";

const config = {
  chains: [bsc],
  presaleStartTime: 1680912000,
  presaleContract: {
    [bscTestnet.id]: "0xbC30b64c5B57BD9bDeAa1f330D844be0ce0c6896",
    [bsc.id]: "0xdc47c6af91e7eb32d566d51900b0622c2d625e5f",
    [mainnet.id]: "0xd465abcc9e2134e57ecd10b5ba109aa9caddeff4",
  } as { [key: number]: Address }, // presale contract address

  saleToken: {
    [bscTestnet.id]: {
      address: "0x17284f00868b0Ea70269776cdD68886e5cA4a0A9", // your token address
      symbol: "ARTI", // your token symbol
      name: "ArtiCoin", // your token name
      image: "/img/tokens/logo.svg", // your token image
      decimals: 18, // your token decimals
    },
    [bsc.id]: {
      address: "0xab79e9b07c52c10898806190f3e89acd300ea972", // your token address
      symbol: "BCC", // your token symbol
      name: "BCC", // your token name
      image: "/img/tokens/logo.svg", // your token image
      decimals: 18, // your token decimals
    },
    [mainnet.id]: {
      address: "0x9cd481f64511809f65e89480d0e2d7062709e311", // token address
      symbol: "ARTI", // token symbol
      name: "ArtiCoin", // token name
      image: "/img/tokens/logo.svg", // token image
      decimals: 18, // token decimals
    },
  } as { [key: number]: Token },

  displayPrice: {
    [bscTestnet.id]: "USDT",
    [bsc.id]: "USDT",
    [mainnet.id]: "USDT",
  } as { [key: number]: string },

  extraSoldAmount: 15_929_321, // How much additionally you want to show as sold?

  whitelistedTokens: {
    [bscTestnet.id]: [
      {
        address: null,
        symbol: "ETH",
        name: "ETH",
        image: "/img/tokens/eth.svg",
        decimals: 18,
      },
      {
        address: "0x7a7B1e43765a5BaC58e73f3c67CcB5548AC08408",
        symbol: "USDT",
        name: "Tether USD",
        image: "/img/tokens/eth.svg",
        decimals: 6,
      },
    ],
    [bsc.id]: [
      {
        address: null,
        symbol: "BNB",
        name: "Binance Token",
        image: "/img/tokens/bnb.webp",
        decimals: 18,
      },
    
      {
        address: "0x55d398326f99059fF775485246999027B3197955",
        symbol: "USDT",
        name: "Binance-Peg USD",
        image: "/img/tokens/usdt.webp",
        decimals: 18,
      },
      {
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        symbol: "BUSD",
        name: "Binance-Peg BUSD Token",
        image: "/img/tokens/busd.webp",
        decimals: 18,
      },
      {
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        symbol: "USDC",
        name: "Binance-Peg USD Coin",
        image: "/img/tokens/usdc.webp",
        decimals: 18,
      },
    ],

    [mainnet.id]: [
      {
        address: null,
        symbol: "ETH",
        name: "ETH",
        image: "/img/tokens/eth.svg",
        decimals: 18,
      },
      {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        symbol: "USDT",
        name: "Tether USD",
        image: "/img/tokens/tethernew_32.webp",
        decimals: 6,
      },
    ],
  } as { [key: number]: Token[] },
};

export default config;
