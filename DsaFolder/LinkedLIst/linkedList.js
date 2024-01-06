c//SINGLE LINKED LIST

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class SingleList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    addAtLast(data){
        let current;
        let node=new Node(data);
        if(this.head===null){
            this.head=node;
        }
        else{
          current=this.head;
          while(current.next){
            current=current.next;
          }
          current.next=node;
        }
        this.size++;
    }
    addAtFirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    addAtIndex(data,index){
        if(index>0 && index>this.size){
            return;
        }
        if(index===0)
        {
            this.addAtFirst(data);
        }
        else
        {
            let node=new Node(data);
            let previous,current;
            current=this.head;
            let count=0;
            while(count<index){
                previous=current;
                count++;
                current=current.next;
            }
            node.next=current;
            previous.next=node;
            this.size++;
         }

        
    }


    getAtIndex(index){
        
    }
}













