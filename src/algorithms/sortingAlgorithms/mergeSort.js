// actual merge sort function.
function mergeSort(array, start, end) {
  if (end - start === 1) {
    let arr = [array[start]];
    return arr;
  }

  let middle = Math.floor((start + end) / 2);
  let left = mergeSort(array, start, middle);
  let right = mergeSort(array, middle, end);
  let arr = merge(left, right);
  return arr;
}

// merge routine for the mergeSort.
function merge(left, right) {
  let i = 0;
  let j = 0;
  let arr = [];
  // merging left and right arrays.
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  // adding the remaining elements of the left array, if any.
  while (i < left.length) {
    arr.push(left[i]);
    i++;
  }

  // adding the remaining elements of the right array, if any.
  while (j < right.length) {
    arr.push(right[j]);
    j++;
  }
  return arr;
}

export default mergeSort;
