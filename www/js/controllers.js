angular.module('starter.controllers', [])

    .controller('ListaCtrl', function($scope) {})

    .controller('AbastecimentoCtrl', function($scope, $cordovaSQLite) {

    $scope.dataDoAbastecimento = new Date(new Date).toLocaleDateString("pt-BR", {day: "2-digit", month: "2-digit", year: "numeric"});
   


    $scope.salvarAbastecimento = function(){
        alert("inserir em: "+$scope.dataDoAbastecimento +"','"+$scope.kmVeiculo+"', '"+$scope.combustivel+"', '"+$scope.valorCombustivel+"', '"+$scope.valorAbastecido);
        var inserirAbastecimento = "INSERT INTO abastecimentos (data, kmveiculo, combustivel, valorcombustivel, valorabastecido) VALUES ('"+$scope.dataDoAbastecimento+"', '"+$scope.kmVeiculo+"', '"+$scope.combustivel+"', '"+$scope.valorCombustivel+"', '"+$scope.valorAbastecido+"')";


        /* $cordovaSQLite.execute(db, inserirAbastecimento).then(function(res){
            alert("insertId: "+ res.insertId);
        }, function(err){
            alert(err);
        })
*/
    };

})

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

    .controller('SobreCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
