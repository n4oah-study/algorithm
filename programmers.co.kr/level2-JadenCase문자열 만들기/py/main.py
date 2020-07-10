def Jaden_Case(s):
    return ' '.join([item[0].upper() + item.lower()[1:] if item[0].isalpha() is True else item for item in s.split(' ')])


print(Jaden_Case("3people unFollowed me for the last week"))
