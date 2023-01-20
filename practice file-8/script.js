$(document).ready(function () {
    var Add = 5 + 6;
    document.getElementById('demo3').innerHTML = Add;
    // window.alert('adding  5 and 6='+ Add);
    sub = 100 - Add;
    // alert('subsraacting 100 and Add value='+ sub);
    console.log(5 + 6);
    document.getElementById('demo4').innerHTML = "Hello world";
    A = 3;
    B = 5;
    x = A + B;
    // window.alert('A + B =' +x);
    call();
    var Grishma = god("Bharat", "Prajapati", "120000")
    // alert(Grishma);
    console.log('My name \\\\\\ is "Bharat", because.')
    practiceCall();
    stringMethod();
    displayFamily();
    replaceDisplay();
    connectDisplay();
    trimValue();
    trimStartValue();
    trimEndValue();
    padStartvalue();
    padEndValue();
    charactorValue();
    stringValue();
    indexSearch();
    ainValue();
    matchValue();
    startsDisplay();
    endDisplay();
    numberDisplay();
    numberValue();
    arraydisplay();
    newArrayDisplay();
    arrayMethodDisplay();
    spliceSliceDisplay();
    sortingDisplay();
    dateDisplay();
    itrationDisplay();
    mapValue();
    filterValue();
    sumFunction();
    everyDisplay();
    indexOfDisplay();
    findValue();
    arrayValue();
    mathDisplay();
    ifElseDisplay();
    switchDisplay();
    loopplusMinusValue();
    comparisionDisplay();
    timeHoursExample();
    hoursExample();
    hoursDisplay();
    plusMinusValue();
    forInDisplay();
    forInDisplayNumber();
    forInEachDisplay();
    loopPlusMinusValue1();
    workingHoursDisplay1();
    workingHoursDisplay2();
    forEachDisplay();
    forEachDisplayExample();
    arrayEachValue();
    forOfExample();
    whileDisplay();
    whileDoDisplay();
    // whileDifference();
    // forDifference();
    breakloopdispaly();
    continueLoopDisplay();
    continueBreakDisplay();
    catcherrordisplay();
    setMethodValue();
    setForEachValue();
    setIterating();
    mapValue();
    stringReplaceMethod();
    classMethod();
    classDisplay();
    arrowDisplay();
    arrowView();



});

function turnoff() {
    document.getElementById('myImage').src = 'bulb Off.png';
}
function turnon() {
    document.getElementById('myImage').src = 'bulb on.png';
}
function clickme() {
    document.getElementById('demo').innerHTML = Date();
}
function time() {
    document.getElementById('demo14').innerHTML = Date();
}

function printme() {
    window.print();
}
function styleme() {
    document.getElementById('demo1').style.fontSize = '35px';
}
function tryit() {
    document.getElementById('demo2').innerHTML = "paragraph changed";
}
function add() {
    document.write(5 + 8);
}
var x, y;
x = 5 + 6;
y = x * 10;
function doit() {
    document.getElementById('demo5').innerHTML = y;
}
const price1 = 5;
const price2 = 10;
let total = price1 + price2;
function checkit() {
    document.getElementById('demo6').innerHTML = "The total is : " + total;
}
carName = "volvo";
var carName;
function car() {
    document.getElementById('demo7').innerHTML = carName;
}
const cars = ["saab", "honda", "bmw"];
cars[0] = ["toyota"];
cars.push("jeep");
function magic() {
    document.getElementById('demo8').innerHTML = cars;
}
var name = "Grishma";
function first() {
    document.getElementById('demo9').innerHTML = "Grishma";
}

var _ = "price";
function secound() {
    document.getElementById('demo10').innerHTML = "price";
}
var $ = 1500;
function money() {
    document.getElementById('demo11').innerHTML = 1500;
}
function call() {
    var car = ["Bmw", "Audi", "Honda", "Toyota", "Jeep"];
    // alert(car[2]);

    var office = {
        Department: "Account",
        Employee: 50,
        Salary: 120000,
    }
    // alert(office.Department + " - " + office.Employee + "(Employee):Total = " + office.Salary + "(Salary)")
}

