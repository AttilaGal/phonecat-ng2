'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['phonecatApp']);
});