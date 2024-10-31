// Problem 1:
/* We work for a company building a smart home thermometer. Our 
   most recent task is this: "Given an array of tempretures of one day 
   , calculating the teprerature amplitude. Keep in mind that sometimes 
   there might be a sensor error."
*/

const tempretures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; 

// 1) Understanding the problem
// - what is temp amplitude/ Answer: different between highest and lowest temp.
// - how to coompute the max and min temperature?
// - what is a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max and min value of array?
// - subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  
  let max = temps[0];
  let min = temps[0]; 
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; 
    if (typeof curTemp !== 'number') continue; 
    
    if (curTemp > max) max = curTemp; 
    if (curTemp < min) min = curTemp; 
  
  }
  console.log(max, min);
  return max - min; 
};

const amplitude = calcTempAmplitude(tempretures); 
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temp

// 1) understanding the problem
// - with 2 arrays, should we implement functionality twice? NO, just merge two arrays;

// 2) breaking up into sub-problem
// - How to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  
  const temps = t1.concat(t2); 

  let max = temps[0];
  let min = temps[0]; 
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; 
    if (typeof curTemp !== 'number') continue; 
    
    if (curTemp > max) max = curTemp; 
    if (curTemp < min) min = curTemp; 
  
  }
  console.log(max, min);
  return max - min; 
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1], [9, 0, 5]); 
console.log(amplitudeNew);