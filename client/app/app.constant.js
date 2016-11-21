(function(angular, undefined) {
  angular.module("storesApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"apiURL": "http://localhost:9000/api"
})

;
})(angular);