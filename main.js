(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aerial/aerial.component.html":
/*!**********************************************!*\
  !*** ./src/app/aerial/aerial.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aerial\" >\n  <div id=\"bg\"></div>\n  <div id=\"innerbg\"></div>\n  <div id=\"displayContent\">\n    <h1>{{title}}</h1>\n    <p>{{subTitle}}</p>\n    <ul>\n      <li *ngFor=\"let image of links\">\n        <div class=\"roundContanier\"><i class=\"{{image}}\"></i></div>\n      </li>\n    </ul>\n  </div>\n  <p id=\"pageFooter\">&copy; Untitled.Design:<a href=\"https://html5up.net/\">HTML5UP</a>.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/aerial/aerial.component.scss":
/*!**********************************************!*\
  !*** ./src/app/aerial/aerial.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aerial {\n  background-color: #348cb2;\n  height: 100vh;\n  width: 100vw;\n  position: absolute; }\n  #aerial #pageFooter {\n    color: white;\n    opacity: 0.75;\n    bottom: 0;\n    position: fixed;\n    width: 100%;\n    text-align: center; }\n  #aerial #pageFooter a {\n      text-decoration: none;\n      color: white; }\n  #bg {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  background-image: url('bgCover.jpg');\n  background-size: 1175px auto;\n  height: 359px;\n  width: 100%;\n  background-repeat: round;\n  -webkit-animation: moveBG 59s linear infinite;\n          animation: moveBG 59s linear infinite; }\n  @-webkit-keyframes moveBG {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -100vw 0; } }\n  @keyframes moveBG {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -100vw 0; } }\n  #innerbg {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%221000px%22 height%3D%221000px%22 viewBox%3D%220 0 1000 1000%22 zoomAndPan%3D%22disable%22%3E%0D    %3Cstyle type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%0D%09%09line %7B%0D%09%09%09stroke%3A rgba(255%2C255%2C255%2C0.45)%3B%0D%09%09%09stroke-width%3A 0.5px%3B%0D%09%09%7D%0D%09%09%0D%09%09polygon.one %7B%0D%09%09%09fill%3A rgba(255%2C255%2C255%2C0.225)%3B%0D%09%09%7D%0D%09%09%0D%09%09polygon.two %7B%0D%09%09%09fill%3A rgba(255%2C255%2C255%2C0.15)%3B%0D%09%09%7D%0D%09%09%0D%09%09polygon.three %7B%0D%09%09%09fill%3A rgba(255%2C255%2C255%2C0.075)%3B%0D%09%09%7D%0D%09%09%0D    %5D%5D%3E%3C%2Fstyle%3E%0D%09%3Cpolygon class%3D%22one%22 points%3D%22-350%2C0 650%2C1000 0%2C1000 0%2C0%22 %2F%3E%0D%09%3Cpolygon class%3D%22two%22 points%3D%220%2C0 1000%2C1000 0%2C1000 0%2C0%22 %2F%3E%0D%09%3Cpolygon class%3D%22three%22 points%3D%22350%2C0 1350%2C1000 0%2C1000 0%2C0%22 %2F%3E%0D%09%3Cline x1%3D%22-350%22 y1%3D%220%22 x2%3D%22650%22 y2%3D%221000%22 %2F%3E%0D%09%3Cline x1%3D%220%22 y1%3D%220%22 x2%3D%221000%22 y2%3D%221000%22 %2F%3E%0D%09%3Cline x1%3D%22350%22 y1%3D%220%22 x2%3D%221350%22 y2%3D%221000%22 %2F%3E%0D%3C%2Fsvg%3E\");\n  height: 100vh;\n  position: relative;\n  background-size: cover;\n  top: 0;\n  left: 0px; }\n  #displayContent {\n  position: fixed;\n  top: 7em;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  color: white; }\n  #displayContent h1 {\n    margin-top: 100px;\n    font-size: 65px;\n    font-family: 'Comfortaa', cursive; }\n  #displayContent P {\n    opacity: 0.75; }\n  #displayContent ul li {\n    display: inline-block;\n    width: 100px; }\n  #displayContent ul li .roundContanier {\n      border: 1px solid white;\n      width: 70px;\n      height: 70px;\n      border-radius: 180px;\n      font-size: 27px;\n      padding: 13px;\n      margin: auto;\n      position: absolute; }\n  #displayContent ul li .roundContanier:hover {\n      background-color: #ffffff45;\n      cursor: pointer;\n      -webkit-animation-name: grow;\n              animation-name: grow;\n      -webkit-animation-duration: .200s;\n              animation-duration: .200s;\n      -webkit-animation-timing-function: linear;\n              animation-timing-function: linear;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-animation-direction: ease;\n              animation-direction: ease; }\n  @-webkit-keyframes grow {\n  from {\n    width: 70px;\n    height: 70px;\n    font-size: 27px;\n    margin-left: 0px;\n    margin-top: 0px; }\n  to {\n    width: 80px;\n    height: 80px;\n    font-size: 32px;\n    margin-left: -5px;\n    margin-top: -5px; } }\n  @keyframes grow {\n  from {\n    width: 70px;\n    height: 70px;\n    font-size: 27px;\n    margin-left: 0px;\n    margin-top: 0px; }\n  to {\n    width: 80px;\n    height: 80px;\n    font-size: 32px;\n    margin-left: -5px;\n    margin-top: -5px; } }\n  #displayContent ul li .roundContainerIcon {\n      margin-top: -40px;\n      margin-left: 18px;\n      width: 20px;\n      display: block;\n      font-size: 22px; }\n  /* Small devices (portrait tablets and large phones, 600px and up) */\n  @media only screen and (max-width: 600px) {\n  #bg {\n    background-size: 323px auto;\n    height: 139px; }\n  #displayContent h1 {\n    margin-top: 73px;\n    font-size: 34px; }\n  #displayContent P {\n    font-size: 12px; }\n  #displayContent ul {\n    width: 66%;\n    margin: auto;\n    margin-top: -63px; }\n    #displayContent ul li {\n      width: 88px;\n      margin-top: 79px; } }\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (min-width: 600px) and (max-width: 992px) {\n  #bg {\n    background-size: 676px auto;\n    height: 319px; } }\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (min-width: 1672px) {\n  #bg {\n    background-size: 1572px auto;\n    height: 725px; } }\n"

/***/ }),

/***/ "./src/app/aerial/aerial.component.ts":
/*!********************************************!*\
  !*** ./src/app/aerial/aerial.component.ts ***!
  \********************************************/
/*! exports provided: AerialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerialComponent", function() { return AerialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AerialComponent = /** @class */ (function () {
    function AerialComponent() {
        this.links = [];
    }
    AerialComponent.prototype.ngOnInit = function () {
        this.title = 'Adam Jensen';
        this.subTitle = 'Security Chief . Cyborg . Never asked for this';
        this.links = [
            'fa fa-twitter',
            'fa fa-facebook-f',
            'fa fa-dribbble',
            'fa fa-github',
            'fa fa-envelope-o'
        ];
    };
    AerialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aerial',
            template: __webpack_require__(/*! ./aerial.component.html */ "./src/app/aerial/aerial.component.html"),
            styles: [__webpack_require__(/*! ./aerial.component.scss */ "./src/app/aerial/aerial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AerialComponent);
    return AerialComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_my_site_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/my-site/main/main.component */ "./src/app/my-site/main/main.component.ts");
/* harmony import */ var _app_strata_strata_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/strata/strata.component */ "./src/app/strata/strata.component.ts");
/* harmony import */ var _app_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _clickmaster_clickmaster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clickmaster/clickmaster.component */ "./src/app/clickmaster/clickmaster.component.ts");
/* harmony import */ var _aerial_aerial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aerial/aerial.component */ "./src/app/aerial/aerial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: _app_my_site_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'demo/angular6/strata', component: _app_strata_strata_component__WEBPACK_IMPORTED_MODULE_3__["StrataComponent"] },
    { path: 'demo/angular6/clickmaster', component: _clickmaster_clickmaster_component__WEBPACK_IMPORTED_MODULE_5__["ClickmasterComponent"] },
    { path: 'demo/angular6/aerial', component: _aerial_aerial_component__WEBPACK_IMPORTED_MODULE_6__["AerialComponent"] },
    { path: 'Not-Found', component: _app_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] },
    { path: '**', redirectTo: '/Not-Found' }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-site></app-my-site>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _strata_info_header_info_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strata/info-header/info-header.component */ "./src/app/strata/info-header/info-header.component.ts");
