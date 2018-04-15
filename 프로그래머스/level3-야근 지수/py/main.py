import math

# 남은 시간
TIME = 4
# 남은 일의 작업량
WORK_AMOUNT = [4, 3, 3]


def noOvertime(n, works):
    result = 0

    while n > 0:
        works[works.index(max(works))] -= 1
        n -= 1

    result = int(sum(math.pow(n, 2) for n in works))

    return result


print(noOvertime(TIME, WORK_AMOUNT))