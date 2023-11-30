// quick sort algorithm in js

function quickSort(arr, low, high) {
  if(low < high) {
    // get partition index
    const pi = partition(arr, low, high)
  
    // quickSort left array
    quickSort(arr, low, pi - 1)
  
    //quickSort right array
    quickSort(arr, pi + 1, high)
  }
}

function partition(arr, low, high) {
  let i = low - 1
  const pivotIndex = high;

  for(let j = low; j < high; j++) {
    // if element is less than pivot 
    if( arr[j] <= arr[pivotIndex]) {
      i += 1;
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }

  [arr[pivotIndex], arr[i+1]] = [arr[i+1], arr[pivotIndex]]

  return i + 1
}
