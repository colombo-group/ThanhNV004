/**
        Tien Thanh 28/10/2016
 */
var input= "";
var result = 0;
var memory = 0;
var ma=0;
window.onload = function () {
    document.getElementById("in").innerHTML = 0;
}
function addKey(key) {
    input += key;
    document.getElementsByClassName("result").value = input;
    document.getElementById("in").innerHTML = input;
}
function cong(){
    input = parseFloat(input);
    result += input;
    pheptinh = "cong";
    input = "";
}
function tru() {
    input = parseFloat(input);
    result += input;
    pheptinh = "tru";
    input = "";
}
function nhan() {
    input = parseFloat(input);
    result += input;
    pheptinh ="nhan";
    input = "";
}
function chia() {
    input = parseFloat(input);
    result += input;
    pheptinh = "chia";
    input = "";
}
function mod() {
    input = parseFloat(input);
    result += input;
    pheptinh = "mod";
    input = "";
}

function compute() {
    input = parseFloat(input);
    if (pheptinh == "cong"){

        result += input;
        input = parseFloat(input);
        input = 0;
    }
    if (pheptinh == "tru"){
        result -= input;
        input = parseFloat(input);
        input = 0;
    }
    if (pheptinh == "nhan"){
        result *= input;
        input = parseFloat(input);
        input = 0;
    }
    if (pheptinh == "chia"){
        result /= input;
        input = parseFloat(input);
        input = 0;
    }
    if (pheptinh == "mod"){
        result %= input;
        input = parseFloat(input);
        input = 0;
    }
    document.getElementById("in").innerHTML = result;
}

function clearDis() {
    memory = result;
    result = 0;
    input = "";

    document.getElementById("in").innerHTML = 0;

}

function setM(m){
    switch(m){
        case "MC":
            document.getElementById('in').innerHTML = "";
            memory = 0;
            break;
        case "M+":
            document.getElementById('in').innerHTML = input;
            memory += result;
            input = parseFloat(input);
            break;  
        case "M-":
            document.getElementById('in').innerHTML = input;
            memory -= result;
            input = parseFloat(input);
            break; 
        case "MR":
            document.getElementById('in').innerHTML = memory;
            input=memory;
            break;     
    }
}
function chuyendau() {
    input = input * -1;
    document.getElementById("in").innerHTML = input;
}
function cham() {
    input+="." ;
    document.getElementById("in").innerHTML = input;
}
