# Useless Info

This library is useless, please don't use it. If you want anyway, read below:

# What is it

This library offer:
*   Some informative function about passed value 
*   A bundle of useful functions to check conditions and create your conditions

# How it works

after you imported with:
```js
import * as UFO from "./useless-info";
```

You can invoke the main function

```js
ufo.getInfo('exampleString');
```

This will return an object with some not really useful information:

```js
{
  value: 5,
  type: 'number',
  description: 'A number value',     
  format: {
    integer: 5,
    float: 5,
    string: '5',
    object: { key: 5 },
    function: [Function (anonymous)],
    char: [ '5' ]
  },
  mostUsedFunction: [
    [Function (anonymous)],
    [Function (anonymous)],
    [Function (anonymous)]
  ],
  funFact: '-'
}
```