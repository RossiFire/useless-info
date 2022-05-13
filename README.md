# U-FO (useless-info)

Useful JavaScript library to manage easily types and classes in your application

# What is it

This library offer:
*   Some informative functions about your values 
*   A bundle of useful functions to check conditions and handle consistency.

# How it works

after you imported the package:
```js
import * as UFO from "./useless-info";
```

You can call all the functions

```js
let myArray = [objClassA,objClassB,objClassA,objClassA];
UFO.isArrayClassConsistent(myArray);
// Expected result : false

let myArray = [34,{},'hello',4.6];
UFO.getElementsFromArrayWithType(myArray,'float');
// Expected result : [4.6]

```

# Types Functions

This library provides also a bunch of functions to check your types and your classes. Here some of them:

| Functions | Description | Properties | Return |
|----------|-------------|----------|--------|
|    isObject     |   Check whatever is an object          |    value      |   boolean     |
|    isFunction   |   Check whatever is a function          |    value      |   boolean     
|    isString      |  Check whatever is a string           |    value      |    boolean    |
|    isChar      |    Check whatever is a char         |      value    |    boolean    |
|    isNumber      |  Check whatever is a number           |    value      |   boolean     |
|    isInteger      | Check whatever is an integer number  |   value      |    boolean      |
|    isFloat      |   Check whatever is a float          |    value      |   boolean     |
|    isArray      |   Check whatever is an array          |    value      |    boolean    |
|    clearObject      |    Clear an object removing all values and setting their default values   |  object  |  object  |
|    isArrayTypeConsistent  |   Check if all the values in the array have the same type  | array, type (optional)  | boolean  |
|    getElementsFromArrayWithType  |   Check if all the values in the array have the same type  | array, elementsWithType | array  |
|    isArrayClassConsistent  | Check if all the values in the array have the same class  | array, myClass (optional) | boolean  |
|    getElementsFromArrayWithClass  |  Iterate your array and return only elements that matches your type |  array, objectWithClass | array |
