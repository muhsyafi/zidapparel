var app = angular.module('module',['ngRoute','ngSanitize','ngTouch','angular-flexslider','toaster','ngProgress','angularFileUpload']);

app.directive('embedSrc', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(
        function() {
          return attrs.embedSrc;
        },
        function() {
          element.attr('src', attrs.embedSrc);
        }
      );
    }
  };
});

app.directive('loader',function(){
	return {
		retstrict 	:'A',
		link 		: function(scope,element,attrs){
					element.append('<img class="loader abs" src="assets/img/loader.gif">');
					element.find('.main-image').bind('load',function(){
						element.find('.loader').hide();
					});
		} 
	}
})

app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	scope.$on('loading',function(event,data){
        		$('.preview-loader').show();
        	})
            element.bind('load', function() {
                $('.preview-loader').hide();
            });
        }
    };
});

app.run(function($rootScope,$location,$http,ngProgress){
	$rootScope.$on('$routeChangeStart',function(){
		ngProgress.start();
	})
	$rootScope.$on('$routeChangeSuccess',function(){
		ngProgress.complete();
	})
})

app.directive('popup',function($compile,$templateRequest,$rootScope){
	return {
		restrict :'E',
		replace  :true,
		scope :{},
        link : function(scope,elem,attrs){
        	scope.$on('dataTemplate',function(e,data){
        		$templateRequest(data).then(function(html){
        			elem.html($compile(html)(scope));
        		})
        	})
        }
	}
})

app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);

app.config(['$routeProvider' ,function($routeProvider,$routeParams){
	$routeProvider
		.when('/',{
			templateUrl 	:'templates/home.html',
			controller 		:'homeCtrl'
		})
		.when('/product',{
			templateUrl 	:'templates/product.html',
			controller 		:'productCtrl'
		})
		.when('/product/:id',{
			templateUrl 	:'templates/product-detail.html',
			controller 		:'productDetailCtrl'
		})
		.when('/product/detail/:id',{
			templateUrl 	:'templates/item-detail.html',
			controller 		:'itemDetailCtrl'
		})
		.when('/event',{
			templateUrl 	:'templates/event.html',
			controller 		:'eventCtrl'
		})
		.when('/distributor',{
			templateUrl 	:'templates/distributor.html',
			controller 		:'distCtrl'
		})
		.when('/contact',{
			templateUrl 	:'templates/contact.html',
			controller 		:'contactCtrl'
		})
		.when('/login',{
			templateUrl 	:'templates/login.html',
			controller 		:'loginCtrl'
		})
		.when('/search/:id',{
			templateUrl 	:'templates/search.html',
			controller 		:'searchCtrl'
		})
		.when('/event/:id',{
			templateUrl 	:'templates/event-detail.html',
			controller 		:'eventDetailCtrl'
		})
		.when('/confirm',{
			templateUrl 	:'templates/confirm.html',
			controller 		:'confirmCtrl'
		})
		.otherwise('/');
}]);

app.controller('menuCtrl',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope){
	$rootScope.popup=false;
	$http.get('core/action.php',{params:{'act':'get-logo'}})
		.success(function(data,status){
			angular.forEach(data,function(data,i){
				$scope.logo = data.logo_1;
			})
		});
	$http.get('core/action.php',{params:{'act':'get-table','table':'menu'}})
		.success(function(data,status){
			$scope.isi = data;
		});
	$scope.search = function(){
		$location.path('/search/'+$scope.searchInput);
	}
	$scope.selected=0;
	$scope.underLine = function(index){
		$scope.selected=index;
	}
	$http.get('core/action.php',{params:{'act':'get-link'}})
		.success(function(data,status){
			$scope.links = data;
		});
}]);

