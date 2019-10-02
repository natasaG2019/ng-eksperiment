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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n  <div class=\"container\">\n    <a href=\"#\" class=\"navbar-brand\">Blogger.com</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-aut\">\n        <ng-template[ngIf]=\"authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/\" class=\"nav-link\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/posts\" class=\"nav-link\">Posts</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"signOut()\">SignOut</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"!authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/signin\" class=\"nav-link\">SignIn</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/signup\" class=\"nav-link\">SignUp</a>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer id=\"main-footer\" class=\"bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col text-center text-white\">\n        <div class=\"py-4\">\n          <h1 class=\"h3\">Blogger.com</h1>\n          <p>Copyright & copy;2017</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/addBlogger/addblogger.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/addBlogger/addblogger.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-5 bg-light border\">\n    <div class=\"col-md-8\">\n        <h1>Bloggers job</h1>\n        <p>Lorem ipsum dolor sit amet, consecetetur adipissicing elit.\n            Amet omnis fuga maiores excepturi dolores explicabo.\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card text-center bg-sucess text-white mb-3 m-auto\">\n            <div class=\"card-body\">\n                <h3>Add New Blogger</h3>\n                <h1 class=\"display-4\">\n                    <i class=\"fa fa-user-plus\"></i>6\n                </h1>\n                <a href=\"#\" class=\"btn btn-outline-light btn-sm\" data-toggle=\"modal\"\n                data-target=\"#addblogger\">Add Blogger</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"addblogger\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-success text-white\">\n                <h5 class=\"modal-title\">Add New Blogger</h5>\n                <button class=\"close\" data-dismiss=\"modal\">\n                    <span>&times:</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" id=\"addForm\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" ngModel required\n                        name=\"name\" #nameBlogger=\"ngModel\">\n                        <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">\n                            You must insert Name</span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" ngModel required\n                        name=\"email\" #emailBlogger=\"ngModel\">\n                        <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">\n                         You must insert Email </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"About\">About Blogger</label>\n                        <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About blogger\" ngModel></textarea>\n                    </div>\n                </form>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button (click)=\"addBlogger()\" type=\"button\" class=\"btn btn-success\" [disable]=!if.valid>Add</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/blogger/blogger.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/blogger/blogger.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <div class=\"card-header\">\n        <h3>{{blogger.name}}</h3>\n    </div>\n    <div class=\"card-body\">\n        <h5 class=\"text-muted\">{{blogger.email}}</h5>\n        <p>{{blogger.about}}</p>\n        <div class=\"d-flex flex-row justify-content-center\">\n            <div class=\"p-4\">\n                <a href=\"https://www.facebook.com\">\n                <i class=\"fa fa-facebook\"></i>\n            </a>\n            </div>\n            <div class=\"p-4\">\n                <a href=\"https://twitter.com/twitter?lang=en\">\n                <i class=\"fa fa-twitter\"></i>\n            </a>\n           </div>\n           <div class=\"p-4\">\n               <a href= \"https://www.instagram.com/\" >\n            <i class=\"fa fa-instagram\"></i>\n             </a>\n           </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <button class=\"btn-block btn btn-warning\" data-toggle=\"modal\"\n                data-target=\"#changeblogger\">Change</button>\n            </div>\n            <div class=\"col-md-6\">\n                <button class=\"btn-block btn btn-danger\" (click)=\"deleteBlogger()\">\n                    Delete </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"changeblogger\">\n<div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header bg-warning text-white\">\n            <h5 class=\"modal-title\">Change Blogger</h5>\n            <button class=\"close\" data-dismiss=\"modal\">\n                <span>&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #f=\"ngForm\" id=\"changeForm\">\n                <div class=\"form-group\">\n                    <lable for=\"name\">Name</lable>\n                    <input type=\"text\"class=\"form-control\" id=\"name\" ngModel required name=\"name\" #nameBlogger=\"ngModel\">\n                    <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">You must insert Name</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" ngModel required name=\"email\" #emailBlogger=\"ngModel\">\n                    <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">You must insert Email</span>\n                </div> \n                <div class=\"form-group\">\n                    <label for=\"About\">About Blogger</label>\n                    <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About blogger\" ngModel></textarea>\n                </div>\n            </form>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button (click)=\"changeBlogger(f)\" type=\"submit\" class=\"btn btn-warning\" data-dismiss=\"modal\" [disabled]=!if.valid>Finish Editing</button>\n            </div>\n        </div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/bloggers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/bloggers.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <app-blogger class=\"col-md-6\"\n    [blogger]=\"blogger\"\n    [index]=\"i\"\n    *ngFor=\"let blogger of (bloggersState |async.bloggers;let i=index\">\n</app-blogger>\n</div>\n\n<app-addblogger></app-addblogger>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n        <div class =\"conta\">\n            <div class=\"row\">\n                <div class=\"col-md-6 text-center mx-auto text-white\">\n                    <h1 class=\"display-2 mt-5 pt-5\">\n                        Find All About Our Bloggers\n                    </h1>\n                    <p class=\"lead\">Lorem ipsum dolor sit amet</p>\n                    <a href=\"#bloggers\" class=\"btn btn-outline-secondary btn-lg text-white\">\n                        <i class=\"fa fa-arrow-right\"></i>Read More</a>\n                </div>\n            </div> \n        </div>\n    </div>\n</header>\n\n<section id=\"bloggers\" class=\"my-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"info-header mb-5 text-center\">\n                    <h1 class=\"text-primary pb-3\">\n                        Meet The Bloggers\n                    </h1>\n                    <p class=\"lead pb-3\">\n                        Lorem ipsum dolor sit amet, consecetetur adipisicing elit.\n                        Amet omnis fuga maiores exceptuir dolores explicabo\n                    </p>\n                </div>\n            </div>\n        </div>\n        <app-bloggers></app-bloggers>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pagenotfound works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post/post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post/post.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"condition\" class=\"card m-3 bg-light\">\n    <div class=\"clard-header text-dark\">\n        <h3>{{post.title | uppercase}}</h3>\n    </div>\n    <div class=\"card-body\">\n        <h3 class=\"text-muted\">{{post.category}}</h3>\n    </div>\n    <div class=\"card-footer text-right\">\n        <p>{{post.datePosted}}</p>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n    </div>\n</header>\n\n<div class=\"bg-light\">\n    <div class=\"container my-4\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card m-3\">\n                    <div class=\"card-header\">\n                        <h4>Posts</h4>\n                    </div>\n                    <table class=\"table table-hover table-bordered text-center\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Title</th>\n                                <th>Deleting</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let post of posts;let i=index\" [@postAnim]>\n                                <td>{{i+1}}</td>\n                                <td [routerLink]=\"['/posts',post.id]\">{{post.title}}</td>\n                                <td>\n                                    <button class=\"btn btn-danger btn-block\" (click)=\"deletePost(post.id)\">\n                                        Delete post </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container my-4\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"info-header mb-5 text-center\">\n                <h1 class=\"text-primary pb-3\">\n                    Add New Post\n                </h1>\n                <p class=\"lead pb-3\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Amet omnis fuga maiores excepturi dolores explicabo.\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 bg-dark text-white mx-auto\">\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submit()\" class=\"my-4\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Title</label>\n                    <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n                    <span *ngIf=\"!addForm.get('title').valid && addForm.get('title').touched\">\n                        Enter the Title</span>\n                </div>\n                <div class=\"form-group\">\n                    <lable for=\"Category\">Category</lable>\n                    <input type=\"text\" id=\"category\" formControlName=\"category\" class=\"form-control\">\n                    <span *ngIf=\"!addForm.get('category').valid && addForm.get('category').touched\">\n                        Enter Category!</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"date\">Posted</label>\n                    <input type=\"text\" id=\"date\" formControlName=\"date\" class=\"form-control\">\n                    <span *ngIf=\"!addForm.get('data').valid && addForm.get('date').touched\">\n                        Enter Date of Posting!</span>\n                </div>\n                <span *ngIf=\"!addForm.valid && addForm.touched\">\n                    Fill Form!</span>\n                    <br>\n                    <button class=\"btn btn-outline-secondary btn-block\" type=\"submit\">Save</button>\n            </form> \n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"home-section\">\n    <div class= \"dark-overlay\">\n        <div class=\"container homme-inner\">\n            <div class=\"row\">\n                <div class=\"col-md-8 d-none d-md-block text-light\">\n                    <h1 class=\"display-4\">\n                        <strong>Sign In</strong>\n                    </h1>\n                    <p>Lorem ipum dolor sit amet, consecetetur adipisicing elit.\n                        Facilis pariatur distinctio eum consequuntur necessitatibus\n                        animi impedit, dolores delectus quibusdam reprehenderit\n                    </p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card bg-success text-center card-form\">\n                        <div classs=\"card-body\">\n                                <form (ngSubmit)=\"signin(f)\" #f=\"ngForm\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" placeholder=\"User Name\" id=\"name\" name=\"name\"\n                                        ngModel class= \"form-control form-control-lg\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\"\n                                        ngModel class=\"form-control form-control-lg\">\n                                    </div>\n                                    <div class=\"for-group\">\n                                        <input type=\"password\" placehoder=\"Password\" id=\"password\" name=\"name\"\n                                        ngModel class=\"form-control form-control-lg\">\n                                    </div>\n                                    <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sign In</button>\n                                </form>\n                            </div>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"home-section\">\n    <div class= \"dark-overlay\">\n        <div class=\"container homme-inner\">\n            <div class=\"row\">\n                <div class=\"col-md-8 d-none d-md-block text-light\">\n                    <h1 class=\"display-4\">\n                        <strong>Sign Up</strong>\n                    </h1>\n                    <p>Lorem ipum dolor sit amet, consecetetur adipisicing elit.\n                        Facilis pariatur distinctio eum consequuntur necessitatibus\n                        animi impedit, dolores delectus quibusdam reprehenderit\n                    </p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card bg-success text-center card-form\">\n                        <div classs=\"card-body\">\n                                <form (ngSubmit)=\"signin(f)\" #f=\"ngForm\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" placeholder=\"User Name\" id=\"name\" name=\"name\"\n                                        ngModel class= \"form-control form-control-lg\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\"\n                                        ngModel class=\"form-control form-control-lg\">\n                                    </div>\n                                    <div class=\"for-group\">\n                                        <input type=\"password\" placehoder=\"Password\" id=\"password\" name=\"name\"\n                                        ngModel class=\"form-control form-control-lg\">\n                                    </div>\n                                    <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sign Up</button>\n                                </form>\n                            </div>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");









