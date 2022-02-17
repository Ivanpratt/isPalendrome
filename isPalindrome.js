

let isPalindrome = function(string){
    let array = []
    let splitString = string.split('')

    for(i = splitString.length; i > 0 ; i--) {
        array.push(splitString[i - 1])
    }
    
    let reverseString = array.join('')
    
    if (reverseString === string){
        console.log("True")
    } else {
        console.log("False")
    }

}


isPalindrome("racecar")