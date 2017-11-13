webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
    };
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var idx = this.favoriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(idx, 1);
    };
    QuotesService.prototype.getFavoriteQuotes = function () {
        return this.favoriteQuotes.slice();
    };
    QuotesService.prototype.isFavorite = function (quote) {
        var idx = this.favoriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        return idx == -1 ? false : true;
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var SettingsService = (function () {
    function SettingsService() {
        this.altBackground = false;
    }
    SettingsService.prototype.setBackground = function (isAlt) {
        this.altBackground = isAlt;
    };
    SettingsService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingsService;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__["a" /* FavoritesPage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]=\'favoritesPage\' tabTitle=\'Favorites\' tabIcon=\'star\'></ion-tab>\n\n  <ion-tab [root]=\'libraryPage\' tabTitle=\'Library\' tabIcon=\'book\'></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\tabs\tabs.html"*/
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quotes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = (function () {
    function FavoritesPage(quoteService, modalCtrl, settingsSvc, toastCtrl, alertCtrl, menuCtrl) {
        this.quoteService = quoteService;
        this.modalCtrl = modalCtrl;
        this.settingsSvc = settingsSvc;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'menuLogin');
        this.menuCtrl.enable(true, 'menuFav');
    }
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quoteService.getFavoriteQuotes();
    };
    FavoritesPage.prototype.getQuoteDetail = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], quote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.quoteService.removeQuoteFromFavorites(quote);
                _this.quotes = _this.quoteService.getFavoriteQuotes();
            }
        });
    };
    FavoritesPage.prototype.unfavoriteQuote = function (quote) {
        this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavoriteQuotes();
    };
    FavoritesPage.prototype.setBgColor = function () {
        return this.settingsSvc.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    };
    FavoritesPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            position: 'top'
        });
        toast.present();
        toast.dismiss();
        toast.onDidDismiss(function () {
            console.log("Toast dismissed.");
        });
    };
    FavoritesPage.prototype.onNewQuote = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Add New Quote",
            inputs: [
                {
                    name: "person",
                    placeholder: "Quote Author"
                },
                {
                    name: "text",
                    placeholder: "Quote"
                }
            ],
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        var q = { id: "0", person: data.person, text: data.text };
                        if (data.person && data.text) {
                            _this.quoteService.addQuoteToFavorites(q);
                            _this.quotes = _this.quoteService.getFavoriteQuotes();
                            var toast = _this.toastCtrl.create({
                                message: 'New quote was added',
                                duration: 2000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel"
                }
            ]
        });
        alert.present();
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start >\n\n      <button ion-button menuToggle="menuFav">\n\n        <ion-icon name="menu" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="onNewQuote()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Favorites</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <button block ion-button small (click)="onAddQuote()">\n\n    <ion-icon name="add" style="font-size: 200%; font-weight: bold; color: white;"></ion-icon>\n\n  </button> -->\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor=\'let quote of quotes\'>\n\n      <ion-item (click)="getQuoteDetail(quote)" [color]="setBgColor()">\n\n        <h2>{{ quote.text }}</h2>\n\n        <p> {{ quote.person }}</p>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button (click)="unfavoriteQuote(quote)" ion-button color="danger"><ion-icon name="trash"></ion-icon>Delete</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\favorites\favorites.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quotes__["a" /* QuotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quotes__["a" /* QuotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]) === "function" && _f || Object])
], FavoritesPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotePage = (function () {
    function QuotePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        this.author = this.navParams.get('person');
        this.quoteText = this.navParams.get('text');
    };
    QuotePage.prototype.closeModal = function (delQuote) {
        if (delQuote === void 0) { delQuote = false; }
        this.viewCtrl.dismiss(delQuote);
    };
    return QuotePage;
}());
QuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quote',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\quote\quote.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Quote\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <h2>{{ quoteText }}</h2>\n\n            <p>{{ author }}</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button outline small color="danger" (click)="closeModal(true)">Unfavorite</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <button ion-button color="danger" (click)="closeModal()">Close</button>\n\n</ion-content>'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\quote\quote.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], QuotePage);

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_quote__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_quotes__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LibraryPage = (function () {
    function LibraryPage() {
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_3__quotes_quotes__["a" /* QuotesPage */];
        this.items = ['Apples', 'Bananas', 'Berries'];
    }
    LibraryPage.prototype.reorderItems = function (indexes) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* reorderArray */])(this.items, indexes);
    };
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_1__data_quote__["a" /* default */];
    };
    LibraryPage.prototype.buy = function () {
        console.log('buy');
    };
    LibraryPage.prototype.remove = function () {
        console.log('remove');
    };
    return LibraryPage;
}());
LibraryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\library\library.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Library</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button *ngFor="let quoteGroup of quoteCollection" [navPush]="quotesPage" [navParams]="quoteGroup" ion-item>\n\n      <ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n\n      <h2>{{ quoteGroup.category | uppercase }}</h2>\n\n      <p>{{ quoteGroup.quotes.length }} quotes</p>\n\n    </button>\n\n  </ion-list>\n\n<!--\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../../assets/img/mcr.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Welcome to the Black Parade</h2>\n\n        <p>My Chemical Romance</p>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="primary" (click)="buy()" ><ion-icon name="cart"></ion-icon>Buy</button>\n\n        <button ion-button color="danger" (click)="remove()"><ion-icon name="trash"></ion-icon>Remove</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../../assets/img/fob.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Infinity on High</h2>\n\n        <p>Fall Out Boy</p>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="primary" (click)="buy()" ><ion-icon name="cart"></ion-icon>Buy</button>\n\n        <button ion-button color="danger" (click)="remove()" ><ion-icon name="trash"></ion-icon>Remove</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../../assets/img/patd.jpg">\n\n        </ion-thumbnail>\n\n        <h2>I Write Sins Not Tragedy</h2>\n\n        <p>Panic! at the Disco</p>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="primary" (click)="buy()" ><ion-icon name="cart"></ion-icon>Buy</button>\n\n        <button ion-button color="danger" (click)="remove()" ><ion-icon name="trash"></ion-icon>Remove</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-item>An ion item</ion-item>\n\n    <button ion-item>A button item</button>\n\n  </ion-list>\n\n\n\n  <ion-item-group>\n\n    <ion-item-divider>A</ion-item-divider>\n\n    <ion-item>Avocados</ion-item>\n\n    <ion-item>Apples</ion-item>\n\n    <ion-item-divider>B</ion-item-divider>\n\n    <ion-item>Bananas</ion-item>\n\n    <ion-item>Berries</ion-item>\n\n    <ion-item-divider>C</ion-item-divider>\n\n    <ion-item>Cherries</ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Account Settings</ion-list-header>\n\n      <ion-item>Change Username</ion-item>\n\n      <ion-item>Change Password</ion-item>\n\n      <ion-item>Change Email</ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Privacy</ion-list-header>\n\n      <ion-item>Location Settings</ion-item>\n\n      <ion-item>Who Can View Your Profile</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n\n    <ion-item *ngFor="let item of items">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\library\library.html"*/,
    })
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesPage = (function () {
    function QuotesPage(navParams, quotesService, alertCtrl) {
        this.navParams = navParams;
        this.quotesService = quotesService;
        this.alertCtrl = alertCtrl;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quoteGroup = this.navParams.data;
        console.log(this.quoteGroup.category);
    };
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quotesService.isFavorite(quote);
    };
    QuotesPage.prototype.addToFavorites = function (quote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            //subTitle: 'Are you sure',
            message: 'Are you sure you want to add the quote to favorites?',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.quotesService.addQuoteToFavorites(quote);
                        console.log(_this.quotesService);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('I changed my mind');
                    }
                }]
        });
        alert.present();
    };
    QuotesPage.prototype.removeFromFavorites = function (quote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove Quote',
            //subTitle: 'Are you sure',
            message: 'Are you sure you want to remove the quote from favorites?',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.quotesService.removeQuoteFromFavorites(quote);
                        console.log(_this.quotesService);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('I changed my mind');
                    }
                }]
        });
        alert.present();
    };
    return QuotesPage;
}());
QuotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quotes',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\quotes\quotes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>quotes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor=\'let quote of quoteGroup.quotes\' padding>\n\n    <ion-card-header>\n\n      {{ quote.id }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{ quote.text }}</p>\n\n      <p class="author">{{ quote.person }}</p>\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <ion-col text-right>\n\n        <button ion-button small clear *ngIf=\'!isFavorite(quote)\' (click)=\'addToFavorites(quote)\'>Favorite</button>\n\n        <button ion-button small clear color=\'danger\' *ngIf=\'isFavorite(quote)\' (click)=\'removeFromFavorites(quote)\'>Unfavorite</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\quotes\quotes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], QuotesPage);

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(settingsSvc, menuCtrl) {
        this.settingsSvc = settingsSvc;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'menuLogin');
        this.menuCtrl.enable(true, 'menuFav');
    }
    SettingsPage.prototype.onToggle = function (toggle) {
        this.settingsSvc.setBackground(toggle.checked);
    };
    SettingsPage.prototype.isChecked = function () {
        return this.settingsSvc.isAltBackground();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start >\n\n      <button ion-button menuToggle="menuFav">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label>Alternative Background</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-toggle (ionChange)="onToggle($event)" [checked]="isChecked()"></ion-toggle>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _b || Object])
], SettingsPage);

