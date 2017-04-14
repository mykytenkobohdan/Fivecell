export function runBlock($rootScope, $log, $window, $timeout) {
    'ngInject';

    $rootScope.screenWidth = angular.element($window).width();

    let $stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        $log.debug('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    });

    let $stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        $log.debug('$stateChangeError - fired when an error occurs during transition.');
        $log.debug(arguments);
    });

    let $stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $log.debug('$stateChangeSuccess to ' + toState.name + ' - fired once the state transition is complete.', toState);
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

    angular.element($window).on('resize', _debounce(function () {
        $rootScope.screenWidth = angular.element($window).width();
        $rootScope.$apply();
        $rootScope.$emit('window:resize');
    }, 100));

    function _debounce(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            $timeout.cancel(timeout);
            timeout = $timeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}
