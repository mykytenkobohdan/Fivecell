export function GetProjectsService($http, $log) {
    'ngInject';

    $http.get('/app/test-db/test-db.json').then(successCallback, errorCallback);

    function successCallback(response) {
        $log.log('This is data base', angular.toJson(response, 2));
        return response;
    }

    function errorCallback(response) {
        $log.log('An unknown error occurred.', response.message);
    }

}