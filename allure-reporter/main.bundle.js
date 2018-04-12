webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [(toggleResults)]=\"showResults\" [(toggleSummary)]=\"showSummary\"></app-navbar>\n<div class=\"container\">\n\n\t<p></p>\n\t<file-drop class=\"no-print\" (onFileDrop)=\"fileDrop($event)\">\n\t\t<div class=\"text-center text-primary\">\n\t\t\t<i class=\"fa fa-upload\" style=\"font-size:23px;\"></i>\n\t\t\t<p>Drop your allure files here</p>\n\t\t</div>\n\t</file-drop>\n\n\t<ng-container *ngIf=\"showSummary && showResults\">\n\t\t<test-summary-table [category]=\"'suite'\" [categoryName]=\"'Test Suite'\"></test-summary-table>\n\t\t<test-summary-table [category]=\"'severity'\" [categoryName]=\"'Severity'\"></test-summary-table>\n\t\t<test-summary-table [category]=\"'tag'\" [categoryName]=\"'Tag'\"></test-summary-table>\n\t</ng-container>\n\n\t<div *ngFor=\"let test of tests\">\n\t\t<div class=\"pt-4 mb-1\">\n\t\t\t<i *ngIf=\"showResults && test.status==='passed'\" class=\"fa fa-check-circle-o\" style=\"font-size:33px;color:green;\"></i>\n\t\t\t<i *ngIf=\"showResults && test.status==='failed'\" class=\"fa fa-times-circle-o\" style=\"font-size:33px;color:red;\"></i>\n\t\t\t<h2 class=\"d-inline\">{{test.name}}</h2>\n\t\t</div>\n\n\t\t<div *ngIf=\"test.labels && test.labels.length>0\" class=\"form-group mb-1\">\n\t\t\t<div>\n\t\t\t\t<test-label *ngFor=\"let label of test.labels\" [label]=\"label\"></test-label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"test.links && test.links.length>0\" class=\"form-group  mb-1\">\n\t\t\t<div>\n\t\t\t\t<test-link *ngFor=\"let link of test.links\" [link]=\"link\" class=\"mr-2\"></test-link>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"showResults\" class=\"form-group\">\n\t\t\t<div>\n\t\t\t\t<i class=\"mr-1 fa fa-clock-o\"></i>\n\t\t\t\t<small>{{getDateDetails(test)}}</small>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p markdown>{{test.description}}</p>\n\t\t</div>\n\n\t\t<test-steps [steps]=\"test.steps\" [showResults]=\"showResults\"></test-steps>\n\t\t<p></p>\n\t</div>\n\n</div>\n\n<app-footer class=\"no-print\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_summary_test_summary_table_component__ = __webpack_require__("./src/app/features/summary/test-summary-table.component.ts");
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
    function AppComponent(http, ref) {
        this.http = http;
        this.ref = ref;
        this.tests = [];
        this.uploadingFiles = [];
        this._showSummary = true;
        this._showResults = true;
    }
    Object.defineProperty(AppComponent.prototype, "showSummary", {
        get: function () {
            return this._showSummary;
        },
        set: function (show) {
            this._showSummary = show;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "showResults", {
        get: function () {
            return this._showResults;
        },
        set: function (show) {
            this._showResults = show;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.fileDrop = function (event) {
        var _this = this;
        var files = event.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            file.fileEntry.file(function (info) {
                _this.uploadingFiles.push(info.name);
                var reader = new FileReader();
                reader.onload = function (e) {
                    var test = JSON.parse(e.target.result);
                    _this.addTest(test);
                };
                reader.onloadend = function (e) {
                    for (var i = _this.uploadingFiles.length - 1; i >= 0; i--) {
                        if (_this.uploadingFiles[i] === info.name) {
                            _this.uploadingFiles.splice(i, 1);
                        }
                    }
                    _this.update();
                };
                reader.readAsText(info);
            });
        }
    };
    AppComponent.prototype.update = function () {
        this.ref.detectChanges();
        var summaries = this.summaryList.toArray();
        for (var _i = 0, summaries_1 = summaries; _i < summaries_1.length; _i++) {
            var summary = summaries_1[_i];
            summary.setTests(this.tests);
        }
    };
    AppComponent.prototype.addTest = function (test) {
        if (test.steps.length === 0) {
            return;
        }
        for (var i = 0; i < this.tests.length; i++) {
            if (this.tests[i].uuid === test.uuid) {
                this.tests[i] = test;
                return;
            }
        }
        this.tests.push(test);
    };
    AppComponent.prototype.getDateDetails = function (test) {
        if (test) {
            var date = new Date();
            date.setTime(test.start);
            var duration = test.stop - test.start;
            return this.formatDate(date) + '    (Duration ' + duration + ' ms)';
        }
        return '-';
    };
    AppComponent.prototype.formatDate = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var sMinutes = minutes < 10 ? '0' + minutes : '' + minutes;
        var strTime = hours + ':' + sMinutes + ' ' + ampm;
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + '  ' + strTime;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2__features_summary_test_summary_table_component__["a" /* TestSummaryTableComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], AppComponent.prototype, "summaryList", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_file_drop__ = __webpack_require__("./node_modules/ngx-file-drop/ngx-file-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_labels_test_label_component__ = __webpack_require__("./src/app/features/labels/test-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_steps_test_steps_component__ = __webpack_require__("./src/app/features/steps/test-steps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_summary_test_summary_table_component__ = __webpack_require__("./src/app/features/summary/test-summary-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_navbar_navbar_component__ = __webpack_require__("./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_footer_footer_component__ = __webpack_require__("./src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__features_links_test_link_component__ = __webpack_require__("./src/app/features/links/test-link.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/*
export function apiConfig() {
    return new Configuration({
        username: 'username',
        password: 'password',
        basePath: 'https://XXXXX/contour/rest/latest',
        withCredentials: true
    });
}
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__features_labels_test_label_component__["a" /* TestLabelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__features_links_test_link_component__["a" /* TestLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_7__features_steps_test_steps_component__["a" /* TestStepsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__features_summary_test_summary_table_component__["a" /* TestSummaryTableComponent */],
                __WEBPACK_IMPORTED_MODULE_9__common_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__common_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                //	ApiModule.forConfig(apiConfig),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_file_drop__["a" /* FileDropModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_markdown__["MarkdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\n.sm-link {\n\tcolor: white !important;\n}\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small bg-primary text-light pt-2 pb-2 mt-3\">\n\t<div class=\"container-fluid text-center text-md-left\">\n\t\t<div class=\"row d-flex\">\n\t\t\t<div class=\"col-12 text-right\">\n\t\t\t\t<a class=\"sm-link ml-0\"><i class=\"fa fa-github white-text mr-lg-4\"> </i></a>\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-twitter white-text mr-lg-4\"> </i></a>\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-google-plus white-text mr-lg-4\"> </i></a>\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-linkedin white-text mr-lg-4\"> </i></a>\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-instagram white-text mr-lg-4\"> </i></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/common/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n\t<a class=\"navbar-brand\" href=\"#\">Allure reporter</a>\n\t<div class=\"ml-auto\">\n\t</div>\n\t<button class=\"border rounded ml-2\" type=\"button\" [class.btn-primary]=\"toggleResults\" [class.btn-danger]=\"!toggleResults\">\n\t\t<i class=\"fa fa-check text-white mt-1\" style=\"font-size: 23px;\" (click)=\"doResultsClick()\"></i>\n\t</button>\n\t<button class=\"border rounded ml-2\" type=\"button\" [class.btn-primary]=\"toggleSummary\" [class.btn-danger]=\"!toggleSummary\">\n\t\t<i class=\"fa fa-table text-white mt-1\" style=\"font-size: 23px;\" (click)=\"doSummaryClick()\"></i>\n\t</button>\n</nav>\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function NavbarComponent() {
        this.toggleResultsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleSummaryChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavbarComponent.prototype.doResultsClick = function () {
        this.toggleResults = !this.toggleResults;
        this.toggleResultsChange.emit(this.toggleResults);
    };
    NavbarComponent.prototype.doSummaryClick = function () {
        this.toggleSummary = !this.toggleSummary;
        this.toggleSummaryChange.emit(this.toggleSummary);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleResults", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleResultsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleSummary", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleSummaryChange", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/common/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/features/labels/test-label.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"badge badge-pill\"\n      [class.badge-info]=\"label.name==='tag'\"\n      [class.badge-primary]=\"label.name==='severity'\"\n      [class.badge-warning]=\"label.name==='suite'\"\n\t\t\t[class.badge-secondary]=\"label.name==='package'\"\n\t\t\t[class.badge-success]=\"label.name==='feature'\">{{label.value}}</span>\n"

/***/ }),

/***/ "./src/app/features/labels/test-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestLabelComponent = (function () {
    function TestLabelComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestLabelComponent.prototype, "label", void 0);
    TestLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-label',
            template: __webpack_require__("./src/app/features/labels/test-label.component.html")
        })
    ], TestLabelComponent);
    return TestLabelComponent;
}());



