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

function initializeParallax(scope, element) {
  'ngInject';

  let parallaxOption = {
    relativeInput: false,
    clipRelativeInput: false,
    calibrationThreshold: 100,
    calibrationDelay: 500,
    supportDelay: 500,
    calibrateX: true,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 5.0,
    scalarY: 5.0,
    frictionX: 0.1,
    frictionY: 0.1,
    originX: 0.5,
    originY: 0.5,
    pointerEvents: true,
    precision: 1
  };

  element.parallax(parallaxOption);
}

class ParallaxController {}
