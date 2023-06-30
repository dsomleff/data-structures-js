- Use Divide and Conquer
- Choose a Pivot Point (always try to aim for middle of an array)
- 2 pointers Left (`should be > then PP` ) and Right (`should be < PP`)
- Moving pointers across given array
- Compare pointers with the Pivot Point (`L < PP && R > PP`) and swap them
- Repeat 
```
            <= <====   [0 ... 31] ===> >=
                           16
                         /    \ 
                  [0 ... 15]   [17 ... 31]
                      8             24    
                     / \            / \
               [0...7]  [9 ... 15]
                  4         12
                 / \        / \
          [0...4] [5..7] [9..11][13..15]
            2       6      10      14
           /\      /\      /\      /\
         0,1  3,4  and so on
                     
```
Strategies:
- If array is reversed sorted - get the perfect bisecting.
- If it sorted - get 0 swaps
- O (n log n) or in bad case scenario - O (n2)
