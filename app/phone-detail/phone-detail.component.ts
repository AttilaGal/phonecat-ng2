'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: class PhoneDetailController {
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
});