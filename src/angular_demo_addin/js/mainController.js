clientaddin.controller('MainController', function($scope, $rootScope, QueueService){
    $scope.$watch(function () {
        return QueueService.getInteractions();
    }, function (data) {
        $scope.interactions = data;
    }, true);
});
