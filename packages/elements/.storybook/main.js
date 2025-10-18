export default {
  framework: { name: "@storybook/react-vite", options: {} },
  stories: ["../src/**/*.stories.@(js|jsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ]
};