function god(firstname, lastname, salary) {
    return firstname + " " + lastname + " - " + salary;
}
function practiceCall() {
    var x = 16 + "Volvo";
    document.getElementById('demo12').innerHTML = x;
}
function displayFamily() {
    var person = {
        FirstName: "John",
        LastName: "Doe",
        Id: 5566,
        FullName: function () {
            return this.FirstName + " " + this.LastName;
        }
    }
    document.getElementById('demo14').innerHTML = person.FullName();
    var str = "Mango, Apple, Banana"
    var part = str.substr(7, 5);
    //  alert(part);


}

function stringMethod() {
    var text = "ABCDEFGHIJKLMNOPQ";
    document.getElementById('demo15').innerHTML = text.length;
    var text = "Apple, Banana, Kiwi"
    var part = text.slice(14, 19);
    document.getElementById('demo16').innerHTML = part;
    var str = "watermelon, pinapple, pomogrante"
    var part = str.substring(11, 20);
    document.getElementById('demo18').innerHTML = part;
}

function replaceDisplay() {
    var text = "I love cats. Cats are very easy to love. Cats are very popular";

    text = text.replaceAll("Cats", "Dogs");
    text = text.replaceAll("cats", "dogs");
    document.getElementById('demo19').innerHTML = text;

}
function myfunction() {
    var text = document.getElementById('demo17').innerHTML;
    document.getElementById('demo17').innerHTML = text.replace(/cat/i, "Dog");
}
function upperCaseDisplay() {
    var text1 = "smile please";
    document.getElementById('demo20').innerHTML = text1.toUpperCase();
}
function connectDisplay() {
    var text1 = "Baby";
    var text2 = "shark";
    var text3 = text1.concat(" ", text2);
    document.getElementById('demo21').innerHTML = text3;
}
function trimValue() {
    var text1 = "     white duck!    ";
    var text2 = text1.trim();
    document.getElementById('demo22').innerHTML =
        "Length text1= " + text1.length + "<br />Length text2 = " + text2.length;
}
function trimStartValue() {
    var text1 = "      white duck!    ";
    var text2 = text1.trimStart();
    document.getElementById('demo23').innerHTML =
        "Length text1= " + text1.length + "<br />Length text2 = " + text2.length;
}
function trimEndValue() {
    var text1 = "     white duck!   ";
    var text2 = text1.trimEnd();
    document.getElementById('demo24').innerHTML =
        "Length text1 = " + text1.length + "<br />Length text2  = " + text2.length;
}
function lowerCaseValue() {
    var text1 = "HTML";
    document.getElementById('demo25').innerHTML = text1.toLowerCase();
}
function padStartvalue() {
    var text = "5";
    document.getElementById('demo26').innerHTML = text.padStart(6, "x");

    var text1 = "7";
    var text1 = text1.padStart(7, "y")
    document.getElementById('demo27').innerHTML = text1;

    var numb = 6;
    var text2 = numb.toString();
    document.getElementById('demo28').innerHTML = text2.padStart(3, "z");
}

function padEndValue() {
    var text = "4";
    document.getElementById('demo29').innerHTML = text.padEnd(5, "x");

    var text1 = "3";
    var text1 = text1.padEnd(6, "y");
    document.getElementById('demo30').innerHTML = text1;

    var numb = 2;
    var text2 = numb.toString();
    document.getElementById('demo31').innerHTML = text2.padEnd(6, "z");
}

function charactorValue() {
    var text = "spend time";
    document.getElementById('demo32').innerHTML = text.charAt(4);

    document.getElementById('demo33').innerHTML = text.charCodeAt(4);

    var str = "spend time";
    document.getElementById('demo34').innerHTML = str[7];

    var text3 = "choice";
    text3[1] = "B";
    document.getElementById('demo35').innerHTML = "text3";

}

function stringValue() {
    var text = "a,b,c,d,e,f";
    const myArray = text.split(",");
    document.getElementById('demo36').innerHTML = myArray[1];
}

