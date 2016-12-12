'use strict';

import * as angular from 'angular';

import {CoreModule} from '../core/core.module';
import {PhoneDetailComponent} from './phone-detail.component';

// Define the `phoneDetail` module
export const PhoneDetailModule = angular.module('phoneDetail', [
  'ngRoute',
  CoreModule.name
]);

PhoneDetailModule.component('phoneDetail', PhoneDetailComponent);