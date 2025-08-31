
// DOM manipulation

// console.log("Hello")



// let text = document.getElementById("text")


// text.style.color="red"
// text.innertext= "Hello everyone"

// function texts(){
//     console.log("text")
// }
// texts();

// function changeText (){
//     let text = document.getElementById("text")
//     text.innerHTML="Text has been changed!"
// }
function validate(){

    let name = document.getElementById("name").value;
    
    let email = document.getElementById("email").value;
    let usage = document.getElementById("usage").value;

    
    if (name=" "){
        // console.log("Name is required");
        let nameMessage = document.getElementById("name-message");
        nameMessage.innerText="Name is required!"
    }

    // else{
        
    // }

    if (email=" ") {
        // console.log("Email is required");
        let emailMessage = document.getElementById("email-message");
        emailMessage.innerText="Email is required!"
    }

    if (usage = " "){
        // console.log("Usage is required");
        let usageMessage = document.getElementById("usage-message");
        usageMessage.innerText="Usage is required!"
}

}


a = [1,2,3,4,5]

for (let i=0; i<a.length; i++){
    console.log(a[i])
}

let Student = {
    name: "Saroj",
    age:"20"
}

console.log(Student.name)




// printMessage(){
//     let textMessage = document.getElementById("text");
//     textMessage.innerHTML = "Button was clicked!";
// }


// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map
// (function(num) {
//   return num * 2;
// });

// console.log(doubled);   
// console.log(numbers);


// let numbers = [1, 2, 3, 4, 5];
// let squared = numbers.map(num)

//     (function myFunction(num) {
//       return num * num;
//     });

    
//     document.getElementById("output").innerHTML = squared;


function myFunction (){

    let numbers = [1,2,3,4,5]
    let squared = numbers.map(function(num){
        return num * num
    }
    
    )
    
    console.log(squared)
    
    document.getElementById("output").innerHTML = squared;
}
