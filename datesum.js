function calculateTime(n) {
  const startTime = new Date().getTime(); // Get current time before computation

  // Calculate the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date().getTime(); // Get current time after computation

  // Calculate the time difference in milliseconds
  const timeTaken = endTime - startTime;

  return timeTaken / 1000; // Convert milliseconds to seconds
}

// Example usage
console.log("Time taken for sum from 1 to 100:", calculateTime(100), "seconds");
console.log(
  "Time taken for sum from 1 to 100000:",
  calculateTime(100000),
  "seconds"
);
console.log(
  "Time taken for sum from 1 to 1000000000:",
  calculateTime(1000000000),
  "seconds"
);
