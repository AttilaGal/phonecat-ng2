'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var vm = this;

        Phone.getPhone($routeParams.phoneId)
          .then(function(result) {
            console.log('Result ' + JSON.stringify(result));
            vm.phone = result.data;
            vm.setImage(result.data.images[0]);
          });

        vm.setImage = function setImage(imageUrl) {
          vm.mainImageUrl = imageUrl;
        };
      }
    ]
  });
