export function HeaderDirective() {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true,
    link: function () {
    }
  };
}

class HeaderController {
  constructor($rootScope, $translate, getTranslate) {
    'ngInject';

    let vm = this;
    vm.translate = $translate;
    vm.root = $rootScope;
    let localLang = localStorage.getItem('lang');

    if (localLang) {
      vm.saveLang(localLang);
    } else {
      vm.language = 'en';
    }

    vm.toggle = false;

    console.log(this.getTranslates(getTranslate));
  }

  getTranslates(getTranslate) {
    return getTranslate.getTranslateLang().then((data) => {
      this.data = data;
      console.log(this.data);
      // return this.data;
    });
  }

  selectLanguage(lang) {
    this.toggle = false;
    localStorage.clear();
    localStorage.setItem('lang', lang);
    this.saveLang(localStorage.getItem('lang'))
  }

  saveLang(language) {
    this.language = language;
    this.root.language = language;
    this.translate.use(language);
  }

  activateDropdown() {
    this.toggle = this.toggle === false ? true : false;
  }
}
