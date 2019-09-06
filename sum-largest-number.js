let sumLargestNumbers = function(data) {
  let largestNumber = null;
  let secondLargestNumber = null;
  let hold = null;

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      largestNumber = data[i];
    } else if (data[i] > largestNumber) {
      largestNumber = data[i];
      hold = i;
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      secondLargestNumber = data[i];
    } else if (secondLargestNumber <= data[i] && hold !== i) {
      secondLargestNumber = data[i];
    }
  }
  return largestNumber + secondLargestNumber;

};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))