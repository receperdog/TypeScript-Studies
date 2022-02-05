let message;
message = "Hello World";

let lengthOfString = (<string>message).length; //assertion type one
let lengthOfStringTwo = (message as string).length; //assertion type two

console.log(lengthOfString);
console.log(lengthOfStringTwo);
