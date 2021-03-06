'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
          debug: false,
          events: true,
      });

      $urlRouterProvider.otherwise('/dashboard/home');

      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/main.html',
            resolve: {
                loadMyDirectives: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                    {
                        name: 'sbAdminApp',
                        files: [
                        'scripts/directives/header/header.js',
                        'scripts/directives/footer/footer.js',
                        'scripts/directives/header/header-notification/header-notification.js',
                        'scripts/directives/sidebar/sidebar.js',
                        'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'toggle-switch',
                        files: ["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                               "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'ngAnimate',
                        files: ['../bower_components/angular-animate/angular-animate.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngCookies',
                        files: ['../bower_components/angular-cookies/angular-cookies.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngResource',
                        files: ['../bower_components/angular-resource/angular-resource.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngSanitize',
                        files: ['../bower_components/angular-sanitize/angular-sanitize.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngTouch',
                        files: ['../bower_components/angular-touch/angular-touch.js']
                    })
                }
            }
        })
        .state('dashboard.home', {
            url: '/home',
            controller: 'MainCtrl',
            templateUrl: 'views/dashboard/home.html',
            resolve: {
                loadMyFiles: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: [
                        'scripts/controllers/main.js',
                        'scripts/directives/timeline/timeline.js',
                        'scripts/directives/notifications/notifications.js',
                        'scripts/directives/chat/chat.js',
                        'scripts/directives/dashboard/stats/stats.js'
                        ]
                    })
                }
            }
        })
        .state('dashboard.form', {
            templateUrl: 'views/form.html',
            url: '/form'
        })

        .state('dashboard.blank', {
            templateUrl: 'views/pages/blank.html',
            url: '/blank'
        })
        .state('login', {
            templateUrl: 'views/pages/login.html',
            url: '/login'
        })
        .state('dashboard.chart', {
            templateUrl: 'views/chart.html',
            url: '/chart',
            controller: 'ChartCtrl',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'chart.js',
                        files: [
                          '../bower_components/angular-chart.js/dist/angular-chart.min.js',
                          '../bower_components/angular-chart.js/dist/angular-chart.css'
                        ]
                    }),
                    $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/chartContoller.js']
                    })
                }
            }
        })
        .state('dashboard.table', {
            templateUrl: 'views/table.html',
            url: '/table'
        })
        .state('dashboard.panels-wells', {
            templateUrl: 'views/ui-elements/panels-wells.html',
            url: '/panels-wells'
        })
        .state('dashboard.buttons', {
            templateUrl: 'views/ui-elements/buttons.html',
            url: '/buttons'
        })
        .state('dashboard.notifications', {
            templateUrl: 'views/ui-elements/notifications.html',
            url: '/notifications'
        })
        .state('dashboard.typography', {
            templateUrl: 'views/ui-elements/typography.html',
            url: '/typography'
        })
        .state('dashboard.icons', {
            templateUrl: 'views/ui-elements/icons.html',
            url: '/icons'
        })
        .state('dashboard.grid', {
            templateUrl: 'views/ui-elements/grid.html',
            url: '/grid'
        })

       //Custom links added by raja
       .state('dashboard.customer', {
           templateUrl: 'views/hew/customerReg.html',
           url: '/customer'
       })
          .state('dashboard.addUser', {
              templateUrl: 'views/hew/userSetup/addUser.html',
              url: '/addUsers'
          })
       .state('dashboard.userRole', {
           templateUrl: 'views/hew/userSetup/userRole.html',
           url: '/userRole'
       })

       .state('dashboard.rgpRecorder', {
           templateUrl: 'views/hew/workOrderInward/rgpRecorder.html',
           url: '/rgpRecorder'
       })
       .state('dashboard.rgpCreator', {
           templateUrl: 'views/hew/workOrderInward/rgpCreator.html',
           url: '/rgpCreator'
       })
       .state('dashboard.inwardInspectionReport', {
           templateUrl: 'views/hew/workOrderInward/inwardInspectionReport.html',
           url: '/inwardIR'
       })
       .state('dashboard.workOrderCreator', {
           templateUrl: 'views/hew/workOrderInward/workOrderCreator.html',
           url: '/workOrderCreator'
       })
       .state('dashboard.workOrderRecorder', {
           templateUrl: 'views/hew/workOrderInward/workOrderRecorder.html',
           url: '/workOrderRecorder'
       })
       .state('dashboard.jobWorkOrder', {
           templateUrl: 'views/hew/workOrderInward/jobWorkOrder.html',
           url: '/jobWorkOrder'
       })


       .state('dashboard.outwardInspectionReport', {
           templateUrl: 'views/hew/workOrderOutward/outwardInspectionReport.html',
           url: '/outwardInspectionReport'
       })
       .state('dashboard.deliveryChallan', {
           templateUrl: 'views/hew/workOrderOutward/deliveryChallan.html',
           url: '/deliveryChallan'
       })
       .state('dashboard.jobWorkInvoice', {
           templateUrl: 'views/hew/workOrderOutward/jobWorkInvoice.html',
           url: '/jobWorkInvoice'
       })
       .state('dashboard.outwardGatePass', {
           templateUrl: 'views/hew/workOrderOutward/outwardGatePass.html',
           url: '/outwardGatePass'
       })


       .state('dashboard.customerPurchaseOrder', {
           templateUrl: 'views/hew/workOrderOutward/customerPurchaseOrder.html',
           url: '/po'
       })
       .state('dashboard.report', {
           templateUrl: 'views/hew/report/report.html',
           url: '/report'
       })
  }]);


