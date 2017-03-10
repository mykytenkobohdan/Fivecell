export function runBlock($rootScope, $log) {
  'ngInject';

  let $stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    $log.debug('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
  });

  let $stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
    $log.debug('$stateChangeError - fired when an error occurs during transition.');
    $log.debug(arguments);
  });

  let $stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    $log.debug('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.', toState);
    //Set the variable "showHeader" from state parameters UI routers "showheader"
    $rootScope.showHeader = toState.showheader != false;
  });

  let $viewContentLoaded = $rootScope.$on('$viewContentLoaded', function (event) {
    $log.debug('$viewContentLoaded - fired after dom rendered', event);
  });

  let $stateNotFound = $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    $log.debug('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
    $log.debug(unfoundState, fromState, fromParams);
  });

  $rootScope.$on('$destroy', function () {
    _cleanUpFunc();
  });

  function _cleanUpFunc() {
    $stateChangeStart();
    $stateChangeError();
    $stateChangeSuccess();
    $viewContentLoaded();
    $stateNotFound();
  }
}