/***/ }),

/***/ "./src/app/features/links/test-link.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a href=\"{{link.url}}\">\n\t<i *ngIf=\"link.type==='requirement'\" class=\"text-primary fa fa-database\" style=\"font-size:15px;\"></i>\n\t<i *ngIf=\"link.type==='tms'\" class=\"text-primary fa fa-database\" style=\"font-size:15px;\"></i>\n\t<i *ngIf=\"link.type==='issue'\" class=\"text-primary fa fa-bug\" style=\"font-size:16px;\"></i>\n\t{{link.name}}\n</a>\n"

/***/ }),

/***/ "./src/app/features/links/test-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestLinkComponent = (function () {
    function TestLinkComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestLinkComponent.prototype, "link", void 0);
    TestLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-link',
            template: __webpack_require__("./src/app/features/links/test-link.component.html")
        })
    ], TestLinkComponent);
    return TestLinkComponent;
}());



/***/ }),

/***/ "./src/app/features/steps/test-steps.component.css":
/***/ (function(module, exports) {

module.exports = ".cell {\n  padding: 7px;\n  background-color: rgba(249, 249, 249, 0.48);\n  border: 1px solid #D8D8D8;\n}\n\n.header-cell {\n  padding: 7px;\n  background-color: #f1f1f1;\n  border: 1px solid #D8D8D8;\n}\n\n.note {\n  position: relative;\n}\n\n.note:after { /* Magic Happens Here!!! */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  border-left: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n\n  border-top: 20px solid green;\n}\n\n.check-step {\n  background-color: rgba(238, 254, 77, 0.16);\n}\n\n.level-1 {\n  margin-left: 20px;\n}\n\n.level-2 {\n  margin-left: 40px;\n}\n\n.level-3 {\n  margin-left: 60px;\n}\n\n.level-4 {\n  margin-left: 80px;\n}\n\n.level-5 {\n  margin-left: 100px;\n}\n\n.level-6 {\n  margin-left: 120px;\n}\n\n.level-7 {\n  margin-left: 140px;\n}\n\n.level-8 {\n  margin-left: 160px;\n}\n\n.level-9 {\n  margin-left: 180px;\n}\n"

/***/ }),

