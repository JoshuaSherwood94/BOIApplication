"use strict";

(function() {

    var EditAccountController =  function(accountService, $log) {
    	$log.log("Edit Account Controller Created");
    	var vm = this;
    	vm.firstname ="";
    	vm.lastname ="";
    	vm.accountNumber ="";
    	
        vm.submitButton = function() {
        	$log.log("EditAccountController submit");
        	$log.log(vm.firstname);
        	$log.log(vm.lastname);
        	$log.log(vm.accountNumber);
        	var account ={firstName:vm.firstname, secondName:vm.lastname, accountNumber:vm.accountNumber};
        	$log.log(account);
        	accountService.saveAccount(account);
        }
             
    };

    angular.module('accountApp').controller('editAccountController', ['accountService','$log', EditAccountController]);
}());