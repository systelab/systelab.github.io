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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column w-100\">\r\n\r\n\t<app-navbar #navbar\r\n\t\t[(toggleResults)]=\"showResults\"\r\n\t\t[(toggleSummary)]=\"showSummary\"\r\n\t\t(user)=\"doShowUser(true)\"\r\n\t\t(report)=\"doShowReport(true)\"\r\n\t\t[isLogged]=\"isLogged\"\r\n\t\t[allFilesProcessed]=\"allFilesProcessed\">\r\n\t</app-navbar>\r\n\r\n\t<div class=\"container\">\r\n\t\t<p></p>\r\n\t\t<file-drop *ngIf=\"!readingFiles()\" class=\"no-print\" (onFileDrop)=\"fileDrop($event)\">\r\n\t\t\t<div class=\"text-center text-primary\">\r\n\t\t\t\t<i class=\"fa fa-upload\" style=\"font-size:23px;\"></i>\r\n\t\t\t\t<p>Drop your allure files here</p>\r\n\t\t\t</div>\r\n\t\t</file-drop>\r\n\r\n\t\t<help *ngIf=\"testSuites.length===0\"></help>\r\n\t\t<ng-container *ngIf=\"showSummary && showResults\">\r\n\t\t\t<test-summary-table [category]=\"'suite'\" [categoryName]=\"'Test Suite'\"></test-summary-table>\r\n\t\t\t<test-summary-table [category]=\"'severity'\" [categoryName]=\"'Severity'\"></test-summary-table>\r\n\t\t\t<test-summary-table [category]=\"'tag'\" [categoryName]=\"'Tag'\"></test-summary-table>\r\n\t\t</ng-container>\r\n\r\n\t\t<div *ngFor=\"let testSuite of testSuites\">\r\n\t\t\t<div class=\"pt-4 mb-1\">\r\n\t\t\t\t<i *ngIf=\"showResults && testSuiteService.getStatus(testSuite)==='passed'\" class=\"fa fa-check-circle-o\" style=\"font-size:33px;color:green;\"></i>\r\n\t\t\t\t<i *ngIf=\"showResults && testSuiteService.getStatus(testSuite)!=='passed'\" class=\"fa fa-times-circle-o\" style=\"font-size:33px;color:red;\"></i>\r\n\t\t\t\t<h2 class=\"d-inline\">{{testSuite.id}}</h2>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<p markdown>{{testSuite.name}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<p style=\"white-space: pre-line\" *ngIf=\"showResults\" markdown>{{testSuite.actualResults}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"showResults\">\r\n\t\t\t\t<test-label *ngFor=\"let label of testSuite.testCases[0].labels\" [label]=\"label\"></test-label>\r\n\t\t  </div>\r\n\t\t\t<div class=\"pl-3\">\r\n\t\t\t\t<div *ngFor=\"let test of testSuite.testCases; let j=index\">\r\n\t\t\t\t\t<test-steps [steps]=\"test.steps\" [showResults]=\"showResults\" [action]=\"test.description\" [withHeader]=\"j===0\"></test-steps>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<app-footer class=\"no-print\"></app-footer>\r\n</div>\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_report_summary_test_summary_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/report/summary/test-summary-table.component */ "./src/app/features/report/summary/test-summary-table.component.ts");
/* harmony import */ var _features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/reporter/reporter-dialog.component */ "./src/app/features/reporter/reporter-dialog.component.ts");
/* harmony import */ var _features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/login/login-dialog.component */ "./src/app/features/login/login-dialog.component.ts");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! systelab-components/widgets/modal */ "./node_modules/systelab-components/widgets/modal/index.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_test_case_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/test-case.service */ "./src/app/service/test-case.service.ts");
/* harmony import */ var _service_test_suite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/test-suite.service */ "./src/app/service/test-suite.service.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(http, ref, dialogService, testSuiteService, testCaseService, toastr, ngZone) {
        this.http = http;
        this.ref = ref;
        this.dialogService = dialogService;
        this.testSuiteService = testSuiteService;
        this.testCaseService = testCaseService;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.testSuites = [];
        this.uploadingFiles = [];
        this.showUser = false;
        this.showReport = false;
        this.username = '';
        this.password = '';
        this.filesProcessed = 0;
        this.filesProcessedPercentage = 0;
        this.filesDropped = 0;
        this._isLogged = false;
        this._allFilesProcessed = false;
        this.server = 'https://jama.systelab.net/contour/rest/latest';
        this.numberOfSteps = 1;
        this._showSummary = true;
        this._showResults = true;
    }
    Object.defineProperty(AppComponent.prototype, "isLogged", {
        get: function () {
            return this._isLogged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "allFilesProcessed", {
        get: function () {
            return this._allFilesProcessed;
        },
        enumerable: true,
        configurable: true
    });
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
        this._allFilesProcessed = false;
        this.filesProcessed = 0;
        this.filesDropped = files.length;
        this.navbar.go(0);
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var fileEntry = file.fileEntry;
            fileEntry.file(function (info) {
                _this.uploadingFiles.push(info.name);
                var reader = new FileReader();
                reader.onload = function (e) {
                    if (info.name.endsWith('.json')) {
                        var testCase = JSON.parse(e.target.result);
                        _this.addTestCase(testCase);
                    }
                    else {
                        if (info.name.endsWith('.xml')) {
                            var parser = new DOMParser();
                            var xmlDoc = parser.parseFromString(e.target.result, 'text/xml');
                            var newTestSuite = _this.testSuiteService.parseFromDocument(xmlDoc);
                            _this.addTestSuite(newTestSuite);
                        }
                    }
                };
                reader.onloadend = function (e) {
                    for (var i = _this.uploadingFiles.length - 1; i >= 0; i--) {
                        if (_this.uploadingFiles[i] === info.name) {
                            _this.uploadingFiles.splice(i, 1);
                        }
                    }
                    // Step number must be incremental after the sorting
                    _this.testSuites.forEach(function (suite) {
                        suite.testCases.sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });
                        _this.numberOfSteps = 1;
                        suite.testCases.forEach(function (testcase) {
                            _this.setNumberOfStep(testcase.steps);
                        });
                    });
                    _this.update();
                    _this.ngZone.run(function () {
                        _this.filesProcessed++;
                        _this.filesProcessedPercentage = 100 * _this.filesProcessed / _this.filesDropped;
                        _this._allFilesProcessed = _this.filesProcessed === _this.filesDropped;
                        _this.navbar.go(_this.filesProcessedPercentage);
                    });
                };
                reader.readAsText(info);
            });
        }
    };
    AppComponent.prototype.readingFiles = function () {
        return this.filesProcessed !== this.filesDropped && this.filesDropped > 0;
    };
    // All the steps with Expected Result must have a step number
    AppComponent.prototype.setNumberOfStep = function (steps) {
        var _this = this;
        steps.forEach(function (step) {
            step.numberOfStep = _this.numberOfSteps++;
            if (step.steps && step.steps.length > 0) {
                _this.setNumberOfStep(step.steps);
            }
        });
    };
    AppComponent.prototype.update = function () {
        var _this = this;
        this.ref.detectChanges();
        this.summaryList.toArray()
            .forEach(function (summary) { return summary.setTests(_this.testSuites); });
    };
    AppComponent.prototype.addTestCase = function (testCase) {
        var testSuiteId = this.testCaseService.getTmsLink(testCase);
        var testSuiteName = this.testCaseService.getTmsDescription(testCase);
        var testSuiteActualResults = this.testCaseService.getActualResults(testCase);
        if (testCase.steps && testCase.steps.length > 0) {
            var testSuite = this.testSuites.find(function (ts) { return ts.id === testSuiteId; });
            if (testSuite) {
                this.testSuiteService.addTestCaseToTestSuite(testCase, testSuite);
            }
            else {
                var newTestSuite = {
                    id: testSuiteId,
                    name: testSuiteName,
                    actualResults: testSuiteActualResults,
                    testCases: []
                };
                this.testSuiteService.addTestCaseToTestSuite(testCase, newTestSuite);
                this.addTestSuite(newTestSuite);
            }
        }
    };
    AppComponent.prototype.addTestSuite = function (newTestSuite) {
        var _this = this;
        if (newTestSuite.id) {
            var testSuite_1 = this.testSuites.find(function (ts) { return ts.id === newTestSuite.id; });
            if (testSuite_1) {
                newTestSuite.testCases.forEach(function (tc) { return _this.testSuiteService.addTestCaseToTestSuite(tc, testSuite_1); });
            }
            else {
                this.testSuites.push(newTestSuite);
                this.testSuites.sort(function (a, b) { return (a.id > b.id ? -1 : 1); });
            }
        }
    };
    AppComponent.prototype.getDateDetails = function (testCase) {
        var date = new Date();
        date.setTime(testCase.start);
        var duration = testCase.stop - testCase.start;
        return this.formatDate(date) + '    (Duration ' + duration + ' ms)';
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
    AppComponent.prototype.doShowUser = function (show) {
        var _this = this;
        this.showUser = show;
        var parameters = _features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginDialog"].getParameters();
        parameters.username = this.username;
        parameters.password = this.password;
        parameters.server = this.server;
        this.dialogService.showDialog(_features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginDialog"], parameters)
            .subscribe(function (result) {
            if (result) {
                _this._isLogged = result.isLogged;
                _this.username = result.username;
                _this.password = result.password;
                _this.server = result.server;
            }
        });
    };
    AppComponent.prototype.doShowReport = function (show) {
        this.showReport = show;
        var parameters = _features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ReporterDialog"].getParameters();
        parameters.username = this.username;
        parameters.password = this.password;
        parameters.server = this.server;
        parameters.testSuites = this.testSuites;
        if (this.testSuites.length === 0) {
            this.toastr.error('No test case provided.');
            return;
        }
        if (!parameters.username) {
            this.toastr.error('No username provided.');
            return;
        }
        if (!parameters.password) {
            this.toastr.error('No password provided.');
            return;
        }
        if (!parameters.server) {
            this.toastr.error('No server provided.');
            return;
        }
        this.dialogService.showDialog(_features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ReporterDialog"], parameters)
            .subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_features_report_summary_test_summary_table_component__WEBPACK_IMPORTED_MODULE_2__["TestSummaryTableComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AppComponent.prototype, "summaryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navbar'),
        __metadata("design:type", _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_5__["DialogService"], _service_test_suite_service__WEBPACK_IMPORTED_MODULE_8__["TestSuiteService"], _service_test_case_service__WEBPACK_IMPORTED_MODULE_7__["TestCaseService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _features_report_labels_test_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/report/labels/test-label.component */ "./src/app/features/report/labels/test-label.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_report_steps_test_steps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/report/steps/test-steps.component */ "./src/app/features/report/steps/test-steps.component.ts");
/* harmony import */ var _features_report_summary_test_summary_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/report/summary/test-summary-table.component */ "./src/app/features/report/summary/test-summary-table.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _features_report_links_test_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/report/links/test-link.component */ "./src/app/features/report/links/test-link.component.ts");
/* harmony import */ var _jama_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jama/index */ "./src/app/jama/index.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_test_cycle_combobox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/test-cycle-combobox.component */ "./src/app/components/test-cycle-combobox.component.ts");
/* harmony import */ var _components_test_plan_combobox_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/test-plan-combobox.component */ "./src/app/components/test-plan-combobox.component.ts");
/* harmony import */ var _components_project_combobox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project-combobox.component */ "./src/app/components/project-combobox.component.ts");
/* harmony import */ var _features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./features/reporter/reporter-dialog.component */ "./src/app/features/reporter/reporter-dialog.component.ts");
/* harmony import */ var _features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features/login/login-dialog.component */ "./src/app/features/login/login-dialog.component.ts");
/* harmony import */ var _components_test_group_combobox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/test-group-combobox.component */ "./src/app/components/test-group-combobox.component.ts");
/* harmony import */ var systelab_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! systelab-components */ "./node_modules/systelab-components/widgets/systelab-components.module.js");
/* harmony import */ var systelab_components__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(systelab_components__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var systelab_preferences__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! systelab-preferences */ "./node_modules/systelab-preferences/lib/systelab-preferences.module.js");
/* harmony import */ var systelab_preferences__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(systelab_preferences__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var systelab_translate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! systelab-translate */ "./node_modules/systelab-translate/lib/systelab-translate.module.js");
/* harmony import */ var systelab_translate__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(systelab_translate__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var systelab_components_widgets_grid_contextmenu_grid_header_context_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component */ "./node_modules/systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component.js");
/* harmony import */ var systelab_components_widgets_grid_contextmenu_grid_header_context_menu_component__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_grid_contextmenu_grid_header_context_menu_component__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! systelab-components/widgets/modal */ "./node_modules/systelab-components/widgets/modal/index.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _features_help_help_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./features/help/help.component */ "./src/app/features/help/help.component.ts");
/* harmony import */ var systelab_components_widgets_grid_contextmenu_grid_context_menu_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component */ "./node_modules/systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component.js");
/* harmony import */ var systelab_components_widgets_grid_contextmenu_grid_context_menu_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_grid_contextmenu_grid_context_menu_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__);
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
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _jama_index__WEBPACK_IMPORTED_MODULE_12__["ApiModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"],
                systelab_preferences__WEBPACK_IMPORTED_MODULE_24__["SystelabPreferencesModule"].forRoot(),
                systelab_components__WEBPACK_IMPORTED_MODULE_23__["SystelabComponentsModule"].forRoot(),
                systelab_translate__WEBPACK_IMPORTED_MODULE_25__["SystelabTranslateModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__["AgGridModule"].withComponents([
                    systelab_components_widgets_grid_contextmenu_grid_context_menu_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__["GridContextMenuCellRendererComponent"],
                    systelab_components_widgets_grid_contextmenu_grid_header_context_menu_component__WEBPACK_IMPORTED_MODULE_26__["GridHeaderContextMenuComponent"]
                ]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _features_report_labels_test_label_component__WEBPACK_IMPORTED_MODULE_5__["TestLabelComponent"],
                _features_report_links_test_link_component__WEBPACK_IMPORTED_MODULE_11__["TestLinkComponent"],
                _features_report_steps_test_steps_component__WEBPACK_IMPORTED_MODULE_7__["TestStepsComponent"],
                _features_report_summary_test_summary_table_component__WEBPACK_IMPORTED_MODULE_8__["TestSummaryTableComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoginDialog"],
                _features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ReporterDialog"],
                _features_help_help_component__WEBPACK_IMPORTED_MODULE_28__["HelpComponent"],
                _components_project_combobox_component__WEBPACK_IMPORTED_MODULE_19__["ProjectComboBox"],
                _components_test_plan_combobox_component__WEBPACK_IMPORTED_MODULE_18__["TestPlanComboBox"],
                _components_test_cycle_combobox_component__WEBPACK_IMPORTED_MODULE_17__["TestCycleComboBox"],
                _components_test_group_combobox_component__WEBPACK_IMPORTED_MODULE_22__["TestGroupComboBox"]
            ],
            providers: [
                systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_27__["MessagePopupService"],
                systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_27__["DialogService"]
            ],
            entryComponents: [
                _features_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoginDialog"],
                _features_reporter_reporter_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ReporterDialog"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sm-link {\r\n\tcolor: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zbS1saW5rIHtcclxuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small bg-primary text-light pt-2 pb-2 mt-3\">\r\n\t<div class=\"container-fluid text-center text-md-left\">\r\n\t\t<div class=\"row d-flex\">\r\n\t\t\t<div class=\"col-4\">Version 3.0.0</div>\r\n\t\t\t<div class=\"col-8 text-right\">\r\n\t\t\t\t<a class=\"sm-link ml-0\"><i class=\"fa fa-github white-text mr-4\"> </i></a>\r\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-twitter white-text mr-4\"> </i></a>\r\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-google-plus white-text mr-4\"> </i></a>\r\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-linkedin white-text mr-4\"> </i></a>\r\n\t\t\t\t<a class=\"sm-link\"><i class=\"fa fa-instagram white-text mr-4\"> </i></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\t<a class=\"navbar-brand\" href=\"#\">Allure reporter</a>\r\n\t<div class=\"ml-auto\">\r\n\t</div>\r\n\t<button class=\"border rounded ml-2\" type=\"button\" [class.btn-primary]=\"toggleResults\" [class.btn-danger]=\"!toggleResults\" (click)=\"doResultsClick()\">\r\n\t\t<i class=\"fa fa-check text-white mt-1\" style=\"font-size: 23px;\"></i>\r\n\t</button>\r\n\t<button class=\"border rounded ml-2\" type=\"button\" [class.btn-primary]=\"toggleSummary\" [class.btn-danger]=\"!toggleSummary\" (click)=\"doSummaryClick()\">\r\n\t\t<i class=\"fa fa-table text-white mt-1\" style=\"font-size: 23px;\"></i>\r\n\t</button>\r\n\t<button class=\"btn-primary border rounded ml-2\" type=\"button\" (click)=\"doUserClick()\">\r\n\t\t<i class=\"fa fa-user text-white mt-1\" style=\"font-size: 23px;\"></i>\r\n\t</button>\r\n\t<button\r\n\t\tclass=\"btn-primary border rounded ml-2\"\r\n\t\t[disabled]=\"!isLogged || !allFilesProcessed\"\r\n\t\t[class.btn-disabled]=\"!isLogged || !allFilesProcessed\"\r\n\t\ttype=\"button\"\r\n\t\t(click)=\"doReportClick()\"\r\n\t>\r\n\t\t<i class=\"fa fa-upload text-white mt-1\" style=\"font-size: 23px;\"></i>\r\n\t</button>\r\n</nav>\r\n<div #progress></div>\r\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-disabled {\n  opacity: 0.6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL25hdmJhci9DOlxcUHJvamVjdHNcXG9wZW5Tb3VyY2VcXGFsbHVyZS1yZXBvcnRlci9zcmNcXGFwcFxcY29tbW9uXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.toggleResultsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSummaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.report = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.progress) {
            var options = {
                target: this.progress.nativeElement
            };
            this.nanobar = new Nanobar(options);
        }
    };
    NavbarComponent.prototype.doResultsClick = function () {
        this.toggleResults = !this.toggleResults;
        this.toggleResultsChange.emit(this.toggleResults);
    };
    NavbarComponent.prototype.doSummaryClick = function () {
        this.toggleSummary = !this.toggleSummary;
        this.toggleSummaryChange.emit(this.toggleSummary);
    };
    NavbarComponent.prototype.doUserClick = function () {
        this.user.emit();
    };
    NavbarComponent.prototype.doReportClick = function () {
        this.report.emit();
    };
    NavbarComponent.prototype.go = function (n) {
        if (this.nanobar) {
            if (n > 100) {
                n = 100;
            }
            this.nanobar.go(n); // size bar 30%
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "isLogged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "allFilesProcessed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleResultsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleSummary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "toggleSummaryChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "report", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('progress'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavbarComponent.prototype, "progress", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/common/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/project-combobox.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/project-combobox.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComboBox", function() { return ProjectComboBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jama_api_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jama/api/projects.service */ "./src/app/jama/api/projects.service.ts");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systelab-components/widgets/combobox/abstract-api-combobox.component */ "./node_modules/systelab-components/widgets/combobox/abstract-api-combobox.component.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_project_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/project-data.model */ "./src/app/model/project-data.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComboBox = /** @class */ (function (_super) {
    __extends(ProjectComboBox, _super);
    function ProjectComboBox(myRenderer, chref, api) {
        var _this = _super.call(this, myRenderer, chref) || this;
        _this.myRenderer = myRenderer;
        _this.chref = chref;
        _this.api = api;
        _this.totalItems = 0;
        return _this;
    }
    ProjectComboBox.prototype.getInstance = function () {
        return new _model_project_data_model__WEBPACK_IMPORTED_MODULE_4__["ProjectData"]();
    };
    ProjectComboBox.prototype.getDescriptionField = function () {
        return 'name';
    };
    ProjectComboBox.prototype.getCodeField = function () {
        return 'projectKey';
    };
    ProjectComboBox.prototype.getIdField = function () {
        return 'id';
    };
    ProjectComboBox.prototype.getData = function (page, itemsPerPage) {
        var _this = this;
        return this.api.getProjects(this.getStartAt(page, itemsPerPage), itemsPerPage)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            _this.totalItems = value.meta.pageInfo.totalResults;
            return value.data.map(function (p) {
                var projectData = new _model_project_data_model__WEBPACK_IMPORTED_MODULE_4__["ProjectData"]();
                projectData.id = p.id;
                projectData.projectKey = p.projectKey;
                projectData.name = p.fields.name;
                return projectData;
            });
        }));
    };
    ProjectComboBox.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    ProjectComboBox.prototype.getStartAt = function (page, itemsPerPage) {
        return (page - 1) * itemsPerPage;
    };
    ProjectComboBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-combobox',
            template: __webpack_require__(/*! ../../../node_modules/systelab-components/html/abstract-combobox.component.html */ "./node_modules/systelab-components/html/abstract-combobox.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _jama_api_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], ProjectComboBox);
    return ProjectComboBox;
}(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__["AbstractApiComboBox"]));



