(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth/auth.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth/auth.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-4 col-12\">\n\t\t<h3>Employeer</h3>\n\t\t<p>\n\t\t\tGet hold of the talented developers in the current market for your\n\t\t\tbusiness needs.\n\t\t</p>\n\t\t<a [routerLink]=\"['employeer-login']\" class=\"btn btn-success btn-block\"\n\t\t\t>Login</a\n\t\t>\n\t</div>\n\t<div class=\"col-md-4 col-12\">\n\t\t<h3>Job Seeker</h3>\n\t\t<p>\n\t\t\tThe world of oppertunies is at a stone throw distance. Grab it at the\n\t\t\tearliest\n\t\t</p>\n\t\t<a [routerLink]=\"['job-seeker-login']\" class=\"btn btn-primary btn-block\"\n\t\t\t>Login</a\n\t\t>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-login/employeer-login.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-login/employeer-login.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-4 col-12\">\n\t\t<div *ngIf=\"loading\">\n\t\t\t<app-loading>Loading...</app-loading>\n\t\t</div>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"error\">\n\t\t\t{{ error }}\n\t\t</div>\n\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tformControlName=\"userName\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.required\">\n\t\t\t\t\t\tUsername is required\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.email\">\n\t\t\t\t\t\tUsername is not a valid email address\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\n\t\t\t\t\t<div *ngIf=\"f.password.errors.minlength\">\n\t\t\t\t\t\tPassword must be at least 6 characters\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Login\" />\n\t\t</form>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<a [routerLink]=\"['../job-seeker-registration']\" class=\"btn btn-link\"\n\t\t\t\t>Register</a\n\t\t\t>\n\t\t\t<a [routerLink]=\"['../forgot-password']\" class=\"btn btn-link\"\n\t\t\t\t>Forgot Password</a\n\t\t\t>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-registartion/employeer-registartion.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-registartion/employeer-registartion.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-8 col-12\">\n\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.firstName.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.firstName.errors.required\">\n\t\t\t\t\t\t\t\tFirst Name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.lastName.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">\n\t\t\t\t\t\t\t\tLast Name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"phone\">Phone</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"tel\"\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"phoneNumber\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.phoneNumber.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.phoneNumber.errors.required\">\n\t\t\t\t\t\t\t\tPhone Number is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.email\">\n\t\t\t\t\t\t\t\tEmail must be a valid email address\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.password.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.minlength\">\n\t\t\t\t\t\t\t\tPassword must be at least 6 characters\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Confirm Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\tformControlName=\"confirmPassword\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'is-invalid': submitted && f.confirmPassword.errors\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.confirmPassword.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.required\">\n\t\t\t\t\t\t\t\tConfirm Password is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n\t\t\t\t\t\t\t\tPasswords must match\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Register\" />\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-4 col-12\">\n\t\t<form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">User Name</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.userName.invalid }\"\n\t\t\t\t\tformControlName=\"userName\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.required\">User Name is required</div>\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.email\">\n\t\t\t\t\t\tUser Name must be a valid email address\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Validate\" />\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-login/job-seeker-login.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-login/job-seeker-login.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-4 col-12\">\n\t\t<div *ngIf=\"loading\">\n\t\t\t<app-loading>Loading...</app-loading>\n\t\t</div>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"error\">\n\t\t\t{{ error }}\n\t\t</div>\n\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tformControlName=\"userName\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.required\">\n\t\t\t\t\t\tUsername is required\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"f.userName.errors.email\">\n\t\t\t\t\t\tUsername is not a valid email address\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\n\t\t\t\t\t<div *ngIf=\"f.password.errors.minlength\">\n\t\t\t\t\t\tPassword must be at least 6 characters\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Login\" />\n\t\t</form>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<a [routerLink]=\"['../job-seeker-registration']\" class=\"btn btn-link\"\n\t\t\t\t>Register</a\n\t\t\t>\n\t\t\t<a [routerLink]=\"['../forgot-password']\" class=\"btn btn-link\"\n\t\t\t\t>Forgot Password</a\n\t\t\t>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-registration/job-seeker-registration.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-registration/job-seeker-registration.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-8 col-12\">\n\t\t<div class=\"alert alert-danger\" *ngIf=\"error\">\n\t\t\t{{ error }}\n\t\t</div>\n\t\t<div *ngIf=\"loading\">\n\t\t\t<app-loading>Loading...</app-loading>\n\t\t</div>\n\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.firstName.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.firstName.errors.required\">\n\t\t\t\t\t\t\t\tFirst name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.firstName.errors.minlength\">\n\t\t\t\t\t\t\t\tFirst name should be atleast 6 character long\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.lastName.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">\n\t\t\t\t\t\t\t\tLast name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.minlength\">\n\t\t\t\t\t\t\t\tLast name should be atleast 6 character long\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"phone\">Phone</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"tel\"\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"phoneNumber\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.phoneNumber.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">\n\t\t\t\t\t\t\t\tPhone Number is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.email\">\n\t\t\t\t\t\t\t\tEmail must be a valid email address\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\tformControlName=\"userName\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.userName.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.userName.errors.required\">Username is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.userName.errors.minlength\">\n\t\t\t\t\t\t\t\tUsername should be atleast 6 character long\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.password.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.minlength\">\n\t\t\t\t\t\t\t\tPassword must be at least 6 characters\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Confirm Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\tformControlName=\"confirmPassword\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'is-invalid': submitted && f.confirmPassword.errors\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"submitted && f.confirmPassword.errors\"\n\t\t\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.required\">\n\t\t\t\t\t\t\t\tConfirm Password is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n\t\t\t\t\t\t\t\tPasswords must match\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Register\" />\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center h-100 align-items-center\">\n\t<div class=\"col-md-4 col-12\">\n\t\t<form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"changePassword()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"newPassword\">New Password</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'is-invalid': submitted && f.newPassword.invalid\n\t\t\t\t\t}\"\n\t\t\t\t\tformControlName=\"newPassword\"\n\t\t\t\t/>\n\t\t\t\t<div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.newPassword.errors.required\">\n\t\t\t\t\t\tNew Password is required\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"f.newPassword.errors.minlength\">\n\t\t\t\t\t\tNew Password must be at least 6 characters\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"confirmPassword\">Confirm Password</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tformControlName=\"confirmPassword\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'is-invalid': submitted && f.confirmPassword.invalid\n\t\t\t\t\t}\"\n\t\t\t\t/>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"submitted && f.confirmPassword.errors\"\n\t\t\t\t\tclass=\"invalid-feedback\"\n\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.required\">\n\t\t\t\t\t\tConfirm Password is required\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n\t\t\t\t\t\tPasswords must match\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<input\n\t\t\t\ttype=\"submit\"\n\t\t\t\tclass=\"btn btn-primary btn-block\"\n\t\t\t\tvalue=\"Change Password\"\n\t\t\t/>\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var _job_seeker_login_job_seeker_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-seeker-login/job-seeker-login.component */ "./src/app/auth/job-seeker-login/job-seeker-login.component.ts");
/* harmony import */ var _job_seeker_registration_job_seeker_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-seeker-registration/job-seeker-registration.component */ "./src/app/auth/job-seeker-registration/job-seeker-registration.component.ts");
/* harmony import */ var _employeer_login_employeer_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeer-login/employeer-login.component */ "./src/app/auth/employeer-login/employeer-login.component.ts");
/* harmony import */ var _employeer_registartion_employeer_registartion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeer-registartion/employeer-registartion.component */ "./src/app/auth/employeer-registartion/employeer-registartion.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");










