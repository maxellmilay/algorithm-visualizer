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