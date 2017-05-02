/* Setup Layout Part - Header */
cfmApp.controller('notification', ['$scope', '$location', 'dataGetService', '$timeout', '$rootScope', function ($scope, $location, dataGetService, $timeout, $rootScope) {
    console.log("header");
  //  $scope.$on('$includeContentLoaded', function () {
  //      Layout.initHeader(); // init header
  //  });
  ////  App.alert(); 
  //  $scope.logOut = function () {
  //  }
    var popMsg;
    var data = dataGetService.collectData();
    data.then(function (data) {
        popMsg = data.data;
        $scope.notification = popMsg.notification;

    });

    $timeout(function () {
        var data = {
            "time": "just now",
            "class": "label-success",
            "detail": "New user registered,with CFM."
        }
        $scope.notification.unshift(data);
        $rootScope.$broadcast('popups', data.detail);
    },3500);
   
}]);