const authRoutes = [
    {
        path: '',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    },
    { path: 'job-seeker-login', component: _job_seeker_login_job_seeker_login_component__WEBPACK_IMPORTED_MODULE_4__["JobSeekerLoginComponent"] },
    {
        path: 'job-seeker-registration',
        component: _job_seeker_registration_job_seeker_registration_component__WEBPACK_IMPORTED_MODULE_5__["JobSeekerRegistrationComponent"]
    },
    { path: 'employeer-login', component: _employeer_login_employeer_login_component__WEBPACK_IMPORTED_MODULE_6__["EmployeerLoginComponent"] },
    {
        path: 'employeer-registration',
        component: _employeer_registartion_employeer_registartion_component__WEBPACK_IMPORTED_MODULE_7__["EmployeerRegistartionComponent"]
    },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var _job_seeker_registration_job_seeker_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-seeker-registration/job-seeker-registration.component */ "./src/app/auth/job-seeker-registration/job-seeker-registration.component.ts");
/* harmony import */ var _job_seeker_login_job_seeker_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job-seeker-login/job-seeker-login.component */ "./src/app/auth/job-seeker-login/job-seeker-login.component.ts");
/* harmony import */ var _employeer_registartion_employeer_registartion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employeer-registartion/employeer-registartion.component */ "./src/app/auth/employeer-registartion/employeer-registartion.component.ts");
/* harmony import */ var _employeer_login_employeer_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employeer-login/employeer-login.component */ "./src/app/auth/employeer-login/employeer-login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");














let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
            _job_seeker_registration_job_seeker_registration_component__WEBPACK_IMPORTED_MODULE_6__["JobSeekerRegistrationComponent"],
            _job_seeker_login_job_seeker_login_component__WEBPACK_IMPORTED_MODULE_7__["JobSeekerLoginComponent"],
            _employeer_registartion_employeer_registartion_component__WEBPACK_IMPORTED_MODULE_8__["EmployeerRegistartionComponent"],
            _employeer_login_employeer_login_component__WEBPACK_IMPORTED_MODULE_9__["EmployeerLoginComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth/auth.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/auth/auth.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/employeer-login/employeer-login.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/employeer-login/employeer-login.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZW1wbG95ZWVyLWxvZ2luL2VtcGxveWVlci1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/employeer-login/employeer-login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/employeer-login/employeer-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeerLoginComponent", function() { return EmployeerLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");






let EmployeerLoginComponent = class EmployeerLoginComponent {
    constructor(formBuilder, router, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.submitted = false;
        this.error = null;
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
            ])
        });
        this.store.select('authState').subscribe(authState => {
            this.error = authState.errorMessage;
            this.loading = authState.loading;
            if (authState.user) {
                this.router.navigate(['/onboarding/personal-info']);
            }
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthLoginStart"]({
            email: this.loginForm.get('userName').value,
            password: this.loginForm.get('password').value
        }));
    }
};
EmployeerLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
EmployeerLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employeer-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeer-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-login/employeer-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeer-login.component.scss */ "./src/app/auth/employeer-login/employeer-login.component.scss")).default]
    })
], EmployeerLoginComponent);



