import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./markdown/Overview.mdx", "../src/ui/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.define = {
      ...config.define,
      "process.env.VITE_ASSETS_PATH": JSON.stringify(
        process.env.VITE_ASSETS_PATH,
      ),
      "import.meta.env.VITE_ASSETS_PATH": JSON.stringify(
        process.env.VITE_ASSETS_PATH,
      ),
    };

    return config;
  },
};
export default config;
