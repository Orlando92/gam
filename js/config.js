app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/',{

			templateUrl: 'html/partial/inicio.html',
			
			controller: 'inicioCtrl'	

		})
		.otherwise({
			redirectTo: '/'
		});

}]); 