'use strict';
angular.module ('com.module.posts')
  .run (function ($rootScope, Post) {
  $rootScope.addMenu ('Posts', 'app.posts.list', 'fa-edit');

  Post.find (function (posts) {
    $rootScope.addDashboardBox ('Posts', 'bg-red', 'ion-document-text', posts.length, 'app.posts.list');
  });
});
