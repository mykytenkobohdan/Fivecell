/** @ngInject */
export class getTranslateJson {
  constructor($http, $log) {
    this.$http = $http;
    this.engTranslate = 'app/translate/translate.en.json';
    this.ruTranslate = 'app/translate/translate.ru.json';
  }

  getTranslateLang () {
    return this.$http.get(this.engTranslate)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }

}
