// const config = {
//   stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
//   addons: [],
//   framework: {
//     name: '@storybook/react-vite',
//     options: {
//       builder: {
//         viteConfigPath: 'packages/auth/vite.config.js'
//       },
//     },
//   },
// };

// export default config;

import { resolve } from 'node:path';

export default {
  framework: { name: '@storybook/react-vite', options: { viteConfigPath: 'packages/auth/vite.config.js' } },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // 👇 Force SB to use the elements *source* (skip package.json exports)
      '@shared-ui/elements': resolve(process.cwd(), 'packages/elements/src/index.js'),
    };
    // Make sure the project root for Vite is the auth package (optional but nice)
    config.root = resolve(process.cwd(), 'packages/auth');
    return config;
  }
};
