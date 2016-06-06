angular
    .module('currentAmerica').controller('MyCtrl', ['$scope', 'energyDataService',
 function($scope, energyDataService) {
    $scope.hideFilters = false;
    $scope.toggleFilters = function() {
        $scope.hideFilters = !$scope.hideFilters;
    }
        
    $scope.getAllYears = function(){

        energyDataService.getAllYears()
        .then(function(years) {
            $scope.allYearsData = years.data;
            // console.log($scope.allYearsData);
            parseYear(years.data)
        })
    };

     parseYear = function (data) {
         for (var i =0; i<data.length; i++) {
             if (data[i]["yearNum"] === "2000") {
                oneYearData = data[i];
                 console.log(oneYearData);
                 for (var j=0; j<oneYearData.state.length; j++) {
                     console.log('59 checks')
                    if (oneYearData.state[j].name === "Alaska") {
                   oneStateOneYearData = oneYearData.state[j].producer[0]['Total Electric Power Industry']
                    console.log(oneStateOneYearData)
                    }
                }
             }
         }
     }

 // $scope.loading = true;

 // $scope.getProfile = function(id){
 //   console.log(id);
 //   memberDataService.getProfile(id)
 //     .then(function(member){
 //       $scope.member = member.data.data;
 //       console.log($scope.member);
 //       $scope.profile = true;

 //     })
 // };

 // $scope.sortType = '-date';

}]);
