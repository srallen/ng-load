(function(angular){

    angular.module('ngLoad', ['ng'])
    
    .directive('ngLoad', ['$parse', function($parse){

        return {
            compile: function($element, attr) {
                var fn = $parse(attr['ngLoad']);

                return function(scope, element, attr) {
                    element[0].onload = function(event) {
                        scope.$apply(function() {
                            fn(scope, {$event:event});
                        });
                    };
                };

            }
        };

    }]);

    
})(angular);