// Creación del módulo
var app = angular.module('app', ['ngRoute','ui.bootstrap']);

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'aboutController'
        })
        .when('/cabana1', {
            templateUrl : 'views/cabana1.html',
            controller  : 'contactController'
        })
        .when('/cabana2', {
            templateUrl : 'views/cabana2.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


//Controladores
app.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
    
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';

});

app.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

//controlador del carousel
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}

//dropdown navbar 
function DropdownCtrl($scope) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}

$('.dropdown-toggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
});

jQuery('nav').on('click', 'a[data-toggle="tab"]',  function(e){
    e.preventDefault();
    alert(this);
});



//creamos el modulo y lo asignamos a app, para evitar escribir 
//cada vez angular.module("app"); que sería el getter
//angular.module("app", []); es el setter
//var app = angular.module("app", ['ngRoute']);
//

//realizamos la configuración del enrutado dependiendo de la url
//con el objeto $routeProvider haciendo uso de when
//en este caso, cuando estemos en la página principal, le decimos que
//cargue el archivo templates/index.html y que haga uso del controlador
//indexController, así en todos los casos
/*app.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl : "views/home.html"
    })
    .when("/cabana1", {
        templateUrl : "views/cabana1.html"
        
    })
    .when("/home",{
        templateUrl: "views/home.html"
    })    
    .when("/ca", {
        templateUrl : "templates/login.html",
        controller : "loginController"
    })
    //este es digamos, al igual que en un switch el default, en caso que 
    //no hayamos concretado que nos redirija a la página principal
    .otherwise({ reditrectTo : "/" });
})*/