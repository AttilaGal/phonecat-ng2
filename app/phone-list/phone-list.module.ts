'use strict';

import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent} from '@angular/upgrade/static';


import {PhoneListComponent} from './phone-list.component';
import {CorePhoneModule} from '../core/phone/phone.module'

// Define the `phoneList` module
export const PhoneListModule = angular.module('phoneList', [CorePhoneModule.name]);

@NgModule({
  imports: [BrowserModule, FormsModule],
  // components migrated to Angular 2 should be registered here
  declarations: [PhoneListComponent],
  entryComponents: [PhoneListComponent]

})
export class PhoneListNgModule {}

PhoneListModule.directive(
  'phoneList',
  downgradeComponent({component: PhoneListComponent})
);