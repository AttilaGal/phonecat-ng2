'use strict';

import * as angular from 'angular';

import PhoneService from './phone.service';

// Define the `core.phone` module
export const CorePhoneModule = angular.module('core.phone', []);

CorePhoneModule.service('PhoneService', PhoneService);