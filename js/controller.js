/**
 * Created by Administrator on 2016/7/29 0029.
 */

angular.module("myApp.controller", [])

.controller('HomeCtrl',function($scope,$state){

        $scope.items=[];


        for(var i=0;i<20;i++){

            $scope.items.push('this is '+i+' item');

        }


//        $state.go('map');   /*js跳转*/
})


.controller('HomeArticleCtrl',function($scope,$state){

    console.log('HomeArticleCtrl');


//        $state.go('map');   /*js跳转*/
})




.controller('ShopCtrl',function($scope,$state){

    //  $state.go('map');   /*js跳转*/

    console.log('ShopCtrl');
})


.controller('ProductCtrl',function($scope,$state){

    //  $state.go('map');   /*js跳转*/

    console.log('ProductCtrl');
})

.controller('AccountCtrl',function($scope,$state){

    //  $state.go('map');   /*js跳转*/

    console.log('ProductCtrl');
})


