
let firstName = "Bob"
let lastName = "Marley"
console.log(firstName + " " + lastName)


let lenght = 5;
let width = 15;
lenght * width
console.log(lenght * width)


consol.log(Math.pow(10, 6))


console.log(Math.floor(Math.random() * 50))


let number = 5;
if (number < 0) {
    console.log("negative value")
}
else {
    console.log("positive value")
}


let text = "work";
console.log(Text[Text.length - 2])


let Month = 2;
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Month not found");
}


let password = "jhasfjabvbn";
if (password.lenght > 7) {
    console.log("this password is strong");
}
if (password.indexOf('&') === -1) {
    console.log("this password is strong");
}
else {
    console.log("this password is weak");
}


let a = 2;
let b = 4;
if (typeof a === "number" && typeof b === "number") {
    console.log(a + b)
} else {
    console.log("Sum of those items can`t be counted")
}


let text1 = car;
let text2 = airplane;
if (typeof text1 == "string" && typeof text2 == "string" && text1.length == text2.length) {
    console.log("those items are strings and they're equal")
}
else {
    console.log("items are not compareble");
}