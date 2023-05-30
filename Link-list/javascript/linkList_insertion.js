// const n1 = {
//   data: 100
// }

// const n2 = {
//   data: 200
// }

// n1.next = n2

// console.log(n1)

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
  }
  // Insert last node

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

ll.printData()