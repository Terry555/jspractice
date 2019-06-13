///Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
  return year - yearOfBirth
}

console.log(calcAge(2019));

console.log('This is ' + firstName + ' ' + lastName + ' and he was born in ' + yearOfBirth + ', and today he is ' + calcAge(2019) + ' years old.');
console.log(`This is ${firstName} ${lastName}, and he was born in ${yearOfBirth}, and today he is ${calcAge(2019)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n);
console.log(n.startsWith('J'))
console.log(n.endsWith('l'))
console.log(n.includes('ith'))
console.log(`${firstName} `.repeat(6))
