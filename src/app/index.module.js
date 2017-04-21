import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {translateConfig} from './translate/translate.config';
import {Constants} from './index.constants'

import {SendMailService} from './services/send-mail.service';
import {GetProjectsService} from './services/getprojects.service';

import {HomeController} from './views/home/home.controller';
import {ContactController} from  './views/contact/contact.controller';
import {ProjectsController} from './views/projects/projects.controller';
import {AboutController} from './views/about/about.controller';
import {SkillsController} from './views/skills/skills.controller';

import {HeaderDirective} from './components/header/header.directive';
import {ParallaxDirective} from './components/parallax/parallax.directive';
import {SkillsDirective} from './views/skills/skills.directive';

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
        'toastr',
        'pascalprecht.translate'
    ])
    .config(config)
    .config(routerConfig)
    .config(translateConfig)

    .constant('constants', Constants)

    .run(runBlock)

    .service('SendMailService', SendMailService)
    .service('GetProjectsService', GetProjectsService)

    .controller('HomeController', HomeController)
    .controller('ContactController', ContactController)
    .controller('ProjectsController', ProjectsController)
    .controller('AboutController', AboutController)
    .controller('SkillsController', SkillsController)

    .directive('headerComponent', HeaderDirective)
    .directive('parallaxComponent', ParallaxDirective)
    .directive('skillsComponent', SkillsDirective);
