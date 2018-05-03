import sys
import os
import re

def main():
    infile = open('coords_orig2.txt', mode='r')
    outfile = open('coords_out2.txt', mode='w')

    for line in infile:
        nl = line.rstrip()
        ls = nl.split(',')
        cnt = 0
        ols = []
        for cod in ls:
            if cnt % 2:
                ols.append(str(580 - int(cod)))
            else:
                ols.append(cod)
            cnt += 1
        mystr = ",".join(ols) + '\n'
        outfile.write(mystr)
    outfile.close()
    infile.close()

if __name__=='__main__':
    main()