app.controller('homeCtrl',['$route','$rootScope','$routeParams','$scope','$http',function($route,$rootScope,$routeParams,$scope,$http){
	$rootScope.startup = false;
	$http.get('core/stat.php');
	$http.get('core/action.php',{params:{'act':'get-logo'}})
		.success(function(data,status){
			angular.forEach(data,function(data,i){
				$scope.logo = data.logo_2;
			})
		});
	$scope.gambar=['["assets/img/product/6105/Screen Shot 2015-04-23 at 1.15.18 AM.png","http://ewallpaperhub.com/wp-content/uploads/2015/02/Landscape-Wallpapers.jpg","assets/img/product/9453/everyday muslim1.jpg"]'];
	$http.get('core/action.php',{params:{'act':'get-best'}})
		.success(function(data,status){
			$scope.bests = data;
		});
	$http.get('core/action.php',{params:{'act':'get-newest'}})
		.success(function(data,status){
			$scope.newests = data;
		});
	$http.get('core/action.php',{params:{'act':'get-contact'}})
		.success(function(data,status){
			$scope.contacts = data;
			angular.forEach(data,function(val,i){
				$scope.quote = val.quote;
			})
		});
	$http.get('core/action.php',{params:{'act':'get-gallery'}})
		.success(function(data,status){
			$scope.slides = data;
		});
}]);

app.controller('productCtrl',['$scope','$http',function($scope,$http){
	$http.get('core/action.php',{params:{'act':'get-product'}})
		.success(function(data,status){
			$scope.products = data;
		});
}]);

app.controller('productDetailCtrl',['$route','$routeParams','$scope','$http', function($route,$routeParams,$scope,$http){
	var id = $routeParams.id;
	$scope.name=id;
	$http.get('core/action.php',{params:{'act':'get-product-detail','a':id}})
		.success(function(data,status){
			$scope.productDetails = data;
		})
}]);

app.controller('itemDetailCtrl',['$route','$routeParams','$scope','$http','$rootScope',function($route,$routeParams,$scope,$http,$rootScope){
	var id = $routeParams.id;
	//$rootScope.loading=false;
	$rootScope.id=id;
	$scope.cart=false;
	$rootScope.colorImage = "default";
	$http.get('core/action.php',{params:{'act':'get-item','a':id}})
		.success(function(data, status){
			$rootScope.items = data;
			angular.forEach(data,function(value,index){
				$scope.image = value.cat_image;
			});
		});
	$http.get('core/action.php',{params:{'act':'get-size','a':id}})
		.success(function(data, status){
			var size=[];
			angular.forEach(data,function(val,index){
				var sp = val.sizes.split(',');
				sizes = sp;
			})
			$rootScope.sizes = sizes;
		});
	$http.get('core/action.php',{params:{'act':'get-color','a':id}})
		.success(function(data, status){
			if (data=='null') {
				$scope.colors=[{'color':'none'}];
			}else{
				$scope.colors = data;
			}
		});
	$http.get('core/action.php',{params:{'act':'get-opt-image','a':id}})
		.success(function(data, status){
			if (data=='null') {
				$scope.images=[];
			}else{
				$scope.images = data;
			}
		});
	$scope.loading=true;
	$scope.setPreview = function(image){
		//$rootScope.loading=true;
		$rootScope.$broadcast('loading',$scope.loading);
		$scope.image=image;
	}
	$scope.selectedColor=0;
	$scope.setColorImage = function(image,color,index){
		$rootScope.$broadcast('loading',$scope.loading);
		$scope.image = image;
		$rootScope.colorImage = color;
		$scope.selectedColor=index;
	}
	$scope.buy = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);

	}
	$scope.cancle = function(){
		$scope.cart=false;
	}
	$scope.selected = 0;
	$scope.setSize = function (size,index){
		$scope.selected = index;
		$rootScope.selectSize = size;
	}
	$scope.share = function(data){
	var image = data.cat_image.replace(' ','%20');
	//var nama = data.cat_name; var link = document.URL; var picture = data.cat_image; var caption = data.price; var description = data.cat_detail;
                    FB.ui({
                        method: 'feed',
                       	name: data.cat_name,
                        link: document.URL,
                        picture: "http://zid-apparel.com/"+image,
                        caption: "Rp. "+data.price,
                        description: data.cat_detail,
                        message: ''
                    },function(response){});
	}
}]);

