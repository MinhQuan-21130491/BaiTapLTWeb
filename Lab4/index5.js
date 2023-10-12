$(window).load(function () {
    var deg = 0;
    setInterval (function (){
        deg += 15;
        $('#img__rotate').css('transform','rotate('+deg +'deg)')
    },2000)
})