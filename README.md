# JavaScript Loose Comparison Bug

This repository demonstrates an unexpected behavior of JavaScript's loose comparison operator (`==`) when dealing with `NaN` (Not a Number) and `-0` (negative zero).

## The Bug

The provided JavaScript code defines a function `foo` that compares two numbers using loose equality.  Intuitively, one might expect `NaN == NaN` to be `true`, and `0 == -0` to be `true`. However, this is not the case in JavaScript.

`NaN` is never equal to itself or any other value (including `NaN`).  Therefore, `NaN == NaN` evaluates to `false`.  Likewise, while mathematically equivalent, `-0` and `0` are distinct in JavaScript, making `0 == -0` evaluate to `false`. 

## The Solution

To reliably compare for `NaN`, it is recommended to use the `Number.isNaN()` function. To compare numbers, use strict equality (`===`) to avoid this issue.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (Node.js, browser console, etc.).
4. Observe the unexpected results.