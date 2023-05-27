def fact(n):
    result = 1
    for i in range(1, n+1):
        result = result * i
    return result

def combination(n, r):
    return ( fact(n) / (fact(r) * fact(n-r)) )

n = 5
r = 3

print(int(combination(n, r)))