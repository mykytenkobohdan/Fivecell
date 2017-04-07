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

    let windowResizeVal = element.find('.container').width();

    activateCarousel(windowResizeVal);

    scope.$on('$root.resizeWidth', function (event, value) {
        deactivateCarousel();

        if (value >= 1200) {
            activateCarousel(1200);
        }

        if (value >= 992 && value < 1200) {
            activateCarousel(992)
        }

        if (value >= 768 && value < 992) {
            activateCarousel(768)
        }

        scope.$apply();
    });

    function activateCarousel(width) {
        return element.find('#carousel').Cloud9Carousel({
            buttonLeft: angular.element(".carousel_left"),
            buttonRight: angular.element(".carousel_right"),
            autoPlay: 1,
            yOrigin: 90,
            yRadius: innerHeight / 8,
            xRadius: width / 2,
            mirror: {
                gap: 12,
                height: 0.3,
                opacity: 0.3
            },
            bringToFront: true,
            onLoaded: loaded,
            onRendered: rendered
        });
    }

    function deactivateCarousel() {
       return element.find('#carousel').data("carousel").deactivate();
    }

    function rendered(carousel) {
        let fade = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI);

        element.find('.carousel_title').text(carousel.nearestItem().element.alt);
        element.find('.carousel_title').css('opacity', 0.5 + (0.5 * fade));
    }

    function loaded(carousel) {
        if (windowResizeVal <= 767) {
            carousel.deactivate();
        }
    }
}

