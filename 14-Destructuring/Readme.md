# Destructuring

## What is destructuring?
- Destructuring in JavaScript is a syntax feature that allows you to extract values from arrays or objects and assign them to variables in a concise way.

**Array Destructuring**

Example:

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

In this example, the array arr is destructured into three variables a, b, and c.

**Object Destructuring**

Example:

```javascript
const obj = { name: 'John', age: 30 };
const { name, age } = obj;

console.log(name); // 'John'
console.log(age); // 30
```

In this example, the object obj is destructured into two variables name and age.

**Nested Destructuring**

Example:

```javascript
const obj = { name: 'John', address: { street: '123 Main St', city: 'Anytown' } };
const { name, address: { street, city } } = obj;

console.log(name); // 'John'
console.log(street); // '123 Main St'
console.log(city); // 'Anytown'
```

In this example, the object obj is destructured into three variables name, street, and city, with street and city being extracted from the nested address object.

Destructuring is a powerful feature in JavaScript that simplifies code and reduces the need for temporary variables.

## Destructuring in Props