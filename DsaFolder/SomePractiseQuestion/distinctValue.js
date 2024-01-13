/*
Time Limit: 2s, Memory Limit: 128000

Problem Statement:

In a serene village, a group of friends gathered under an oak tree faced a challenging puzzle. They had an array of integers and a mission: find three distinct values within it that added up to a specific number, x.

Sarah, their puzzle-solving expert, led the way. Hours passed as they calculated sums and eliminated possibilities. Finally, as the sun set, Sarah's excitement filled the air. They had cracked the puzzle and celebrated their shared victory.

As they left the gathering, they knew this moment would be a cherished memory, a testament to their bond and love for challenges.



Input:

The first input line has two integers n and x the array size and the target sum.

The second line has n integers a1,a2,…,an the array values.



Output:

Return an Array of integers the positions of the values. If there are several solutions, you may Return valid solution. If there are no solutions, Return [-1]



Constraints

1 ≤ n ≤ 5000

1 ≤ x , ai ≤ 10^9



Example:

Input:

4 8

2 7 5 1

Output:

4 1 3





Input:

9 18

4 1 9 6 12 5 23 12 78

Output:

2 6 8



Explanation: In both cases, the goal is to find three distinct values within the array that sum up to the specified target value x. The provided output indicates the positions of these values. If multiple solutions exist, valid solution can be selected. If there are no solutions, the output should be [-1].
*/


