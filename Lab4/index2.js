var hienThi = document.getElementById("hienThiXinChao");
var mangXinChao = ["Xin chào quý khách!", "Hello!", "Chào mừng quý khách đã quay lại!","Xin chào, rất hân hạnh được phục vụ quý khách!"]
function getElementByIndex() {
var indexRandom = Math.floor(Math.random() * mangXinChao.length); //Math.floor() để làm tròn số thập phân thành số nguyên, ví dụ 0.5 -->0, 1.5--> 1
return mangXinChao[indexRandom];                                             //Math.random: random 1 số từ 0(bao gồm) đến 1(không bao gồm 1)
}
function hienThiXinChao () {
    hienThi.textContent = getElementByIndex(); // hienThi.innerHTML = getElementByIndex(); cũng được
}
hienThiXinChao(); // auto gọi function này khi mở web
