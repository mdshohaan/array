// Example Frequency Checker

const votes = ["java", "java", "python", "javaScript", "python"];

const result = votes.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);
