/*
the collage mess offer circular and squre parathas at lunch break  , reffered to by numbers 0,1 respectively. all students stand in queue. each student either prefers squre or circulaer paratha. the number of parathas in the mess is equal to  thr number of students. the parathas are placed in the stack ..

at each step: if the student at front of queue prefers the parathas on the top of the stavk , rhey will take it take it and leave the queue.  otherwise they will leave it and go to the queue's end . this continues until none of the quue students want to take the to prathas and a re thus unable to eat. 

you are given two integer arrays students and parathas where parathas[i] is the type of ith parathas in the stack (i =0 is the top of the stack)
and students[j ] is the preference of the jth student in the initial queue (j=0 is the front of the queue)
return number of student who are unable to eat 

input:
 there is an integer n(numbrt of students) given as input in the first line
in the second line n space seperated integers(choices of student)are given as input

in the third line, n space seperated integers (type of parathas) are given as input


output:
return the count of students who left hungery

example
input
4
1 1 0 0
0 1  0 1
 output 
0
explanation:

- front student leaves the top paratha and returns to the end of the line making students =[1,0,0,1]


- front student takes the top paratha and returns to the end of the line making students =[0,1,1] and parathas =[1,0,1]

- front student leaves the top paratha and returns to the end of the line making students =[1,1,0]

- front student takes the top paratha and returns to the end of the line making students =[1,0] and parathas=[0,1]

- front student leaves the top paratha and returns to the end of the line making students =[0,1]



- front student takes the top paratha and leaves the line making students =[1] and parathas=[1]

- front student takes the top paratha and returns to the end of the line making students =[] and parathas=[]


hence all students are able to eat
*/