export function HeaderDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true,
    link: function (scope, element, attr) {
      console.log('scope:', scope, 'attr :', attr);
      angular.element('body').keydown(function (eventObject) {
        if (eventObject.which == 27) {
          scope.$broadcast('header', false);
        }
      });
      element.find('.overlay-menu.ng-scope').click(function (e) {
        console.log("this is a directive");
        scope.$broadcast('click-on-link', 'CHLEN');
      });
    }
  };
}

class HeaderController {
  constructor($scope, $rootScope, $translate) {
    'ngInject';

    let vm = this;
    let localLang = localStorage.getItem('lang');
    vm.translate = $translate;
    vm.root = $rootScope;
    vm.toggle = false;
    vm.menu = false;
    vm.$scopeOn = $scope.$on();

    if (localLang) {
      vm.saveLang(localLang);
    } else {
      vm.language = 'en';
    }

    $scope.$on('header', (e, data) => {
      vm.menu = data;
      vm.toggle = data;
      $scope.$apply();
    });

    $scope.$on('click-on-link', (e, data) => {
        console.log(data);
      $scope.$apply();
    })
  }

  selectLanguage(lang) {
    this.toggle = false;
    localStorage.clear();
    localStorage.setItem('lang', lang);
    this.saveLang(localStorage.getItem('lang'))
  }

  saveLang(language) {
    this.language = language;
    this.root.language = language;
    this.translate.use(language);
  }
}
