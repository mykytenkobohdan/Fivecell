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

    let windowResizeVal;

    scope.$on('$root.resizeWidth', function (event, value) {
        // console.log('$$Width resize in directive', value);
        windowResizeVal = value;
        scope.$apply();
    });

    console.log('$$Width resize in directive', windowResizeVal);

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
        onLoaded: loaded,
        onRendered: rendered
    });

    function rendered(carousel) {
        let fade = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);

        element.find('.carousel_title').text(carousel.nearestItem().element.alt);
        element.find('.carousel_title').css('opacity', 0.5 + (0.5 * fade));
    }

    function loaded(carousel) {
        if (angular.element('body').width() <= 767) {
            carousel.deactivate();
        }
    }
}

