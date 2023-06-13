class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirstNode(data) {
    this.head = new Node(data, this.head)
    this.size++
  }
  
  // Insert last node
  insertLastNode(data) {
    let node = new Node(data)
    let current;

    // if empty make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next
      }

      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAtIndex(data, index) {
    // If index is out of range
    if( index > 0 && index > this.size) {
      return;
    }
    // If first index
    if(index === 0) {
      this.insertFirstNode(data)
      return;
    }

    const node = new Node(data);
    let current, previous;
    
    // set current to first
    current = this.head;
    let count = 0

    while(count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if(count === index) {
        console.log(`index at ${index} is ${current.data}`)
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index

  // Clear list

  // Print the list data
  printData() {
    let current = this.head;
    while(current){
      console.log(current.data)
      current = current.next;
    }
  }
}

const ll = new LinkList()
ll.insertFirstNode(100)
ll.insertFirstNode(101)
ll.insertFirstNode(102)
ll.insertFirstNode(103)
ll.insertFirstNode(104)
ll.insertFirstNode(200)
ll.insertFirstNode(300)
ll.insertLastNode(400)
ll.insertAtIndex(101, 2)
ll.getAt(2)
ll.printData()