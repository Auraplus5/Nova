import { defineConfig } from "$fresh/server.ts";
//import tailwind from "$fresh/plugins/tailwind.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  //plugins: [tailwind()],
    plugins: [twindPlugin(twindConfig)],
});
