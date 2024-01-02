function reverseStringUsingStack(str){
let stack=[];
let ans="";
for(let i=0;i<=str.length-1;i++){
stack.push(str[i]);

}
while(stack.length!==0){
 let ch=stack[stack.length-1] 
 ans += ch;
 stack.pop() 
}
return ans;
}
console.log(reverseStringUsingStack("satiyka"));

/*
Time Complexity and space complexity of the above approach is 0(n)

but if we do with two pointer approach then only t.c will be 0(n)
*/