const appRoutes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]], children: [
            { path: ':id', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"] }
        ] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: 'pagenotfound', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyDhuW8rGP8P7SQC6341GM5b1PHthucDb1A",
            authDomain: "eksperiment-c7be2.firebaseapp.com",
        });
    }
    signOut() {
        this.authService.signout();
        this.router.navigate(['/signin']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _bloggers_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bloggers.reducers */ "./src/app/bloggers.reducers.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bloggers/bloggers.component */ "./src/app/bloggers/bloggers.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/posts/post/post.component.ts");
/* harmony import */ var _bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bloggers/blogger/blogger.component */ "./src/app/bloggers/blogger/blogger.component.ts");
/* harmony import */ var _bloggers_addBlogger_addBlogger_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bloggers/addBlogger/addBlogger.component */ "./src/app/bloggers/addBlogger/addBlogger.component.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_10__["BloggersComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
            _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__["PagenotfoundComponent"],
            _posts_post_post_component__WEBPACK_IMPORTED_MODULE_15__["PostComponent"],
            _bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_16__["BloggerComponent"],
            _bloggers_addBlogger_addBlogger_component__WEBPACK_IMPORTED_MODULE_17__["AddbloggerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ bloggers: _bloggers_reducers__WEBPACK_IMPORTED_MODULE_8__["bloggersReducer"] }),
        ],
        providers: [_bloggers_service__WEBPACK_IMPORTED_MODULE_18__["BloggersService"], _auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"], _post_service__WEBPACK_IMPORTED_MODULE_21__["PostService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    signinUser(email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then((response) => {
            this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
                .then((token) => this.token = token);
        })
            .catch((error) => console.log(error));
    }
    getToken() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
            .then((token) => this.token = token);
        return this.token;
    }
    signupUser(email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch((error) => console.log(error));
    }
    authenticated() {
        return this.token != null;
    }
    signout() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.token = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/blogger.ts":
/*!****************************!*\
  !*** ./src/app/blogger.ts ***!
  \****************************/
/*! exports provided: Blogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogger", function() { return Blogger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Blogger {
    constructor(name, email, about) {
        this.name = name;
        this.about = about;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/bloggers.actions.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.actions.ts ***!
  \*************************************/
/*! exports provided: ADD_BLOGGER, DELETE_BLOGGER, EDIT_BLOGGER, ADD_BLOGGERS, AddBlogger, EditBlogger, DeleteBlogger, AddBloggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGER", function() { return ADD_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOGGER", function() { return DELETE_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BLOGGER", function() { return EDIT_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGERS", function() { return ADD_BLOGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogger", function() { return AddBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogger", function() { return EditBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogger", function() { return DeleteBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloggers", function() { return AddBloggers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ADD_BLOGGER = 'ADD_BLOGGER';
const DELETE_BLOGGER = 'DELETE_BLOGGER';
const EDIT_BLOGGER = 'EDIT_BLOGGER';
const ADD_BLOGGERS = 'ADD_BLOGGERS';
class AddBlogger {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGER;
    }
}
class EditBlogger {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_BLOGGER;
    }
}
class DeleteBlogger {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_BLOGGER;
    }
}
class AddBloggers {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGERS;
    }
}


/***/ }),

