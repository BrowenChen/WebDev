'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });



var myApp = angular.module('myApp', []);


myApp.directive('slider', function ($parse) {
    return {
      restrict: 'E',
      replace: true,
      template: '<input type="text" />',
      link: function ($scope, element, attrs) {
        var model = $parse(attrs.model);
        var slider = $(element[0]).slider();

        slider.on('slide', function(ev) {
          model.assign($scope, ev.value);
          $scope.$apply();
        });
      }
    }
});



  
