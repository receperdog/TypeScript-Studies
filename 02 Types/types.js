var a = 5;
// a = 'b'//Typescript will give an error but this situation handled with ts properties.
var numb; //We can define the variable type with this syntax with this way we can handle type errors. We can just assign number to variable.
// numb = 'a'//Again will rise an error.
var arr;
//As you see the above statement we can define the type of array with this syntax.
arr = [1, 2, 3];
arr.forEach(function (value) {
    console.log(value);
});
var arr2 = [1, 2, 3]; //different array decleration with type.
var arr3 = [1, "a", true]; //If you declared array type as a any you can assign any type of value to inside of the array
var arr4 = ["a", 5, true]; //If you wish you can declare the different types of variable to assign to array with this way. This called Tuple.
