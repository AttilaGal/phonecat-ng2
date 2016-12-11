'use strict';

angular
  .module('core')
  .filter('checkmark', CheckMarkFilter);

function CheckMarkFilter() {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
}
