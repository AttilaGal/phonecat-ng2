'use strict';

export class PhoneDetailController {
  $routeParams: any;
  PhoneService: any;
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'PhoneService'];
  constructor($routeParams, PhoneService) {
    this.PhoneService = PhoneService;
    this.$routeParams = $routeParams;

    this.PhoneService.getPhone(this.$routeParams.phoneId)
      .then( (result) => {
        this.phone = result.data;
        this.setImage(result.data.images[0]);
      });
  }

  setImage(imageUrl){
    this.mainImageUrl = imageUrl;
  };
}

// Register `phoneDetail` component, along with its associated controller and template
export const PhoneDetailComponent = {
  template: require('./phone-detail.template.html'),
  controller: PhoneDetailController
};
