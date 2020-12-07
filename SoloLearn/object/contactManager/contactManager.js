function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function () {
        document.write("Вывод с помощью JS: <br />" + name + ": " + number + "<br />")
    }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

