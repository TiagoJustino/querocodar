import { defineConfig } from "$fresh/server.ts";
import twind from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";
import { kVOauthPlugin } from "./plugins/kv_oauth.ts";

export default defineConfig({
  plugins: [ twind(twindConfig), kVOauthPlugin ]
});
