var admin = angular.module('admin',['ngRoute','ngTouch','ngSanitize','toaster','ngProgress','angularFileUpload','colorpicker.module','textAngular']);

admin.directive('popup',function($compile,$templateRequest,$rootScope){
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

admin.config(['$routeProvider',function($routeProvider,$routeParams){
	$routeProvider
	.when('/home',{
		templateUrl 	:'templates/dashboard.html',
		controller 		:'dashboardCtrl'
	})
	.when('/order',{
		templateUrl 	:'templates/order.html',
		controller 		:'orderCtrl'
	})
	.when('/data',{
		templateUrl 	:'templates/data.html',
		controller 		:'dataCtrl'
	})
	.when('/event',{
		templateUrl 	:'templates/event.html',
		controller 		:'eventCtrl'
	})
	.when('/available',{
		templateUrl 	:'templates/available.html',
		controller 		:'availableCtrl'
	})
	.when('/gallery',{
		templateUrl 	:'templates/gallery.html',
		controller 		:'galleryCtrl'
	})
	.when('/link',{
		templateUrl 	:'templates/link.html',
		controller 		:'linkCtrl'
	})
	.when('/cms',{
		templateUrl 	:'templates/cms.html',
		controller 		:'cmsCtrl'
	})
	.when('/comments',{
		templateUrl 	:'templates/comments.html',
		controller 		:'commentsCtrl'
	})
	.when('/dist',{
		templateUrl 	:'templates/dist.html',
		controller 		:'distCtrl'
	})
	.when('/pay',{
		templateUrl 	:'templates/pay.html',
		controller 		:'payCtrl'
	})
	.when('/bill/:id',{
		templateUrl 	:'templates/billing.html',
		controller 		:'billCtrl'
	})
	.when('/stat',{
		templateUrl 	:'templates/stat.html',
		controller 		:'statCtrl'
	})
	.otherwise('/home');
}]);

admin.run(function($rootScope,$location,$http,ngProgress){
	$rootScope.$on('$routeChangeStart',function(){
		ngProgress.start();
	})
	$rootScope.$on('$routeChangeSuccess',function(){
		ngProgress.complete();
	})
})

admin.controller('menuCtrl',['$scope','$location','$http',function($scope,$location,$http){
	$scope.selected=0;
	$scope.menus=[{'url':'#/home','name':'Dashboard','icon':'glyphicon glyphicon-dashboard'},
				  {'url':'#/order','name':'Order','icon':'glyphicon glyphicon-th'},
				  {'url':'#/data','name':'Data','icon':'glyphicon glyphicon-list-alt'},
				  {'url':'#/gallery','name':'Gallery','icon':'glyphicon glyphicon-picture'},
				  {'url':'#/available','name':'Available Product','icon':'glyphicon glyphicon-th'},
				  {'url':'#/event','name':'Event','icon':'glyphicon glyphicon-star'}];
	$scope.changeActive = function(index){
		$scope.selected = index;
	}
	$scope.logOut = function(){
		$http.get('core/admin-action.php',{params:{'act':'logout'}})
			.success(function(data,status){
				window.location.href="..";
			})
	}
	$http.get('core/admin-action.php',{params:{'act':'cek-user'}})
		.success(function(data,status){
			data==0?window.location.href="../":{}
		})
}])

admin.controller('dashboardCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $scope.menus=[{'attribut':'','color':'#3791F9','image':'statistik.png','url':'#/gallery','name':'Gallery','icon':'glyphicon glyphicon-play'},
                  {'attribut':'','color':'#3791F9','image':'berita.png','url':'#/event','name':'Event','icon':'glyphicon glyphicon-bullhorn'},
                  {'attribut':'','color':'#3791F9','image':'agenda.png','url':'#/data','name':'Data','icon':'glyphicon glyphicon-list-alt'},
                  {'attribut':'','color':'#3791F9','image':'gallery.png','url':'#/dist','name':'Distributor','icon':'glyphicon glyphicon-globe'},
                  {'attribut':'','color':'#3791F9','image':'gallery.png','url':'#/pay','name':'Payment','icon':'glyphicon glyphicon-usd'},
                  {'attribut':'','color':'#3791F9','image':'gallery.png','url':'#/stat','name':'Statistik','icon':'glyphicon glyphicon-signal'},
                  {'attribut':'','color':'#3791F9','image':'gallery.png','url':'#/cms','name':'CMS','icon':'glyphicon glyphicon-home'}];
	var count=0,countMsg=0;
	$http.get('core/admin-action.php',{params:{'act':'get-order'}})
		.success(function(data,status){
			$rootScope.orders = data;
			if (data=='null') {
				count=0;
			}else{
				angular.forEach(data,function(val,index){
					++count;
				});
			}
			$scope.count=count;
		})
	$http.get('core/admin-action.php',{params:{'act':'get-message'}})
		.success(function(data,status){
			$rootScope.messages = data;
			if (data=='null') {
				countMsg=0;
			}else{
				angular.forEach(data,function(val,index){
					++countMsg;
				});
			}
			$scope.countMsg=countMsg;
		})
	$http.get('core/admin-action.php',{params:{'act':'get-statistic'}})
		.success(function(data,status){
			$scope.stats=data;
		})
}]);

