(function() {
  'use strict';

  angular
    .module('blogularApp-components')
    .component('myArticle', {
      templateUrl : 'app/components/directives/myArticle/myArticle.html',
      bindings    : {
        article       : '<',
        deleteArticle : '&'
      },
      controller: function() {
        this.$onInit = function() {
          console.info('$onInit: %s %o', this.article.title, arguments);
        };
        this.$onChanges = function(changesObj) {
          console.info('$onChanges: %s %o', this.article.title, changesObj);
        };
        this.$doCheck = function() {
          console.info('$doCheck: %s %o', this.article.title, arguments);
        };
        this.$onDestroy = function() {
          console.info('$onDestroy: %s %o', this.article.title, arguments);
        };
        this.$postLink = function() {
          console.info('$postLink: %s %o', this.article.title, arguments);
        };
      }
    });

})();
