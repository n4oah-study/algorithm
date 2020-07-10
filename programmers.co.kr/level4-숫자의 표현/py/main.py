def expressions(num):
    answer = 0

    for n in range(1, num + 1):
        sum = 0

        temp = n
        while sum < num:
            sum += temp
            temp += 1

        if sum == num:
            answer += 1

    return answer


print(expressions(15))

for i in range(4, 10, 2):
    print(i)
