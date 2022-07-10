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
bubbleSort(ttt)
console.log(ttt)