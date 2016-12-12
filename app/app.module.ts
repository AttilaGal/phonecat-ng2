'use strict';

import * as angular from 'angular';
import 'angular-route';

import {Ng1AppConfig} from "./app.config";

import {CoreModule} from './core/core.module';
import {PhoneDetailModule} from './phone-detail/phone-detail.module';
import {PhoneListModule} from './phone-list/phone-list.module';

// Define the `phonecatApp` module
export const Ng1AppModule = angular.module('phonecatApp', [
  'ngRoute',
  CoreModule.name,
  PhoneListModule.name,
  PhoneDetailModule.name
]);

Ng1AppModule.config(Ng1AppConfig);