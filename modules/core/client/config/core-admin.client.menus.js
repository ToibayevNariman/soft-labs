'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {

    Menus.addMenuItem('topbar', {
      title: 'Admin',
      state: 'admin',
      type: 'dropdown',
      roles: ['admin']
    });

    Menus.addMenuItem('sidebar', {
      title: 'Мои проекты',
      state: 'app.home',
      type: 'item',
      iconClass: 'icon-home',
      position: 1,
      roles: ['admin', 'user']
    });
  }
]);
