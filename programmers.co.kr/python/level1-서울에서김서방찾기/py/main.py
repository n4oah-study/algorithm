def findKim(seoul):
    kimIdx = 0
    kimIdx = seoul.index("Kim")
    return "김서방은 {}에 있다".format(kimIdx)


print(findKim(["Queen", "Tod", "Kim"]))
