let numbers = [230, 1, 4000, 69, 534];

function sorting(array){
    let sorted  = array.sort(
        function(a,b){
            return b-a
        }
    );
    console.log(sorted);
}

function addNumber(array, callBack){
     array.push(129381);
     console.log(array)
     callBack(array)
 }
 
addNumber(numbers,sorting)