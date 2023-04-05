const Node = require('./createNode');

let head = null;

function unshift(data) {
  if (head === null) {
    head = new Node(data);
    return;
  }

  const newNode = new Node(data);
  newNode.prev = null;
  newNode.next = head;
  head.prev = newNode;
  head = newNode;
}

unshift(1);
unshift(2);
unshift(3);
unshift(4);
unshift(5);
unshift(6);

function traverse() {
  let node = head;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

traverse();
