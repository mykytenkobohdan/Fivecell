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
            autoPlay: 0,
            yOrigin: 90,
            yRadius: 120,
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

        DrawCanvas(carousel.nearestItem());
    }

    function loaded(carousel) {
        if (windowResizeVal <= 767) {
            carousel.deactivate();
        }
    }

    function DrawCanvas(elem) {
        const width = elem.fullWidth * 2;

        angular.element('#skills').remove();
        angular.element(elem.element).after('<canvas class="canvas-skills" id="skills" height="' + width + '" width="' + width + '"></canvas>');


        let canvas = angular.element('#skills').get(0);
        let context = canvas.getContext('2d');

        const x = width / 2;
        const y = width / 2;
        const radius = Math.ceil(Math.sqrt(Math.pow((width / 2), 2) + Math.pow((width / 2), 2)) / 2) + 6;
        let endPercent = angular.element(elem.element).children('img').data('skill');
        let startPercent = 0;
        const circ = Math.PI * 2;
        const quart = Math.PI / 2;

        renderScene();

        function renderScene(current) {
            context.lineWidth = 12;
            context.strokeStyle = '#ad2323';
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 10;
            context.shadowColor = '#656565';

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();

            context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
            context.stroke();
            startPercent++;

            if (startPercent < endPercent) {
                requestAnimationFrame(function () {
                    renderScene(startPercent / 100)
                });
            }
        }
    }
}

