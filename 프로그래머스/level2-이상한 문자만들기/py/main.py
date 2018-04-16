def toWeirdCase(s):
    result = ''

    for item in s.split(' '):
        for idx in range(len(item)):
            if idx % 2 == 0:
                result += item[idx].upper()
            else:
                result += item[idx].lower()
        result += ' '
    return result[0:-1]


# 아래는 테스트로 출력해 보기 위한 코드입니다.
print("결과 : {}".format(toWeirdCase("try hello world")))
