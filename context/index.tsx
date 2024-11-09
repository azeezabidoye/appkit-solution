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
