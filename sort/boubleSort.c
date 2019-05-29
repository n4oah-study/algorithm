#include <stdio.h>

/**
 * BoubleSort(버블 소트)
 * 
 * 시간 복잡도 : O(n)
 * 
 * 내용 :
 * 
 */

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
