import { ListNode } from "./Nodes";

class LinkedList {
    public head: ListNode | null;
    public tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value)

        if (this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode

        if (!this.head) {
            this.head = newNode
        }
    }

    prepend(value) {
        const newNode = new ListNode(value, this.head)
        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    insertAfter(value, afterValue) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value == afterValue) {
                const newNode = new ListNode(value, currentNode.next)
                currentNode.next = newNode
            }
            currentNode = currentNode.next
        }
    }

    find(value) {
        if (!this.head) {
            return;
        }

        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value == value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
    }

    delete(value) {
        if (!this.head) {
            return
        }

        while(this.head && this.head.value == value) {
            this.head = this.head.next
        }

        let currentNode = this.head
        
        while (currentNode.next) {
            if (currentNode.next.value == value){
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }

        if (this,this.tail.value == value) {
            this.tail = currentNode
        }
    }

    toArray() {
        let elements = []

        let currentNode = this.head
        
        while (currentNode) {
            elements.push(currentNode)
            currentNode = currentNode.next
        }

        return elements
    }
}

export default LinkedList