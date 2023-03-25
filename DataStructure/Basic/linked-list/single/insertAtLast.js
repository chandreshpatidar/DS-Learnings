class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null;
head = new Node(2);
let f = new Node(3);

head.next = f;

function insertAtLast(data) {
  let newNode = new Node(data);

  // Check if list is empty create a head with new node
  if (head === null) {
    head = newNode;
    return;
  }

  // newNode.next = null;

  // If list has multiple elements, check for the last node
  let last = head;
  while (last.next !== null) {
    last = last.next;
  }

  // Adding new node at the last
  last.next = newNode;
}

insertAtLast(1);
insertAtLast(4);
insertAtLast(5);
insertAtLast(6);

function printList() {
  let n = head;

  while (n !== null) {
    console.log(n.data);
    n = n.next;
  }
}

printList();
