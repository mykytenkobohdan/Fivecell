export function translateConfig($translateProvider) {
  'ngInject';

  $translateProvider.translations('en', {
    "HOME":"HOME",
    "CONTACT":"CONTACT",
    "PROJECTS":"PROJECTS",
    "SKILLS":"SKILLS",
    "ABOUT":"ABOUT"
  });

  $translateProvider.translations('ru', {
    "HOME":"ДОМОЙ",
    "CONTACT":"КОНТАКТЫ",
    "PROJECTS":"ПРОЕКТЫ",
    "SKILLS":"НАВЫКИ",
    "ABOUT":"ОБО МНЕ"
  });

  $translateProvider.preferredLanguage('en');
}
