export class ListNode {
    public value: any
    public next: ListNode | null
    public prev: ListNode | null

    constructor(value, next=null, prev=null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

export class TreeNode {
    public value: any
    public left: TreeNode
    public right: TreeNode

    constructor(value, left=null, right=null) {
        this.value = value
        this.left = left
        this.right = right
    }
}