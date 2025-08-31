function myFunction (){

    let numbers = [1,2,3,4,5]
    let squared = numbers.map(function(num){
        return num * num
    }
    
    )
    
    console.log(squared)
    
    document.getElementById("output").innerHTML = squared;
}