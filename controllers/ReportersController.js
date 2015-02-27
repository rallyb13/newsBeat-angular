newsBeat.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName,
                                  years: $scope.reporterYears,
                                  birthday: $scope.reporterBirthday
                                  // id: $scope.beat.reporters.length + 1
    });
    console.log("Hi there!")
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBirthday = null;
  }
});
