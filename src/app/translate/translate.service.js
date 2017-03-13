export class getTranslateService {
  constructor($http, $log) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.engTranslate = '/app/translate/translate.en.json';
    this.ruTranslate = '/app/translate/translate.ru.json';
  }

  getTranslateLang() {
    return this.$http.get(this.engTranslate)
      .then((response) => {
        return this.data = response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }
}
