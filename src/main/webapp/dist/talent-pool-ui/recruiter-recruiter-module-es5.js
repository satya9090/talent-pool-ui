(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recruiter-recruiter-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/filter/filter.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/filter/filter.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>filter works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/home/home.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/home/home.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-2\">\n\t<div class=\"col-12\">\n\t\t<app-search></app-search>\n\t</div>\n</div>\n<br />\n<div class=\"row\">\n\t<div class=\"col-md-3\">\n\t\t<app-filter></app-filter>\n\t</div>\n\t<div class=\"col-md-9\">\n\t\t<app-profile-list></app-profile-list>\n\t\t<div class=\"text-right\">\n\t\t\t<button class=\"btn btn-primary\">Download</button>\n\t\t</div>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-details/profile-details.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-details/profile-details.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"d-flex align-items-center\">\n\t\t\t<div class=\"form-check\">\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-check-input\"\n\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t[ngModel]=\"details.selected\"\n\t\t\t\t\t(change)=\"toggleSelection()\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<img [src]=\"details.profileImage\" class=\"img-thumbnail\" />\n\t\t\t<div class=\"details\">\n\t\t\t\t<div class=\"identity\">\n\t\t\t\t\t<span class=\"name\">\n\t\t\t\t\t\t{{ details.firstName }} {{ details.lastName }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span>Experience : {{ details.experience }} year(s)</span>\n\t\t\t\t\t<fa-icon [icon]=\"faDownload\"></fa-icon>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"description\">\n\t\t\t\t\tDescription : {{ details.profileDescription }}\n\t\t\t\t</p>\n\t\t\t\t<div>\n\t\t\t\t\t<span class=\"chip\" *ngFor=\"let skill of details.skills\">\n\t\t\t\t\t\t{{ skill.minor }} {{ skill.experienceInYears }}yrs\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-list/profile-list.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-list/profile-list.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-profile-details\n\t*ngFor=\"let profile of profiles\"\n\t[details]=\"profile\"\n></app-profile-details>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/search/search.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/search/search.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form>\n\t<div class=\"form-row\">\n\t\t<div class=\"col-10\">\n\t\t\t<input type=\"text\" class=\"form-control\" ngModel name=\"searchText\" />\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<button class=\"btn btn-link btn-sm\" type=\"button\">Advance Search</button>\n\t\t</div>\n\t</div>\n</form>\n");
            /***/ 
        }),
        /***/ "./src/app/recruiter/filter/filter.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/recruiter/filter/filter.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRlci9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/recruiter/filter/filter.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/recruiter/filter/filter.component.ts ***!
          \******************************************************/
        /*! exports provided: FilterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function () { return FilterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterComponent = /** @class */ (function () {
                function FilterComponent() {
                }
                FilterComponent.prototype.ngOnInit = function () {
                };
                return FilterComponent;
            }());
            FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-filter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/filter/filter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.scss */ "./src/app/recruiter/filter/filter.component.scss")).default]
                })
            ], FilterComponent);
            /***/ 
        }),
        /***/ "./src/app/recruiter/home/home.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/recruiter/home/home.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRlci9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/recruiter/home/home.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/recruiter/home/home.component.ts ***!
          \**************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/recruiter/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/recruiter/profile-details/profile-details.component.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/recruiter/profile-details/profile-details.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin-bottom: 0.5rem;\n}\n.card .card-body {\n  padding: 0.5rem;\n}\n.card .card-body .img-thumbnail {\n  max-height: 10rem;\n}\n.card .card-body .details {\n  padding-left: 0.5rem;\n}\n.card .card-body .details .identity {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n.card .card-body .details .identity .name {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.card .card-body .details .description {\n  padding-top: 0.3rem;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYmFuYW5kYS9Xb3JrYmVuY2gvdGFsZW50LXBvb2wtdWkvc3JjL21haW4vd2ViYXBwL3NyYy9hcHAvcmVjcnVpdGVyL3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY3J1aXRlci9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUNDRDtBREFDO0VBQ0MsZUFBQTtBQ0VGO0FEREU7RUFDQyxpQkFBQTtBQ0dIO0FEREU7RUFDQyxvQkFBQTtBQ0dIO0FERkc7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7QURISTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQ0tMO0FERkc7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9yZWNydWl0ZXIvcHJvZmlsZS1kZXRhaWxzL3Byb2ZpbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXHQuY2FyZC1ib2R5IHtcblx0XHRwYWRkaW5nOiAwLjVyZW07XG5cdFx0LmltZy10aHVtYm5haWwge1xuXHRcdFx0bWF4LWhlaWdodDogMTByZW07XG5cdFx0fVxuXHRcdC5kZXRhaWxzIHtcblx0XHRcdHBhZGRpbmctbGVmdDogMC41cmVtO1xuXHRcdFx0LmlkZW50aXR5IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRcdFx0Lm5hbWUge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMC4zcmVtO1xuXHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmltZy10aHVtYm5haWwge1xuICBtYXgtaGVpZ2h0OiAxMHJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRldGFpbHMge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRldGFpbHMgLmlkZW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRldGFpbHMgLmlkZW50aXR5IC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGV0YWlscyAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/recruiter/profile-details/profile-details.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/recruiter/profile-details/profile-details.component.ts ***!
          \************************************************************************/
        /*! exports provided: ProfileDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function () { return ProfileDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_store_actions_recruiter_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/recruiter.actions */ "./src/app/store/actions/recruiter.actions.ts");
            var ProfileDetailsComponent = /** @class */ (function () {
                function ProfileDetailsComponent(store) {
                    this.store = store;
                    this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDownload"];
                }
                ProfileDetailsComponent.prototype.ngOnInit = function () { };
                ProfileDetailsComponent.prototype.toggleSelection = function () {
                    this.store.dispatch(new src_app_store_actions_recruiter_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleProfileSelection"](this.details.candidateId));
                };
                return ProfileDetailsComponent;
            }());
            ProfileDetailsComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProfileDetailsComponent.prototype, "details", void 0);
            ProfileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-details/profile-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-details.component.scss */ "./src/app/recruiter/profile-details/profile-details.component.scss")).default]
                })
            ], ProfileDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/recruiter/profile-list/profile-list.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/recruiter/profile-list/profile-list.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRlci9wcm9maWxlLWxpc3QvcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/recruiter/profile-list/profile-list.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/recruiter/profile-list/profile-list.component.ts ***!
          \******************************************************************/
        /*! exports provided: ProfileListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function () { return ProfileListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var ProfileListComponent = /** @class */ (function () {
                function ProfileListComponent(store) {
                    this.store = store;
                }
                ProfileListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.store.select('recruiterState').subscribe(function (state) {
                        _this.profiles = state.profiles;
                    });
                };
                return ProfileListComponent;
            }());
            ProfileListComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            ProfileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/profile-list/profile-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-list.component.scss */ "./src/app/recruiter/profile-list/profile-list.component.scss")).default]
                })
            ], ProfileListComponent);
            /***/ 
        }),
        /***/ "./src/app/recruiter/recruiter.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/recruiter/recruiter.module.ts ***!
          \***********************************************/
        /*! exports provided: RecruiterModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterModule", function () { return RecruiterModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-list/profile-list.component */ "./src/app/recruiter/profile-list/profile-list.component.ts");
            /* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-details/profile-details.component */ "./src/app/recruiter/profile-details/profile-details.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/recruiter/search/search.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/recruiter/home/home.component.ts");
            /* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/recruiter/filter/filter.component.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
            var RecruiterModule = /** @class */ (function () {
                function RecruiterModule() {
                }
                return RecruiterModule;
            }());
            RecruiterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_6__["ProfileListComponent"],
                        _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }]),
                        _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"]
                    ]
                })
            ], RecruiterModule);
            /***/ 
        }),
        /***/ "./src/app/recruiter/search/search.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/recruiter/search/search.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRlci9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/recruiter/search/search.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/recruiter/search/search.component.ts ***!
          \******************************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent() {
                }
                SearchComponent.prototype.ngOnInit = function () {
                };
                return SearchComponent;
            }());
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/recruiter/search/search.component.scss")).default]
                })
            ], SearchComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=recruiter-recruiter-module-es2015.js.map
//# sourceMappingURL=recruiter-recruiter-module-es5.js.map
//# sourceMappingURL=recruiter-recruiter-module-es5.js.map