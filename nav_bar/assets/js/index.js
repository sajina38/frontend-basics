
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