function indexSearch() {
    var text = "check price and 'price' match!";
    document.getElementById('demo37').innerHTML = text.indexOf("price");
    document.getElementById('demo38').innerHTML = text.lastIndexOf("price");
    document.getElementById('demo39').innerHTML = text.lastIndexOf("john")
    document.getElementById('demo40').innerHTML = text.search("price");
}

function ainValue() {
    var text = "The pain is rain and i dont like rain";
    const myArr = text.match("ain");
    document.getElementById('demo41').innerHTML = myArr.length + " " + myArr;
}

function matchValue() {
    var text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll("Cats");
    document.getElementById('demo42').innerHTML = Array.from(iterator);

    document.getElementById('demo43').innerHTML = text.includes("popular");
    document.getElementById('demo44').innerHTML = text.includes("popular", 4);
}
function startsDisplay() {
    var text = "I love MOnkey.";
    document.getElementById('demo45').innerHTML = text.startsWith("I");
    document.getElementById('demo46').innerHTML = text.startsWith("love");
}
function endDisplay() {
    var text = "Hello world, welcome to the universe.";
    document.getElementById('demo47').innerHTML = text.endsWith("world");
    document.getElementById('demo48').innerHtMl = text.endsWith("world", 11);
}
function numberDisplay() {
    var x = (0.2 * 10 + 0.1 * 10) / 10;
    document.getElementById('demo49').innerHTML = "(0.2*10 + 0.1*10)/10 = " + x;
}

function numberValue() {
    var x = 10;
    var y = 20;
    var z = x + y;
    document.getElementById('demo50').innerHTML = z;

    var x1 = "10";
    var y1 = "20";
    var z1 = x1 + y1;
    document.getElementById('demo51').innerHTML = z1;

    var x2 = 10;
    var y2 = "20";
    var z2 = x2 + y2;
    document.getElementById('demo52').innerHTML = z2;

    var x3 = "10";
    var y3 = 20;
    var z3 = x3 + y3;
    document.getElementById('demo53').innerHTML = z3;

    var x4 = 10;
    var y4 = 20;
    var z4 = x4 + y4;
    document.getElementById('demo54').innerHTML = "the result is : " + x4 + y4;

    var x5 = 10;
    var y5 = 20;
    var z5 = "30";
    var result = x5 + y5 + z5;
    document.getElementById('demo55').innerHTML = result;

    var x6 = "100";
    var y6 = "10";
    var z6 = x6 / y6;
    document.getElementById('demo56').innerHTML = z6;

    var x7 = 100;
    var y7 = "Apple";
    var z7 = y7 / x7;
    document.getElementById('demo57').innerHTML = z7;

    var x8 = 100 / "Apple";
    document.getElementById('demo58').innerHTML = isNaN(x8);

    var x9 = NaN;
    var y9 = 10;
    var z9 = x9 + y9;
    document.getElementById('demo59').innerHTML = z9;

    var x10 = NaN;
    var y10 = "10";
    var z10 = x10 + y10;
    document.getElementById('demo60').innerHTML = z10;

    var x11 = NaN;
    document.getElementById('demo61').innerHTML = typeof x;

    var x11 = 2 / 0;
    var y11 = -2 / 0;
    document.getElementById('demo62').innerHTML = x11 + "<br/>" + y11;

    var x12 = 9.656;
    document.getElementById('demo64').innerHTML =
        x12.toFixed(2) + "<br />" +
        x12.toFixed(3) + "<br />" +
        x12.toFixed(5) + "<br/>" +
        x12.toFixed(6);

    var x13 = 123;
    document.getElementById('demo65').innerHTML =
        x13.toString() + "<br />" +
        (123).toString() + "<br />" +
        (100 + 23).toString();

}

function arraydisplay() {
    var fruits = ["Banana", "Orange", "Apple"];
    fruits[6] = "Lemon";
    var flen = fruits.length;
    var text = "";
    for (i = 0; i < flen; i++) {
        text += fruits[i] + "<br />";

    }
    document.getElementById('demo66').innerHTML = text;

    var vegetables = ["Okra", "potato", "ginger", "mint"];
    document.getElementById('demo67').innerHTML = vegetables[vegetables.length - 1];
}

