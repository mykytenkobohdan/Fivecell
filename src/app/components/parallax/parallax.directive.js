export function ParallaxDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/parallax/parallax.html',
    controller: ParallaxController,
    controllerAs: 'parallax',
    bindToController: true,
    link: initializeParallax
  };
}

function initializeParallax() {

}

class ParallaxController {}
