/**
 * RequireJS config file
 */
requirejs.config({
    baseUrl: '../src',
    paths : {
        jQuery : ['https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min'],
        popper : ['https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min'],
        bootstrap : ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min'],
    },
    shim : {
        'bootstrap' : ['jQuery'],
    }
});