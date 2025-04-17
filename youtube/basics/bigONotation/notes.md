1. Big O is the upper bound, and Omega is the lower bound. Theta requires both Big O and Omega, so that's why it's referred to as a tight bound (it must be both the upper and lower bound).
   For example, an algorithm taking Omega(n log n) takes at least n log n time, but has no upper limit. An algorithm taking Theta(n log n) is far preferential since it takes at least n log n (Omega n log n) and no more than n log n (Big O n log n).
2. Asymptotic notation = a mathematical tool used in computer science to describe the efficiency of an algorithm by analyzing its behavior as the input size grows, essentially showing how the algorithm's running time or space requirements scale with increasing input, allowing for comparison between different algorithms based on their growth rate.

Types of Asymptotic Notation
Big O (Big O Notation) = Worst-case (most important in real-world apps).
Big Ω (Omega Notation) = Best-case (often less useful in analysis).
Big Θ (Theta Notation) = Exact bound (only applies when best and worst cases match).

Here's a list of functions in asymptotic notation that we often encounter when analyzing algorithms

1. Constant (O(1)) → Always takes the same time.
2. Logarithmic (O(log n)) → Gets much faster as input grows.
3. Linear (O(n)) → Time increases directly with input.
4. Linearithmic (O(n log n)) → Used in efficient sorting algorithms.
5. Polynomial (O(n²), O(n³)) → Nested loops, much slower.
6. Exponential (O(2ⁿ)), O(n!) → Explodes in size, super slow.

Order by Growth Speed

1. Constant = Fastest
2. Logarithmic = Very Fast
3. Linear = Reasonable
4. Linearithmic = Slightly slow
5. Polynomial = Gets slow
6. Exponential = Extremely slow

Characteristic Growth

1. Constant
   Output does not change based on the input, the n. The easy way to identify constant functions is find those that have no n in their expression anywhere, or have n^0. In this case, 1 and 1000 are constant.
2. Linear
   A function has "linear" growth if its output increases linearly with the size of its input. The way to identify linear functions is find those where n is never raised to a power or used as a power.
3. Polynomial
4. Exponential

Learning References

- Difference between lower, upper, and tight bound - https://stackoverflow.com/questions/464078/what-is-the-difference-between-lower-bound-and-tight-bound/471292#471292
- Space and Time Complexity - https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c
