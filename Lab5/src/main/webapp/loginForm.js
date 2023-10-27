$(window).load(function () {
$('#my_form2').submit(function (event) {
    event.preventDefault();
    var condition = true;
    var userName = $('#username').val();
    var password = $('#password').val();
    if(userName == "" && password == "") {
        $('#error').text('Vui lòng nhập tài khoản hoặc mật khẩu!');
        $('#error').css({'color': 'red', 'font-size': '20px'});
        condition = false;
    }
    if(condition){this.submit()};
})
})