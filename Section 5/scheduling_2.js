let counter = 10
let newcounter = 10

function countdown(){
    if(counter>0){
        console.log(counter);
        counter --;
    }
}

setInterval(countdown,1000)

//same code 

setInterval(function(){if (newcounter >0 ){
    console.log(newcounter);
    newcounter --;
}}, 3000)