/***/ "./src/app/features/steps/test-steps.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"steps && steps.length>0\" class=\"container\">\n\t<div *ngIf=\"withHeader\" class=\"row\">\n\t\t<div class=\"col-1 header-cell\">#</div>\n\t\t<div class=\"col-9 header-cell\">Step</div>\n\t\t<div class=\"col-2 header-cell\">Duration</div>\n\t</div>\n\n\t<div *ngFor=\"let step of steps; let i=index;\" class=\"row\">\n\t\t<div class=\"col-1 cell\" [class.note]=\"showResults && isCheck(step)\">\n\t\t\t<ng-container *ngIf=\"showResults\">\n\t\t\t<i *ngIf=\"step.status==='passed'\" class=\"fa fa-check-circle-o\" style=\"font-size:20px;color:green;\"></i>\n\t\t\t<i *ngIf=\"step.status==='failed'\" class=\"fa fa-times-circle-o\" style=\"font-size:20px;color:red;\"></i>\n\t\t\t<i *ngIf=\"step.status==='broken'\" class=\"fa fa-times-circle-o\" style=\"font-size:20px;color:orange;\"></i>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"col-9 cell\">\n\t\t\t<i *ngIf=\"hasChildren(step)\" class=\"level-{{level}} fa fa-angle-down mr-1\" style=\"font-size: 18px;\"></i>\n\t\t\t<i *ngIf=\"!hasChildren(step)\" class=\"level-{{level}}\"></i>\n\t\t\t{{step.name}}\n\t\t</div>\n\t\t<div class=\"col-2 cell\"><ng-container *ngIf=\"showResults\">{{getTimeSpendInStep(step)}}</ng-container></div>\n\n\t\t<test-steps *ngIf=\"step.steps && step.steps.length>0\" [steps]=\"step.steps\" [showResults]=\"showResults\" [withHeader]=\"false\" [level]=\"level+1\" class=\"w-100\"></test-steps>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/steps/test-steps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestStepsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestStepsComponent = (function () {
    function TestStepsComponent() {
        this.steps = [];
        this.withHeader = true;
        this.level = 0;
        this.showResults = true;
    }
    TestStepsComponent.prototype.getTimeSpendInStep = function (step) {
        if (step) {
            var duration = step.stop - step.start;
            return duration + ' ms';
        }
        return '-';
    };
    TestStepsComponent.prototype.hasChildren = function (step) {
        return (step && step.steps && step.steps.length > 0);
    };
    TestStepsComponent.prototype.isCheck = function (step) {
        return (step && step.name.startsWith('Check'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TestStepsComponent.prototype, "steps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "withHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "level", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "showResults", void 0);
    TestStepsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-steps',
            template: __webpack_require__("./src/app/features/steps/test-steps.component.html"),
            styles: [__webpack_require__("./src/app/features/steps/test-steps.component.css")]
        })
    ], TestStepsComponent);
    return TestStepsComponent;
}());



