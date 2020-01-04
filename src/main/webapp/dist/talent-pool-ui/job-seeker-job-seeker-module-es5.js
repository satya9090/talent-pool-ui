(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-seeker-job-seeker-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-2\">\n\t<div class=\"col-md-3\">\n\t\t<app-profile></app-profile>\n\t</div>\n\t<div class=\"col-md-9\">\n\t\t<app-notification-list></app-notification-list>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification-list/notification-list.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification-list/notification-list.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-notification\n\t*ngFor=\"let notification of notifications\"\n\t[details]=\"notification\"\n></app-notification>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification/notification.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification/notification.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"d-flex w-100\">\n\t\t\t<img\n\t\t\t\t[src]=\"details.from.profileImage\"\n\t\t\t\tclass=\"img-thumbnail profile-image\"\n\t\t\t\t[alt]=\"details.from.name\"\n\t\t\t/>\n\t\t\t<div class=\"message-details\">\n\t\t\t\t<p class=\"message\">{{ details.message }}</p>\n\t\t\t\t<p class=\"text-right date\">{{ details.date | date: 'dd/mm/yyyy' }}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/profile/profile.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/profile/profile.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"text-center\">\n\t\t\t<img\n\t\t\t\tsrc=\"http://genchi.info/images/profile-picture-12.jpg\"\n\t\t\t\tclass=\"img-thumbnail\"\n\t\t\t\talt=\"...\"\n\t\t\t/>\n\t\t</div>\n\t\t<h5>Debanande Mohanty</h5>\n\t\t<p class=\"d-flex align-items-center\">\n\t\t\t<fa-icon [icon]=\"faPhone\"></fa-icon>\n\t\t\t<span class=\"email\">123456789</span>\n\t\t</p>\n\t\t<p class=\"d-flex align-items-center\">\n\t\t\t<fa-icon [icon]=\"faEnvelope\"></fa-icon>\n\t\t\t<span class=\"email\">test@gmail.com / test@mail.com</span>\n\t\t</p>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/job-seeker/home/home.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/job-seeker/home/home.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/job-seeker/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/job-seeker/home/home.component.ts ***!
          \***************************************************/
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
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/job-seeker/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/job-seeker/job-seeker.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/job-seeker/job-seeker.module.ts ***!
          \*************************************************/
        /*! exports provided: JobSeekerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerModule", function () { return JobSeekerModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-list/notification-list.component */ "./src/app/job-seeker/notification-list/notification-list.component.ts");
            /* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/job-seeker/notification/notification.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/job-seeker/profile/profile.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/job-seeker/home/home.component.ts");
            var jobSeekerRoute = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }];
            var JobSeekerModule = /** @class */ (function () {
                function JobSeekerModule() {
                }
                return JobSeekerModule;
            }());
            JobSeekerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_5__["NotificationListComponent"],
                        _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"],
                        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(jobSeekerRoute)
                    ]
                })
            ], JobSeekerModule);
            /***/ 
        }),
        /***/ "./src/app/job-seeker/notification-list/notification-list.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/job-seeker/notification-list/notification-list.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/job-seeker/notification-list/notification-list.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/job-seeker/notification-list/notification-list.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: NotificationListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function () { return NotificationListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var NotificationListComponent = /** @class */ (function () {
                function NotificationListComponent(store) {
                    this.store = store;
                }
                NotificationListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.store.select('jobSeekerState').subscribe(function (state) {
                        _this.notifications = state.notifications;
                    });
                };
                return NotificationListComponent;
            }());
            NotificationListComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notification-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification-list/notification-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-list.component.scss */ "./src/app/job-seeker/notification-list/notification-list.component.scss")).default]
                })
            ], NotificationListComponent);
            /***/ 
        }),
        /***/ "./src/app/job-seeker/notification/notification.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/job-seeker/notification/notification.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin-bottom: 0.5rem;\n}\n.card .profile-image {\n  max-height: 5rem;\n}\n.card .message-details {\n  flex: 1;\n  padding-left: 0.5rem;\n}\n.card .message-details .message {\n  font-size: 0.9rem;\n  font-style: italic;\n}\n.card .message-details .date {\n  color: grey;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYmFuYW5kYS9Xb3JrYmVuY2gvdGFsZW50LXBvb2wtdWkvc3JjL21haW4vd2ViYXBwL3NyYy9hcHAvam9iLXNlZWtlci9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9qb2Itc2Vla2VyL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtBQ0NEO0FEQUM7RUFDQyxnQkFBQTtBQ0VGO0FEQUM7RUFDQyxPQUFBO0VBQ0Esb0JBQUE7QUNFRjtBRERFO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQ0dIO0FEREU7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dIIiwiZmlsZSI6InNyYy9hcHAvam9iLXNlZWtlci9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cdC5wcm9maWxlLWltYWdlIHtcblx0XHRtYXgtaGVpZ2h0OiA1cmVtO1xuXHR9XG5cdC5tZXNzYWdlLWRldGFpbHMge1xuXHRcdGZsZXg6IDE7XG5cdFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XG5cdFx0Lm1lc3NhZ2Uge1xuXHRcdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0fVxuXHRcdC5kYXRlIHtcblx0XHRcdGNvbG9yOiBncmV5O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRcdH1cblx0fVxufVxuIiwiLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY2FyZCAucHJvZmlsZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDVyZW07XG59XG4uY2FyZCAubWVzc2FnZS1kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG4uY2FyZCAubWVzc2FnZS1kZXRhaWxzIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jYXJkIC5tZXNzYWdlLWRldGFpbHMgLmRhdGUge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/job-seeker/notification/notification.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/job-seeker/notification/notification.component.ts ***!
          \*******************************************************************/
        /*! exports provided: NotificationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () { return NotificationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotificationComponent = /** @class */ (function () {
                function NotificationComponent() {
                }
                NotificationComponent.prototype.ngOnInit = function () { };
                return NotificationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NotificationComponent.prototype, "details", void 0);
            NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notification',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/notification/notification.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/job-seeker/notification/notification.component.scss")).default]
                })
            ], NotificationComponent);
            /***/ 
        }),
        /***/ "./src/app/job-seeker/profile/profile.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/job-seeker/profile/profile.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".email {\n  display: inline-block;\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYmFuYW5kYS9Xb3JrYmVuY2gvdGFsZW50LXBvb2wtdWkvc3JjL21haW4vd2ViYXBwL3NyYy9hcHAvam9iLXNlZWtlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2pvYi1zZWVrZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvam9iLXNlZWtlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbiIsIi5lbWFpbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/job-seeker/profile/profile.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/job-seeker/profile/profile.component.ts ***!
          \*********************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                    this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"];
                    this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
                }
                ProfileComponent.prototype.ngOnInit = function () { };
                return ProfileComponent;
            }());
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-seeker/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/job-seeker/profile/profile.component.scss")).default]
                })
            ], ProfileComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=job-seeker-job-seeker-module-es2015.js.map
//# sourceMappingURL=job-seeker-job-seeker-module-es5.js.map
//# sourceMappingURL=job-seeker-job-seeker-module-es5.js.map