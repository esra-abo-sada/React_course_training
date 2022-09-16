// console.log("hello sallo2a");

// // if you have an object
// var person = {
//     name: 'Ahmad',
//     age: 22,
//     address: {
//         buildingNo: '123',
//         isRenting: true
//     }
// }

// //1. print the type for each key of the object
// //2. toggle isRenting value and print it in a safe way
// //3. make a copy of the object and put it in new variable
// //4. loop over all values and print it with format ('Ahmad - 22 - (123 - true)')

// //1.

// //   for (var [key, value] of Object.entries(person)) {
// //     console.log(`${key}: ${value}`);
// //     console.log(typeof (value));

// //   }

// //   for (var i  in person) {
// //     console.log(person);

// //   }

// // console.log(Object.entries(person))
// //   //2.

// person = 0;
// console.log(person ? .address ? .isRenting);

// //3.
// var copy = JSON.parse(JSON.stringify(person));
// copy.name = 'B';
// copy.age = 25;

// console.log(person, copy);

// //4.
// for (const key in person) {
//     if (typeof person[key] === 'object') {
//       for (const nestedKey in person[key]) {
//         console.log(person[key][nestedKey]);
//       }
//     } else {
//       console.log(person[key]);
//     }
//   }

//   //--
//   //debugger;

//   for (const key in person) {
//     //debugger;

//     console.log(person[key]);
//   }
// ---
// x = null;
// var y;
// //console.log(null??90);
// console.log(x ? ? = 90);
// console.log(y);
// var z;
// console.log(z ? ? 8);
var somevar = null;
function isNull(somevar) {
    return typeof somevar === 'object' && !somevar;
}
console.log(isNull(somevar));
//it will create an error
// if (!(isNull(somevar) && typeof somevar === 'string')) {
//     somevar.name = 'ahmad';
//     console.log(somevar.name);
// }


//  obj.name 
// obj['name']

// var key = 'name'

// obj[key] = obj['name'];

// console.log(obj.x?.subname);

// obj.x && obj.x.subname

// (obj.x || {}).subname

//  {}.subname  === undefined

var saloo2aobj={
    name: 'sallo2a',
    age :27,
    intrest : 'sa3danetsahoob'
}
console.log(saloo2aobj.name) ;
var key ='age';
 saloo2aobj[key]=29 ;
 console.log(saloo2aobj.age);

//safe way in order for the code not to be crashed for any case

//using and , or  , optional chaining operator 
console.log(saloo2aobj.x?.subname);
// obj.x && obj.x.subname ;

// (obj.x || {}).subname;

//  {}.subname  === undefined;
var a =1 ;
var b = null;
a|| b 
console.log(null|| undefined);
console.log( undefined|| null);
console.log( undefined|| null);
console.log(null&&undefined);
console.log(a&&undefined);
console.log(undefined&& a);
console.log(8&& a);
console.log(8|| a);
console.log({}.subname  === undefined); //true
console.log((saloo2aobj.x || {}).subname);//undefined???mish fahem 

somevar = '3';
//utiltiy for the premetive types wrapper
var x = String('hello').includes('he');

 //'hello' !== ['h', 'l', 'l' ..]
//string is not  array of chars----In JavaScript are strings arrays-like objects
 console.log(somevar[0])

arr = ['h', 'e', 'l']
//map is for looping 
arr.map((item) => {

})

//in java
// String somevar = new String('')


// /// number 

var num = 2.45;
num = num.toFixed(4)
console.log(num);

// // console.log(num)

console.log(typeof somevar)



//boolean true or false 

var boolvalue = true;


//truthy and falsy vlue

// "", 0, -0, undefined, null, NAN

//544, [], {}, [334,343], -45, "dsdf", 'sdsf'


var num = parseInt('sadsa');

console.log(typeof num);

console.log(NaN === NaN)
//this is because nan!==nan 
function customIsNan(val) {
    return typeof val === 'number' && val !== val
}

//passing ref and value
const NANError = Infinity/Infinity
console.log(NANError)