admin.controller('orderCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$http.get('core/admin-action.php',{params:{'act':'get-order'}})
		.success(function(data,status){
			$rootScope.orders = data;
		})
	$scope.productDelete = function(id){
		for (item in $rootScope.orders){
			if ($rootScope.orders[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.orders,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-order','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
}]);

admin.controller('dataCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
	$rootScope.popup=false;
	$rootScope.template="";
	$http.get('core/admin-action.php',{params:{'act':'get-category'}})
		  .success(function(data,status){
		  	if (data=='null') {
		  		$rootScope.cats = [];
		  	}else{
		  		$rootScope.cats = data;
		  	}
		  })
	$http.get('core/admin-action.php',{params:{'act':'get-product'}})
		  .success(function(data,status){
		  	if (data=='null') {
		  		$rootScope.products = [];
		  	}else{
		  		$rootScope.products = data;
		  	}
		  })
	$scope.productAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.categoryAdd = function (temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);		
	}
	$scope.productDelete = function(id){
		for (item in $scope.products){
			if ($scope.products[item].cat_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($scope.products,item, id) : {};
			};
		}
	}
	$scope.categoryDelete = function(id){
		for (item in $scope.cats){
			if ($scope.cats[item].cat_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($scope.cats,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-product','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
//Available color
	$rootScope.popup=false;
	$rootScope.template="";
	$http.get('core/admin-action.php',{params:{'act':'get-color'}})
		  .success(function(data,status){
		  	if (data=='null') {
		  		$rootScope.colors = [];
		  	}else{
		  		$rootScope.colors = data;
		  	}
		  })
	$http.get('core/admin-action.php',{params:{'act':'get-size'}})
		  .success(function(data,status){
		  	if (data=='null') {
		  		$rootScope.sizes = [];
		  	}else{
		  		$rootScope.sizes = data;
		  	}
		  })
	$scope.colorAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.sizeAdd = function (temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);		
	}
	$scope.colorDelete = function(id){
		for (item in $rootScope.colors){
			if ($rootScope.colors[item].cat_col_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteColor($rootScope.colors,item, id) : {};
			};
		}
	}
	$scope.sizeDelete = function(id){
		for (item in $rootScope.sizes){
			if ($rootScope.sizes[item].cat_size_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteSize($rootScope.sizes,item, id) : {};
			};
		}
	}
	function deleteColor(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-color','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	function deleteSize(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-size','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
//End available
}]);

admin.controller ('categoryAddCtrl',['$scope','$rootScope','$http','toaster',function($scope,$rootScope,$http,toaster){
	$scope.labelShow=false;
	$scope.submit = function(){
		var cat=this.category;
		var _=this;
		if (cat=='undefined') {
			toaster.pop('error','Gagal, silahkan ulangi kembali/refresh halaman');
		}else{
			$http.get('core/admin-action.php',{params:{'act':'save-category','a':cat}})
				.success(function(data,status){
					if (data==1) {
						$rootScope.cats.push({'cat_id':'','cat_parent_ID':'','cat_name':cat,'cat_detail':'','price':'','cat_image':'','status':'','date_add':''});
						toaster.pop('success','Berhasil');
						_.category='';
					}else{
						toaster.pop('error','Gagal, silahkan ulangi kembali/refresh halaman');
					}
				})
		}
	}
	$scope.reset = function(){
		$rootScope.popup=false;		
	}
}]);

admin.controller('productAddCtrl',['$scope','$rootScope','$http','$upload','toaster',function($scope,$rootScope,$http,$upload,toaster){
	$scope.progressShow = false;
	$scope.progressShowSide = false;
	$scope.images=[];
	$scope.imagesSide=[];
	$scope.updateBtn = false;
	var rand = Math.floor(Math.random()*100000);
	var prodsTemp;
	var baru = true;
	$http.get('core/admin-action.php',{params:{'act':'get-category'}})
		.success(function(data,status){
			$scope.adds = data;
		})
	$http.get('core/admin-action.php',{params:{'act':'get-product'}})
		.success(function(data,status){
			$scope.prods = data;
			prodsTemp=data;
		})
	$scope.$watch('files',function(){
		$scope.upload($scope.files);
	});
	function randomHuruf(){
		var arr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var txt = '';
		for (var x=0;x<5;x++) {
			txt += arr.charAt(Math.floor(Math.random()*arr.length));
		}
		return txt;
	}
	$scope.categoryChange = function(val){
		if (val==null) {
			$scope.prods = []
		}else{
			var temp=[];
			angular.forEach(prodsTemp,function(data,i){
				if (data.cat_parent_ID==val.cat_id) {
					temp.push(data);
				};
			});
			$scope.prods = temp;
		}
	}
	$scope.nameChange = function(val){
		if (val==null) {
			baru = true;
			$scope.updateBtn = false;
			$scope.disable=false;
		}else{
			baru = false;
			$scope.disable=true;
			$scope.updateBtn = true;
			$http.get('core/admin-action.php',{params:{'act':'get-product-detail','a':val.cat_id}})
				.success(function(data,status){
					angular.forEach(data,function(val,i){
						$scope.product.size = val.sizes;
						$scope.product.name = val.cat_name;
						$scope.product.detail = val.cat_detail;
						$scope.product.price = val.price;
					});
				})
		}
	}
	$scope.progress = 0;
	$scope.imageShow=false;
	$scope.labelShow=false;
	var path=Math.floor(Math.random()*10000);
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload-new.php?path=product/'+path,
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                    $scope.progressShow = true;
                }).success(function (data, status, headers, config) {
                	$scope.progressShow = false;
                    $scope.images.push({'image':'assets/img/product/'+path+'/'+config.file.name,'model':randomHuruf()});
                });
            }
        }
	}

	$scope.uploadSide = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload-new.php?path=product/'+path,
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                    $scope.progressShowSide = true;
                }).success(function (data, status, headers, config) {
                	$scope.progressShowSide = false;
                    $scope.imagesSide.push({'image':'assets/img/product/'+path+'/'+config.file.name});
                });
            }
        }
	}
	$scope.reset = function(){
		$scope.progress = 0;
		$scope.imageShow=false;
		$rootScope.popup=false;
	}

	$scope.update = function(){
		var _=this;
		var name = this.product.name;
		var price = this.product.price;
		var detail = this.product.detail;
		var parentID = this.product.parentName.cat_id; 						
		$http.get('core/admin-action.php',{params:{'act':'update-product','a':this.product.detail,'b':this.product.price,'c':$scope.images[0].image,'d':this.product.size,'e':parentID}})
			.success(function(data,status){
				if (data==1) {
					_.product='';
					$scope.progress = 0;
					$scope.images=[];
					$scope.imagesSide=[];
					$rootScope.products.push({'cat_id':rand,'cat_parent_ID':'','cat_name':name,'cat_detail':detail,'price':price,'cat_image':'','status':'','date_add':''});
					toaster.pop('success','Berhasil');
				}else{
					toaster.pop('error','Gagal, silahkan ulangi kembali/refresh halaman');
				}
			})
		angular.forEach($scope.images,function(val,i){
			image = val.image;
			color = val.model;
			$http.get('core/admin-action.php',{params:{'act':'save-color','a':color,'b':image,'c':parentID}});
		})	
		angular.forEach($scope.imagesSide,function(val,i){
			image = val.image;
			$http.get('core/admin-action.php',{params:{'act':'save-image','a':image,'b':parentID}});
		})	
	}

	$scope.submit = function(){
		var _=this;
		var name = this.product.name;
		var price = this.product.price;
		var detail = this.product.detail;
			$http.get('core/admin-action.php',{params:{'act':'save-product','a':this.product.parent.cat_id,'b':this.product.name,'c':this.product.detail,'d':this.product.price,'e':$scope.images[0].image,'f':this.product.size,'g':rand}})
				.success(function(data,status){
					if (data==1) {
						_.product='';
						$scope.progress = 0;
						$scope.images=[];
						$scope.imagesSide=[];
						toaster.pop('success','Berhasil');
						$rootScope.products.push({'cat_id':rand,'cat_parent_ID':'','cat_name':name,'cat_detail':detail,'price':price,'cat_image':'','status':'','date_add':''});;
					}else{
						toaster.pop('error','Gagal, silahkan ulangi kembali/refresh halaman');
					}
				})
			angular.forEach($scope.images,function(val,i){
				image = val.image;
				color = val.model;
				$http.get('core/admin-action.php',{params:{'act':'save-color','a':color,'b':image,'c':rand}});
			})	
			angular.forEach($scope.imagesSide,function(val,i){
				image = val.image;
				$http.get('core/admin-action.php',{params:{'act':'save-image','a':image,'b':rand}});
			})
	}
}]);

