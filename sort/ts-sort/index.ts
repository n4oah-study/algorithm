import quickSort from './src/quicksort';
import mergeSort from './src/mergeSort';

const arrSize = 10;
const array: number[] = [];

for (let i = 0; i < arrSize; i ++) {
  while (true) {
    const num: number = Math.abs(Math.floor(Math.random() * arrSize));
    if (!array.includes(num)) {
      array.push(num);
      break;
    }
  }
}

let startTime: number;

// 퀵 소트
/*
startTime = new Date().getTime();
quickSort(array, 0, array.length);
console.log('결과', array);
console.log('quickSort' + ": " + (new Date().getTime() - startTime) + "ms");
*/

// 머지 소트
startTime = new Date().getTime();
mergeSort(array);
console.log('결과', array);
console.log('mergeSort' + ": " + (new Date().getTime() - startTime) + "ms");

// 그냥 짜본 소수점 두 자리 수 구하기
console.log('소수점 두자리 까지만 표시 하기');
let num: number = 12.3456;
console.log(Math.floor((num-Math.floor(num)) * 100));

// 시퀀스 만들기
console.log('시퀀스 만들기');
function getSequence(start: number, end: number, step: number) {
  return Array.from({length: (end - start) / step + 1}, (v: void, index: number) => index * step + start);
}
console.log("getSequence(5, 10, 2).join(', ')\n", getSequence(5, 10, 2).join(', '));
console.log("getSequence('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)).join(', ')\n",
  getSequence('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)).join(', '));
