export function SkillsDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    link: SkillsGallery
  }
}

function SkillsGallery(scope, element) {
  'ngInject';

  element.find('#carousel').Cloud9Carousel({
    buttonLeft: angular.element(".carousel_left"),
    buttonRight: angular.element(".carousel_right"),
    autoPlay: 1,
    mirror: {
      gap: 12,
      height: 0.3,
      opacity: 0.3
    },
    bringToFront: true,
    onRendered: rendered
  });
}

function rendered(carousel) {
  let fade = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);

  angular.element('.carousel_title').text(carousel.nearestItem().element.alt);
  angular.element('.carousel_title').css('opacity', 0.5 + (0.5 * fade));
}
