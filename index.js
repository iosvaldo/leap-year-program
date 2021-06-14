// What makes a particular year a Leap year & what makes another year, not a Leap year ?

// its easy to say every 4 years is a Leap year, but lets say you've been given a random year and you had to work out if it was a leap year. As a programmer there's actually rules you can follow to figure this out. 

///////// The Rules ///////

// Every year that is evenly divisible by four, its a leap year. 
// Expect every year that is evenly divisible by 100.
// unless that Leap year is evenly divisible by 400.  

////// Examples /////

// E.g, Is the year 2000 a leap year ?

// 2000 / 4 = 500 (Leap)
// 2000 / 100 = 20 (Not Leap)
// 2000 / 400 = 5 (Leap)

// So the year 200 is a Leap year!

// E.g, Is the year 2100 a leap year ?

// 2100 / 4 = 525 (Leap)
// 2100 / 100 = 21 (Not Leap)
// 2100 / 400 = 5.25 (Not Leap)

////// Hint /////////

// The modulo (%) operator gives the remainder if a division.

//////////////// Challange: Leap Year //////////////////////

// A normal year has 365 days, a leap year has 366 days with an extra day in feburary. 


//////////////////////// Leap Year Program //////////////////////////


function is_a_leap(year) {
  if (year % 4 === 0) {
    if (year % 100 == 0) {
        if (year % 400 === 0) {
            return "Leap year.";
        } else {
            return "Not Leap year.";
          }
    } else {
        return "Leap year.";
      }
  } else {
      return "Not Leap year.";
    }
}