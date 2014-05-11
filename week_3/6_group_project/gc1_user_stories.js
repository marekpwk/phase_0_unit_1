/*
Okay Marek! you ready for this !? let's do it!!! w00t

//First we would declare a function that would loop all the numbers from the array and keeps adding to a total variable.

function sum(takes one parameter a Array)
  variable total equal to 0
  loop through the said Array
    add i (each item in array) to total
  end loop
  return total
end function

//Second declaring mean function

function mean(takes one parameter a Array)
  variable total = function sum(Array) //so the total is in the variable total
  return (total / Array's length) // getting average by dividing total of Array by number of elements in Array
end function

//Third declaring the median function, okay this one is a bit tricky but stay with me!

function median(take one parameter a Array)
  variable middle_number = Round_down ( Array's length / 2) //Array's length / 2 gets the middle number and round down will give out a whole number and not a decimal one.
  if Array is even:
    return Array[middle_number -1] + Array[middle_number] / 2
  else
    return Array[middle_number]

  Math.floor(1.5) == 1;
*/
array = [1, 3, 5];
function sum(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}
sum(array);

function mean(array) {
    var total = sum(array);
    return(total/array.length);
}
mean(array);

function median(array){
  var middle_number = Math.floor(array.length / 2);
  if (array.length % 2 === 0){
    return (array[middle_number - 1] + array[middle_number]) /2;
  }else{
    return array[middle_number];
  }
}

median(array);


// Reflection
// This was our first group assignment, and we had a clear instruction what each person should do.
// As a future developers we will  work in groups most of the time, and that was what we did in this assignment.
// We also might just work on particular part of the project, not knowing the big picture and rely on code passed to us from another team,
// so again good communication will play a big role in our work as the web developers.