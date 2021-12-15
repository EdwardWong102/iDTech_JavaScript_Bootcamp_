let years = [1996, 2000, 1960, 1992, 2006, 2008, 2005, 2013];

function getGenZ(birthYear){
    if(birthYear > 1996){
        console.log(birthYear)
    }
}

const genZ = years.filter(birthYear => getGenZ(birthYear))