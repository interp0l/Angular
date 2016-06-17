angular.module('app').controller("MainController", function() { /* the controller controls the data and and provides it to view the display. first the module 'app' created in app.js is retrieved, and then uses the controller() */
		var vm = this; // VM - viewmodel, assign all controller variables to this view so angular can work.
		vm.title = 'AngularJS Tutorial Example'; 
});

/*You can have many controllers per document and many controllers governing the same section of a document, you can even have nested controllers. This example will be one controller controlling the DOM */

