export function GetProjectsService($http, $log) {
    'ngInject';

    let vm = this;

    $http.get('/app/test-db/test-db.json').then(successCallback, errorCallback);

    function successCallback(response) {
        console.log(response.data);
        return vm.projects = response.data;
    }

    function errorCallback(response) {
        $log.log('An unknown error occurred.', response.message);
    }

}