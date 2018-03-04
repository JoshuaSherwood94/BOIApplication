"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
    	$log.log("Account Controller Created");
    	var vm = this;
    	
    	vm.firstname = "";
    	vm.lastname = "";
    	vm.accountNumber ="";
    	
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
       
       vm.deleteAccount = function(firstname, lastname, accountNumber, accountId) {
       	$log.log("EditAccountController deleteAccount");
       	$log.log(firstname);
       	$log.log(lastname);
       	$log.log(accountNumber);
       	$log.log(accountId);
       	var account = {id:accountId};
       	accountService.deleteAccount(account);
        init();
       }
       
       vm.updateAccount = function(firstname, lastname, accountNumber,accountId) {
          	$log.log("AccountController updateAccount");
          	$log.log("firstname" + firstname);
          	$log.log("lastname" + lastname);
          	$log.log("accountNumber" + accountNumber);
          	$log.log("accountid" + accountId);
            var account = {firstname:firstname, lastname:lastname, accountNumber:accountNumber, id:accountId};
            $log.log("account" + account);
          	$state.go('updateAccount',account)
          }
            
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log','$state', AccountController]);
}());