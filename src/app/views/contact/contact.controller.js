export class ContactController {
  constructor($scope) {
    'ngInject';

    this.scope = $scope;
  }

  sendMail(name, email, text) {
    this.data = {
      "name": name,
      "email": email,
      "text": text
    };

    console.log(angular.toJson(this.data));

    this.scope.contact.name = angular.copy('');
    this.scope.contact.email = angular.copy('');
    this.scope.contact.text = angular.copy('');
  }
}
