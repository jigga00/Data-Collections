let csv = ['ID,Name,Occupation,Age,42,Bruce,Knight,41,57,Bob,Fry Cook,19,63,Blaine,Quiz Master,58,98,Bill,Doctors Assistant,26']

console.log(csv);

console.log('-------Expanding Functionality---------');

csv.push('55');
csv.push('Peter');
csv.push('developer')
csv.push('26');
console.log(csv);


csv = [["ID", "Name", "Occupation", "Age"],["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctors Assistant", "26"]]

console.log(csv);
console.log('-------Transforming Data--------');

csv = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctors Assistant", age: "26" }
]
console.log(csv);

console.log('--------Sorting and Manipulating Data--------');

csv.pop();
console.log(csv);
csv.splice(1, 0,{
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(csv);
csv.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(csv);

let age= 0;
for (employee of csv) {
  age += parseInt(employee.age);
}

let avgAge = (age / csv.length).toFixed(2);
console.log('avarge age at CSV is ' + avgAge);

console.log('--------Full Circle------');

csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n48,Barry,Runner,25'

console.log(csv);