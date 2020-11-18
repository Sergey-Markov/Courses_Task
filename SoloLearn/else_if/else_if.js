/*function main() {
    var totalPrice =
parseInt(readLine(), 10)
var f = totalPrice >= 5000;
var t = totalPrice <= 4999;
var t_t = totalPrice >= 3000;
var ten = totalPrice <= 2999;
var ten_n = totalPrice >= 1000;
var zero = totalPrice <= 999;
var zero_o = totalPrice >= 1;
if (f) {
    console.log("50%");
} else if (t && t_t) {
    console.log("30%");
} else if (ten && ten_n) {
    console.log("10%");
} else if (zero && zero_n) {
    console.log("0%");
} else {
    console.log("error");
}*/


var totalPrice = 7000;
var f = totalPrice >= 5000;
var t = totalPrice <= 4999;
var t_t = totalPrice >= 3000;
var ten = totalPrice <= 2999;
var ten_n = totalPrice >= 1000;
var zero = totalPrice <= 999;
var zero_o = totalPrice >= 1;
if (f) {
    console.log("50%");
} else if (t && t_t) {
    console.log("30%");
} else if (ten && ten_n) {
    console.log("10%");
} else if (zero && zero_n) {
    console.log("0%");
} else {
    console.log("error");
}