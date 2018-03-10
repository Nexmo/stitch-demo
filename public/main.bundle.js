webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversations_conversations_component__ = __webpack_require__("../../../../../src/app/conversations/conversations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'conversations',
        component: __WEBPACK_IMPORTED_MODULE_3__conversations_conversations_component__["a" /* ConversationsComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conversations_conversations_component__ = __webpack_require__("../../../../../src/app/conversations/conversations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messaging_service__ = __webpack_require__("../../../../../src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__keys_pipe__ = __webpack_require__("../../../../../src/app/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__conversations_conversations_component__["a" /* ConversationsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__keys_pipe__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatTooltipModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__messaging_service__["a" /* MessagingService */], __WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/conversations/conversations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.mat-drawer.mat-drawer-side {\n    padding: 0 5px;\n}\n.container /deep/ .mat-tab-label {\n    min-width: 100px;\n}\n\n.empty-conversation {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    height: 100%;\n}\n\n.conversation-header h2, .conversation-header p {\n    -ms-flex-align: center;\n        align-items: center;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n\n.text-center {\n    text-align: center;\n    width: 100%;\n}\n\n.conversation-history.mat-list {\n    height: calc(100% - 180px);\n    overflow-x: scroll;\n    position: absolute;\n    width: 100%;\n}\n\n.conversation-history.mat-list p {\n    margin: 0;\n}\n\n.empty-conversation h1 {\n    margin: 0;\n}\n\n.conversations .mat-list-item {\n    cursor: pointer;\n}\n\n.create-conversation {\n    position: relative;\n    float: right;\n    padding: 30px 0;\n}\n\n.mat-card {\n    height: 100%;\n    padding: 0 24px;\n    overflow: scroll;\n}\n.conversation-input {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: #fafafa;\n}\n\nsection .mat-list .mat-list-avatar{\n    width: 25px;\n    height: 25px;\n}\n\n.mat-list-avatar {\n    margin: 0 5px;\n}\n\n.right {\n    text-align: right;\n}\n\n.full-width {\n    width: 100%;\n}\n\n.full-width .mat-icon {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conversations/conversations.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav mode=\"side\" opened>\n    <mat-card>\n      <mat-tab-group>\n        <mat-tab>\n          <ng-template mat-tab-label>\n            <mat-icon matListIcon>forum</mat-icon>\n          </ng-template>\n          <mat-list class=\"conversations\">\n            <mat-list-item *ngFor=\"let conversation of conversations | keys\" (click)=\"selectConversation(conversation.value.id)\">\n              <mat-icon matListIcon>forum</mat-icon>\n              <p>{{conversation.value.display_name}}</p>\n            </mat-list-item>\n            <mat-list-item class=\"create-conversation\">\n              <button mat-mini-fab (click)=\"createConversation()\">\n                <mat-icon aria-label=\"Create Conversation\">add</mat-icon>\n              </button>\n            </mat-list-item>\n          </mat-list>\n        </mat-tab>\n        <mat-tab>\n          <ng-template mat-tab-label>\n            <mat-icon matListIcon>account_circle</mat-icon>\n          </ng-template>\n          <mat-list>\n            <mat-list-item *ngFor=\"let user of users\">\n              <mat-icon matListIcon>account_circle</mat-icon>\n              <p>{{user.name}}</p>\n            </mat-list-item>\n          </mat-list>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </mat-sidenav>\n  <mat-sidenav position=\"end\" mode=\"side\" opened *ngIf=\"selectedConversation\">\n    <mat-card>\n      <mat-list>\n        <mat-list-item *ngFor=\"let member of selectedConversation.members | keys\">\n          <img matListAvatar src=\"https://randomuser.me/api/portraits/thumb/{{nameToImage(member.value.id).prefix}}men/{{nameToImage(member.value.id).index}}.jpg\"\n          />\n          <p>{{member.value.user.name}}</p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </mat-sidenav>\n  <section class=\"empty-conversation\" *ngIf=\"!selectedConversation\">\n    <h1 class=\"mat-display-1\">Select a conversation from the left to start chatting</h1>\n  </section>\n  <section *ngIf=\"selectedConversation\">\n    <div class=\"mat-typography conversation-header\">\n      <h2>\n        <mat-icon>forum</mat-icon>\n        {{selectedConversation.display_name}}</h2>\n      <p>\n        <mat-icon>account_circle</mat-icon>\n        {{(selectedConversation.members | keys).length}} Members</p>\n    </div>\n\n    <mat-divider></mat-divider>\n    <mat-list dense class=\"conversation-history mat-typography\">\n      <mat-list-item *ngFor=\"let event of selectedConversation.events.values()\" [dir]=\"event.from === selectedConversation.me.id ? 'rtl' : 'ltr'\">\n        <img *ngIf=\"event.type == 'text'\" matListAvatar matTooltip=\"{{selectedConversation.members[event.from].user.name}}\" src=\"https://randomuser.me/api/portraits/thumb/{{nameToImage(event.from).prefix}}men/{{nameToImage(event.from).index}}.jpg\"\n        />\n        <p *ngIf=\"event.type == 'text'\" [dir]=\"'ltr'\">{{event.body.text}}</p>\n        <p *ngIf=\"event.type == 'member:invited'\" class=\"text-center\">\n          <b>{{selectedConversation.members[event.from].user.name}}</b> has been invited to the conversation</p>\n        <p *ngIf=\"event.type == 'member:joined'\" class=\"text-center\">\n          <b>{{selectedConversation.members[event.from].user.name}}</b> has joined the conversation</p>\n        <p *ngIf=\"event.type == 'member:left'\" class=\"text-center\">\n          <b>{{selectedConversation.members[event.from].user.name}}</b> has left the conversation</p>\n        <p *ngIf=\"event.type == 'member:media'\" class=\"text-center\">\n          <b>{{selectedConversation.members[event.from].user.name}}</b> has {{event.body.audio ? 'enabled': 'disabled'}} audio</p>\n      </mat-list-item>\n    </mat-list>\n\n    <div class=\"conversation-input\">\n      <mat-divider></mat-divider>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Start chatting...\" name=\"text\" [(ngModel)]=\"text\">\n        <mat-icon matSuffix (click)=\"sendText(text)\">send</mat-icon>\n      </mat-form-field>\n    </div>\n  </section>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/conversations/conversations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging_service__ = __webpack_require__("../../../../../src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationsComponent = (function () {
    function ConversationsComponent(ms, ds, router) {
        this.ms = ms;
        this.ds = ds;
        this.router = router;
        this.events = [];
    }
    ConversationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.ds.app) {
            this.router.navigate(['/']);
        }
        else {
            this.ds.app.getConversations().then(function (conversations) { return _this.conversations = conversations; });
            this.ms.getUsers().then(function (users) { return _this.users = users; });
        }
    };
    ConversationsComponent.prototype.selectConversation = function (conversationId) {
        var _this = this;
        this.ds.app.getConversation(conversationId).then(function (conversation) {
            _this.selectedConversation = conversation;
            // this.events = []
            // for (let event in conversation.events) {
            //   this.events.push(conversation.events[event])
            // }
            // this.selectedConversation.on("text", (sender, message) => {
            //   this.events.push(message)
            // })
            console.log("Selected Conversation", _this.selectedConversation);
        });
    };
    ConversationsComponent.prototype.createConversation = function (displayName) {
        this.ms.createConversation(displayName);
    };
    ConversationsComponent.prototype.sendText = function (text) {
        this.selectedConversation.sendText(text);
        this.text = "";
    };
    ConversationsComponent.prototype.nameToImage = function (name) {
        var hash = this.hashStr(name);
        var index = hash % 200;
        if (index < 100) {
            return {
                prefix: "",
                index: index
            };
        }
        else {
            return {
                prefix: "wo",
                index: index - 100
            };
        }
    };
    ConversationsComponent.prototype.hashStr = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            hash += charCode;
        }
        return hash;
    };
    ConversationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversations',
            template: __webpack_require__("../../../../../src/app/conversations/conversations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conversations/conversations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__messaging_service__["a" /* MessagingService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ConversationsComponent);
    return ConversationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-tabs .full-width {\n    width: 100%;\n}\n\n.login-tabs button {\n    float: right;\n}\n\n.login-tabs form {\n    padding: 20px 0;\n}\n\n.mat-list-icon {\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-spinner {\n    width: 20px !important;\n    height: 20px !important;\n    display: inline-block;\n    margin-left: 10px;\n}\n\n/deep/ .mat-spinner svg{\n    width: 20px !important;\n    height: 20px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile colspan=\"1\" rowspan=\"5\"></mat-grid-tile>\n  <mat-grid-tile colspan=\"2\" rowspan=\"1\"></mat-grid-tile>\n  <mat-grid-tile colspan=\"1\" rowspan=\"5\"></mat-grid-tile>\n  <mat-grid-tile colspan=\"2\" rowspan=\"3\">\n      <mat-card>\n        <mat-tab-group class=\"login-tabs\">\n          <mat-tab label=\"Login\">\n            <form (ngSubmit)=\"onLogin()\">\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">\n              </mat-form-field>\n              <br>\n              <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"showSpinner = !showSpinner\">Login <mat-spinner color=\"accent\" mode=\"indeterminate\" *ngIf=\"showSpinner\"></mat-spinner></button>\n            </form>\n          </mat-tab>\n          <mat-tab label=\"Create User\">\n            <form (ngSubmit)=\"onCreateUser()\">\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">\n              </mat-form-field>\n              <br>\n              <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"showSpinner = !showSpinner\">Create User <mat-spinner color=\"accent\" mode=\"indeterminate\" *ngIf=\"showSpinner\"></mat-spinner></button>\n            </form>\n          </mat-tab>\n        </mat-tab-group>\n      </mat-card>\n    </mat-grid-tile>\n\n\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging_service__ = __webpack_require__("../../../../../src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
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
    function LoginComponent(ms, ds, router) {
        this.ms = ms;
        this.ds = ds;
        this.router = router;
        this.username = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.ms.initialize();
    };
    LoginComponent.prototype.onLogin = function () {
        this.ms.getUserJwt(this.username).then(this.authenticate.bind(this));
    };
    LoginComponent.prototype.onCreateUser = function () {
        this.ms.createUser(this.username).then(this.authenticate.bind(this));
    };
    LoginComponent.prototype.authenticate = function (userJwt) {
        var _this = this;
        this.ms.client.login(userJwt).then(function (app) {
            _this.ds.app = app;
            _this.router.navigate(['/conversations']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__messaging_service__["a" /* MessagingService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GATEWAY_URL = "http://localhost:3000/api/";
var MessagingService = (function () {
    function MessagingService(http) {
        this.http = http;
    }
    MessagingService.prototype.initialize = function () {
        this.client = new ConversationClient({
            debug: false
        });
    };
    MessagingService.prototype.getUserJwt = function (username) {
        return this.http.get(GATEWAY_URL + "jwt/" + username + "?admin=true").toPromise().then(function (response) { return response.user_jwt; });
    };
    MessagingService.prototype.createUser = function (username) {
        return this.http.post(GATEWAY_URL + "users/", { username: username, admin: true }).toPromise().then(function (response) { return response.user_jwt; });
    };
    MessagingService.prototype.createConversation = function (displayName) {
        return this.http.post(GATEWAY_URL + "conversations/", { displayName: displayName }).toPromise().then(console.log);
    };
    MessagingService.prototype.getUsers = function () {
        return this.http.get(GATEWAY_URL + "users/").toPromise();
    };
    MessagingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map