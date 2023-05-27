# url to demonstrate: http://towersofhanoi.info/Animate.aspx

def toh(n, from_bar, to_bar, aux_bar):
    if(n == 1):
        print('Move disk', n, 'from bar ', from_bar, 'to_bar', to_bar)
        return
    toh(n-1, from_bar, aux_bar, to_bar)
    print('Move disk ', n, 'from bar ', from_bar, 'too bar', to_bar)
    toh(n-1, aux_bar, to_bar, from_bar)

n = 4
from_bar = 'A'
aux_bar = 'B'
to_bar = 'C'

toh(n, from_bar, to_bar, aux_bar)