/* harmony import */ var _strata_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strata/main-section/main-section.component */ "./src/app/strata/main-section/main-section.component.ts");
/* harmony import */ var _strata_links_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strata/links/links.component */ "./src/app/strata/links/links.component.ts");
/* harmony import */ var _strata_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strata/footer/footer.component */ "./src/app/strata/footer/footer.component.ts");
/* harmony import */ var _strata_Services_main_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./strata/Services/main-content.service */ "./src/app/strata/Services/main-content.service.ts");
/* harmony import */ var _strata_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strata/recent-work/recent-work.component */ "./src/app/strata/recent-work/recent-work.component.ts");
/* harmony import */ var _strata_Services_tumbnail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./strata/Services/tumbnail.service */ "./src/app/strata/Services/tumbnail.service.ts");
/* harmony import */ var _strata_get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./strata/get-in-touch/get-in-touch.component */ "./src/app/strata/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _strata_strata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strata/strata.component */ "./src/app/strata/strata.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _strata_ngbd_modal_basic_ngbd_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./strata/ngbd-modal-basic/ngbd-modal-basic.component */ "./src/app/strata/ngbd-modal-basic/ngbd-modal-basic.component.ts");
/* harmony import */ var _ngbd_carousel_basic_ngbd_carousel_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ngbd-carousel-basic/ngbd-carousel-basic.component */ "./src/app/ngbd-carousel-basic/ngbd-carousel-basic.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngbd_carousel_basic_carousel_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ngbd-carousel-basic/carousel.service */ "./src/app/ngbd-carousel-basic/carousel.service.ts");
/* harmony import */ var _my_site_my_site_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-site/my-site.component */ "./src/app/my-site/my-site.component.ts");
/* harmony import */ var _my_site_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-site/header/header.component */ "./src/app/my-site/header/header.component.ts");
/* harmony import */ var _my_site_main_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./my-site/main/main.component */ "./src/app/my-site/main/main.component.ts");
/* harmony import */ var _my_site_myfooter_myfooter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-site/myfooter/myfooter.component */ "./src/app/my-site/myfooter/myfooter.component.ts");
/* harmony import */ var _parrallax_parrallax_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parrallax/parrallax.component */ "./src/app/parrallax/parrallax.component.ts");
/* harmony import */ var _my_site_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-site/aboutme/aboutme.component */ "./src/app/my-site/aboutme/aboutme.component.ts");
/* harmony import */ var _my_site_latestwork_latestwork_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-site/latestwork/latestwork.component */ "./src/app/my-site/latestwork/latestwork.component.ts");
/* harmony import */ var _my_site_cards_cards_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./my-site/cards/cards.component */ "./src/app/my-site/cards/cards.component.ts");
/* harmony import */ var _my_site_stack_stack_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-site/stack/stack.component */ "./src/app/my-site/stack/stack.component.ts");
/* harmony import */ var _my_site_interest_interest_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./my-site/interest/interest.component */ "./src/app/my-site/interest/interest.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _photoslider_photoslider_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./photoslider/photoslider.component */ "./src/app/photoslider/photoslider.component.ts");
/* harmony import */ var _clickmaster_clickmaster_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./clickmaster/clickmaster.component */ "./src/app/clickmaster/clickmaster.component.ts");
/* harmony import */ var _clickmaster_mainclick_mainclick_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./clickmaster/mainclick/mainclick.component */ "./src/app/clickmaster/mainclick/mainclick.component.ts");
/* harmony import */ var _clickmaster_headerclick_headerclick_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clickmaster/headerclick/headerclick.component */ "./src/app/clickmaster/headerclick/headerclick.component.ts");
/* harmony import */ var _clickmaster_footerclick_footerclick_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./clickmaster/footerclick/footerclick.component */ "./src/app/clickmaster/footerclick/footerclick.component.ts");
/* harmony import */ var _clickmaster_photolistdisplayclick_photolistdisplayclick_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./clickmaster/photolistdisplayclick/photolistdisplayclick.component */ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.ts");
/* harmony import */ var _aerial_aerial_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./aerial/aerial.component */ "./src/app/aerial/aerial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _strata_info_header_info_header_component__WEBPACK_IMPORTED_MODULE_4__["InfoHeaderComponent"],
                _strata_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__["MainSectionComponent"],
                _strata_links_links_component__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"],
                _strata_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _strata_recent_work_recent_work_component__WEBPACK_IMPORTED_MODULE_9__["RecentWorkComponent"],
                _strata_get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_11__["GetInTouchComponent"],
                _strata_strata_component__WEBPACK_IMPORTED_MODULE_13__["StrataComponent"],
                _strata_ngbd_modal_basic_ngbd_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__["NgbdModalBasicComponent"],
                _ngbd_carousel_basic_ngbd_carousel_basic_component__WEBPACK_IMPORTED_MODULE_16__["NgbdCarouselBasicComponent"],
                _my_site_my_site_component__WEBPACK_IMPORTED_MODULE_19__["MySiteComponent"],
                _my_site_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _my_site_main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
                _my_site_myfooter_myfooter_component__WEBPACK_IMPORTED_MODULE_22__["MyfooterComponent"],
                _parrallax_parrallax_component__WEBPACK_IMPORTED_MODULE_23__["ParrallaxComponent"],
                _my_site_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_24__["AboutmeComponent"],
                _my_site_latestwork_latestwork_component__WEBPACK_IMPORTED_MODULE_25__["LatestworkComponent"],
                _my_site_cards_cards_component__WEBPACK_IMPORTED_MODULE_26__["CardsComponent"],
                _my_site_stack_stack_component__WEBPACK_IMPORTED_MODULE_27__["StackComponent"],
                _my_site_interest_interest_component__WEBPACK_IMPORTED_MODULE_28__["InterestComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_29__["NotfoundComponent"],
                _photoslider_photoslider_component__WEBPACK_IMPORTED_MODULE_30__["PhotosliderComponent"],
                _clickmaster_clickmaster_component__WEBPACK_IMPORTED_MODULE_31__["ClickmasterComponent"],
                _clickmaster_mainclick_mainclick_component__WEBPACK_IMPORTED_MODULE_32__["MainclickComponent"],
                _clickmaster_headerclick_headerclick_component__WEBPACK_IMPORTED_MODULE_33__["HeaderclickComponent"],
                _clickmaster_footerclick_footerclick_component__WEBPACK_IMPORTED_MODULE_34__["FooterclickComponent"],
                _clickmaster_photolistdisplayclick_photolistdisplayclick_component__WEBPACK_IMPORTED_MODULE_35__["PhotolistdisplayclickComponent"],
                _aerial_aerial_component__WEBPACK_IMPORTED_MODULE_36__["AerialComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRouting"]
            ],
            providers: [_strata_Services_main_content_service__WEBPACK_IMPORTED_MODULE_8__["MainContentService"], _strata_Services_tumbnail_service__WEBPACK_IMPORTED_MODULE_10__["TumbnailService"], _ngbd_carousel_basic_carousel_service__WEBPACK_IMPORTED_MODULE_18__["CarouselService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clickmaster/clickmaster.component.html":
/*!********************************************************!*\
  !*** ./src/app/clickmaster/clickmaster.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"demopageplacement\">\n  <app-mainclick></app-mainclick>\n</section>\n"

/***/ }),

/***/ "./src/app/clickmaster/clickmaster.component.scss":
/*!********************************************************!*\
  !*** ./src/app/clickmaster/clickmaster.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clickmaster/clickmaster.component.ts":
/*!******************************************************!*\
  !*** ./src/app/clickmaster/clickmaster.component.ts ***!
  \******************************************************/
/*! exports provided: ClickmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickmasterComponent", function() { return ClickmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickmasterComponent = /** @class */ (function () {
    function ClickmasterComponent() {
    }
    ClickmasterComponent.prototype.ngOnInit = function () {
    };
    ClickmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clickmaster',
            template: __webpack_require__(/*! ./clickmaster.component.html */ "./src/app/clickmaster/clickmaster.component.html"),
            styles: [__webpack_require__(/*! ./clickmaster.component.scss */ "./src/app/clickmaster/clickmaster.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClickmasterComponent);
    return ClickmasterComponent;
}());



/***/ }),

/***/ "./src/app/clickmaster/footerclick/footerclick.component.html":
/*!********************************************************************!*\
  !*** ./src/app/clickmaster/footerclick/footerclick.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  &copy; Click Design <a href=\"http:themewagon.com\">Themewagon</a>\n</p>\n"

/***/ }),

/***/ "./src/app/clickmaster/footerclick/footerclick.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/clickmaster/footerclick/footerclick.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #cccccc;\n  text-align: center;\n  display: block;\n  margin: auto;\n  width: 75%;\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  padding-top: 2em;\n  padding-bottom: 4em; }\n\na {\n  color: #cccccc;\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/clickmaster/footerclick/footerclick.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clickmaster/footerclick/footerclick.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterclickComponent", function() { return FooterclickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterclickComponent = /** @class */ (function () {
    function FooterclickComponent() {
    }
    FooterclickComponent.prototype.ngOnInit = function () {
    };
    FooterclickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footerclick',
            template: __webpack_require__(/*! ./footerclick.component.html */ "./src/app/clickmaster/footerclick/footerclick.component.html"),
            styles: [__webpack_require__(/*! ./footerclick.component.scss */ "./src/app/clickmaster/footerclick/footerclick.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterclickComponent);
    return FooterclickComponent;
}());



/***/ }),

/***/ "./src/app/clickmaster/headerclick/headerclick.component.html":
/*!********************************************************************!*\
  !*** ./src/app/clickmaster/headerclick/headerclick.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"clickheader\">\n  <div class=\"logohead\">\n    <img src=\"assets/images/click/logo.png\">\n  </div>\n  <h1>Click</h1>\n  <p>\n    Just another Responsive Site designed by\n    <a href=\"http://themewagon.com\">Themeawgon</a>\n  </p>\n  <ul>\n    <li><i class=\"fa fa-facebook-f\"></i></li>\n    <li><i class=\"fa fa-twitter\"></i></li>\n    <li><i class=\"fa fa-instagram\"></i></li>\n    <li><i class=\"fa fa-flickr\"></i></li>\n    <li><i class=\"fa fa-envelope-o\"></i></li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/clickmaster/headerclick/headerclick.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/clickmaster/headerclick/headerclick.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clickheader {\n  padding-top: 2em; }\n  .clickheader .logohead {\n    margin: 0 auto;\n    text-align: center; }\n  .clickheader .logohead img {\n      width: 150px; }\n  .clickheader h1 {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: white;\n    text-align: center;\n    font-size: 2.25em;\n    font-weight: 100;\n    font-family: 'Cinzel', serif; }\n  .clickheader p {\n    color: #cccccc;\n    text-align: center;\n    display: block;\n    margin: auto;\n    width: 75%;\n    font-family: 'Cinzel', serif;\n    font-size: 12px; }\n  .clickheader p a {\n      color: #cccccc;\n      text-decoration: none; }\n  .clickheader ul {\n    padding-top: 1em;\n    padding-bottom: 2em;\n    color: white;\n    font-size: 1.2rem;\n    text-align: center; }\n  .clickheader ul li {\n      display: inline;\n      padding: 5px; }\n  .clickheader ul li:hover {\n      cursor: pointer; }\n  @media only screen and (min-width: 600px) and (max-width: 992px) {\n  .clickheader .logohead img {\n    width: 130px; }\n  .clickheader h1 {\n    font-size: 2.60em; }\n  .clickheader ul {\n    font-size: 20px; }\n    .clickheader ul li {\n      padding: 5px; } }\n"

/***/ }),

