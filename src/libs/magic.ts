import { Magic } from "magic-sdk";

// Initialize the Magic instance
export const magic = new Magic("pk_live_6BD2A5063C9C0E8A", {
  network: {
    rpcUrl:
      "https://eth-sepolia.g.alchemy.com/v2/0gqTZuhkdkCqpYjBA5DPJBYg0_AHcRxQ",
    chainId: 11155111,
  },
});
