export function GetProjects($http, $log, $q) {
    'ngInject';

    return {
        getOtherProjects: function () {
            let deferred = $q.defer();
            let httpPromise = $http.get('/app/test-db/test-db.json');

            httpPromise.then(successCallback, errorCallback);

            function successCallback(response) {
                deferred.resolve(response);
            }

            function errorCallback(response) {
                $log.log('An unknown error occurred. ', response.statusText);
            }

            return deferred.promise;
        }
    };

}