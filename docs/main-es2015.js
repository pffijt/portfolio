(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AppComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'Pepijn Fijt | Portfolio | Software developer | Rotterdam';
        this.showVideo = () => window.screen.width > 1200;
        this.vh = (v) => {
            const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (v * h) / 100;
        };
        this.vw = (v) => {
            const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            return (v * w) / 100;
        };
        this.changeNavigationStyleEvent = (event) => {
            if (window.pageYOffset > this.vh(76)) {
                document.getElementById('navigation-bar').classList.add('bg-nice-dark');
            }
            else {
                document.getElementById('navigation-bar').classList.remove('bg-nice-dark');
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.changeNavigationStyleEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 70, vars: 2, consts: [["id", "navigation-bar", "role", "navigation", 1, "navbar", "navbar-light", "fixed-top", "navbar-animation"], ["routerLink", "/", 1, "navbar-brand", "text-light", "navigation-bar-element"], ["href", "https://nl.linkedin.com/in/pepijn-fijt-62781b185", "target", "_blank", 1, "mr-4", "text-light", "navigation-bar-element"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/pffijt", "target", "_blank", 1, "mr-4", "text-light", "navigation-bar-element"], [1, "fa", "fa-github", "fa-lg", "mr-1"], ["href", "mailto:mail@pepijnfijt.nl", 1, "text-light", "navigation-bar-element"], [1, "fa", "fa-paper-plane", "fa-lg", "mr-1"], [1, "header-overlay"], [1, "header-title", "text-light", "p-2"], [1, "header-moving-arrow"], [1, "fa", "fa-sort-down", "fa-2x", "text-light"], ["class", "header-size", 4, "ngIf", "ngIfElse"], ["noVideo", ""], [1, "section-employer", "mt-2", "mb-2", "text-dark"], [1, "pt-5", "pb-5", "gram-list"], [1, "gram-container", "bg-blue-gradient"], [1, "gram-container", "gram-text"], [1, "section-contact", "mt-0", "mb-0", "pt-5", "pb-5"], [1, "mt-0", "mb-0", "pb-4", "text-light", "text-center"], [1, "text-center", "mb-3"], [1, "text-light"], [1, "fa", "fa-paper-plane", "fa-lg", "pr-1"], ["href", "mailto:mail@pepijnfijt.nl", 1, "text-light"], [1, "text-center"], [1, "fa", "fa-phone", "fa-lg", "pr-1"], [1, "header-size"], ["poster", "./assets/header_poster.jpg", "autoplay", "true", "muted", "true", "loop", ""], ["src", "./assets/Pexels Videos 2609.mp4", "type", "video/mp4"], ["src", "./assets/header_poster.jpg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Full-stack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "National Road Traffic Portal, Utrecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(July. 2021 - current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Junior Software developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sweco, De Bilt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(Feb. 2020 - current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "University of Applied Sciences Rotterdam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Informatics, Professional bachelor degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(Sep. 2017 - July, 2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "pffijt@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " +31614125929 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showVideo())("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".header-size[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .header-size[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 80vh;\n  background-color: rgba(23, 20, 29, 0.85);\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n}\n\n\n\n.header-moving-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(50vw - 9.1px);\n  top: 66vh;\n  -webkit-animation-name: moving-arrow-animation;\n          animation-name: moving-arrow-animation;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes moving-arrow-animation {\n  0% {\n    top: 66vh;\n  }\n  50% {\n    top: 65.5vh;\n  }\n  100% {\n    top: 66vh;\n  }\n}\n@keyframes moving-arrow-animation {\n  0% {\n    top: 66vh;\n  }\n  50% {\n    top: 65.5vh;\n  }\n  100% {\n    top: 66vh;\n  }\n}\n\n\n\n.gram-list[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  justify-content: center;\n}\n.gram-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.gram-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  width: 400px;\n  height: 400px;\n  min-width: 300px;\n  border-radius: 16px;\n  background: #17141d;\n  color: #fff;\n  box-shadow: -3rem 0 3rem #000;\n  transition: 0.2s;\n}\n.gram-text[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.gram-image[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  border-radius: 16px;\n}\n.gram-container[_ngcontent-%COMP%]:hover:not(:first-child) {\n  transform: translateY(-1rem);\n}\n.gram-container[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\n  margin-left: 1.5rem;\n}\n.gram-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  font-size: 3em;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gram-container[_ngcontent-%COMP%]:not(:nth-child(-n+2)) {\n  margin-left: -130px;\n}\n.gram-container[_ngcontent-%COMP%]:hover:not(:first-child)    ~ .gram-container[_ngcontent-%COMP%] {\n  transform: translateX(130px);\n}\n@media only screen and (max-width: 1150px) {\n  .gram-list[_ngcontent-%COMP%] {\n    justify-content: initial;\n  }\n}\n\n.bg-nice-dark[_ngcontent-%COMP%] {\n  background-color: #17141d;\n  box-shadow: 0rem 0 3rem #000;\n}\n.bg-blue-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #00b7ff, #2ee59f) !important;\n}\n.section-project[_ngcontent-%COMP%] {\n  background-color: #17141d;\n}\n.section-employer[_ngcontent-%COMP%] {\n  background-color: #17141d;\n}\n.section-contact[_ngcontent-%COMP%] {\n  background-color: #17141d;\n}\n.navbar-animation[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BlcGlqbi9Eb2N1bWVudHMvcGVyc29vbmxpamsvcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLGdCQUFBO0FBRUEsd0RBQUE7QUFDQSx3QkFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNDSjtBREVBO0VBQ0k7SUFBSSxTQUFBO0VDRU47RURERTtJQUFLLFdBQUE7RUNJUDtFREhFO0lBQU0sU0FBQTtFQ01SO0FBQ0Y7QURWQTtFQUNJO0lBQUksU0FBQTtFQ0VOO0VEREU7SUFBSyxXQUFBO0VDSVA7RURIRTtJQUFNLFNBQUE7RUNNUjtBQUNGO0FETEEsc0JBQUE7QUFFQSxpRkFBQTtBQUNBLHNCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7RUFDeEIsdUJBQUE7QUNPSjtBREpBO0VBQ0ksYUFBQTtBQ09KO0FESkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBRUEsZ0JBQUE7QUNLSjtBREZBO0VBQ0ksZUFBQTtBQ0tKO0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDS0o7QURGQTtFQUNJLDRCQUFBO0FDS0o7QURGQTtFQUNJLG9EQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREZBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNLSjtBREZBO0VBQ0ksbUJBQUE7QUNLSjtBREZBO0VBQ0ksNEJBQUE7QUNLSjtBREZBO0VBQ0k7SUFDSSx3QkFBQTtFQ0tOO0FBQ0Y7QURGQSxvQkFBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0dKO0FEQUE7RUFDSSwrREFBQTtBQ0dKO0FEQUE7RUFDSSx5QkFBQTtBQ0dKO0FEQUE7RUFDSSx5QkFBQTtBQ0dKO0FEQ0E7RUFDSSx5QkFBQTtBQ0VKO0FEQ0E7RUFFQyw0QkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RhcnQ6IGhlYWRlciAqL1xuLmhlYWRlci1zaXplIHZpZGVvLCAuaGVhZGVyLXNpemUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMxNzE0MWQsICRhbHBoYTogMC44NSk7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xufVxuLyogRW5kOiBoZWFkZXIgKi9cblxuLyogVGhlIG1vdmluZyBhcnJvdyBpbnNpZGUgdGhlIGhlYWRlciB3aXRoIHZpZGVvL2ltYWdlICovXG4vKiBTdGFydDogTW92aW5nIGFycm93ICovXG4uaGVhZGVyLW1vdmluZy1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDkuMXB4KTtcbiAgICB0b3A6IDY2dmg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmluZy1hcnJvdy1hbmltYXRpb247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmluZy1hcnJvdy1hbmltYXRpb24ge1xuICAgIDAlIHt0b3A6IDY2dmg7fVxuICAgIDUwJSB7dG9wOiA2NS41dmg7fVxuICAgIDEwMCUge3RvcDogNjZ2aDt9XG59XG4vKiBFbmQ6IE1vdmluZyBhcnJvdyAqL1xuXG4vKiBUaGlzIGNhcmQgdHlwZSBvZiBzdHlsZSBpcyBtYWlubHkgaW5zcGlyZWQgb2YgdGhlIHdvcmsgb2YgeW91dHViZXIgRmlyZXNoaXAgICovXG4vKiBTdGFydDogQ2FyZCBtYWdpYyAqL1xuXG4uZ3JhbS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDsgXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JhbS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyYW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICMxNzE0MWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogLTNyZW0gMCAzcmVtICMwMDA7XG5cbiAgICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi5ncmFtLXRleHQge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmdyYW0taW1hZ2Uge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5ncmFtLWNvbnRhaW5lcjpob3Zlcjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbn1cblxuLmdyYW0tY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjhhMDAsICNlNTJlNzEpO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG5cbi5ncmFtLWNvbnRhaW5lciBoMjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ncmFtLWNvbnRhaW5lcjpub3QoOm50aC1jaGlsZCgtbisyKSkgIHtcbiAgICBtYXJnaW4tbGVmdDogLTEzMHB4O1xufVxuXG4uZ3JhbS1jb250YWluZXI6aG92ZXI6bm90KDpmaXJzdC1jaGlsZCl+LmdyYW0tY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwcHgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAgIC5ncmFtLWxpc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgfVxufVxuXG4vKiBFbmQ6IENhcmQgbWFnaWMgKi9cblxuLmJnLW5pY2UtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcbiAgICBib3gtc2hhZG93OiAwcmVtIDAgM3JlbSAjMDAwOyBcbn1cblxuLmJnLWJsdWUtZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYjdmZiwgIzJlZTU5ZikgIWltcG9ydGFudDtcbn1cblxuLnNlY3Rpb24tcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcbn1cblxuLnNlY3Rpb24tZW1wbG95ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE0MWQ7XG5cbn1cblxuLnNlY3Rpb24tY29udGFjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcbn1cblxuLm5hdmJhci1hbmltYXRpb24ge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG59IiwiLyogU3RhcnQ6IGhlYWRlciAqL1xuLmhlYWRlci1zaXplIHZpZGVvLCAuaGVhZGVyLXNpemUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDIwLCAyOSwgMC44NSk7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLyogRW5kOiBoZWFkZXIgKi9cbi8qIFRoZSBtb3ZpbmcgYXJyb3cgaW5zaWRlIHRoZSBoZWFkZXIgd2l0aCB2aWRlby9pbWFnZSAqL1xuLyogU3RhcnQ6IE1vdmluZyBhcnJvdyAqL1xuLmhlYWRlci1tb3ZpbmctYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDkuMXB4KTtcbiAgdG9wOiA2NnZoO1xuICBhbmltYXRpb24tbmFtZTogbW92aW5nLWFycm93LWFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBtb3ZpbmctYXJyb3ctYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRvcDogNjZ2aDtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogNjUuNXZoO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogNjZ2aDtcbiAgfVxufVxuLyogRW5kOiBNb3ZpbmcgYXJyb3cgKi9cbi8qIFRoaXMgY2FyZCB0eXBlIG9mIHN0eWxlIGlzIG1haW5seSBpbnNwaXJlZCBvZiB0aGUgd29yayBvZiB5b3V0dWJlciBGaXJlc2hpcCAgKi9cbi8qIFN0YXJ0OiBDYXJkIG1hZ2ljICovXG4uZ3JhbS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGaXJlZm94ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JhbS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmFtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMTcxNDFkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogLTNyZW0gMCAzcmVtICMwMDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5ncmFtLXRleHQge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5ncmFtLWltYWdlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uZ3JhbS1jb250YWluZXI6aG92ZXI6bm90KDpmaXJzdC1jaGlsZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xufVxuXG4uZ3JhbS1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjhhMDAsICNlNTJlNzEpO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG4uZ3JhbS1jb250YWluZXIgaDI6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZ3JhbS1jb250YWluZXI6bm90KDpudGgtY2hpbGQoLW4rMikpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcbn1cblxuLmdyYW0tY29udGFpbmVyOmhvdmVyOm5vdCg6Zmlyc3QtY2hpbGQpIH4gLmdyYW0tY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMHB4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLmdyYW0tbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICB9XG59XG4vKiBFbmQ6IENhcmQgbWFnaWMgKi9cbi5iZy1uaWNlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xuICBib3gtc2hhZG93OiAwcmVtIDAgM3JlbSAjMDAwO1xufVxuXG4uYmctYmx1ZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYjdmZiwgIzJlZTU5ZikgIWltcG9ydGFudDtcbn1cblxuLnNlY3Rpb24tcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE0MWQ7XG59XG5cbi5zZWN0aW9uLWVtcGxveWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcbn1cblxuLnNlY3Rpb24tY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE0MWQ7XG59XG5cbi5uYXZiYXItYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { changeNavigationStyleEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pepijn/Documents/persoonlijk/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map