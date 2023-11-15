// import icons
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { ReactComponent as WalletIcon } from "../assets/svg/wallet.svg";
import { ReactComponent as BNBIcon } from "../assets/svg/eth.svg";
import { ReactComponent as DownArrowIcon } from "../assets/svg/down-arrow.svg";

import config from "../config";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";

const navigationLinks = [
  {
    name: "How to buy",
    href: "#how-to-buy",
  },
  {
    name: "Roadmap",
    href: "#roadmap",
  },
  {
    name: "Tokenomics",
    href: "#tokenomics",
  },
  {
    name: "Team",
    href: "#team",
  },
];

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  return (
    <div className="container px-4 lg:px-0">
      <div className="flex items-center justify-between py-6">
        <Logo className="h-12 lg:h-16" />
        <div className="flex items-center gap-6">
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium transition-opacity duration-200 hover:opacity-75"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/ArtiCoinio"
                  className="animate-pulse text-lg font-medium text-primary transition-opacity duration-200 hover:opacity-75"
                  target="_blank"
                >
                  Airdrop
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => open({ route: "SelectNetwork" })}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-transparent py-4 px-4 font-semibold lg:flex"
            >
              <BNBIcon className="h-6 w-6" />
              <span>{chain?.name || config.chains[0].name}</span>
              <DownArrowIcon className="h-3 w-3" />
            </button>

            <button
              onClick={() => open()}
              className="flex items-center gap-2 rounded-full bg-primary py-2 px-4 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-75 lg:py-4 lg:text-base"
            >
              {isConnected ? (
                <span className="flex items-center justify-center gap-2">
                  <span>
                    {address?.slice(0, 6)}...
                    <span className="hidden lg:inline">
                      {address?.slice(address.length - 6, address.length)}
                    </span>
                  </span>
                </span>
              ) : (
                <>
                  <WalletIcon className="h-6 w-6" />
                  <span>Connect Wallet</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-white/0 to-white/20" />
    </div>
  );
};

export default Navbar;