/***/ "./src/app/clickmaster/headerclick/headerclick.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clickmaster/headerclick/headerclick.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderclickComponent", function() { return HeaderclickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderclickComponent = /** @class */ (function () {
    function HeaderclickComponent() {
    }
    HeaderclickComponent.prototype.ngOnInit = function () {
    };
    HeaderclickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headerclick',
            template: __webpack_require__(/*! ./headerclick.component.html */ "./src/app/clickmaster/headerclick/headerclick.component.html"),
            styles: [__webpack_require__(/*! ./headerclick.component.scss */ "./src/app/clickmaster/headerclick/headerclick.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderclickComponent);
    return HeaderclickComponent;
}());



/***/ }),

/***/ "./src/app/clickmaster/mainclick/mainclick.component.html":
/*!****************************************************************!*\
  !*** ./src/app/clickmaster/mainclick/mainclick.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"con\">\n  <div class=\"left-click-panel\">\n    <div\n      id=\"clickslider\"\n      style=\"width: 100vw\"\n      [ngClass]=\"{'panel-notfull': close === true,'panel-full': close === false}\">\n        <img\n        [src]=images[index]\n        [ngClass]=\"{'panel-notfull': close === true,'panel-full': close === false}\">\n    </div>\n    <div id=\"close\">\n      <div\n        id=\"controls\"\n        [ngClass]=\"{'panel-notfull': close === true,'panel-full': close === false}\">\n        <div (click)=\"closePanel()\" class=\"closeIcons\">\n          <div class=\"icon-to-close\" *ngIf=\"close\"><i class=\"fa fa-times\"></i></div>\n          <div class=\"icon-to-open\" *ngIf=\"!close\"><i class=\"fa fa-bars\"></i></div>\n        </div>\n        <ul id=\"clickArrows\">\n          <li id=\"left\" (click)=\"changeImgWithArrows('left')\" class=\"closeIcons\"><</li>\n          <li id=\"right\" (click)=\"changeImgWithArrows('right')\" class=\"closeIcons\">></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"right-click-panel\"\n    [ngClass]=\"{'panel-out': close === false, 'panel-back': close === true}\">\n    <div\n      id=\"close2\"\n      class=\"closeIcons\"\n      (click)=\"closePanel()\"><i class=\"fa fa-times\"></i></div>\n    <app-headerclick></app-headerclick>\n    <div class=\"clickPhotoList\">\n      <app-photolistdisplayclick></app-photolistdisplayclick>\n    </div>\n    <app-footerclick></app-footerclick>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/clickmaster/mainclick/mainclick.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clickmaster/mainclick/mainclick.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clickArrows {\n  display: inline-flex;\n  margin-top: 40vh;\n  text-align: center;\n  font-size: 1.5em; }\n  #clickArrows li {\n    width: 50px;\n    text-shadow: 0px 0px 3px black; }\n  #clickArrows #right {\n    position: absolute;\n    z-index: 2;\n    right: 43px; }\n  .icon-to-open {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  z-index: 2;\n  right: 43px;\n  top: 20px;\n  font-size: 24px; }\n  .icon-to-close {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  z-index: 2;\n  right: 43px;\n  top: 20px;\n  font-size: 24px; }\n  #close {\n  color: white;\n  float: right;\n  right: 1em;\n  font-size: 43px;\n  font-family: 'Poiret One', cursive;\n  z-index: 1; }\n  #close2 {\n  color: black;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin-top: 10px;\n  margin-left: 14px;\n  visibility: hidden; }\n  .closeIcons:hover {\n  cursor: pointer; }\n  #controls {\n  width: 100%;\n  height: 100vh;\n  left: 0;\n  position: absolute;\n  z-index: 2;\n  top: 0; }\n  .con {\n  width: 100vw;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-box;\n  display: -o-box;\n  overflow: hidden; }\n  .left-click-panel {\n  background-color: #3A3C47;\n  position: fixed;\n  height: 100vh;\n  width: 80%;\n  margin-top: -10px; }\n  .left-click-panel img {\n    margin-top: -90px;\n    width: 100vw;\n    height: 100vh; }\n  .right-click-panel {\n  background-color: #3A3C47;\n  width: 21%;\n  position: absolute;\n  right: 12px;\n  overflow-y: scroll; }\n  /*************************************************/\n  /**************** left panel *********************/\n  /*************************************************/\n  .panel-notfull {\n  -webkit-animation-name: notfill;\n          animation-name: notfill;\n  -webkit-animation-duration: .300s;\n          animation-duration: .300s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-direction: ease;\n          animation-direction: ease; }\n  .panel-full {\n  -webkit-animation-name: fill;\n          animation-name: fill;\n  -webkit-animation-duration: .300s;\n          animation-duration: .300s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-direction: ease;\n          animation-direction: ease; }\n  @-webkit-keyframes fill {\n  from {\n    width: 80vw;\n    margin-top: -10px; }\n  to {\n    width: 100vw;\n    margin-top: 0px; } }\n  @keyframes fill {\n  from {\n    width: 80vw;\n    margin-top: -10px; }\n  to {\n    width: 100vw;\n    margin-top: 0px; } }\n  @-webkit-keyframes notfill {\n  from {\n    width: 100vw;\n    margin-top: 0px; }\n  to {\n    width: 80vw;\n    margin-top: -10px; } }\n  @keyframes notfill {\n  from {\n    width: 100vw;\n    margin-top: 0px; }\n  to {\n    width: 80vw;\n    margin-top: -10px; } }\n  /***********************************************/\n  /***************Rigth panel*********************/\n  /***********************************************/\n  .panel-out {\n  -webkit-animation-name: slideOut;\n          animation-name: slideOut;\n  -webkit-animation-duration: .300s;\n          animation-duration: .300s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-direction: ease;\n          animation-direction: ease; }\n  .panel-back {\n  -webkit-animation-name: slideIn;\n          animation-name: slideIn;\n  -webkit-animation-duration: .300s;\n          animation-duration: .300s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-direction: ease;\n          animation-direction: ease; }\n  @-webkit-keyframes slideIn {\n  from {\n    right: -20%; }\n  to {\n    right: 11px; } }\n  @keyframes slideIn {\n  from {\n    right: -20%; }\n  to {\n    right: 11px; } }\n  @-webkit-keyframes slideOut {\n  from {\n    right: 11px; }\n  to {\n    right: -20%; } }\n  @keyframes slideOut {\n  from {\n    right: 11px; }\n  to {\n    right: -20%; } }\n  /**********************************************/\n  /************* Media Queries ******************/\n  /**********************************************/\n  @media only screen and (max-width: 992px) {\n  #close2 {\n    visibility: visible; }\n  .left-click-panel {\n    width: 100vw;\n    height: 100vh; }\n  .right-click-panel {\n    width: 15em;\n    right: 12px; }\n  @-webkit-keyframes slideIn {\n    from {\n      right: -15em; }\n    to {\n      right: 11px; } }\n  @keyframes slideIn {\n    from {\n      right: -15em; }\n    to {\n      right: 11px; } }\n  @-webkit-keyframes slideOut {\n    from {\n      right: 11px; }\n    to {\n      right: -15em; } }\n  @keyframes slideOut {\n    from {\n      right: 11px; }\n    to {\n      right: -15em; } }\n  @-webkit-keyframes fill {}\n  @keyframes fill {}  @-webkit-keyframes notfill {}  @keyframes notfill {} }\n  @media only screen and (max-width: 600px) {\n  #close2 {\n    visibility: hidden; }\n  .right-click-panel {\n    min-width: 100vw; }\n  @-webkit-keyframes slideOut {\n    from {\n      opacity: 1;\n      z-index: 1; }\n    to {\n      opacity: 0;\n      z-index: -1; } }\n  @keyframes slideOut {\n    from {\n      opacity: 1;\n      z-index: 1; }\n    to {\n      opacity: 0;\n      z-index: -1; } }\n  @-webkit-keyframes slideIn {\n    from {\n      opacity: 0;\n      z-index: -1; }\n    to {\n      opacity: 1;\n      z-index: 1; } }\n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      z-index: -1; }\n    to {\n      opacity: 1;\n      z-index: 1; } }\n  .left-click-panel img {\n    width: 150vw;\n    margin-left: -104px; }\n  .left-click-panel #controls {\n    left: -10; }\n  #close2 {\n    margin-left: 25px; } }\n"

/***/ }),

/***/ "./src/app/clickmaster/mainclick/mainclick.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clickmaster/mainclick/mainclick.component.ts ***!
  \**************************************************************/
/*! exports provided: MainclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainclickComponent", function() { return MainclickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photolist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photolist.service */ "./src/app/clickmaster/photolist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainclickComponent = /** @class */ (function () {
    function MainclickComponent(photolistService) {
        this.photolistService = photolistService;
        this.images = [];
        this.thumbs = [];
        this.index = 0;
    }
    MainclickComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.close = true;
        this.thumbs = this.photolistService.getThumbsList();
        this.images = this.photolistService.getFullList();
        this.photolistService.selectedImage.subscribe(function (index) {
            _this.index = index;
            _this.closePanel();
        });
    };
    MainclickComponent.prototype.closePanel = function () {
        this.close = !this.close;
    };
    MainclickComponent.prototype.imgChoice = function (index) {
        this.photolistService.selectedImage.next(index);
    };
    MainclickComponent.prototype.changeImgWithArrows = function (direction) {
        var end = this.images.length - 1;
        if (direction === 'right') {
            if (this.index + 1 > end) {
                this.index = 0;
            }
            else {
                this.index++;
            }
        }
        else {
            if (this.index - 1 < 0) {
                this.index = end;
            }
            else {
                this.index--;
            }
        }
    };
    MainclickComponent.prototype.ngOnDestroy = function () {
        this.photolistService.selectedImage.unsubscribe();
    };
    MainclickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainclick',
            template: __webpack_require__(/*! ./mainclick.component.html */ "./src/app/clickmaster/mainclick/mainclick.component.html"),
            styles: [__webpack_require__(/*! ./mainclick.component.scss */ "./src/app/clickmaster/mainclick/mainclick.component.scss")]
        }),
        __metadata("design:paramtypes", [_photolist_service__WEBPACK_IMPORTED_MODULE_1__["PhotolistService"]])
    ], MainclickComponent);
    return MainclickComponent;
}());



/***/ }),

/***/ "./src/app/clickmaster/photolist.service.ts":
/*!**************************************************!*\
  !*** ./src/app/clickmaster/photolist.service.ts ***!
  \**************************************************/
/*! exports provided: PhotolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotolistService", function() { return PhotolistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotolistService = /** @class */ (function () {
    function PhotolistService() {
        this.thumbsList = [
            'assets/images/click/thumbs/06.jpg',
            'assets/images/click/thumbs/01.jpg',
            'assets/images/click/thumbs/02.jpg',
            'assets/images/click/thumbs/03.jpg',
            'assets/images/click/thumbs/04.jpg',
            'assets/images/click/thumbs/05.jpg',
            'assets/images/click/thumbs/07.jpg',
            'assets/images/click/thumbs/08.jpg',
            'assets/images/click/thumbs/09.jpg',
            'assets/images/click/thumbs/10.jpg',
            'assets/images/click/thumbs/11.jpg',
            'assets/images/click/thumbs/12.jpg'
        ];
        this.fullList = [
            'assets/images/click/fulls/06.jpg',
            'assets/images/click/fulls/01.jpg',
            'assets/images/click/fulls/02.jpg',
            'assets/images/click/fulls/03.jpg',
            'assets/images/click/fulls/04.jpg',
            'assets/images/click/fulls/05.jpg',
            'assets/images/click/fulls/07.jpg',
            'assets/images/click/fulls/08.jpg',
            'assets/images/click/fulls/09.jpg',
            'assets/images/click/fulls/10.jpg',
            'assets/images/click/fulls/11.jpg',
            'assets/images/click/fulls/12.jpg'
        ];
        this.selectedImage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PhotolistService.prototype.getThumbsList = function () {
        return this.thumbsList;
    };
    PhotolistService.prototype.getFullList = function () {
        return this.fullList;
    };
    PhotolistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PhotolistService);
    return PhotolistService;
}());



/***/ }),

/***/ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"clickPhotoList\">\n <ul>\n   <li\n    tabindex=\"1\"\n    *ngFor=\"let thumb of thumbs; let i = index\"\n    (click)=\"imgChoice(i)\"\n    >\n     <img src={{thumb}} />\n   </li>\n </ul>\n</section>\n\n"

/***/ }),

