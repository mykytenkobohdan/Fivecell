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
          scope.$broadcast('header', 'false');
        }
      })
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
    console.log(vm.menu);

    if (localLang) {
      vm.saveLang(localLang);
    } else {
      vm.language = 'en';
    }

    $scope.$on('header', function (e, data) {
      $scope.header.menu = data;
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
