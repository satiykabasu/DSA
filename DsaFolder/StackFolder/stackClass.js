class Stack{
    constructor(){
        this.stack=[];

    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];

    }
    isEmpty(){
        return this.stack.length===0;
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack.toString());
    }
}

const stack1=new Stack();
stack1.push(234);
stack1.push(24);
stack1.push(847);
stack1.push(32);
stack1.push(20);
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.size());
stack1.print();








