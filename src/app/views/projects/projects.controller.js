export class ProjectsController {
    constructor(GetProjects) {
        'ngInject';

        let vm = this;

        vm.otherProject = {};

        GetProjects.getOtherProjects()
            .then(function (response) {
                vm.otherProject = response.data;
            });
    }
}
