function myFunction (){

    let numbers = [1,2,3,4,5]
    let squared = numbers.map(function(num){
        return num * num
    }
    
    )
    
    console.log(squared)
    
    document.getElementById("output").innerHTML = squared;
}

function doubledFunction(){
    let numbers =[2,3,4,5,6]
    let doubled = numbers.map(function(num){
        return num * 2
    })
    document.getElementById("doubled").innerHTML = doubled;
}

function evenFunction(){
    let numbers = [2,3,4,5,6]
    let evenNumbers = numbers.filter(n => n%2 == 0);
    
    document.getElementById("even-numbers").innerHTML = evenNumbers;
}


function upperCaseFunction(){
    let names = ["sajina", "jharana" ];
    let upperCase = names.map (name => name.toUpperCase());

     document.getElementById("uppercase").innerHTML = upperCase;
    console.log(upperCase)
}


// From an array of numbers, keep only numbers greater than 10.
// let nums = [5, 12, 8, 20, 7];
// Expected result: [12, 20]


function greaterFunction (){
    let numbers = [5, 12, 8, 20, 7];
    let greaterNumbers = numbers.filter(n => n>10);

    document.getElementById ("greater").innerHTML = greaterNumbers;
}

