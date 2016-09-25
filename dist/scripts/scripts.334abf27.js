"use strict";angular.module("videoKingsApp",["ngAnimate","ngCookies","ngResource","Routes","ngSanitize","ngTouch"]).config(["$compileProvider","$httpProvider",function(a,b){a.debugInfoEnabled(!1),b.useApplyAsync(!0)}]).run(["$rootScope","$location",function(a,b){a.$on("$routeChangeError",function(){b.path("#/")}),a.isActive=function(a){return a===b.path()}}]),angular.module("Routes",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/services",{templateUrl:"views/services.html",controller:"ServicesCtrl"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl"}).when("/projects/:id",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("videoKingsApp").controller("MainCtrl",["$scope","$location",function(a,b){}]),angular.module("videoKingsApp").controller("AboutCtrl",["$scope","$location",function(a,b){}]),angular.module("videoKingsApp").controller("ServicesCtrl",["$scope","$location",function(a,b){}]),angular.module("videoKingsApp").controller("WorkCtrl",["$scope","$location",function(a,b){}]),angular.module("videoKingsApp").controller("ProjectsCtrl",["$scope","$routeParams",function(a,b){a.projectId=b.id}]),angular.module("videoKingsApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="content"> <div class="feed-grid text-center"> <div class="vid-div"> <div class="videoWrapper"> <img src="images/branding.2070df84.jpg" width="100%"> </div> </div> <div class="card wide"> <h4>About</h4> <p>THE VIDEO KINGS ARE AN AWARD WINNING PRODUCTION COMPANY MAKING FILMS FOR SOME OF THE WORLD\'S MOST EXCITING ARTISTS, RECORD-LABELS, COMPANIES & BRANDS</p> <br> <p><span>"WE COLLABORATE, WE CREATE, WE TELL STORIES"</span></p> </div> <div class="card wide no-margin"> <h4>Contact</h4> <h5><i class="fa fa-envelope"></i> info@videokings.tv</h5> <h5><i class="fa fa-mobile"></i> +447866856308</h5> <iframe id="map" src="//www.google.com/maps/embed/v1/place?q=place_id:ChIJPwSWDAoSdkgRrhZW_HIVKMI&key=AIzaSyBmTA7tMztgaefk3PfC900Y46uZb-Q1q2w" frameborder="0" width="100%"> </div> </div> </div>'),a.put("views/main.html",'<div class="content"> <div class="feed-grid"> <div class="card wide text-center"> <div class="vid-div"> <div class="videoWrapper"> <iframe class="videoXtra" src="https://player.vimeo.com/video/183705112?autoplay=1&loop=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> </div> <div class="card text-center"> <figure class="snip"> <img src="images/matt-johnson1.9c7f07df.jpeg" alt=""> <figcaption> <h2>Matt <span>JOHNSON</span>&copy</h2> <p>\'Get Over You\'</p> <a href="#/projects/1"></a> </figcaption> </figure> </div> <div class="card text-center"> <figure class="snip"> <img src="images/lost-village.635a5bb0.png" alt=""> <figcaption> <h2>Lost <span>VILLAGE</span>&copy</h2> <p>\'Promo 2016\'</p> <a href="#/projects/2"></a> </figcaption> </figure> </div> <div class="card text-center"> <figure class="snip"> <img src="images/fetch1.07b3988f.png" alt=""> <figcaption> <h2>Fetch <span>MEDIA</span>&copy</h2> <p>\'Slice of Cake Promo\'</p> <a href="#/projects/3"></a> </figcaption> </figure> </div> <div class="card text-center"> <figure class="snip"> <img src="images/tides.b81bd631.jpg" alt=""> <figcaption> <h2>Audio<span>shock</span>&copy</h2> <p>\'Tides\'</p> <a href="#/projects/4"></a> </figcaption> </figure> </div> <div class="card text-center"> <figure class="snip"> <img src="images/wild-fire.893a7eeb.jpeg" alt=""> <figcaption> <h2><span>Calahara</span>&copy</h2> <p>\'Wild Fire\'</p> <a href="#/projects/5"></a> </figcaption> </figure> </div> <div class="card text-center"> <figure class="snip"> <img src="images/burton.9291686a.png" alt=""> <figcaption> <h2><span>Breton</span>&copy</h2> <p>\'Titan\'</p> <a href="#/projects/6"></a> </figcaption> </figure> </div> </div> </div>'),a.put("views/music.html",'<div class="content"> <div class="feed-grid"> <div class="card text-center work"> <figure class="snip0016"> <img src="images/matt-johnson1.9c7f07df.jpeg" alt=""> <figcaption> <h2>Matt <span>JOHNSON</span>&copy</h2> <p>\'Get Over You\'</p> <a href="#/projects/1"></a> </figcaption> </figure> </div> <div class="card text-center work"> <figure class="snip0016"> <img src="images/lost-village.635a5bb0.png" alt=""> <figcaption> <h2>Lost <span>VILLAGE</span>&copy</h2> <p>\'Promo 2016\'</p> <a href="#/projects/2"></a> </figcaption> </figure> </div> <div class="card text-center work"> <figure class="snip0016"> <img src="images/fetch1.07b3988f.png" alt=""> <figcaption> <h2>Fetch <span>MEDIA</span>&copy</h2> <p>\'Slice of Cake Promo\'</p> <a href="#/projects/3"></a> </figcaption> </figure> </div> <div class="card text-center work"> <figure class="snip0016"> <img src="images/tides.b81bd631.jpg" alt=""> <figcaption> <h2>Audio<span>shock</span>&copy</h2> <p>\'Tides\'</p> <a href="#/projects/4"></a> </figcaption> </figure> </div> <div class="card text-center work"> <figure class="snip0016"> <img src="images/wild-fire.893a7eeb.jpeg" alt=""> <figcaption> <h2><span>Calahara</span>&copy</h2> <p>\'Wild Fire\'</p> <a href="#/projects/5"></a> </figcaption> </figure> </div> <div class="card text-center work"> <figure class="snip0016"> <img src="images/burton.9291686a.png" alt=""> <figcaption> <h2><span>Breton</span>&copy</h2> <p>\'Titan\'</p> <a href="#/projects/6"></a> </figcaption> </figure> </div> </div> </div>'),a.put("views/project1.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184102562" width="747" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Matt Johnson</span></p> <h6>\'Get Over You\' - Music Video 2016</h6> </div>'),a.put("views/project2.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184104627" width="747" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Lost Village</span></p> <h6>\'Promo Video 2016\'</h6> </div>'),a.put("views/project3.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184106581" width="747" height="420" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Fetch Media</span></p> <h6>\'Slice Of Cake&copy Promo Video 2016\'</h6> </div>'),a.put("views/project4.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184106631" width="747" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Audioshock</span></p> <h6>\'Tides\' - Music Video 2015</h6> </div>'),a.put("views/project5.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184110013" width="747" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Calahara</span></p> <h6>\'Wild Fire\' - Music Video 2016</h6> </div>'),a.put("views/project6.html",'<div class="card wide text-center"> <div class="videoWrapperProfile"> <iframe src="https://player.vimeo.com/video/184106655" width="747" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div> </div> <div class="card"> <p><span>Breton</span></p> <h6>\'Titan\' - Music Video 2015</h6> </div>'),a.put("views/projects.html",'<div class="content"> <div class="feed-grid" ng-include="\'views/project\' + projectId + \'.html\'"> </div> </div>'),a.put("views/services.html",'<div class="content"> <div class="feed-grid"> </div> </div>'),a.put("views/work.html",'<div class="content"> <div class="feed-grid"> <div class="card text-center work-select"> <a href="#/projects/1"> <figure class="plain"> <img src="images/matt-johnson1.9c7f07df.jpeg" alt=""> <figcaption> <h2><span>Music</span> Videos</h2> <p>Fickle Friends, VV Brown, Matt Johnson & more</p> </figcaption> </figure> </a> </div> <div class="card text-center work-select"> <a href="#/projects/2"> <figure class="plain"> <img src="images/lost-village.635a5bb0.png" alt=""> <figcaption> <h2><span>Commercial</span> & <span>Promotional</span> Videos</h2> <p>Fetch Media, Lost Village</p> </figcaption> </figure> </a> </div> <div class="card text-center work-select"> <a href="#/projects/3"> <figure class="plain"> <img src="images/fetch1.07b3988f.png" alt=""> <figcaption> <h2>Talking<span> Heads</span></h2> <p>Met Film School</p> </figcaption> </figure> </a> </div> <div class="card text-center work-select"> <a href="#/projects/4"> <figure class="plain"> <img src="images/tides.b81bd631.jpg" alt=""> <figcaption> <h2><span>Features</span> & <span>Shorts</span></h2> <p>Parrallel City, Seeking Sandman</p> </figcaption> </figure> </a> </div> </div> </div>')}]);