// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//add an item to the end of an array
function destructivelyAppendCat(name) {
    cats.push(name)
    return(cats)
    }
//add an item to the front of an array
function destructivelyPrependCat(name){
    return cats.unshift(name)
   }
//remove an item from the end of an array
function destructivelyRemoveLastCat(name){
    return cats.pop(name)   
}
//remove an item from the top of an array
function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

//append an item to an array and creates a new array
function appendCat(name){
    return Array.from(cats).concat(name)
}

//add an item to the first item of an array and creates a new array
function prependCat(name){
    return [name, ...cats]
}
//remove an item from the end of the array and creates a new array
function removeLastCat(name){
     let array = Array.from(cats)
     array.pop()
     return array
}

//remove the first item from the array and creates a new array
function removeFirstCat(name) {
    let array = Array.from(cats)
    array.shift()
    return array
    
}

removeLastCat()
removeFirstCat()