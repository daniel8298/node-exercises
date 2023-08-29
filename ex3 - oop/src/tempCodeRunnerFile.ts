// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד
// ['asd',3]

// const joinArguments = <T, S>(arg1: T, arg2: S) => {
//   return [arg1, arg2];
// };
// const join = joinArguments({ name: "ari" }, "daniel");
// console.log(join);

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט

// const keyToObj = <T, K extends keyof T>(obj: T, key: K) => {
//   return obj[key];
// };
// const person = keyToObj({ name: "daniel", age: 28 }, "name");
// console.log(person);

////////////////////////////////////////////////

// const people: Record<string, { name: string; age: number }>[] = [
//   { person1: { name: "Alice", age: 25 } },
//   { person2: { name: "Bob", age: 30 } },
// ];

// const newPerson = { person3: { name: "Charlie", age: 28 } };

// addObjectToArray(people, newPerson);

// console.log(people);

//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record

// const Users = [
//   { person1: { name: "Alice", age: 25 } },
//   { person2: { name: "Bob", age: 30 } },
//   { person3: { name: "daniel", age: 27 } },
// ];

// const addObjToArray: Record<Users, obj> = {};
// const addObjToArray = <T extends Record<string, any>>(
//   arrayObj: T[],
//   obj: T
// ) => {
//   arrayObj.forEach((element) => element.arrayObj.push(obj));
// };
// console.log(addObjToArray(Users, { personp: { name: "Ari", age: 40 } }));

// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit

// const user = {
//   id: 12,
//   name: "DA",
//   age: 34,
// };

// const ObjWithoutKey = <T, K extends keyof T>(obj: T, key: K): Omit<T, K> => {
//   return;
// };

// console.log(ObjWithoutKey(user, "age"));

// const person = keyToObj({ name: "daniel", age: 28 }, "name");
// console.log(person);

// function addObjectToArray<T extends Record<string, any>>(array: T[], obj: T) {}

// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

// type Person = {
//   name: string;
// };

// type Employee = {
//   department: string;
// };

// type EmployeePerson = Person & Employee;

// const eP: EmployeePerson = {
//   name: "daniel",
//   department: "jerusalem",
// };

// console.log(eP);

const greet = (callback: (x: string) => void): string => {
  callback("Israel");
  return "greet was made";
};

greet((x: string) => console.log(`Hello ${x}`));
