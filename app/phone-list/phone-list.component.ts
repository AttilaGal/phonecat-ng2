'use strict';

// Register `phoneList` component, along with its associated controller and template
export const PhoneListComponent =  {
	template: require('./phone-list.template.html'),
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
};

