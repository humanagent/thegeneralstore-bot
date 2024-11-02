import type { SkillGroup } from "@xmtp/message-kit";
import { handlePoap } from "./handlers/poap.js";
import { handleFaucet } from "./handlers/faucet.js";
import { handleNotion } from "./handlers/notion.js";

export const skills: SkillGroup[] = [
  {
    name: "Poap Bot",
    description: "Get your POAP.",
    skills: [
      {
        command: "/poap [address]",
        handler: handlePoap,
        triggers: ["/poap"],
        description: "Get your POAP.",
        params: {
          address: {
            type: "string",
          },
        },
      },
      {
        command: "/poap list",
        handler: handlePoap,
        triggers: ["/poap list"],
        description: "List all POAPs.",
        params: {},
      },
    ],
  },
  {
    name: "Faucet",
    description: "Get some testnet tokens.",
    skills: [
      {
        command: "/faucet [address] [network]",
        handler: handleFaucet,
        triggers: ["/faucet"],
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
        triggers: ["/networks"],
        handler: handleFaucet,
        description: "Get the list of supported networks.",
        params: {},
      },
    ],
  },
  {
    name: "Notion",
    description: "Update your Notion prompt.",
    skills: [
      {
        command: "/update",
        triggers: ["/update"],
        handler: handleNotion,
        description: "Update your Notion prompt.",
        params: {},
      },
    ],
  },
];