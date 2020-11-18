function main() {
    var numberGuests =
parseInt(readLine(), 10)
    var whoRabbit = numberGuests %2;

    if (whoRabbit == 0) {
        console.log("Right");
    } else {
        console.log("Wrong");
    }
}