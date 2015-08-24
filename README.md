**Unit-2 Questions**

* __

A New Structure Questions

* __What are possible issues with this new file structure?__
    * You need to make sure that your paths to your accessed files are updated to insure that you have access to the dependencies you are using.

* __What are the differences between serving files from an http server and from the file system? It seemed to work fine with just open index.html in the browser...__
  * When you work just with the file system, your app cannot access Angular templates(?). Serving files from an http server more authentically replicates what will happen when you deploy your app, allowing you to do QA testing and debugging more effectively(?)

Routing Questions

* __Why does Angular put a # in the route path?__
      * For linking to pages, we’ll use the #. We don’t want the browser to think we are actually travelling to about.html or contact.html.

* __Why isn't ngRoute part of Angular core? Name at least 2 other Angular modules we could use.__
    * With the built-in AngularJS router, ngRoute, only one view (ng-view) is allowed per page. This limitation causes people to use includes (ng-include) or other workarounds to create a layout or master page for their application.


* __Compare and contrast client-side routing with server-side routing.__


* __Aside from route definitions, what else can go in a .config()?__
    * you do have access to are any providers for services you've made, only providers can be injected (with the exception of the services in the AUTO module--$provide and $injector).

* __What is $rootScope?__


* __What is the $routeChangeSuccess event?__
