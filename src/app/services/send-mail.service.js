export function SendMailService($http, $q, $log) {
  'ngInject';
  let vm = this;

  vm.getData = function (data) {
    let response = new Promise((resolve, reject) => {
      resolve(data);
      reject(new Error("Network Error"));
    });
    // let response =  $http.post('/api', data);
    // let response = $http({
    //   method: "post",
    //   url: "/api",
    //   data: {
    //     email: email,
    //     name: name,
    //     text: name
    //   }
    // });

    return response.then(handleSuccess, handleError);
  };

  function handleSuccess(response) {
    $log.log('This is Service', angular.toJson(response, 2));
    return response;
  }

  function handleError(response) {
    // if (
    //   !angular.isObject(response.data) || !response.data.message
    // ) {
    //   return ( $q.reject("An unknown error occurred.") );
    // }
    // return ( $q.reject(response.data.message) );
    $log.log('An unknown error occurred.', response.message);
  }
}