admin.controller('eventCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$rootScope.eventShow=false;
	$http.get('core/admin-action.php',{params:{'act':'get-event'}})
		.success(function(data,status){
			$rootScope.events = data;
		})
	$scope.eventDelete = function(id){
		for (item in $rootScope.events){
			if ($rootScope.events[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.events,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-event','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	$scope.eventAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.eventTrue = function(){
		$rootScope.eventShow=true;
	}
}]);


admin.controller('eventAddCtrl',['$scope','$rootScope','$http','$upload','toaster',function($scope,$rootScope,$http,$upload,toaster){
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.imageShow=true;
                	$scope.source = 'assets/img/'+config.file.name;
                    $scope.image='assets/img/'+config.file.name;
                });
            }
        }
	}

	$scope.submit = function(){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-event','a':this.name,'b':this.detail,'c':this.source}})
			.success(function(data,status){
				if (data==1) {
					$scope.name='';
					$scope.detail='';
					$scope.source='';
					$scope.progress = 0;
					$scope.imageShow=false;
					toaster.pop('success','Success add event');
				}else{
					toaster.pop('error','Failed to save event, please reload this page');
				}
			})

	}		

	$scope.eventFalse = function(){
		$rootScope.eventShow=false;
	}	
}]);

admin.controller('availableCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
	$rootScope.popup=false;
	$rootScope.template="";
	$http.get('core/admin-action.php',{params:{'act':'get-color'}})
		  .success(function(data,status){
		  	$rootScope.colors = data;
		  })
	$http.get('core/admin-action.php',{params:{'act':'get-size'}})
		  .success(function(data,status){
		  	$rootScope.sizes = data;
		  })
	$scope.colorAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.sizeAdd = function (temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);		
	}
	$scope.colorDelete = function(id){
		for (item in $rootScope.colors){
			if ($rootScope.colors[item].cat_col_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.colors,item, id) : {};
			};
		}
	}
	$scope.sizeDelete = function(id){
		for (item in $rootScope.sizes){
			if ($rootScope.sizes[item].cat_size_id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteSize($rootScope.sizes,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-color','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	function deleteSize(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-size','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}

}]);

admin.controller('colorAddCtrl',['$rootScope','$scope','$http','$upload',function($rootScope,$scope,$http,$upload){
	$scope.progress = 0;
	$scope.imageShow=false;
	$scope.labelShow=false;
	$http.get('core/admin-action.php',{params:{'act':'get-product'}})
		.success(function(data,status){
			$scope.adds = data;
		})
	$scope.submit = function(){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-color','a':this.parent.cat_id,'b':this.color,'c':this.image}})
			.success(function(data,status){
				if (data==1) {
					$scope.name='';
					$scope.detail='';
					$scope.source='';
					$scope.progress = 0;
					$scope.imageShow=false;
					$scope.labelShow=true;
					$scope.labelClass="success";
					$scope.labelText="Sucess";
					$rootScope.colors.push({'cat_name':_.parent.cat_name,'color':_.color,'image':_.image});
				}else{
					$scope.labelShow=true;
					$scope.labelClass="danger";
					$scope.labelText="Failed";
				}
			})
	}
	$scope.reset = function(){
		$rootScope.popup=false;
		$scope.color='#3791F9';
		$scope.progress = 0;
		$scope.imageShow=false;
		$scope.labelShow=false;
	}
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.imageShow=true;
                    $scope.image='assets/img/'+config.file.name;
                });
            }
        }
	}
}])

