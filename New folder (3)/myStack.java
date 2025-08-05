//stack implementation using array
public class myStack{
int stack[]; 
int top;
int size;
public myStack(int size){
    this.size=size;
    stack=new int[size];
    top=-1;
    
}
//insert value
public void push(int element){
    if(top>=size-1){
        System.out.println("Stack is full");
        return;
        
    }
    top++;
    stack[top]= element;
}
//isempty
public void isEmpty(){
if(top==-1){
    System.out.println("Stack is empty");
    
}
else{
    System.out.println("Stack is not empty");
}
}
//peek element
public int peek(){
    if(top==-1){
        System.out.println("Stack is empty");
        return -1;
        
}
return stack[top];

}
//pop element
public void pop(){
    if(top==-1){
        System.out.println("Stack is empty");
        return;
}
top--;
System.out.println(stack[top+1]);
}
public void printstack(){
    if(top==-1){
        System.out.println("Stack is empty");
        return;
    }
    for(int i=top;i>=0;i--){
        System.out.println(stack[i]);
}
}
public static void main(String args[]){
    myStack s=new myStack(5);
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.printstack();
        s.isEmpty();
        s.pop();
        s.pop();
        s.pop();
        s.peek();
        s.pop();
        s.isEmpty();



    
}
}