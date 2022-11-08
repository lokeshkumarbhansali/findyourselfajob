var pay_slider1 = document.getElementById("payRange1");
var pay_output1 = document.getElementById("payRangeValue1");

pay_output1.innerHTML = pay_slider1.value;
pay_slider1.oninput = function(){
    pay_output1.innerHTML = this.value;
}

var pay_slider2 = document.getElementById("payRange2");
var pay_output2 = document.getElementById("payRangeValue2");

pay_output2.innerHTML = pay_slider2.value;
pay_slider2.oninput = function(){
    pay_output2.innerHTML = this.value;
}

var exp_slider1 = document.getElementById("expRange1");
var exp_output1 = document.getElementById("expRangeValue1");

exp_output1.innerHTML = exp_slider1.value;
exp_slider1.oninput = function(){
    exp_output.innerHTML = this.value;
}

var exp_slider2 = document.getElementById("expRange2");
var exp_output2 = document.getElementById("expRangeValue2");

exp_output2.innerHTML = exp_slider2.value;
exp_slider2.oninput = function(){
    exp_output2.innerHTML = this.value;
}