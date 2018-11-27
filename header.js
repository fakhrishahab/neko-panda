$(document).ready(function(){

    var url = document.location.href.split("/");
    var path = url[url.length - 1];
    
    $('.header-nav-item[data-index="'+path+'"] a').addClass('active');
});