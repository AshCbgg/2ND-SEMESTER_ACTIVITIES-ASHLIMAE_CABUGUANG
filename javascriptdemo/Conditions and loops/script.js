let a = 0;
let b = -1;
let c = 4;

let sorted;

if(a >= b && a >= c){
    if(b >= c){
        sorted = [a, b, c];
    }else{
        sorted = [a, b, c];
    }


}else if(b >= a && b >= c){

    if(a >= c){
        sorted = [b, a, c];
    }else{
        sorted = [b, c, a];
    }


}else{

    if(a >= b){
        sorted = [c, a, b];
    }else{
        sorted = [c, b, a];
    }
}

console.log(sorted);

//2
let d = -5;
let e = -2;
let f = -6;
let g = 0;
let h = -1;
let largest = d;

if(g > largest){
     largest = g;
}

console.log(largest);

//3
let fizzbuzz = 0
let output = "";

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        output = "fizzbuzz";

    }else if(1 % 3 === 0){
        output = "fizz"

    }else if(i % 5 === 0){
        output = "buzz"

    }else{
        output = 1;
    }
}

console.log(output);