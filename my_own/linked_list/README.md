```js
// Linked List is a series of nodes linked together
// Node could be {}, [], '', number.
Head -> Node -> Tail -> null
```
Node contains:
```js
data: {}
next: // pointer to the next node
```

Pros:
- Super fast insert/delete - O(1) <br>

Cons:
- No indexes as in array
- Get / Set is linear or O(n)

Summary:
- Add to the front - killer feature - O(1)
- Add to the back - linear O(n)
- Delete - linear O(n)
- No random access (need to walk through the list)
- No fixed capacity (not applied for JS) (limited array)
- Always the right size

