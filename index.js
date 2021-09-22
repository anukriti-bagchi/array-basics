/**
prepare a list of grocery items to buy.
add 5 items
print the first item on the list.
print the third item on the list.
print the last item on the list.
 */
var groceryList = ["flowers","milk","samosas","eggs","juice"];

console.log(groceryList[0]);
console.log(groceryList[3]);
console.log(groceryList[4]);

//another way to access the last item 
//array has a property length.
var HowLongIsThisArray = groceryList.length
console.log(HowLongIsThisArray);
console.log(groceryList[groceryList.length - 1])
