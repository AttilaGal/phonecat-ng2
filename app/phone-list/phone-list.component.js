'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});


PhoneListController.$inject = ['Phone'];
function PhoneListController(Phone) {
  var vm = this;
  vm.phones = [];
  vm.orderProp = 'age';

  Phone.getAllPhones()
    .then(function (result) {
      vm.phones = result.data;
    });
}
