import * as utils from './utils'

// 미완성 개념이 제대로 이해가 안 됨
// 다시 해야지 나중에

/**
 * 
 * @param array 
 * @param start 
 * @param end 
 */
function partition(array: Array<number>, start: number, end: number): number {
  let pivot: number = array[end],
      left: number = start,
      right: number = end;

  while (left < right) {
    while (array[left] < pivot) {
      left ++;
    }

    while (array[right] > pivot) {
      right --;
    }

    console.log('스왑 전', array);
    [array[left], array[right]] = utils.swap(array[left], array[right]);
    console.log('스왑 후', array);
    console.log('브포');
  }

  console.log(array);

  return right;
}

/**
 * 퀵 소트
 * 배열의 중간 값(피벗)을 찾아서 2등분 하여 정렬한다.
 * 2등분 된 배열을 2등분이 안 될 때 까지 2등분 하여 정렬하고,
 * 마지막 최종 값을 합쳐 리턴한다.
 * 
 * @param array 
 */
function quickSort(array: Array<number>, start: number, end: number): void {
  if (start < end) {

    console.log('quickSort 파티션 실행', array)
    let pivot: number = partition(array, 0, array.length-1);

    quickSort(array, start, pivot-1);
    quickSort(array, pivot+1, end);
  }
}

export default quickSort;