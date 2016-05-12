var app = angular.module('userTableApp');

app.controller('userController', function($scope, $http) {
    $http({
        method: 'GET',
        url: /*URL to api of users*/,
        headers: {
            'Content-type':'application/json'
        }   
    }).then(function successCallback(response) {
        //Succesfully reached the api and retrieved data
        $scope.userModel = response.data;
        
    }, function errorCallback(response){
        
        //Handle failure here
        console.log("Failed")
    })
})