/***/ }),

/***/ "./src/app/auth/employeer-registartion/employeer-registartion.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/employeer-registartion/employeer-registartion.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZW1wbG95ZWVyLXJlZ2lzdGFydGlvbi9lbXBsb3llZXItcmVnaXN0YXJ0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/employeer-registartion/employeer-registartion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/employeer-registartion/employeer-registartion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeerRegistartionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeerRegistartionComponent", function() { return EmployeerRegistartionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/CustomValidatos */ "./src/app/shared/CustomValidatos.ts");




let EmployeerRegistartionComponent = class EmployeerRegistartionComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    register() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
};
EmployeerRegistartionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EmployeerRegistartionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employeer-registartion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeer-registartion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/employeer-registartion/employeer-registartion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeer-registartion.component.scss */ "./src/app/auth/employeer-registartion/employeer-registartion.component.scss")).default]
    })
], EmployeerRegistartionComponent);



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    }
    get f() {
        return this.forgotPasswordForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return true;
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/auth/job-seeker-login/job-seeker-login.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/job-seeker-login/job-seeker-login.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvam9iLXNlZWtlci1sb2dpbi9qb2Itc2Vla2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/job-seeker-login/job-seeker-login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/job-seeker-login/job-seeker-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: JobSeekerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerLoginComponent", function() { return JobSeekerLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");






let JobSeekerLoginComponent = class JobSeekerLoginComponent {
    constructor(formBuilder, router, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.submitted = false;
        this.error = null;
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
        // this.store.select('authState').subscribe(authState => {
        // 	this.error = authState.errorMessage;
        // 	this.loading = authState.loading;
        // 	if (authState.user) {
        // 		this.router.navigate(['/onboarding/personal-info']);
        // 	}
        // });
    }
    get f() {
        return this.loginForm.controls;
    }
    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const loginFormData = new FormData();
        loginFormData.append('grant_type', 'password');
        loginFormData.append('client_id', 'spring123');
        loginFormData.append('username', 'bibhu');
        loginFormData.append('password', 'nucigent2019');
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthLoginStart"]({
            email: this.loginForm.get('userName').value,
            password: this.loginForm.get('password').value
        }));
    }
};
JobSeekerLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
JobSeekerLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-seeker-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-seeker-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-login/job-seeker-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-seeker-login.component.scss */ "./src/app/auth/job-seeker-login/job-seeker-login.component.scss")).default]
    })
], JobSeekerLoginComponent);



/***/ }),

/***/ "./src/app/auth/job-seeker-registration/job-seeker-registration.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/auth/job-seeker-registration/job-seeker-registration.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvam9iLXNlZWtlci1yZWdpc3RyYXRpb24vam9iLXNlZWtlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/job-seeker-registration/job-seeker-registration.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/job-seeker-registration/job-seeker-registration.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JobSeekerRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerRegistrationComponent", function() { return JobSeekerRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/CustomValidatos */ "./src/app/shared/CustomValidatos.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let JobSeekerRegistrationComponent = class JobSeekerRegistrationComponent {
    constructor(formBuilder, store, router) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.router = router;
        this.submitted = false;
        this.error = null;
        this.loading = false;
    }
    ngOnInit() {
        this.store.select('authState').subscribe(authState => {
            this.error = authState.errorMessage;
            this.loading = authState.loading;
        });
        this.registerForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, {
            validator: Object(_shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    register() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthRegistrationStart"]({
            userType: 'candidate',
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            emailId: this.f.email.value,
            userName: this.f.userName.value,
            contactNumber: this.f.phoneNumber.value,
            password: this.f.password.value
        }));
    }
};
JobSeekerRegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
JobSeekerRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-seeker-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-seeker-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/job-seeker-registration/job-seeker-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-seeker-registration.component.scss */ "./src/app/auth/job-seeker-registration/job-seeker-registration.component.scss")).default]
    })
], JobSeekerRegistrationComponent);



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/CustomValidatos */ "./src/app/shared/CustomValidatos.ts");




let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, {
            validator: Object(_shared_CustomValidatos__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('newPassword', 'confirmPassword')
        });
    }
    get f() {
        return this.resetPasswordForm.controls;
    }
    changePassword() {
        this.submitted = true;
        if (this.resetPasswordForm.invalid) {
            return;
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/auth/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/shared/CustomValidatos.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/CustomValidatos.ts ***!
  \*******************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map