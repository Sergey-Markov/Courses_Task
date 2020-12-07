var prodID = "Лафет1493";
var price = 1700;
var discount = 15;

var prod1 = new Product(prodID, price);

document.write('Вывод данных через JS: <br />' + prod1.prodID + " price: " + prod1.price);

//сформируйте скидку
var discount = price - (price* (discount /100));
prod1.changePrice(discount);

document.write('<br />' + prod1.prodID + " new price: " + prod1.price);

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;
    this.changePrice = function (price) {
        this.price = price;
        
    }
}