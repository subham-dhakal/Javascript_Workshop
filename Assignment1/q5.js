//reate a function
// Q5. The MixUP
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//     mixUp('mix', 'pod'); // Outputs: 'pox mid'

function mixUp(str1="aaa",str2="bbb"){
    if(str1.length>=2 && str2.length>=2){
        var t1 = str1.slice(0,2)
        var t2 = str2.slice(0,2)
        var n1 = t2 + str1.slice(2,str1.length)
        var n2 = t1 + str2.slice(2,str2.length)
        console.log( n1 +" "+ n2 )
    }
    else {
        console.log("Text size not correct")
    }
}

mixUp("dog","mix")
