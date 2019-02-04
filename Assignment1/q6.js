// Q5. Given the percentage of a student, find out the division of that student. Conditions:
//
// Distinction if 100 > percentage >= 80
//     First Division if 80 > percentage >= 60
//     Second Division if 60 > percentage >= 40
//     Third Division if 40 > percentage >= 32
//     Else fail

function percentage(num = 0){
   if (num>=80 && num<100){
       console.log("Distinction")
   }
   else if (num>=60 && num<80){
       console.log("First Division")
   }
   else if (num>=40 && num<60){
       console.log("Second Division")
   }
   else if (num>=32 && num<40){
       console.log("Third Division")
   }
   else
   {
       console.log("Fail")
   }
}

percentage(78)
