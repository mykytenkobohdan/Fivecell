export class SkillsController {
    constructor($scope, $rootScope) {
        'ngInject';

        let winResizeEvent = $rootScope.$on('window:resize', function () {
            $rootScope.$broadcast('$root.resizeWidth', $rootScope.screenWidth);
        });

        $rootScope.$broadcast('gallery', $rootScope.startGallery);

        $rootScope.$on("$destroy", winResizeEvent);
    }
}
