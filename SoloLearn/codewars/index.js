function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let allNumbers = [];
        for(const number of numbers){
        
            if(number % 1 === 0 && number > 0 ) 
            {
                // n = Math.max(...numbers);
                allNumbers.push(number);
            }
        
        }
    const firstSmallNumber = Math.min(...allNumbers);
    const indexSmallNumber = allNumbers.indexOf(firstSmallNumber);
    allNumbers.splice(indexSmallNumber, 1);
    const sumOfSmallNumbers = Math.min(...allNumbers) + firstSmallNumber;
    return sumOfSmallNumbers;
}
sumTwoSmallestNumbers([ 6.12, 82, -74, 1, 54]);
