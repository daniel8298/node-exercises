/////////////////////////////////////////////////////////                       1
// const sumOfEvenArray = (array: number[]) => {
//   let sum = 0;
//   array.forEach((number) => {
//     if (number % 2 == 0) sum += number;
//   });
//   return sum;
// };
// const sumArray = sumOfEvenArray([1, 2, 3, 4]);
// console.log(sumArray);

/////////////////////////////////////////////////////////                       2

// type RectangleDataType = {
//   height: number;
//   width: number;
// };

// const AreaOfRectangle = (rectangle: RectangleDataType) => {
//   const AreaRectangle = rectangle.height * rectangle.width;
//   return AreaRectangle;
// };

// const area = AreaOfRectangle({ height: 2, width: 6 });
// console.log(area);

// ////////////////////////////////////////////////////////                         3

// const CheckingIfPalindrome = (str: string) => {
//   for (let i = 0, j = str.length - 1; i < (str.length - 1) / 2; i++, j--) {
//     console.log(str[i], str[j]);
//     if (str[i] !== str[j]) return false;
//   }
//   return true;
// };
// const palindrome = CheckingIfPalindrome("1235321");
// console.log(palindrome);

// ///////////////////////////////////////////////////////                           4

// const capitalFirstLetter = (array: string[]) => {
//   const newArray = array.map(
//     (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
//   );
//   return newArray;
// };

// const words = capitalFirstLetter(["david", "daNIEL", "EriK", "yOSSI", "uppEr"]);
// console.log(words);

// //////////////////////////////////////////////////////                            5

// const arrayWithoutDuplicates = (array: number[]) => {
//   const newArray: number[] = [];
//   array.forEach((number) => {
//     if (!newArray.includes(number)) newArray.push(number);
//   });
//   return newArray;
// };
// const array = arrayWithoutDuplicates([1, 1, 1, 3, 4, 7, 7]);

// console.log(array);

// //////////////////////////////////////////////////////                            6

// type PersonType = {
//   firstName: string;
//   lastName: string;
// };

// const Acronyms = (person: PersonType) => {
//   const AcronymsPerson = {
//     firstInitial: person.firstName[0],
//     lastInitial: person.lastName[0],
//   };
//   return AcronymsPerson;
// };

// const objPersonAcronyms = Acronyms({ firstName: "Daniel", lastName: "Ifrach" });

// console.log(objPersonAcronyms);

// ////////////////////////////////////////////////////////                             7
// type PersonsType = [
//   { name: string; age: number },
//   { name: string; age: number },
//   { name: string; age: number }
// ];

// const averageAges = (persons: PersonsType) => {
//   let sumAge = 0;
//   persons.forEach((person) => {
//     sumAge += person.age;
//   });
//   const average = sumAge / persons.length;
//   return average;
// };

// const persons: PersonsType = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Bob", age: 40 },
// ];

// const avg = averageAges(persons);
// console.log(avg);

// ////////////////////////////////////////////////////////                               8

// const FindMaxAndMin = (array: number[]) => {
//   let max = array[0];
//   let min = array[0];
//   array.forEach((number) => {
//     if (number > max) max = number;
//     if (number < min) min = number;
//   });
//   const maxAndMin = {
//     minimum: min,
//     maximum: max,
//   };
//   return maxAndMin;
// };

// const objMaxMin = FindMaxAndMin([9, 1, 1, 3, 4, 7, 0]);
// console.log(objMaxMin);

// ////////////////////////////////////////////////////////////                             9

// const reversArray = (array: number[]) => {
//   console.log(array.reverse());
// };

// reversArray([1, 2, 3, 4, 5, 6, 7]);
