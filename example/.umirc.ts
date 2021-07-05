import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  plugins: [`${process.cwd()}/../lib`],
  vue: {
    is: true,
    routers: [
      { path: '/', component: `${process.cwd()}/src/pages/index.vue` },
    ]
  }
});
