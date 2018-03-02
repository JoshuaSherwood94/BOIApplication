"use strict";

(function () {

    
    function AccountService (accountDal, $log) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.saveAccount = function(account)
        {
        	$log.log("AccountService saveAccounts");
        	$log.log(account);
        	accountDal.saveAccount(account);
        };
        
        this.updateAccount = function(account)
        {
        	$log.log("AccountService updateAccounts");
        	$log.log(account);
        	accountDal.updateAccount(account);
        };
        
        this.deleteAccount = function(account)
        {
        	$log.log("AccountService deleteAccounts");
        	$log.log(account);
        	accountDal.deleteAccount(account);
        };
        
    }
    
    angular.module("accountApp").service("accountService", ['accountDal','$log', AccountService]);

}());