import { z } from "zod";

import { createProcedure, createRouter } from "../utils/createRouter.js";
import type { ICounterClient, ISecretClient } from "../wingsdk.js";

export const createSecretRouter = () => {
  return createRouter({
    "secret.get": createProcedure
      .meta({
        analytics: {
          action: "get",
          resource: "Secret",
        },
      })
      .input(
        z.object({
          resourcePath: z.string(),
        }),
      )
      .query(async ({ input, ctx }) => {
        const simulator = await ctx.simulator();
        const client = simulator.tryGetResource(
          input.resourcePath,
        ) as ISecretClient;
        if (!client) {
          return 0;
        }
        const response = await client.value();
        return response;
      }),
    //   }),
    // "secret.set": createProcedure
    //   .meta({
    //     analytics: {
    //       action: "set",
    //       resource: "Secret",
    //     },
    //   })
    //   .input(
    //     z.object({
    //       resourcePath: z.string(),
    //       value: z.number(),
    //     }),
    //   )
    //   .mutation(async ({ input, ctx }) => {
    //     const simulator = await ctx.simulator();
    //     const client = simulator.getResource(
    //       input.resourcePath,
    //     ) as ISecretClient;
    //     const response = await client.set(input.value);
    //     return response;
    //   }),
  });
};
