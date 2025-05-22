let myDate = new Date();
let stringDate1 = myDate.toISOString();
let stringDate2 = myDate.toDateString();
let stringDate3 = myDate.toTimeString();
let stringDate4 = myDate.toLocaleString();

let dispalyData = {
  date: { Answer: myDate },
  ISOString: { Answer: stringDate1 },
  DateString: { Answer: stringDate2 },
  TimeString: { Answer: stringDate3 },
  LocaleString: { Answer: stringDate4 },
};

// console.table(dispalyData);

let createDate = new Date(2023, 1, 23);
// console.log(createDate.toLocaleString());

let newDate = new Date("01-14-2023");
// console.log(newDate.toLocaleString());

let timestamp = Date.now();
let date = new Date("05-20-2025");
let prevStamp = date.getTime();
let diffInHours = (timestamp - prevStamp) / (1000 * 60 * 60);
console.log(diffInHours);
