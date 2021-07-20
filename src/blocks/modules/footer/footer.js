var footerBtn = document.getElementById("radiobtn");
var btns = footerBtn.getElementsByClassName("radiobtn__wrapper");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var checkBtn = document.getElementById("productbuy__btn_double");
var checkBtns = checkBtn.getElementsByClassName("productbuy__btn");
for (var i = 0; i < checkBtns.length; i++) {
    checkBtns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" active1");
  current[0].className = current[0].className.replace(" active1", "");
  this.className += " active1";
  });
}


