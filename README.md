## Hooray!

<div align="center">
  <img src="https://image.ibb.co/ceX27y/favicon_256_1.png" />
</div>

Horray! is an experimental micro-library that lets you treat objects as if they were arrays.
Note that Horray! extends `Object`, which considers a bad practice, and therefore it is experimental and not recommended to be used in production.

### Install
```
npm i hooray
```

### Examples

After importing Horray!, you can use the following methods on objects: 

`map()`, `reduce()`, `reduceRight()`, `every()`, `some()`, `find()`, `filter()` and `forEach()`

```js
import 'hooray'

const person = { firstName: 'James', lastName: 'Jones', age: 15 }

person.map(([key, value]) => `${key}=${value}`) // [ 'firstName=James', 'lastName=Jones', 'age=15' ]

person.reduce((acc, [key, value]) => acc + key.length, 0) // 20

person.every(([key, value]) => typeof value === 'string') // false

person.some(([key, value]) => value / 5 === key.length) // true

person.find(([key, value]) => key.length === 3) // { age: 15 }

person.filter(([key, value]) => typeof value == 'string') // { firstName: 'James', lastName: 'Jones' }

person.forEach(([key, value]) => console.log(key, value)) // You can assume the result :)
```
