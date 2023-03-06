# Hash Tables

HT are built in JS and that's an objects. 
To create an HT start with define the object/array with key value pair, like:
```js
{
    nails: 1000
}
```
Now we are going to run this through the hash function and with math equation replace key letters with a numeric 
value. That value is an address in memory, by calling this address we can fetch the object. Very fast. </br>
Hash :
- is one way operation. Key became number, but number never can be transform back to the key.
- produce always the same address for the same key. </br>
### Collisions
Hash function may produce the same address for the different keys. That's called a `colision`. It's when we have the 
item that maps to the same spot in memory. It will look like:
```js
[['nails', 1000], ['nuts', 1200]]
```
Process of putting all the key value pairs that map to the same address, space is what's called `Separate Chaining`. 
</br>
</br>
There is another approach: If address is already have a data code try to find empty space in memory next to the 
existed one. That's called `Linear Probing (open addressing)`. </br>
</br>
Another way is to have a linked list at every one of these addresses.
And then we just add to the linked list when we have multiple items that map to that address.

### Examples of HT in computing:
**Message Digest:** 
A message digest is a cryptographic hash function containing a string of digits created by a one-way hashing formula. Message digests are designed to protect the integrity of a piece of data or media to detect changes and alterations to any part of a message.

**File System**:
The hashing is used for the linking of the file name to the path of the file. When you interact with a file system as a user, you see the file name, maybe the path to the file. But to actually store the correspondence between the file name and path, and the physical location of that file on the disk, the System uses a map, and that map is usually implemented as a hash table.

- Password Verification
- Programming Language
- Compilers
- Cryptography
