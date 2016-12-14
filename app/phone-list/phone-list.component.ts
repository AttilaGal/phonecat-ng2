
import {Component, OnInit} from '@angular/core';
import {
  PhoneService,
  PhoneData
} from "../core/phone/phone.service";

@Component({
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})
export class PhoneListComponent implements OnInit {
  
  phoneService: PhoneService;
  phones: any;
  orderProp:string = 'age';
  query: string;


  constructor(phoneService: PhoneService) {
    this.phoneService = phoneService;
  }
  
  ngOnInit(): void{
    this.phoneService
      .getAllPhones()
      .subscribe( phones => {
        this.phones = phones;
      });
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }
  
  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }
  
  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }
}
