// let date = new Date(2024,0,31,0,0,0);
let date = new Date()
// console.log("Current Date and Time: " + date)   ;
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds()); 
// console.log(date.getTime());


// date.setFullYear(2025);
// date.setMonth(11);
// date.setDate(25);
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(45);
// console.log("Updated Date and Time: " + date);

// let year = prompt("Enter year:");
// let month = prompt("Enter month (1-12):");
// let day = prompt("Enter day (1-31):");
// date.setFullYear(parseInt(year));
// date.setMonth(parseInt(month) - 1); // Months are zero-based
// date.setDate(parseInt(day));
// console.log("New Date: " + date);


// let date2 = new Date();
// date2 = new Date(year, month - 1, day);
// console.log("New Date using constructor: " + date2);

// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString("az-AZ"));
// console.log(date.toLocaleTimeString("az-AZ"));

// console.log(date.toLocaleString("az-AZ", {timeZone: "Europe/Berlin"}));



let birdthDate = new Date(2002, 0, 31);
let currentDate = new Date();

let timeDiff = currentDate - birdthDate;
let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
let yearsDiff = Math.floor(daysDiff / 365);
console.log("Days since birth: " + daysDiff);
console.log("Years since birth: " + yearsDiff);

let nextBirthday = new Date(currentDate.getFullYear(), birdthDate.getMonth(), birdthDate.getDate());
if (currentDate > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
let daysUntilBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

let hoursUntilBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60));
console.log("Hours until next birthday: " + hoursUntilBirthday);

console.log("Days until next birthday: " + daysUntilBirthday);   

