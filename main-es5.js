function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <app-header class=\"header\"></app-header>\r\n  <main class=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>card works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/deque/deque.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deque/deque.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDequeDequeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>deque works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <footer class=\"footer\">\r\n    <p>Raman Nekhaichyk</p>\r\n    <p>2019</p>\r\n  </footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n <header class=\"header\">\r\n   <p class=\"logo\">Data Structure</p>\r\n   <app-navigation class=\"nav\"></app-navigation>\r\n </header>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>input works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <nav class=\"navigation\">\r\n    <ul class=\"navigation__list\">\r\n      <li class=\"navigation__item\" routerLinkActive=\"active\">\r\n        <a class=\"navigation__link\" routerLink=\"/stack\">Stack</a>\r\n      </li>\r\n      <li class=\"navigation__item\">\r\n        <a class=\"navigation__link\" routerLink=\"/qeue\">Queue</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/output/output.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/output/output.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOutputOutputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>output works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/qeue/qeue.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qeue/qeue.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQeueQeueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <section class=\"queue__section\">\r\n    <h2 class=\"queue__header\">How does Queue Work</h2>\r\n    <div class=\"container structure\">\r\n      <div class=\"queue__structure\"\r\n        [ngStyle]=\"{'background':leftBgColor}\"\r\n      >\r\n      </div>\r\n\r\n      <div class=\"queue__structure queue\">\r\n        <div\r\n          class=\"queue__filter\"\r\n          [class.animation-left]=\"!filterVerdict && filterVerdict !== null\"\r\n          [class.animation-right]=\"filterVerdict && filterVerdict !== null\"\r\n          [ngStyle]=\"{'background' : filteredCard ? filteredCard.color : 'transparent'}\"\r\n        >\r\n        </div>\r\n        <ul class=\"queue__list\" *ngIf=\"flow.length !== 0\">\r\n            <li class=\"queue__item\" *ngFor=\"let card of flow\"\r\n                [ngStyle]=\"{'background': (card | background)}\"\r\n                [class.animation-add]=\"card\"\r\n            ></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"queue__structure\"\r\n           [ngStyle]=\"{'background': rightBgColor}\"\r\n      >\r\n      </div>\r\n    </div>\r\n    <div class=\"methods__container\">\r\n      <h3 class=\"methods__header\">Methods:</h3>\r\n      <ul class=\"methods__list\">\r\n        <li class=\"method__item\">\r\n          <button\r\n            class=\"method__btn\"\r\n            (click)=\"enqueue()\"\r\n          >enqueue</button>\r\n        </li>\r\n\r\n        <li class=\"method__item\">\r\n          <button\r\n            class=\"method__btn\"\r\n            (click)=\"dequeue()\"\r\n            [disabled]=\"shouldDequeueDisabled || flow.length === 0\"\r\n          >dequeue</button>\r\n        </li>\r\n\r\n        <li\r\n          class=\"method__item\"\r\n          [ngStyle]=\"{'color': flow[0] | background}\"\r\n        >\r\n          <p class=\"method__btn\">front</p>\r\n        </li>\r\n\r\n        <li class=\"method__item\">\r\n          <p\r\n            class=\"method__btn\"\r\n            [class.empty-true]=\"flow.length === 0\"\r\n            [class.empty-false]=\"flow.length !== 0\"\r\n          >isEmpty</p>\r\n        </li>\r\n\r\n        <li class=\"method__item\">\r\n          <p class=\"method__btn\">size: {{flow.length}}</p>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStackStackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"stack\">\r\n  <h2 class=\"stack__header\">{{'How does Stack works' | uppercase}}</h2>\r\n  <div class=\"container\">\r\n    <div class=\"stack__input input\">\r\n      <h3 class=\"input__header\">Input</h3>\r\n      <ul class=\"input__list\" >\r\n        <li *ngFor=\"let item of input\"\r\n            [class.animation-add]=\"addAnimation\"\r\n            class=\"input__item\"\r\n            [ngStyle]=\"{'background': item.color}\"\r\n        >\r\n          <h4>{{item.color}}</h4>\r\n        </li>\r\n      </ul>\r\n      <button (click)=\"addData()\" class=\"input__button\">Add data</button>\r\n    </div>\r\n    <div class=\"stack__structure structure\">\r\n      <h3 class=\"structure__header\">Stack</h3>\r\n      <ul class=\"stack__list\"\r\n        [class.animation-clear]=\"clearAnimation\" [class.animation]=\"!clearAnimation\"\r\n\r\n      >\r\n        <li class=\"stack__item\"\r\n            *ngFor=\"let item of stackItems.reverse()\"\r\n            [class.animation-move-stack]=\"item.move\"\r\n            [ngStyle]=\"{'background': item.color}\"\r\n            >\r\n\r\n          <h4>{{item.color}}</h4>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"stack__output output\">\r\n      <h3 class=\"output__header\">Output</h3>\r\n      <ul class=\"output__list\" *ngIf=\"output !== undefined\">\r\n        <li class=\"output__item\" [class.animation-move-stack]=\"output.move\"\r\n            [class.animation-leave]=\"output.complete\"\r\n            [ngStyle]=\"{'background': output.color}\">\r\n          <h4>{{output.color}}</h4>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"wrapper methods\">\r\n    <h3 class=\"methods__header\">Methods:</h3>\r\n    <ul class=\"methods__list\">\r\n      <li class=\"methods__item\">\r\n        <button class=\"method__button\"\r\n                (click)=\"push()\"\r\n                [disabled]=\"!(input.length > 0) || stackItems.length > 5\"\r\n        >Push</button>\r\n      </li>\r\n      <li class=\"methods__item\">\r\n        <button\r\n          class=\"method__button\"\r\n          [disabled]=\"!(stackItems.length > 0)\"\r\n          (click)=\"popItem()\"\r\n        >Pop</button>\r\n      </li>\r\n      <li class=\"methods__item\">\r\n        <button\r\n          class=\"method__button\"\r\n          [disabled]=\"!(stackItems.length > 0)\"\r\n          (click)=\"clear()\"\r\n        >Clear</button>\r\n      </li>\r\n      <li class=\"methods__item\">\r\n        <p\r\n          class=\"method__button\"\r\n          [ngStyle]=\"{'color': peeked ? peeked.color : 'black'}\"\r\n        >{{peeked ? 'Peeked' : 'Nothing'}}</p>\r\n      </li>\r\n      <li class=\"methods__item\">\r\n        <p\r\n          class=\"method__button\"\r\n        >Size: {{this.stackItems.length}}</p>\r\n      </li>\r\n      <li class=\"methods__item\">\r\n        <p\r\n          class=\"method__button\"\r\n          [class.empty]=\"this.stackItems.length === 0\"\r\n          [class.full]=\"this.stackItems.length !== 0\"\r\n        >empty: {{this.stackItems.length === 0}}</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _stack_stack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stack/stack.component */
    "./src/app/stack/stack.component.ts");
    /* harmony import */


    var _qeue_qeue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./qeue/qeue.component */
    "./src/app/qeue/qeue.component.ts");

    var routes = [{
      path: 'stack',
      component: _stack_stack_component__WEBPACK_IMPORTED_MODULE_3__["StackComponent"]
    }, {
      path: 'qeue',
      component: _qeue_qeue_component__WEBPACK_IMPORTED_MODULE_4__["QeueComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n\n.main {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBc3VzXFxEZXNrdG9wXFzQv9CzXFxBbmd1bGFyXFxOZXcgcHJvamVjdHNcXGFuZ3VsYXItZGF0YS1zdHJ1Y3R1cmUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQU1mO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmhlYWRlciB7XHJcblxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-data-structure';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _stack_stack_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stack/stack.component */
    "./src/app/stack/stack.component.ts");
    /* harmony import */


    var _deque_deque_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./deque/deque.component */
    "./src/app/deque/deque.component.ts");
    /* harmony import */


    var _qeue_qeue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./qeue/qeue.component */
    "./src/app/qeue/qeue.component.ts");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/input/input.component.ts");
    /* harmony import */


    var _output_output_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./output/output.component */
    "./src/app/output/output.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _pipes_background_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pipes/background.pipe */
    "./src/app/pipes/background.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _stack_stack_component__WEBPACK_IMPORTED_MODULE_8__["StackComponent"], _deque_deque_component__WEBPACK_IMPORTED_MODULE_9__["DequeComponent"], _qeue_qeue_component__WEBPACK_IMPORTED_MODULE_10__["QeueComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], _output_output_component__WEBPACK_IMPORTED_MODULE_12__["OutputComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _pipes_background_pipe__WEBPACK_IMPORTED_MODULE_14__["BackgroundPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/card/card.component.scss":
  /*!******************************************!*\
    !*** ./src/app/card/card.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/deque/deque.component.scss":
  /*!********************************************!*\
    !*** ./src/app/deque/deque.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDequeDequeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcXVlL2RlcXVlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/deque/deque.component.ts":
  /*!******************************************!*\
    !*** ./src/app/deque/deque.component.ts ***!
    \******************************************/

  /*! exports provided: DequeComponent */

  /***/
  function srcAppDequeDequeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DequeComponent", function () {
      return DequeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DequeComponent =
    /*#__PURE__*/
    function () {
      function DequeComponent() {
        _classCallCheck(this, DequeComponent);
      }

      _createClass(DequeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DequeComponent;
    }();

    DequeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deque',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deque.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/deque/deque.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deque.component.scss */
      "./src/app/deque/deque.component.scss")).default]
    })], DequeComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  box-sizing: border-box;\n  background-color: black;\n  color: white;\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQXN1c1xcRGVza3RvcFxc0L/Qs1xcQW5ndWxhclxcTmV3IHByb2plY3RzXFxhbmd1bGFyLWRhdGEtc3RydWN0dXJlL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBTGM7RUFNZCxZQUxXO0VBTVgsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmctY29sb3I6IGJsYWNrO1xyXG4kY29sb3I6IHdoaXRlO1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  box-sizing: border-box;\n  background: black;\n  display: flex;\n  color: white;\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\n.header {\n  flex-grow: 1;\n  display: flex; }\n\n.nav {\n  flex-grow: 1;\n  box-sizing: border-box;\n  display: flex; }\n\n.logo {\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQXN1c1xcRGVza3RvcFxc0L/Qs1xcQW5ndWxhclxcTmV3IHByb2plY3RzXFxhbmd1bGFyLWRhdGEtc3RydWN0dXJlL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFKYztFQUtkLGFBQWE7RUFDYixZQUxXO0VBTVgsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZy1jb2xvcjogYmxhY2s7XHJcbiRjb2xvcjogd2hpdGU7XHJcbi5jb250YWluZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/input/input.component.scss":
  /*!********************************************!*\
    !*** ./src/app/input/input.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/input/input.component.ts":
  /*!******************************************!*\
    !*** ./src/app/input/input.component.ts ***!
    \******************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputComponent =
    /*#__PURE__*/
    function () {
      function InputComponent() {
        _classCallCheck(this, InputComponent);
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputComponent;
    }();

    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input.component.scss */
      "./src/app/input/input.component.scss")).default]
    })], InputComponent);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/navigation/navigation.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-grow: 1; }\n\n.navigation {\n  display: flex;\n  flex-grow: 1; }\n\n.navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-end;\n  align-items: center; }\n\n.navigation__item {\n  margin-right: 2rem;\n  font: inherit;\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n  align-items: center; }\n\n.navigation__link {\n  text-decoration: none;\n  color: white;\n  height: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-shadow: none;\n  outline: none;\n  transition: box-shadow 0.25s; }\n\n.navigation__link:hover, .navigation__link:focus {\n    transition: box-shadow 0.25s;\n    box-shadow: 0px 3px 0px 0px white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXEFzdXNcXERlc2t0b3BcXNC/0LNcXEFuZ3VsYXJcXE5ldyBwcm9qZWN0c1xcYW5ndWxhci1kYXRhLXN0cnVjdHVyZS9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFFaEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxxQkFBcUI7RUFDckIsWUFqQ2dCO0VBa0NoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEIsRUFBQTs7QUFUOUI7SUFXSSw0QkFBNEI7SUFDNUIsaUNBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGluay1jb2xvcjogd2hpdGU7XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzO1xyXG4gICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/output/output.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/output/output.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOutputOutputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/output/output.component.ts":
  /*!********************************************!*\
    !*** ./src/app/output/output.component.ts ***!
    \********************************************/

  /*! exports provided: OutputComponent */

  /***/
  function srcAppOutputOutputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutputComponent", function () {
      return OutputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OutputComponent =
    /*#__PURE__*/
    function () {
      function OutputComponent() {
        _classCallCheck(this, OutputComponent);
      }

      _createClass(OutputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OutputComponent;
    }();

    OutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-output',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./output.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/output/output.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./output.component.scss */
      "./src/app/output/output.component.scss")).default]
    })], OutputComponent);
    /***/
  },

  /***/
  "./src/app/pipes/background.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/background.pipe.ts ***!
    \******************************************/

  /*! exports provided: BackgroundPipe */

  /***/
  function srcAppPipesBackgroundPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundPipe", function () {
      return BackgroundPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BackgroundPipe =
    /*#__PURE__*/
    function () {
      function BackgroundPipe() {
        _classCallCheck(this, BackgroundPipe);
      }

      _createClass(BackgroundPipe, [{
        key: "transform",
        value: function transform(card) {
          if (card !== undefined) {
            return card.color;
          } else {
            return 'black';
          }
        }
      }]);

      return BackgroundPipe;
    }();

    BackgroundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'background'
    })], BackgroundPipe);
    /***/
  },

  /***/
  "./src/app/qeue/qeue.component.scss":
  /*!******************************************!*\
    !*** ./src/app/qeue/qeue.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppQeueQeueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  overflow: hidden; }\n\n@media screen and (min-width: 600px) {\n  .container {\n    width: 60rem; } }\n\n.queue__section {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n\n.queue__header {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.structure {\n  align-items: flex-start;\n  justify-content: space-between;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  box-sizing: border-box;\n  flex-grow: 1;\n  transition: background 0.8s; }\n\n.queue__structure {\n  flex-grow: 1;\n  height: 100%;\n  box-sizing: border-box; }\n\n.queue__title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase; }\n\n.queue {\n  margin-right: 1rem;\n  margin-left: 1rem; }\n\n.queue__filter {\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.queue__list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.queue__item {\n  height: 4rem; }\n\n.methods__container {\n  padding-left: 2rem;\n  padding-right: 2rem;\n  box-sizing: border-box;\n  display: flex; }\n\n.methods__list {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.method__item {\n  margin-right: 2rem; }\n\n.method__btn {\n  border: 0;\n  background: transparent;\n  padding: 1rem;\n  box-sizing: border-box;\n  height: 100%; }\n\n.methods__header {\n  margin: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.empty-true {\n  color: darkolivegreen; }\n\n.empty-false {\n  color: crimson; }\n\n.animation-left {\n  -webkit-animation: left 200ms;\n          animation: left 200ms; }\n\n.animation-right {\n  -webkit-animation: right 200ms;\n          animation: right 200ms; }\n\n.animation-add {\n  -webkit-animation: add 200ms;\n          animation: add 200ms; }\n\n@-webkit-keyframes left {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(-130%);\n    background: transparent; } }\n\n@keyframes left {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(-130%);\n    background: transparent; } }\n\n@-webkit-keyframes right {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(130%);\n    background: transparent; } }\n\n@keyframes right {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(130%);\n    background: transparent; } }\n\n@-webkit-keyframes add {\n  from {\n    transform: translateY(100%); }\n  to {\n    transform: translateY(0%); } }\n\n@keyframes add {\n  from {\n    transform: translateY(100%); }\n  to {\n    transform: translateY(0%); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcWV1ZS9DOlxcVXNlcnNcXEFzdXNcXERlc2t0b3BcXNC/0LNcXEFuZ3VsYXJcXE5ldyBwcm9qZWN0c1xcYW5ndWxhci1kYXRhLXN0cnVjdHVyZS9zcmNcXGFwcFxccWV1ZVxccWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsU0FBUztFQUNULHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFlBQVksRUFBQTs7QUFJZDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUl4QjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRTtJQUNFLHlCQUF5QixFQUFBO0VBRzNCO0lBQ0UsNEJBQTRCO0lBQzVCLHVCQUF1QixFQUFBLEVBQUE7O0FBUDNCO0VBQ0U7SUFDRSx5QkFBeUIsRUFBQTtFQUczQjtJQUNFLDRCQUE0QjtJQUM1Qix1QkFBdUIsRUFBQSxFQUFBOztBQUkzQjtFQUNFO0lBQ0UseUJBQXlCLEVBQUE7RUFHM0I7SUFDRSwyQkFBMkI7SUFDM0IsdUJBQXVCLEVBQUEsRUFBQTs7QUFQM0I7RUFDRTtJQUNFLHlCQUF5QixFQUFBO0VBRzNCO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QixFQUFBLEVBQUE7O0FBSTNCO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUc3QjtJQUNFLHlCQUF5QixFQUFBLEVBQUE7O0FBTjdCO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUc3QjtJQUNFLHlCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xZXVlL3FldWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjByZW07XHJcbiAgfVxyXG59XHJcbi5xdWV1ZV9fc2VjdGlvbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucXVldWVfX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zdHJ1Y3R1cmUge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHM7XHJcbn1cclxuXHJcbi5xdWV1ZV9fc3RydWN0dXJlIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnF1ZXVlX190aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnF1ZXVlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5xdWV1ZV9fZmlsdGVyIHtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5xdWV1ZV9fbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnF1ZXVlX19pdGVtIHtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcblxyXG4ubWV0aG9kc19fY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZXRob2RzX19saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubWV0aG9kX19pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuLm1ldGhvZF9fYnRuIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1ldGhvZHNfX2hlYWRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmVtcHR5LXRydWUge1xyXG4gIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxufVxyXG4uZW1wdHktZmFsc2Uge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYW5pbWF0aW9uLWxlZnQge1xyXG4gIGFuaW1hdGlvbjogbGVmdCAyMDBtcztcclxuXHJcbn1cclxuLmFuaW1hdGlvbi1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiByaWdodCAyMDBtcztcclxuXHJcbn1cclxuXHJcbi5hbmltYXRpb24tYWRkIHtcclxuICBhbmltYXRpb246IGFkZCAyMDBtcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBsZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzMCUpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYWRkIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/qeue/qeue.component.ts":
  /*!****************************************!*\
    !*** ./src/app/qeue/qeue.component.ts ***!
    \****************************************/

  /*! exports provided: QeueComponent */

  /***/
  function srcAppQeueQeueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QeueComponent", function () {
      return QeueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/queue.service */
    "./src/app/services/queue.service.ts");
    /* harmony import */


    var _services_color_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/color-card.service */
    "./src/app/services/color-card.service.ts");

    var getCoefficient = function getCoefficient(_ref) {
      var red = _ref.red,
          green = _ref.green,
          blue = _ref.blue,
          opacity = _ref.opacity;
      return red + blue + green;
    };

    var filterCards = function filterCards(coef) {
      return coef >= 765 / 2;
    };

    var QeueComponent =
    /*#__PURE__*/
    function () {
      function QeueComponent(queue, colorCard) {
        _classCallCheck(this, QeueComponent);

        this.queue = queue;
        this.colorCard = colorCard;
        this.flow = [];
        this.filteredCard = null;
        this.filterVerdict = null;
        this.shouldDequeueDisabled = false;
        this.leftBgColor = '';
        this.rightBgColor = '';
      }

      _createClass(QeueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var newCard = this.colorCard.generate();
          this.queue.enqueue(newCard);
          this.queue.getQueue().subscribe(function (data) {
            return _this.flow = data;
          });
        }
      }, {
        key: "enqueue",
        value: function enqueue() {
          if (this.flow.length <= 7) {
            var newCard = this.colorCard.generate();
            this.queue.enqueue(newCard);
          }
        }
      }, {
        key: "dequeue",
        value: function dequeue() {
          this.filteredCard = this.queue.dequeue();
          this.cardFiltration();
        }
      }, {
        key: "cardFiltration",
        value: function cardFiltration() {
          var _this2 = this;

          var rgba = this.colorCard.getRGBA(this.filteredCard.color);
          this.filterVerdict = filterCards(getCoefficient(rgba));
          this.filterVerdict ? setTimeout(function () {
            return _this2.rightBgColor = _this2.filteredCard.color;
          }, 100) : setTimeout(function () {
            return _this2.leftBgColor = _this2.filteredCard.color;
          }, 100);
          this.shouldDequeueDisabled = true;
          requestAnimationFrame(function () {
            setTimeout(function () {
              _this2.filterVerdict = null;
              _this2.filteredCard = null;
              _this2.shouldDequeueDisabled = false;
            }, 200);
          });
        }
      }]);

      return QeueComponent;
    }();

    QeueComponent.ctorParameters = function () {
      return [{
        type: _services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"]
      }, {
        type: _services_color_card_service__WEBPACK_IMPORTED_MODULE_3__["ColorCardService"]
      }];
    };

    QeueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qeue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qeue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/qeue/qeue.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qeue.component.scss */
      "./src/app/qeue/qeue.component.scss")).default]
    })], QeueComponent);
    /***/
  },

  /***/
  "./src/app/services/color-card.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/color-card.service.ts ***!
    \************************************************/

  /*! exports provided: randomNumber, ColorCardService */

  /***/
  function srcAppServicesColorCardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomNumber", function () {
      return randomNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorCardService", function () {
      return ColorCardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var randomNumber = function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var randomByte = function randomByte() {
      return randomNumber(0, 255);
    };

    var randomPercent = function randomPercent() {
      return (randomNumber(50, 100) * 0.01).toFixed(2);
    };

    var randomCssRgba = function randomCssRgba() {
      return "rgba(".concat([randomByte(), randomByte(), randomByte(), randomPercent()].join(', '), ")");
    };

    var ColorCardService =
    /*#__PURE__*/
    function () {
      function ColorCardService() {
        var _this3 = this;

        _classCallCheck(this, ColorCardService);

        this.getRed = function (color) {
          return +color.split(', ')[0].substr(5, color.length);
        };

        this.getGreen = function (color) {
          return +color.split(', ')[1];
        };

        this.getBlue = function (color) {
          return +color.split(', ')[2];
        };

        this.getOpacity = function (color) {
          return +color.split(', ')[3].substr(0, color.split(', ')[3].length - 1);
        };

        this.getRGBA = function (color) {
          return {
            red: _this3.getRed(color),
            green: _this3.getGreen(color),
            blue: _this3.getBlue(color),
            opacity: _this3.getOpacity(color)
          };
        };
      }

      _createClass(ColorCardService, [{
        key: "generate",
        value: function generate() {
          return {
            color: randomCssRgba()
          };
        }
      }]);

      return ColorCardService;
    }();

    ColorCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ColorCardService);
    /***/
  },

  /***/
  "./src/app/services/queue.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/queue.service.ts ***!
    \*******************************************/

  /*! exports provided: QueueService */

  /***/
  function srcAppServicesQueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueService", function () {
      return QueueService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var QueueService =
    /*#__PURE__*/
    function () {
      function QueueService() {
        _classCallCheck(this, QueueService);

        this.queue = [];
      }

      _createClass(QueueService, [{
        key: "enqueue",
        value: function enqueue(item) {
          this.queue.push(item);
        }
      }, {
        key: "getQueue",
        value: function getQueue() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.queue);
        }
      }, {
        key: "dequeue",
        value: function dequeue() {
          return this.queue.shift();
        }
      }]);

      return QueueService;
    }();

    QueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QueueService);
    /***/
  },

  /***/
  "./src/app/services/stack.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/stack.service.ts ***!
    \*******************************************/

  /*! exports provided: StackService */

  /***/
  function srcAppServicesStackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackService", function () {
      return StackService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StackService =
    /*#__PURE__*/
    function () {
      function StackService() {
        _classCallCheck(this, StackService);

        this.items = [];
      }

      _createClass(StackService, [{
        key: "push",
        value: function push(item) {
          this.items.push(item);
        }
      }, {
        key: "pop",
        value: function pop() {
          return this.items.pop();
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "peek",
        value: function peek() {
          return this.items[this.items.length - 1];
        }
      }, {
        key: "clear",
        value: function clear() {
          this.items = [];
        }
      }]);

      return StackService;
    }();

    StackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StackService);
    /***/
  },

  /***/
  "./src/app/stack/stack.component.scss":
  /*!********************************************!*\
    !*** ./src/app/stack/stack.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStackStackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stack {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 60rem;\n  margin: 0 auto; }\n\n.stack__header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.15rem;\n  font-size: 1.1667em;\n  line-height: 1.286em;\n  margin: 1.286em 0; }\n\n.container {\n  flex-grow: 1;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between; }\n\n.stack__structure, .stack__input, .stack__output {\n  height: 100%;\n  width: 100%; }\n\n.stack__structure, .stack__input {\n  margin-right: 2rem; }\n\n.output__item, .stack__item, .input__item {\n  padding-left: 1rem; }\n\n.output__item h4, .stack__item h4, .input__item h4 {\n    word-break: break-all;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.stack__list, .output__list {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0;\n  list-style: none; }\n\n.input__list {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0;\n  list-style: none; }\n\n.input__button {\n  padding: 2rem;\n  margin: 0;\n  border: 0;\n  background: transparent;\n  text-transform: uppercase; }\n\n.input__header, .output__header, .structure__header {\n  display: flex;\n  margin: 0;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0 0; }\n\n.wrapper {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.methods {\n  display: flex; }\n\n.methods__header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0; }\n\n.methods__list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.method__button {\n  background: transparent;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0;\n  box-shadow: none;\n  outline: none; }\n\n.method__button:focus, .method__button:hover {\n    cursor: pointer; }\n\n.empty {\n  transition: color 0.25s;\n  color: olivedrab; }\n\n.full {\n  transition: color 0.25s;\n  color: crimson; }\n\n.animation {\n  transform: none; }\n\n.animation-clear {\n  -webkit-animation: clear 0.5s;\n          animation: clear 0.5s; }\n\n.animation-add {\n  -webkit-animation: add 0.3s;\n          animation: add 0.3s; }\n\n.animation-move-stack {\n  -webkit-animation: moveStack 0.3s;\n          animation: moveStack 0.3s; }\n\n.animation-leave {\n  -webkit-animation: complete 0.3s;\n          animation: complete 0.3s; }\n\n@-webkit-keyframes complete {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(200%); } }\n\n@keyframes complete {\n  from {\n    transform: translateX(0%); }\n  to {\n    transform: translateX(200%); } }\n\n@-webkit-keyframes clear {\n  from {\n    transform: translateY(0%);\n    color: inherit; }\n  to {\n    transform: translateY(-200%);\n    color: transparent; } }\n\n@keyframes clear {\n  from {\n    transform: translateY(0%);\n    color: inherit; }\n  to {\n    transform: translateY(-200%);\n    color: transparent; } }\n\n@-webkit-keyframes add {\n  from {\n    transform: translateY(100%); }\n  to {\n    transform: translateY(0%); } }\n\n@keyframes add {\n  from {\n    transform: translateY(100%); }\n  to {\n    transform: translateY(0%); } }\n\n@-webkit-keyframes moveStack {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%); } }\n\n@keyframes moveStack {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%); } }\n\n.input, .stack__structure, .output {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 600px) {\n  .stack__structure, .stack__input {\n    margin-right: 0; }\n  .input__button {\n    padding: 0.3rem; }\n  .output__item, .stack__item, .input__item {\n    padding-left: 0rem; }\n  .method__button {\n    padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhY2svQzpcXFVzZXJzXFxBc3VzXFxEZXNrdG9wXFzQv9CzXFxBbmd1bGFyXFxOZXcgcHJvamVjdHNcXGFuZ3VsYXItZGF0YS1zdHJ1Y3R1cmUvc3JjXFxhcHBcXHN0YWNrXFxzdGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFFdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBOztBQUtwQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUdJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUyxFQUFBOztBQUVYO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFWZjtJQVlJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFO0lBQ0UseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSwyQkFBMkIsRUFBQSxFQUFBOztBQUwvQjtFQUNFO0lBQ0UseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSwyQkFBMkIsRUFBQSxFQUFBOztBQUcvQjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtFQUVoQjtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0IsRUFBQSxFQUFBOztBQVB0QjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtFQUVoQjtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0IsRUFBQSxFQUFBOztBQUl0QjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFO0lBQ0UsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRTtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNFLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsVUFBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9zdGFjay9zdGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFjayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwcmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3RhY2tfX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gIGZvbnQtc2l6ZToxLjE2NjdlbTtcclxuICBsaW5lLWhlaWdodDogMS4yODZlbTtcclxuICBtYXJnaW46IDEuMjg2ZW0gMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnN0YWNrX19zdHJ1Y3R1cmUsIC5zdGFja19faW5wdXQsIC5zdGFja19fb3V0cHV0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGFja19fc3RydWN0dXJlLCAuc3RhY2tfX2lucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLm91dHB1dF9faXRlbSwgLnN0YWNrX19pdGVtLCAuaW5wdXRfX2l0ZW0ge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBoNCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uc3RhY2tfX2xpc3QsIC5vdXRwdXRfX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5pbnB1dF9fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmlucHV0X19idXR0b24ge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLmlucHV0X19oZWFkZXIsIC5vdXRwdXRfX2hlYWRlciwgLnN0cnVjdHVyZV9faGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMCAwO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm1ldGhvZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1ldGhvZHNfX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWV0aG9kc19fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubWV0aG9kX19idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6Zm9jdXMsICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5IHtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcclxuICBjb2xvcjogb2xpdmVkcmFiO1xyXG59XHJcblxyXG4uZnVsbCB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXM7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5hbmltYXRpb24ge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uYW5pbWF0aW9uLWNsZWFyIHtcclxuICBhbmltYXRpb246IGNsZWFyIDAuNXM7XHJcbn1cclxuXHJcbi5hbmltYXRpb24tYWRkIHtcclxuICBhbmltYXRpb246IGFkZCAwLjNzO1xyXG59XHJcblxyXG4uYW5pbWF0aW9uLW1vdmUtc3RhY2sge1xyXG4gIGFuaW1hdGlvbjogbW92ZVN0YWNrIDAuM3M7XHJcbn1cclxuXHJcbi5hbmltYXRpb24tbGVhdmUge1xyXG4gIGFuaW1hdGlvbjogY29tcGxldGUgMC4zcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBjb21wbGV0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgY2xlYXIge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhZGQge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlU3RhY2sge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCwgLnN0YWNrX19zdHJ1Y3R1cmUsLm91dHB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zdGFja19fc3RydWN0dXJlLCAuc3RhY2tfX2lucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLmlucHV0X19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLm91dHB1dF9faXRlbSwgLnN0YWNrX19pdGVtLCAuaW5wdXRfX2l0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1ldGhvZF9fYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/stack/stack.component.ts":
  /*!******************************************!*\
    !*** ./src/app/stack/stack.component.ts ***!
    \******************************************/

  /*! exports provided: StackComponent */

  /***/
  function srcAppStackStackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackComponent", function () {
      return StackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/stack.service */
    "./src/app/services/stack.service.ts");

    function getRandomArbitrary(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomNumber = function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var randomByte = function randomByte() {
      return randomNumber(0, 255);
    };

    var randomPercent = function randomPercent() {
      return (randomNumber(50, 100) * 0.01).toFixed(2);
    };

    var randomCssRgba = function randomCssRgba() {
      return "rgba(".concat([randomByte(), randomByte(), randomByte(), randomPercent()].join(','), ")");
    };

    var StackComponent =
    /*#__PURE__*/
    function () {
      function StackComponent(stackService) {
        _classCallCheck(this, StackComponent);

        this.stackService = stackService;
        this.input = [{
          score: getRandomArbitrary(0, 100),
          move: true,
          color: randomCssRgba(),
          complete: false
        }];
        this.output = undefined;
        this.stackItems = [];
        this.clearAnimation = false;
        this.addAnimation = false;
        this.peeked = stackService.peek();
      }

      _createClass(StackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addAnimation = true;
        }
      }, {
        key: "addData",
        value: function addData() {
          if (this.input.length < 5) {
            this.addAnimation = true;
            this.input.push({
              score: getRandomArbitrary(0, 100),
              move: true,
              color: randomCssRgba(),
              complete: false
            });
          }
        }
      }, {
        key: "push",
        value: function push() {
          var _this4 = this;

          var item = this.input.shift();
          this.stackService.push(item);
          this.stackItems = this.stackService.getItems();
          this.stackItems[this.stackItems.length - 1].move = true;
          this.peeked = this.stackService.peek();
          requestAnimationFrame(function () {
            setTimeout(function () {
              _this4.stackItems[_this4.stackItems.length - 1].move = false;
            }, 800);
          });
        }
      }, {
        key: "popItem",
        value: function popItem() {
          var _this5 = this;

          this.output = this.stackService.pop();
          this.output.move = true;
          this.peeked = this.stackService.peek();
          requestAnimationFrame(function () {
            setTimeout(function () {
              _this5.output.move = false;
            }, 300);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this6 = this;

          this.clearAnimation = true;
          requestAnimationFrame(function () {
            setTimeout(function () {
              _this6.stackService.clear();

              _this6.stackItems = _this6.stackService.getItems();
              _this6.clearAnimation = false;
              _this6.peeked = _this6.stackService.peek();
            }, 300);
          });
        }
      }]);

      return StackComponent;
    }();

    StackComponent.ctorParameters = function () {
      return [{
        type: _services_stack_service__WEBPACK_IMPORTED_MODULE_2__["StackService"]
      }];
    };

    StackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stack',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stack.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stack.component.scss */
      "./src/app/stack/stack.component.scss")).default]
    })], StackComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Asus\Desktop\пг\Angular\New projects\angular-data-structure\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map