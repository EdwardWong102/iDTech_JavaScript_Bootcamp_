let words = ['This ', 'is ', 'JavaScript ', 'bootcamp! ']
sentence = ""
function createSentece(words){
    for(let i = 0; i < words.length; i++ ){
        sentence = sentence + words[i]
    }
    return sentence
}

console.log(createSentece(words))