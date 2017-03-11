/** @ngInject */
export function HeaderDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/header/header.html',
    controller:HeaderController,
    controllerAs: 'header',
    bindToController: true,
    link: function () {
    }
  };
}

class HeaderController {
  /** @ngInject */

  constructor($rootScope, $translate) {
    let vm = this;
    vm.translate = $translate;
    vm.root = $rootScope;
    vm.language = 'en';
    vm.toggle = true;
    vm.activateDropdown();
  }

  selectLanguage(lang) {
    this.language = lang;
    this.toggle = false;
    this.root.language = lang;
    this.translate.use(lang);
  }

  activateDropdown() {
    this.toggle = this.toggle === false ? true : false;
  }
}
