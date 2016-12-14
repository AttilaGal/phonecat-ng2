import {NgModule, Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {PhoneListNgModule} from "./phone-list/phone-list.module";
import {PhoneService} from "./core/phone/phone.service";
import {PhoneDetailNgModule} from "./phone-detail/phone-detail.module";

@Component({
  selector: 'root-cmp',
  template: `
    <div class="ng-view"></div>
  `,
})
export class RootCmp {}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    
    PhoneListNgModule,
    PhoneDetailNgModule
  ],
  bootstrap: [RootCmp],
  declarations: [RootCmp],
  providers: [
    PhoneService,
    {
      provide: '$routeParams',
      useFactory: routeParamsFactory,
      deps: ['$injector']
    }
  ]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}
export function routeParamsFactory(i: any) {
  return i.get('$routeParams');
}