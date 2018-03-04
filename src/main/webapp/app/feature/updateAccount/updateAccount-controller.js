"use strict";

(function() {

    var UpdateAccountController =  function(accountService, $log, $stateParams) {
    	$log.log("Update Account Controller Created");
    	var vm = this;
    	
        vm.firstname=$stateParams.firstname;
        vm.lastname=$stateParams.lastname;
        vm.accountNumber=$stateParams.accountNumber;
        vm.accountId=$stateParams.id;
         
        $log.log("firstname" + vm.firstname);
        $log.log("lastname" + vm.lastname);
        $log.log("accountNumber" + vm.accountNumber);
        $log.log("accountid" + vm.accountId);
    	
        vm.submitButton = function() {
        	$log.log("UpdateAccountController submit");
        	var account ={firstName:vm.firstname, secondName:vm.lastname, accountNumber:vm.accountNumber, id:vm.accountId};
        	$log.log(JSON.stringify(account));
            accountService.updateAccount(account)
        }
        	
    }

    angular.module('accountApp').controller('updateAccountController', ['accountService','$log','$stateParams', UpdateAccountController]);
}());