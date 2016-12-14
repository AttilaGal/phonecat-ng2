
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})
export class PhoneListComponent implements OnInit {
  
  // PhoneService:any;
  phones:any;
  orderProp:string = 'age';

  // static $inject = ['PhoneService'];
  //
  // constructor(PhoneService) {
  //   this.PhoneService = PhoneService;
  //
  //   this.PhoneService.getAllPhones()
  //     .then((result) => {
  //       this.phones = result.data;
  //     });
  // }
  
  ngOnInit(): void{
    this.phones = [
        {
          "age": 0,
          "id": "motorola-xoom-with-wi-fi",
          "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
          "name": "Motorola XOOM\u2122 with Wi-Fi",
          "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
          "age": 1,
          "id": "motorola-xoom",
          "imageUrl": "img/phones/motorola-xoom.0.jpg",
          "name": "MOTOROLA XOOM\u2122",
          "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
          "age": 2,
          "carrier": "AT&T",
          "id": "motorola-atrix-4g",
          "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
          "name": "MOTOROLA ATRIX\u2122 4G",
          "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
        },
      ]
  }
}