/***/ "./src/app/bloggers.reducers.ts":
/*!**************************************!*\
  !*** ./src/app/bloggers.reducers.ts ***!
  \**************************************/
/*! exports provided: bloggersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloggersReducer", function() { return bloggersReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggers.actions */ "./src/app/bloggers.actions.ts");


const initialState = {
    bloggers: []
};
function bloggersReducer(state = initialState, action) {
    switch (action.type) {
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGER"]:
            return Object.assign({}, state, { bloggers: [...state.bloggers, action.payload] });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_BLOGGER"]:
            const oldBloggers = [...state.bloggers];
            oldBloggers.splice(action.payload, 1);
            return Object.assign({}, state, { bloggers: oldBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_BLOGGER"]:
            const beforeEditingBloggers = [...state.bloggers];
            beforeEditingBloggers[action.payload.index] = action.payload.blogger;
            console.log(action.payload.index);
            return Object.assign({}, state, { bloggers: beforeEditingBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGERS"]:
            return Object.assign({}, state, { bloggers: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/bloggers.service.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.service.ts ***!
  \*************************************/
/*! exports provided: BloggersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersService", function() { return BloggersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let BloggersService = class BloggersService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    getAllBloggers() {
        const token = this.authService.getToken();
        return this.http.get('https://eksperiment-c7be2.firebaseio.com/data.json?auth=' + token, {
            headers: this.headers
        });
    }
    saveBlogger(bloggers) {
        const token = this.authService.getToken();
        return this.http.put('https://eksperiment-c7be2.firebaseio.com/data.json?auth=' + token, bloggers, {
            headers: this.headers
        });
    }
};
BloggersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
BloggersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BloggersService);



/***/ }),

/***/ "./src/app/bloggers/addBlogger/addBlogger.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/bloggers/addBlogger/addBlogger.component.ts ***!
  \*************************************************************/
/*! exports provided: AddbloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbloggerComponent", function() { return AddbloggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bloggers.actions */ "./src/app/bloggers.actions.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bloggers.service */ "./src/app/bloggers.service.ts");






let AddbloggerComponent = class AddbloggerComponent {
    constructor(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    ngOnInit() {
        this.bloggersState = this.store.select('bloggers');
    }
    addBlogger() {
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](this.form.value.name, this.form.value.email, this.form.value.about)));
        this.bloggersState.subscribe((blog) => {
            this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        this.form.reset();
    }
};
AddbloggerComponent.ctorParameters = () => [
    { type: _bloggers_service__WEBPACK_IMPORTED_MODULE_5__["BloggersService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], AddbloggerComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addbloggers', { static: false })
], AddbloggerComponent.prototype, "modalForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddbloggerComponent.prototype, "bloggers", void 0);
AddbloggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addblogger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addblogger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/addBlogger/addblogger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addblogger.component.css */ "./src/app/bloggers/addBlogger/addblogger.component.css")).default]
    })
], AddbloggerComponent);



/***/ }),

