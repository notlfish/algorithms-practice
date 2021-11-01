const choosePivot = (arr) => Math.floor(arr.length / 2);


const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    let pivotIndex = choosePivot(arr);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];
    arr.forEach((val, i) => {
        if (val <= pivot && i !== pivotIndex) less.push(val);
        if (val > pivot) greater.push(val);
    });
    const lessOrd = quickSort(less);
    const greaterOrd = quickSort(greater);
    return lessOrd.concat([pivot]).concat(greaterOrd);
}

const anArray = [14, 6, 1, 6, 8, 6, 7, 4];
console.log(quickSort(anArray));