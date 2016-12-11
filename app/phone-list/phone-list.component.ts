'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
	templateUrl: 'phone-list/phone-list.template.html',
	controller: class PhoneListController {
		PhoneService:any;
		phones:any;
		orderProp:string = 'age';

		static $inject = ['PhoneService'];

		constructor(PhoneService) {
			this.PhoneService = PhoneService;

			this.PhoneService.getAllPhones()
				.then((result) => {
					this.phones = result.data;
				});
		}

	}
});

