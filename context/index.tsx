"use client";

import { wagmiAdapter, projectId } from "@/config";
import { createAppKit } from "@reown/appkit";
import { mainnet, arbitrum } from "@reown/appkit/networks";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project Id is not defined");
}

const metadata = {
  name: "Appkit Solution",
  description: "Appkit Solution - EVM",
  url: "http://appkitsolution.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  features: {
    analytics: true,
    email: true,
    emailShowWallets: true,
    socials: ["google", "x", "github", "discord", "farcaster"],
  },
  themeMode: "light",
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
