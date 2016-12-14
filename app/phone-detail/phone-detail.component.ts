'use strict';

import { Component, Inject } from '@angular/core';
import { PhoneService, PhoneData } from '../core/phone/phone.service';
@Component({
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html',
})
export class PhoneDetailComponent {

  phone: PhoneData;
  mainImageUrl: string;
  
  constructor(@Inject('$routeParams') $routeParams: any, phoneService: PhoneService) {
    phoneService.getPhone($routeParams['phoneId']).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