var _a, _b;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_library_library__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quotes__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_quotes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_settings__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up__["a" /* SignUpPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up__["a" /* SignUpPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__services_quotes__["a" /* QuotesService */],
            __WEBPACK_IMPORTED_MODULE_15__services_settings__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sign_up_sign_up__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authCtrl, toastCtrl) {
        this.menuCtrl = menuCtrl;
        this.authCtrl = authCtrl;
        this.toastCtrl = toastCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */];
        this.logInPage = __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__["a" /* SignInPage */];
        this.signUpPage = __WEBPACK_IMPORTED_MODULE_8__pages_sign_up_sign_up__["a" /* SignUpPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyBuDl_I5WJW2ZS7aLFnlxTYrReEOBwYApI",
            authDomain: "favorite-quotes-app.firebaseapp.com"
        });
        /*firebase.auth().onAuthStateChanged(user => {
          if (user) {
            //logged in
          } else {
            //not logged in
          }
        });*/
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authCtrl.logOut().then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Logged out',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.nav.setRoot(_this.logInPage);
            _this.menuCtrl.close();
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: error.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('sideMenuContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\app\app.html"*/'<ion-menu [content]="sideMenuContent" id="menuFav">\n\n    <ion-header>\n\n        <ion-toolbar text-center>\n\n            <h2>Menu</h2>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item (click)="onLoad(tabsPage)">\n\n                <ion-icon name="quote" item-left></ion-icon>\n\n                Quotes\n\n            </button>\n\n            <button ion-item (click)="onLoad(settingsPage)">\n\n                <ion-icon name="settings" item-left></ion-icon>\n\n                Settings\n\n            </button>\n\n            <button ion-item (click)="logout()">\n\n                <ion-icon name="log-out" item-left></ion-icon>\n\n                Log Out\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-menu [content]="sideMenuContent" id="menuLogin">\n\n    <ion-header>\n\n        <ion-toolbar text-center>\n\n            <h2>Menu</h2>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item (click)="onLoad(logInPage)">\n\n                <ion-icon name="log-in" item-left></ion-icon>\n\n                Sign In\n\n            </button>\n\n            <button ion-item (click)="onLoad(signUpPage)">\n\n                <ion-icon name="person-add" item-left></ion-icon>\n\n                Sign Up\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="signUpPage" #sideMenuContent></ion-nav>\n\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_auth__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'education',
        quotes: [
            {
                id: '1',
                person: 'John Dewey',
                text: 'Education is not preparation for life; education is life itself.'
            },
            {
                id: '2',
                person: 'Leo Buscaglia',
                text: 'Change is the end result of all true learning.'
            },
            {
                id: '3',
                person: 'Martin Luther King, Jr.',
                text: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.'
            },
            {
                id: '4',
                person: 'Malcolm Forbes',
                text: 'Education\'s purpose is to replace an empty mind into an open one.'
            }
        ],
        icon: 'book'
    },
    {
        category: 'travel',
        quotes: [
            {
                id: '5',
                person: 'J.R.R. Tolkien',
                text: 'Not all those who wander are lost.'
            },
            {
                id: '6',
                person: 'Robert Louis Stevenson',
                text: 'I travel not to go anywhere, but to go. I travel for travel\'s sake. The great affair is to move.'
            },
            {
                id: '7',
                person: 'Gustave Flaubert',
                text: 'Travel makes one modest. You see what a tiny place you occupy in the world.'
            }
        ],
        icon: 'walk'
    },
    {
        category: 'life',
        quotes: [
            {
                id: '8',
                person: 'Elbert Hubbard',
                text: 'Do not take life too seriously. You will never get out of it alive.'
            },
            {
                id: '9',
                person: 'Josh Billings',
                text: 'Life consists not in holding good cards but in playing those you hold well.'
            },
            {
                id: '10',
                person: 'John F. Kennedy',
                text: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.'
            },
            {
                id: '11',
                person: 'Oliver Goldsmith',
                text: 'Life is a journey that must be traveled no matter how bad the roads and accommodations.'
            }
        ],
        icon: 'leaf'
    },
    {
        category: 'teamwork',
        quotes: [
            {
                id: '12',
                person: 'Michael Jordan',
                text: 'Talent wins the game, but teamwork and intelligence wins championships.'
            },
            {
                id: '13',
                person: 'Casey Stengel',
                text: 'Finding good players is easy. Getting them to play as a team is another story.'
            }
        ],
        icon: 'people'
    }
]);
//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signUp = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signIn = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logOut = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignInPage = (function () {
    function SignInPage(navCtrl, navParams, authCtrl, toastCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authCtrl = authCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.menuCtrl.enable(true, 'menuLogin');
        this.menuCtrl.enable(false, 'menuFav');
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.signIn = function (form) {
        var _this = this;
        this.authCtrl.signIn(form.value.email, form.value.password).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Success',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.navCtrl.setRoot(_this.tabsPage);
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: error.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-in',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle="menuLogin">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="signIn(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="text" name="email" required placeholder="Email Address Here" ngModel></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" name="password" required placeholder="Password Here" ngModel></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block>Sign Me In</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\sign-in\sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _e || Object])
], SignInPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, authCtrl, toastCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authCtrl = authCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.signInPage = __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */];
        this.menuCtrl.enable(true, 'menuLogin');
        this.menuCtrl.enable(false, 'menuFav');
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signUp = function (form) {
        var _this = this;
        this.authCtrl.signUp(form.value.email, form.value.password).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Success',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.navCtrl.setRoot(_this.signInPage);
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: error.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button menuToggle="menuLogin">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="signUp(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="text" name="email" required placeholder="Email Address Here" ngModel></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" name="password" required placeholder="Password Here" ngModel></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block>Sign Me Up</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Kuliah\Materi & Tugas\Semester 7\Mobile 2\favorite-quotes-app2\favorite-quotes-app\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _e || Object])
], SignUpPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sign-up.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map