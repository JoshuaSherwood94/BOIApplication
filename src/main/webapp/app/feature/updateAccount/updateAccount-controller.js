"use strict";

(function() {

    var UpdateAccountController =  function(accountService, $log, $stateParams) {
    	$log.log("Update Account Controller Created");
    	var vm = this;
    	
         vm.firstname=$stateParams.firstname;
         vm.lastname=$stateParams.lastname;
         vm.accountNumber=$stateParams.accountNumber;
         vm.accountId=$stateParams.accountId;
         
        $log.log(vm.firstname);
     	$log.log(vm.lastname);
     	$log.log(vm.accountNumber);
    	
        vm.submitButton = function() {
        	$log.log("UpdateAccountController submit");
        	$log.log(firstname);
        	$log.log(lastname);
        	$log.log(accountNumber);
        	var account ={firstName:vm.firstname, secondName:vm.lastname, accountNumber:vm.accountNumber};
        	$log.log(account);
        	
        }
             
    };

    angular.module('accountApp').controller('updateAccountController', ['accountService','$log','$stateParams', UpdateAccountController]);
}());