/***/ "./src/app/bloggers/addBlogger/addblogger.component.css":
/*!**************************************************************!*\
  !*** ./src/app/bloggers/addBlogger/addblogger.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2FkZEJsb2dnZXIvYWRkYmxvZ2dlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/bloggers/blogger/blogger.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/bloggers/blogger/blogger.component.ts ***!
  \*******************************************************/
/*! exports provided: BloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerComponent", function() { return BloggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bloggers.actions */ "./src/app/bloggers.actions.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bloggers.service */ "./src/app/bloggers.service.ts");






let BloggerComponent = class BloggerComponent {
    constructor(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    ngOnInit() {
        this.bloggersState = this.store.select('bloggers');
        this.modalIndex = this.index;
    }
    changeBlogger(form) {
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["EditBlogger"]({ index: this.index,
            blogger: new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about) }));
        this.bloggersState.subscribe((blog) => {
            this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    }
    deleteBlogger() {
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteBlogger"](this.index));
        this.bloggersState.subscribe((blog) => {
            this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
    }
};
BloggerComponent.ctorParameters = () => [
    { type: _bloggers_service__WEBPACK_IMPORTED_MODULE_5__["BloggersService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BloggerComponent.prototype, "blogger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BloggerComponent.prototype, "index", void 0);
BloggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blogger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blogger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/blogger/blogger.component.html")).default,
    })
], BloggerComponent);



/***/ }),

