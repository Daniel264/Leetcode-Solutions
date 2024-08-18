
#CSC 202 assignment to print fibonacci series from 1 - 20

def add_num():
    i = 0 
    n = 0
    n1 = 1
    # declaring i, n and n1
    result = 0
    while ( i < 20):
        # while loop to print the first 20 fibonacci series
        print(n)
        result = n + n1
        n = n1
        n1 = result
        i = i + 1
add_num()
# calling the function
