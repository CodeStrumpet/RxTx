angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/ng/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
}])

.controller( 'AboutCtrl', ['$scope', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}]);
