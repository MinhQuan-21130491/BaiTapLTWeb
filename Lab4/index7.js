$(document).ready(function () {
    var count = 1;
    $('button').click(function () {
       // alert('bạn đã ấn vào button ' + $(this).text())
        var numberButton = parseInt($(this).text());
        if(numberButton === count) {
            $(this).css('visibility', 'hidden')
            count++;
        }else {
            alert('Bạn đã nhấn sai button, vui lòng nhấn button ' +count);
        }

    })
})