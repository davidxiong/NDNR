import sys
import os

def main():
# top first row (-30, +23)
#    slist = [631,339,629,365,599,388,601,362,631,339]
# top second row
#    slist = [601,362,599,388,569,411,571,385,601,362]
# top third row
#    slist = [571,385,569,411,539,434,541,408,571,385]
# top fourth row
#    slist = [541,408,539,434,509,457,511,431,541,408]
# top fifth row (+2, -26)
#    slist = [511,431,509,457,479,480,481,454,511,431]
#            [513,405,511,431,481,454,483,428,513,405]
# top sixth row 
    counter = 2
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord - 2 * (cnt + 1)))
            else:
                outfile.write(str(coord + 26 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
