export function translateConfig($translateProvider) {
  'ngInject';

  $translateProvider
    .useStaticFilesLoader({
      files: [
        {
          prefix: '/app/translate/translate.',
          suffix: '.json'
        }
      ]
    })
    .preferredLanguage('en')
    .useLocalStorage()
    .useSanitizeValueStrategy(null);
}
