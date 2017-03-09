/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {HomeController} from './views/home/home.controller';
import {GithubContributorService} from '../app/components/githubContributor/githubContributor.service';
import {WebDevTecService} from '../app/components/webDevTec/webDevTec.service';
import {MalarkeyDirective} from '../app/components/malarkey/malarkey.directive';
import {HeaderDirective} from '../app/components/header/header.directive';

angular.module('fivecellArchitects',
  [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'toastr'
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('HomeController', HomeController)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('headerComponent', HeaderDirective);
