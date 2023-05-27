def factorial(n):
    result = 1
    while n > 0:
        result = result * n
        n -= 1

    return result

print(factorial(4))

#######################

def factorial2(n):
    result = 1
    for i in range(1, n+1):
        result = result * i
    
    return result

print(factorial2(4))

########################

def factroial3(n):
    if n == 1:
        return n
    if(n > 1):
        return n * factroial3(n-1)

print(factroial3(4))