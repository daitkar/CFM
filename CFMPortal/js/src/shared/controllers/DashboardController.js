cfmApp.controller('DashboardController', ['$scope', '$rootScope', 'dataGetService', function ($scope, $rootScope,dataGetService) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        App.initAjax();
    });

    // dataGetService.success("success message");
    // dataGetService.danger("danger message");
    //dataGetService.warning("warning message!!!!");
    $scope.$on('popups', function (event, data) {
        dataGetService.info(data);
    })
    //SidebarService.updateMenu();
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
}]);