admin.controller('sizeAddCtrl',['$rootScope','$scope','$http','$upload',function($rootScope,$scope,$http,$upload){
	$scope.labelShow=false;
	$http.get('core/admin-action.php',{params:{'act':'get-product'}})
		.success(function(data,status){
			$scope.adds = data;
		})
	$scope.submit = function(){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-size','a':this.parent.cat_id,'b':this.size}})
			.success(function(data,status){
				if (data==1) {
					$scope.labelShow=true;
					$scope.labelClass="success";
					$scope.labelText="Sucess";
					$rootScope.sizes.push({'cat_name':_.parent.cat_name,'size':_.size,'cat_size_id':''});
					_.size='';
				}else{
					$scope.labelShow=true;
					$scope.labelClass="danger";
					$scope.labelText="Failed";
				}
			})
	}
	$scope.reset = function(){
		$rootScope.popup=false;
		$scope.color='#3791F9';
		$scope.progress = 0;
		$scope.imageShow=false;
		$scope.labelShow=false;
	}
}])

admin.controller('galleryCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$http.get('core/admin-action.php',{params:{'act':'get-gallery'}})
		.success(function(data,status){
			$rootScope.gallerys = data;
		})
	$scope.galleryDelete = function(id){
		for (item in $rootScope.gallerys){
			if ($rootScope.gallerys[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.gallerys,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-gallery','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	$scope.eventAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}

}]);
admin.controller('galleryAddCtrl',['$rootScope','$scope','$http','$upload','toaster',function($rootScope,$scope,$http,$upload,toaster){
	$scope.labelShow=false;
	$scope.submit = function(image){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-gallery','a':image}})
			.success(function(data,status){
				if (data==1) {
					toaster.pop('success','Berhasil menyimpan data');
					$rootScope.gallerys.push({'id':'','image':image});
					$scope.progress = 0;
					$scope.imageShow=false;
					$scope.labelShow=false;
				}else{
					toaster.pop('error','Gagal menyimpan data, silahkan mencoba kembali');
				}
			})
	}
	$scope.reset = function(){
		$scope.progress = 0;
		$scope.imageShow=false;
		$scope.labelShow=false;
		$rootScope.popup=false;
	}
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.imageShow=true;
                    $scope.image='assets/img/'+config.file.name;
                });
            }
        }
	}
}])

