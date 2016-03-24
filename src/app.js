define(["require", "exports", 'angular', 'uiRouter', 'ngAnimate', 'ngResource', 'ngLoadingBar', './core/core.init', './modules/modules.init', './scripts/scripts', 'ngMocks'], function (require, exports) {
    "use strict";
    var app = angular.module('app', [
        'ngAnimate',
        'ngResource',
        'angular-loading-bar',
        'ui.router',
        'app.core',
        'app.modules',
    ]);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = app;
});