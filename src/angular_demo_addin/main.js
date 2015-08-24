//This is an example addin
console.log("Hello world! I am running version", ININ.Addins.version, "of the add-in API.");

ININ.Addins.UI.Views.registerView({
    description: "Example view using angularjs",
    displayName: "Angular Addin",
    pageUrl:'/views/queueView.html',
    viewId: 'ANGULAR_ADDIN_QUEUE_VIEW'

});
