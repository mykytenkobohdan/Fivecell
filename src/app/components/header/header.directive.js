export function HeaderDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true,
    link: function () {
    }
  };
}

function HeaderController($rootScope) {
  'ngInject';
  let vm = this;

  $rootScope.language = 'en';
  vm.language = $rootScope.language;
  vm.toggle = false;

  vm.selectLanguage = function (lang) {
    vm.language = lang;
    $rootScope.language = lang;
    vm.toggle = false;
  };

  vm.activateDropdown = function () {
    return vm.toggle = vm.toggle === false ? true : false;
  };
}