/***/ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clickPhotoList {\n  background-color: rgba(78, 78, 78, 0.925); }\n  .clickPhotoList ul {\n    padding-top: 3%;\n    padding-bottom: 3%;\n    width: 90%;\n    margin: auto; }\n  .clickPhotoList ul li {\n      width: 50%;\n      display: inline-block; }\n  .clickPhotoList ul li img {\n        width: 100%;\n        height: 70px; }\n  .clickPhotoList ul li img:hover {\n        cursor: pointer; }\n  .clickPhotoList ul li:focus, .clickPhotoList ul li:active {\n      border: 2px solid white;\n      outline: none; }\n  @media only screen and (max-width: 600px) {\n  .clickPhotoList ul li img {\n    width: 100%;\n    height: 173px; } }\n"

/***/ }),

/***/ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PhotolistdisplayclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotolistdisplayclickComponent", function() { return PhotolistdisplayclickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photolist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photolist.service */ "./src/app/clickmaster/photolist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotolistdisplayclickComponent = /** @class */ (function () {
    function PhotolistdisplayclickComponent(photolistService) {
        this.photolistService = photolistService;
        this.thumbs = [];
    }
    PhotolistdisplayclickComponent.prototype.ngOnInit = function () {
        this.thumbs = this.photolistService.getThumbsList();
    };
    PhotolistdisplayclickComponent.prototype.imgChoice = function (index) {
        this.photolistService.selectedImage.next(index);
    };
    PhotolistdisplayclickComponent.prototype.ngOnDestroy = function () {
        this.photolistService.selectedImage.unsubscribe();
    };
    PhotolistdisplayclickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photolistdisplayclick',
            template: __webpack_require__(/*! ./photolistdisplayclick.component.html */ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.html"),
            styles: [__webpack_require__(/*! ./photolistdisplayclick.component.scss */ "./src/app/clickmaster/photolistdisplayclick/photolistdisplayclick.component.scss")]
        }),
        __metadata("design:paramtypes", [_photolist_service__WEBPACK_IMPORTED_MODULE_1__["PhotolistService"]])
    ], PhotolistdisplayclickComponent);
    return PhotolistdisplayclickComponent;
}());



/***/ }),

/***/ "./src/app/my-site/Models/Card.Model.ts":
/*!**********************************************!*\
  !*** ./src/app/my-site/Models/Card.Model.ts ***!
  \**********************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(image, title, route) {
        this.imgPath = image;
        this.title = title;
        this.route = route;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/my-site/Models/Developer.ts":
/*!*********************************************!*\
  !*** ./src/app/my-site/Models/Developer.ts ***!
  \*********************************************/
/*! exports provided: Developer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Developer", function() { return Developer; });
var Developer = /** @class */ (function () {
    function Developer(fullName, github, linkedIn, about, stack, interests, title) {
        this.Stack = [];
        this.fullName = fullName;
        this.GitHub = github;
        this.LinkedIn = linkedIn;
        this.About = about;
        this.Stack = stack;
        this.Interests = interests;
        this.title = title;
        this.firstName = 'Allen';
    }
    return Developer;
}());



/***/ }),

/***/ "./src/app/my-site/Services/card.service.ts":
/*!**************************************************!*\
  !*** ./src/app/my-site/Services/card.service.ts ***!
  \**************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Card.Model */ "./src/app/my-site/Models/Card.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardService = /** @class */ (function () {
    function CardService() {
        this.cardList = [
            new _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/cards/strataCover.png', 'Strata', 'demo/angular6/strata'),
            new _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/cards/clickmaster.png', 'Click Master', 'demo/angular6/clickmaster'),
            new _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/cards/aerial.png', 'Aerial', 'demo/angular6/aerial'),
            new _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/cards/workingonit.gif', 'Oop\'s', '#')
        ];
        this.newSiteList = [
            new _Models_Card_Model__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/cards/coffeemaster.png', 'Coffee Master', 'https://allenhiggins.github.io/coffeemasterSite/')
        ];
    }
    CardService.prototype.getCardList = function () {
        return this.cardList.slice();
    };
    CardService.prototype.getNewSiteList = function () {
        return this.newSiteList.slice();
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/my-site/aboutme/aboutme.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-site/aboutme/aboutme.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ABOUT\" class=\"row\">\n  <div class=\"col-xs-6 col-md-6 \">\n    <div class=\"about-left\">\n      <h3><strong>ABOUT ME</strong></h3>\n      <p>{{developer.About}}</p>\n      <p>\n        See my <a href={{developer.GitHub}}>GitHub</a> link for more project work and code baise.\n        Aslo feel free to join me on <a href={{developer.LinkedIn}}>LinkedIn</a>.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-md-6\">\n      <div class=\"about-right\">\n      <img src=\"assets/images/about.jpg\" class=\"about-right\" />\n    </div>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/my-site/aboutme/aboutme.component.scss":
/*!********************************************************!*\
  !*** ./src/app/my-site/aboutme/aboutme.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ABOUT {\n  padding-top: 9em;\n  padding-bottom: 9em; }\n  #ABOUT .about-left h3 {\n    padding-bottom: 1.5em; }\n  #ABOUT .about-left p {\n    color: gray; }\n  #ABOUT .about-right img {\n    max-width: 100%; }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n  #ABOUT {\n    max-width: 80%;\n    margin: auto; } }\n"

/***/ }),

/***/ "./src/app/my-site/aboutme/aboutme.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-site/aboutme/aboutme.component.ts ***!
  \******************************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _developer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../developer.service */ "./src/app/my-site/developer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent(developerService) {
        this.developerService = developerService;
    }
    AboutmeComponent.prototype.ngOnInit = function () {
        this.developer = this.developerService.getDeveloperInfo();
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/my-site/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/my-site/aboutme/aboutme.component.scss")]
        }),
        __metadata("design:paramtypes", [_developer_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"]])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/my-site/cards/cards.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-site/cards/cards.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardDemo\" [ngClass]=\"{'notready': title === 'Oop\\'s'}\">\n  <div class=\"coverImg\">\n    <img src={{link}} />\n  </div>\n  <div class=\"backImg\">\n    <h3>{{title}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-site/cards/cards.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-site/cards/cards.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardDemo {\n  box-shadow: 3px 3px 6px gray; }\n  .cardDemo .coverImg img {\n    width: 100%;\n    height: 14em; }\n  .cardDemo .backImg {\n    text-align: center;\n    background-color: #171717; }\n"

/***/ }),

/***/ "./src/app/my-site/cards/cards.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-site/cards/cards.component.ts ***!
  \**************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardsComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardsComponent.prototype, "title", void 0);
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/my-site/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/my-site/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/my-site/developer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/my-site/developer.service.ts ***!
  \**********************************************/
/*! exports provided: DeveloperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperService", function() { return DeveloperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_Developer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/Developer */ "./src/app/my-site/Models/Developer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeveloperService = /** @class */ (function () {
    function DeveloperService() {
        this.stack = [];
        this.stack = [
            'devicon-angularjs-plain colored',
            'devicon-java-plain-wordmark colored',
            'devicon-csharp-line-wordmark colored',
            'devicon-css3-plain-wordmark colored',
            'devicon-sass-original colored',
            'devicon-html5-plain-wordmark colored',
            'devicon-jquery-plain-wordmark colored',
            'devicon-python-plain-wordmark colored',
            'devicon-mysql-plain-wordmark colored',
            'devicon-mongodb-plain-wordmark colored',
            'devicon-ubuntu-plain-wordmark colored',
            'devicon-windows8-original colored'
        ];
        this.derveloper = new _Models_Developer__WEBPACK_IMPORTED_MODULE_1__["Developer"]('Allen Higgins', 'https://github.com/AllenHiggins', 'https://www.linkedin.com/in/allen-higgins-8b8064115', 'I have recently completed a BSc (Hons) in Software Development from IT Carlow this\
      May 2018, achieving a 2.1 degree (GPR: 68). During this time I produced verus applications using\
      technologies such as Python, RESTful API"s, Angular, Ionic, Java, C#, Web and Cloud Development, Full Stack Development,\
      SQL, MongoDB, Data Analytics, Software Engineering and IOT. I am familiar with Windows\
      and Ubuntu Operating Systems and use Git source control in my projects.', this.stack, 'From time to time I like to take photographs, using Photoshop to create interesting digital images just for fun.', 'Software Developer');
    }
    DeveloperService.prototype.getDeveloperInfo = function () {
        return this.derveloper;
    };
    DeveloperService.prototype.getDeveloperStack = function () {
        return this.stack;
    };
    DeveloperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DeveloperService);
    return DeveloperService;
}());



/***/ }),

/***/ "./src/app/my-site/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-site/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"navbar-brand\">\n    {{developer.fullName}}\n    <br />\n    <ul class=\"social\">\n        <li>\n            <a href={{developer.LinkedIn}} class=\"Linkedin\">\n              <i class=\"fab fa-linkedin\"></i>\n            </a>\n        </li>\n        <li>\n            <a href={{developer.GitHub}} class=\"Git hub\">\n              <i class=\"fab fa-github\"></i>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <div id=\"ham\" (click)=\"open()\" class=\"animated fadeIn\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </div>\n    <div\n      id=\"navbar\"\n      class=\"animated fadeInDown\"\n      [ngClass]=\"{'show': istrue === true}\">\n      <ul id=\"scrollspy\" class=\"navbar navbar-nav navbar-right\" >\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\"  href=\"#HOME\" (click)=\"open()\">\n              <a routerLink=\"\">HOME</a>\n          </a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\"  href=\"#ABOUT\" (click)=\"open()\">\n              <a routerLink=\"\">ABOUT</a>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#DEMO\" (click)=\"open()\">\n              <a routerLink=\"\">DEMO SITES</a>\n          </a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" href=\"#STACK\" (click)=\"open()\">\n              <a routerLink=\"\">STACK</a>\n          </a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" href=\"#INTEREST\" (click)=\"open()\">\n              <a routerLink=\"\">INTEREST</a>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div id=\"HOME\"></div>\n"

/***/ }),

/***/ "./src/app/my-site/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/my-site/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\n  display: block;\n  margin: auto; }\n  #navbar a {\n    color: black;\n    text-decoration: none; }\n  #navbar a:hover {\n    color: gray; }\n  #navbar a:active {\n    color: grey; }\n  #navbar a:focus {\n    color: gray;\n    border-bottom: 1px solid gray; }\n  #ham {\n  display: unset;\n  position: absolute;\n  right: 2em; }\n  #ham:hover {\n  cursor: pointer; }\n  .bg-light {\n  background-color: #ffffff !important;\n  position: fixed;\n  box-shadow: 0px -7px 20px 0px grey;\n  height: 7em;\n  min-width: 100vw;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0; }\n  .navbar-light .navbar-brand {\n  padding-left: 1em;\n  font-size: 20px;\n  font-family: 'Lobster', cursive;\n  text-shadow: -1px 1px 1px grey;\n  position: absolute; }\n  .navbar-light .navbar-brand span {\n    font-size: 22px;\n    color: #5a5a5a; }\n  .navbar-light .navbar-brand ul {\n    list-style: none;\n    font-size: 15px;\n    display: inline-flex;\n    margin: auto;\n    width: 50px; }\n  .navbar-light .navbar-brand ul li {\n      padding-left: 23px;\n      text-shadow: none; }\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (min-width: 992px) {\n  #ham {\n    display: none; } }\n  /* Large devices lower than (laptops/desktops, 992px and up) */\n  @media only screen and (max-width: 992px) {\n  #navbar {\n    width: 100vw;\n    display: none;\n    top: 7em;\n    position: absolute;\n    right: 0em;\n    background-color: #fdfdfd;\n    box-shadow: 1px 1px 2px grey; }\n  #navbar.show {\n    display: unset; } }\n"

