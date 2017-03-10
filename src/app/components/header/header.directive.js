export function HeaderDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true
  };
}

class HeaderController {}
