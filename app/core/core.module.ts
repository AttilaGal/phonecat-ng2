'use strict';

import * as angular from 'angular';

import {CorePhoneModule} from './phone/phone.module';
import {CheckMarkFilter} from './checkmark/checkmark.filter';
// Define the `core` module
export const CoreModule = angular.module('core', [CorePhoneModule.name]);

CoreModule.filter('checkmark', CheckMarkFilter);