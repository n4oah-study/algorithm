/**
 * selectionSort : 선택정렬
 * 
 * 시간 복잡도 : O(n2)
 * 
 * 내용 : 배열의 각 셀을 왼쪽부터 최솟값을 삽입하면서 정렬한다.
*/

#include <stdio.h>

int main()
{
    int array[10] = {
        124, 1294, 92, 192, 24, 1, 59, 298, 2049, 18
    };

    int size = sizeof(array)/sizeof(int);
    for (int i = 0; i < size; i++) {
        int index = i;

        for (int j = i; j < size; j++) {
            if (array[j] < array[index]) {
                index = j;
            }
        }

        int temp = array[index];
        array[index] = array[i];
        array[i] = temp;
    }

    for (int i = 0; i < size-1; i++)
        printf("%d, ", array[i]);
    printf("%d\n", array[size-1]);
    return 0;
}
