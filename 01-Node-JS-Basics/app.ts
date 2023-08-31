let courseName: string = "Backend web development";
console.log(courseName);

const printNumber = (start: number, end: number): void => {
  let temp: string = " ";
  if (start < end) {
    for (let i: number = start; i <= end; i++) {
      temp += `${i}`;
    }
    console.log(temp);
  } else {
    console.log(`Invalid numbers`);
  }
};

printNumber(5, 100);
