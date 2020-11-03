"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (api) {
    api.registerPlugins([
        {
            id: 'vue',
            key: 'vue',
            apply: function () { return function () { }; }
        },
        require.resolve('./vue'),
    ]);
});
