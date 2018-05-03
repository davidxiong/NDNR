import sys
import os

# bottomright goes a different direction from other areas
# due to the excel worksheet in use;

def main():
# bottomright first row (+30, +4)
#    slist = [782,103,812,107,830,77,800,73,782,103]
# bottomright second row
#    slist = [812,107,842,111,860,81,830,77,812,107]
# bottomright third row
#    slist = [842,111,872,115,890,85,860,81,842,111]
# bottomright fourth row
#    slist = [872,115,902,119,920,89,890,85,872,115]
# bottomright fifth row
#    slist = [884,149,914,153,932,123,902,119,884,149]
# bottomright sixth row
#    slist = [914,153,944,157,962,127,932,123,914,153]
# bottomright seventh row
#    slist = [926,187,956,191,974,161,944,157,926,187]
# bottomright eighth row
#    slist = [920,251,950,255,968,225,938,221,920,251]
# bottomright ninth row
#    slist = [932,285,962,289,980,259,950,255,932,285]
# bottomright tenth row
    slist = [962,289,992,293,1010,263,980,259,962,289]
    counter = 1
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord - 18 * (cnt + 1)))
            else:
                outfile.write(str(coord + 30 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
