export default (api: any) => {
  api.addRuntimePluginKey(() => 'vue');

  // umirc 配置项
  api.describe({
    key: 'vue', // 关键字
    config: {
      schema(joi: any) {
        return joi.object();
      },
    },
  });

  api.registerPlugins([
    require.resolve('./vue'),
  ]);
}