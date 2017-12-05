webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// Our Array of Angular 2 Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] // Default Route
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'stats',
        component: __WEBPACK_IMPORTED_MODULE_7__components_stats_stats_component__["a" /* StatsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_9__components_blog_blog_component__["a" /* BlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] } // "Catch-All" Route
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_fusioncharts__ = __webpack_require__("../../../../angular2-fusioncharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_fusioncharts_themes_fusioncharts_theme_ocean__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.ocean.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_fusioncharts_themes_fusioncharts_theme_ocean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_fusioncharts_themes_fusioncharts_theme_ocean__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular2_fusioncharts__["a" /* FusionChartsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18_fusioncharts__, __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_20_fusioncharts_themes_fusioncharts_theme_ocean__)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__guards_notAuth_guard__["a" /* NotAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#a {\r\n  padding-top: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\" id=\"a\">Blog Page</h1>"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        document.body.classList.remove('bg-img1');
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogComponent);
    return BlogComponent;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 54px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  body {\r\n    padding-top: 56px;\r\n  }\r\n}\r\n\r\nheader.masthead {\r\n  background: url('https://78.media.tumblr.com/a44261854f4d6499dd066318364637d1/tumblr_p0d5q9d9Dd1uq7yj2o1_1280.jpg') no-repeat center center scroll;\r\n  background-size: cover;\r\n  -o-background-size: cover;\r\n}\r\n\r\nheader.masthead>.overlay {\r\n  padding: 5rem 0;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  header.masthead>.overlay {\r\n    padding: 10rem 0;\r\n  }\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\r\n  <div class=\"overlay\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-1 text-white\">Reservoir </h1>\r\n      <h2 class=\"display-4 text-white\">This Application Will Rock Your Socks Off</h2>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-6 order-2\">\r\n        <div class=\"p-5\">\r\n          <img class=\"img-fluid rounded-circle\" src=\"https://78.media.tumblr.com/1f0a2ada6f191be6289b339ddef15e8c/tumblr_p0d6r8fK9k1uq7yj2o1_540.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 order-1\">\r\n        <div class=\"p-5\">\r\n          <h2 class=\"display-4\">Statistical Ananlysis</h2>\r\n          <p>This feature gives us an in depth statistical analysis of each and evry reservoir in the USA.\r\n            </p>\r\n            <div><a routerLink=\"/stats\" class=\"btn btn-primary\"  role=\"button\">Ananlysis</a>\r\n            </div></div>\r\n            \r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"p-5\">\r\n          <img class=\"img-fluid rounded-circle\" src=\"https://78.media.tumblr.com/4bda805c6c8a2686c955bec6d5fe73f9/tumblr_p0d5jfTxue1uq7yj2o1_1280.png\"\r\n            alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"p-5\">\r\n          <h2 class=\"display-4\">Search Engine</h2>\r\n          <p>To Search More......</p>\r\n          <div>\r\n            <a routerLink=\"/search\" class=\"btn btn-primary\"  role=\"button\">Search</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-6 order-2\">\r\n        <div class=\"p-5\">\r\n          <img class=\"img-fluid rounded-circle\" src=\"https://78.media.tumblr.com/b54728684b454dbbf7a1809f17251b86/tumblr_p0d6xnPMfX1uq7yj2o1_540.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 order-1\">\r\n        <div class=\"p-5\">\r\n          <h2 class=\"display-4\">News Blog!</h2>\r\n          <p>For new Updates !!!</p>\r\n          <div><a routerLink=\"/blog\" class=\"btn btn-primary\"  role=\"button\">News</a></div>\r\n            \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n-->\r\n<!-- Footer--> \r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">Copyright &copy; IWS AWESOME 2017</p>\r\n  </div>\r\n\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        document.body.classList.remove('bg-img');
        document.body.classList.remove('bg-img');
        document.body.classList.remove('bg-img1');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#a1{\r\n    padding-top: 10%;\r\n}\r\n#lol{\r\n    padding-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div id=\"lol\" class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\"id=\"a1\">\r\n<div class=\"jumbotron\" >\r\n  <h2 class=\"page-header\" id=\"a\">Login</h2>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-login\">\r\n          <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n                      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n                      <!-- Validation -->\r\n                      <ul class=\"help-block\">\r\n                        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n                      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n                      <!-- Validation -->\r\n                      <ul class=\"help-block\">\r\n                        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n  \r\n  \r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n  \r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/home']); // Navigate to home view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        document.body.classList.add('bg-img');
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space{\r\n    padding-left: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"\"> Reservoir </a>\r\n    </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class =\"space\" class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">  Home  </a></li>\r\n      </ul>\r\n      <ul class=\"nav nav-pills float-right\">\r\n        <li class =\"space\" class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" routerLink=\"/stats\">  Analysis  </a>\r\n        </li>\r\n        <li class =\"space\" class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" routerLink=\"/search\">  Search </a>\r\n        </li>\r\n        <li class =\"space\" class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" routerLink=\"/blog\">  Blog  </a>\r\n        </li>\r\n        <li class =\"space\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">  Login  </a></li>\r\n        <li class =\"space\" >\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        <li class =\"space\" class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" routerLink=\"/register\">  Register  </a></li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</nav> \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/login']); // Navigate back to login page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#a1 {\r\n  padding-top: 2%;\r\n}\r\n#lol{\r\n  padding-top: 5%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\" id=\"a\">Register Page</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div id=\"lol\" class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n<div class=\"container\" id=\"a1\">\r\n  <div class=\"jumbotron\">\r\n    <h2 class=\"page-header\" id=\"a\">Register</h2>\r\n\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"panel panel-login\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n<!-- Registration Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\r\n  <!-- Username Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\r\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Email Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\r\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\r\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Confirm Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm\">Confirm Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Submit Input -->\r\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n</form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!-- Registration Form /-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-img');
        document.body.classList.remove('bg-img1');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  * {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  #myInput,\r\n  #Input {\r\n    background-image: url('/css/searchicon.png');\r\n    background-position: 10px 10px;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    padding: 12px 20px 12px 40px;\r\n    border: 1px solid #ddd;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  #myTable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    font-size: 18px;\r\n    border: 1px solid #ddd;\r\n  }\r\n\r\n  #myTable td,\r\n  #myTable th {\r\n    border: 1px solid#dddddd;\r\n    text-align: left;\r\n    padding: 12px;\r\n  }\r\n\r\n  tr:nth-child(even) {\r\n    background-color: #dddddd;\r\n  }\r\n\r\n   \r\n    \r\n\r\n  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h2>List of Reservoirs</h2>\r\n\r\n\r\n    <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search...\" title=\"Type here\">\r\n    <select id=\"Input\">\r\n        <option>Search by...</option>\r\n        <option value=\"0\">Name</option>\r\n        <option value=\"1\">State</option>\r\n        <option value=\"2\">Capacity</option>\r\n        <option value=\"3\">Surface Area</option>\r\n        <option value=\"4\">River</option>\r\n        <option value=\"5\">Year</option>\r\n    </select>\r\n\r\n\r\n\r\n    <table id=\"myTable\">\r\n\r\n        <tr class=\"header\">\r\n            <th>Name\r\n            </th>\r\n            <th>State</th>\r\n            <th>Capacity\r\n                <br> (cube km)</th>\r\n            <th>Surface Area\r\n                <br>(acre)</th>\r\n            <th>River </th>\r\n            <th>Year</th>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Abiquiu Lake</td>\r\n            <td>New Mexico</td>\r\n            <td>1.471</td>\r\n            <td>12,430</td>\r\n            <td>Rio Chama</td>\r\n            <td>1963</td>\r\n\r\n        </tr>\r\n        <tr>\r\n\r\n            <td>Banks Lake</td>\r\n            <td>Washington</td>\r\n            <td>1.573</td>\r\n            <td>26,900</td>\r\n            <td>Grand Coulee</td>\r\n            <td>1949</td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Canyon Ferry Lake</td>\r\n            <td>Montana</td>\r\n            <td>2.464</td>\r\n            <td>35,181</td>\r\n            <td>Missouri River</td>\r\n            <td>1954</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Douglas Lake</td>\r\n            <td>Tennessee</td>\r\n            <td>1.802</td>\r\n            <td>28,420</td>\r\n            <td>French Broad River</td>\r\n            <td>1943</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Enid Lake</td>\r\n            <td>Mississippi</td>\r\n            <td>1.497</td>\r\n            <td>28,000</td>\r\n            <td>Yocona River</td>\r\n            <td>1952</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Falcon Lake</td>\r\n            <td>Texas</td>\r\n            <td>3.263</td>\r\n            <td>87,400</td>\r\n            <td>Rio Grande</td>\r\n            <td>1954</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Greers Ferry Lake</td>\r\n            <td>Arkansas</td>\r\n            <td>3.508</td>\r\n            <td>40,500</td>\r\n            <td>Little Red River</td>\r\n            <td>1962</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Hugo Lake</td>\r\n            <td>Oklahoma</td>\r\n            <td>1.572</td>\r\n            <td>35,045</td>\r\n            <td>Kiamichi River</td>\r\n            <td>1974</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Jordan Lake</td>\r\n            <td>North Carolina</td>\r\n            <td>2.031</td>\r\n            <td>31,800</td>\r\n            <td>Haw River</td>\r\n            <td>1983</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Kaw Lake</td>\r\n            <td>Oklahoma</td>\r\n            <td>1.320</td>\r\n            <td>38,000</td>\r\n            <td>Arkansas River</td>\r\n            <td>1964</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Kentucky Lake</td>\r\n            <td>Kentucky</td>\r\n            <td>7.560</td>\r\n            <td>160,300</td>\r\n            <td>Tennessee River</td>\r\n            <td>1944</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Lewisville Lake</td>\r\n            <td>Texas</td>\r\n            <td>2.569</td>\r\n            <td>23,040</td>\r\n            <td>Elm Fork Trinity River</td>\r\n            <td>1961</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Mark Twain</td>\r\n            <td>Missouri</td>\r\n            <td>2.594</td>\r\n            <td>53,200</td>\r\n            <td>Salt River</td>\r\n            <td>1983</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> New Melones Lake</td>\r\n            <td>California </td>\r\n            <td> 2.985</td>\r\n            <td> 12,500</td>\r\n            <td>Stanislaus River</td>\r\n            <td> 1979</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Owyhee Reservoir</td>\r\n            <td>Oregon </td>\r\n            <td> 1.460</td>\r\n            <td>13,500 </td>\r\n            <td> Owyhee River</td>\r\n            <td> 1932</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Painted Rock Reservoir</td>\r\n            <td> Arizona</td>\r\n            <td> 3.073</td>\r\n            <td> 53,200</td>\r\n            <td>Gila River </td>\r\n            <td> 1960</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Palisades Reservoir</td>\r\n            <td> Wyoming</td>\r\n            <td> 1.728</td>\r\n            <td> 16,000</td>\r\n            <td> Snake River</td>\r\n            <td>1957 </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Pine Flat Lake</td>\r\n            <td> California</td>\r\n            <td> 1.233</td>\r\n            <td>5,970 </td>\r\n            <td> Kings River</td>\r\n            <td> 1954</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Quabbin Reservoir</td>\r\n            <td> Massachusetts</td>\r\n            <td> 1.571</td>\r\n            <td> 24,529</td>\r\n            <td> Swift River</td>\r\n            <td> 1939</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Ross Lake</td>\r\n            <td> Washington</td>\r\n            <td> 1.770</td>\r\n            <td> 11,700</td>\r\n            <td>Skagit River </td>\r\n            <td> 1949</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> San Luis Reservoir</td>\r\n            <td>California </td>\r\n            <td> 2.518</td>\r\n            <td> 12,700</td>\r\n            <td> San Luis Creek</td>\r\n            <td> 1967</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Strawberry Reservoir</td>\r\n            <td> Utah</td>\r\n            <td> 1.365</td>\r\n            <td> 17,163</td>\r\n            <td>Strawberry River </td>\r\n            <td> 1974</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Toledo Bend Reservoir</td>\r\n            <td>Louisana </td>\r\n            <td> 5.517</td>\r\n            <td>181,600 </td>\r\n            <td> Sabine River</td>\r\n            <td> 1966</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Watts Bar Lake</td>\r\n            <td>Tennessee </td>\r\n            <td> 1.449</td>\r\n            <td> 39,000</td>\r\n            <td> Tennessee River</td>\r\n            <td>1942 </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td> Weiss Lake</td>\r\n            <td> Alaska</td>\r\n            <td>1.768 </td>\r\n            <td> 30,200</td>\r\n            <td> Coosa River</td>\r\n            <td>1961 </td>\r\n        </tr>\r\n\r\n\r\n    </table>\r\n\r\n    <script>\r\n        function myFunction() {\r\n            var input, filter, table, tr, td, i, n;\r\n            input = document.getElementById(\"myInput\");\r\n            filter = input.value.toUpperCase();\r\n            table = document.getElementById(\"myTable\");\r\n            tr = table.getElementsByTagName(\"tr\");\r\n            n = document.getElementById(\"Input\").value;\r\n            for (i = 0; i < tr.length; i++) {\r\n                td = tr[i].getElementsByTagName(\"td\")[n];\r\n                if (td) {\r\n                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n                        tr[i].style.display = \"\";\r\n                    } else {\r\n                        tr[i].style.display = \"none\";\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n\r\n\r\n    </script>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.myFunction = function () {
        var input, filter, table, tr, td, i, n;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        n = document.getElementById("Input").nodeValue;
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[n];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        document.body.classList.remove('bg-img');
        document.body.classList.remove('bg-img');
        document.body.classList.remove('bg-img1');
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#a{\r\n    padding-top: 10%;\r\n}\r\n.a1{\r\n    padding-top: 40%;\r\n    padding-left: 60%;\r\n}\r\n#b {\r\n  padding-top: 2%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"a\">\r\n    <fusioncharts width=\"500\" height=\"500\" style=\"float:left\" type=\"doughnut2d\" dataFormat=\"json\" [dataSource]=dataSource2>\r\n    </fusioncharts>\r\n<fusioncharts  width={{width}} height={{height}} style=\"float:right\" type={{type}} dataFormat={{dataFormat}} [dataSource]=dataSource>\r\n</fusioncharts>\r\n\r\n<div>\r\n    <div class=\"a1\">\r\n        <span>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateMyChartData()\">More...</button>\r\n        </span>\r\n    </div>\r\n\r\n    <div id = \"b\">\r\n        <fusioncharts width=\"500\" height=\"500\" style=\"float:left\" type=\"mscombi2d\" [dataSource]=dataSource3>\r\n        </fusioncharts>\r\n    </div>\r\n </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
        this.dataSource = "json";
        this.width = "500";
        this.height = "500";
        this.type = "Column2D";
        this.dataSource = {
            chart: {
                caption: "Water Capacity of the 10 Largest Reservoirs in the USA",
                numberPrefix: "cu.km ",
                theme: "ocean"
            },
            data: [{
                    label: "Toledo Bend Reservoir",
                    value: "5.517"
                },
                {
                    label: "New Melones Lake",
                    value: "2.985"
                },
                {
                    label: "Greers Ferry Lake",
                    value: "3.508"
                },
                {
                    label: "Falcon Lake",
                    value: "3.263"
                },
                {
                    label: "Douglas Lake",
                    value: "1.802"
                }]
        };
        this.dataSource2 = {
            chart: {
                caption: "Water Distribution from various regions",
                subCaption: "Last year",
                numberPrefix: "$",
                paletteColors: "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                bgColor: "#ffffff",
                showBorder: "0",
                use3DLighting: "0",
                showShadow: "0",
                enableSmartLabels: "0",
                startingAngle: "310",
                showLabels: "0",
                showPercentValues: "1",
                showLegend: "1",
                legendShadow: '0',
                legendBorderAlpha: "0",
                centerLabel: "Water Content : $label",
                centerLabelBold: "1",
                showTooltip: "0",
                decimals: "0",
                captionFontSize: "14",
                subcaptionFontSize: "14",
                subcaptionFontBold: "0"
            },
            data: [
                {
                    label: "North",
                    value: "1440"
                },
                {
                    label: "South",
                    value: "612"
                },
                {
                    label: "East",
                    value: "448"
                },
                {
                    label: "West",
                    value: "778"
                },
                {
                    label: "South-east",
                    value: "389"
                }
            ]
        };
        this.dataSource3 = {
            "chart": {
                "caption": "pH Value",
                "subcaption": "Last year",
                "xaxisname": "Month",
                "yaxisname": "pH ",
                "theme": "ocean",
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan"
                        },
                        {
                            "label": "Feb"
                        },
                        {
                            "label": "Mar"
                        },
                        {
                            "label": "Apr"
                        },
                        {
                            "label": "May"
                        },
                        {
                            "label": "Jun"
                        },
                        {
                            "label": "Jul"
                        },
                        {
                            "label": "Aug"
                        },
                        {
                            "label": "Sep"
                        },
                        {
                            "label": "Oct"
                        },
                        {
                            "label": "Nov"
                        },
                        {
                            "label": "Dec"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "renderas": "line",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "6.5"
                        },
                        {
                            "value": "6.2"
                        },
                        {
                            "value": "6.8"
                        },
                        {
                            "value": "7"
                        },
                        {
                            "value": "7"
                        },
                        {
                            "value": "7.4"
                        },
                        {
                            "value": "7.2"
                        },
                        {
                            "value": "7"
                        },
                        {
                            "value": "6.8"
                        },
                        {
                            "value": "7.4"
                        },
                        {
                            "value": "7.2"
                        },
                        {
                            "value": "7.2"
                        }
                    ]
                },
            ]
        };
    }
    StatsComponent.prototype.updateMyChartData = function () {
        var label = ["Lewisville Lake", "Abiquiu Lake", "Mark Twain", "Banks Lake", "San Luis Reservoir", "Jordan Lake", "Painted Rock Reservoir", "Kaw Lake", "Canyon Ferry Lake", "Ross Lake"];
        var value = [2.569, 1.471, 2.594, 1.573, 2.518, 2.031, 3.073, 1.320, 2.464, 1.770];
        for (var i = 0; i <= 25; i++) {
            this.dataSource.data[i].label = label[i];
            this.dataSource.data[i].value = value[i];
        }
    };
    StatsComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-img1');
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stats/stats.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // domain = 'http://localhost:8040';  Development Domain - Not Needed in Production
        this.domain = 'https://reservoir-app.herokuapp.com/';
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Aashish/Desktop/Reservoir/client/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map