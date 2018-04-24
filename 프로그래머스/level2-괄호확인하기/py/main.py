def is_pair(s):
    num = 0
    for c in s:
        if c == '(':
            num += 1
        elif c == ')':
            num -= 1

        if num < 0:
            break

    if num != 0:
        return False
    return True


# 아래는 테스트로 출력해 보기 위한 코드입니다.
print( is_pair("(hello)()"))
print( is_pair(")("))