app.controller('buyCtrl',['$route','$routeParams','$scope','$http','$rootScope','toaster',function($route,$routeParams,$scope,$http,$rootScope,toaster){
	var id = $rootScope.id;
	var count = 0;
	$scope.qty=1;
	$scope.cartTemp = true;
	$scope.orderId = Math.floor(Math.random() * (10000-0) + 0);
	$scope.submitText="Continue";
	var size;
	if ($rootScope.selectSize==undefined) {
		size = $rootScope.sizes[0];
	}else{
		size = $rootScope.selectSize;
	}
	$http.get('core/action.php',{params:{'act':'get-item','a':id}})
		.success(function(data, status){
			angular.forEach(data,function(val,i){
				$scope.cat_id = val.cat_id;
				$scope.price = val.price;
				$scope.cat_name = val.cat_name;
				$scope.size = size;
			});
	});

	$scope.reset = function(){
		$rootScope.popup=false;
	}
	$scope.getQty = function () {
		console.log($scope.qty);
	}
	$scope.cart = function (){
		$scope.continue=true;
		$scope.cartTemp=false;
	}
	$scope.submit = function (){
		var _=this;
		if (_.order!=undefined || _.order=='') {
			cust_id = Number($scope.orderId);
			$http.get('core/action.php',{params:{'act':'save-order','a':cust_id,'b':$scope.cat_id,'c':_.order.name,'d':_.order.phone,'e':_.order.email,'f':_.order.address,'g':_.order.notes,'h':'0','i':$scope.qty,'j':$scope.price*$scope.qty,'k':$rootScope.colorImage,'l':size}})
				.success(function(data,status){
					if (data==1) {
						_.order='';
						toaster.pop('success','Thank you, for your order');
						$rootScope.popup=false;
					}else{
						toaster.pop('error','Failed to process, please reload this page / contact the administrator');
					}
				})
		}else {
			toaster.pop('error','Complete the field');
		}
	}

}]);


app.controller('eventCtrl',['$route','$routeParams','$scope','$http',function($route,$routeParams,$scope,$http){
	$http.get('core/action.php',{params:{'act':'get-event'}})
		.success(function(data, status){
			$scope.events = data;
		});
}]);

app.controller('distCtrl',['$route','$routeParams','$scope','$http',function($route,$routeParams,$scope,$http){
	$http.get('core/action.php',{params:{'act':'get-dist'}})
		.success(function(data, status){
			angular.forEach(data,function(val,i){
				$scope.detail =  val.detail;
			})
		});
}]);

app.controller('contactCtrl',['$route','$routeParams','$scope','$http','toaster',function($route,$routeParams,$scope,$http,toaster){
	$scope.info = false;
	$scope.emailShow=false;
	$scope.emailInfo="";
	$scope.$watch('form.phone',function(scope){
        var reg=/^\d+$/;
        reg.test(scope) ? {} : $scope.form.phone='';
    });
    $scope.$watch('form.email',function(scope){
    	if (scope!=undefined) {
        	  var reg=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        	if (!reg.test(scope)) {
        		$scope.emailStyle={'color':'red'};
        		$scope.emailInfo="Wrong e-mail format!";
        		$scope.emailShow=true;
        	}else{
        		$scope.emailShow=false;
        	}
    	};
    });
	$http.get('core/action.php',{params:{'act':'get-contact'}})
		.success(function(data, status){
			$scope.contacts = data;
		});
	$scope.submit = function(){
	 	var _=this;
	 	if ($scope.form.name&&$scope.form.email&&$scope.form.phone&&$scope.form.message) {
			$http.get('core/action.php',{params:{'act':'post-message','a':this.form.name,'b':this.form.email,'c':this.form.phone,'d':this.form.social,'e':this.form.message}})
				.success(function(data,stat){
					if (data==1) {
						toaster.pop('success','Success send your message');
						_.form="";	
					}else{
						toaster.pop('error','Failed send your message');
					}
				})
				.error(function(){
					toaster.pop('error','Failed send your message');
				})
	 	}else{
			toaster.pop('error','Field (*) required'); 		
	 	}
	};
}]);

