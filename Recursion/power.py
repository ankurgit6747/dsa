def power(base, pwr):
  if(pwr == 1):
    return base
  else:
    return power(base, pwr - 1) * base

base = 2
pwr = 4
print( "Value is: ", power(base, pwr)) 