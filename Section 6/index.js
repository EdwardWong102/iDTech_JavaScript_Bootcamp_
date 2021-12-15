//  (function(){})();
// anon function

(function(sentence){
    let arrayOfWords = sentence.split(" ")
    console.log(arrayOfWords)
})("Hello, my name is Elon");


let creatingLoops=(x)=>{
    for (let i = 0; i < x; i++) {
        console.log(i);
   } 
}
creatingLoops(5)

/*function creatingLoops(x) {
    for (let i = 0; i < x; i++) {
          console.log(i);
     }
}
creatingLoops(20);*/
