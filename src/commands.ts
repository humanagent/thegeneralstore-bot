import type { CommandGroup } from "@xmtp/message-kit";
import { handlePoap } from "./handlers/poap.js";
import { handleFaucet } from "./handlers/faucet.js";

export const commands: CommandGroup[] = [
  {
    name: "Poap Bot",
    description: "Get your POAP.",
    triggers: ["/poap"],
    commands: [
      {
        command: "/poap [address]",
        handler: handlePoap,
        description: "Get your POAP.",
        params: {
          address: {
            type: "string",
          },
        },
      },
    ],
  },
  {
    name: "Faucet",
    description: "Get some testnet tokens.",
    triggers: ["/faucet", "/networks"],
    commands: [
      {
        command: "/faucet [address] [network]",
        handler: handleFaucet,
        description: "Get some testnet tokens.",
        params: {
          address: {
            type: "string",
          },
          network: {
            type: "string",
          },
        },
      },
      {
        command: "/networks",
        handler: handleFaucet,
        description: "Get the list of supported networks.",
        params: {},
      },
    ],
  },
];
