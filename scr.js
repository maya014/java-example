// var let const


var x = 10;

var x =30;

console.log(x);

if (true){
    var x = 80;
}
console.log(x);

// შედარება

let numbers = [2, 5, 8, 6, 3, 7, 10];
for(let i =0; i < numbers.length; i++){
    if (numbers[2] > 5){
        console.log(numbers[i]);
    }
}
let user = {
    name: 'giorgi',
    age:30,
    gender:'male'
}
if(user.age <50){
    console.log('hello');
}else if (user.age > 18 && user.gender == 'male'){
    console.log('world');
}else{
    console.log('error');
}

let names = ['giorgi' 'ani' 'beqa' 'nini' 'tornike'];

for( let i = 0; i < names.length > i++){
    console.log(names[0]);
}