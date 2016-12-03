'use strict';

angular
  .module('core.phone')
  .factory('Phone', PhoneService);

PhoneService.$inject = ['$http'];
function PhoneService($http) {
  return {
    getAllPhones: getAllPhones,
    getPhone: getPhone
  };

  function getAllPhones() {
    return $http.get('phones/phones.json');
  }

  function getPhone(phoneId) {
    var url = 'phones/' + phoneId + '.json';
    return $http.get(url);
  }
}
