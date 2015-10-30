(function (){
	"use strict";

	angular.module('<%= package_name_cc %>.config').config(function (cfpLoadingBarProvider){
		cfpLoadingBarProvider.includeSpinner = false;
	});

})();