admin.controller('linkCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$http.get('core/admin-action.php',{params:{'act':'get-link'}})
		.success(function(data,status){
			$rootScope.items = data;
		})
	$scope.linkDelete = function(id){
		for (item in $rootScope.items){
			if ($rootScope.items[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.items,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-link','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	$scope.linkAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.linkEdit = function(id,name,link,image,temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
		$rootScope.name=name;
		$rootScope.link=link;
		$rootScope.image=image;
		for (item in $rootScope.items){
			if ($rootScope.items[item].id==id) {
				deleteData($rootScope.items,item, id);
			};
		}
	}

}]);

admin.controller('linkAddCtrl',['$rootScope','$scope','$http','$upload','toaster',function($rootScope,$scope,$http,$upload,toaster){
	$scope.labelShow=false;
	$scope.name=$rootScope.name;
	$scope.link=$rootScope.link;
	$scope.image=$rootScope.image;
	$scope.submit = function(name,link,image){
		if (name!=undefined && link!=undefined && image!=undefined) {
			var _=this;
			$http.get('core/admin-action.php',{params:{'act':'save-link','a':name,'b':link,'c':image}})
				.success(function(data,status){
					if (data==11) {
						toaster.pop('success','Berhasil menyimpan data');
						$rootScope.items.push({'id':'','name':name,'link':link,'image':image,'date_add':''});
						$scope.progress = 0;
						$scope.imageShow=false;
						$scope.labelShow=false;
						_.image="";
						_.name="";
						_.link="";
					}else{
						toaster.pop('error','Gagal menyimpan data, silahkan mencoba kembali');
					}
				})	
		}else {
			toaster.pop('error','Kolom masih ada yang kosong');
		}
	}
	$scope.reset = function(){
		$scope.progress = 0;
		$scope.imageShow=false;
		$scope.labelShow=false;
		$rootScope.popup=false;
		$rootScope.image="";
		$rootScope.name="";
		$rootScope.link="";
	}
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.imageShow=true;
                    $scope.image='assets/img/'+config.file.name;
                });
            }
        }
	}
}])

