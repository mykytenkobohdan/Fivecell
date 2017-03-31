export class SkillsController {
  constructor($scope, $rootScope) {
    'ngInject';

    console.log('Width on load in Controller', $rootScope.screenWidth);
    $scope.$broadcast('$root.onLoadWidth', '');

    $rootScope.$on('window:resize', function () {
      $rootScope.$broadcast('$root.resizeWidth', $rootScope.screenWidth);
    });
  }
}
