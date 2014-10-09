function MainCtrl ($scope) {

var totalThumbs = 18;
var jsonArr = [];

  $scope.aprovados = [/*{image:'1.jpg',title:'title aqui',description:'descrição aqui'},*/];

    for (var i = 1; i <= totalThumbs; i++) {
        $scope.aprovados.push({
            image:i + '.jpg',
            title:'title dinamic' + i,
            description:'description dinamic' + i
        });
    }
}

function CarrouselControllerIta($scope) {
    $scope.ita = [
        {qtdeAprovado:1, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'},
        {qtdeAprovado:2, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'},
        {qtdeAprovado:3, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'},
        {qtdeAprovado:4, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'},
        {qtdeAprovado:5, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'},
        {qtdeAprovado:6, nomeCurso:'Nome do Curso', nomeFaculdade:'ITA'}            
    ];
}

function CarrouselControllerMedicina($scope) {
    $scope.medicina = [
        {qtdeAprovado:1, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'},
        {qtdeAprovado:2, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'},
        {qtdeAprovado:3, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'},
        {qtdeAprovado:4, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'},
        {qtdeAprovado:5, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'},
        {qtdeAprovado:6, nomeCurso:'Nome do Curso', nomeFaculdade:'MEDICINA'}              
    ];
}

function CarrouselControllerEngenharia($scope) {
    $scope.engenharia = [
        {qtdeAprovado:1, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'},
        {qtdeAprovado:2, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'},
        {qtdeAprovado:3, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'},
        {qtdeAprovado:4, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'},
        {qtdeAprovado:5, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'},
        {qtdeAprovado:6, nomeCurso:'Nome do Curso', nomeFaculdade:'ENGENHARIA'}           
    ];
}

function CarrouselControllerHumanas($scope) {
    $scope.humanas = [
        {qtdeAprovado:1, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'},
        {qtdeAprovado:2, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'},
        {qtdeAprovado:3, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'},
        {qtdeAprovado:4, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'},
        {qtdeAprovado:5, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'},
        {qtdeAprovado:6, nomeCurso:'Nome do Curso', nomeFaculdade:'HUMANAS'}             
    ];
}

function CarrouselControllerBiologicas($scope) {
    $scope.biologicas = [
        {qtdeAprovado:1, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'},
        {qtdeAprovado:2, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'},
        {qtdeAprovado:3, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'},
        {qtdeAprovado:4, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'},
        {qtdeAprovado:5, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'},
        {qtdeAprovado:6, nomeCurso:'Nome do Curso', nomeFaculdade:'BIOLOGICAS'}              
    ];
}