admin.controller('cmsCtrl',['$scope','$rootScope','$http','toaster','$upload',function($scope,$rootScope,$http,toaster,$upload){
	$rootScope.eventShow=false;
	$scope.cmsShow=false;
	$scope.logoShow=false;
	$scope.cms=true;
	$scope.progress1Show=false;
	$scope.progress2Show=false;
	$http.get('core/admin-action.php',{params:{'act':'get-cms'}})
		.success(function(data,status){
			angular.forEach(data,function(val,i){
				$scope.name = val.name;
				$scope.phone = val.phone;
				$scope.detail = val.detail;
				$scope.quote = val.quote;
				$scope.bill = val.bill;
			});
		})
	$http.get('core/admin-action.php',{params:{'act':'get-logo'}})
		.success(function(data,status){
			angular.forEach(data,function(val,i){
				$scope.logo_1 = val.logo_1;
				$scope.logo_2 = val.logo_2;
			});
		})
	$scope.cmsEdit = function(){
		$scope.cmsShow=true;
		$scope.cms=false;
	}
	$scope.logoEdit = function(){
		$scope.logoShow=true;
		$scope.cms=false;
	}
	$scope.reset = function(){
		$scope.cmsShow=false;
		$scope.cms=true;
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-event','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	$scope.submit = function(){
	var _=this;
	$http.get('core/admin-action.php',{params:{'act':'save-cms','a':_.name,'b':_.phone,'c':_.detail,'d':_.quote,'e':_.bill}})
		.success(function(data,status){
			toaster.pop('success','Berhasil update data');
			$scope.cmsShow=false;
			$scope.cms=true;
			$scope.name = _.name;
			$scope.phone = _.phone;
			$scope.detail = _.detail;
			$scope.quote = _.quote;
			$scope.bill = _.bill;
		})
	}
	$scope.upload1 = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress1Show = true;
                    $scope.progress1 = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.progress1Show=false;
                    $scope.logo_1='assets/img/'+config.file.name;
                    $http.get('core/admin-action.php',{params:{'act':'update-logo-1','a':$scope.logo_1}});
                });
            }
        }
	}
	$scope.upload2 = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress2Show = true;
                    $scope.progress2 = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.progress2Show=false;
                    $scope.logo_2='assets/img/'+config.file.name;
                    $http.get('core/admin-action.php',{params:{'act':'update-logo-2','a':$scope.logo_2}});
                });
            }
        }
	}
}]);