function newArrayDisplay() {
    var points = new Array(40, 50, 20);
    document.getElementById('demo68').innerHTML = points;

    var mathes = new Array(80);
    document.getElementById('demo69').innerHTML = mathes;

    var total = [80];
    document.getElementById('demo70').innerHTML = total;

}

function arrayMethodDisplay() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById('demo71').innerHTML = fruits.join(" * ");

    fruits.pop();
    document.getElementById('demo72').innerHTML = fruits;
    document.getElementById('demo73').innerHTML = fruits.pop();

    fruits.push("kiwi");
    document.getElementById('demo74').innerHTML = fruits;

    fruits.shift();
    document.getElementById('demo75').innerHTML = fruits;
    document.getElementById('demo76').innerHTML = fruits.shift();

    fruits.unshift("lemon");
    document.getElementById('demo77').innerHTML = fruits;
    document.getElementById('demo78').innerHTML = fruits.unshift("lemon");

    fruits[fruits.length] = "kiwi";
    document.getElementById('demo79').innerHTML = fruits;

    document.getElementById('demo80').innerHTML = "The First fruit is : " + fruits[0];
    delete fruits[0];
    document.getElementById('demo81').innerHTML = "The first Fruit is : " + fruits[0];

    var array1 = ["siya", "saloni"];
    var array2 = ["gahan", "ruhan"];
    var array3 = ["daxa", "ruhi"];
    var myChildern = array1.concat(array2, array3);
    document.getElementById('demo82').innerHTML = myChildern;
}

function spliceSliceDisplay() {

    var fruits = ["Banana", "charry", "Mango", "Apple"];
    fruits.splice(2, 2, "kiwi", "Lemon");
    document.getElementById('demo83').innerHTML = fruits;

    var vegetables = ["okara", "Methi", "eggplant", "tomoto"];
    var vegee = vegetables.slice(2);
    document.getElementById('demo84').innerHTML = vegetables + "<br /><br />" + vegee;
}

function sortingDisplay() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    document.getElementById('demo85').innerHTML = fruits;

    fruits.reverse();
    document.getElementById('demo86').innerHTML = fruits;

    var points = [40, 100, 50, 58, 88, 38, 29];
    points.sort(function (a, b) { return a - b });
    document.getElementById('demo87').innerHTML = points;

    points.sort(function (a, b) { return b - a });
    document.getElementById('demo88').innerHTML = points;

}

function dateDisplay() {
    var d = new Date();
    document.getElementById('demo89').innerHTML = d;

    var d1 = new Date(2022, 10, 22, 07, 57, 51);
    document.getElementById('demo90').innerHTML = d1;

    var d2 = new Date(2022, 10, 22);
    document.getElementById('demo91').innerHTML = d2;

    var d3 = new Date("2022-10-22");
    document.getElementById('demo92').innerHTML = d3;

    var d4 = new Date().getMinutes();
    document.getElementById('demo93').innerHTML = d4;

    var d5 = new Date();
    d5.setMonth(0);
    document.getElementById('demo93A').innerHTML = d5;

    var d6 = new Date();
    d6.setHours(11);
    document.getElementById('demo93B').innerHTML = d6;

    var d7 = new Date();
    d7.setMinutes(15);
    document.getElementById('demo93C').innerHTML = d7;

    var d8 = new Date().getMonth() + 1;
    document.getElementById('demo93D').innerHTML = d8;

}
function itrationDisplay() {
    var numbers = [45, 4, 9, 16, 25];
    var txt = "";
    numbers.forEach(myfunction);
    function myfunction(value, index, array) {
        txt += value + "<br/>";
        document.getElementById('demo94').innerHTML = txt;
    }
}
function mapValue() {
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.map(myFunction);
    function myFunction(value, index, array) {
        return value * 2;
    }
    document.getElementById('demo95').innerHTML = numbers2;
}

