class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null;

function insertAfter(preData, newData) {
  const newNode = new Node(newData);

  // If list is empty
  if (head === null) {
    head = newNode;
    return;
  }

  // If head at first element and preData is same as head
  if (preData == head.data) {
    newNode.next = head.next;
    head.next = newNode;

    return;
  }

  // If list has multiple elements find position to insert element
  let currentHead = head;
  while (currentHead.data !== preData) {
    currentHead = currentHead.next;

    // Checking if reach at last element and data is null
    if (currentHead == null) {
      return;
    }
  }

  newNode.next = currentHead.next;
  currentHead.next = newNode;

  return;
}

// Uncomment to check, if list has a element, before inserting
// head = new Node(1);

insertAfter(1, 2);
insertAfter(2, 3);
insertAfter(3, 4);
insertAfter(2, 5);

function printList() {
  let n = head;
  while (n !== null) {
    console.log(n.data);
    n = n.next;
  }
}

printList();
