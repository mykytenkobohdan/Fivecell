export function GetProjectsService($http, $log) {
    'ngInject';

    let vm = this;

    $http.get('/app/test-db/test-db.json').then(successCallback, errorCallback);

    function successCallback(response) {
        return vm.projects = response.data;
    }

    function errorCallback(response) {
        $log.log('An unknown error occurred.', response.message);
    }

}