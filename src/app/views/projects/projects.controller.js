export class ProjectsController {
    constructor(GetProjectsService) {
        'ngInject';

        console.log('This is data base', GetProjectsService);
    }
}
