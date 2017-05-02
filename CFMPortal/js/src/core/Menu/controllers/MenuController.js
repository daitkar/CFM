cfmApp.controller('MenuController', ['$scope', '$rootScope','$state', 'MenuService', function ($scope, $rootScope,$state, MenuService) {
    $scope.$on('$includeContentLoaded', function () {
        //Layout.initHeader(); // init header
        Layout.initSidebar($state); // init sidebar 
    });
    function menuData() {
        $scope.menuData = MenuService.getMenuData();
        console.log($scope.menuData);
    }
    menuData();
}]);