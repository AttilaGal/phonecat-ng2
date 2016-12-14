'use strict';

import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from '../core/core.module';
import {PhoneDetailComponent} from './phone-detail.component';

// Define the `phoneDetail` module
export const PhoneDetailModule = angular.module('phoneDetail', [
  'ngRoute',
  CoreModule.name
]);

@NgModule({
  imports: [BrowserModule],
  // components migrated to Angular 2 should be registered here
  declarations: [PhoneDetailComponent],
  entryComponents: [PhoneDetailComponent]

})
export class PhoneDetailNgModule {}
PhoneDetailModule.directive('phoneDetail', downgradeComponent({component: PhoneDetailComponent}));