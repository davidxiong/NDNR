import sys
import os

def main():
# topright first row (-1, +30)
#    slist = [645,342,644,372,665,387,666,357,645,342]
# topright second row
#    slist = [644,372,643,402,664,417,665,387,644,372]
# topright third row
#    slist = [643,402,642,432,663,447,664,417,643,402]
# topright fourth row
#    slist = [642,432,641,462,662,477,663,447,642,432]
# topright zero row (+1, -30) based on the 7th item of the first row
#    slist = [772,402,771,432,792,447,793,417,772,402]
# topright -1 row
    slist = [815,402,814,432,835,447,836,417,815,402]
    counter = 2
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord + 21 * (cnt + 1)))
            else:
                outfile.write(str(coord + 15 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
