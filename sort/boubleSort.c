/**
 * BoubleSort(버블 소트)
 * 
 * 시간 복잡도 : O(n2)
 * 
 * 배열에 5개의 원소가 있다고 가정
 * (5 - 1) + (5 - 2) + (5 - 3) + (5 - 4) = 10
 * 4       + 3       + 2       + 1       = 10
 * 데이터 원소 N개 | 최대 단계 수
 * 5              | 20
 * 10             | 90
 * 20             | 380
 * 40             | 6320
 * 
 * 내용 : 배열에서 연속된 두 항목을 비교하여 swap
 * 
 */

#include <stdio.h>

int main()
{
    int array[10] =
    {
        124, 1294, 92, 192, 24, 1, 59, 298, 2049, 18
    };
    int size = sizeof(array)/sizeof(int);
    
    for (int i = 0; i < size-1; i++)
    {
        for (int j = 0; j < size-i-1; j++)
        {
            if (array[j] > array[j+1]) {
                int temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }

    for (int i = 0; i < size-1; i++)
        printf("%d, ", array[i]);
    printf("%d\n", array[size-1]);

    return 0;
}
