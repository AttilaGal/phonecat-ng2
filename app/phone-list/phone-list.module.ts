'use strict';

import * as angular from 'angular';

import {PhoneListComponent} from './phone-list.component';
import {CorePhoneModule} from '../core/phone/phone.module'

// Define the `phoneList` module
export const PhoneListModule = angular.module('phoneList', [CorePhoneModule.name]);

PhoneListModule.component('phoneList', PhoneListComponent);