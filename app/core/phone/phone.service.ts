'use strict';

angular
  .module('core.phone')
  .service('PhoneService', class PhoneService{
    $http: any;
    
    static $inject = ['$http'];
    constructor($http) {
      this.$http = $http;
    }

    getAllPhones() {
      return this.$http.get('phones/phones.json');
    }

    getPhone(phoneId) {
      let url = 'phones/' + phoneId + '.json';
      return this.$http.get(url);
    }

  });