/***/ }),

/***/ "./src/app/my-site/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-site/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _developer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../developer.service */ "./src/app/my-site/developer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(developerService) {
        this.developerService = developerService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.istrue = false;
        this.developer = this.developerService.getDeveloperInfo();
    };
    HeaderComponent.prototype.open = function () {
        this.istrue = !this.istrue;
        return this.istrue;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/my-site/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/my-site/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_developer_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/my-site/interest/interest.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-site/interest/interest.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"INTEREST\" class=\"row\">\n  <div class=\"col-xs-12 col-md-6 \">\n    <div class=\"about-left\">\n      <h3><strong>INTERESTS</strong></h3>\n      <p>{{developer.Interests}}</p>\n      <p>Here are some of my favourites...</p>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-md-6\">\n      <div class=\"about-right\">\n      <app-photoslider [images]=imagelist></app-photoslider>\n    </div>\n  </div>\n  <hr>\n  <div class=\"col-xs-12 others\">\n    <hr>\n    <h3>Other Links</h3>\n    <ul>\n      <li>Final year project\n        <a href=\"http://glasnost.itcarlow.ie/~softeng4/C00197373/index.html\">Visit Carlow</a>\n         a comprehensive guide to the County of Carlow. Using Angular 4, Ionic 3 with a Python\n         API\n      </li>\n      <li><a href=\"http://glasnost.itcarlow.ie/~softeng4/HologramProject/\">Project Hologram</a> is part of 4th year IT Carlow\n        Internt of Things assignment during distributed and concurrent device development module. The idea for this project\n        was to create the illution of a 3D holographic display with upcycled hardware and materials while introducing a\n        Raspberry PI into the mix.\n      </li>\n      <li>\n          <a href=\"https://www.twitter.com/CipherAG\">The Enigma Box </a>inspired by Alan Turing and the Enigma Machine of WWII. Using C# and Visual Studio I created an\n          interface that encrypts and deciphers user’s plain text messages.  These messages can have multiple levels of\n          encryption, adding to its complexity in terms of simple machine permutations with intent to break the cipher.\n          Just for fun, I posted cipher messages on Twitter... why not try and break the code.\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/my-site/interest/interest.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/my-site/interest/interest.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#INTEREST {\n  padding-top: 3em;\n  padding-bottom: 1em; }\n  #INTEREST .about-left h3 {\n    padding-bottom: 1.5em; }\n  #INTEREST .about-left p {\n    color: gray;\n    width: 100%; }\n  #INTEREST .others {\n    width: 100%; }\n  #INTEREST .others h3 {\n      padding-top: 1em;\n      padding-bottom: 1em; }\n  #INTEREST .others ul {\n      list-style: circle;\n      padding-left: 1em; }\n  #INTEREST .others ul li {\n        color: gray;\n        padding-bottom: 1em; }\n  #INTEREST .others ul li a {\n          text-decoration: none; }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n  #INTEREST {\n    max-width: 80%;\n    margin: auto; } }\n"

/***/ }),

/***/ "./src/app/my-site/interest/interest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-site/interest/interest.component.ts ***!
  \********************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _developer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../developer.service */ "./src/app/my-site/developer.service.ts");
/* harmony import */ var _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../strata/Services/largeImage.Model */ "./src/app/strata/Services/largeImage.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterestComponent = /** @class */ (function () {
    function InterestComponent(developerService) {
        this.developerService = developerService;
        this.imagelist = [];
        this.imagelist = [
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/1.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/2.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/3.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/4.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/5.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/6.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/7.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/8.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/9.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/10.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/11.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/12.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/13.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/14.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/15.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/16.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/17.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/18.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/19.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/20.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/21.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_2__["LargeImage"]('', '', 'assets/images/mypics/22.jpg')
        ];
    }
    InterestComponent.prototype.ngOnInit = function () {
        this.developer = this.developerService.getDeveloperInfo();
    };
    InterestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interest',
            template: __webpack_require__(/*! ./interest.component.html */ "./src/app/my-site/interest/interest.component.html"),
            styles: [__webpack_require__(/*! ./interest.component.scss */ "./src/app/my-site/interest/interest.component.scss")]
        }),
        __metadata("design:paramtypes", [_developer_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"]])
    ], InterestComponent);
    return InterestComponent;
}());



/***/ }),

/***/ "./src/app/my-site/latestwork/latestwork.component.html":
/*!**************************************************************!*\
  !*** ./src/app/my-site/latestwork/latestwork.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"DEMO\" class=\"latest col-sx-12\">\n  <h3 class=\"demosite\">Demo Sites</h3>\n  <p class=\"demoP\">\n      Fully responsive websites taking HTML5 web pages and converting them into Angular 6\n      applications as a simple demo of work. Technologies also include JQuery, Bootstrap,\n      Animate.css, SASS, Scrollreveal, Google Fonts and Font Awesome.\n  </p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <ul>\n        <li *ngFor = \"let data of cardList\"\n          class=\"col-md-4 col-xs-12 democard\">\n          <a routerLink={{data.route}}>\n            <app-cards\n              [link]=data.imgPath\n              [title]=data.title></app-cards>\n          </a>\n        </li>\n        <li *ngFor = \"let site of websites\"\n          class=\"col-md-4 col-xs-12 democard\">\n          <a href={{site.route}}>\n            <app-cards\n              [link]=site.imgPath\n              [title]=site.title></app-cards>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/my-site/latestwork/latestwork.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/my-site/latestwork/latestwork.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".latest {\n  padding-top: 9em;\n  padding-bottom: 9em;\n  width: 100vw;\n  background-color: white; }\n  .latest h3 {\n    font-family: 'Lobster', cursive;\n    font-family: 'Cinzel', serif;\n    text-align: center; }\n  .latest p {\n    padding-top: 1em;\n    padding-bottom: 4em;\n    max-width: 70%;\n    text-align: center;\n    font-size: 14px;\n    font-weight: 300;\n    color: #727272;\n    line-height: 20px;\n    display: block;\n    margin: auto; }\n  .latest ul li {\n    display: inline-block; }\n  .latest a {\n    text-decoration: none;\n    color: #484848;\n    font-family: 'Cinzel', serif; }\n  .notready {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/my-site/latestwork/latestwork.component.ts":
/*!************************************************************!*\
  !*** ./src/app/my-site/latestwork/latestwork.component.ts ***!
  \************************************************************/
/*! exports provided: LatestworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestworkComponent", function() { return LatestworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/card.service */ "./src/app/my-site/Services/card.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LatestworkComponent = /** @class */ (function () {
    function LatestworkComponent(cardService) {
        this.cardService = cardService;
    }
    LatestworkComponent.prototype.ngOnInit = function () {
        this.cardList = this.cardService.getCardList();
        this.websites = this.cardService.getNewSiteList();
    };
    LatestworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latestwork',
            template: __webpack_require__(/*! ./latestwork.component.html */ "./src/app/my-site/latestwork/latestwork.component.html"),
            styles: [__webpack_require__(/*! ./latestwork.component.scss */ "./src/app/my-site/latestwork/latestwork.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"]])
    ], LatestworkComponent);
    return LatestworkComponent;
}());



/***/ }),

/***/ "./src/app/my-site/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-site/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-parrallax></app-parrallax>\n<div class=\"container\">\n  <div class=\"row\">\n    <app-aboutme></app-aboutme>\n  </div>\n</div>\n<hr>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-latestwork></app-latestwork>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-stack></app-stack>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <app-interest></app-interest>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/my-site/main/main.component.scss":
/*!**************************************************!*\
  !*** ./src/app/my-site/main/main.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent {\n  position: absolute;\n  top: 7em; }\n"

/***/ }),

/***/ "./src/app/my-site/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-site/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/my-site/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/my-site/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/my-site/my-site.component.html":
/*!************************************************!*\
  !*** ./src/app/my-site/my-site.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-myfooter></app-myfooter>\n"

/***/ }),

/***/ "./src/app/my-site/my-site.component.scss":
/*!************************************************!*\
  !*** ./src/app/my-site/my-site.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-site/my-site.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-site/my-site.component.ts ***!
  \**********************************************/
/*! exports provided: MySiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySiteComponent", function() { return MySiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MySiteComponent = /** @class */ (function () {
    function MySiteComponent() {
    }
    MySiteComponent.prototype.ngOnInit = function () {
    };
    MySiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-site',
            template: __webpack_require__(/*! ./my-site.component.html */ "./src/app/my-site/my-site.component.html"),
            styles: [__webpack_require__(/*! ./my-site.component.scss */ "./src/app/my-site/my-site.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MySiteComponent);
    return MySiteComponent;
}());



/***/ }),

/***/ "./src/app/my-site/myfooter/myfooter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-site/myfooter/myfooter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-12\">\n          <p class=\"copyright\">Copyright: Design and Developed by <a href=\"http://www.Themefisher.com\" target=\"_blank\">Themefisher</a>. <br>\n              Get More\n              <a href=\"https://themefisher.com/free-bootstrap-templates/\" target=\"_blank\">\n                  Free Bootstrap Templates\n              </a>\n          </p>\n      </div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/my-site/myfooter/myfooter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/my-site/myfooter/myfooter.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  background-color: #e4e8e8;\n  padding: 25px 0;\n  color: #555;\n  width: 100vw; }\n\n#footer .copyright {\n  font-size: 13px;\n  margin-bottom: 0; }\n\np {\n  font-family: \"Roboto\", sans-serif;\n  line-height: 22px;\n  font-size: 16px;\n  font-weight: 300;\n  margin: 0 0 10px;\n  display: block; }\n\n#footer .social {\n  text-align: right;\n  margin-bottom: 0; }\n\nul {\n  padding-left: 0; }\n\nol, ul {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n#footer .social li {\n  display: inline-block;\n  margin-right: 15px; }\n\nul li {\n  list-style: none; }\n\n* {\n  box-sizing: border-box; }\n\nuser agent stylesheet\nli {\n  display: list-item;\n  text-align: -webkit-match-parent; }\n\nul, menu, dir {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px; }\n\n/* devices small */\n\n@media only screen and (max-width: 768px) {\n  #footer .social, .copyright {\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/my-site/myfooter/myfooter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-site/myfooter/myfooter.component.ts ***!
  \********************************************************/
