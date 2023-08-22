// const bigNumber = (numOne: number, numTwo: number) => {      1
//   if (numOne > numTwo) return numOne;
//   return numTwo;
// };

// console.log(bigNumber(5, 8));

///////////////////////////////////////////////////////                 2

// const printBigNumber = (numOne: number, numTwo: number) => {
//   if (numOne > numTwo) console.log(numOne);
//   else console.log(numTwo);
// };

// printBigNumber(213, 9);

///////////////////////////////////////////////////////                3

// const numberEvenOrOdd = (num: number) => {
//   if (num % 2 === 0) return "the number its even";
//   return "the number its odd";
// };
// console.log(numberEvenOrOdd(5));

///////////////////////////////////////////////////////                4

// const stringLength = (str: string) => {
//   return str.length;
// };
// console.log(stringLength("hello"));

///////////////////////////////////////////////////////                5

// const arrayOfNumbers = (n: number) => {
//   let num: number = 1;
//   const array: number[] = [];
//   while (num < n) {
//     array.push(num);
//     num++;
//   }
//   return array;
// };
// console.log(arrayOfNumbers(10));

////////////////////////////////////////////////////////               6

// const maxOfArray = (array: number[]) => {
//   return Math.max(...array);
// };
// console.log(maxOfArray([1, 6, 8, 23, 2, 0]));

////////////////////////////////////////////////////////               7 - 8

// type PersonType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const printPerson = (person: PersonType) => {
//   console.log(`${person.name} ${person.age} ${person.isStudent}`);
// };

// printPerson({ name: "daniel", age: 28, isStudent: true });

////////////////////////////////////////////////////////              9

// type PersonType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const isMinor = (person: PersonType) => {
//   if (person.age < 18) return true;
//   return false;
// };

// const person = isMinor({ name: "daniel", age: 28, isStudent: true });
// console.log(person);

//////////////////////////////////////////////////////////           10 - 11

// type PersonType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// interface bookInterface {
//   Title: string;
//   Author: string;
//   Year: number;
// }

// type ReaderType = {
//   FavoriteBook: bookInterface;
//   Person: PersonType;
// };

//////////////////////////////////////////////////////////           12

// type PersonType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// interface bookInterface {
//   Title: string;
//   Author: string;
//   Year: number;
// }

// type ReaderType = {
//   Person: PersonType;
//   FavoriteBook: bookInterface;
// };

// const book1 = {
//   Person: { name: "Alice", age: 28, isStudent: false },
//   FavoriteBook: {
//     Title: "The Great Gatsby",
//     Author: "F. Scott Fitzgerald",
//     Year: 1925,
//   },
// };
// const book2 = {
//   Person: { name: "Bob", age: 35, isStudent: false },
//   FavoriteBook: {
//     Title: "To Kill a Mockingbird",
//     Author: "Harper Lee",
//     Year: 1960,
//   },
// };
// const book3 = {
//   Person: { name: "Charlie", age: 22, isStudent: true },
//   FavoriteBook: {
//     Title: "1984",
//     Author: "George Orwell",
//     Year: 1949,
//   },
// };

// const oldPerson = (personOlder: ReaderType[]) => {
//   let ageOld: number = 0;
//   let nameOld: string = "";
//   personOlder.forEach((man) => {
//     if (man.Person.age > ageOld) {
//       ageOld = man.Person.age;
//       nameOld = man.Person.name;
//     }
//   });
//   return nameOld;
// };

// console.log(oldPerson([book1, book2, book3]));

/////////////////////////////////////////////////////////         13
// type PersonType = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// interface bookInterface {
//   Title: string;
//   Author: string;
//   Year: number;
// }

// type ReaderType = {
//   Person: PersonType;
//   FavoriteBook: bookInterface;
// };

// const book1 = {
//   Person: { name: "Alice", age: 28, isStudent: false },
//   FavoriteBook: {
//     Title: "The Great Gatsby",
//     Author: "F. Scott Fitzgerald",
//     Year: 1970,
//   },
// };
// const book2 = {
//   Person: { name: "Bob", age: 35, isStudent: false },
//   FavoriteBook: {
//     Title: "To Kill a Mockingbird",
//     Author: "Harper Lee",
//     Year: 1960,
//   },
// };
// const book3 = {
//   Person: { name: "Charlie", age: 22, isStudent: true },
//   FavoriteBook: {
//     Title: "harry potter",
//     Author: "George Orwell",
//     Year: 1980,
//   },
// };

// const oldBook = (bookOlder: ReaderType[]) => {
//   let YearOld: number = bookOlder[0].FavoriteBook.Year;
//   let TitleOld: string = bookOlder[0].FavoriteBook.Title;

//   for (let book: number = 1; book < bookOlder.length; book++) {
//     if (bookOlder[book].FavoriteBook.Year < YearOld) {
//       YearOld = bookOlder[book].FavoriteBook.Year;
//       TitleOld = bookOlder[book].FavoriteBook.Title;
//     }
//   }
//   return TitleOld;
// };

// console.log(oldBook([book1, book2, book3]));
