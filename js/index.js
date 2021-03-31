
$(document).ready(function(){
    scroll();
    clickEvent();
});

function scroll(){
    $(document).scroll(function(){
        // console.log($(document).scrollTop());
        // console.log($('section:not(:first-of-type) h2').offset().top);

        var scrollW = $(document).scrollTop() + $(window).height();

        if(scrollW >= $('section:not(:first-of-type) .main').offset().top){
            $('#event .main').addClass('animate');
        }else{
            $('#event .main').removeClass('animate');
        }

        if(scrollW >= $('#product .main').offset().top){
            $('#product .main').addClass('animate');
        }else{
            $('#product .main').removeClass('animate');
        }

        if(scrollW >= $('#video .main').offset().top){
            $('#video .main').addClass('animate');
        }else{
            $('#video .main').removeClass('animate');
        }

        if(scrollW >= $('.topItem').offset().top){
            $('.topItem').addClass('animate');
        }else{
            $('.topItem').removeClass('animate');
        }

        if(scrollW >= $('#product .topItem').offset().top){
            $('#product .topItem').addClass('animate');
        }else{
            $('#product .topItem').removeClass('animate');
        }
    });
}

function clickEvent(){
    $('#video .pop_video img').click(function(){
        $('#video .pop_video .popUp').css('display','block');
    });

    $('#video .pop_video .popUp').click(function(){
        $('#video .pop_video .popUp').css('display','none');
    });
}


    