/***/ }),

/***/ "./src/app/features/summary/test-summary-table.component.css":
/***/ (function(module, exports) {

module.exports = ".cell {\n\tpadding: 7px;\n\tbackground-color: rgba(249, 249, 249, 0.48);\n\tborder: 1px solid #D8D8D8;\n}\n\n.header-cell {\n\tpadding: 7px;\n\tbackground-color: #f1f1f1;\n\tborder: 1px solid #D8D8D8;\n}\n"

/***/ }),

/***/ "./src/app/features/summary/test-summary-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categories && categories.length>0\">\n\t<h2 class=\"mb-2 mt-4\">Test Summary by {{categoryName}}</h2>\n\t<div class=\"container mt-3\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8 header-cell\">{{categoryName}}</div>\n\t\t\t<div class=\"col-1 header-cell\">Pass</div>\n\t\t\t<div class=\"col-1 header-cell\">Fail</div>\n\t\t\t<div class=\"col-1 header-cell\">Other</div>\n\t\t\t<div class=\"col-1 header-cell\">Total</div>\n\t\t</div>\n\n\t\t<div *ngFor=\"let category of categories\" class=\"row\">\n\t\t\t<div class=\"col-8 cell\">\n\t\t\t\t{{category.name}}\n\t\t\t</div>\n\t\t\t<div class=\"col-1 cell\">\n\t\t\t\t{{category.getPassed()}}\n\t\t\t</div>\n\t\t\t<div class=\"col-1 cell\">\n\t\t\t\t{{category.getFailed()}}\n\t\t\t</div>\n\t\t\t<div class=\"col-1 cell\">\n\t\t\t\t{{category.getOther()}}\n\t\t\t</div>\n\t\t\t<div class=\"col-1 cell\">{{category.total}}</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/summary/test-summary-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CategoryTotals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSummaryTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryTotals = (function () {
    function CategoryTotals(name, status) {
        this.name = name;
        this.total = 0;
        this.passed = 0;
        this.failed = 0;
        this.other = 0;
        this.add(status);
    }
    CategoryTotals.prototype.add = function (status) {
        this.total++;
        if (status === 'passed') {
            this.passed++;
        }
        else if (status === 'failed') {
            this.failed++;
        }
        else {
            this.other++;
        }
    };
    CategoryTotals.prototype.getPassed = function () {
        return Math.round(this.passed * 100 / this.total) + '%';
    };
    CategoryTotals.prototype.getFailed = function () {
        return Math.round(this.failed * 100 / this.total) + '%';
    };
    CategoryTotals.prototype.getOther = function () {
        return Math.round(this.other * 100 / this.total) + '%';
    };
    return CategoryTotals;
}());

var TestSummaryTableComponent = (function () {
    function TestSummaryTableComponent(ref) {
        this.ref = ref;
        this.category = '';
        this.categoryName = '';
        this.categories = [];
    }
    TestSummaryTableComponent.prototype.setTests = function (tests) {
        this.categories = [];
        for (var i = 0; i < tests.length; i++) {
            this.addTest(tests[i]);
        }
        this.ref.detectChanges();
    };
    TestSummaryTableComponent.prototype.addTest = function (test) {
        var suite = '';
        var found = false;
        for (var i = 0; i < test.labels.length && suite === ''; i++) {
            if (test.labels[i].name === this.category) {
                suite = test.labels[i].value;
            }
        }
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].name === suite) {
                this.categories[i].add(test.status);
                found = true;
            }
        }
        if (!found) {
            this.categories.push(new CategoryTotals(suite, test.status));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestSummaryTableComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TestSummaryTableComponent.prototype, "categoryName", void 0);
    TestSummaryTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-summary-table',
            template: __webpack_require__("./src/app/features/summary/test-summary-table.component.html"),
            styles: [__webpack_require__("./src/app/features/summary/test-summary-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TestSummaryTableComponent);
    return TestSummaryTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map