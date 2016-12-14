import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {PhoneListNgModule} from "./phone-list/phone-list.module";


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
    
    PhoneListNgModule
  ],
  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}