/*! exports provided: MyfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfooterComponent", function() { return MyfooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyfooterComponent = /** @class */ (function () {
    function MyfooterComponent() {
    }
    MyfooterComponent.prototype.ngOnInit = function () {
    };
    MyfooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myfooter',
            template: __webpack_require__(/*! ./myfooter.component.html */ "./src/app/my-site/myfooter/myfooter.component.html"),
            styles: [__webpack_require__(/*! ./myfooter.component.scss */ "./src/app/my-site/myfooter/myfooter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyfooterComponent);
    return MyfooterComponent;
}());



/***/ }),

/***/ "./src/app/my-site/stack/stack.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-site/stack/stack.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"STACK\" class=\"container-fluid\">\n    <div class=\"aboutstack\">\n      <div class=\"aboutOne\">\n        <h3><strong>MY STACK...</strong></h3>\n        <ul class=\"stacklist\">\n          <!--http://konpa.github.io/devicon/-->\n          <li *ngFor=\"let data of stack\"><i class={{data}} ></i></li>\n        </ul>\n      </div>\n    </div>\n    <video autoplay loop muted preload>\n      <source\n        src=\"assets/videos/stack.mp4\"\n        type=\"video/mp4\">\n      Your browser does not support the video tag.\n    </video>\n</section>\n"

/***/ }),

/***/ "./src/app/my-site/stack/stack.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-site/stack/stack.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#STACK {\n  padding-top: 6em;\n  padding-bottom: 0em;\n  -webkit-background-clip: border-box;\n  width: 100vw;\n  height: 46em;\n  overflow: hidden; }\n  #STACK .aboutstack .aboutOne {\n    padding-top: 5em;\n    width: 70%;\n    display: block;\n    margin: auto; }\n  #STACK .aboutstack .aboutOne h3 {\n      font-family: 'Lobster', cursive;\n      text-shadow: -1px 1px 1px grey; }\n  #STACK .aboutstack .aboutOne ul {\n      list-style: inside;\n      display: block;\n      margin: auto; }\n  #STACK .aboutstack .aboutOne ul li {\n        text-align: center;\n        display: inline-block;\n        padding: 30px; }\n  #STACK .aboutstack .aboutOne ul li i {\n          font-size: 60px;\n          text-shadow: 1px 2px 1px grey; }\n  #STACK video {\n    z-index: -1;\n    -ms-grid-row-align: auto;\n    opacity: .2;\n    margin-top: -60em;\n    margin-left: -31em; }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n  #STACK {\n    height: 64em; }\n    #STACK .aboutstack .aboutOne {\n      width: 75%; }\n    #STACK .aboutstack video {\n      margin-top: -61em;\n      margin-left: -47em; } }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 404px) {\n  #STACK {\n    height: 64em; }\n    #STACK .aboutstack video {\n      margin-top: -61em;\n      margin-left: -30em; } }\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\n  @media only screen and (min-width: 1200px) {\n  #STACK video {\n    margin-left: -1em; } }\n"

/***/ }),

/***/ "./src/app/my-site/stack/stack.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-site/stack/stack.component.ts ***!
  \**************************************************/
/*! exports provided: StackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _developer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../developer.service */ "./src/app/my-site/developer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StackComponent = /** @class */ (function () {
    function StackComponent(developerService) {
        this.developerService = developerService;
        this.stack = [];
    }
    StackComponent.prototype.ngOnInit = function () {
        this.stack = this.developerService.getDeveloperStack();
    };
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stack',
            template: __webpack_require__(/*! ./stack.component.html */ "./src/app/my-site/stack/stack.component.html"),
            styles: [__webpack_require__(/*! ./stack.component.scss */ "./src/app/my-site/stack/stack.component.scss")]
        }),
        __metadata("design:paramtypes", [_developer_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"]])
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "./src/app/ngbd-carousel-basic/carousel-basic.html":
/*!*********************************************************!*\
  !*** ./src/app/ngbd-carousel-basic/carousel-basic.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-carousel *ngIf=\"images\">\n    <!-- Selected Image goes here -->\n      <ng-template ngbSlide>\n        <img\n          [src]=\"choosenImage.ImagePath\"\n          alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <h3>{{choosenImage.Header}}</h3>\n          <p>{{choosenImage.Text}}</p>\n        </div>\n      </ng-template>\n\n      <!-- Loop through rest of images here -->\n      <ng-template ngbSlide\n      *ngFor = \"let image of images; let i = index;\">\n        <img\n          [src]=\"image.ImagePath\"\n          alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <h3>{{image.Header}}</h3>\n          <p>{{image.Text}}</p>\n        </div>\n      </ng-template>\n  </ngb-carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/ngbd-carousel-basic/carousel.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngbd-carousel-basic/carousel.service.ts ***!
  \*********************************************************/
/*! exports provided: CarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselService", function() { return CarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strata/Services/largeImage.Model */ "./src/app/strata/Services/largeImage.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselService = /** @class */ (function () {
    function CarouselService() {
        this.images = [];
        this.images = [
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image01', 'Some Samlpe text for Image01', 'assets/images/largeImg/01.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image02', 'Some Samlpe text for Image02', 'assets/images/largeImg/02.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image03', 'Some Samlpe text for Image03', 'assets/images/largeImg/03.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image04', 'Some Samlpe text for Image04', 'assets/images/largeImg/04.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image05', 'Some Samlpe text for Image05', 'assets/images/largeImg/05.jpg'),
            new _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"]('Image06', 'Some Samlpe text for Image06', 'assets/images/largeImg/06.jpg')
        ];
    }
    CarouselService.prototype.getImagesForSilder = function () {
        return this.images.slice();
    };
    CarouselService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarouselService);
    return CarouselService;
}());



/***/ }),

/***/ "./src/app/ngbd-carousel-basic/ngbd-carousel-basic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ngbd-carousel-basic/ngbd-carousel-basic.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdCarouselBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasicComponent", function() { return NgbdCarouselBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.service */ "./src/app/ngbd-carousel-basic/carousel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdCarouselBasicComponent = /** @class */ (function () {
    function NgbdCarouselBasicComponent(carouselService) {
        this.carouselService = carouselService;
        this.images = [];
        // Init so component will not throw any errors when first loaded
        this.selectedIndex = 0;
    }
    NgbdCarouselBasicComponent.prototype.ngOnInit = function () {
        this.images = this.carouselService.getImagesForSilder();
        // Set the selected image by the user
        this.choosenImage = this.images[this.selectedIndex];
        // Remove the selected image obj from the array
        // so it will not appear twice in the photo slider
        this.images.splice(this.selectedIndex, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgbdCarouselBasicComponent.prototype, "selectedIndex", void 0);
    NgbdCarouselBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-carousel-basic',
            template: __webpack_require__(/*! ./carousel-basic.html */ "./src/app/ngbd-carousel-basic/carousel-basic.html")
        }),
        __metadata("design:paramtypes", [_carousel_service__WEBPACK_IMPORTED_MODULE_1__["CarouselService"]])
    ], NgbdCarouselBasicComponent);
    return NgbdCarouselBasicComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"not\">\n    <h4>Another friendly 404 for all you hackers out there</h4>\n    <img src=\"assets/images/404-error-2.gif\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.scss":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not {\n  background-color: black;\n  width: 100vw;\n  height: 100vh; }\n  .not h4 {\n    top: 7em;\n    color: white;\n    position: absolute;\n    width: 100%;\n    text-align: center; }\n  .not img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/parrallax/parrallax.component.html":
/*!****************************************************!*\
  !*** ./src/app/parrallax/parrallax.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"parallax\">\n  <div class=\"parallaxContent\">\n    <h1><strong>Hi, My Name Is {{developer.firstName}} &#38; I Am A</strong> <br /> {{developer.title}}</h1>\n    <ul>\n      <li>\n        <i class=\"fab fa-angular animated fadeIn\" style=\"color:red\"></i>\n        <p>This site is made with Angular 6<br />\n<span style=\"font-size: 14px\">Optimized for Google Chrome</span></p>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/parrallax/parrallax.component.scss":
/*!****************************************************!*\
  !*** ./src/app/parrallax/parrallax.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#parallax {\n  top: 7em;\n  background-image: url('slider.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  min-height: 100vh;\n  box-shadow: 0px 2px 8px grey;\n  background-blend-mode: overlay;\n  background-color: #d0d0d0; }\n  #parallax .parallaxContent {\n    margin-top: 7em;\n    height: 100%; }\n  #parallax .parallaxContent h1 {\n      text-align: center;\n      padding-top: 3em;\n      font-family: 'Lobster', cursive;\n      font-family: 'Cinzel', serif; }\n  #parallax .parallaxContent ul {\n      padding: 0;\n      padding-top: 2em;\n      text-align: center; }\n  #parallax .parallaxContent ul li {\n        display: inline;\n        padding: 10px; }\n  #parallax .parallaxContent ul li i {\n          font-size: 7em;\n          text-shadow: 1px 2px 1px gray; }\n  #parallax .parallaxContent ul li p {\n          padding-top: 1em;\n          text-align: center;\n          font-family: 'Lobster', cursive;\n          font-family: 'Cinzel', serif; }\n  /* devices small */\n  @media only screen and (max-width: 768px) {\n  #parallax .parallaxContent h1 {\n    font-size: 2em; }\n  #parallax .parallaxContent ul li i {\n    font-size: 6em; } }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n  #parallax .parallaxContent h1 {\n    font-size: 23px; } }\n"

/***/ }),

/***/ "./src/app/parrallax/parrallax.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parrallax/parrallax.component.ts ***!
  \**************************************************/
/*! exports provided: ParrallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParrallaxComponent", function() { return ParrallaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_site_developer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-site/developer.service */ "./src/app/my-site/developer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParrallaxComponent = /** @class */ (function () {
    function ParrallaxComponent(developerService) {
        this.developerService = developerService;
    }
    ParrallaxComponent.prototype.ngOnInit = function () {
        this.developer = this.developerService.getDeveloperInfo();
    };
    ParrallaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parrallax',
            template: __webpack_require__(/*! ./parrallax.component.html */ "./src/app/parrallax/parrallax.component.html"),
            styles: [__webpack_require__(/*! ./parrallax.component.scss */ "./src/app/parrallax/parrallax.component.scss")]
        }),
        __metadata("design:paramtypes", [_my_site_developer_service__WEBPACK_IMPORTED_MODULE_1__["DeveloperService"]])
    ], ParrallaxComponent);
    return ParrallaxComponent;
}());



/***/ }),

/***/ "./src/app/photoslider/photoslider.component.html":
/*!********************************************************!*\
  !*** ./src/app/photoslider/photoslider.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container imgSlider\">\n    <ngb-carousel *ngIf=\"images\">\n        <ng-template ngbSlide\n        *ngFor = \"let image of images\">\n          <img\n            [src]=\"image.ImagePath\"\n            alt=\"Random first slide\">\n        </ng-template>\n    </ngb-carousel>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/photoslider/photoslider.component.scss":
/*!********************************************************!*\
  !*** ./src/app/photoslider/photoslider.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgSlider {\n  background-color: black;\n  width: 100%; }\n  .imgSlider img {\n    height: 20em;\n    display: block;\n    margin: auto; }\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n  .imgSlider img {\n    max-width: 100%; } }\n"

/***/ }),

