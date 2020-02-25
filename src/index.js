module.exports = function toReadable(number) {

    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'];  
  
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
       'eighty', 'ninety'];
       
  
    if (number < 20) {
       return arr[number];
    }
  
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return tens[number / 10];
        }
        else return (tens[Math.floor(number / 10)] + ' ' + arr[number % 10]);
    }
  
    if (number > 99) {
        if (number % 100 === 0) {
            return arr[number / 100] + ' ' + 'hundred';
        }
  
        else if (number % 10 === 0) {
            return (arr[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + 
            tens[(Math.floor(number / 10)) % 10]);
        }
  
        else if (number % 100 < 20) {
            return (arr[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + 
            arr[number % 100]);
        }
  
        else return (arr[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
        tens[(Math.floor(number / 10)) % 10] + ' ' + arr[number % 10])
    }
}

