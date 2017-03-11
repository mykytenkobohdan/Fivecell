export function translateContent($translateProvider) {
  'ngInject';

  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  });

  $translateProvider.translations('ru', {
    'TITLE': 'Привет',
    'FOO': 'Это параграф'
  });

  $translateProvider.preferredLanguage('en');
}