function filterValue() {
    var number = [45, 9, 4, 16, 25];
    var over18 = number.filter(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    }
    document.getElementById('demo96').innerHTML = over18;
}
function sumFunction() {
    var numbers = [45, 9, 4, 16, 25];
    var sum = numbers.reduce(myFunction, 100);
    function myFunction(total, value, index, array) {
        return total + value;
    }
    document.getElementById('demo97').innerHTML = sum;

    var sum1 = numbers.reduceRight(myFunction);
    function myFunction(total, value, index, array) {
        return total + value;
    }
    document.getElementById('demo98').innerHTML = sum1;
}

function everyDisplay() {
    var numbers = [45, 9, 4, 16, 25];
    var allOver18 = numbers.every(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    }
    document.getElementById('demo99').innerHTML = allOver18;

    var someOver18 = numbers.some(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    }
    document.getElementById('demo100').innerHTML = someOver18;
}
function findValue() {
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.find(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    }
    document.getElementById('demo100A').innerHTML = "first value over 18 is " + first;
    var first1 = numbers.findIndex(myFunction);
    function myFunction(value, index, array) {
        return value > 18;
    }
    document.getElementById('demo100B').innerHTML = "first psotion of number 18 over is " + first1;
}

function indexOfDisplay() {
    var fruits = ["Apple", "Orange", "Apple", "Mango"];
    var position = fruits.indexOf("Apple") + 1;
    document.getElementById('demo101').innerHTML = "Apple is found the postion of " + position;

    var position1 = fruits.lastIndexOf("Apple") + 1;
    document.getElementById('demo102').innerHTML = "Apple is found the postion of " + position1;

}

function arrayValue() {
    var array = ("ABCDEFGHI");
    var myArray = Array.from("ABCDEFGHI");
    document.getElementById('demo103').innerHTML = myArray;


    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var f = fruits.entries();
    for (var x of f) {
        document.getElementById('demo104').innerHTML += x + "<br />";

    }
}

function mathDisplay() {
    document.getElementById('demo105').innerHTML = Math.round(7.7);
    document.getElementById('demo106').innerHTML = Math.ceil(6.7);
    document.getElementById('demo107').innerHTML = Math.ceil(-6.7);
    document.getElementById('demo108').innerHTML = Math.floor(6.7);
    document.getElementById('demo109').innerHTML = Math.floor(-6.7);
    document.getElementById('demo110').innerHTML = Math.trunc(-6.7);
    document.getElementById('demo111').innerHTML = Math.pow(9, 2);
    document.getElementById('demo112').innerHTML = Math.sqrt(36);
    document.getElementById('demo113').innerHTML = Math.min(0, -6, -19, -50, 50, 59);
    document.getElementById('demo114').innerHTML = Math.max(0, -6, -19, -50, 50, 59);
    document.getElementById('demo115').innerHTML = Math.floor(Math.random() * 10000);
}

function ifElseDisplay() {
    var salary = 90000;
    var words;
    if (salary > 11000) {
        words = "correct";
    } else if (salary == 90000) {
        words = "okay";
    } else {
        words = "False"
    }
    document.getElementById('demo116').innerHTML = words;
}

function switchDisplay() {
    var hours;
    switch (new Date().getHours()) {
        case 12:
            hours = "Twelve";
            break;
        case 11:
            hours = "Eleven";
            break;
        case 10:
            hours = "Ten";
            break;
        case 9:
            hours = "Nine";
            break;
        case 8:
            hours = "Eight";
            break;
        case 7:
            hours = "seven";
            break;
        case 6:
            hours = "Six";
            break;
        case 5:
            hours = "five";
            break;
        case 4:
            hours = "Four";
            break;
        case 3:
            hours = "Three";
            break;
        case 2:
            hours = "Two";
            break;
        case 1:
            hours = "One";
        default:
            hours = "Zero";
            break;
    }
    document.getElementById('demo117').innerHTML = hours;
}

function loopplusMinusValue() {
    var text = "";
    for (var i = 10; i >= 0; i--) {
        text += i + "<br />";

    }
    document.getElementById('demo118').innerHTML = text;
}
function plusMinusValue() {

    var text = "";
    for (var i = -5; i <= 5; i++) {
        text += i + "<br />";
    }
    document.getElementById('demo118A').innerHTML = text;
}

