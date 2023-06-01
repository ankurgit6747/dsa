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

    // if emoty make head
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

  // Get at index

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
ll.insertFirstNode(200)
ll.insertFirstNode(300)
ll.insertLastNode(400)

ll.printData()