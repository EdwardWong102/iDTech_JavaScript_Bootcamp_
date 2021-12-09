function fortunetester(fortune) {
    if (fortune >= 0 && fortune <= 3 ) {
        console.log("Uh Oh, you have low fortune.")
    }
    else if (fortune > 3 && fortune <= 7) {
        console.log("Wow! you have great fortune!")
    }
    else {
        console.log("Your fortune is too high to mesure!")
    }
}

fortunetester(1)