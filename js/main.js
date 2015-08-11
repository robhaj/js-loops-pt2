// add scripts

console.log("sanity check!");

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

//sample
for(var i=0; i < students.length; i++) {
  console.log(students[i]);
}

//Problem 1
for(var i=0; i < (students.length-1); i++) {
  console.log(students[i]);
}

//Problem 2

for(var i=0; i< students.length; i+=2){
  console.log(students[i]);
}

//Problem 3
for(var i=(students.length-1); i>=0; i--) {
  console.log(students[i]);
}

//Problem 4
console.log(students[0]);
for (k=1;k<(students.length-1);k++) {
  for(var i=0;i<2;i++){
    console.log(students[k]);
  }
}
console.log(students[4]);