function loopPlusMinusValue1() {
    var text = " ";
    for (var i = 5; i >= -5; i--) {
        text += i + "<br/>";
    }
    document.getElementById('demo118B').innerHTML = text;
}

function comparisionDisplay() {
    var age = document.getElementById("age").value;
    var votable = (age > 18) ? "too young" : "old enough";
    document.getElementById('demo119').innerHTML = votable + " to vote. "
}
function timeHoursExample() {
    var time;
    var hours = Number(document.getElementById("hours").value);
    if (isNaN(hours)) {
        time = "Input is not a number";
    } else {
        time = (hours < 12) ? "Before 12 hours" : "After 12 hours";
        document.getElementById("demo120").innerHTML = time;
    }
}
function hoursExample() {
    var hours = new Date().getHours();

    var time = (hours < 5) ? "1" : "2";
    document.getElementById('demo121').innerHTML = time;
}
function hoursDisplay() {
    var hours = new Date().getHours();
    var time = (hours > 5) ? "1" : (hours == 5) ? "2" : "3";
    document.getElementById('demo123').innerHTML = time;
}
function workingHoursDisplay1() {
    var currentHour = new Date().getHours();
    var time;
    if (currentHour > 9 && currentHour <= 18) {
        time = "working";
    } else {
        time = "outside";
    }
    document.getElementById('demo123A').innerHTML = time;
}
function workingHoursDisplay2() {
    var currentHour = new Date().getHours();
    var time;
    if ((currentHour > 1 && currentHour <= 9) || (currentHour > 18 && currentHour <= 24)) {
        time = "working";
    } else {
        time = "outside";
    }
    document.getElementById('demo123B').innerHTML = time;
}

function forInDisplay() {
    var person = { fname: "john", lname: "Doe", age: 25 };
    var text = "";
    for (var x in person) {
        text += person[x] + " ";
    }
    document.getElementById('demo124').innerHTML = text;
}
function forInDisplayNumber() {
    var numbers = [45, 4, 9, 16, 25];
    var text = "";
    for (var x in numbers) {
        text += numbers[x] + " <br />";
    }
    document.getElementById('demo125').innerHTML = text;
}

function forInEachDisplay() {
    var numbers = [45, 4, 9, 16, 25];
    var text = " ";
    numbers.forEach(function (item) {
        text += item + " <br />";
    });
    document.getElementById('demo126').innerHTML = text;
}
function forEachDisplay() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var text = " ";
    fruits.forEach(function (item) {
        text += item + "<br />";
    });
    document.getElementById('demo127').innerHTML = text;
}
function forEachDisplayExample() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var text = " ";
    fruits.forEach(getfruits);
    function getfruits(item) {
        text += item + "<br />"
    }
    document.getElementById('demo128').innerHTML = text;
}
function arrayEachValue() {
    var employees = [
        {
            FirstName: "Bharat",
            LastName: "Prajapati",
            Grade: 5,
            Salary: 51000
        },
        {
            FirstName: "Rahul",
            LastName: "Prajapati",
            Grade: 5,
            Salary: 51000
        },
        {
            FirstName: "Tejas",
            LastName: "Prajapati",
            Grade: 5,
            Salary: 51000
        }
    ];
    var text = " ";

    employees.forEach(function (item) {
        text += item.FirstName + " ";
    });
    document.getElementById('demo129').innerHTML = text;
}

function forOfExample() {
    var cars = ["Bmw", "Jeep", "Audi"];
    var text = " ";
    for (var x of cars) {
        text += x + "<br />"
    }
    document.getElementById('demo130').innerHTML = text;

    var languages = "Grishma";
    var txt = " ";
    for (var x of languages) {
        txt += x + " <br />"
    }
    document.getElementById('demo131').innerHTML = txt;
}

function whileDisplay() {
    var text = " ";
    var i = 0;
    while (i < 10) {
        text += "<br />this no is " + i;
        i++;
    }
    document.getElementById('demo132').innerHTML = text;
}

