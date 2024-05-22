import { createGoogleOAuthConfig, createHelpers } from "jsr:@deno/kv-oauth";
import type { Plugin } from "$fresh/server.ts";

const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
  createGoogleOAuthConfig({
    redirectUri: `${Deno.env.get("KV_OAUTH_REDIRECT_BASE_URL")}/callback`,
    scope: "https://www.googleapis.com/auth/userinfo.profile",
  }),
);

const kVOauthPlugin: Plugin = {
  name: "kv-oauth",
  routes: [
    {
      path: "/signin",
      async handler(req) {
        return await signIn(req);
      },
    },
    {
      path: "/callback",
      async handler(req) {
        // Return object also includes `accessToken` and `sessionId` properties.
        const { response } = await handleCallback(req);
        return response;
      },
    },
    {
      path: "/signout",
      async handler(req) {
        return await signOut(req);
      },
    },
    {
      path: "/protected",
      async handler(req) {
        return await getSessionId(req) === undefined
          ? new Response("Unauthorized", { status: 401 })
          : new Response("You are allowed");
      },
    },
  ],
} as Plugin;

export { kVOauthPlugin };

