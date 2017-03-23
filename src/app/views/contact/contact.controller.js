export class ContactController {
  constructor($scope, $timeout, SendMailService) {
    'ngInject';

    this.scope = $scope;
    this.SendMail = SendMailService;
    this.$timeout = $timeout;
  }

  sendMail(name, email, text) {
    this.data = {
      "name": name,
      "email": email,
      "text": text
    };

    this.SendMail.getData(this.data);

    this.successSend();
    this.clearForm();
  }

  successSend() {
    this.success = 'btn-success';
    this.$timeout(()=>{this.success = ''}, 3000);
  }

  clearForm() {
    this.scope.contact.name = angular.copy('');
    this.scope.contact.email = angular.copy('');
    this.scope.contact.text = angular.copy('');
  }
}