function whileDoDisplay() {
    var text = " ";
    var i = 0;
    do {
        text += "<br/>this no is" + i;
        i++;
    }
    while (i < 10);
    document.getElementById('demo133').innerHTML = text;
}
function forDifference() {
    // var cars = ["BMW", "Volvo", "Saab", "Ford"];
    // var text = " ";
    // var i = 0;
    // for (; cars[i];) {
    //     text += cars[i] + "<br />";
    //     i++;

    // }
    // document.getElementById('demo134').innerHTML = text;
}
function whileDifference() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = " ";
    var i = 0;
    while (cars[i]) {
        text += cars[i] + "<br />";
        i++;
    }
    document.getElementById('demo135').innerHTML = text;
}
function breakloopdispaly() {
    var text = " ";
    for (var i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "the number is " + i + "<br />";
    }
    document.getElementById('demo136').innerHTML = text;
}
function continueLoopDisplay() {
    var text = " ";
    for (var i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "the number is" + i + "<br/>";
    }
    document.getElementById('demo137').innerHTML = text;
}

function continueBreakDisplay() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = " ";
    list: {
        text += cars[0] + "<br />";
        text += cars[1] + "<br />";
        break list;
        text += cars[2] + "<br />";
        text += cars[3] + "<br />";
    }
    document.getElementById('demo138').innerHTML = text;
}
function catcherrordisplay() {
    try {
        adddlert("welcome guest");

    }
    catch (err) {
        document.getElementById('demo139').innerHTML = err.message;
    }
}

function clickRemoveButton(btn) {
    btn.style.display = "none";
}

function clickShowButton() {
    debugger;
    document.getElementById('demo140').style.display = "initial";
}
function tryCatchDisplay() {
    var message = document.getElementById('demo141');
    message.innerHTML = "";
    var x = document.getElementById('demo141A').value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "input is " + err;
    }
    finally {
        document.getElementById('demo141A').value = "";
    }
}

function setMethodValue() {
    var letters = new Set(["a", "b", "c"]);
    letters.add("d");
    letters.add("e");
    letters.add("e");
    document.getElementById('demo142').innerHTML = letters.size;
}
function setForEachValue() {
    var letters = new Set(["a", "b", "c"]);
    var text = " ";
    for (var x of letters.values()) {
        text += x + "<br /> ";
    }
    document.getElementById('demo143').innerHTML = text;
}
function setIterating() {
    var letters = new Set(["d", "e", "f"]);
    var text = " ";
    letters.forEach(function (value) {
        text += value + "<br/>";
    })
    document.getElementById('demo144').innerHTML = text;
}
function mapValue() {
    var fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200],
    ]);
    var text = " ";
    var txt = " ";
    fruits.set("apples", 200);
    fruits.forEach(function (value, key) {
        text += key + " = " + value + "<br />"
    })
    for (var x of fruits.entries()) {
        text += x + "<br />";
    }


    document.getElementById('demo145').innerHTML = fruits.get("apples");
    document.getElementById('demo146').innerHTML = text;
    document.getElementById('demo147').innerHTML = txt;
}
function stringReplaceMethod() {

    var text = "pls visit Microsoft";
    document.getElementById('demo148').innerHTML = text.replace("Microsoft", "W3School");
}

function classMethod() {
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age() {
            var date = new Date();
            return date.getFullYear() - this.year;
        }
    }
    var myCar = new Car("Ford", 2014);
    document.getElementById('demo149').innerHTML = "My car is " + myCar.age() + " years old."
}
function classDisplay() {
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age(x) {
            return x - this.year;
        }
    }
    var date = new Date();
    var year = date.getFullYear();
    var myCar = new Car("Ford", 2014);
    document.getElementById('demo150').innerHTML = "my car is " + myCar.age(year) + " years old."

}

function arrowDisplay() {
    var hello = " ";
    hello = () => {
        return "Hello Universe";
    }
    document.getElementById('demo151').innerHTML = hello();
}
function arrowView() {
    var hello = " ";
    hello = () => {
        document.getElementById('demo152').innerHTML += this;
    }
    window.addEventListener("load", hello);
    document.getElementById('demo153').addEventListener("click", hello);
}










