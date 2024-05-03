function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
 let roman = '';

  for (let key in obj) {
    while (num >= obj[key][1]) {
      roman += obj[key][0];
      num -= obj[key][1];
    }
    if (num <= 0) break;
    let nextKey = key - (key % 2 === 0 ? 2 : 1);
    let diff = obj[key][1] - obj[nextKey][1];
    if (num >= diff) {
      roman += obj[nextKey][0] + obj[key][0];
      num -= diff;
    }
  }

  return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
