class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null;

function insertAtBeginning(data) {
  let newNode = new Node(data);

  newNode.next = head;
  head = newNode;
}

insertAtBeginning(1);
insertAtBeginning(2);
insertAtBeginning(3);
insertAtBeginning(4);

function printList() {
  let n = head;

  while (n !== null) {
    console.log(n.data);
    n = n.next;
  }
}

printList();
