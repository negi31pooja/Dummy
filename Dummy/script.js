var app = angular.module("app", ['ngRoute', 'ngStorage']);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/home", {
            templateUrl: 'home.html',
            controller: "homeController"
        })
})

app.controller("homeController", function ($scope) {
    $scope.message = "Hello Home Controller is working!!!!";
})




app.controller("cntrl", function ($scope, $localStorage) {


  // Alert

  $scope.$on("$routeChangeStart", function (event, next, current) {

    if (!confirm("Do you want to discard changes?")) {

        event.preventDefault();

    }

})

    $scope.getVal = function () {
        var radio1 = document.getElementById('game1');
        var radio2 = document.getElementById('game2');
        var radio3 = document.getElementById('game3');
        var radio4 = document.getElementById('game4');
        var radio5 = document.getElementById('game5');
        var radio6 = document.getElementById('game6');
        var radio7 = document.getElementById('game7');
        var radio8 = document.getElementById('game8');
        var radio9 = document.getElementById('game9');

        if (radio1.checked) {
            var box1 = document.getElementById('cb1');
            box1.checked = true;
        }
        if (radio2.checked) {
            var box2 = document.getElementById('cb2');
            box2.checked = true;
        }
        if (radio3.checked) {
            var box3 = document.getElementById('cb3');
            box3.checked = true;
        }
        if (radio4.checked) {
            var box4 = document.getElementById('cb4');
            box4.checked = true;
        }
        if (radio5.checked) {
            var box5 = document.getElementById('cb5');
            box5.checked = true;
        }
        if (radio6.checked) {
            var box6 = document.getElementById('cb6');
            box6.checked = true;
        }
        if (radio7.checked) {
            var box7 = document.getElementById('cb7');
            box7.checked = true;
        }
        if (radio8.checked) {
            var box8 = document.getElementById('cb8');
            box8.checked = true;
        }
        if (radio9.checked) {
            var box9 = document.getElementById('cb9');
            box9.checked = true;
        }
    };

    $scope.changeValue = function () {

        var select = document.getElementById("status");
        //console.log(select);
        var value = select.options[select.selectedIndex].value;
        console.log(value);


        //   UnPublished

        var elements = document.getElementsByName('gameBox');

        elements.forEach((element) => {
            if (select.value == 2 && element.checked) {
                element.checked = false;
            }
            else if (select.value == 1) {
                $scope.getVal();
            }
        });

 // Save Data



 $scope.saveData = function () {



    var boxes = document.getElementsByName('gameBox').length;

    console.log("boxes are " + boxes);



    for (let i = 1; i <= boxes; i++) {

        var checkbox = document.getElementById(String(i));



        console.log("checkbox" + checkbox);

        localStorage.setItem("checkbox" + String(i), checkbox.checked);

    }



    //for loading

    // for (let i = 1; i <= boxes; i++) {

    //     if (localStorage.length > 0) {

    //         var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));

    //         document.getElementById(String(i)).checked = checked;

    //     }

    //  }

    // window.addEventListener('change', save);
}}
  
});