//Solution Of Problem : 1.1
//========================================//=======================================//
/* const numbers = [ 1, 3, 5, 7, 9 ];

const even = [];
for(i=0; i<numbers.length; i++){
     const number = numbers[i]+1;
     even.push(number);
}
console.log(even); */


// const makeEven = numbers.map(num => num + 1);
// console.log(makeEven);



//Solution Of Problem : 1.2
//========================================//=======================================//
/* const myNumbers = [33, 50, 79, 78, 90, 101, 30 ];
const dividableByTen = myNumbers.filter(number => number % 10 === 0);
console.log(dividableByTen); */



//Solution Of Problem : 1.3
//========================================//=======================================//
/* const myNumbers = [33, 50, 79, 78, 90, 101, 30 ];
const dividableByTen = myNumbers.find(number => number%10 === 0);
console.log(dividableByTen); */



//Solution Of Problem : 2.1
//========================================//=======================================//
/* const numbers = [ 1, 9, 17, 22];
const getTotal = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(getTotal);

let total = 0;
for(i = 0; i<numbers.length; i++){
     const number = numbers[i];
     total = total + number;
}
console.log(total); */



//Solution Of Problem : 2.2
//========================================//=======================================//
/* const peoples = [
     {name: 'Mena', age: 20},
     {name: 'Rina', age: 15},
     {name: 'Tina', age: 22},
];

let ages = 0;
for(i=0; i<peoples.length; i++){
     const people = peoples[i];
     const theirAge = people.age
     ages = ages + theirAge
}
console.log(ages)

const getTotal = peoples.reduce((previousValue, currentValue)=>previousValue + currentValue.age, 0)
console.log(getTotal); */



//Solution Of Problem : 3.1
//========================================//=======================================//
/* const student = {
     name: 'Meraj',
     age: 26
}
console.log(student.age) */


//Solution Of Problem : 3.2
//========================================//=======================================//
/* let data = {
     location: [
          {
          latitude: '34.5, 37.8',
          longitude: '98.77, 58.7',
          city: 'Hyderabad',
          country: 'India',
          }
     ]
}
console.log(data.location[0].city); */



//Solution Of Problem : 3.3
//========================================//=======================================//
/* let data = {
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   } */

// console.log(data['email'])
// console.log(data['address'])
// console.log(data['address']['city'])
// console.log(data['address']['geo']['lat'])
// console.log(data['company']['name'])
