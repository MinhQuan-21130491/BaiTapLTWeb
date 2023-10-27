$(document).ready(function () {
    $('#my_form1').submit(function(event) {
        event.preventDefault();
        var textName = $('#text__name').val();
        var textEmail = $('#text__email').val();
        var textNumberPhone = $('#text__phone').val();
        var nameReg = /^[A-Za-zÀ-ỹ\s]+$/;
        var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var phoneReg = /^\d{10}/;

        var condition = true;
        if(textName == "") {
            $('#errorName').text('Vui lòng nhập tên!');
            $('#errorName').attr('style','color:red')
            condition = false;
        }else
        if (!textName.match(nameReg)) {
            $('#errorName').text('Chỉ được nhập tên bằng chữ!');
            $('#errorName').attr('style','color:red')
            condition = false;
        }else {
            $('#errorName').text('')
        }
        if(textEmail == "") {
            $('#errorEmail').text('Vui lòng nhập email  !');
            $('#errorEmail').attr('style','color:red')
            condition = false;
        }else
        if (!textEmail.match(emailReg)) {
            $('#errorEmail').text('Vui lòng nhập địa chỉ email hợp lệ!');
            $('#errorEmail').attr('style','color:red')
            condition = false;
        }else {
            $('#errorEmail').text('');
        }
        if(textNumberPhone == "") {
            $('#errorPhone').text('Vui lòng nhập số điện thoại!');
            $('#errorPhone').attr('style','color:red')
            condition = false;
        }else
        if (!textNumberPhone.match(phoneReg)) {
            $('#errorPhone').text('Vui lòng nhập địa chỉ số điện thoại hợp lệ!');
            $('#errorPhone').attr('style', 'color:red')
            condition = false;
        }else{
            $('#errorPhone').text('');
        }
        var selectService = $('#selects').val();
        if (selectService != "") {
               console.log(selectService);
            $('#errorService').text('');
        }else {
            console.log("Vui lòng chọn dịch vụ");
            $('#errorService').text('Vui lòng chọn 1 dịch vụ!');
            $('#errorService').attr('style','color:red')
            condition = false;

        }
        if(condition) {this.submit();
        }


    })
})