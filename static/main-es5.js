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


    __webpack_exports__["default"] = "<div>\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <a href=\"#\" class=\"navbar-brand\">Inventory Assignment</a>\n    <div class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a routerLink=\"tutorials\" class=\"nav-link\">Tutorials</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"add\" class=\"nav-link\">Add</a>\n      </li>\n    </div>\n  </nav>\n\n  <div class=\"container mt-3\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-inventory/add-inventory.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-inventory/add-inventory.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddInventoryAddInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxFlex fxLayout=\"row\" fxLayoutGap=\"15px\">\n    <div class=\"form-group\" fxFlex=\"20\">\n        <input\n            type=\"text\"\n            placeholder=\"Name\"\n            class=\"form-control\"\n            id=\"name\"\n            (keyup)=\"updateValidation()\"\n            [(ngModel)]=\"inventory.name\"\n            name=\"name\"\n        />\n    </div>\n\n    <div class=\"form-group\" fxFlex=\"20\">\n        <input\n            type=\"number\"\n            placeholder=\"Price\"\n            class=\"form-control\"\n            id=\"price\"\n            (keyup)=\"updateValidation()\"\n            [(ngModel)]=\"inventory.price\"\n            name=\"price\"\n        />\n    </div>\n\n    <div class=\"form-group\" fxFlex=\"20\">\n        <textarea\n            placeholder=\"Description\"\n            class=\"form-control\"\n            id=\"description\"\n            (keyup)=\"updateValidation()\"\n            [(ngModel)]=\"inventory.description\"\n            name=\"description\"\n        ></textarea>\n    </div>\n\n    <div fxFlex=\"20\" fxLayoutGap=\"10px\">\n        <button [ngClass]=\"{disabled: !enableSave}\" (click)=\"enableSave && saveInventory()\" class=\"submit-button btn btn-success\">Submit</button>\n        <button (click)=\"cancel()\" class=\"submit-button btn btn-warning\">Cancel</button>\n    </div>    \n</div>     \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddTutorialAddTutorialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"submit-form\">\n  <div *ngIf=\"!submitted\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"title\"\n        required\n        [(ngModel)]=\"tutorial.title\"\n        name=\"title\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input\n        class=\"form-control\"\n        id=\"description\"\n        required\n        [(ngModel)]=\"tutorial.description\"\n        name=\"description\"\n      />\n    </div>\n\n    <button (click)=\"saveTutorial()\" class=\"btn btn-success\">Submit</button>\n  </div>\n\n  <div *ngIf=\"submitted\">\n    <h4>You submitted successfully!</h4>\n    <button class=\"btn btn-success\" (click)=\"newTutorial()\">Add</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories/inventories.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories/inventories.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoriesInventoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-add-inventory *ngIf=\"isAddClicked\"></app-add-inventory>\n<mat-card class=\"panel-card\">\n    <div class=\"panel-header\" fxLayoutAlign=\"space-between center center\">\n        <div class=\"panel-header-left\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <span class=\"panel-header-name\"> Inventories List</span>\n        </div>\n\n        <div class=\"panel-header-right\">\n            <button\n                class=\"primary-button\"\n                fxLayout=\"row\"\n                fxLayoutAlign=\"center center\"\n                [ngClass]=\"{disabled: isAddClicked}\"\n                (click)=\"!isAddClicked && addInventory()\"\n            > Add Inventory</button>\n        </div>\n    </div>\n\n    <div class=\"panel-content\" fxLayout=\"column\">\n        <table *ngIf=\"inventories\" mat-table [dataSource]=\"dataSource\" class=\"inventory-table\">\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell class=\"header-cell label each-cell\" *matHeaderCellDef> No. </th>\n                <td mat-cell class=\"value each-cell\" *matCellDef=\"let element; let i = index;\">\n                    <span *ngIf=\"i!==selectedIndex\">{{element.name}}</span>\n                    <input\n                        *ngIf=\"i===selectedIndex\"\n                        type=\"text\"\n                        placeholder=\"Name\"\n                        id=\"name\"\n                        required\n                        [(ngModel)]=\"element['name']\"\n                        name=\"name\"\n                    />\n                </td>\n            </ng-container>\n            \n            <!-- Description Column -->\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell class=\"each-cell header-cell label\" *matHeaderCellDef> Name </th>\n                <td mat-cell class=\"each-cell value\" *matCellDef=\"let element; let i = index;\">\n                    <span *ngIf=\"i!==selectedIndex\">{{element.description}}</span>\n                    <input\n                        *ngIf=\"i===selectedIndex\"\n                        type=\"text\"\n                        placeholder=\"Description\"\n                        id=\"description\"\n                        required\n                        [(ngModel)]=\"element['description']\"\n                        name=\"description\"\n                    />\n                </td>\n            </ng-container>\n            \n            <!-- Price Column -->\n            <ng-container matColumnDef=\"price\">\n                <th mat-header-cell class=\"each-cell header-cell label\" *matHeaderCellDef> Weight </th>\n                <td mat-cell class=\"each-cell value\" *matCellDef=\"let element; let i = index;\">\n                    <span *ngIf=\"i!==selectedIndex\">{{element.price}}</span>\n                    <input\n                        *ngIf=\"i===selectedIndex\"\n                        type=\"number\"\n                        placeholder=\"Price\"\n                        id=\"price\"\n                        required\n                        [(ngModel)]=\"element['price']\"\n                        name=\"price\"\n                    />\n                </td>\n            </ng-container>\n            \n            <!-- Action Column -->\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell class=\"each-cell header-cell label\" *matHeaderCellDef> Action </th>\n                <td mat-cell *matCellDef=\"let element; let i = index;\" class=\"each-cell value\" fxLayoutGap=\"10px\">\n                    <span *ngIf=\"i!==selectedIndex\" class=\"link\" (click)=\"edit(i)\">Edit</span>\n                    <span *ngIf=\"i===selectedIndex\" class=\"link\" (click)=\"updateInventory(element['id'], element)\">Update</span>\n                    <span *ngIf=\"i===selectedIndex\" class=\"link\" (click)=\"cancel()\">Cancel</span>\n                    <span *ngIf=\"i!==selectedIndex\" class=\"link\" (click)=\"deleteInventory(element['id'])\">Delete</span>\n                </td>\n            </ng-container>\n            \n            <tr mat-header-row class=\"each-row\" *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row class=\"each-row\" *matRowDef=\"let row; let i = index; columns: displayedColumns;\"></tr>\n        </table>\n        <div\n            class=\"table-footer\"\n            fxFlex\n            fxFlexAlign=\"space-between center center\"\n            fxLayout=\"row\"\n        >\n            <mat-paginator\n                *ngIf=\"(inventories && inventories.length > 5)\"\n                [pageSizeOptions]=\"[5,15,25]\"\n                [pageSize]=\"5\"\n                [showFirstLastButtons]=\"true\"\n                fxFlex\n            ></mat-paginator>\n        </div>\n        <div\n            *ngIf=\"!inventories\"\n            class=\"no-data-panel\"\n        >\n            <div fxFlex fxLayoutAlign=\"center\"> No inventories to display </div>\n        </div>\n    </div>\n</mat-card>\n\n\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialDetailsTutorialDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"currentTutorial\" class=\"edit-form\">\n  <h4>Tutorial</h4>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"title\"\n        [(ngModel)]=\"currentTutorial.title\"\n        name=\"title\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"description\"\n        [(ngModel)]=\"currentTutorial.description\"\n        name=\"description\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label><strong>Status:</strong></label>\n      {{ currentTutorial.published ? \"Published\" : \"Pending\" }}\n    </div>\n  </form>\n\n  <button\n    class=\"badge badge-primary mr-2\"\n    *ngIf=\"currentTutorial.published\"\n    (click)=\"updatePublished(false)\"\n  >\n    UnPublish\n  </button>\n  <button\n    *ngIf=\"!currentTutorial.published\"\n    class=\"badge badge-primary mr-2\"\n    (click)=\"updatePublished(true)\"\n  >\n    Publish\n  </button>\n\n  <button class=\"badge badge-danger mr-2\" (click)=\"deleteTutorial()\">\n    Delete\n  </button>\n\n  <button type=\"submit\" class=\"badge badge-success\" (click)=\"updateTutorial()\">\n    Update\n  </button>\n  <p>{{ message }}</p>\n</div>\n\n<div *ngIf=\"!currentTutorial\">\n  <br />\n  <p>Cannot access this Tutorial...</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialsListTutorialsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list row\">\n  <div class=\"col-md-8\">\n    <div class=\"input-group mb-3\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Search by title\"\n        [(ngModel)]=\"title\"\n      />\n      <div class=\"input-group-append\">\n        <button\n          class=\"btn btn-outline-secondary\"\n          type=\"button\"\n          (click)=\"searchTitle()\"\n        >\n          Search\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Tutorials List</h4>\n    <ul class=\"list-group\">\n      <li\n        class=\"list-group-item\"\n        *ngFor=\"let tutorial of tutorials; let i = index\"\n        [class.active]=\"i == currentIndex\"\n        (click)=\"setActiveTutorial(tutorial, i)\"\n      >\n        {{ tutorial.title }}\n      </li>\n    </ul>\n\n    <button class=\"m-3 btn btn-sm btn-danger\" (click)=\"removeAllTutorials()\">\n      Remove All\n    </button>\n  </div>\n  <div class=\"col-md-6\">\n    <div *ngIf=\"currentTutorial\">\n      <h4>Tutorial</h4>\n      <div>\n        <label><strong>Title:</strong></label> {{ currentTutorial.title }}\n      </div>\n      <div>\n        <label><strong>Description:</strong></label>\n        {{ currentTutorial.description }}\n      </div>\n      <div>\n        <label><strong>Status:</strong></label>\n        {{ currentTutorial.published ? \"Published\" : \"Pending\" }}\n      </div>\n\n      <a class=\"badge badge-warning\" routerLink=\"/tutorials/{{ currentTutorial.id }}\">\n        Edit\n      </a>\n    </div>\n\n    <div *ngIf=\"!currentTutorial\">\n      <br />\n      <p>Please click on a Tutorial...</p>\n    </div>\n  </div>\n</div>\n";
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


    var _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/tutorials-list/tutorials-list.component */
    "./src/app/components/tutorials-list/tutorials-list.component.ts");
    /* harmony import */


    var _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/tutorial-details/tutorial-details.component */
    "./src/app/components/tutorial-details/tutorial-details.component.ts");
    /* harmony import */


    var _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/add-tutorial/add-tutorial.component */
    "./src/app/components/add-tutorial/add-tutorial.component.ts");
    /* harmony import */


    var _components_inventories_inventories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/inventories/inventories.component */
    "./src/app/components/inventories/inventories.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'inventories',
      pathMatch: 'full'
    }, {
      path: 'inventories',
      component: _components_inventories_inventories_component__WEBPACK_IMPORTED_MODULE_6__["InventoriesComponent"]
    }, {
      path: 'tutorials',
      component: _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_3__["TutorialsListComponent"]
    }, {
      path: 'tutorials/:id',
      component: _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_4__["TutorialDetailsComponent"]
    }, {
      path: 'add',
      component: _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["AddTutorialComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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

      this.title = 'Angular8ClientCrud';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/add-tutorial/add-tutorial.component */
    "./src/app/components/add-tutorial/add-tutorial.component.ts");
    /* harmony import */


    var _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/tutorial-details/tutorial-details.component */
    "./src/app/components/tutorial-details/tutorial-details.component.ts");
    /* harmony import */


    var _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/tutorials-list/tutorials-list.component */
    "./src/app/components/tutorials-list/tutorials-list.component.ts");
    /* harmony import */


    var _components_inventories_inventories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/inventories/inventories.component */
    "./src/app/components/inventories/inventories.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _components_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/add-inventory/add-inventory.component */
    "./src/app/components/add-inventory/add-inventory.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["AddTutorialComponent"], _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_8__["TutorialDetailsComponent"], _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_9__["TutorialsListComponent"], _components_inventories_inventories_component__WEBPACK_IMPORTED_MODULE_10__["InventoriesComponent"], _components_add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_14__["AddInventoryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]],
      providers: [],
      entryComponents: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-inventory/add-inventory.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/add-inventory/add-inventory.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddInventoryAddInventoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".submit-button {\n    margin-top: 10px;\n}\n\n.disabled {\n    cursor: not-allowed;\n    color: #b0b0b0;\n    background: #e2e2e2;\n    border: 1px solid #b0b0b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtaW52ZW50b3J5L2FkZC1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWludmVudG9yeS9hZGQtaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGNvbG9yOiAjYjBiMGIwO1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwYjBiMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/add-inventory/add-inventory.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/add-inventory/add-inventory.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddInventoryComponent */

  /***/
  function srcAppComponentsAddInventoryAddInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddInventoryComponent", function () {
      return AddInventoryComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/inventory.service */
    "./src/app/services/inventory.service.ts");

    var AddInventoryComponent =
    /*#__PURE__*/
    function () {
      function AddInventoryComponent(inventoryService, snackBar) {
        _classCallCheck(this, AddInventoryComponent);

        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.inventory = {
          name: '',
          description: '',
          price: ''
        };
        this.enableSave = false;
      }

      _createClass(AddInventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateValidation",
        value: function updateValidation() {
          if (this.inventory.name && this.inventory.price && this.inventory.description) {
            this.enableSave = true;
          } else {
            this.enableSave = false;
          }
        }
      }, {
        key: "saveInventory",
        value: function saveInventory() {
          var _this = this;

          var data = {
            name: this.inventory.name,
            price: this.inventory.price,
            description: this.inventory.description
          };
          this.inventoryService.create(data).subscribe(function (response) {
            _this.snackBar.open('Data Added successfully', '', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'end',
              panelClass: 'success'
            });

            _this.inventoryService.getAllInventories.emit();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.inventoryService.cancelAdd.emit();
        }
      }]);

      return AddInventoryComponent;
    }();

    AddInventoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    AddInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-inventory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-inventory/add-inventory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-inventory.component.css */
      "./src/app/components/add-inventory/add-inventory.component.css")).default]
    })], AddInventoryComponent);
    /***/
  },

  /***/
  "./src/app/components/add-tutorial/add-tutorial.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/add-tutorial/add-tutorial.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddTutorialAddTutorialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".submit-form {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdHV0b3JpYWwvYWRkLXR1dG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdHV0b3JpYWwvYWRkLXR1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWZvcm0ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/add-tutorial/add-tutorial.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/add-tutorial/add-tutorial.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddTutorialComponent */

  /***/
  function srcAppComponentsAddTutorialAddTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTutorialComponent", function () {
      return AddTutorialComponent;
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


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");

    var AddTutorialComponent =
    /*#__PURE__*/
    function () {
      function AddTutorialComponent(tutorialService) {
        _classCallCheck(this, AddTutorialComponent);

        this.tutorialService = tutorialService;
        this.tutorial = {
          title: '',
          description: '',
          published: false
        };
        this.submitted = false;
      }

      _createClass(AddTutorialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveTutorial",
        value: function saveTutorial() {
          var _this2 = this;

          var data = {
            title: this.tutorial.title,
            description: this.tutorial.description
          };
          this.tutorialService.create(data).subscribe(function (response) {
            console.log(response);
            _this2.submitted = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "newTutorial",
        value: function newTutorial() {
          this.submitted = false;
          this.tutorial = {
            title: '',
            description: '',
            published: false
          };
        }
      }]);

      return AddTutorialComponent;
    }();

    AddTutorialComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }];
    };

    AddTutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-tutorial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-tutorial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-tutorial.component.css */
      "./src/app/components/add-tutorial/add-tutorial.component.css")).default]
    })], AddTutorialComponent);
    /***/
  },

  /***/
  "./src/app/components/inventories/inventories.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/inventories/inventories.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInventoriesInventoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel-card {\n    margin-top: 70px;\n    padding: 0;\n    box-shadow: none;\n    border: 1px solid #DDE3E5;\n    margin-bottom: 10px;\n}\n\n.panel-header {\n    padding: 0 15px;\n    border-bottom: 1px solid #DDE3E5;\n    height: 40px;\n}\n\n.panel-header-left {\n    color: #3696BA;\n    font-size: 18px;\n}\n\n.panel-header-left-content {\n    padding-left: 10px;\n}\n\ntable {\n    width: 100%;\n    border-collapse: collapse;\n}\n\n.inventory-table {\n    padding-top: 20px;\n}\n\n.no-data-panel {\n    padding-top: 100px;\n    height: 300px;\n}\n\n.primary-button {\n    cursor: pointer;\n    line-height: 25px;\n    padding: 0 10px;\n    font-size: 14px;\n    color: #f2f2f2;\n    background-color: #3696BA;\n    outline: none;\n    border-radius: 4px;\n    border: 1px solid #3696BA;\n    width: 100%;\n}\n\n.primary-button:focus,\n.primary-button:hover {\n    color: #3696BA;\n    background-color: #f2f2f2;\n    border: 1px solid #3696BA;\n    border-radius: 4px;\n}\n\n.each-row {\n    height: 30px;\n    border-left: 3px solid transparent;\n}\n\n.each-row:hover {\n    background: #F6F6FE;\n    border-left: 3px solid #3696BA;\n}\n\n.header-cell {\n    background: #EEF0F6;\n    border: 1px solid #DDE3E5;\n}\n\n.label {\n    font-weight: 500;\n    font-size: 13px;\n    text-align: center;\n}\n\n.value {\n    font-size: 13px;\n    text-align: center;\n}\n\n.each-cell {\n    border-top: 1px solid #DDE3E5;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-bottom: 1px solid #DDE3E5;\n}\n\n.link {\n    font-size: 13px;\n    color: #3696BA;\n    cursor: pointer;\n}\n\n.disabled {\n    cursor: not-allowed;\n    color: #b0b0b0;\n    background: #e2e2e2;\n    border: 1px solid #b0b0b0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcmllcy9pbnZlbnRvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBOztJQUVJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3JpZXMvaW52ZW50b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFM0U1O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERTNFNTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wYW5lbC1oZWFkZXItbGVmdCB7XG4gICAgY29sb3I6ICMzNjk2QkE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucGFuZWwtaGVhZGVyLWxlZnQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmludmVudG9yeS10YWJsZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5uby1kYXRhLXBhbmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5NkJBO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNjk2QkE7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbjpmb2N1cyxcbi5wcmltYXJ5LWJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICMzNjk2QkE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5NkJBO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmVhY2gtcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmVhY2gtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjZGNkZFO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzM2OTZCQTtcbn1cblxuLmhlYWRlci1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUVGMEY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREUzRTU7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lYWNoLWNlbGwge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRERFM0U1O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREUzRTU7XG59XG5cbi5saW5rIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMzNjk2QkE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgY29sb3I6ICNiMGIwYjA7XG4gICAgYmFja2dyb3VuZDogI2UyZTJlMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjBiMGIwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/inventories/inventories.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/inventories/inventories.component.ts ***!
    \*****************************************************************/

  /*! exports provided: InventoriesComponent */

  /***/
  function srcAppComponentsInventoriesInventoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoriesComponent", function () {
      return InventoriesComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/inventory.service */
    "./src/app/services/inventory.service.ts");

    var InventoriesComponent =
    /*#__PURE__*/
    function () {
      function InventoriesComponent(inventoryService, snackBar, router) {
        var _this3 = this;

        _classCallCheck(this, InventoriesComponent);

        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
        this.router = router;
        this.currentInventory = null;
        this.currentIndex = -1;
        this.name = '';
        this.isAddClicked = false;
        this.selectedIndex = '';
        this.displayedColumns = ['name', 'description', 'price', 'action'];
        this.getAllInventoriesSubscription = this.inventoryService.getAllInventories.subscribe(function () {
          _this3.getInventories();
        });
        this.cancelAddSubscription = this.inventoryService.cancelAdd.subscribe(function () {
          _this3.cancel();
        });
      }

      _createClass(InventoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInventories();
        }
      }, {
        key: "edit",
        value: function edit(index) {
          this.selectedIndex = index;
        }
      }, {
        key: "getInventories",
        value: function getInventories() {
          var _this4 = this;

          this.isAddClicked = false;
          this.inventoryService.getAll().subscribe(function (data) {
            _this4.inventories = data;
            _this4.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this4.inventories);
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          this.getInventories();
          this.currentInventory = null;
          this.currentIndex = -1;
        }
      }, {
        key: "updateInventory",
        value: function updateInventory(id, element) {
          var _this5 = this;

          this.inventoryService.update(id, element).subscribe(function (response) {
            console.log(response);

            _this5.snackBar.open('Data Updated successfully', '', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'end',
              panelClass: 'success'
            });

            _this5.selectedIndex = '';
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteInventory",
        value: function deleteInventory(id) {
          var _this6 = this;

          this.inventoryService.delete(id).subscribe(function (response) {
            console.log(response);

            _this6.refreshList();

            _this6.router.navigate(['/inventories']);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "setDataSourceAttributes",
        value: function setDataSourceAttributes() {
          if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.selectedIndex = '';
          this.isAddClicked = false;
        }
      }, {
        key: "searchName",
        value: function searchName() {
          var _this7 = this;

          this.inventoryService.findByName(this.name).subscribe(function (data) {
            _this7.inventories = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "addInventory",
        value: function addInventory() {
          this.isAddClicked = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.cancelAddSubscription.unsubscribe();
          this.getAllInventoriesSubscription.unsubscribe();
        }
      }, {
        key: "matPaginator",
        set: function set(mp) {
          this.paginator = mp;
          this.setDataSourceAttributes();
        }
      }]);

      return InventoriesComponent;
    }();

    InventoriesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], InventoriesComponent.prototype, "matPaginator", null);
    InventoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventories/inventories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventories.component.css */
      "./src/app/components/inventories/inventories.component.css")).default]
    })], InventoriesComponent);
    /***/
  },

  /***/
  "./src/app/components/tutorial-details/tutorial-details.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/tutorial-details/tutorial-details.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialDetailsTutorialDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-form {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1kZXRhaWxzL3R1dG9yaWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLWRldGFpbHMvdHV0b3JpYWwtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-details/tutorial-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/tutorial-details/tutorial-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TutorialDetailsComponent */

  /***/
  function srcAppComponentsTutorialDetailsTutorialDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialDetailsComponent", function () {
      return TutorialDetailsComponent;
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


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TutorialDetailsComponent =
    /*#__PURE__*/
    function () {
      function TutorialDetailsComponent(tutorialService, route, router) {
        _classCallCheck(this, TutorialDetailsComponent);

        this.tutorialService = tutorialService;
        this.route = route;
        this.router = router;
        this.currentTutorial = null;
        this.message = '';
      }

      _createClass(TutorialDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = '';
          this.getTutorial(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getTutorial",
        value: function getTutorial(id) {
          var _this8 = this;

          this.tutorialService.get(id).subscribe(function (data) {
            _this8.currentTutorial = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updatePublished",
        value: function updatePublished(status) {
          var _this9 = this;

          var data = {
            title: this.currentTutorial.title,
            description: this.currentTutorial.description,
            published: status
          };
          this.tutorialService.update(this.currentTutorial.id, data).subscribe(function (response) {
            _this9.currentTutorial.published = status;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updateTutorial",
        value: function updateTutorial() {
          var _this10 = this;

          this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(function (response) {
            console.log(response);
            _this10.message = 'The tutorial was updated successfully!';
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteTutorial",
        value: function deleteTutorial() {
          var _this11 = this;

          this.tutorialService.delete(this.currentTutorial.id).subscribe(function (response) {
            console.log(response);

            _this11.router.navigate(['/tutorials']);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return TutorialDetailsComponent;
    }();

    TutorialDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TutorialDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-details.component.css */
      "./src/app/components/tutorial-details/tutorial-details.component.css")).default]
    })], TutorialDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/tutorials-list/tutorials-list.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/tutorials-list/tutorials-list.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialsListTutorialsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list {\n  text-align: left;\n  max-width: 750px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbHMtbGlzdC90dXRvcmlhbHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFscy1saXN0L3R1dG9yaWFscy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorials-list/tutorials-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/tutorials-list/tutorials-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TutorialsListComponent */

  /***/
  function srcAppComponentsTutorialsListTutorialsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialsListComponent", function () {
      return TutorialsListComponent;
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


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");

    var TutorialsListComponent =
    /*#__PURE__*/
    function () {
      function TutorialsListComponent(tutorialService) {
        _classCallCheck(this, TutorialsListComponent);

        this.tutorialService = tutorialService;
        this.currentTutorial = null;
        this.currentIndex = -1;
        this.title = '';
      }

      _createClass(TutorialsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.retrieveTutorials();
        }
      }, {
        key: "retrieveTutorials",
        value: function retrieveTutorials() {
          var _this12 = this;

          this.tutorialService.getAll().subscribe(function (data) {
            _this12.tutorials = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          this.retrieveTutorials();
          this.currentTutorial = null;
          this.currentIndex = -1;
        }
      }, {
        key: "setActiveTutorial",
        value: function setActiveTutorial(tutorial, index) {
          this.currentTutorial = tutorial;
          this.currentIndex = index;
        }
      }, {
        key: "removeAllTutorials",
        value: function removeAllTutorials() {
          var _this13 = this;

          this.tutorialService.deleteAll().subscribe(function (response) {
            console.log(response);

            _this13.refreshList();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "searchTitle",
        value: function searchTitle() {
          var _this14 = this;

          this.tutorialService.findByTitle(this.title).subscribe(function (data) {
            _this14.tutorials = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return TutorialsListComponent;
    }();

    TutorialsListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }];
    };

    TutorialsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorials-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorials-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorials-list.component.css */
      "./src/app/components/tutorials-list/tutorials-list.component.css")).default]
    })], TutorialsListComponent);
    /***/
  },

  /***/
  "./src/app/services/inventory.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/inventory.service.ts ***!
    \***********************************************/

  /*! exports provided: InventoryService */

  /***/
  function srcAppServicesInventoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryService", function () {
      return InventoryService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var baseUrl = 'http://localhost:8080/api/inventories';

    var InventoryService =
    /*#__PURE__*/
    function () {
      function InventoryService(http) {
        _classCallCheck(this, InventoryService);

        this.http = http;
        this.getAllInventories = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(InventoryService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http.delete(baseUrl);
        }
      }, {
        key: "findByName",
        value: function findByName(name) {
          return this.http.get("".concat(baseUrl, "?name=").concat(name));
        }
      }]);

      return InventoryService;
    }();

    InventoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InventoryService);
    /***/
  },

  /***/
  "./src/app/services/tutorial.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/tutorial.service.ts ***!
    \**********************************************/

  /*! exports provided: TutorialService */

  /***/
  function srcAppServicesTutorialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialService", function () {
      return TutorialService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var baseUrl = 'http://localhost:8080/api/tutorials';

    var TutorialService =
    /*#__PURE__*/
    function () {
      function TutorialService(http) {
        _classCallCheck(this, TutorialService);

        this.http = http;
      }

      _createClass(TutorialService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http.delete(baseUrl);
        }
      }, {
        key: "findByTitle",
        value: function findByTitle(title) {
          return this.http.get("".concat(baseUrl, "?title=").concat(title));
        }
      }]);

      return TutorialService;
    }();

    TutorialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TutorialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TutorialService);
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
    /*! /home/preeti/Desktop/Assignment/angular-8-node-js-mysql-crud/angular-8-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map