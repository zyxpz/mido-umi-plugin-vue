"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs-extra");
var glob = require("glob");
// @ts-ignore
var VueLoaderPlugin = require("vue-loader/lib/plugin");
exports.default = (function (api) { return __awaiter(void 0, void 0, void 0, function () {
    var vueUrl, _a, userConfig, _b, vue, _c, is, _d, routers, _e, vuex, routePath, route, routerCode_1, modelsCodeform_1, modelsCode_1, vuexCode_1, entryCode_1, routersCode_1;
    return __generator(this, function (_f) {
        vueUrl = process.env.NODE_ENV === 'development'
            ? [
                { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js' },
                { src: 'https://lib.baomitu.com/vuex/3.5.1/vuex.js' },
                { src: 'https://lib.baomitu.com/vue-router/3.4.7/vue-router.js' },
            ]
            : [
                { src: 'https://cdn.jsdelivr.net/npm/vue' },
                { src: 'https://lib.baomitu.com/vuex/3.5.1/vuex.min.js' },
                { src: 'https://lib.baomitu.com/vue-router/3.4.7/vue-router.min.js' },
            ];
        // umirc 配置项
        api.describe({
            key: 'vue',
            config: {
                schema: function (joi) {
                    return joi.object();
                },
            },
        });
        _a = api.userConfig, userConfig = _a === void 0 ? {} : _a;
        _b = userConfig.vue, vue = _b === void 0 ? {} : _b;
        _c = vue.is, is = _c === void 0 ? false : _c, _d = vue.routers, routers = _d === void 0 ? [] : _d, _e = vue.vuex, vuex = _e === void 0 ? false : _e;
        if (is) {
            routePath = routers.map(function (t) {
                return "import " + t.name + " from '" + t.component + "'";
            });
            route = routers.map(function (t) {
                return "{path: '" + t.path + "', component: " + t.name + "}";
            });
            routerCode_1 = "\n      <template>\n        <div id=\"app\">\n          <router-view></router-view>\n        </div>\n      </template>;\n      <script>\n        export default {\n\n        };\n      </script>;\n\n      <style lang=\"less\">\n\n      </style>\n    ";
            // vuex 模板
            if (vuex) {
                modelsCodeform_1 = [];
                modelsCode_1 = [];
                glob
                    .sync('**', {
                    cwd: path.join(process.cwd(), 'src', 'models'),
                    dot: true,
                    ignore: [],
                })
                    .forEach(function (file) {
                    var fromPath = path.join(process.cwd(), 'src', 'models', file);
                    if (fs.statSync(fromPath).isFile()) {
                        modelsCodeform_1.push("import " + file.replace(/\.js/, '') + " from '" + fromPath + "'");
                        modelsCode_1.push(file.replace(/\.js/, ''));
                    }
                });
                vuexCode_1 = "\n        import Vue from 'vue';\n        import Vuex from 'vuex';\n        " + modelsCodeform_1.join(';') + ";\n        Vue.use(Vuex);\n        export default new Vuex.Store({\n          modules: {\n            " + modelsCode_1.join(',') + ",\n          },\n        });\n      ";
                // 生成vuex
                api.onGenerateFiles(function () {
                    api.writeTmpFile({
                        path: 'vue/vuex.ts',
                        content: vuexCode_1,
                    });
                });
            }
            entryCode_1 = "\n        import Vue from 'vue';\n        import App from './App.vue';\n        import routers from './routers';\n        " + (vuex ? 'import store from "./vuex";' : '') + "\n        new Vue({\n          el: '#root',\n          " + (vuex ? 'store: store,' : '') + "\n          router: routers,\n          render: h => h(App)\n        });\n      ";
            routersCode_1 = "\n      import VueRouter from 'vue-router';\n      import Vue from 'vue';\n      Vue.use(VueRouter);\n      " + routePath.join(';') + ";\n      const routes = [" + route.join(',') + "];\n\n      const router = new VueRouter({\n        routes,\n      });\n\n      export default router;\n    ";
            // 生成vue的入口文件
            api.onGenerateFiles(function () {
                api.writeTmpFile({
                    path: 'vue/index.js',
                    content: entryCode_1,
                });
            });
            // 生成vue项目的配置文件
            api.onGenerateFiles(function () {
                api.writeTmpFile({
                    path: 'vue/App.vue',
                    content: routerCode_1,
                });
            });
            // 生成router文件
            api.onGenerateFiles(function () {
                api.writeTmpFile({
                    path: 'vue/routers.ts',
                    content: routersCode_1,
                });
            });
            // vue不需要dva插件
            api.skipPlugins(['@umijs/plugin-dva']);
            // api.addHTMLLinks(() => {
            //   return [
            //     {
            //       rel: 'stylesheet',
            //       type: 'text/css',
            //       href: '/umi.css',
            //     },
            //   ];
            // });
            // 写入vue CDN
            api.addHTMLScripts(function () {
                return __spreadArrays(vueUrl, [
                    {
                        src: './vendor.js',
                    },
                ]);
            });
            // 配置vue webpack
            api.chainWebpack(function (config) {
                config.entryPoints.delete('umi');
                config
                    .entry('umi')
                    .add(path.resolve(process.cwd(), 'src/.umi/vue/index.js'));
                config.module
                    .rule('umi')
                    .test(/\.vue$/)
                    .include.add(path.resolve(process.cwd() + "/src/"))
                    .end()
                    .use('vue-loader')
                    .loader('vue-loader')
                    .tap(function (options) {
                    return __assign(__assign({}, options), { compilerOptions: {
                            preserveWhitespace: true
                        } });
                });
                config.plugin('vue-loader').use(VueLoaderPlugin);
                config.optimization.splitChunks({
                    cacheGroups: {
                        vendors: {
                            test: /node_modules/,
                            chunks: 'initial',
                            name: 'vendor',
                            priority: 10,
                            enforce: true,
                        },
                        commons: {
                            chunks: 'initial',
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                        },
                    },
                });
                return config;
            });
            // chunks
            api.modifyHTMLChunks(function (memo, opts) { return __awaiter(void 0, void 0, void 0, function () {
                var route;
                return __generator(this, function (_a) {
                    route = opts.route;
                    // do something
                    return [2 /*return*/, memo];
                });
            }); });
            api.modifyDefaultConfig(function (memo) {
                return Object.assign(memo, {
                    urlLoaderExcludes: [/\.vue$/],
                    externals: {
                        vue: 'window.Vue',
                        'vue-router': 'VueRouter',
                        vuex: 'Vuex',
                    },
                });
            });
        }
        return [2 /*return*/];
    });
}); });
