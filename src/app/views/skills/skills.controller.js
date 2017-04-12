export class SkillsController {
    constructor($rootScope) {
        'ngInject';

        let winResizeEvent = $rootScope.$on('window:resize', function () {
            $rootScope.$broadcast('$root.resizeWidth', $rootScope.screenWidth);
        });

        // $rootScope.$broadcast('$root.startGallery', $rootScope.startGallery);

        $rootScope.$on("$destroy", winResizeEvent);
    }
}
