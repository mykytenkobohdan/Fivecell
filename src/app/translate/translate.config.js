export function translateConfig($translateProvider) {
  'ngInject';

  $translateProvider.useStaticFilesLoader({
    files: [
      {
        prefix: '/app/translate/translate.',
        suffix: '.json'
      }
    ]
  });

  $translateProvider.useSanitizeValueStrategy(null);
  // $translateProvider.preferredLanguage('en');
}
