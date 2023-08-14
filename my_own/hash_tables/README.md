# Hash Tables

## Killer features
- Search - O(1)
- Insert - O(1)

## Structure
```js
{
    key: 'Pizza'
    value: '2.25'  
}
```
HT usually has predefined length.  Each key is hashed and store in HT. If key happened to have duplicate (same value 
of hash result) it's called collision and duplicate value chained to the previous value as in a Linked List. Check 
the code for more detail.
