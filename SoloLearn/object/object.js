var flightNumber = "GHG 929";
var flightStatus = "On the sky";
var flight1 = {flightNumber,flightStatus};
//назначить объект рейса на перемменную flight1

//выведите результат
console.log('The flight ' + flight1.flightNumber + ' is ' + flight1.flightStatus);

function flight(flightNumber, flightStatus) {
    //исправте конструктор
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus; 
};
var g = new flight("TY-167", "улетел к ху%м");
document.write('Самолет ' + g.flightNumber + ' после взлета ' + g.flightStatus);


