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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Pepijn Fijt | Portfolio | Software developer | Rotterdam';
      }

      _createClass(AppComponent, [{
        key: "showVideo",
        value: function showVideo() {
          return window.screen.width > 1200;
        }
      }, {
        key: "vh",
        value: function vh(v) {
          var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          return v * h / 100;
        }
      }, {
        key: "vw",
        value: function vw(v) {
          var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          return v * w / 100;
        }
      }, {
        key: "changeNavigationStyle",
        value: function changeNavigationStyle(addClass, removeClass) {
          document.querySelectorAll('.navigation-bar-element').forEach(function (navElement) {
            navElement.classList.add(addClass);

            if (removeClass) {
              navElement.classList.remove(removeClass);
            }
          });
        }
      }, {
        key: "changeNavigationStyleEvent",
        value: function changeNavigationStyleEvent(event) {
          if (window.pageYOffset > this.vh(76)) {
            this.changeNavigationStyle('text-dark', 'text-light');
            document.getElementById('navigation-bar').classList.add('bg-light');
          } else {
            this.changeNavigationStyle('text-light', 'text-dark');
            document.getElementById('navigation-bar').classList.remove('bg-light');
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
            return ctx.changeNavigationStyleEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 68,
      vars: 2,
      consts: [["id", "navigation-bar", "role", "navigation", 1, "navbar", "navbar-light", "fixed-top"], ["routerLink", "/", 1, "navbar-brand", "text-light", "navigation-bar-element"], ["href", "https://nl.linkedin.com/in/pepijn-fijt-62781b185", "target", "_blank", 1, "mr-4", "text-light", "navigation-bar-element"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/pffijt", "target", "_blank", 1, "mr-4", "text-light", "navigation-bar-element"], [1, "fa", "fa-github", "fa-lg", "mr-1"], ["href", "mailto:mail@pepijnfijt.nl", 1, "text-light", "navigation-bar-element"], [1, "fa", "fa-paper-plane", "fa-lg", "mr-1"], [1, "header-overlay"], [1, "header-title", "text-light", "p-2"], [1, "header-sort-down"], [1, "fa", "fa-sort-down", "fa-2x", "text-light"], ["class", "header-size", 4, "ngIf", "ngIfElse"], ["noVideo", ""], [1, "section-project", "mt-0", "mb-0", "pt-5", "pb-5", "text-dark"], [1, "mt-0", "mb-0", "text-center"], [1, "row", "justify-content-center", "pt-5", "pb-5", 2, "margin-left", "-5px"], [1, "col-4", "no-gutters", "gram-block"], ["src", "https://picsum.photos/400/400", 1, "gram-container"], [1, "section-employer", "mt-0", "mb-0", "pt-5", "pb-5", "text-dark"], [1, "d-flex", "justify-content-center"], [1, "card", "rounded-0", "mb-3", "mt-5", "mr-2", "ml-2", 2, "max-width", "18rem"], [1, "card-body", "text-dark"], [1, "card-title"], [1, "card-text"], [1, "card", "rounded-0", "mb-3", "mt-5", "ml-2", "mr-2", 2, "max-width", "18rem"], [1, "section-contact", "mt-0", "mb-0", "pt-5", "pb-5", "text-dark"], [1, "mt-0", "mb-0", "pb-4", "text-center"], [1, "text-center", "mb-3"], [1, "fa", "fa-paper-plane", "fa-lg", "pr-1"], ["href", "mailto:mail@pepijnfijt.nl", 1, "text-dark"], [1, "text-center"], [1, "fa", "fa-phone", "fa-lg", "pr-1"], [1, "header-size"], ["poster", "./assets/header_poster.jpg", "autoplay", "true", "muted", "true", "loop", ""], ["src", "./assets/Pexels Videos 2609.mp4", "type", "video/mp4"], ["src", "./assets/header_poster.jpg"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pepijn Fijt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Software developer and smart mobility enthusiast.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_16_Template, 3, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_template_17_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Current Situation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "University of Applied Sciences Rotterdam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Informatics, Professional bachelor degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(2017 - current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Junior Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sweco, de Bilt (The Netherlands)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(2019 - current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "pffijt@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " +31614125929 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showVideo())("ngIfElse", _r1);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".header-size[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.header-size[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.header-sort-down[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(50vw - 9.1px);\n  top: 66vh;\n  -webkit-animation-name: sort-down-animation;\n          animation-name: sort-down-animation;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes sort-down-animation {\n  0% {\n    top: 66vh;\n  }\n  50% {\n    top: 65.5vh;\n  }\n  100% {\n    top: 66vh;\n  }\n}\n\n@keyframes sort-down-animation {\n  0% {\n    top: 66vh;\n  }\n  50% {\n    top: 65.5vh;\n  }\n  100% {\n    top: 66vh;\n  }\n}\n\n.gram-block[_ngcontent-%COMP%] {\n  max-width: 95vw;\n}\n\n.gram-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6px auto;\n  max-width: 90vw;\n}\n\n.section-project[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.section-employer[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.section-contact[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BvcHMvRG9jdW1lbnRzL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNBSjs7QURHQTtFQUNJO0lBQUksU0FBQTtFQ0NOO0VEQUU7SUFBSyxXQUFBO0VDR1A7RURGRTtJQUFNLFNBQUE7RUNLUjtBQUNGOztBRFRBO0VBQ0k7SUFBSSxTQUFBO0VDQ047RURBRTtJQUFLLFdBQUE7RUNHUDtFREZFO0lBQU0sU0FBQTtFQ0tSO0FBQ0Y7O0FESEE7RUFDSSxlQUFBO0FDS0o7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS0o7O0FERkE7RUFDSSx5QkFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7QUNLSjs7QUREQTtFQUNJLHlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXItc2l6ZSB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaGVhZGVyLXNpemUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpO1xufVxuXG4uaGVhZGVyLXNvcnQtZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDkuMXB4KTtcbiAgICB0b3A6IDY2dmg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNvcnQtZG93bi1hbmltYXRpb247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNvcnQtZG93bi1hbmltYXRpb24ge1xuICAgIDAlIHt0b3A6IDY2dmg7fVxuICAgIDUwJSB7dG9wOiA2NS41dmg7fVxuICAgIDEwMCUge3RvcDogNjZ2aDt9XG59XG5cbi5ncmFtLWJsb2NrIHtcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG59XG5cbi5ncmFtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA2cHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG59XG5cbi5zZWN0aW9uLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWN0aW9uLWVtcGxveWVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuXG59XG5cbi5zZWN0aW9uLWNvbnRhY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59IiwiLmhlYWRlci1zaXplIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXItc2l6ZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5oZWFkZXItc29ydC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwdncgLSA5LjFweCk7XG4gIHRvcDogNjZ2aDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNvcnQtZG93bi1hbmltYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc29ydC1kb3duLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0b3A6IDY2dmg7XG4gIH1cbiAgNTAlIHtcbiAgICB0b3A6IDY1LjV2aDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDY2dmg7XG4gIH1cbn1cbi5ncmFtLWJsb2NrIHtcbiAgbWF4LXdpZHRoOiA5NXZ3O1xufVxuXG4uZ3JhbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2cHggYXV0bztcbiAgbWF4LXdpZHRoOiA5MHZ3O1xufVxuXG4uc2VjdGlvbi1wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlY3Rpb24tZW1wbG95ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uc2VjdGlvbi1jb250YWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        changeNavigationStyleEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /home/pops/Documents/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map