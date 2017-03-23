export function SendMailService($http, $q, $log) {
  'ngInject';
  let vm = this;

  vm.getData = function (data) {
    // let response = new Promise((resolve, reject) => {
    //   resolve(data);
    //   reject(new Error("Network Error"));
    // })
    let response = $http.post('/api', data);
    return response.then( handleSuccess, handleError );
    // let request = $http({
    //   method: "post",
    //   url: "/api",
    //   data: {
    //     name: name
    //   }
    // });
    //
    // return( request.then( handleSuccess, handleError ) );
  }

  function handleSuccess(response) {
    $log.log('This is Servise', angular.toJson(response.data))
    return response.data;
  }

  function handleError(response) {
    // if (
    //   !angular.isObject(response.data) || !response.data.message
    // ) {
    //   return ( $q.reject("An unknown error occurred.") );
    // }
    // return ( $q.reject(response.data.message) );
    $log.log('An unknown error occurred.');
  }
}
