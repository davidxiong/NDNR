import sys
import os
import re

def main():
    infile = open('coords_orig.txt', mode='r')
    outfile = open('coords_out.txt', mode='w')

    for line in infile:
        if line.startswith('{cod'):
            m = re.search('\[([A-Za-z0-9_,\.]+)\]', line)
            ls = m.group(1).split(',')
            cnt = 0
            ols = []
            for cod in ls:
                if cnt % 2:
                    ols.append(str(580 - int(cod)))
                else:
                    ols.append(cod)
                cnt += 1
            mystr = '[' + ",".join(ols) + ']'
            oS = re.sub('\[([A-Za-z0-9_,\.]+)\]', mystr, line)
            outfile.write(oS)
        else:
            outfile.write(line)
    outfile.close()
    infile.close()

if __name__=='__main__':
    main()