/***/ }),

/***/ "./src/app/components/test-cycle-combobox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/test-cycle-combobox.component.ts ***!
  \*************************************************************/
/*! exports provided: TestCycleComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCycleComboBox", function() { return TestCycleComboBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systelab-components/widgets/combobox/abstract-api-combobox.component */ "./node_modules/systelab-components/widgets/combobox/abstract-api-combobox.component.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jama/api/testplans.service */ "./src/app/jama/api/testplans.service.ts");
/* harmony import */ var _model_testcycle_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/testcycle-data.model */ "./src/app/model/testcycle-data.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestCycleComboBox = /** @class */ (function (_super) {
    __extends(TestCycleComboBox, _super);
    function TestCycleComboBox(myRenderer, chref, api) {
        var _this = _super.call(this, myRenderer, chref) || this;
        _this.myRenderer = myRenderer;
        _this.chref = chref;
        _this.api = api;
        _this.totalItems = 0;
        return _this;
    }
    Object.defineProperty(TestCycleComboBox.prototype, "testPlan", {
        get: function () {
            return this._testPlan;
        },
        set: function (value) {
            this._testPlan = value;
            this.refresh(null);
        },
        enumerable: true,
        configurable: true
    });
    TestCycleComboBox.prototype.getInstance = function () {
        return new _model_testcycle_data_model__WEBPACK_IMPORTED_MODULE_5__["TestCycleData"]();
    };
    TestCycleComboBox.prototype.getDescriptionField = function () {
        return 'name';
    };
    TestCycleComboBox.prototype.getCodeField = function () {
        return '';
    };
    TestCycleComboBox.prototype.getIdField = function () {
        return 'id';
    };
    TestCycleComboBox.prototype.getData = function (page, itemsPerPage) {
        var _this = this;
        if (this.testPlan) {
            return this.api.getTestCycles(this.testPlan, this.getStartAt(page, itemsPerPage), itemsPerPage)
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                _this.totalItems = value.meta.pageInfo.totalResults;
                return value.data.map(function (p) {
                    var testCycleData = new _model_testcycle_data_model__WEBPACK_IMPORTED_MODULE_5__["TestCycleData"]();
                    testCycleData.id = p.id;
                    testCycleData.name = p.fields.name;
                    return testCycleData;
                });
            }));
        }
        else {
            this.totalItems = 0;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    };
    TestCycleComboBox.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    TestCycleComboBox.prototype.getStartAt = function (page, itemsPerPage) {
        return (page - 1) * itemsPerPage;
    };
    TestCycleComboBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-cycle-combobox',
            template: __webpack_require__(/*! ../../../node_modules/systelab-components/html/abstract-combobox.component.html */ "./node_modules/systelab-components/html/abstract-combobox.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__["TestplansService"]])
    ], TestCycleComboBox);
    return TestCycleComboBox;
}(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__["AbstractApiComboBox"]));



/***/ }),

/***/ "./src/app/components/test-group-combobox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/test-group-combobox.component.ts ***!
  \*************************************************************/
/*! exports provided: TestGroupComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGroupComboBox", function() { return TestGroupComboBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systelab-components/widgets/combobox/abstract-api-combobox.component */ "./node_modules/systelab-components/widgets/combobox/abstract-api-combobox.component.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jama/api/testplans.service */ "./src/app/jama/api/testplans.service.ts");
/* harmony import */ var _model_testgroup_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/testgroup-data.model */ "./src/app/model/testgroup-data.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestGroupComboBox = /** @class */ (function (_super) {
    __extends(TestGroupComboBox, _super);
    function TestGroupComboBox(myRenderer, chref, api) {
        var _this = _super.call(this, myRenderer, chref) || this;
        _this.myRenderer = myRenderer;
        _this.chref = chref;
        _this.api = api;
        _this.totalItems = 0;
        return _this;
    }
    Object.defineProperty(TestGroupComboBox.prototype, "testPlan", {
        get: function () {
            return this._testPlan;
        },
        set: function (value) {
            this._testPlan = value;
            this.refresh(null);
        },
        enumerable: true,
        configurable: true
    });
    TestGroupComboBox.prototype.getInstance = function () {
        return new _model_testgroup_data_model__WEBPACK_IMPORTED_MODULE_5__["TestGroupData"]();
    };
    TestGroupComboBox.prototype.getDescriptionField = function () {
        return 'name';
    };
    TestGroupComboBox.prototype.getCodeField = function () {
        return '';
    };
    TestGroupComboBox.prototype.getIdField = function () {
        return 'id';
    };
    TestGroupComboBox.prototype.getData = function (page, itemsPerPage) {
        var _this = this;
        if (this.testPlan) {
            return this.api.getTestGroups(this.testPlan, this.getStartAt(page, itemsPerPage), itemsPerPage)
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                _this.totalItems = value.meta.pageInfo.totalResults;
                return value.data.map(function (p) {
                    var testGroupData = new _model_testgroup_data_model__WEBPACK_IMPORTED_MODULE_5__["TestGroupData"]();
                    testGroupData.id = p.id;
                    testGroupData.name = p.name;
                    return testGroupData;
                });
            }));
        }
        else {
            this.totalItems = 0;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    };
    TestGroupComboBox.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    TestGroupComboBox.prototype.getStartAt = function (page, itemsPerPage) {
        return (page - 1) * itemsPerPage;
    };
    TestGroupComboBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-group-combobox',
            template: __webpack_require__(/*! ../../../node_modules/systelab-components/html/abstract-combobox.component.html */ "./node_modules/systelab-components/html/abstract-combobox.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__["TestplansService"]])
    ], TestGroupComboBox);
    return TestGroupComboBox;
}(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__["AbstractApiComboBox"]));



/***/ }),

/***/ "./src/app/components/test-plan-combobox.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/test-plan-combobox.component.ts ***!
  \************************************************************/
/*! exports provided: TestPlanComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlanComboBox", function() { return TestPlanComboBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systelab-components/widgets/combobox/abstract-api-combobox.component */ "./node_modules/systelab-components/widgets/combobox/abstract-api-combobox.component.js");
/* harmony import */ var systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jama/api/testplans.service */ "./src/app/jama/api/testplans.service.ts");
/* harmony import */ var _model_testplan_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/testplan-data.model */ "./src/app/model/testplan-data.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestPlanComboBox = /** @class */ (function (_super) {
    __extends(TestPlanComboBox, _super);
    function TestPlanComboBox(myRenderer, chref, api) {
        var _this = _super.call(this, myRenderer, chref) || this;
        _this.myRenderer = myRenderer;
        _this.chref = chref;
        _this.api = api;
        _this.totalItems = 0;
        return _this;
    }
    Object.defineProperty(TestPlanComboBox.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            this._project = value;
            this.refresh(null);
        },
        enumerable: true,
        configurable: true
    });
    TestPlanComboBox.prototype.getInstance = function () {
        return new _model_testplan_data_model__WEBPACK_IMPORTED_MODULE_5__["TestPlanData"]();
    };
    TestPlanComboBox.prototype.getDescriptionField = function () {
        return 'name';
    };
    TestPlanComboBox.prototype.getCodeField = function () {
        return '';
    };
    TestPlanComboBox.prototype.getIdField = function () {
        return 'id';
    };
    TestPlanComboBox.prototype.getData = function (page, itemsPerPage) {
        var _this = this;
        if (this.project) {
            return this.api.getTestPlans(this.project, this.getStartAt(page, itemsPerPage), itemsPerPage)
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                _this.totalItems = value.meta.pageInfo.totalResults;
                return value.data.map(function (p) {
                    var testPlanData = new _model_testplan_data_model__WEBPACK_IMPORTED_MODULE_5__["TestPlanData"]();
                    testPlanData.id = p.id;
                    testPlanData.name = p.fields.name;
                    return testPlanData;
                });
            }));
        }
        else {
            this.totalItems = 0;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    };
    TestPlanComboBox.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    TestPlanComboBox.prototype.getStartAt = function (page, itemsPerPage) {
        return (page - 1) * itemsPerPage;
    };
    TestPlanComboBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-plan-combobox',
            template: __webpack_require__(/*! ../../../node_modules/systelab-components/html/abstract-combobox.component.html */ "./node_modules/systelab-components/html/abstract-combobox.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _jama_api_testplans_service__WEBPACK_IMPORTED_MODULE_4__["TestplansService"]])
    ], TestPlanComboBox);
    return TestPlanComboBox;
}(systelab_components_widgets_combobox_abstract_api_combobox_component__WEBPACK_IMPORTED_MODULE_2__["AbstractApiComboBox"]));



/***/ }),

/***/ "./src/app/features/help/help.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/help/help.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<markdown ngPreserveWhitespaces>\r\n# Allure Reporter\r\n---\r\nAllure reporter will help you in the Test Case Automation strategy by generating Test Design and Test Run from the source code following a Test Case format, as well as JAMA\r\nContour integration to report the executions.\r\n\r\nPlease refer to the specific documentation for Java, .NET or Angular.\r\n</markdown>\r\n<br>\r\n<div markdown [src]=\"'assets/mapping_model.md'\"></div>\r\n<br>\r\n<div markdown [src]=\"'assets/java.md'\"></div>\r\n<br>\r\n<div markdown [src]=\"'assets/dotnet.md'\"></div>\r\n<br>\r\n<div markdown [src]=\"'assets/angular.md'\"></div>\r\n"

/***/ }),

/***/ "./src/app/features/help/help.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/help/help.component.ts ***!
  \*************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/features/help/help.component.html")
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/features/login/login-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/features/login/login-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<systelab-dialog-header (close)=\"close()\">Login</systelab-dialog-header>\r\n<div class=\"slab-flex-1 slab-overflow-container container-fluid\">\r\n\r\n\t<form class=\"pt-2\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<label for=\"username\" class=\"col-form-label text-truncate\">Username</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"parameters.username\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-1\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<label for=\"password\" class=\"col-form-label text-truncate\">Password</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"parameters.password\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-1\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<label for=\"server\" class=\"col-form-label text-truncate\">Server</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"server\" name=\"server\" [(ngModel)]=\"parameters.server\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</form>\r\n\t<div>\r\n\t\t<systelab-loading *ngIf=\"isLoading\" [useClassic]=\"false\"></systelab-loading>\r\n\t</div>\r\n</div>\r\n<systelab-dialog-bottom>\r\n\t<button type=\"button\" class=\"btn ml-auto\" (click)=\"doGo()\">Save changes</button>\r\n</systelab-dialog-bottom>\r\n"

/***/ }),

/***/ "./src/app/features/login/login-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/login/login-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginDialogParameters, LoginDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogParameters", function() { return LoginDialogParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialog", function() { return LoginDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systelab-components/widgets/modal */ "./node_modules/systelab-components/widgets/modal/index.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jama_api_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jama/api/projects.service */ "./src/app/jama/api/projects.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginDialogParameters = /** @class */ (function (_super) {
    __extends(LoginDialogParameters, _super);
    function LoginDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 450;
        _this.height = 250;
        _this.username = '';
        _this.password = '';
        _this.server = '';
        return _this;
    }
    return LoginDialogParameters;
}(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__["SystelabModalContext"]));

var LoginDialog = /** @class */ (function () {
    function LoginDialog(dialog, api, toastr) {
        this.dialog = dialog;
        this.api = api;
        this.toastr = toastr;
        this.isLoading = false;
        this.parameters = dialog.context;
        this.isLogged = !!(this.parameters.username && this.parameters.password);
    }
    LoginDialog.getParameters = function () {
        return new LoginDialogParameters();
    };
    LoginDialog.prototype.close = function () {
        if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
        this.dialog.close({
            isLogged: this.isLogged,
            username: this.isLogged ? this.parameters.username : '',
            password: this.isLogged ? this.parameters.password : '',
            server: this.parameters.server
        });
    };
    LoginDialog.prototype.doGo = function () {
        var _this = this;
        this.isLoading = true;
        if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
        this.checkConnection().subscribe(function () {
            _this.dialog.close({
                isLogged: true,
                username: _this.parameters.username,
                password: _this.parameters.password,
                server: _this.parameters.server
            });
        }, function () { return _this.isLogged = false; }).add(function () { return _this.isLoading = false; });
    };
    LoginDialog.prototype.checkConnection = function () {
        this.api.configuration.username = this.parameters.username;
        this.api.configuration.password = this.parameters.password;
        this.api.configuration.basePath = this.parameters.server;
        return this.api.getProjects(0, 20)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    LoginDialog.prototype.handleError = function (error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            this.toastr.error('Network error occurred:');
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            this.toastr.error("Jama returned code " + error.status + (error.status === 401 ? ' - wrong username or password' : ''));
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    LoginDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/features/login/login-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__["DialogRef"], _jama_api_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginDialog);
    return LoginDialog;
}());



/***/ }),

/***/ "./src/app/features/report/labels/test-label.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/report/labels/test-label.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"label.name!=='tms' && label.name!=='feature' && label.name!=='suite' && label.name!=='package' && label.name!=='actualResults'\">\r\n\t<p markdown>{{label.name}}: {{label.value}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/report/labels/test-label.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/report/labels/test-label.component.ts ***!
  \****************************************************************/
/*! exports provided: TestLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestLabelComponent", function() { return TestLabelComponent; });
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

var TestLabelComponent = /** @class */ (function () {
    function TestLabelComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestLabelComponent.prototype, "label", void 0);
    TestLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-label',
            template: __webpack_require__(/*! ./test-label.component.html */ "./src/app/features/report/labels/test-label.component.html")
        })
    ], TestLabelComponent);
    return TestLabelComponent;
}());



/***/ }),

/***/ "./src/app/features/report/links/test-link.component.html":
/*!****************************************************************!*\
  !*** ./src/app/features/report/links/test-link.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<a href=\"{{link.url}}\">\r\n\t<i *ngIf=\"link.type==='requirement'\" class=\"text-primary fa fa-database\" style=\"font-size:15px;\"></i>\r\n\t<i *ngIf=\"link.type==='tms'\" class=\"text-primary fa fa-database\" style=\"font-size:15px;\"></i>\r\n\t<i *ngIf=\"link.type==='issue'\" class=\"text-primary fa fa-bug\" style=\"font-size:16px;\"></i>\r\n\t{{link.name}}\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/features/report/links/test-link.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/report/links/test-link.component.ts ***!
  \**************************************************************/
