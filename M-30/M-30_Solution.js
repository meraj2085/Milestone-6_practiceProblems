//Solution Of Problem : 1.1
//========================================//=======================================//
/* const numbers = (num1, num2, num3) => num1 * num2 * num3;
console.log(numbers(2,2,2)); */


//Solution Of Problem : 1.2
//========================================//=======================================//
/* const fullLine = `
I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(fullLine) */


//Solution Of Problem : 1.3
//========================================//=======================================//
/* const getSum = (num1 , num2 = 10) => num1 + num2;
console.log(getSum(10)); */


//Solution Of Problem : 2
//========================================//=======================================//
/* const friends = ['Noman', 'Meheraj', 'Joni'];

const isEven = (friends) =>{
     const evenFriends = [];
     for(let friend of friends){
          if(friend.length % 2 === 0){
               evenFriends.push(friend);
          }
     }
     return evenFriends;
}
const myFriends = isEven(friends);
console.log(myFriends); */


//Solution Of Problem : 3
//========================================//=======================================//
/* const numbers = [2, 4, 5, 6, 8];
const getSquire = (numbers) => {
     let total = 0;
     for(let number of numbers){
          const squire = number * 2;
          total = total + squire;
     }
     return total/numbers.length;
}
const givenNumbers = getSquire(numbers);
console.log(givenNumbers); */


//Solution Of Problem : 4
//========================================//=======================================//
/* const firstNumSet = [2,3,4,5,6];
const secondNumSet = [7,8,9,1];

const getMax = (firstNumSet, secondNumSet) => {
     const newArray = [...firstNumSet,...secondNumSet];
     return Math.max(...newArray);
}
const givenArrays = getMax(firstNumSet, secondNumSet);
console.log(givenArrays) */