/***/ "./src/app/photoslider/photoslider.component.ts":
/*!******************************************************!*\
  !*** ./src/app/photoslider/photoslider.component.ts ***!
  \******************************************************/
/*! exports provided: PhotosliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosliderComponent", function() { return PhotosliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strata/Services/largeImage.Model */ "./src/app/strata/Services/largeImage.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosliderComponent = /** @class */ (function () {
    function PhotosliderComponent() {
    }
    PhotosliderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _strata_Services_largeImage_Model__WEBPACK_IMPORTED_MODULE_1__["LargeImage"])
    ], PhotosliderComponent.prototype, "images", void 0);
    PhotosliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photoslider',
            template: __webpack_require__(/*! ./photoslider.component.html */ "./src/app/photoslider/photoslider.component.html"),
            styles: [__webpack_require__(/*! ./photoslider.component.scss */ "./src/app/photoslider/photoslider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosliderComponent);
    return PhotosliderComponent;
}());



/***/ }),

/***/ "./src/app/strata/Services/largeImage.Model.ts":
/*!*****************************************************!*\
  !*** ./src/app/strata/Services/largeImage.Model.ts ***!
  \*****************************************************/
/*! exports provided: LargeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeImage", function() { return LargeImage; });
/* harmony import */ var _tumbnail_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tumbnail.Model */ "./src/app/strata/Services/tumbnail.Model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LargeImage = /** @class */ (function (_super) {
    __extends(LargeImage, _super);
    function LargeImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LargeImage;
}(_tumbnail_Model__WEBPACK_IMPORTED_MODULE_0__["TumbNail"]));



/***/ }),

/***/ "./src/app/strata/Services/main-content.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/strata/Services/main-content.service.ts ***!
  \*********************************************************/
/*! exports provided: MainContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentService", function() { return MainContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentService = /** @class */ (function () {
    function MainContentService() {
        this.content = {
            header: 'Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu neque.',
            text: 'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem\
    vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor\
    primis integer massa adipiscing id nisi accumsan pellentesque commodo\
    blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu\
    lorem semper nunc nisi lorem vulputate lorem neque cubilia.'
        };
    }
    MainContentService.prototype.getMainContent = function () {
        return this.content;
    };
    MainContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MainContentService);
    return MainContentService;
}());



/***/ }),

/***/ "./src/app/strata/Services/tumbnail.Model.ts":
/*!***************************************************!*\
  !*** ./src/app/strata/Services/tumbnail.Model.ts ***!
  \***************************************************/
/*! exports provided: TumbNail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TumbNail", function() { return TumbNail; });
var TumbNail = /** @class */ (function () {
    function TumbNail(header, text, imagePath) {
        this.Header = header;
        this.Text = text;
        this.ImagePath = imagePath;
    }
    return TumbNail;
}());



/***/ }),

/***/ "./src/app/strata/Services/tumbnail.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/strata/Services/tumbnail.service.ts ***!
  \*****************************************************/
/*! exports provided: TumbnailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TumbnailService", function() { return TumbnailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tumbnail.Model */ "./src/app/strata/Services/tumbnail.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TumbnailService = /** @class */ (function () {
    function TumbnailService() {
        this.tumbNail = [];
        this.tumbNail = [
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Magna sed consequat tempus', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/01.jpg'),
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Ultricies lacinia interdum', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/02.jpg'),
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Tortor metus commodo', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/03.jpg'),
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Quam neque phasellus', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/04.jpg'),
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Nunc enim commodo aliquet', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/05.jpg'),
            new _tumbnail_Model__WEBPACK_IMPORTED_MODULE_1__["TumbNail"]('Risus ornare lacinia', 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', 'assets/images/tumbnails/06.jpg'),
        ];
    }
    TumbnailService.prototype.getTumbNailData = function () {
        return this.tumbNail.slice();
    };
    TumbnailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TumbnailService);
    return TumbnailService;
}());



/***/ }),

/***/ "./src/app/strata/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/strata/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-links></app-links>\n</div>\n"

/***/ }),

/***/ "./src/app/strata/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/strata/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: block;\n  clear: both;\n  width: 100vw;\n  background-color: #1f1815; }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 992px) {\n  app-links {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/strata/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/strata/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/strata/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/strata/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/strata/get-in-touch/get-in-touch.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/strata/get-in-touch/get-in-touch.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>\n<div class=\"row formHolder\">\n  <div class=\"col-xs-12 col-md-8\">\n      <div class=\"col-xs-12 col-md-6 userInput\">\n        <input\n          type=\"text\"\n          placeholder=\"Name\"\n          [(ngModel)]=\"Name\"\n        />\n      </div>\n      <div class=\"col-xs-12 col-md-6 userInput\">\n        <input\n          type=\"email\"\n          placeholder=\"Email\"\n          [(ngModel)]=\"Email\"\n        />\n      </div>\n      <div class=\"col-xs-12\">\n        <textarea\n          rows=\"4\"\n          placeholder=\"Message\"\n          [(ngModel)]=\"Msg\"\n        ></textarea>\n      </div>\n      <button\n        (click)=\"sendMsg()\"\n        class=\"btn btn-outline-success\">submit</button>\n  </div>\n  <div class=\"col-xs-12 col-md-4\">\n    <ul>\n      <li>\n        <h3 style=\"margin-right:20px\" class=\"fa fa-home\"></h3>\n        <span>123 Somewhere Rd.<br />Nashville, TN 00000<br />United States</span>\n      </li>\n      <li>\n        <h3 style=\"margin-right:30px\" class=\"fa fa-mobile\"></h3>\n        <span>000-000-0000</span>\n      </li>\n      <li>\n        <h3 style=\"margin-right:20px\" class=\"fa fa-envelope-o\"></h3>\n        <span>hello@untitled.tld</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/strata/get-in-touch/get-in-touch.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/strata/get-in-touch/get-in-touch.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  padding-top: 2em;\n  color: #a8a6a6; }\n\ndiv.formHolder {\n  padding-top: 1em; }\n\ndiv.userInput {\n  float: left;\n  padding-bottom: 1em;\n  padding-left: 0px; }\n\ninput[type=\"text\"],\ninput[type=\"email\"],\nselect,\ntextarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  background: #f7f7f7;\n  border-radius: 0.35em;\n  border: solid 2px transparent;\n  color: inherit;\n  display: block;\n  outline: 0;\n  padding: 7px 0.75em;\n  text-decoration: none;\n  width: 100%; }\n\n.btn-outline-success {\n  margin-top: 1em;\n  padding: 0.5em 2em 0.5em 2em;\n  color: #6b6a6a !important;\n  background-color: transparent;\n  background-image: none;\n  border-color: #e7e7e7 !important;\n  border-width: 3px; }\n\n.btn-outline-success:hover {\n  color: green !important;\n  border-color: green !important; }\n\nul {\n  -webkit-text-decoration-style: none;\n          text-decoration-style: none;\n  padding: 0px; }\n\nul li:last-child {\n    padding-bottom: 0px; }\n\nul li {\n    display: block;\n    padding: 0px 0px 10px 0px;\n    color: #a8a6a6; }\n\nul li h3 {\n      font-size: 1.25em;\n      line-height: 1.5em; }\n\nul li span {\n      display: inline-flex; }\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n  .btn {\n    width: 100% !important;\n    margin-bottom: 2em; } }\n"

/***/ }),

/***/ "./src/app/strata/get-in-touch/get-in-touch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/strata/get-in-touch/get-in-touch.component.ts ***!
  \***************************************************************/
/*! exports provided: GetInTouchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function() { return GetInTouchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetInTouchComponent = /** @class */ (function () {
    function GetInTouchComponent() {
    }
    GetInTouchComponent.prototype.ngOnInit = function () {
        this.Name = '';
        this.Email = '';
        this.Msg = '';
    };
    GetInTouchComponent.prototype.sendMsg = function () {
        console.log(this.Name);
        if (this.Name !== '' &&
            this.Email !== '' &&
            this.Msg !== '') {
            alert('Name: ' + this.Name +
                '\nEmail: ' + this.Email +
                '\nMessage: ' + this.Msg);
            // Reset Input Values
            this.Name = '';
            this.Email = '';
            this.Msg = '';
        }
        else {
            alert('Please fill in the form');
        }
    };
    GetInTouchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-in-touch',
            template: __webpack_require__(/*! ./get-in-touch.component.html */ "./src/app/strata/get-in-touch/get-in-touch.component.html"),
            styles: [__webpack_require__(/*! ./get-in-touch.component.scss */ "./src/app/strata/get-in-touch/get-in-touch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GetInTouchComponent);
    return GetInTouchComponent;
}());



/***/ }),

/***/ "./src/app/strata/info-header/info-header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/strata/info-header/info-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4 header\">\n    <div class=\"container col-lg-10 innerDiv\">\n      <img src=\"assets/images/bg.jpg\" alt=\"Profile\"/>\n      <p class=\"bigText\">\n        <strong>I am Strata</strong><span class=\"headerText\">, a super simple responsive site template freebie crafted by<span class=\"code\"> HTML5 UP</span> and converted into <span class=\"code\">Angular 6</span>.</span>\n      </p>\n      <app-links></app-links>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/strata/info-header/info-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/strata/info-header/info-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: unset;\n  background-image: url('bg.jpg');\n  background-blend-mode: overlay;\n  background-repeat: no-repeat; }\n  .header .innerDiv img {\n    margin-top: 0px;\n    background-color: gray;\n    border-radius: 360px;\n    display: block;\n    height: 106px;\n    width: 106px;\n    margin: auto;\n    background-blend-mode: overlay; }\n  .header .innerDiv .bigText {\n    padding-top: 1em;\n    color: white;\n    font-size: 22px;\n    text-align: center;\n    max-width: 10em;\n    display: block;\n    margin: auto; }\n  .header app-links {\n    display: none; }\n  /* devices from small to labtop */\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n  .header {\n    background-color: #dddddd; }\n    .header .innerDiv {\n      margin-top: 5em;\n      width: 80%;\n      margin-bottom: 1em; } }\n  /* Small devices (portrait tablets and large phones, 600px and up) */\n  @media only screen and (min-width: 600px) {\n  .header .innerDiv .bigText {\n    font-size: 25px;\n    max-width: 14em; } }\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (min-width: 992px) {\n  .header {\n    position: fixed;\n    background-color: #dddddd;\n    height: 100vh; }\n    .header .innerDiv {\n      margin-top: 6em;\n      height: 17em; }\n      .header .innerDiv img {\n        float: right; }\n      .header .innerDiv .bigText {\n        font-size: 18px;\n        text-align: right;\n        padding-top: 2em;\n        width: 86%;\n        float: right; }\n    .header app-links {\n      display: unset; }\n  .headerText {\n    color: gray; } }\n  /* devices from small to labtop */\n  @media only screen and (min-width: 0px) and (max-width: 736px) {\n  .headerText {\n    font-size: 20px; } }\n"

