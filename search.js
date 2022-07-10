//Binary search Algorithm
function bins(arr, t) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(t === arr[middleIndex]){
            return  middleIndex 
        }
        if(t < arr[middleIndex]){
            rightIndex = middleIndex-1
        } else{
            leftIndex = middleIndex + 1
        }
        
    }

    return false
}
const ns = [ -5, 2, 4, 6, 10 ] 
 

// console.log(bins(ns,10)) 

function recBinSer(arr, tar){
    return search(arr, tar, 0, arr.length - 1)
}
function search(arr, tar, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(tar === arr[middleIndex]) {
        return middleIndex
    }
    if(tar < arr[middleIndex]) {
        return search(arr, tar, leftIndex, middleIndex - 1)
    } else {
        return search(arr, tar, middleIndex + 1, rightIndex)
    }
}
// console.log(recBinSer([9,8,7,5,3,1,2,4,6,45,78], 6))

//BUBBLE SORT
function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i]  > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)
}
const ttt = [-8,4,3,8,6,7,9,2]
// bubbleSort(ttt)
// console.log(ttt)

//INSERTION SORT

function insertSort(arr) {
    for( let i = 1; i< arr.length; i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numberToInsert
    }
}
const insarr = [-6, 20, 8,-2,4 ]
//  insertSort(insarr)
// console.log(insarr)

//QUICKSORT
function quickSort(arr){
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const  unsorted = [-4,-5,82,9,3,7,1,5,2,8, -1]

// console.log(quickSort( unsorted))

//MERGESORT
function mergeSort(arr) {
    if(arr.length <2) {
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr, rightArr) {
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort(unsorted))
