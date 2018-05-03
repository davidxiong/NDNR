import sys
import os

def main():
# left first row
    slist = [306,315,276,303,261,323,291,335,306,315]
    counter = 3
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord - 30 * (cnt + 1)))
            else:
                outfile.write(str(coord - 12 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