/*! exports provided: TestLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestLinkComponent", function() { return TestLinkComponent; });
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

var TestLinkComponent = /** @class */ (function () {
    function TestLinkComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestLinkComponent.prototype, "link", void 0);
    TestLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-link',
            template: __webpack_require__(/*! ./test-link.component.html */ "./src/app/features/report/links/test-link.component.html")
        })
    ], TestLinkComponent);
    return TestLinkComponent;
}());



/***/ }),

/***/ "./src/app/features/report/steps/test-steps.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/report/steps/test-steps.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"steps && steps.length>0\" class=\"container\">\r\n\t<div *ngIf=\"withHeader\" class=\"row\">\r\n\t\t<div class=\"col-1 header-cell\">#</div>\r\n\t\t<div class=\"col-6 header-cell\">Action</div>\r\n\t\t<div class=\"col-3 header-cell\">Expected Result</div>\r\n\t\t<div class=\"col-1 header-cell\">P/F</div>\r\n\t\t<div class=\"col-1 header-cell\">Time</div>\r\n\t</div>\r\n\r\n\t<div *ngFor=\"let step of steps; let i=index;\" class=\"row\">\r\n\t\t<div class=\"col-1 cell\">{{step.numberOfStep}}</div>\r\n\t\t<div class=\"col-6 cell\" *ngIf=\"i===0\" [innerHTML]=\"getActionInHTML(action, step.action)\"></div>\r\n\t\t<div class=\"col-6 cell\" *ngIf=\"i>0\" [innerHTML]=\"step.action\"></div>\r\n\t\t<div class=\"col-3 cell\" style=\"word-break:break-all; word-wrap:break-word\">\r\n\t\t\t{{step.expectedResult}}\r\n\t\t</div>\r\n\t\t<div class=\"col-1 cell\" [class.note]=\"showResults && hasExpectedResult(step)\">\r\n\t\t\t<ng-container *ngIf=\"showResults && hasExpectedResult(step)\">\r\n\t\t\t\t<i *ngIf=\"step.status==='passed'\" class=\"fa fa-check-circle-o\" style=\"font-size:20px;color:green;\"></i>\r\n\t\t\t\t<i *ngIf=\"step.status==='failed'\" class=\"fa fa-times-circle-o\" style=\"font-size:20px;color:red;\"></i>\r\n\t\t\t\t<i *ngIf=\"step.status==='broken'\" class=\"fa fa-times-circle-o\" style=\"font-size:20px;color:orange;\"></i>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div class=\"col-1 cell\">\r\n\t\t\t<ng-container *ngIf=\"showResults\">{{getTimeSpendInStep(step)}}</ng-container>\r\n\t\t</div>\r\n\r\n\t\t<test-steps *ngIf=\"step.steps && step.steps.length>0\" [steps]=\"step.steps\" [showResults]=\"showResults\" [withHeader]=\"false\" [level]=\"level+1\" class=\"w-100\"></test-steps>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/features/report/steps/test-steps.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/report/steps/test-steps.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  padding: 7px;\n  background-color: rgba(249, 249, 249, 0.48);\n  border: 1px solid #D8D8D8; }\n\n.header-cell {\n  padding: 7px;\n  background-color: #f1f1f1;\n  border: 1px solid #D8D8D8; }\n\n.note {\n  position: relative; }\n\n.note:after {\n  /* Magic Happens Here!!! */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: block;\n  border-left: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n  border-top: 20px solid green; }\n\n.check-step {\n  background-color: rgba(238, 254, 77, 0.16); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0L3N0ZXBzL0M6XFxQcm9qZWN0c1xcb3BlblNvdXJjZVxcYWxsdXJlLXJlcG9ydGVyL3NyY1xcYXBwXFxmZWF0dXJlc1xccmVwb3J0XFxzdGVwc1xcdGVzdC1zdGVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQVk7RUFDWiw0Q0FBMkM7RUFDM0MsMEJBQXlCLEVBQ3pCOztBQUVEO0VBQ0MsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QiwwQkFBeUIsRUFDekI7O0FBRUQ7RUFDQyxtQkFBa0IsRUFDbEI7O0FBRUQ7RUFBYywyQkFBMkI7RUFDeEMsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFNBQVE7RUFDUixVQUFTO0VBQ1QsZUFBYztFQUNkLG9DQUFtQztFQUNuQyxzQ0FBcUM7RUFFckMsNkJBQTRCLEVBQzVCOztBQUVEO0VBQ0MsMkNBQTBDLEVBQzFDIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0L3N0ZXBzL3Rlc3Qtc3RlcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbCB7XHJcblx0cGFkZGluZzogN3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC40OCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcclxufVxyXG5cclxuLmhlYWRlci1jZWxsIHtcclxuXHRwYWRkaW5nOiA3cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG59XHJcblxyXG4ubm90ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubm90ZTphZnRlciB7IC8qIE1hZ2ljIEhhcHBlbnMgSGVyZSEhISAqL1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Ym9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcblx0Ym9yZGVyLXRvcDogMjBweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmNoZWNrLXN0ZXAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyNTQsIDc3LCAwLjE2KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/features/report/steps/test-steps.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/report/steps/test-steps.component.ts ***!
  \***************************************************************/
/*! exports provided: TestStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestStepsComponent", function() { return TestStepsComponent; });
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

var TestStepsComponent = /** @class */ (function () {
    function TestStepsComponent() {
        this.steps = [];
        this.withHeader = true;
        this.level = 0;
        this.showResults = true;
    }
    TestStepsComponent.prototype.getTimeSpendInStep = function (step) {
        return step ? (step.stop - step.start) + ' ms' : '-';
    };
    TestStepsComponent.prototype.hasChildren = function (step) {
        return (step && step.steps && step.steps.length > 0);
    };
    TestStepsComponent.prototype.hasExpectedResult = function (step) {
        if (step.expectedResult) {
            return true;
        }
        return false;
    };
    TestStepsComponent.prototype.getActionInHTML = function (action, step) {
        var actionInHTML = '';
        if (action) {
            actionInHTML = action;
        }
        if (step) {
            actionInHTML += step;
        }
        return actionInHTML;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TestStepsComponent.prototype, "steps", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "withHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestStepsComponent.prototype, "showResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TestStepsComponent.prototype, "action", void 0);
    TestStepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-steps',
            template: __webpack_require__(/*! ./test-steps.component.html */ "./src/app/features/report/steps/test-steps.component.html"),
            styles: [__webpack_require__(/*! ./test-steps.component.scss */ "./src/app/features/report/steps/test-steps.component.scss")]
        })
    ], TestStepsComponent);
    return TestStepsComponent;
}());



/***/ }),

/***/ "./src/app/features/report/summary/test-summary-table.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/features/report/summary/test-summary-table.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\r\n\tpadding: 7px;\r\n\tbackground-color: rgba(249, 249, 249, 0.48);\r\n\tborder: 1px solid #D8D8D8;\r\n}\r\n\r\n.header-cell {\r\n\tpadding: 7px;\r\n\tbackground-color: #f1f1f1;\r\n\tborder: 1px solid #D8D8D8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0L3N1bW1hcnkvdGVzdC1zdW1tYXJ5LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsNENBQTRDO0NBQzVDLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0L3N1bW1hcnkvdGVzdC1zdW1tYXJ5LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbCB7XHJcblx0cGFkZGluZzogN3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC40OCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcclxufVxyXG5cclxuLmhlYWRlci1jZWxsIHtcclxuXHRwYWRkaW5nOiA3cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/report/summary/test-summary-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/report/summary/test-summary-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"elements && elements.length>0\">\r\n\t<h2 class=\"mb-2 mt-4\">Test Summary by {{categoryName}}</h2>\r\n\t<div class=\"container mt-3\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-8 header-cell\">{{categoryName}}</div>\r\n\t\t\t<div class=\"col-1 header-cell\">Pass</div>\r\n\t\t\t<div class=\"col-1 header-cell\">Fail</div>\r\n\t\t\t<div class=\"col-1 header-cell\">Other</div>\r\n\t\t\t<div class=\"col-1 header-cell\">Total</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngFor=\"let element of elements\" class=\"row\">\r\n\t\t\t<div class=\"col-8 cell\">\r\n\t\t\t\t{{element.name}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 cell\">\r\n\t\t\t\t{{element.getPassedPercentage()}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 cell\">\r\n\t\t\t\t{{element.getFailedPercentage()}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 cell\">\r\n\t\t\t\t{{element.getOtherPercentage()}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 cell\">{{element.total}}</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/features/report/summary/test-summary-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/report/summary/test-summary-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: Element, TestSummaryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSummaryTableComponent", function() { return TestSummaryTableComponent; });
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

var Element = /** @class */ (function () {
    function Element(name) {
        this.name = name;
        this.total = 0;
        this.passed = 0;
        this.failed = 0;
        this.other = 0;
    }
    Element.prototype.incrementCounters = function (status) {
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
    Element.prototype.getPassedPercentage = function () {
        return this.getPercentage(this.passed);
    };
    Element.prototype.getFailedPercentage = function () {
        return this.getPercentage(this.failed);
    };
    Element.prototype.getOtherPercentage = function () {
        return this.getPercentage(this.other);
    };
    Element.prototype.getPercentage = function (items) {
        return Math.round(items * 100 / this.total) + '%';
    };
    return Element;
}());

var TestSummaryTableComponent = /** @class */ (function () {
    function TestSummaryTableComponent(ref) {
        this.ref = ref;
        this.category = '';
        this.categoryName = '';
        this.elements = [];
    }
    TestSummaryTableComponent.prototype.setTests = function (testSuites) {
        var _this = this;
        this.elements = [];
        testSuites.forEach(function (ts) {
            ts.testCases.forEach(function (tc) { return _this.createOrUpdateElement(tc); });
        });
        this.ref.detectChanges();
    };
    TestSummaryTableComponent.prototype.createOrUpdateElement = function (test) {
        var elementName = this.getElementName(test);
        var element = this.elements.find(function (e) { return e.name === elementName; });
        if (!element) {
            element = new Element(elementName);
            this.elements.push(element);
        }
        element.incrementCounters(test.status);
    };
    TestSummaryTableComponent.prototype.getElementName = function (test) {
        var _this = this;
        var label = test.labels.find(function (l) { return l.name === _this.category; });
        return label ? label.value : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestSummaryTableComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestSummaryTableComponent.prototype, "categoryName", void 0);
    TestSummaryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-summary-table',
            template: __webpack_require__(/*! ./test-summary-table.component.html */ "./src/app/features/report/summary/test-summary-table.component.html"),
            styles: [__webpack_require__(/*! ./test-summary-table.component.css */ "./src/app/features/report/summary/test-summary-table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TestSummaryTableComponent);
    return TestSummaryTableComponent;
}());



/***/ }),

/***/ "./src/app/features/reporter/reporter-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/reporter/reporter-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<systelab-dialog-header #header (close)=\"close()\" [withProgressBar]=\"true\">Report to Jama</systelab-dialog-header>\r\n<div class=\"slab-flex-1 slab-overflow-container container-fluid\">\r\n\r\n\t<form class=\"pt-4\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label class=\"col-form-label\">Project</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<project-combobox #projectComboBox [(id)]=\"selectedProjectId\" [(description)]=\"selectedProjectName\"\r\n\t\t\t\t\t[emptyElement]=\"false\"></project-combobox>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row mt-2\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label class=\"col-form-label\">Test Plan</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<test-plan-combobox #testPlanComboBox [(id)]=\"selectedTestPlanId\" [(description)]=\"selectedTestPlanName\"\r\n\t\t\t\t\t[emptyElement]=\"false\"></test-plan-combobox>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row mt-2\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label class=\"col-form-label\">Test Cycle</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<test-cycle-combobox #testCycleComboBox [(id)]=\"selectedTestCycleId\" [(description)]=\"selectedTestCycleName\"\r\n\t\t\t\t\t[emptyElement]=\"false\"></test-cycle-combobox>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row mt-2\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label class=\"col-form-label\">Test Group</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<test-group-combobox #testGroupComboBox [multipleSelection]=\"true\"\r\n\t\t\t\t\t[(multipleSelectedItemList)]=\"selectedTestGroups\" [isDisabled]=\"selectedTestCycleId!==undefined\">\r\n\t\t\t\t</test-group-combobox>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-2\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label for=\"newtestcycle\" class=\"col-form-label\">New Test Cycle name</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newtestcycle\" name=\"newtestcycle\" [(ngModel)]=\"nameForNewTestCycle\"\r\n\t\t\t\t\t[disabled]=\"selectedTestCycleId!==undefined\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-2\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<label for=\"actualresults\" class=\"col-form-label\">Actual Results</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<textarea id=\"actualresults\" name=\"actualresults\" class=\"slab-textarea w-100 slab-textarea-vertical-resize\"\r\n\t\t\t\t\trows=\"8\" [(ngModel)]=\"actualResults\"></textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div *ngIf=\"uploading && !areResultsReady()\">Uploading...</div>\r\n\t<div class=\"row mt-4 mb-4 results-container\" *ngIf=\"areResultsReady()\">\r\n\t\t<div class=\"col-md-12 mt-4 mb-4\">\r\n\t\t\t<h4 class=\"mb-4\">Upload Results</h4>\r\n\t\t\t<div>\r\n\t\t\t\t<span>Total of Test Suites to upload:</span><span class=\"result-number\"> {{totalSuites}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<span>Total of Test Runs uploaded:</span>\r\n\t\t\t\t<span class=\"result-number\"> {{testsRun['passed'] + testsRun['failed']}} (Pass {{testsRun['passed']}}, Failed {{testsRun['failed']}})</span>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"testsRun['NotUpdated'] > 0\">\r\n\t\t\t\t<span>Number of Test Runs that exist in Jama but are not updated due to an error:</span>\r\n\t\t\t\t<span class=\"result-number\"> {{testsRun['NotUpdated']}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12 mt-4\" *ngIf=\"areResultsWrong()\">\r\n\t\t\t<h4>Wrong uploads</h4>\r\n\t\t\t<div *ngIf=\"testsUpload['failed'].length > 0\">\r\n\t\t\t\t<h5 class=\"text-secondary\">Test Runs with Failed status</h5>\r\n\t\t\t\t<table class=\"table table-sm table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Test</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let test of testsUpload['failed']\">\r\n\t\t\t\t\t\t\t<td>{{test}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"testsUpload['NotUpdated'].length > 0\">\r\n\t\t\t\t<h5 class=\"text-secondary\">Test Runs that exist in Jama but are not updated due to an error</h5>\r\n\t\t\t\t<table class=\"table table-sm table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Test</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let test of testsUpload['NotUpdated']\">\r\n\t\t\t\t\t\t\t<td>{{test}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"testsUpload['FileNotInJama'].length > 0\">\r\n\t\t\t\t<h5 class=\"text-secondary\">Number of Test Runs not found in Jama in the selected Test Cycle</h5>\r\n\t\t\t\t<table class=\"table table-sm table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Test</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let test of testsUpload['FileNotInJama']\">\r\n\t\t\t\t\t\t\t<td>{{test}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<systelab-dialog-bottom>\r\n\t<button type=\"button\" class=\"btn mr-0\" [disabled]=\"!this.selectedProjectId\" (click)=\"doUpdateTestCase()\">Update Test Case</button>\r\n\t<button type=\"button\" class=\"btn ml-auto\" [disabled]=\"!isValidForm()\" (click)=\"doRun()\">Report</button>\r\n</systelab-dialog-bottom>\r\n"

/***/ }),

/***/ "./src/app/features/reporter/reporter-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/features/reporter/reporter-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results-table td:nth-child(2) {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0ZXIvQzpcXFByb2plY3RzXFxvcGVuU291cmNlXFxhbGx1cmUtcmVwb3J0ZXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxyZXBvcnRlclxccmVwb3J0ZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVwb3J0ZXIvcmVwb3J0ZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtdGFibGUgdGQ6bnRoLWNoaWxkKDIpe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/features/reporter/reporter-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/reporter/reporter-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ReporterDialogParameters, ReporterDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporterDialogParameters", function() { return ReporterDialogParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporterDialog", function() { return ReporterDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systelab-components/widgets/modal */ "./node_modules/systelab-components/widgets/modal/index.js");
/* harmony import */ var systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jama */ "./src/app/jama/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_project_combobox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/project-combobox.component */ "./src/app/components/project-combobox.component.ts");
/* harmony import */ var _components_test_plan_combobox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/test-plan-combobox.component */ "./src/app/components/test-plan-combobox.component.ts");
/* harmony import */ var _components_test_group_combobox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/test-group-combobox.component */ "./src/app/components/test-group-combobox.component.ts");
/* harmony import */ var _components_test_cycle_combobox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/test-cycle-combobox.component */ "./src/app/components/test-cycle-combobox.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_test_suite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/test-suite.service */ "./src/app/service/test-suite.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReporterDialogParameters = /** @class */ (function (_super) {
    __extends(ReporterDialogParameters, _super);
    function ReporterDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 900;
        _this.height = 600;
        return _this;
    }
    return ReporterDialogParameters;
}(systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__["SystelabModalContext"]));

