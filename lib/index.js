"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (api) {
    api.addRuntimePluginKey(function () { return 'vue'; });
    // umirc 配置项
    api.describe({
        key: 'vue',
        config: {
            schema: function (joi) {
                return joi.object();
            },
        },
    });
    api.registerPlugins([
        require.resolve('./vue'),
    ]);
});
