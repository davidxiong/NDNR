import sys
import os

def main():
# topleft zero row (+17 -30) based on the 8rh item in the first row 
#    slist = [405,327,435,320,452,290,422,297,405,327]
# topleft first row (-17, +30)
#    slist = [598,308,628,301,645,271,615,278,598,308]
# topleft second row
#    slist = [581,338,611,331,628,301,598,308,581,338]
# topleft third row
#    slist = [564,368,594,361,611,331,581,338,564,368]
# topleft fourth row
#    slist = [517,405,547,398,564,368,534,375,517,405]
# topleft fifth row
#    slist = [380,463,410,456,427,426,397,433,380,463]
# topleft sixth row
    slist = [363,493,393,486,410,456,380,463,363,493]
    counter = 1
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord - 30 * (cnt + 1)))
            else:
                outfile.write(str(coord + 7 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