/***/ "./src/app/bloggers/bloggers.component.css":
/*!*************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2Jsb2dnZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/bloggers/bloggers.component.ts":
/*!************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.ts ***!
  \************************************************/
/*! exports provided: BloggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersComponent", function() { return BloggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");






let BloggersComponent = class BloggersComponent {
    constructor(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    ngOnInit() {
        this.bloggersState = this.store.select('bloggers');
    }
    addBlogger(form) {
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about)));
        this.bloggersState.subscribe((blog) => {
            this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    }
};
BloggersComponent.ctorParameters = () => [
    { type: _bloggers_service__WEBPACK_IMPORTED_MODULE_5__["BloggersService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
BloggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bloggers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bloggers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bloggers/bloggers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bloggers.component.css */ "./src/app/bloggers/bloggers.component.css")).default]
    })
], BloggersComponent);



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let GuardService = class GuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.authenticated();
    }
};
GuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GuardService);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    background:#333;\r\n    color:#fff;}\r\n\r\n    .navbar{\r\n        border-bottom:#008ed6 3px solid;\r\n        opacity:0.8;}\r\n\r\n    #home-section{\r\n            background:url('coffee.jpg') no-repeat;\r\n            background-size:cover;\r\n            background-attachment:fixed;\r\n            min-height: 700px;}\r\n\r\n    #home-section.dark-overly{\r\n            background-color:rgba(0,0,0,7);\r\n            position:absolute;\r\n            top:0;\r\n            left:0;\r\n            width:100%;\r\n            min-height:700px; }\r\n\r\n    .info-header{\r\n            width:50%;\r\n            margin:auto;\r\n            border-bottom:1px #ddd solid;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVSxDQUFDOztJQUVYO1FBQ0ksK0JBQStCO1FBQy9CLFdBQVcsQ0FBQzs7SUFFWjtZQUNJLHNDQUFnRDtZQUNoRCxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLGlCQUFpQixDQUFDOztJQUN0QjtZQUNJLDhCQUE4QjtZQUM5QixpQkFBaUI7WUFDakIsS0FBSztZQUNMLE1BQU07WUFDTixVQUFVO1lBQ1YsZ0JBQWdCLEVBQUU7O0lBRXRCO1lBQ0ksU0FBUztZQUNULFdBQVc7WUFDWCw0QkFBNEIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQ6IzMzMztcclxuICAgIGNvbG9yOiNmZmY7fVxyXG5cclxuICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTojMDA4ZWQ2IDNweCBzb2xpZDtcclxuICAgICAgICBvcGFjaXR5OjAuODt9XHJcblxyXG4gICAgICAgICNob21lLXNlY3Rpb257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vaW1nL2NvZmZlZS5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNzAwcHg7fVxyXG4gICAgICAgICNob21lLXNlY3Rpb24uZGFyay1vdmVybHl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCw3KTtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6NzAwcHg7IH1cclxuICAgICAgICBcclxuICAgICAgICAuaW5mby1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4ICNkZGQgc29saWQ7fSJdfQ== */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");





