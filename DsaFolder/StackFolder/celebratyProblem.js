/*
Main condition :
" a celebraty is a person who is known to all but does not know anyone at the party; " => here is the two condition


if you go to a party of N people,
find if there is a celerity in the party or not; a squre N*N matrix M[][] is user to represent people at the party such that
 if an element of row i and column j is set to 1 , it means ith person knows jth person. here M[i][j] will always be 0;

 Note : follow 0 based indexing;

 Example:

 input:
 N=3;
 M[][]=[[0,1,0],[0,0,0],[0,1,0]]
 output: 1

 explanation : 0th and 2nd person both know 1; therefore, 1 is the celebrity;

 Way to solve the problem :

 1. ignore the diagonal part of the as, there [0][0],[1][1],[2][2] => as there row and col index value are same , =>
 now, look like the way 0 knows 0 or 1 knows 1 or 2 knows 2 this will always be true;

 2. [0][1]= 1 || [0][2]=0 || [1][0]=0 || etc => if [row][col]=> 1 that means ith row and jth col know each other else do not know

 3. to satisfy celebrity condition , 
  we can see that 1th row , 1 did not  know  anyone and also it did not know anyone and other row there is some 0 and 1 so did now call properly celebrity 
   and also same condition applicable for oth and 2nd col but for 1st col , [0][1]=1 , [1][1]=0 => known to own and 
   [2][1]=1 so it is celebrity; => so 1 is the celebrity;




   after summrize above all the consept we will comes to know that,

   for celebrity,

   row will be all 0 => as celebrity did not know anyone

   col will be all 1 expect diagonail as celebrity is known for everyone
, */


//Brute force 






/*Using Stack :

1 . put the all element of array 

*/

