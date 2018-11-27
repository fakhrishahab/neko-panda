$('.gallery-item').on('click', function(){
    var data = $(this).data('target');
    // console.log($(this))
    $('.gallery-popup').addClass('show');
    $('.gallery-popup-content[data-id='+data+']').addClass('show');
});

$('.gallery-popup-close').on('click', function(){
    $('.gallery-popup').removeClass('show');
    $('.gallery-popup-content').removeClass('show');
});