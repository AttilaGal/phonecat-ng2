// import polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import * as angular from 'angular';
import {Ng1AppModule} from './app.module';

angular.element(document).ready(function() {
  angular.bootstrap(document, [Ng1AppModule.name]);
});