/*
a no is said to be a armstrong number is sum of cube of digit of number will be equal to the main 
no then it will said to be armstrong number;

*/

function armStrongNo(no){
    let digit;
    let sum=0;
    let temp=no;// for store original no as we had did operation on the original number
    

    while(no>0){
        digit=no%10;
        sum = sum+(digit*digit*digit);
        no=no/10;
    }
    if(sum === temp){
        return true;
    }
    else{
        return false;
    }

}
console.log(armStrongNo(153))