/***/ }),

/***/ "./src/app/strata/info-header/info-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/strata/info-header/info-header.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoHeaderComponent", function() { return InfoHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoHeaderComponent = /** @class */ (function () {
    function InfoHeaderComponent() {
    }
    InfoHeaderComponent.prototype.ngOnInit = function () {
    };
    InfoHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-header',
            template: __webpack_require__(/*! ./info-header.component.html */ "./src/app/strata/info-header/info-header.component.html"),
            styles: [__webpack_require__(/*! ./info-header.component.scss */ "./src/app/strata/info-header/info-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoHeaderComponent);
    return InfoHeaderComponent;
}());



/***/ }),

/***/ "./src/app/strata/links/links.component.html":
/*!***************************************************!*\
  !*** ./src/app/strata/links/links.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logoBox\">\n  <ul>\n    <li><a href=\"#\" class=\"fa fa-twitter\"></a></li>\n    <li><a href=\"#\" class=\"fa fa-github\"></a></li>\n    <li><a href=\"#\" class=\"fa fa-dribbble\"></a></li>\n    <li><a href=\"#\" class=\"fa fa-envelope-o\"></a></li>\n  </ul>\n  <p class=\"smallPrint\">© Untitled <span class=\"line\"> | </span></p>\n  <p class=\"smallPrint\">Design:<span class=\"code\"> HTML5 UP</span></p>\n</div>\n"

/***/ }),

/***/ "./src/app/strata/links/links.component.scss":
/*!***************************************************!*\
  !*** ./src/app/strata/links/links.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoBox {\n  float: right;\n  margin-top: 15vh; }\n  .logoBox ul li {\n    display: inline-block;\n    padding-left: 1em; }\n  .logoBox ul li a {\n      font-size: 26px;\n      color: #8d9092;\n      display: inline;\n      -webkit-text-decoration-line: none;\n              text-decoration-line: none; }\n  .logoBox ul li a:hover {\n      color: green; }\n  .logoBox p .line {\n    visibility: hidden; }\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (max-width: 992px) {\n  .logoBox {\n    padding-top: 3em;\n    padding-bottom: 4em;\n    float: unset;\n    width: 214px;\n    display: block;\n    margin: auto;\n    text-align: center; }\n    .logoBox ul {\n      padding: 0px; }\n      .logoBox ul li:first-child {\n        padding-left: 0px;\n        margin-left: 0px; }\n      .logoBox ul li {\n        padding-left: 1em; }\n        .logoBox ul li a {\n          font-size: 30px; }\n    .logoBox p {\n      display: inline; }\n      .logoBox p .line {\n        visibility: visible; } }\n  /* devices from small to labtop */\n  @media only screen and (max-width: 736px) {\n  .logoBox {\n    padding-top: 3em;\n    padding-bottom: 4em;\n    width: 214px; }\n    .logoBox ul li a {\n      font-size: 26px; } }\n"

/***/ }),

/***/ "./src/app/strata/links/links.component.ts":
/*!*************************************************!*\
  !*** ./src/app/strata/links/links.component.ts ***!
  \*************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/strata/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.scss */ "./src/app/strata/links/links.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/strata/main-section/main-section.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/strata/main-section/main-section.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"float:right; padding-left:2em; padding-bottom: 2em;\" class=\"col-lg-8\">\n    <h2>{{info.header}}</h2>\n    <p>{{info.text}}</p>\n    <button\n      class=\"btn btn-outline-success\">\n        {{btnTxt}}\n    </button>\n    <hr>\n    <h4>Recent Work</h4>\n    <div class=\"row\">\n      <app-recent-work\n        class=\" col-sm-6 col-md-6\"\n        *ngFor=\"let data of tumbNail; let i = index;\"\n          header=\"{{data.Header}}\"\n          text=\"{{data.Text}}\"\n          image=\"{{data.ImagePath}}\"\n          (click)=\"open(content, i)\"\n      ></app-recent-work>\n    </div>\n    <hr>\n    <h4>Get In Touch</h4>\n    <app-get-in-touch></app-get-in-touch>\n</div>\n<!-- Modal -->\n<ng-template\n  #content\n  let-c=\"close\"\n  let-d=\"dismiss\">\n  <div class=\"animated zoomIn faster\">\n    <!--Photo Slider gose here-->\n    <app-ngbd-carousel-basic selectedIndex={{choice}}></app-ngbd-carousel-basic>\n  </div>\n</ng-template>\n<!-- End of Modal -->\n\n"

/***/ }),

/***/ "./src/app/strata/main-section/main-section.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/strata/main-section/main-section.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 3em;\n  padding-bottom: 1em;\n  max-width: 85%;\n  color: grey; }\n\nh4 {\n  padding-top: 1em;\n  color: grey; }\n\np {\n  padding-bottom: 1em;\n  color: #a8a6a6; }\n\nhr {\n  margin-top: 4em; }\n\n.btn-outline-success {\n  padding: 0.5em 2em 0.5em 2em;\n  color: #6b6a6a !important;\n  background-color: transparent;\n  background-image: none;\n  border-color: #e7e7e7 !important;\n  border-width: 3px; }\n\n.btn-outline-success:hover {\n  color: green !important;\n  border-color: green !important; }\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 736px) {\n  h2 {\n    margin-top: 1em;\n    font-size: 1.35em; }\n  .btn {\n    width: 100% !important; }\n  hr {\n    margin-top: 2em; } }\n"

/***/ }),

/***/ "./src/app/strata/main-section/main-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/strata/main-section/main-section.component.ts ***!
  \***************************************************************/
/*! exports provided: MainSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function() { return MainSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_main_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/main-content.service */ "./src/app/strata/Services/main-content.service.ts");
/* harmony import */ var _Services_tumbnail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/tumbnail.service */ "./src/app/strata/Services/tumbnail.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainSectionComponent = /** @class */ (function () {
    function MainSectionComponent(mainContentService, tumbNailService, modalService) {
        this.mainContentService = mainContentService;
        this.tumbNailService = tumbNailService;
        this.modalService = modalService;
        this.btnTxt = 'Learn More';
    }
    MainSectionComponent.prototype.ngOnInit = function () {
        this.info = this.mainContentService.getMainContent();
        this.tumbNail = this.tumbNailService.getTumbNailData();
    };
    MainSectionComponent.prototype.open = function (content, imgNUmber) {
        this.choice = imgNUmber;
        this.modalService.open(content);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainSectionComponent.prototype, "choice", void 0);
    MainSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-section',
            template: __webpack_require__(/*! ./main-section.component.html */ "./src/app/strata/main-section/main-section.component.html"),
            styles: [__webpack_require__(/*! ./main-section.component.scss */ "./src/app/strata/main-section/main-section.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_main_content_service__WEBPACK_IMPORTED_MODULE_1__["MainContentService"],
            _Services_tumbnail_service__WEBPACK_IMPORTED_MODULE_2__["TumbnailService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], MainSectionComponent);
    return MainSectionComponent;
}());



/***/ }),

/***/ "./src/app/strata/ngbd-modal-basic/modal-basic.html":
/*!**********************************************************!*\
  !*** ./src/app/strata/ngbd-modal-basic/modal-basic.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template\n  #content\n  let-c=\"close\"\n  let-d=\"dismiss\">\n  <div class=\"animated zoomIn faster\">\n    <!--Photo Slider gose here-->\n    <app-ngbd-carousel-basic selectedIndex={{choice}}></app-ngbd-carousel-basic>\n  </div>\n</ng-template>\n\n<button\n  class=\"btn btn-lg btn-outline-primary\"\n  (click)=\"open(content)\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/strata/ngbd-modal-basic/ngbd-modal-basic.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/strata/ngbd-modal-basic/ngbd-modal-basic.component.ts ***!
  \***********************************************************************/
/*! exports provided: NgbdModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function() { return NgbdModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasicComponent = /** @class */ (function () {
    function NgbdModalBasicComponent(modalService) {
        this.modalService = modalService;
        this.choice = 3;
    }
    NgbdModalBasicComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgbdModalBasicComponent.prototype, "choice", void 0);
    NgbdModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.html */ "./src/app/strata/ngbd-modal-basic/modal-basic.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasicComponent);
    return NgbdModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/strata/recent-work/recent-work.component.html":
/*!***************************************************************!*\
  !*** ./src/app/strata/recent-work/recent-work.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"tumbnail\">\n    <a><img src={{image}} alt=\"tumbnail\"></a>\n  </div>\n  <h3>{{header}}</h3>\n  <p>{{text}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/strata/recent-work/recent-work.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/strata/recent-work/recent-work.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding-top: 1.2em;\n  padding-bottom: 1em; }\n  div .tumbnail {\n    height: 14em; }\n  div .tumbnail a {\n      cursor: pointer; }\n  div .tumbnail a img {\n        background-color: #333333;\n        height: 100%;\n        width: 100%;\n        display: block;\n        border-radius: 10px; }\n  div h3 {\n    color: grey;\n    font-size: 1em;\n    line-height: 1.5em;\n    font-weight: 400; }\n  div p {\n    color: #a8a6a6;\n    font-size: 0.8em;\n    line-height: 1.5em;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/strata/recent-work/recent-work.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/strata/recent-work/recent-work.component.ts ***!
  \*************************************************************/
/*! exports provided: RecentWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentWorkComponent", function() { return RecentWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentWorkComponent = /** @class */ (function () {
    function RecentWorkComponent() {
    }
    RecentWorkComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecentWorkComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecentWorkComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecentWorkComponent.prototype, "image", void 0);
    RecentWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-work',
            template: __webpack_require__(/*! ./recent-work.component.html */ "./src/app/strata/recent-work/recent-work.component.html"),
            styles: [__webpack_require__(/*! ./recent-work.component.scss */ "./src/app/strata/recent-work/recent-work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecentWorkComponent);
    return RecentWorkComponent;
}());



/***/ }),

/***/ "./src/app/strata/strata.component.html":
/*!**********************************************!*\
  !*** ./src/app/strata/strata.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"demopageplacement\">\n  <app-info-header></app-info-header>\n  <app-main-section></app-main-section>\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/strata/strata.component.scss":
/*!**********************************************!*\
  !*** ./src/app/strata/strata.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/strata/strata.component.ts":
/*!********************************************!*\
  !*** ./src/app/strata/strata.component.ts ***!
  \********************************************/
/*! exports provided: StrataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrataComponent", function() { return StrataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrataComponent = /** @class */ (function () {
    function StrataComponent() {
    }
    StrataComponent.prototype.ngOnInit = function () {
    };
    StrataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-strata',
            template: __webpack_require__(/*! ./strata.component.html */ "./src/app/strata/strata.component.html"),
            styles: [__webpack_require__(/*! ./strata.component.scss */ "./src/app/strata/strata.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StrataComponent);
    return StrataComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/allen/Documents/code_angular5/Website/webSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map