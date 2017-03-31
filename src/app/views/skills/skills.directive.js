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
    yOrigin: 90,
    yRadius: innerHeight / 8,
    xRadius: innerWidth / 3.2,
    mirror: {
      gap: 12,
      height: 0.3,
      opacity: 0.3
    },
    bringToFront: true,
    onRendered: rendered
  });

  scope.$on('$root.resizeWidth', function(event, value){
    console.log('width resize in directive', value);
    scope.$apply();
  });

  scope.$on('$root.onLoadWidth', function(event, value){
    console.log('width onLoad in directive', value);
    scope.$apply();
  });


  function rendered(carousel) {
    let fade = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);

    element.find('.carousel_title').text(carousel.nearestItem().element.alt);
    element.find('.carousel_title').css('opacity', 0.5 + (0.5 * fade));
  }
}

