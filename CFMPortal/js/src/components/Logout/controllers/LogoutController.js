cfmApp.controller('LogoutController', ['$scope', '$rootScope', 'MenuService', function ($scope, $rootScope, MenuService) {
    var menu = {
        "Id": 2,
        "Name": "Logout",
        "location": "Quickbar",
        "position": 3,
        "description": "This data will be pulled through the translate service on display",
        "hint": "To be pulled through the translation service",
        "iconClass": "icon-key",
        "url": "",
        "subMenus": "",
        "securityRole": ""
    }
    $scope.data = MenuService.registerMenuData(menu);
}]);