var ResultStatus;
(function (ResultStatus) {
    ResultStatus["Passed"] = "passed";
    ResultStatus["Failed"] = "failed";
    ResultStatus["Blocked"] = "blocked";
    ResultStatus["NotUpdated"] = "NotUpdated";
    ResultStatus["FileNotInJama"] = "FileNotInJama";
})(ResultStatus || (ResultStatus = {}));
var ReporterDialog = /** @class */ (function () {
    function ReporterDialog(dialog, usersService, projectsService, testplansService, testrunsService, testSuiteService, toastr, itemsService, abstractItemService) {
        var _a, _b;
        this.dialog = dialog;
        this.usersService = usersService;
        this.projectsService = projectsService;
        this.testplansService = testplansService;
        this.testrunsService = testrunsService;
        this.testSuiteService = testSuiteService;
        this.toastr = toastr;
        this.itemsService = itemsService;
        this.abstractItemService = abstractItemService;
        this.selectedTestCycleName = 'New Test Cycle';
        this.selectedTestGroups = [];
        this.nameForNewTestCycle = '';
        this.actualResults = '';
        this.totalTestsRun = 0;
        this.totalSuites = 0;
        this.currentTestsRun = 0;
        this.testsRun = (_a = {},
            _a[ResultStatus.Passed] = 0,
            _a[ResultStatus.Failed] = 0,
            _a[ResultStatus.NotUpdated] = 0,
            _a[ResultStatus.FileNotInJama] = 0,
            _a);
        this.testsUpload = (_b = {},
            _b[ResultStatus.Passed] = [],
            _b[ResultStatus.Failed] = [],
            _b[ResultStatus.NotUpdated] = [],
            _b[ResultStatus.FileNotInJama] = [],
            _b);
        this.uploading = false;
        this.testsRunPercentage = 0;
        this.parameters = dialog.context;
    }
    ReporterDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.configuration.username = this.parameters.username;
        this.usersService.configuration.password = this.parameters.password;
        this.usersService.configuration.basePath = this.parameters.server;
        this.projectsService.configuration.username = this.parameters.username;
        this.projectsService.configuration.password = this.parameters.password;
        this.projectsService.configuration.basePath = this.parameters.server;
        this.testplansService.configuration.username = this.parameters.username;
        this.testplansService.configuration.password = this.parameters.password;
        this.testplansService.configuration.basePath = this.parameters.server;
        this.testrunsService.configuration.username = this.parameters.username;
        this.testrunsService.configuration.password = this.parameters.password;
        this.testrunsService.configuration.basePath = this.parameters.server;
        this.itemsService.configuration.username = this.parameters.username;
        this.itemsService.configuration.password = this.parameters.password;
        this.itemsService.configuration.basePath = this.parameters.server;
        this.abstractItemService.configuration.username = this.parameters.username;
        this.abstractItemService.configuration.password = this.parameters.password;
        this.abstractItemService.configuration.basePath = this.parameters.server;
        if (this.parameters.username && this.parameters.password && this.parameters.server) {
            this.usersService.getCurrentUser()
                .subscribe(function (user) {
                _this._userId = user.data.id;
            }, function (error) {
                _this.toastr.error('Couldn\'t get the username: ' + _this.parameters.username);
            });
        }
    };
    ReporterDialog.prototype.isValidForm = function () {
        return this._userId && this.selectedProjectId && this.selectedTestPlanId &&
            (this.selectedTestCycleId || (this.selectedTestGroups.length > 0 && this.nameForNewTestCycle !== ''));
    };
    Object.defineProperty(ReporterDialog.prototype, "selectedProjectId", {
        get: function () {
            return this._selectedProjectId;
        },
        set: function (value) {
            this._selectedProjectId = value;
            this.selectedTestPlanId = undefined;
            this.selectedTestPlanName = undefined;
            this.testPlanComboBox.project = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReporterDialog.prototype, "selectedTestPlanId", {
        get: function () {
            return this._selectedTestPlanId;
        },
        set: function (value) {
            this._selectedTestPlanId = value;
            this.selectedTestGroups = [];
            this.selectedTestCycleId = undefined;
            this.selectedTestCycleName = 'New Test Cycle';
            this.testCycleComboBox.testPlan = value;
            this.testGroupComboBox.testPlan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReporterDialog.prototype, "selectedTestCycleId", {
        get: function () {
            return this._selectedTestCycleId;
        },
        set: function (value) {
            this._selectedTestCycleId = value;
        },
        enumerable: true,
        configurable: true
    });
    ReporterDialog.getParameters = function () {
        return new ReporterDialogParameters();
    };
    ReporterDialog.prototype.close = function () {
        if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
        this.dialog.close(false);
    };
    ReporterDialog.prototype.doUpdateTestCase = function () {
        var _this = this;
        var testCaseItemType = [26, 59]; // 26 - Test Case CSW ; 59 - Test Case IL
        this.initTests(null, this.parameters.testSuites.length);
        this.parameters.testSuites.forEach(function (suite) {
            _this.abstractItemService.getAbstractItems([Number(_this.selectedProjectId)], testCaseItemType, undefined, undefined, undefined, undefined, undefined, [suite.id], ['createdDate.asc'], 0, 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (value) {
                if (value.data.length > 0) {
                    var itemIDTestCase_1 = value.data[0].id;
                    return _this.itemsService.getItem(Number(itemIDTestCase_1))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (itemTestCase) {
                        var _a;
                        var tcType = 'tc_type$' + itemTestCase.data.itemType;
                        var testCaseToUpdate = {
                            'globalId': itemTestCase.data.globalId,
                            'project': itemTestCase.data.project,
                            'itemType': itemTestCase.data.itemType,
                            'childItemType': itemTestCase.data.childItemType,
                            'location': itemTestCase.data.location,
                            'fields': (_a = {
                                    'name': itemTestCase.data.fields['name'],
                                    'description': _this.testSuiteService.getDescription(suite.name),
                                    'testCaseSteps': _this.testSuiteService.getTestCaseStepsToUpdate(suite),
                                    'priority': itemTestCase.data.fields['priority'],
                                    'release': itemTestCase.data.fields['release'],
                                    'status': itemTestCase.data.fields['status']
                                },
                                _a[tcType] = itemTestCase.data.fields[tcType],
                                _a)
                        };
                        return _this.itemsService.putItem(testCaseToUpdate, itemIDTestCase_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (response) {
                            if (response.meta && response.meta.status === 'OK') {
                                _this.saveResultTest(ResultStatus.Passed, suite.id);
                            }
                            else {
                                _this.saveResultTest(ResultStatus.NotUpdated, suite.id);
                            }
                        }));
                    }));
                }
                else {
                    _this.saveResultTest(ResultStatus.FileNotInJama, suite.id);
                    return new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]();
                }
            })).subscribe();
        });
    };
    ReporterDialog.prototype.doRun = function () {
        var _this = this;
        this.uploading = true;
        if (this.selectedTestCycleId !== undefined) {
            this.updateTestRunsInTheTestCycle(this.selectedTestCycleId, this.parameters.testSuites, this._userId, this.actualResults);
        }
        else {
            var testGroupsToInclude = this.selectedTestGroups.map(function (a) { return a.id; });
            this.createTestCycle(Number(this.selectedProjectId), Number(this.selectedTestPlanId), this.nameForNewTestCycle, testGroupsToInclude)
                .subscribe(function (result) {
                if (result) {
                    _this.toastr.success('Test cycle ' + _this.nameForNewTestCycle + ' created');
                    _this.updateTestRunsInTheLastCycleOfTheTestPlan(_this.selectedTestPlanId, _this.parameters.testSuites, _this._userId, _this.actualResults);
                }
            }, function (error) {
                _this.uploading = false;
                _this.toastr.error('Couldn\'t create the test cycle: ' + error.message);
            });
        }
    };
    ReporterDialog.prototype.areResultsReady = function () {
        return this.currentTestsRun === this.totalTestsRun && this.totalTestsRun > 0;
    };
    ReporterDialog.prototype.areResultsWrong = function () {
        return this.testsUpload[ResultStatus.Failed].length > 0 || this.testsUpload[ResultStatus.NotUpdated].length > 0 ||
            this.testsUpload[ResultStatus.FileNotInJama].length > 0;
    };
    ReporterDialog.prototype.updateTestRunsInTheTestCycle = function (testCycleId, testSuites, userId, actualResults) {
        var _this = this;
        this.getTestRuns(testCycleId).subscribe(function (tests) {
            if (tests.pageInfo.startIndex === 0) {
                _this.initTests(tests.totalResults, testSuites.length);
                _this.testsUpload[ResultStatus.FileNotInJama] = testSuites.map(function (ts) { return ts.id; });
            }
            tests.testruns.forEach(function (testrun) {
                _this.getKeyById(testrun.fields.testCase).subscribe(function (key) {
                    var testSuite = testSuites.find(function (ts) { return ts.id === key || ts.id === testrun.fields.name; });
                    if (testSuite) {
                        _this.testsUpload[ResultStatus.FileNotInJama].splice(_this.testsUpload[ResultStatus.FileNotInJama].indexOf(testSuite.name), 1);
                        _this.updateTestRunForTestCase(testSuite, testrun, userId, actualResults);
                    }
                    else {
                        _this.saveResultTest(ResultStatus.FileNotInJama, testrun.fields.name);
                    }
                });
            });
        });
    };
    ReporterDialog.prototype.updateTestRunForTestCase = function (testSuite, testrun, userId, actualResults) {
        var _this = this;
        this.setTestRunStatus(testrun, testSuite, userId, actualResults)
            .subscribe(function (value) {
            _this.saveResultTest(_this.testSuiteService.getStatus(testSuite), testrun.fields.name);
        }, function (error) {
            _this.saveResultTest(ResultStatus.NotUpdated, testrun.fields.name);
        });
    };
    ReporterDialog.prototype.saveResultTest = function (status, name) {
        this.testsRun[status]++;
        this.currentTestsRun++;
        this.testsRunPercentage = 100 * this.currentTestsRun / this.totalTestsRun;
        this.header.go(this.testsRunPercentage);
        if (status !== ResultStatus.Blocked && status !== ResultStatus.FileNotInJama) {
            this.testsUpload[status].push(name);
        }
        if (this.areResultsReady()) {
            this.uploading = false;
        }
    };
    ReporterDialog.prototype.initTests = function (totalTests, totalSuites) {
        var _this = this;
        this.totalTestsRun = totalTests || totalSuites;
        this.totalSuites = totalSuites;
        this.currentTestsRun = 0;
        Object.keys(this.testsRun).forEach(function (testRun) { return _this.testsRun[testRun] = 0; });
        Object.keys(this.testsUpload).forEach(function (testWrong) { return _this.testsUpload[testWrong] = []; });
    };
    ReporterDialog.prototype.getKeyById = function (testCaseId) {
        return this.itemsService.getItem(testCaseId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
            return value.data.documentKey;
        }));
    };
    ReporterDialog.prototype.getTestRuns = function (testCycleId) {
        var _this = this;
        var list = [];
        list.push(testCycleId);
        var itemsPerPage = 20;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["range"])(0, 100)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (currentIndex) { return _this.testrunsService.getTestRuns(list, undefined, undefined, undefined, currentIndex * itemsPerPage, itemsPerPage); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeWhile"])(function (value) { return value && value.data && value.data.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
            return {
                testruns: value.data,
                totalResults: value.meta.pageInfo.totalResults,
                pageInfo: value.meta.pageInfo
            };
        }));
    };
    ReporterDialog.prototype.setTestRunStatus = function (testRun, testSuite, userId, actualResults) {
        var status;
        switch (this.testSuiteService.getStatus(testSuite)) {
            case 'passed':
                status = 'PASSED';
                break;
            case 'blocked':
                status = 'BLOCKED';
                break;
            case 'failed':
                status = 'FAILED';
                break;
        }
        if (status) {
            var body = {
                'fields': {
                    'testRunSteps': testRun.fields.testRunSteps.map(function (s) {
                        s.status = status;
                        return s;
                    }),
                    'actualResults': this.testSuiteService.getActualResults(testSuite, actualResults),
                    'assignedTo': userId
                }
            };
            return this.testrunsService.updateTestRun(body, testRun.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
                return value.status;
            }));
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])('Status not supported!');
        }
    };
    ReporterDialog.prototype.createTestCycle = function (project, testPlanId, testCycleName, testGroupsToInclude) {
        var startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(), 'YYYY-MM-DD');
        var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(), 'YYYY-MM-DD');
        var requestTestCycle = {
            'fields': {
                'name': testCycleName,
                'project': project,
                'startDate': startDate,
                'endDate': endDate
            },
            'testRunGenerationConfig': {
                'testGroupsToInclude': testGroupsToInclude,
                'testRunStatusesToInclude': ['PASSED', 'NOT_RUN', 'INPROGRESS', 'FAILED', 'BLOCKED']
            }
        };
        return this.testplansService.createTestCycle(requestTestCycle, testPlanId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (createdResponse) {
            return createdResponse !== null;
        }));
    };
    ReporterDialog.prototype.updateTestRunsInTheLastCycleOfTheTestPlan = function (testPlanId, testSuites, userId, actualResults) {
        var _this = this;
        this.getLastTestCycleByTestPlanId(testPlanId)
            .subscribe(function (lastTestCycle) {
            _this.updateTestRunsInTheTestCycle(lastTestCycle, testSuites, userId, actualResults);
        });
    };
    ReporterDialog.prototype.getLastTestCycleByTestPlanId = function (testPlanId) {
        return this.testplansService.getTestCycles(testPlanId, 0, 50)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
            if (value.data && value.data.length > 0) {
                return value.data[value.data.length - 1].id;
            }
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('projectComboBox'),
        __metadata("design:type", _components_project_combobox_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComboBox"])
    ], ReporterDialog.prototype, "projectComboBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('testPlanComboBox'),
        __metadata("design:type", _components_test_plan_combobox_component__WEBPACK_IMPORTED_MODULE_5__["TestPlanComboBox"])
    ], ReporterDialog.prototype, "testPlanComboBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('testCycleComboBox'),
        __metadata("design:type", _components_test_cycle_combobox_component__WEBPACK_IMPORTED_MODULE_7__["TestCycleComboBox"])
    ], ReporterDialog.prototype, "testCycleComboBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('testGroupComboBox'),
        __metadata("design:type", _components_test_group_combobox_component__WEBPACK_IMPORTED_MODULE_6__["TestGroupComboBox"])
    ], ReporterDialog.prototype, "testGroupComboBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('header'),
        __metadata("design:type", systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__["DialogHeaderComponent"])
    ], ReporterDialog.prototype, "header", void 0);
    ReporterDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reporter-dialog',
            template: __webpack_require__(/*! ./reporter-dialog.component.html */ "./src/app/features/reporter/reporter-dialog.component.html"),
            styles: [__webpack_require__(/*! ./reporter-dialog.component.scss */ "./src/app/features/reporter/reporter-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [systelab_components_widgets_modal__WEBPACK_IMPORTED_MODULE_1__["DialogRef"], _jama__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _jama__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
            _jama__WEBPACK_IMPORTED_MODULE_2__["TestplansService"], _jama__WEBPACK_IMPORTED_MODULE_2__["TestrunsService"],
            _service_test_suite_service__WEBPACK_IMPORTED_MODULE_11__["TestSuiteService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _jama__WEBPACK_IMPORTED_MODULE_2__["ItemsService"],
            _jama__WEBPACK_IMPORTED_MODULE_2__["AbstractitemsService"]])
    ], ReporterDialog);
    return ReporterDialog;
}());



/***/ }),

/***/ "./src/app/jama/api.module.ts":
/*!************************************!*\
  !*** ./src/app/jama/api.module.ts ***!
  \************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/jama/configuration.ts");
/* harmony import */ var _api_abstractitems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/abstractitems.service */ "./src/app/jama/api/abstractitems.service.ts");
/* harmony import */ var _api_activities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/activities.service */ "./src/app/jama/api/activities.service.ts");
/* harmony import */ var _api_attachments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/attachments.service */ "./src/app/jama/api/attachments.service.ts");
/* harmony import */ var _api_baselines_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/baselines.service */ "./src/app/jama/api/baselines.service.ts");
/* harmony import */ var _api_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/comments.service */ "./src/app/jama/api/comments.service.ts");
/* harmony import */ var _api_files_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/files.service */ "./src/app/jama/api/files.service.ts");
/* harmony import */ var _api_filters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/filters.service */ "./src/app/jama/api/filters.service.ts");
/* harmony import */ var _api_items_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/items.service */ "./src/app/jama/api/items.service.ts");
/* harmony import */ var _api_itemtypes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/itemtypes.service */ "./src/app/jama/api/itemtypes.service.ts");
/* harmony import */ var _api_picklistoptions_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/picklistoptions.service */ "./src/app/jama/api/picklistoptions.service.ts");
/* harmony import */ var _api_picklists_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/picklists.service */ "./src/app/jama/api/picklists.service.ts");
/* harmony import */ var _api_projects_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/projects.service */ "./src/app/jama/api/projects.service.ts");
/* harmony import */ var _api_relationships_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/relationships.service */ "./src/app/jama/api/relationships.service.ts");
/* harmony import */ var _api_relationshiptypes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api/relationshiptypes.service */ "./src/app/jama/api/relationshiptypes.service.ts");
/* harmony import */ var _api_releases_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api/releases.service */ "./src/app/jama/api/releases.service.ts");
/* harmony import */ var _api_system_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./api/system.service */ "./src/app/jama/api/system.service.ts");
/* harmony import */ var _api_tags_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api/tags.service */ "./src/app/jama/api/tags.service.ts");
/* harmony import */ var _api_testcycles_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./api/testcycles.service */ "./src/app/jama/api/testcycles.service.ts");
/* harmony import */ var _api_testplans_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./api/testplans.service */ "./src/app/jama/api/testplans.service.ts");
/* harmony import */ var _api_testruns_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./api/testruns.service */ "./src/app/jama/api/testruns.service.ts");
/* harmony import */ var _api_usergroups_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./api/usergroups.service */ "./src/app/jama/api/usergroups.service.ts");
/* harmony import */ var _api_users_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./api/users.service */ "./src/app/jama/api/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forConfig = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]],
            declarations: [],
            exports: [],
            providers: [_api_abstractitems_service__WEBPACK_IMPORTED_MODULE_4__["AbstractitemsService"], _api_activities_service__WEBPACK_IMPORTED_MODULE_5__["ActivitiesService"], _api_attachments_service__WEBPACK_IMPORTED_MODULE_6__["AttachmentsService"], _api_baselines_service__WEBPACK_IMPORTED_MODULE_7__["BaselinesService"], _api_comments_service__WEBPACK_IMPORTED_MODULE_8__["CommentsService"], _api_files_service__WEBPACK_IMPORTED_MODULE_9__["FilesService"], _api_filters_service__WEBPACK_IMPORTED_MODULE_10__["FiltersService"], _api_items_service__WEBPACK_IMPORTED_MODULE_11__["ItemsService"], _api_itemtypes_service__WEBPACK_IMPORTED_MODULE_12__["ItemtypesService"], _api_picklistoptions_service__WEBPACK_IMPORTED_MODULE_13__["PicklistoptionsService"], _api_picklists_service__WEBPACK_IMPORTED_MODULE_14__["PicklistsService"], _api_projects_service__WEBPACK_IMPORTED_MODULE_15__["ProjectsService"], _api_relationships_service__WEBPACK_IMPORTED_MODULE_16__["RelationshipsService"], _api_relationshiptypes_service__WEBPACK_IMPORTED_MODULE_17__["RelationshiptypesService"], _api_releases_service__WEBPACK_IMPORTED_MODULE_18__["ReleasesService"], _api_system_service__WEBPACK_IMPORTED_MODULE_19__["SystemService"], _api_tags_service__WEBPACK_IMPORTED_MODULE_20__["TagsService"], _api_testcycles_service__WEBPACK_IMPORTED_MODULE_21__["TestcyclesService"], _api_testplans_service__WEBPACK_IMPORTED_MODULE_22__["TestplansService"], _api_testruns_service__WEBPACK_IMPORTED_MODULE_23__["TestrunsService"], _api_usergroups_service__WEBPACK_IMPORTED_MODULE_24__["UsergroupsService"], _api_users_service__WEBPACK_IMPORTED_MODULE_25__["UsersService"]]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/jama/api/abstractitems.service.ts":
