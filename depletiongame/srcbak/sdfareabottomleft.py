import sys
import os

def main():
# bottomleft first row (+19, -30)
#    slist = [621,252,651,247,670,217,640,222,621,252]
# bottomleft second row
    slist = [640,222,670,217,689,187,659,192,640,222]
# bottomleft third row
#    slist = [659,192,689,187,708,157,678,162,659,192]
# bottomleft fourth row
#    slist = [678,162,708,157,727,127,697,132,678,162]
# bottomleft fifth row
#    slist = [697,132,727,127,746,97,716,102,697,132]
# bottomleft sixth row
#    slist = [686,107,716,102,735,72,705,77,686,107]
    counter = 14
    
    outfile = open('sdfareacoords.txt', mode='w')
    cnt = 0
    while cnt < counter:
        outfile.write('[')
        for i, coord in enumerate(slist):
            if i % 2 == 0:
                outfile.write(str(coord - 30 * (cnt + 1)))
            else:
                outfile.write(str(coord + 5 * (cnt + 1)))
            if i < len(slist) - 1:
                outfile.write(',')
        outfile.write('],\n')
        cnt += 1
    outfile.close()

if __name__=='__main__':
    main()