let MainComponent = class MainComponent {
    constructor(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    ngOnInit() {
        this.getAllBloggers();
    }
    getAllBloggers() {
        this.bloggersService.getAllBloggers()
            .subscribe((bloggers) => {
            this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["AddBloggers"](bloggers));
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _bloggers_service__WEBPACK_IMPORTED_MODULE_2__["BloggersService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagenotfoundComponent = class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagenotfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")).default]
    })
], PagenotfoundComponent);



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let PostService = class PostService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    getAllPosts() {
        const token = this.authService.getToken();
        return this.http.get('https://eksperiment-c7be2.firebaseio.com/posts.json?auth=' + token, {
            headers: this.headers
        });
    }
    savePosts(posts) {
        const token = this.authService.getToken();
        return this.http.put('https://eksperiment-c7be2.firebaseio.com/posts.json?auth=' + token, posts, {
            headers: this.headers
        });
    }
    setSelectedPost(id) {
        this.selectedPostId = id;
    }
    getSelectedPost() {
        return this.selectedPostId;
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostService);



/***/ }),

/***/ "./src/app/posts/post/post.component.css":
/*!***********************************************!*\
  !*** ./src/app/posts/post/post.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/posts/post/post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PostComponent = class PostComponent {
    constructor(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.condition = false;
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.postService.getAllPosts()
            .subscribe((posts) => {
            for (var index in posts) {
                if (posts[index].id == id) {
                    this.post = posts[index];
                    this.condition = true;
                    break;
                }
            }
        });
        this.route.params
            .subscribe((params) => {
            const id = params['id'];
            console.log(id);
            this.postService.getAllPosts()
                .subscribe((posts) => {
                for (var index in posts) {
                    if (posts[index].id == id) {
                        this.post = posts[index];
                        this.condition = true;
                        break;
                    }
                }
            });
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: src_app_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/posts/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home-section{\r\n    background: url('nature.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 350px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUFpRDtJQUNqRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1nL25hdHVyZS5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PostsComponent = class PostsComponent {
    constructor(postService, router, route) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.posts = [];
        this.selectedPostId = -1;
    }
    ngOnInit() {
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.postService.getAllPosts()
            .subscribe((posts) => {
            if (posts != null) {
                this.posts = posts;
            }
        });
    }
    deletePost(id) {
        this.posts = this.posts.filter(posts => posts.id != id);
        this.postService.savePosts(this.posts)
            .subscribe((successuful) => {
            let selectedId = this.postService.getSelectedPost();
            let selectedPost = this.posts.find(posts => posts.id == selectedId);
            if (selectedPost == null || selectedPost == undefined) {
                this.router.navigate(['posts']);
            }
        });
    }
    submit() {
        let idValue = 1;
        if (this.posts.length > 0) {
            idValue = this.posts[this.posts.length - 1].id + 1;
        }
        const newPost = {
            id: idValue,
            title: this.addForm.value.title,
            category: this.addForm.value.category,
            datePosted: this.addForm.value.date
        };
        this.posts.push(newPost);
        this.postService.savePosts(this.posts)
            .subscribe();
        this.addForm.reset();
    }
};
PostsComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('postAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('insert', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translate(-100px)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0.5,
                            transform: 'translate(-70px)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0.8,
                            transform: 'translate(-70px)',
                            offset: 0.3
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1,
                            transform: 'translate(0)',
                            offset: 1
                        })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(900, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translate(100px)'
                    }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home-section{\r\n    background: url('welcome.png') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;}\r\n#home-section .dark-overlay{\r\n    background-color: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width:100%;\r\n    min-height: 700px;}\r\n.home-inner{\r\n        padding-top: 150px;\r\n    }\r\n.card-form{\r\n        opacity:0.8;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQWtEO0lBQ2xELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCLENBQUM7QUFDdEI7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLGlCQUFpQixDQUFDO0FBQ2xCO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBRUE7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1nL3dlbGNvbWUucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7fVxyXG4jaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O31cclxuICAgIC5ob21lLWlubmVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1mb3Jte1xyXG4gICAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let SigninComponent = class SigninComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signin(form) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);
    }
};
SigninComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home-section{\r\n    background: url('welcome.png') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;}\r\n#home-section .dark-overlay{\r\n    background-color: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width:100%;\r\n    min-height: 700px;}\r\n.home-inner{\r\n        padding-top: 150px;\r\n    }\r\n.card-form{\r\n        opacity:0.8;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQWtEO0lBQ2xELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCLENBQUM7QUFDdEI7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLGlCQUFpQixDQUFDO0FBQ2xCO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBRUE7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1nL3dlbGNvbWUucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7fVxyXG4jaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O31cclxuICAgIC5ob21lLWlubmVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1mb3Jte1xyXG4gICAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signup(form) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signupUser(email, password);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\natas\Eksperiment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map