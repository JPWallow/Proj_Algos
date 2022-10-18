// Push Front 

console.log("Push Front")

var arrOne=[8,5,7,2,3]

console.log("Original Array:", arrOne);

function pushFront(arrOne, value){

    for(let i=arrOne.length; i>=0; i--) {
        arrOne[i] = arrOne[i-1]
    }

    arrOne[0] = value
    return arrOne;
}

console.log("New Array:", pushFront(arrOne, 9));

// Pop Front

console.log("Pop Front")

var arrTwo=[4,5,6,7,8,9]
console.log("Original Array:", arrTwo);

function popFront(arrTwo){

    let value = arrTwo[0]
    
    for (let i=0; i < arrTwo.length; i++) {
        arrTwo[i] = arrTwo[i+1]
    }
    arrTwo.length = arrTwo.length - 1
    console.log("New Array:",arrTwo);
    return value;

}
console.log("Returned:", popFront(arrTwo));

//Insert At
console.log("Insert At")

var arrThree=[100,200,5]
console.log("Original Array:", arrThree);

function insertAt(arrThree,index,value){
    for (let i= arrThree.length; i >= index; i--){
        arrThree[i] = arrThree[i -1]
    }

    arrThree[index] = value
    return arrThree;
}

console.log("Original Array:", insertAt(arrThree, 2, 455));


console.log("Test");

console.log(pushFront([3,5,7,5,8],12));

console.log(popFront([5,3,2,5,6]));

console.log(insertAt([1,2,4,5,6],2,3));