export class SkillsController {
    constructor($rootScope, $window) {
        'ngInject';

        this.$window = $window;

        let winResizeEvent = $rootScope.$on('window:resize', function () {
            $rootScope.$broadcast('$root.resizeWidth', $rootScope.screenWidth);
        });

        $rootScope.$on("$destroy", winResizeEvent);
    }

    // reload() {
    //     this.$window.location.reload();
    // }
}