admin.controller('commentsCtrl',['$scope','$rootScope','$http','toaster',function($scope,$rootScope,$http,toaster){
	$http.get('core/admin-action.php',{params:{'act':'get-message'}})
		.success(function(data,status){
			$rootScope.items = data;
		});
	$scope.delMessage = function(id){
		for (var item in $rootScope.items) {
			if ($rootScope.items[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus pesan?");
				konfirm ? deleteData($rootScope.items,item,id):{};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-message','a':id}})
		.success(function(data,status){
			arr.splice(item,1);
		})
	}
}]);

admin.controller('distCtrl',['$scope','$rootScope','$http','toaster','$location',function($scope,$rootScope,$http,toaster,$location){
	$http.get('core/admin-action.php',{params:{'act':'get-dist'}})
			.success(function(data,status){
				angular.forEach(data,function(val,i){
					$scope.detail = val.detail;
				})
			})
	$scope.submit = function(){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-dist','a':_.detail}})
		.success(function(data,status){
			data = 1 ? toaster.pop('success','Successfull') : toaster.pop('error','Failed to save');
		})
	}
	$scope.cancel = function(){
		$location.path('/dasboard');
	}
}])

admin.controller('payCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$http.get('core/admin-action.php',{params:{'act':'get-pay'}})
		.success(function(data,status){
			$rootScope.items = data;
		})
	$scope.linkDelete = function(id){
		for (item in $rootScope.items){
			if ($rootScope.items[item].id==id) {
				var konfirm = confirm("Yakin ingin menghapus data?");
				konfirm ? deleteData($rootScope.items,item, id) : {};
			};
		}
	}
	function deleteData(arr,item,id){
		$http.get('core/admin-action.php',{params:{'act':'del-pay','a':id}})
			  .success(function(data,status){
			  	arr.splice(item,1);
			  })		
	}
	$scope.linkAdd = function(temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
	}
	$scope.linkEdit = function(id,bank,rek,image,temp){
		$rootScope.popup=true;
		$rootScope.$broadcast('dataTemplate', temp);
		$rootScope.bank=bank;
		$rootScope.rek=rek;
		$rootScope.image=image;
		$rootScope.id=id;
		for (item in $rootScope.items){
			if ($rootScope.items[item].id==id) {
				deleteData($rootScope.items,item, id);
			};
		}
	}

}]);

admin.controller('payAddCtrl',['$rootScope','$scope','$http','$upload','toaster',function($rootScope,$scope,$http,$upload,toaster){
	$scope.labelShow=false;
	$scope.bank=$rootScope.bank;
	$scope.rek=$rootScope.rek;
	$scope.image=$rootScope.image;
	$scope.id=$rootScope.id;
	$scope.submit = function(id,bank,rek,image){
		if (bank!=undefined && rek!=undefined && image!=undefined) {
			var _=this;
			$http.get('core/admin-action.php',{params:{'act':'save-pay','a':bank,'b':rek,'c':image,'d':id}})
				.success(function(data,status){
					if (data==11) {
						toaster.pop('success','Berhasil menyimpan data');
						$rootScope.items.push({'id':'','bank':bank,'rek':rek,'image':image,'date_add':''});
						$scope.progress = 0;
						$scope.imageShow=false;
						$scope.labelShow=false;
						_.image="";
						_.bank="";
						_.rek="";
					}else{
						toaster.pop('error','Gagal menyimpan data, silahkan mencoba kembali');
					}
				})	
		}else {
			toaster.pop('error','Kolom masih ada yang kosong');
		}
	}
	$scope.reset = function(){
		$scope.progress = 0;
		$scope.imageShow=false;
		$scope.labelShow=false;
		$rootScope.popup=false;
		$rootScope.image="";
		$rootScope.bank="";
		$rootScope.renk="";
	}
	$scope.upload = function(files){
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'core/upload.php',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                }).success(function (data, status, headers, config) {
                	$scope.imageShow=true;
                    $scope.image='assets/img/'+config.file.name;
                });
            }
        }
	}
}]);

admin.controller('billCtrl',['$routeParams','$scope','$rootScope','$http','toaster','$location',function($routeParams,$scope,$rootScope,$http,toaster,$location){
	id = $routeParams.id;
	$http.get('core/admin-action.php',{params:{'act':'get-bill','a':id}})
			.success(function(data,status){
				angular.forEach(data,function(val,i){
					$scope.name = val.contact_name;
					$scope.phone = val.phone_number;
					$scope.email = val.email_address;
					$scope.address = val.address;
					$scope.image = val.image;
					$scope.size = val.size;
					$scope.qty = val.total_order;
				})
			})
	$scope.submit = function(){
		var _=this;
		$http.get('core/admin-action.php',{params:{'act':'save-dist','a':_.detail}})
		.success(function(data,status){
			data = 1 ? toaster.pop('success','Successfull') : toaster.pop('error','Failed to save');
		})
	}
	$scope.cancel = function(){
		$location.path('/dasboard');
	}
}]);

admin.controller('statCtrl',['$routeParams','$scope','$rootScope','$http','toaster','$location',function($routeParams,$scope,$rootScope,$http,toaster,$location){
	$scope.detail = false;
	$http.get('core/admin-action.php',{params:{'act':'get-stat'}})
			.success(function(data,status){
				angular.forEach(data,function(val,i){
					$scope.day = val.day;
					$scope.month = val.month;
					$scope.year = val.year;
					$scope.total = val.total;
				})
			})
	$http.get('core/admin-action.php',{params:{'act':'get-full-stat'}})
			.success(function(data,status){
				$scope.stats = data;
			})
	$scope.showDetail = function(){
		$scope.detail = true;
	}
}])


