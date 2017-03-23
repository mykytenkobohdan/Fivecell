export class ContactController {
  constructor($scope, SendMailService) {
    'ngInject';

    this.scope = $scope;
    this.SendMail = SendMailService;
  }

  sendMail(name, email, text) {
    this.data = {
      "name": name,
      "email": email,
      "text": text
    };

    this.SendMail.getData(this.data)
    this.successSend();
    this.clearForm();
  }

  successSend() {
    console.log('Success!');
  }

  clearForm() {
    this.scope.contact.name = angular.copy('');
    this.scope.contact.email = angular.copy('');
    this.scope.contact.text = angular.copy('');
  }
}
