// Q7. The Pluralizer
//
// Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
//
//     For example:
//
//     pluralize('cat', 1) // Outputs: 1 cat
// pluralize('cat', 2) // Outputs: 2 cats

function pluralize(str="aaa",num=1){
    if(num>1){
        var final = str + "s"
        console.log(num+" "+final)
    }
    else {
        console.log(num+" "+str)
    }
}

pluralize("pen",2)
