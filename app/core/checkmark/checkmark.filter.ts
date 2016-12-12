'use strict';

export const CheckMarkFilter = function CheckMarkFilter() {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
};
