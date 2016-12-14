// import polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

//import styles
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import {Ng1AppModule} from './ng1app.module';
import {Ng2AppModule} from './ng2_app';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  // bootstrap angular1
  (<any>ref.instance).upgrade.bootstrap(document.body, [Ng1AppModule.name]);
});
