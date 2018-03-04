"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("editAccount", {
        url: "/editAccount",
        templateUrl: "app/feature/editAccount/editAccount.html"
        }).state("updateAccount", {
            url: "/updateAccount",
            params: {
            	firstname: null,
                lastname: null,
                accountNumber: null,
                id: null
            },
            templateUrl: "app/feature/updateAccount/updateAccount.html"
            })
    });
}());