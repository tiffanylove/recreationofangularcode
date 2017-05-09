var myApp = angular.module ('myApp', []);

myApp.controller ('InventoryController', function ($http){
  console.log('NG');


var vm = this;

vm.items = [];

vm.addItem = function (){
  console.log('ng-click');

var newItem ={
  name: vm.nameIn,
  description: vm.description
};

console.log('adding item:', newItem);

vm.items.push ( newItem );
console.log( 'items', vm.items);

vm.nameIn='';
vm.descriptionIn = '';
};

$http({
  method: 'GET',
  url: '/getItems'
}).then(function(response){
  vm.items = response.data;
});


$http({
  method: 'POST',
  url: '/sendItems',
  data: {data: 'vm.items'}
}).then(function(response){
  
});
});// end of controller
