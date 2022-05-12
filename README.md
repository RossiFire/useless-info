# U-FO

Useful JavaScript library to manage easily types in  your application

# What is it

This library offer:
*   Some informative functions about your values 
*   A bundle of useful functions to check conditions

# How it works

after you imported with:
```js
import * as UFO from "./useless-info";
```

You can invoke the main function

```js
UFO.getInfo('exampleString');
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

# Types Functions

This library provides also a bunch of functions to check your types. Actually is present:

| Function | Description | Properties | Return |
|----------|-------------|----------|--------|
|    isObject     |   Check whatever is an object          |    value      |   boolean     |
|    isFunction   |   Check whatever is a function          |    value      |   boolean     
|    isString      |  Check whatever is a string           |    value      |    boolean    |
|    isChar      |    Check whatever is a char         |      value    |    boolean    |
|    isNumber      |  Check whatever is a number           |    value      |   boolean     |
|    isInteger      | Check whatever is an integer number  |   value      |    boolean      |
|    isFloat      |   Check whatever is a float          |    value      |   boolean     |
|    isArray      |   Check whatever is an array          |    value      |    boolean    |
|    isArrayConsistent      |   Check if all values in your array have the same type          |    array      |   boolean     |
|    getConsistentArray      |  remove all values from an array based on type you want          |    array, typeYouWant      |    array    |
|    clearObject      |    Clear an object removing all values and setting their default values         |     object     |    object    |
