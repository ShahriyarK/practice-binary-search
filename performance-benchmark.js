const [linearSearch, binarySearch] = require("./binary-search");

const populateData = (arr, n) => {
  let subArray = [];
  for (let i = 0; i < n; i++) {
    let randomValue = Math.floor(Math.random() * n);
    subArray.push(randomValue);
  }
  arr.push(subArray);
};

let seedData = [];

populateData(seedData, 1000000);
populateData(seedData, 2000000);
populateData(seedData, 3000000);
populateData(seedData, 4000000);
populateData(seedData, 5000000);
populateData(seedData, 6000000);
populateData(seedData, 7000000);
populateData(seedData, 8000000);
populateData(seedData, 9000000);
populateData(seedData, 10000000);

const measurePerformance = (data) => {
  for (let i = 0; i < data.length; i++) {
    const startTime = Date.now();
    const indexToLook = data[i].length - 5;
    // linearSearch(data[i], data[i][indexToLook]);
    binarySearch(data[i], data[i][indexToLook]);
    const endTime = Date.now();
    console.log(endTime - startTime);
  }
};

measurePerformance(seedData);

// From the performance benchmark, the curve forms the shape of an exponential complexity for very large
// arrays. For smaller arrays, it is almost linear. Reference images added in the folder
// Here n is the size of array and t is the time in miliseconds required for insertion sort to execute for
// a particular array. Thus time complexity is O(n^2)
// For each iteration while the unsorted half is not empty, we iterate through the whole sorted array again
// to shift until a smaller value than target appears and then we insert. So worst case time complexity is
// O(n^2)
