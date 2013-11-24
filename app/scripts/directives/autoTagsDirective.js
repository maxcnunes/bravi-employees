'use strict';

/* TODO: REFACTORING
 * ===================*/
angular.module('braviEmployeesApp')
.directive('autoTags', function ($parse, $compile) {
  return {
    restrict: 'A',
    scope: {
      filter: '&',
      ngModel: '=',
      selectedItem: '=',
      limit: '=',
      rateLimitWait: '=',
      tags: '=',
      url: '='
    },
    link: function (scope, element, attrs) {
      var construct = {
      valueKey: attrs.valueKey,
        remote: {
          url: scope.url,
          cache: false,
          filter: function (parsedResponse) {
            if (attrs.filter) {
              return scope.filter(parsedResponse);
            }
           return onFilter(parsedResponse);
          }
        }
      };

      if (attrs.limit) {
        construct.limit = attrs.limit;
      }

      if (attrs.rateLimitWait) {
        construct.remote.rateLimitWait = attrs.rateLimitWait;
      }

      element.typeahead(construct);

      scope.$watch('selectedItem', function (newValue) {
        if (newValue === '') {
          element.typeahead('setQuery', '');
        }
      }, true);

      element.on('change', function (event) {
        if (attrs.ngModel) {
          scope.ngModel = $(event.target).val();
        }

        scope.$apply();
      });

      element.on('typeahead:selected', function (event, datum, dataset) {
        scope.selectedItem = datum;

        if (attrs.ngModel) {
          scope.ngModel = $(event.target).val();
        }

        scope.$apply(scope.add);
      });

      element.on('typeahead:autocompleted', function (event, datum, dataset) {
        scope.selectedItem = datum;

        if (attrs.ngModel) {
          scope.ngModel = $(event.target).val();
        }

        scope.$apply();
      });

      scope.$on('$destroy', function () {
        element.typeahead('destroy');
      });


    var onAdd = function () {
      var selected = scope.selected || element.val();
      if (selected) {
        var exists = _.find(scope.tags, function (tag) {
          return new RegExp(tag, 'i').test(selected);
        });

        if (!exists) {
          scope.tags.push(element.val());
        }

        // a blank string will tell the control to clear/reset.
        element.val('')
        scope.selectedItem = '';
      }
    };

    var onFilter = function (parsedResponse) {
      // Remove any item already in the list.
      return _.filter(parsedResponse, function (item) {
        return !_.find(scope.tags, function (tag) {
          return new RegExp(tag, 'i').test(item);
        });
      });
    };

      /* TAGS
       * ==========================*/
      var box = '<div class="tags">' +
                '<a ng-repeat="(idx, tag) in tags" class="tag" ng-click="remove(idx)">{{tag}}<i /></a>' +
                '</div>';
      $compile(angular.element(box).insertBefore($('.twitter-typeahead')))(scope);

      if(!scope.tags) { scope.tags = []; }

      // This adds the new tag to the tags array
      scope.add = function() {
        onAdd();
      };

      // This is the ng-click handler to remove an item
      scope.remove = function ( idx ) {
        scope.tags.splice( idx, 1 );
      };

      // Capture all keypresses
      element.bind( 'keypress', function ( event ) {
        // But we only care when Enter was pressed
        if ( event.keyCode === 13 ) {
          // There's probably a better way to handle this...
          scope.$apply(scope.add);

          // prevent submit the form
          event.preventDefault();
        }
      });
    }
  };
});
