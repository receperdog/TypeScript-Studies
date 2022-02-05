let a = 5;
// a = 'b'//Typescript will give an error but this situation handled with ts properties.

let numb: number; //We can define the variable type with this syntax with this way we can handle type errors. We can just assign number to variable.
// numb = 'a'//Again will rise an error.

let arr: number[];
//As you see the above statement we can define the type of array with this syntax.
arr = [1, 2, 3];
arr.forEach(function (value) {
  console.log(value);
});

let arr2: Array<number> = [1, 2, 3]; //different array decleration with type.

let arr3: any[] = [1, "a", true]; //If you declared array type as a any you can assign any type of value to inside of the array

let arr4: [string, number, boolean] = ["a", 5, true]; //If you wish you can declare the different types of variable to assign to array with this way. This called Tuple.

