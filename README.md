# Unexpected Behavior of + Operator with Strings in JavaScript
This repository demonstrates a common error in JavaScript related to the loose typing of the + operator.  When used with strings, it concatenates instead of adding numerically, leading to unexpected results if not accounted for. The `bug.js` file shows the problematic code and `bugSolution.js` provides a solution using type checking.

## Bug Description
JavaScript's + operator behaves differently depending on the operands' types. If one or both operands are strings, it performs string concatenation. This can lead to unexpected outputs in mathematical operations if not explicitly handled.

## Solution
The solution uses type checking to ensure that both operands are numbers before performing addition. If either operand is not a number, it throws an error, or an alternative action can be performed.