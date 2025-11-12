/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/session/route";
exports.ids = ["app/api/auth/session/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Akshya_Aditya_Downloads_kaushal_sathi_internship_KaushalSaathi_Sunsys_app_api_auth_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/session/route.ts */ \"(rsc)/./app/api/auth/session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/session/route\",\n        pathname: \"/api/auth/session\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/session/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Akshya Aditya\\\\Downloads\\\\kaushal_sathi_internship\\\\KaushalSaathi-Sunsys-\\\\app\\\\api\\\\auth\\\\session\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Akshya_Aditya_Downloads_kaushal_sathi_internship_KaushalSaathi_Sunsys_app_api_auth_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBa3NoeWElMjBBZGl0eWElNUNEb3dubG9hZHMlNUNrYXVzaGFsX3NhdGhpX2ludGVybnNoaXAlNUNLYXVzaGFsU2FhdGhpLVN1bnN5cy0lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0Frc2h5YSUyMEFkaXR5YSU1Q0Rvd25sb2FkcyU1Q2thdXNoYWxfc2F0aGlfaW50ZXJuc2hpcCU1Q0thdXNoYWxTYWF0aGktU3Vuc3lzLSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUU7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F1c2hhbHNhYXRoaS8/ZTg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQWtzaHlhIEFkaXR5YVxcXFxEb3dubG9hZHNcXFxca2F1c2hhbF9zYXRoaV9pbnRlcm5zaGlwXFxcXEthdXNoYWxTYWF0aGktU3Vuc3lzLVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2Vzc2lvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9zZXNzaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9zZXNzaW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3Nlc3Npb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBa3NoeWEgQWRpdHlhXFxcXERvd25sb2Fkc1xcXFxrYXVzaGFsX3NhdGhpX2ludGVybnNoaXBcXFxcS2F1c2hhbFNhYXRoaS1TdW5zeXMtXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxzZXNzaW9uXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/session/route.ts":
/*!***************************************!*\
  !*** ./app/api/auth/session/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\nasync function GET() {\n    try {\n        const token = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).get(\"ks_session\")?.value;\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        const db = client.db(\"kaushalsaathi\");\n        const session = await db.collection(\"sessions\").findOne({\n            token,\n            expiresAt: {\n                $gt: new Date()\n            }\n        });\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            });\n        }\n        const user = await db.collection(\"users\").findOne({\n            _id: session.userId\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                id: user._id,\n                email: user.email,\n                name: user.username\n            }\n        });\n    } catch (err) {\n        console.error(\"Session error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: null\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2Vzc2lvbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ0o7QUFDRztBQUVsQyxlQUFlRztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsUUFBUSxDQUFDLE1BQU1ILHFEQUFPQSxFQUFDLEVBQUdJLEdBQUcsQ0FBQyxlQUFlQztRQUNuRCxJQUFJLENBQUNGLE9BQU87WUFDVixPQUFPSixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUs7UUFDeEM7UUFFQSxNQUFNQyxTQUFTLE1BQU1QLG9EQUFhQTtRQUNsQyxNQUFNUSxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsTUFBTUMsVUFBVSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsWUFBWUMsT0FBTyxDQUFDO1lBQ3REVDtZQUNBVSxXQUFXO2dCQUFFQyxLQUFLLElBQUlDO1lBQU87UUFDL0I7UUFFQSxJQUFJLENBQUNMLFNBQVM7WUFDWixPQUFPWCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUs7UUFDeEM7UUFFQSxNQUFNQSxPQUFPLE1BQU1FLEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxPQUFPLENBQUM7WUFBRUksS0FBS04sUUFBUU8sTUFBTTtRQUFDO1FBQ3hFLElBQUksQ0FBQ1YsTUFBTTtZQUNULE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVDLE1BQU07WUFBSztRQUN4QztRQUVBLE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDdkJDLE1BQU07Z0JBQUVXLElBQUlYLEtBQUtTLEdBQUc7Z0JBQUVHLE9BQU9aLEtBQUtZLEtBQUs7Z0JBQUVDLE1BQU1iLEtBQUtjLFFBQVE7WUFBQztRQUMvRDtJQUNGLEVBQUUsT0FBT0MsS0FBVTtRQUNqQkMsUUFBUUMsS0FBSyxDQUFDLGtCQUFrQkY7UUFDaEMsT0FBT3ZCLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsTUFBTTtRQUFLO0lBQ3hDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXVzaGFsc2FhdGhpLy4vYXBwL2FwaS9hdXRoL3Nlc3Npb24vcm91dGUudHM/YTJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCJAL2xpYi9tb25nb2RiXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KFwia3Nfc2Vzc2lvblwiKT8udmFsdWVcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogbnVsbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwia2F1c2hhbHNhYXRoaVwiKVxyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwic2Vzc2lvbnNcIikuZmluZE9uZSh7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBleHBpcmVzQXQ6IHsgJGd0OiBuZXcgRGF0ZSgpIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBudWxsIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHsgX2lkOiBzZXNzaW9uLnVzZXJJZCB9KVxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVzZXI6IG51bGwgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICB1c2VyOiB7IGlkOiB1c2VyLl9pZCwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIudXNlcm5hbWUgfSxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTZXNzaW9uIGVycm9yOlwiLCBlcnIpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBudWxsIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb29raWVzIiwiY2xpZW50UHJvbWlzZSIsIkdFVCIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJqc29uIiwidXNlciIsImNsaWVudCIsImRiIiwic2Vzc2lvbiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZXhwaXJlc0F0IiwiJGd0IiwiRGF0ZSIsIl9pZCIsInVzZXJJZCIsImlkIiwiZW1haWwiLCJuYW1lIiwidXNlcm5hbWUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/session/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI || \"mongodb://127.0.0.1:27017/kaushalsaathi\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    console.warn(\"MONGODB_URI not set, using local MongoDB\");\n}\nif (true) {\n    // In development mode, use a global variable to preserve the client across hot reloads\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUk7QUFDdkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNMLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCSSxRQUFRQyxJQUFJLENBQUM7QUFDZjtBQUVBLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsdUZBQXVGO0lBQ3ZGLElBQUksQ0FBQyxPQUFnQlMsbUJBQW1CLEVBQUU7UUFDeENMLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzdCSyxPQUFlQyxtQkFBbUIsR0FBR0wsT0FBT00sT0FBTztJQUN0RDtJQUNBTCxnQkFBZ0IsT0FBZ0JJLG1CQUFtQjtBQUNyRCxPQUFPLEVBSU47QUFFRCxpRUFBZUosYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2thdXNoYWxzYWF0aGkvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8IFwibW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9rYXVzaGFsc2FhdGhpXCI7XHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICBjb25zb2xlLndhcm4oXCJNT05HT0RCX1VSSSBub3Qgc2V0LCB1c2luZyBsb2NhbCBNb25nb0RCXCIpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSB0byBwcmVzZXJ2ZSB0aGUgY2xpZW50IGFjcm9zcyBob3QgcmVsb2Fkc1xyXG4gIGlmICghKGdsb2JhbCBhcyBhbnkpLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgKGdsb2JhbCBhcyBhbnkpLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gKGdsb2JhbCBhcyBhbnkpLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBlYWNoIGNvbm5lY3Rpb25cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25zb2xlIiwid2FybiIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAkshya%20Aditya%5CDownloads%5Ckaushal_sathi_internship%5CKaushalSaathi-Sunsys-&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();