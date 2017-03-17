export class ContactController {
  constructor($http, $scope) {
    'ngInject';
    this.scope = $scope;

  }

  sendMail(name, email, text) {
    console.log(name, email, text);

    this.scope.contact.name = angular.copy('');
    this.scope.contact.email = angular.copy('');
    this.scope.contact.text = angular.copy('');
  }
}
