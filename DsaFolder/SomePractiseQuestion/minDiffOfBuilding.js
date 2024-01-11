/*
a young boy spends his days crafting buildings out of blocks , each precisely one unit in height. he builds n builfings with different height. now, he want to minimize the different between the heights of the tallest building and shortest beilding. 
to achieve this, the boy can perform the follwing operation any number of times: he can select any building and reallocating a block to place it a top another building . this operation cause the heights of one building to decrease by 1 while incresinge the heights by 1.
help him find the minium difference between the height of tallest bulding by applying the operation any number if times.


input
the input consists of two lines:
tge first line contains an integer n, the number if buildings.
the second line contains n integers, the heights of each buildings

output

return an integer , represeting the minium difference between the tallest and shortest builfing


example 1:
input 
6
1 8 5 4 2 8
output
1

explanation

wr can make the heights as :[4,5,5,4,5,5] by follwing operation

select building 2: and place its top block on top of the first building 3 times. new height become, [4, 5,5,4,5,5]

thus the difference between the tallest and the shortest building is 1


example 2:

input 
5
1 2 3 4 5

output
0
*/