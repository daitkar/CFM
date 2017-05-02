cfmApp.factory('MenuService', [ function () {
    var menuData = [];
    return {
        registerMenuData: registerMenuData,
        getMenuData: getMenuData
    }

    function registerMenuData(menu) {
        console.log(menu);
        menuData.push(menu);
        console.log(menu);
    }

    function getMenuData() {
        return menuData;
    }
}]);