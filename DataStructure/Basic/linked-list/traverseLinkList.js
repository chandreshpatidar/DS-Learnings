class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null;

function createLinkedList() {
  head = new Node(1);
  let second = new Node(2);
  let third = new Node(3);

  head.next = second;
  second.next = third;
}

function printList() {
  let n = head;

  while (n !== null) {
    console.log(n.data);
    n = n.next;
  }
}

createLinkedList();
printList();
