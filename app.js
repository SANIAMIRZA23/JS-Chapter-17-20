// QUE : 01
// var multidimensional = [[], [], []];

// QUE : 02
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// for (var i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ") + "<br>");
// }

// QUE : 03
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// QUE : 04
// var table = +prompt("Enter a number to show its multiplication table:");
// var table_length = +prompt("Enter length multiplication table");
// for (var i = 1; i <= table_length; i++) {
//     document.write(table + " x " + i + " = " + (table * i) + "<br>");
// }

// QUE : 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// QUE : 06
// document.write("<b>Counting:</b><br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br><b>Reverse Counting:</b><br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }


// document.write("<br><b>Even:</b><br>");
// for (var i = 0; i <= 20; i+=2) {
//     document.write(i + ", ");
// }

// document.write("<br><b>Odd:</b><br>");
// for (var i = 1; i <= 19; i+=2) {
//     document.write(i + ", ");
// }

// document.write("<br><b>Series:</b><br>");
// for (var i = 2; i <= 20; i+=2) {
//     document.write(i + "k, ");
// }


// QUE : 07
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userChoice = prompt("Welcome to our bakery.What do you whant to order sir/maam?");
// var index = bakeryItems.indexOf(userChoice)
// if (index != -1) {
//     document.write(userChoice + " is available at index " + index + " in our bakery.")
// } else {
//     document.write("We are sorry. " + userChoice + " is not available in our bakery.")
// }

// QUE : 8
// var Numbers = [24, 53, 78, 91, 12];
// var largestNum = Numbers[0];
// for (var i = 1; i < Numbers.length; i++) {
//     if (Numbers[i] > largestNum) {
//         largestNum = Numbers[i]
//     }
// }
// document.write("Array items: " + Numbers + "<br>");
// document.write("The largest number is " + largestNum);

// QUE : 9
// var Numbers = [24, 53, 78, 91, 12];
// var smallestNum = Numbers[0];
// for (var i = 1; i < Numbers.length; i++) {
//     if (Numbers[i] < smallestNum) {
//         smallestNum = Numbers[i]
//     }
// }
// document.write("Array items: " + Numbers + "<br>");
// document.write("The smallest number is " + smallestNum);

// QUE : 10
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + " ,");
// }

// ------ The End :) -------