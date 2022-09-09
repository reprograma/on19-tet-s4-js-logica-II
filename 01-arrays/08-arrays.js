const day = 1;
const month = 2;
const year = 2027;

// print 01/02/2027 using the above constants and padStart to add the zero in day and month
const dateDay = day.toString().padStart(2, "0");
const dateMonth = month.toString().padStart(2, "0");
console.log(`${dateDay}/${dateMonth}/${year}`);