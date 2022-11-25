function merge(arr1, arr2) {
    let newArr = [];
    let a = 0;
    let b = 0;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] < arr2[b]) {
            newArr.push(arr1[a]);
            a++;
        }
        else {
            newArr.push(arr2[b]);
            b++;
            }
    }
    while (a < arr1.length) {
        newArr.push(arr1[a]);
        a++;
    }
    while (b < arr2[b]) {
        newArr.push(arr2[b]);
        b++;
    }
    return newArr;
}

function mergeSort(arr) {
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};