app.controller('footerCtrl',['$scope','$http',function($scope,$http){
	$http.get('core/action.php',{params:{'act':'get-recent'}})
		.success(function(data, status){
			$scope.recents = data;
		});
	$http.get('core/action.php',{params:{'act':'get-event'}})
		.success(function(data, status){
			$scope.events = data;
		});
	$http.get('core/action.php',{params:{'act':'get-contact'}})
		.success(function(data, status){
			$scope.contacts = data;
		});
	$http.get('core/action.php',{params:{'act':'get-bank'}})
		.success(function(data, status){
			$scope.banks = data;
		});
}]);

app.controller('loginCtrl',['$scope','$http','$location',function($scope,$http,$location){
	$scope.submit = function(){
		$http.get('core/action.php',{params:{'act':'get-login','a':this.username,'b':this.password}})
			.success(function(data,status){
				if (data==1) {
					window.location.href="admin/";
				}else{
					$scope.username="";
					$scope.password="";
				}
			})
	}
}]);

app.controller('searchCtrl',['$route','$routeParams','$scope','$http',function($route,$routeParams,$scope,$http){
	var id  = $routeParams.id;
		$http.get('core/action.php',{params:{'act':'get-search-product','a':id}})
			.success(function(data,status){
				$scope.products = data;
			});
		$http.get('core/action.php',{params:{'act':'get-search-event','a':id}})
			.success(function(data,status){
				$scope.events = data;
			});

}])

app.controller('eventDetailCtrl',['$route','$routeParams','$scope','$http',function($route,$routeParams,$scope,$http){
	var id = $routeParams.id;
	$http.get('core/action.php',{params:{'act':'get-event-detail','a':id}})
		.success(function(data,status){
			$scope.items = data;
		});
}]);

app.controller('confirmCtrl',['$route','$scope','$http','$upload','toaster',function($route,$scope,$http,$upload,toaster){
	$scope.progressShow=false;
	$scope.imageShow=false;
	$scope.pesan = false;
	$http.get('core/action.php',{params:{'act':'get-contact'}})
		.success(function(data,status){
			angular.forEach(data,function(val,i){
				$scope.phone = val.phone;
				$scope.bill = val.bill;
			})
		})
	$scope.submit = function(order,image){
		if ((order==undefined || order=='') || (image==undefined || image=='')) {
			toaster.pop('error','Kolom masih ada yang kosong');
		}else {
			var _=this;
			$http.get('core/action.php',{params:{'act':'save-confirm','a':order,'b':image}})
				.success(function(data,status){
					if (data==11) {
						toaster.pop('success','Berhasil menyimpan data');
						$scope.progress = 0;
						$scope.imageShow=false;
						$scope.order.id="";
						$scope.pesan = true;
					}else{
						toaster.pop('error','Gagal menyimpan data, silahkan mencoba kembali');
					}
				})
		}
	}
	$scope.reset = function(){
		$scope.progress = 0;
		$scope.progressShow = false;
		$scope.imageShow=false;
		$scope.labelShow=false;
		$rootScope.popup=false;
		$rootScope.image="";
		$rootScope.bank="";
		$rootScope.renk="";
	}
	$scope.upload = function(files){
		var path = Math.floor(Math.random()*100000);
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php?path='+path,
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                	$scope.progressShow = true;
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.progressShow = false;
                	$scope.imageShow=true;
                    $scope.image='assets/img/public/'+path+'/'+config.file.name;
                });
            }
        }
	}
}]);

//Other function

//End other
