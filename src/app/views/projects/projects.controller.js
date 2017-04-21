export class ProjectsController {
    constructor(GetProjectsService) {
        'ngInject';

        let data = GetProjectsService;

        console.log(data);
    }
}
