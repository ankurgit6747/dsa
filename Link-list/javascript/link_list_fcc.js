class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// Visually it look like this
// A -> B -> C -> D -> E -> null
//                          curr

const printLinkList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next
  }
}

// recursiverly
const printLinkListRes = (head) => {
  if (head === null) return;
  console.log(head.val)
  printLinkListRes(head.next)
}

const insertFirstNode = (head, data) => {
  let newNode = new Node(data);
  newNode.next = head;
  return newNode; ''
}

const findMiddleNode = (head) => {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = fast;
    fast = fast.next.next;
  }

  return slow;
}
// console.log(findMiddleNode(a))

const reverseLinkList = (head) => {

}



// printLinkListRes(a)
// insertFirstNode(a, 'Insert this data at first node')
// printLinkList(a)
