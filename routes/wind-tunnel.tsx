import { type Handlers } from "fresh";

export const handler: Handlers = {
  async GET(_req) {
    const html = await Deno.readTextFile("./wind-tunnel.html");
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