/*!***************************************************!*\
  !*** ./src/app/jama/api/abstractitems.service.ts ***!
  \***************************************************/
/*! exports provided: AbstractitemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractitemsService", function() { return AbstractitemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var AbstractitemsService = /** @class */ (function () {
    function AbstractitemsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    AbstractitemsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    AbstractitemsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Search for items, test plans, test cycles, test runs, or attachments
     *
     * @param project
     * @param itemType
     * @param documentKey
     * @param release
     * @param createdDate Filter datetime fields after a single date or within a range of values. Provide one or two values in ISO8601 format (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param modifiedDate Filter datetime fields after a single date or within a range of values. Provide one or two values in ISO8601 format (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param lastActivityDate Filter datetime fields after a single date or within a range of values. Provide one or two values in ISO8601 format (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param contains Filter on the text contents of the item. Strings taken literally. Multiple &#39;contains&#39; values will be bitwise ORed.
     * @param sortBy Sort orders can be added with the name of the field by which to sort, followed by .asc or .desc (e.g. &#39;name.asc&#39; or &#39;modifiedDate.desc&#39;). If not set, this defaults to sorting by sequence.asc and then documentKey.asc
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getAbstractItems = function (project, itemType, documentKey, release, createdDate, modifiedDate, lastActivityDate, contains, sortBy, startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project) {
            project.forEach(function (element) {
                queryParameters = queryParameters.append('project', element);
            });
        }
        if (itemType) {
            itemType.forEach(function (element) {
                queryParameters = queryParameters.append('itemType', element);
            });
        }
        if (documentKey) {
            documentKey.forEach(function (element) {
                queryParameters = queryParameters.append('documentKey', element);
            });
        }
        if (release) {
            release.forEach(function (element) {
                queryParameters = queryParameters.append('release', element);
            });
        }
        if (createdDate) {
            createdDate.forEach(function (element) {
                queryParameters = queryParameters.append('createdDate', element);
            });
        }
        if (modifiedDate) {
            modifiedDate.forEach(function (element) {
                queryParameters = queryParameters.append('modifiedDate', element);
            });
        }
        if (lastActivityDate) {
            lastActivityDate.forEach(function (element) {
                queryParameters = queryParameters.append('lastActivityDate', element);
            });
        }
        if (contains) {
            contains.forEach(function (element) {
                queryParameters = queryParameters.append('contains', element);
            });
        }
        if (sortBy) {
            sortBy.forEach(function (element) {
                queryParameters = queryParameters.append('sortBy', element);
            });
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get any item, test plan, test cycle, test run, or attachment with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getItem = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getVersionOnItem = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the item at the specified version
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getVersionedItem = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionedItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versioned relationships that were associated to the item at the specified time
     *
     * @param id
     * @param timestamp Get relationships for the specified item at this date and time. Requires ISO8601 formatting (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getVersionedRelationships = function (id, timestamp, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionedRelationships.');
        }
        if (timestamp === null || timestamp === undefined) {
            throw new Error('Required parameter timestamp was null or undefined when calling getVersionedRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (timestamp !== undefined) {
            queryParameters = queryParameters.set('timestamp', timestamp);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems/" + encodeURIComponent(String(id)) + "/versionedrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    AbstractitemsService.prototype.getVersionsOnItem = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionsOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/abstractitems/" + encodeURIComponent(String(id)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    AbstractitemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], AbstractitemsService);
    return AbstractitemsService;
}());



/***/ }),

/***/ "./src/app/jama/api/activities.service.ts":
/*!************************************************!*\
  !*** ./src/app/jama/api/activities.service.ts ***!
  \************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ActivitiesService = /** @class */ (function () {
    function ActivitiesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ActivitiesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ActivitiesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get all activities in the project with the specified ID
     *
     * @param project
     * @param eventType Event type to filter on. More than one event type can be chosen
     * @param objectType Object type to filter on. More than one object type can be chosen
     * @param itemType ID of item type to filter on. More than one item type can be chosen
     * @param date Filter datetime fields after a single date or within a range of values. Provide one or two values in ISO8601 format (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param deleteEvents Get item delete events only
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ActivitiesService.prototype.getActivities = function (project, eventType, objectType, itemType, date, deleteEvents, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getActivities.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (eventType) {
            eventType.forEach(function (element) {
                queryParameters = queryParameters.append('eventType', element);
            });
        }
        if (objectType) {
            objectType.forEach(function (element) {
                queryParameters = queryParameters.append('objectType', element);
            });
        }
        if (itemType) {
            itemType.forEach(function (element) {
                queryParameters = queryParameters.append('itemType', element);
            });
        }
        if (date) {
            date.forEach(function (element) {
                queryParameters = queryParameters.append('date', element);
            });
        }
        if (deleteEvents !== undefined) {
            queryParameters = queryParameters.set('deleteEvents', deleteEvents);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/activities", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the activity with the specified ID
     *
     * @param activityId
     * @param include Links to include as full objects in the linked map
     */
    ActivitiesService.prototype.getActivityById = function (activityId, include) {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling getActivityById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/activities/" + encodeURIComponent(String(activityId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all items affected by the activity with the specified ID
     *
     * @param activityId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ActivitiesService.prototype.getAffectedItems = function (activityId, startAt, maxResults, include) {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling getAffectedItems.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/activities/" + encodeURIComponent(String(activityId)) + "/affecteditems", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Restore item(s) associated with a delete activity.
     *
     * @param activityId
     */
    ActivitiesService.prototype.restoreItems = function (activityId) {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling restoreItems.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/activities/" + encodeURIComponent(String(activityId)) + "/restore", {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    ActivitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ActivitiesService);
    return ActivitiesService;
}());



/***/ }),

/***/ "./src/app/jama/api/api.ts":
/*!*********************************!*\
  !*** ./src/app/jama/api/api.ts ***!
  \*********************************/
/*! exports provided: APIS, AbstractitemsService, ActivitiesService, AttachmentsService, BaselinesService, CommentsService, FilesService, FiltersService, ItemsService, ItemtypesService, PicklistoptionsService, PicklistsService, ProjectsService, RelationshipsService, RelationshiptypesService, ReleasesService, SystemService, TagsService, TestcyclesService, TestplansService, TestrunsService, UsergroupsService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _abstractitems_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractitems.service */ "./src/app/jama/api/abstractitems.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractitemsService", function() { return _abstractitems_service__WEBPACK_IMPORTED_MODULE_0__["AbstractitemsService"]; });

/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.service */ "./src/app/jama/api/activities.service.ts");
/* harmony import */ var _attachments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachments.service */ "./src/app/jama/api/attachments.service.ts");
/* harmony import */ var _baselines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baselines.service */ "./src/app/jama/api/baselines.service.ts");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.service */ "./src/app/jama/api/comments.service.ts");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files.service */ "./src/app/jama/api/files.service.ts");
/* harmony import */ var _filters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.service */ "./src/app/jama/api/filters.service.ts");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items.service */ "./src/app/jama/api/items.service.ts");
/* harmony import */ var _itemtypes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./itemtypes.service */ "./src/app/jama/api/itemtypes.service.ts");
/* harmony import */ var _picklistoptions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./picklistoptions.service */ "./src/app/jama/api/picklistoptions.service.ts");
/* harmony import */ var _picklists_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./picklists.service */ "./src/app/jama/api/picklists.service.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects.service */ "./src/app/jama/api/projects.service.ts");
/* harmony import */ var _relationships_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./relationships.service */ "./src/app/jama/api/relationships.service.ts");
/* harmony import */ var _relationshiptypes_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./relationshiptypes.service */ "./src/app/jama/api/relationshiptypes.service.ts");
/* harmony import */ var _releases_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./releases.service */ "./src/app/jama/api/releases.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./system.service */ "./src/app/jama/api/system.service.ts");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tags.service */ "./src/app/jama/api/tags.service.ts");
/* harmony import */ var _testcycles_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testcycles.service */ "./src/app/jama/api/testcycles.service.ts");
/* harmony import */ var _testplans_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./testplans.service */ "./src/app/jama/api/testplans.service.ts");
/* harmony import */ var _testruns_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./testruns.service */ "./src/app/jama/api/testruns.service.ts");
/* harmony import */ var _usergroups_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./usergroups.service */ "./src/app/jama/api/usergroups.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users.service */ "./src/app/jama/api/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return _activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentsService", function() { return _attachments_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaselinesService", function() { return _baselines_service__WEBPACK_IMPORTED_MODULE_3__["BaselinesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return _files_service__WEBPACK_IMPORTED_MODULE_5__["FilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return _filters_service__WEBPACK_IMPORTED_MODULE_6__["FiltersService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return _items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemtypesService", function() { return _itemtypes_service__WEBPACK_IMPORTED_MODULE_8__["ItemtypesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PicklistoptionsService", function() { return _picklistoptions_service__WEBPACK_IMPORTED_MODULE_9__["PicklistoptionsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PicklistsService", function() { return _picklists_service__WEBPACK_IMPORTED_MODULE_10__["PicklistsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return _projects_service__WEBPACK_IMPORTED_MODULE_11__["ProjectsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationshipsService", function() { return _relationships_service__WEBPACK_IMPORTED_MODULE_12__["RelationshipsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationshiptypesService", function() { return _relationshiptypes_service__WEBPACK_IMPORTED_MODULE_13__["RelationshiptypesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function() { return _releases_service__WEBPACK_IMPORTED_MODULE_14__["ReleasesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return _system_service__WEBPACK_IMPORTED_MODULE_15__["SystemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_16__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestcyclesService", function() { return _testcycles_service__WEBPACK_IMPORTED_MODULE_17__["TestcyclesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestplansService", function() { return _testplans_service__WEBPACK_IMPORTED_MODULE_18__["TestplansService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestrunsService", function() { return _testruns_service__WEBPACK_IMPORTED_MODULE_19__["TestrunsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsergroupsService", function() { return _usergroups_service__WEBPACK_IMPORTED_MODULE_20__["UsergroupsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"]; });













































var APIS = [_abstractitems_service__WEBPACK_IMPORTED_MODULE_0__["AbstractitemsService"], _activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"], _attachments_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentsService"], _baselines_service__WEBPACK_IMPORTED_MODULE_3__["BaselinesService"], _comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"], _files_service__WEBPACK_IMPORTED_MODULE_5__["FilesService"], _filters_service__WEBPACK_IMPORTED_MODULE_6__["FiltersService"], _items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"], _itemtypes_service__WEBPACK_IMPORTED_MODULE_8__["ItemtypesService"], _picklistoptions_service__WEBPACK_IMPORTED_MODULE_9__["PicklistoptionsService"], _picklists_service__WEBPACK_IMPORTED_MODULE_10__["PicklistsService"], _projects_service__WEBPACK_IMPORTED_MODULE_11__["ProjectsService"], _relationships_service__WEBPACK_IMPORTED_MODULE_12__["RelationshipsService"], _relationshiptypes_service__WEBPACK_IMPORTED_MODULE_13__["RelationshiptypesService"], _releases_service__WEBPACK_IMPORTED_MODULE_14__["ReleasesService"], _system_service__WEBPACK_IMPORTED_MODULE_15__["SystemService"], _tags_service__WEBPACK_IMPORTED_MODULE_16__["TagsService"], _testcycles_service__WEBPACK_IMPORTED_MODULE_17__["TestcyclesService"], _testplans_service__WEBPACK_IMPORTED_MODULE_18__["TestplansService"], _testruns_service__WEBPACK_IMPORTED_MODULE_19__["TestrunsService"], _usergroups_service__WEBPACK_IMPORTED_MODULE_20__["UsergroupsService"], _users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"]];


/***/ }),

/***/ "./src/app/jama/api/attachments.service.ts":
/*!*************************************************!*\
  !*** ./src/app/jama/api/attachments.service.ts ***!
  \*************************************************/
/*! exports provided: AttachmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsService", function() { return AttachmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var AttachmentsService = /** @class */ (function () {
    function AttachmentsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    AttachmentsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    AttachmentsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Download attachment file from the attachment with the specified ID
     *
     * @param attachmentId
     */
    AttachmentsService.prototype.downloadFile = function (attachmentId) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling downloadFile.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/file", {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the attachment with the specified ID
     *
     * @param attachmentId
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getAttachmentItem = function (attachmentId, include) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getAttachmentItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all comments for the item with the specified ID
     *
     * @param attachmentId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param rootCommentsOnly
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getItemComments = function (attachmentId, startAt, maxResults, rootCommentsOnly, include) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getItemComments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (rootCommentsOnly !== undefined) {
            queryParameters = queryParameters.set('rootCommentsOnly', rootCommentsOnly);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/comments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the locked state, last locked date, and last locked by user for the item with the specified ID
     *
     * @param attachmentId
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getLock = function (attachmentId, include) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getLock.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/lock", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param attachmentId
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getVersionOnItem1 = function (versionNum, attachmentId, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem1.');
        }
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getVersionOnItem1.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the attachment at the specified version
     *
     * @param versionNum
     * @param attachmentId
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getVersionedItem1 = function (versionNum, attachmentId, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem1.');
        }
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getVersionedItem1.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param attachmentId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    AttachmentsService.prototype.getVersionsOnItem1 = function (attachmentId, startAt, maxResults, include) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling getVersionsOnItem1.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the locked state of the item with the specified ID
     *
     * @param body
     * @param attachmentId
     */
    AttachmentsService.prototype.updateLock = function (body, attachmentId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLock.');
        }
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling updateLock.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/lock", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Upload attachment file to the attachment with the specified ID
     *
     * @param attachmentId
     * @param body
     */
    AttachmentsService.prototype.uploadFile = function (attachmentId, body) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling uploadFile.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/attachments/" + encodeURIComponent(String(attachmentId)) + "/file", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    AttachmentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], AttachmentsService);
    return AttachmentsService;
}());



/***/ }),

/***/ "./src/app/jama/api/baselines.service.ts":
/*!***********************************************!*\
  !*** ./src/app/jama/api/baselines.service.ts ***!
  \***********************************************/
/*! exports provided: BaselinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselinesService", function() { return BaselinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var BaselinesService = /** @class */ (function () {
    function BaselinesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    BaselinesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    BaselinesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the baseline with the specified ID
     *
     * @param baselineId
     * @param include Links to include as full objects in the linked map
     */
    BaselinesService.prototype.getBaseline = function (baselineId, include) {
        if (baselineId === null || baselineId === undefined) {
            throw new Error('Required parameter baselineId was null or undefined when calling getBaseline.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/baselines/" + encodeURIComponent(String(baselineId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all baselines in the project with the specified ID
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    BaselinesService.prototype.getBaselines = function (project, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getBaselines.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/baselines", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versioned relationships for the item in the baseline
     *
     * @param itemId
     * @param baselineId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    BaselinesService.prototype.getRelationshipsForVersion = function (itemId, baselineId, startAt, maxResults, include) {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getRelationshipsForVersion.');
        }
        if (baselineId === null || baselineId === undefined) {
            throw new Error('Required parameter baselineId was null or undefined when calling getRelationshipsForVersion.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/baselines/" + encodeURIComponent(String(baselineId)) + "/versioneditems/" + encodeURIComponent(String(itemId)) + "/versionedrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the baseline item with the specified ID in a baseline with the specified ID
     *
     * @param itemId
     * @param baselineId
     * @param include Links to include as full objects in the linked map
     */
    BaselinesService.prototype.getVersionedItem = function (itemId, baselineId, include) {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getVersionedItem.');
        }
        if (baselineId === null || baselineId === undefined) {
            throw new Error('Required parameter baselineId was null or undefined when calling getVersionedItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/baselines/" + encodeURIComponent(String(baselineId)) + "/versioneditems/" + encodeURIComponent(String(itemId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all baseline items in a baseline with the specified ID
     *
     * @param baselineId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    BaselinesService.prototype.getVersionedItems = function (baselineId, startAt, maxResults, include) {
        if (baselineId === null || baselineId === undefined) {
            throw new Error('Required parameter baselineId was null or undefined when calling getVersionedItems.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/baselines/" + encodeURIComponent(String(baselineId)) + "/versioneditems", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    BaselinesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], BaselinesService);
    return BaselinesService;
}());



/***/ }),

/***/ "./src/app/jama/api/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jama/api/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var CommentsService = /** @class */ (function () {
    function CommentsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    CommentsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    CommentsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new comment
     *
     * @param body
     */
    CommentsService.prototype.addComment = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addComment.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/comments", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the comment with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    CommentsService.prototype.getComment = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getComment.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/comments/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all comments viewable by the current user
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param rootCommentsOnly whether to show only root comments; true to get only root comments, without their comment replies
     * @param include Links to include as full objects in the linked map
     */
    CommentsService.prototype.getComments = function (startAt, maxResults, rootCommentsOnly, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (rootCommentsOnly !== undefined) {
            queryParameters = queryParameters.set('rootCommentsOnly', rootCommentsOnly);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/comments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all reply comments for the comment with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    CommentsService.prototype.getReplies = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getReplies.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/comments/" + encodeURIComponent(String(id)) + "/replies", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/jama/api/files.service.ts":
/*!*******************************************!*\
  !*** ./src/app/jama/api/files.service.ts ***!
  \*******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var FilesService = /** @class */ (function () {
    function FilesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    FilesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    FilesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Download attachment file from the attachment with the specified Jama URL
     *
     * @param url
     */
    FilesService.prototype.downloadFile = function (url) {
        if (url === null || url === undefined) {
            throw new Error('Required parameter url was null or undefined when calling downloadFile.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (url !== undefined) {
            queryParameters = queryParameters.set('url', url);
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/files", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/jama/api/filters.service.ts":
/*!*********************************************!*\
  !*** ./src/app/jama/api/filters.service.ts ***!
  \*********************************************/
/*! exports provided: FiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return FiltersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var FiltersService = /** @class */ (function () {
    function FiltersService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    FiltersService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    FiltersService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the filter with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    FiltersService.prototype.getFilter = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getFilter.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/filters/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all filters in the project with the specified ID viewable by the current user
     *
     * @param project
     * @param author
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    FiltersService.prototype.getFilters = function (project, author, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getFilters.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (author !== undefined) {
            queryParameters = queryParameters.set('author', author);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/filters", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all result items for the filter with the specified ID
     *
     * @param id
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    FiltersService.prototype.getResults = function (id, project, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getResults.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/filters/" + encodeURIComponent(String(id)) + "/results", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    FiltersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], FiltersService);
    return FiltersService;
}());



/***/ }),

/***/ "./src/app/jama/api/items.service.ts":
/*!*******************************************!*\
  !*** ./src/app/jama/api/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ItemsService = /** @class */ (function () {
    function ItemsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ItemsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ItemsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Add an existing attachment to the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.addAttachmentToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addAttachmentToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addAttachmentToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/attachments", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new item
     *
     * @param body
     * @param setGlobalIdManually This value must be set to true if you attempt to manually set the Global ID field of an item
     */
    ItemsService.prototype.addItem = function (body, setGlobalIdManually) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (setGlobalIdManually !== undefined) {
            queryParameters = queryParameters.set('setGlobalIdManually', setGlobalIdManually);
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items", body, {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new link for the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.addItemLink = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/links", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing tag to the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.addTagToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTagToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addTagToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/tags", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing item from the Global ID pool of the item with the specified ID (break sync)
     *
     * @param syncedItemId
     * @param id
     */
    ItemsService.prototype.breakSyncOnItem = function (syncedItemId, id) {
        if (syncedItemId === null || syncedItemId === undefined) {
            throw new Error('Required parameter syncedItemId was null or undefined when calling breakSyncOnItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling breakSyncOnItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/synceditems/" + encodeURIComponent(String(syncedItemId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing item to the Global ID pool of the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.connectItemToGlobalIDPool = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling connectItemToGlobalIDPool.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling connectItemToGlobalIDPool.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/synceditems", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the item with the specified ID (item becomes inactive and can be un-deleted if necessary)
     *
     * @param id
     */
    ItemsService.prototype.deleteItem = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the link with the specified ID
     *
     * @param linkId
     * @param id
     */
    ItemsService.prototype.deleteItemLink = function (linkId, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling deleteItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a duplicate of item
     * Copies the name and description fields. Only items without children can be have a duplicate created.
     * @param id
     * @param body
     */
    ItemsService.prototype.duplicateItem = function (id, body) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling duplicateItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/duplicate", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Executes a workflow transition for the item with the specified ID. Valid transitions can be found at /items/{id}/workflowtransitionoptions
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.executeTransition = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling executeTransition.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling executeTransition.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/workflowtransitions", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all activities for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getActivities = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivities.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/activities", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all attachments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getAttachments = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAttachments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/attachments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all children items for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getChildItems = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getChildItems.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/children", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream related items for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getDownstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/downstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream relationships for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getDownstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/downstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getItem = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all comments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param rootCommentsOnly
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getItemComments = function (id, startAt, maxResults, rootCommentsOnly, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemComments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (rootCommentsOnly !== undefined) {
            queryParameters = queryParameters.set('rootCommentsOnly', rootCommentsOnly);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/comments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all links for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getItemLinks = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemLinks.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/links", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all items in the project with the specified ID
     *
     * @param project
     * @param rootOnly Set this to true to only get root-level nodes from the item tree
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getItems = function (project, rootOnly, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getItems.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (rootOnly !== undefined) {
            queryParameters = queryParameters.set('rootOnly', rootOnly);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the link with the specified ID
     *
     * @param linkId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getLinkById = function (linkId, id, include) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getLinkById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLinkById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the location for the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getLocation = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLocation.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/location", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the locked state, last locked date, and last locked by user for the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getLock = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLock.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/lock", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the parent item for the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getParentItem = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getParentItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/parent", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all synchronized items for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getSyncItems = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSyncItems.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/synceditems", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the sync status for the synced item with the specified ID
     *
     * @param syncedItemId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getSyncStatus = function (syncedItemId, id, include) {
        if (syncedItemId === null || syncedItemId === undefined) {
            throw new Error('Required parameter syncedItemId was null or undefined when calling getSyncStatus.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSyncStatus.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/synceditems/" + encodeURIComponent(String(syncedItemId)) + "/syncstatus", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the tag with the specified ID
     *
     * @param tagId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getTagOnItem = function (tagId, id, include) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling getTagOnItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all tags for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getTagsOnItem = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagsOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/tags", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream related items for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getUpstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/upstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream relationships for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getUpstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/upstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getVersionOnItem2 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem2.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionOnItem2.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the item at the specified version
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getVersionedItem2 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem2.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionedItem2.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getVersionsOnItem2 = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionsOnItem2.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all valid workflow transitions that can be made on the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemsService.prototype.getWorkflowTransitionOptions = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getWorkflowTransitionOptions.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/workflowtransitionoptions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.patchItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling patchItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.patch(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the item with the specified ID
     *
     * @param body
     * @param id
     * @param setGlobalIdManually This value must be set to true if you attempt to manually set the Global ID field of an item
     */
    ItemsService.prototype.putItem = function (body, id, setGlobalIdManually) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (setGlobalIdManually !== undefined) {
            queryParameters = queryParameters.set('setGlobalIdManually', setGlobalIdManually);
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)), body, {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing attachment from the item
     *
     * @param attachmentId
     * @param id
     */
    ItemsService.prototype.removeAttachmentFromItem = function (attachmentId, id) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling removeAttachmentFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeAttachmentFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/attachments/" + encodeURIComponent(String(attachmentId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing tag from the item with the specified ID
     *
     * @param tagId
     * @param id
     */
    ItemsService.prototype.removeTagFromItem = function (tagId, id) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling removeTagFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeTagFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the link with the specified ID
     *
     * @param linkId
     * @param body
     * @param id
     */
    ItemsService.prototype.updateItemLink = function (linkId, body, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling updateItemLink.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the location for the item with the specified ID as an asynchronous request (a successful response signifies that the work was started and a work identifier is given. This identifier will be used in a future feature). Any child items are moved along with this item. Note that this currently only supports moving items between projects
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.updateLocation = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLocation.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLocation.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/location", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the locked state of the item with the specified ID
     *
     * @param body
     * @param id
     */
    ItemsService.prototype.updateLock = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLock.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLock.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/items/" + encodeURIComponent(String(id)) + "/lock", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/jama/api/itemtypes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/jama/api/itemtypes.service.ts ***!
  \***********************************************/
/*! exports provided: ItemtypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemtypesService", function() { return ItemtypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ItemtypesService = /** @class */ (function () {
    function ItemtypesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ItemtypesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ItemtypesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the item type with the specified ID
     *
     * @param itemTypeId
     * @param include Links to include as full objects in the linked map
     */
    ItemtypesService.prototype.getItem = function (itemTypeId, include) {
        if (itemTypeId === null || itemTypeId === undefined) {
            throw new Error('Required parameter itemTypeId was null or undefined when calling getItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/itemtypes/" + encodeURIComponent(String(itemTypeId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all item types
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ItemtypesService.prototype.getItemTypes = function (startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/itemtypes", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    ItemtypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ItemtypesService);
    return ItemtypesService;
}());



/***/ }),

/***/ "./src/app/jama/api/picklistoptions.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/jama/api/picklistoptions.service.ts ***!
  \*****************************************************/
/*! exports provided: PicklistoptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistoptionsService", function() { return PicklistoptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var PicklistoptionsService = /** @class */ (function () {
    function PicklistoptionsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PicklistoptionsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PicklistoptionsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the pick list option with the specified ID
     *
     * @param picklistOptionId
     * @param include Links to include as full objects in the linked map
     */
    PicklistoptionsService.prototype.getPicklistOption = function (picklistOptionId, include) {
        if (picklistOptionId === null || picklistOptionId === undefined) {
            throw new Error('Required parameter picklistOptionId was null or undefined when calling getPicklistOption.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/picklistoptions/" + encodeURIComponent(String(picklistOptionId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the pick list option with the specified ID
     *
     * @param body
     * @param picklistOptionId
     */
    PicklistoptionsService.prototype.updatePicklistOption = function (body, picklistOptionId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePicklistOption.');
        }
        if (picklistOptionId === null || picklistOptionId === undefined) {
            throw new Error('Required parameter picklistOptionId was null or undefined when calling updatePicklistOption.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/picklistoptions/" + encodeURIComponent(String(picklistOptionId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    PicklistoptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], PicklistoptionsService);
    return PicklistoptionsService;
}());



/***/ }),

/***/ "./src/app/jama/api/picklists.service.ts":
/*!***********************************************!*\
  !*** ./src/app/jama/api/picklists.service.ts ***!
  \***********************************************/
/*! exports provided: PicklistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistsService", function() { return PicklistsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var PicklistsService = /** @class */ (function () {
    function PicklistsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PicklistsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PicklistsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new pick list option for the pick list with the specified ID
     *
     * @param body
     * @param picklistId
     */
    PicklistsService.prototype.addPickListOptionToPickList = function (body, picklistId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPickListOptionToPickList.');
        }
        if (picklistId === null || picklistId === undefined) {
            throw new Error('Required parameter picklistId was null or undefined when calling addPickListOptionToPickList.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/picklists/" + encodeURIComponent(String(picklistId)) + "/options", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the pick list with the specified ID
     *
     * @param picklistId
     * @param include Links to include as full objects in the linked map
     */
    PicklistsService.prototype.getPickList = function (picklistId, include) {
        if (picklistId === null || picklistId === undefined) {
            throw new Error('Required parameter picklistId was null or undefined when calling getPickList.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/picklists/" + encodeURIComponent(String(picklistId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all pick list options for the pick list with the specified ID
     *
     * @param picklistId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    PicklistsService.prototype.getPickListOptions = function (picklistId, startAt, maxResults, include) {
        if (picklistId === null || picklistId === undefined) {
            throw new Error('Required parameter picklistId was null or undefined when calling getPickListOptions.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/picklists/" + encodeURIComponent(String(picklistId)) + "/options", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all pick lists
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    PicklistsService.prototype.getPickLists = function (startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/picklists", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    PicklistsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], PicklistsService);
    return PicklistsService;
}());



/***/ }),

/***/ "./src/app/jama/api/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jama/api/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ProjectsService = /** @class */ (function () {
    function ProjectsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ProjectsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ProjectsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new project
     *
     * @param body
     */
    ProjectsService.prototype.addProject = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addProject.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/projects", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all item types for the project with the specified ID
     *
     * @param projectId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ProjectsService.prototype.getItemTypesInProject = function (projectId, startAt, maxResults, include) {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getItemTypesInProject.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/projects/" + encodeURIComponent(String(projectId)) + "/itemtypes", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the project with the specified ID
     *
     * @param projectId
     * @param include Links to include as full objects in the linked map
     */
    ProjectsService.prototype.getProject = function (projectId, include) {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getProject.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/projects/" + encodeURIComponent(String(projectId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all projects
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ProjectsService.prototype.getProjects = function (startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/projects", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all tags for the project with the specified ID
     *
     * @param projectId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ProjectsService.prototype.getTagsInProject = function (projectId, startAt, maxResults, include) {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getTagsInProject.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/projects/" + encodeURIComponent(String(projectId)) + "/tags", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new attachment in the project with the specified ID
     *
     * @param body
     * @param projectId
     */
    ProjectsService.prototype.postAttachment = function (body, projectId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postAttachment.');
        }
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling postAttachment.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/projects/" + encodeURIComponent(String(projectId)) + "/attachments", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the project with the specified ID
     *
     * @param body
     * @param projectId
     */
    ProjectsService.prototype.putProject = function (body, projectId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putProject.');
        }
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling putProject.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/projects/" + encodeURIComponent(String(projectId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/jama/api/relationships.service.ts":
/*!***************************************************!*\
  !*** ./src/app/jama/api/relationships.service.ts ***!
  \***************************************************/
/*! exports provided: RelationshipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipsService", function() { return RelationshipsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var RelationshipsService = /** @class */ (function () {
    function RelationshipsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RelationshipsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RelationshipsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Remove an existing suspect link for the relationship with the specified ID
     *
     * @param relationshipId
     */
    RelationshipsService.prototype.clearSuspectLink = function (relationshipId) {
        if (relationshipId === null || relationshipId === undefined) {
            throw new Error('Required parameter relationshipId was null or undefined when calling clearSuspectLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/relationships/" + encodeURIComponent(String(relationshipId)) + "/suspect", {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new relationship
     *
     * @param body
     */
    RelationshipsService.prototype.createRelationship = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createRelationship.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/relationships", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the relationship with the specified ID
     *
     * @param relationshipId
     */
    RelationshipsService.prototype.deleteRelationship = function (relationshipId) {
        if (relationshipId === null || relationshipId === undefined) {
            throw new Error('Required parameter relationshipId was null or undefined when calling deleteRelationship.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/relationships/" + encodeURIComponent(String(relationshipId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the relationship with the specified ID
     *
     * @param relationshipId
     * @param include Links to include as full objects in the linked map
     */
    RelationshipsService.prototype.getRelationship = function (relationshipId, include) {
        if (relationshipId === null || relationshipId === undefined) {
            throw new Error('Required parameter relationshipId was null or undefined when calling getRelationship.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/relationships/" + encodeURIComponent(String(relationshipId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all relationships in the project with the specified ID
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    RelationshipsService.prototype.getRelationships = function (project, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/relationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the relationship with the specified ID
     *
     * @param body
     * @param relationshipId
     */
    RelationshipsService.prototype.updateRelationship = function (body, relationshipId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateRelationship.');
        }
        if (relationshipId === null || relationshipId === undefined) {
            throw new Error('Required parameter relationshipId was null or undefined when calling updateRelationship.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/relationships/" + encodeURIComponent(String(relationshipId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    RelationshipsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], RelationshipsService);
    return RelationshipsService;
}());



/***/ }),

/***/ "./src/app/jama/api/relationshiptypes.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/jama/api/relationshiptypes.service.ts ***!
  \*******************************************************/
/*! exports provided: RelationshiptypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshiptypesService", function() { return RelationshiptypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var RelationshiptypesService = /** @class */ (function () {
    function RelationshiptypesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RelationshiptypesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RelationshiptypesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the relationship type with the specified ID
     *
     * @param id
     * @param timestamp Get relationship type at this date and time. Requires ISO8601 formatting (milliseconds or seconds) - \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ\&quot; or \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ\&quot;
     * @param include Links to include as full objects in the linked map
     */
    RelationshiptypesService.prototype.getRelationshipType = function (id, timestamp, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRelationshipType.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (timestamp !== undefined) {
            queryParameters = queryParameters.set('timestamp', timestamp);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/relationshiptypes/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all relationship types
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    RelationshiptypesService.prototype.getRelationshipTypes = function (startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/relationshiptypes", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    RelationshiptypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], RelationshiptypesService);
    return RelationshiptypesService;
}());



/***/ }),

/***/ "./src/app/jama/api/releases.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jama/api/releases.service.ts ***!
  \**********************************************/
/*! exports provided: ReleasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function() { return ReleasesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ReleasesService = /** @class */ (function () {
    function ReleasesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ReleasesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ReleasesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new release
     *
     * @param body
     */
    ReleasesService.prototype.addRelease = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addRelease.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/releases", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the release with the specified ID
     *
     * @param releaseId
     * @param include Links to include as full objects in the linked map
     */
    ReleasesService.prototype.getRelease = function (releaseId, include) {
        if (releaseId === null || releaseId === undefined) {
            throw new Error('Required parameter releaseId was null or undefined when calling getRelease.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/releases/" + encodeURIComponent(String(releaseId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all releases in the project with the specified ID
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    ReleasesService.prototype.getReleases = function (project, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getReleases.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/releases", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the release with the specified ID
     *
     * @param body
     * @param releaseId
     */
    ReleasesService.prototype.putRelease = function (body, releaseId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putRelease.');
        }
        if (releaseId === null || releaseId === undefined) {
            throw new Error('Required parameter releaseId was null or undefined when calling putRelease.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/releases/" + encodeURIComponent(String(releaseId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    ReleasesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ReleasesService);
    return ReleasesService;
}());



/***/ }),

/***/ "./src/app/jama/api/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/jama/api/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var SystemService = /** @class */ (function () {
    function SystemService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SystemService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SystemService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Get the current CORS domain whitelist
     *
     */
    SystemService.prototype.getDomains = function () {
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/system/settings/corsdomains", {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update CORS domain whitelist
     *
     * @param body
     */
    SystemService.prototype.setDomains = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling setDomains.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/system/settings/corsdomains", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    SystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/jama/api/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/jama/api/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var TagsService = /** @class */ (function () {
    function TagsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TagsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TagsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new tag in the project with the specified ID
     *
     * @param body
     */
    TagsService.prototype.addTagToProject = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTagToProject.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/tags", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the tag with the specified ID
     *
     * @param id
     */
    TagsService.prototype.deleteTag = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTag.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/tags/" + encodeURIComponent(String(id)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all items that have the tag with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TagsService.prototype.getItemsUsingTag = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemsUsingTag.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/tags/" + encodeURIComponent(String(id)) + "/items", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the tag with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TagsService.prototype.getTag = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTag.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/tags/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all tags for the project with the specified ID
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TagsService.prototype.getTagsInProject = function (project, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getTagsInProject.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/tags", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the tag with the specified ID
     *
     * @param body
     * @param id
     */
    TagsService.prototype.putTag = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putTag.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putTag.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/tags/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/jama/api/testcycles.service.ts":
/*!************************************************!*\
  !*** ./src/app/jama/api/testcycles.service.ts ***!
  \************************************************/
/*! exports provided: TestcyclesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcyclesService", function() { return TestcyclesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var TestcyclesService = /** @class */ (function () {
    function TestcyclesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TestcyclesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TestcyclesService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Delete the test cycle with the specified ID, including the test runs in the test cycle
     *
     * @param testCycleId
     */
    TestcyclesService.prototype.deleteTestCycle = function (testCycleId) {
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling deleteTestCycle.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test cycle with the specified ID
     *
     * @param testCycleId
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getTestCycle = function (testCycleId, include) {
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getTestCycle.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test cycle test group for the test cycle with the specified ID
     *
     * @param testGroupId Get the test group with the specified ID
     * @param testCycleId
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getTestCycleTestGroup = function (testGroupId, testCycleId, include) {
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling getTestCycleTestGroup.');
        }
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getTestCycleTestGroup.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)) + "/testgroup/" + encodeURIComponent(String(testGroupId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all test runs for the test cycle with the specified ID
     *
     * @param testCycleId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getTestRuns = function (testCycleId, startAt, maxResults, include) {
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getTestRuns.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)) + "/testruns", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param testCycleId
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getVersionOnItem3 = function (versionNum, testCycleId, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem3.');
        }
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getVersionOnItem3.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the test cycle at the specified version
     *
     * @param versionNum
     * @param testCycleId
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getVersionedItem3 = function (versionNum, testCycleId, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem3.');
        }
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getVersionedItem3.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param testCycleId
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestcyclesService.prototype.getVersionsOnItem3 = function (testCycleId, startAt, maxResults, include) {
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling getVersionsOnItem3.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the test cycle with the specified ID, including regenerating the test runs in the test cycle
     *
     * @param body
     * @param testCycleId
     */
    TestcyclesService.prototype.patchTestCycle = function (body, testCycleId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchTestCycle.');
        }
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling patchTestCycle.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.patch(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the test cycle with the specified ID, including regenerating the test runs in the test cycle
     *
     * @param body
     * @param testCycleId
     */
    TestcyclesService.prototype.updateTestCycle = function (body, testCycleId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateTestCycle.');
        }
        if (testCycleId === null || testCycleId === undefined) {
            throw new Error('Required parameter testCycleId was null or undefined when calling updateTestCycle.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testcycles/" + encodeURIComponent(String(testCycleId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    TestcyclesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], TestcyclesService);
    return TestcyclesService;
}());



/***/ }),

/***/ "./src/app/jama/api/testplans.service.ts":
/*!***********************************************!*\
  !*** ./src/app/jama/api/testplans.service.ts ***!
  \***********************************************/
/*! exports provided: TestplansService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestplansService", function() { return TestplansService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var TestplansService = /** @class */ (function () {
    function TestplansService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TestplansService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TestplansService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Add an existing attachment to the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.addAttachmentToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addAttachmentToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addAttachmentToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/attachments", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new link for the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.addItemLink = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/links", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing tag to the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.addTagToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTagToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addTagToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/tags", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new test group to the test plan with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.addTestGroup = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTestGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addTestGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new test cycle
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.createTestCycle = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createTestCycle.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createTestCycle.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testcycles", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new test plan
     *
     * @param body
     */
    TestplansService.prototype.createTestPlan = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createTestPlan.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the link with the specified ID
     *
     * @param linkId
     * @param id
     */
    TestplansService.prototype.deleteItemLink = function (linkId, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling deleteItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing test case from the test group
     *
     * @param testCaseId
     * @param testGroupId
     * @param id
     */
    TestplansService.prototype.deleteTestCase = function (testCaseId, testGroupId, id) {
        if (testCaseId === null || testCaseId === undefined) {
            throw new Error('Required parameter testCaseId was null or undefined when calling deleteTestCase.');
        }
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling deleteTestCase.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTestCase.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)) + "/testcases/" + encodeURIComponent(String(testCaseId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the test group with the specified ID
     *
     * @param testGroupId
     * @param id
     */
    TestplansService.prototype.deleteTestGroup = function (testGroupId, id) {
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling deleteTestGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTestGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the test plan with the specified ID
     *
     * @param id
     */
    TestplansService.prototype.deleteTestPlan = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTestPlan.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all activities for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getActivities = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivities.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/activities", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all attachments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getAttachments = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAttachments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/attachments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream related items for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getDownstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/downstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream relationships for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getDownstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/downstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all comments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param rootCommentsOnly
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getItemComments = function (id, startAt, maxResults, rootCommentsOnly, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemComments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (rootCommentsOnly !== undefined) {
            queryParameters = queryParameters.set('rootCommentsOnly', rootCommentsOnly);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/comments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all links for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getItemLinks = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemLinks.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/links", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the link with the specified ID
     *
     * @param linkId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getLinkById = function (linkId, id, include) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getLinkById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLinkById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the locked state, last locked date, and last locked by user for the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getLock = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLock.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/lock", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the tag with the specified ID
     *
     * @param tagId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTagOnItem = function (tagId, id, include) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling getTagOnItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all tags for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTagsOnItem = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagsOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/tags", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test case with the specified ID
     *
     * @param testCaseId
     * @param testGroupId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestCaseById = function (testCaseId, testGroupId, id, include) {
        if (testCaseId === null || testCaseId === undefined) {
            throw new Error('Required parameter testCaseId was null or undefined when calling getTestCaseById.');
        }
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling getTestCaseById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestCaseById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)) + "/testcases/" + encodeURIComponent(String(testCaseId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all test cases associated with the test group with the specified ID
     *
     * @param testGroupId
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestCases = function (testGroupId, id, startAt, maxResults, include) {
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling getTestCases.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestCases.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)) + "/testcases", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all test cycles for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestCycles = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestCycles.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testcycles", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test group with the specified ID
     *
     * @param testGroupId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestGroupById = function (testGroupId, id, include) {
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling getTestGroupById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestGroupById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all test groups for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestGroups = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestGroups.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test plan with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestPlan = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestPlan.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all test plans in the project with the specified ID
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getTestPlans = function (project, startAt, maxResults, include) {
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling getTestPlans.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream related items for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getUpstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/upstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream relationships for the test plan with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getUpstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/upstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getVersionOnItem4 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem4.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionOnItem4.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the test plan at the specified version
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getVersionedItem4 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem4.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionedItem4.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestplansService.prototype.getVersionsOnItem4 = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionsOnItem4.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the test plan with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.patchTestPlan = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchTestPlan.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling patchTestPlan.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.patch(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing test case to the test group with the specified ID
     *
     * @param body
     * @param testGroupId
     * @param id
     */
    TestplansService.prototype.postTestCase = function (body, testGroupId, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postTestCase.');
        }
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling postTestCase.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postTestCase.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)) + "/testcases", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing attachment from the item
     *
     * @param attachmentId
     * @param id
     */
    TestplansService.prototype.removeAttachmentFromItem = function (attachmentId, id) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling removeAttachmentFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeAttachmentFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/attachments/" + encodeURIComponent(String(attachmentId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing tag from the item with the specified ID
     *
     * @param tagId
     * @param id
     */
    TestplansService.prototype.removeTagFromItem = function (tagId, id) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling removeTagFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeTagFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the archived status of the test plan
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.toggleArchivedStatus = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling toggleArchivedStatus.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling toggleArchivedStatus.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/archived", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the link with the specified ID
     *
     * @param linkId
     * @param body
     * @param id
     */
    TestplansService.prototype.updateItemLink = function (linkId, body, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling updateItemLink.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the locked state of the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.updateLock = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLock.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLock.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/lock", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the test group with the specified ID
     *
     * @param testGroupId
     * @param body
     * @param id
     */
    TestplansService.prototype.updateTestGroup = function (testGroupId, body, id) {
        if (testGroupId === null || testGroupId === undefined) {
            throw new Error('Required parameter testGroupId was null or undefined when calling updateTestGroup.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateTestGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTestGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)) + "/testgroups/" + encodeURIComponent(String(testGroupId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the test plan with the specified ID
     *
     * @param body
     * @param id
     */
    TestplansService.prototype.updateTestPlan = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateTestPlan.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTestPlan.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testplans/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    TestplansService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], TestplansService);
    return TestplansService;
}());



/***/ }),

/***/ "./src/app/jama/api/testruns.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jama/api/testruns.service.ts ***!
  \**********************************************/
/*! exports provided: TestrunsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestrunsService", function() { return TestrunsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var TestrunsService = /** @class */ (function () {
    function TestrunsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.configuration.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TestrunsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TestrunsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Add an existing attachment to the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.addAttachmentToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addAttachmentToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addAttachmentToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/attachments", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Create a new link for the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.addItemLink = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/links", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing tag to the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.addTagToItem = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTagToItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addTagToItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/tags", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the link with the specified ID
     *
     * @param linkId
     * @param id
     */
    TestrunsService.prototype.deleteItemLink = function (linkId, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling deleteItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the test run with the specified ID
     *
     * @param id
     */
    TestrunsService.prototype.deleteTestRun = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTestRun.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all activities for the test run with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getActivities = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivities.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/activities", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all attachments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getAttachments = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAttachments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/attachments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream related items for the test run with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getDownstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/downstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all downstream relationships for the test run with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getDownstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDownstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/downstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all comments for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param rootCommentsOnly
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getItemComments = function (id, startAt, maxResults, rootCommentsOnly, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemComments.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (rootCommentsOnly !== undefined) {
            queryParameters = queryParameters.set('rootCommentsOnly', rootCommentsOnly);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/comments", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all links for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getItemLinks = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemLinks.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/links", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the link with the specified ID
     *
     * @param linkId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getLinkById = function (linkId, id, include) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getLinkById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLinkById.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the locked state, last locked date, and last locked by user for the item with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getLock = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLock.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/lock", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the tag with the specified ID
     *
     * @param tagId
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getTagOnItem = function (tagId, id, include) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling getTagOnItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all tags for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getTagsOnItem = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTagsOnItem.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/tags", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the test run with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getTestRun = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestRun.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Search for test runs associated with test cases, test plans, an test cycles
     * Must include at least one query parameter from testCycle, testCase, or testPlan
     * @param testCycle Filter by test runs in test cycle id
     * @param testCase Filter by test runs from test case id
     * @param testPlan Filter by test runs in test plan id
     * @param sortBy Sort orders can be added with the name of the field by which to sort, followed by .asc or .desc (e.g. &#39;name.asc&#39; or &#39;testCycle.desc&#39;). If not set, this defaults to documentKey.asc.
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getTestRuns = function (testCycle, testCase, testPlan, sortBy, startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (testCycle) {
            testCycle.forEach(function (element) {
                queryParameters = queryParameters.append('testCycle', element);
            });
        }
        if (testCase) {
            testCase.forEach(function (element) {
                queryParameters = queryParameters.append('testCase', element);
            });
        }
        if (testPlan) {
            testPlan.forEach(function (element) {
                queryParameters = queryParameters.append('testPlan', element);
            });
        }
        if (sortBy) {
            sortBy.forEach(function (element) {
                queryParameters = queryParameters.append('sortBy', element);
            });
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream related items for the test run with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getUpstreamRelated = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelated.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/upstreamrelated", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all upstream relationships for the test run with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getUpstreamRelationships = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUpstreamRelationships.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/upstreamrelationships", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the numbered version for the item with the specified ID
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getVersionOnItem5 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionOnItem5.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionOnItem5.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the  snapshot of the test run at the specified version
     *
     * @param versionNum
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getVersionedItem5 = function (versionNum, id, include) {
        if (versionNum === null || versionNum === undefined) {
            throw new Error('Required parameter versionNum was null or undefined when calling getVersionedItem5.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionedItem5.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/versions/" + encodeURIComponent(String(versionNum)) + "/versioneditem", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all versions for the item with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    TestrunsService.prototype.getVersionsOnItem5 = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVersionsOnItem5.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/versions", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the current test run and then create a new test run based on the latest test case version.
     *
     * @param id
     */
    TestrunsService.prototype.makeTestRunCurrent = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling makeTestRunCurrent.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/updatedtestcase", {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the execution results for the test run with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.patchTestRun = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchTestRun.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling patchTestRun.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.patch(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing attachment from the item
     *
     * @param attachmentId
     * @param id
     */
    TestrunsService.prototype.removeAttachmentFromItem = function (attachmentId, id) {
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling removeAttachmentFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeAttachmentFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/attachments/" + encodeURIComponent(String(attachmentId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing tag from the item with the specified ID
     *
     * @param tagId
     * @param id
     */
    TestrunsService.prototype.removeTagFromItem = function (tagId, id) {
        if (tagId === null || tagId === undefined) {
            throw new Error('Required parameter tagId was null or undefined when calling removeTagFromItem.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeTagFromItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/tags/" + encodeURIComponent(String(tagId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the link with the specified ID
     *
     * @param linkId
     * @param body
     * @param id
     */
    TestrunsService.prototype.updateItemLink = function (linkId, body, id) {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling updateItemLink.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateItemLink.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateItemLink.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/links/" + encodeURIComponent(String(linkId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the locked state of the item with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.updateLock = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLock.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLock.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)) + "/lock", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the execution results for the test run with the specified ID
     *
     * @param body
     * @param id
     */
    TestrunsService.prototype.updateTestRun = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateTestRun.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTestRun.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/testruns/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    TestrunsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], TestrunsService);
    return TestrunsService;
}());



/***/ }),

/***/ "./src/app/jama/api/usergroups.service.ts":
/*!************************************************!*\
  !*** ./src/app/jama/api/usergroups.service.ts ***!
  \************************************************/
/*! exports provided: UsergroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupsService", function() { return UsergroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var UsergroupsService = /** @class */ (function () {
    function UsergroupsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    UsergroupsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    UsergroupsService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new user group
     *
     * @param body
     */
    UsergroupsService.prototype.addUserGroup = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addUserGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/usergroups", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Add an existing user to the user group with the specified ID
     *
     * @param body
     * @param id
     */
    UsergroupsService.prototype.addUserToGroup = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addUserToGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addUserToGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)) + "/users", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Delete the user group with the specified ID
     *
     * @param id
     */
    UsergroupsService.prototype.deleteItem = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItem.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the user group with the specified ID
     *
     * @param id
     * @param include Links to include as full objects in the linked map
     */
    UsergroupsService.prototype.getGroup = function (id, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getGroup.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all users for the user group with the specified ID
     *
     * @param id
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    UsergroupsService.prototype.getGroupUsers = function (id, startAt, maxResults, include) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getGroupUsers.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)) + "/users", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all user groups
     *
     * @param project
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    UsergroupsService.prototype.getUsers = function (project, startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (project !== undefined) {
            queryParameters = queryParameters.set('project', project);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/usergroups", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Remove an existing user from the user group with the specified ID
     *
     * @param userId
     * @param id
     */
    UsergroupsService.prototype.removeUserFromGroup = function (userId, id) {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling removeUserFromGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeUserFromGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.delete(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)) + "/users/" + encodeURIComponent(String(userId)), {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the user group with the specified ID
     *
     * @param body
     * @param id
     */
    UsergroupsService.prototype.updateUserGroup = function (body, id) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUserGroup.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUserGroup.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/usergroups/" + encodeURIComponent(String(id)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    UsergroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], UsergroupsService);
    return UsergroupsService;
}());



/***/ }),

/***/ "./src/app/jama/api/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/jama/api/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/jama/rxjs-operators.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/jama/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/jama/configuration.ts");
/**
 * Jama REST API
 * This is the documentation for the Jama REST API.
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var UsersService = /** @class */ (function () {
    function UsersService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://jama.systelab.net/contour/rest/latest';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    UsersService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    UsersService.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    /**
     * Create a new user
     *
     * @param body
     */
    UsersService.prototype.addUser = function (body) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addUser.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.post(this.configuration.basePath + "/users", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Gets the current user
     *
     * @param include Links to include as full objects in the linked map
     */
    UsersService.prototype.getCurrentUser = function (include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/users/current", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Gets the current user&#39;s favorite filters
     *
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    UsersService.prototype.getFavoriteFiltersForCurrentUser = function (startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/users/current/favoritefilters", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get the user with the specified ID
     *
     * @param userId
     * @param include Links to include as full objects in the linked map
     */
    UsersService.prototype.getUser = function (userId, include) {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUser.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/users/" + encodeURIComponent(String(userId)), {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Get all users
     *
     * @param username
     * @param email
     * @param firstName
     * @param lastName
     * @param includeInactive
     * @param startAt
     * @param maxResults If not set, this defaults to 20. This cannot be larger than 50
     * @param include Links to include as full objects in the linked map
     */
    UsersService.prototype.getUsers = function (username, email, firstName, lastName, includeInactive, startAt, maxResults, include) {
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (username !== undefined) {
            queryParameters = queryParameters.set('username', username);
        }
        if (email !== undefined) {
            queryParameters = queryParameters.set('email', email);
        }
        if (firstName !== undefined) {
            queryParameters = queryParameters.set('firstName', firstName);
        }
        if (lastName !== undefined) {
            queryParameters = queryParameters.set('lastName', lastName);
        }
        if (includeInactive !== undefined) {
            queryParameters = queryParameters.set('includeInactive', includeInactive);
        }
        if (startAt !== undefined) {
            queryParameters = queryParameters.set('startAt', startAt);
        }
        if (maxResults !== undefined) {
            queryParameters = queryParameters.set('maxResults', maxResults);
        }
        if (include) {
            include.forEach(function (element) {
                queryParameters = queryParameters.append('include', element);
            });
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.get(this.configuration.basePath + "/users", {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the user with the specified ID
     *
     * @param body
     * @param userId
     */
    UsersService.prototype.putUser = function (body, userId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putUser.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling putUser.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/users/" + encodeURIComponent(String(userId)), body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    /**
     * Update the active status for the user with the specified ID
     *
     * @param body
     * @param userId
     */
    UsersService.prototype.setActiveStatus = function (body, userId) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling setActiveStatus.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setActiveStatus.');
        }
        var headers = this.defaultHeaders;
        // authentication (basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        return this.httpClient.put(this.configuration.basePath + "/users/" + encodeURIComponent(String(userId)) + "/active", body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/jama/configuration.ts":
/*!***************************************!*\
  !*** ./src/app/jama/configuration.ts ***!
  \***************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    return Configuration;
}());



/***/ }),

/***/ "./src/app/jama/index.ts":
/*!*******************************!*\
  !*** ./src/app/jama/index.ts ***!
  \*******************************/
/*! exports provided: APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule, AbstractitemsService, ActivitiesService, AttachmentsService, BaselinesService, CommentsService, FilesService, FiltersService, ItemsService, ItemtypesService, PicklistoptionsService, PicklistsService, ProjectsService, RelationshipsService, RelationshiptypesService, ReleasesService, SystemService, TagsService, TestcyclesService, TestplansService, TestrunsService, UsergroupsService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/app/jama/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractitemsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["AbstractitemsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ActivitiesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["AttachmentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaselinesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["BaselinesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["FilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["FiltersService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ItemsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemtypesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ItemtypesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PicklistoptionsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["PicklistoptionsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PicklistsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["PicklistsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ProjectsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationshipsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["RelationshipsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationshiptypesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["RelationshiptypesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ReleasesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SystemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestcyclesService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TestcyclesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestplansService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TestplansService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestrunsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TestrunsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsergroupsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["UsergroupsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["UsersService"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/app/jama/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/jama/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.module */ "./src/app/jama/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"]; });







/***/ }),

/***/ "./src/app/jama/rxjs-operators.ts":
/*!****************************************!*\
  !*** ./src/app/jama/rxjs-operators.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// RxJS imports according to https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
// Operators


/***/ }),

/***/ "./src/app/jama/variables.ts":
/*!***********************************!*\
  !*** ./src/app/jama/variables.ts ***!
  \***********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/app/model/project-data.model.ts":
/*!*********************************************!*\
  !*** ./src/app/model/project-data.model.ts ***!
  \*********************************************/
/*! exports provided: ProjectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectData", function() { return ProjectData; });
var ProjectData = /** @class */ (function () {
    function ProjectData() {
    }
    return ProjectData;
}());



/***/ }),

/***/ "./src/app/model/testcycle-data.model.ts":
/*!***********************************************!*\
  !*** ./src/app/model/testcycle-data.model.ts ***!
  \***********************************************/
/*! exports provided: TestCycleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCycleData", function() { return TestCycleData; });
var TestCycleData = /** @class */ (function () {
    function TestCycleData() {
    }
    return TestCycleData;
}());



/***/ }),

/***/ "./src/app/model/testgroup-data.model.ts":
/*!***********************************************!*\
  !*** ./src/app/model/testgroup-data.model.ts ***!
  \***********************************************/
/*! exports provided: TestGroupData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGroupData", function() { return TestGroupData; });
var TestGroupData = /** @class */ (function () {
    function TestGroupData() {
    }
    return TestGroupData;
}());



/***/ }),

/***/ "./src/app/model/testplan-data.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/testplan-data.model.ts ***!
  \**********************************************/
/*! exports provided: TestPlanData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlanData", function() { return TestPlanData; });
var TestPlanData = /** @class */ (function () {
    function TestPlanData() {
    }
    return TestPlanData;
}());



/***/ }),

/***/ "./src/app/service/test-case.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/test-case.service.ts ***!
  \**********************************************/
/*! exports provided: TestCaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCaseService", function() { return TestCaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestCaseService = /** @class */ (function () {
    function TestCaseService() {
    }
    TestCaseService_1 = TestCaseService;
    TestCaseService.prototype.getTmsLink = function (testCase) {
        if (testCase.links) {
            var link = testCase.links.find(function (l) { return l.type === 'tms'; });
            return link ? link.name : '';
        }
        return '';
    };
    TestCaseService.prototype.getTmsDescription = function (testCase) {
        if (testCase.labels) {
            var label = testCase.labels.find(function (l) { return l.name === 'feature'; });
            return label ? label.value : '';
        }
        return '';
    };
    TestCaseService.prototype.getActualResults = function (testCase) {
        if (testCase.labels) {
            var label = testCase.labels.find(function (l) { return l.name === 'actualResults'; });
            return label ? label.value : '';
        }
        return '';
    };
    TestCaseService.prototype.followTestCaseStructure = function (elementSteps, level, isFirstStep, parentStep) {
        var steps = [];
        for (var j = 0; elementSteps && j < elementSteps.length; j++) {
            var isActionResult = false;
            var stepName = elementSteps[j].name;
            // Set isActionResult and Replace Action: and Expected result:
            if (elementSteps[j].expectedResult || stepName.includes(TestCaseService_1.STEP_TYPE_EXPECTED_RESULT)) {
                isActionResult = false;
                stepName = stepName.replace(TestCaseService_1.STEP_TYPE_EXPECTED_RESULT, '');
            }
            else {
                if (stepName && (elementSteps[j].isAction || stepName.includes(TestCaseService_1.STEP_TYPE_ACTION))) {
                    isActionResult = true;
                    stepName = stepName.replace(TestCaseService_1.STEP_TYPE_ACTION, '');
                }
            }
            if (isFirstStep && j === 0) {
                steps.push(this.addNewStep(elementSteps[j], stepName, level, isActionResult));
            }
            else {
                var previousOrParentStep = steps.length > 0 ? steps[steps.length - 1] : parentStep;
                if (isActionResult) { // Current step is an Action
                    if (previousOrParentStep.expectedResult) { // Create a new Step for the Action
                        steps.push(this.addNewStep(elementSteps[j], stepName, level, isActionResult));
                    }
                    else { // Add the action to the previous Step
                        previousOrParentStep.action = previousOrParentStep.action ? previousOrParentStep.action + this.addStepSeparator(stepName, level) : stepName;
                        if (elementSteps[j].steps && elementSteps[j].steps.length > 0) {
                            var subSteps = this.followTestCaseStructure(elementSteps[j].steps, level + 1, false, previousOrParentStep);
                            previousOrParentStep.steps = subSteps;
                        }
                    }
                }
                else { // Current Step is an Expected Result
                    if (previousOrParentStep.expectedResult) {
                        steps.push(this.addNewStep(elementSteps[j], stepName, level, isActionResult));
                    }
                    else {
                        previousOrParentStep.expectedResult = stepName;
                        if (elementSteps[j].steps && elementSteps[j].steps.length > 0) {
                            var subSteps = this.followTestCaseStructure(elementSteps[j].steps, level + 1, false, previousOrParentStep);
                            previousOrParentStep.steps = subSteps;
                        }
                    }
                }
            }
        }
        return steps;
    };
    TestCaseService.prototype.addStepSeparator = function (stepName, level) {
        var rightMargin = 2 * (level + 1);
        return '<div class="ml-' + rightMargin + '">' + stepName + '</div>';
    };
    TestCaseService.prototype.addNewStep = function (elementStep, stepName, level, isActionResult) {
        var step = {
            name: '',
            action: isActionResult ? this.addStepSeparator(stepName, level) : undefined,
            expectedResult: isActionResult ? undefined : stepName,
            status: elementStep.status,
            statusDetails: undefined,
            stage: '',
            start: Number(elementStep.start),
            stop: Number(elementStep.stop),
            parameters: [],
            steps: [],
            numberOfStep: '',
            isAction: isActionResult
        };
        if (elementStep.steps && elementStep.steps.length > 0) {
            step.steps = this.followTestCaseStructure(elementStep.steps, level + 1, false, step);
        }
        return step;
    };
    var TestCaseService_1;
    TestCaseService.STEP_TYPE_EXPECTED_RESULT = 'Expected result:';
    TestCaseService.STEP_TYPE_ACTION = 'Action:';
    TestCaseService = TestCaseService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TestCaseService);
    return TestCaseService;
}());



/***/ }),

/***/ "./src/app/service/test-suite.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/test-suite.service.ts ***!
  \***********************************************/
/*! exports provided: TestSuiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSuiteService", function() { return TestSuiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-case.service */ "./src/app/service/test-case.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestSuiteService = /** @class */ (function () {
    function TestSuiteService(testCaseService) {
        this.testCaseService = testCaseService;
    }
    TestSuiteService.prototype.parseFromDocument = function (xmlDocument) {
        var testSuite = {
            id: undefined,
            name: undefined,
            actualResults: undefined,
            testCases: []
        };
        var elementTestcases = xmlDocument.getElementsByTagName('test-cases')[0].getElementsByTagName('test-case');
        for (var i = 0; i < elementTestcases.length; i++) {
            var testCaseStatus = elementTestcases[i].getAttribute('status');
            var testCase = {
                uuid: elementTestcases[i].getElementsByTagName('name')[0].childNodes[0].nodeValue,
                historyId: '',
                labels: this.parseLabels(elementTestcases[i]),
                links: [],
                name: elementTestcases[i].getElementsByTagName('name')[0].childNodes[0].nodeValue,
                status: testCaseStatus,
                stage: '',
                description: elementTestcases[i].getElementsByTagName('title')[0].childNodes[0].nodeValue,
                start: Number(elementTestcases[i].getAttribute('start')),
                stop: Number(elementTestcases[i].getAttribute('stop')),
                steps: this.parseSteps(elementTestcases[i], testCaseStatus)
            };
            if (testCase.steps.length === 0) {
                testCase.steps.push(this.createEmptyStep(elementTestcases[i]));
            }
            for (var _i = 0, _a = testCase.labels; _i < _a.length; _i++) {
                var label = _a[_i];
                if (testSuite.id === undefined && label.name === 'tms') {
                    testSuite.id = label.value;
                }
                if (testSuite.name === undefined && label.name === 'feature') {
                    testSuite.name = label.value;
                }
                if (!testSuite.actualResults && label.name === 'actualResults') {
                    testSuite.actualResults = label.value;
                }
            }
            this.addTestCaseToTestSuite(testCase, testSuite);
        }
        if (!testSuite.id) {
            testSuite.id = xmlDocument.getElementsByTagName('name')[0].childNodes[0].nodeValue;
        }
        if (!testSuite.name) {
            testSuite.name = xmlDocument.getElementsByTagName('title')[0].childNodes[0].nodeValue;
        }
        return testSuite;
    };
    TestSuiteService.prototype.createEmptyStep = function (testCase) {
        var step = {
            name: '',
            action: '',
            expectedResult: '',
            status: testCase.getAttribute('status'),
            statusDetails: undefined,
            stage: '',
            start: Number(testCase.getAttribute('start')),
            stop: Number(testCase.getAttribute('stop')),
            parameters: [],
            steps: [],
            numberOfStep: '',
            isAction: true
        };
        return step;
    };
    TestSuiteService.prototype.queryDirectChildren = function (parent, selector) {
        var nodes = parent.querySelectorAll(selector);
        var filteredNodes = [].slice.call(nodes)
            .filter(function (n) {
            return n.parentNode.closest(selector) === parent.closest(selector);
        });
        return filteredNodes;
    };
    TestSuiteService.prototype.getStepStatus = function (currentStatus, testCaseStatus) {
        if ('failed' === testCaseStatus) {
            return testCaseStatus;
        }
        return currentStatus;
    };
    TestSuiteService.prototype.parseSteps = function (parent, testCaseStatus) {
        var steps = [];
        var elementSteps = this.queryDirectChildren(parent.getElementsByTagName('steps')[0], 'step');
        for (var i = 0; i < elementSteps.length; i++) {
            var step = {
                name: elementSteps[i].getElementsByTagName('name')[0].childNodes[0].nodeValue,
                action: '',
                expectedResult: '',
                status: this.getStepStatus(elementSteps[i].getAttribute('status'), testCaseStatus),
                statusDetails: undefined,
                stage: '',
                start: Number(elementSteps[i].getAttribute('start')),
                stop: Number(elementSteps[i].getAttribute('stop')),
                parameters: [],
                steps: [],
                numberOfStep: '',
                isAction: false
            };
            if (elementSteps[i].getElementsByTagName('steps').length > 0) {
                step.steps = this.parseSteps(elementSteps[i], testCaseStatus);
            }
            steps.push(step);
        }
        return steps;
    };
    TestSuiteService.prototype.parseLabels = function (parent) {
        var labels = [];
        var elementLabels = parent.getElementsByTagName('labels')[0].getElementsByTagName('label');
        for (var i = 0; i < elementLabels.length; i++) {
            var label = {
                name: elementLabels[i].getAttribute('name'),
                value: elementLabels[i].getAttribute('value')
            };
            labels.push(label);
        }
        return labels;
    };
    TestSuiteService.prototype.addTestCaseToTestSuite = function (testCase, testSuite) {
        var _this = this;
        var index = testSuite.testCases.findIndex(function (tc) { return tc.uuid === testCase.uuid; });
        if (index !== -1) {
            testSuite.testCases[index] = testCase;
        }
        else {
            testCase.steps = this.testCaseService.followTestCaseStructure(testCase.steps, 0, true);
            testSuite.testCases.push(testCase);
            testSuite.testCases.sort(function (a, b) { return (_this.testCaseService.getTmsLink(a) > _this.testCaseService.getTmsLink(b) ? -1 : 1); });
        }
    };
    TestSuiteService.prototype.getStatus = function (testSuite) {
        if (testSuite.testCases.length === 0) {
            return '';
        }
        for (var i = 0; i < testSuite.testCases.length; i++) {
            if (testSuite.testCases[i].status === 'failed') {
                return 'failed';
            }
            if (testSuite.testCases[i].status === 'blocked') {
                return 'blocked';
            }
            if (testSuite.testCases[i].status !== 'passed' && testSuite.testCases[i].status !== 'pending') {
                return testSuite.testCases[i].status;
            }
        }
        return 'passed';
    };
    TestSuiteService.prototype.getActualResults = function (testSuite, actualResultsFromUI) {
        return ['<p>', testSuite.actualResults, '<br />', actualResultsFromUI, '</p>'].join('')
            .replace(/\n/g, '<br />')
            .replace(/\t/g, '&nbsp;');
    };
    TestSuiteService.prototype.getTestCasesSummary = function (testSuite) {
        var data = '<p>Tested actions are:</p>';
        data += '<p>&nbsp;</p>';
        data += '<table border="1" cellpadding="1" cellspacing="1" style="width:100%">';
        data += '<tbody>';
        testSuite.testCases.forEach(function (tc) {
            data += '<tr>';
            data += '	<td><strong>' + tc.name + '</strong></td>';
            data += ' <td>' + tc.description + '</td>';
            data += '</tr>';
        });
        data += '</tbody>';
        data += '</table>';
        return data;
    };
    TestSuiteService.prototype.getTestCaseStepsToUpdate = function (testSuite) {
        var _this = this;
        var testCaseSteps = [];
        if (testSuite.testCases) {
            testSuite.testCases.forEach(function (testCase) {
                if (testCase.steps && testCase.steps.length > 0) {
                    _this.getStepsToUpdate(testCaseSteps, testCase.steps, testCase.description);
                }
                else {
                    testCaseSteps.push({
                        'action': testCase.description,
                        'expectedResult': ''
                    });
                }
            });
        }
        return testCaseSteps;
    };
    TestSuiteService.prototype.getStepsToUpdate = function (testCaseSteps, steps, stepName) {
        var _this = this;
        steps.forEach(function (step, index) {
            testCaseSteps.push({
                'action': (stepName && index === 0 ? stepName : '') + (step.action ? step.action : ''),
                'expectedResult': step.expectedResult
            });
            if (step.steps && step.steps.length > 0) {
                _this.getStepsToUpdate(testCaseSteps, step.steps);
            }
        });
        return testCaseSteps;
    };
    TestSuiteService.prototype.getDescription = function (description) {
        if (description) {
            return description.replace(/\n/g, '<br />')
                .replace(/\t/g, '&nbsp;');
        }
        return '';
    };
    TestSuiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_test_case_service__WEBPACK_IMPORTED_MODULE_1__["TestCaseService"]])
    ], TestSuiteService);
    return TestSuiteService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\Projects\openSource\allure-reporter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map