# Algorithm Challenge - Rail Fence Cipher

## How to get started
1. Clone the repo:
```
git clone https://github.com/LondonAlgorithms/rail-fence-cipher.git
cd rail-fence-cipher
```

2. Start modifying `src/algo.js`. 


## Algorithm
The rail fence cipher is a tranposition cipher. It uses a grid with a zig-zag 
pattern for both encryption and decryption. The grid has a number of rows
equal to the symmetric key and a number of columns equal to the length of the
cleartext and ciphertext, which have the same length.

### Encryption
To encrypt a cleartext, start creating a grid with a zig-zag pattern. For 
example, for key = 3:

```
x...x...x....x...x
.x.x.x.x.x..x.x.x.
..x...x...x....x..
```

Then, write your cleartext, say "rail fence cipher", in place of the x's, 
zig-zag'ing through the grid:

```
r... ...c....i...r
.a.l.f.n.e..c.p.e.
..i...e... ....h..
```

Finally, concatenate sequentially each row, skipping the empty cells, obtaining
the ciphertext "r ciralfnecpeie h".

### Decryption
Decryption is similar to encryption, yet different. Start creating, the grid
with the zig-zag pattern as before:

```
x...x...x....x...x
.x.x.x.x.x..x.x.x.
..x...x...x....x..
```

Then, going row by row, from left to right, replace the x's with the letters
from the ciphertext. For example, for the ciphertext "r ciralfnecpeie h":

```
r...x...x....x...x     "r ciralfnecpeie h"
.x.x.x.x.x..x.x.x.      ^
..x...x...x....x..

r... ...c....i...r     "r ciralfnecpeie h"
.a.l.x.x.x..x.x.x.            ^
..x...x...x....x..

r... ...c....i...r     "r ciralfnecpeie h"
.a.l.f.n.e..c.p.e.                      ^
..i...e... ....h..
```

Finally, read the text following the zig-zag pattern, obtaining the
clear text "rail fence cipher".
