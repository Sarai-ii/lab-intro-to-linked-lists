const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Method to clear the linked list (empty it)
  clear() {
    this.head = null;
  }

  insert(data){
    //adds data to the beginning of the linkedList
    let newNode = new Node(data);
    //if the next node is ponting to the head then it must come before it
    newNode.next = this.head; 
    //swaps values 
    this.head = newNode;
  }

  size() {
    let count = 0;
    //setting node variable to the first node (the head)
    let node = this.head;
    while(node){
      //for each node count will increase by 1
      count ++;
      //updating the value of node to the next node value
      node = node.next;
    }
    return count;
  }

  delete(data){
    //setting node to the first node in the linked list
    let node = this.head;
    let counter = 1;
    // find the node we're trying to delete node.data = first node's data, data = param of node we want to delete and node.next means while there's still a value after this data keep going
    while(node.data !== data && node.next){
      //countes the position of the required data param to change the value of node later
      counter++;
    // set the variable to the next node in the list 
      node = node.next;
      //once node.data === data, we can end the loop
    }
    //store the found node into it's own variable
    let foundNode = node;
    //update node back to the first node in the linked list
    node = this.head;
    //we want to get to the month before the desired data position to remove the data we want so loop through the list
    for(let i = 0; i < counter; i++){
      //move to the next node on the list until it satifies the for condition
      node = node.next;
    }
    //this deletes because it's setting the next node (desired data) now equals the data after our desired data
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    //start at the head/ first node
    let node = this.head;
    //while there's always a next node, keep looping until theres not
    while(node.next){
      //assign current node to the next node so we can check again
      node = node.next;
    }
    return node;
  }

  search (key) {
    //start at the beginning of the list
  let node = this.head;
  //while the data of that node does not match the key keep looping until we find it
  while(node.data !== key){
    //move to the next node
    node = node.next;
  }
  return node;
  }

  getKth(k){
    //starting the count at 1 for the lab but the position should = 0
    let count = 1;
    //set node to the first node in the linked list
    let node = this.head;
    // while count does not match the kth position, loop
    while(count !== k){
      //increase count by one
      count ++;
      //now node equals the next node
      node = node.next;
    }
    return node;
  }

  getKthToLast(k){
    //set the variable to get the size of the linked list
    let getSize = this.size();
    //set node to the first node in the linked list
    let node = this.head;
    // loop until we find the node that matches k postion minus the 
    // i = 1
    for(let i = 1; i < getSize - k; i++){
      //if i is less than size of list - the number we want move to the next number
      node = node.next;
    }
    return node;
  }

  isEmpty() {
    //is this.head a falsey value? 
    return !this.head;
  }

  //converts data into a linked list
  toArray() {
    //start with an empty array
    let arr = [];
    //first node in the linked list
    let item = this.head;
    while(item){
    //putting item data into the array
    arr.push(item.data);
    item = item.next;
    }
    return arr;
  }
  
  containsDuplicates(){
    // made a var and converts linked list into array
    let arr = this.toArray();
    //takes the elements of array and puts into a set data structure(ensures theres no dupes)
    const unique = [... new Set(arr)];
    //returns a boolean if there's duplicates, length is different(duplicates) or the same(no duplicates)
    return arr.length !== unique.length;
  }
}
module.exports = {
  Node,
  LinkedList,
};
