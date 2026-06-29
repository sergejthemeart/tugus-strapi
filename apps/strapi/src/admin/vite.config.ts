// @ts-expect-error Vite is provided by Strapi internally
// eslint-disable-next-line import-x/no-unresolved
import { mergeConfig, type UserConfig } from "vite"

export default (config: UserConfig) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      allowedHosts: ["cms.tugus.de"],
    },
  } as UserConfig)
}
