class DataNode {
   data: any;
   next: DataNode;
   constructor(datum: any ){
      this.data = datum;
      this.next = null;
   }
}

/*define linked list class*/
export default class LinkedList{
   private head: DataNode;
   constructor(){
      this.head = null;
   }
   get node(): DataNode{
      return this.head;
   }
   add(datum: any): any{
      let node = new DataNode(datum);
      if(this.head === null) {
         this.head = node;
      } else {
         node.next = this.head;
         this.head = node;
      }
      return this;
   }
   remove():any{
      this.head = this.head.next;
      return this;
   }
   toArray(): Array<any>{
      let arr = [];
      let pointer = this.head;
      while(pointer !== null){
         arr.push(pointer.data);
         pointer = pointer.next;
      }
      return arr;
   }
}

