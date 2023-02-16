import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/*.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/atoms/*.mdx",
    "../src/stories/atoms/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/molecules/*.mdx",
    "../src/stories/molecules/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/organisms/*.mdx",
    "../src/stories/organisms/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-postcss",
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": ["../public"],
};
export default config;