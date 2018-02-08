'use strict';

var app = angular.module("app", ['ngSanitize', 'ui.select']);

app.controller('selectDemo', ['$scope', function ($scope) {
    var self = this;
    self.Source = [];
    self.init = function () {
        for (var i = 0; i < 10; i++) {
            self.Source.push({ name: 'name' + i, value: i, status: i % 2 == 0, display: true });
        }
    };
    self.ChangeInArray = [2, 8];
    self.unChangeInArray = [1, 3, 4, 6];
    $scope.$watch("self.ChangeInArray.length", function () {
        setTimeout(setSourceStatus, 50);

    });
    $scope.$watch("self.unChangeInArray.length", function () {
        setTimeout(setSourceStatus, 100);

    });
    function setSourceStatus() {
        angular.forEach(self.Source, function (item) {
            if (self.ChangeInArray.indexOf(item.value) >= 0 || self.unChangeInArray.indexOf(item.value) >= 0) {
                item.display = false;
            } else {
                item.display = true;
            }
        });
    }
}]);