export class HomeController {
    constructor($window, constants) {
        'ngInject';

        this.$window = $window;
        this.hostSkills = constants.HOST_NAME_SKILLS;
    }

    reload() {
        this.$window.location.replace(this.hostSkills);
    }
}
