/**
 * Map with all types information's
 */
export const typeMap = new Map([
    ['string',{
        description: 'A string value',
        functions : [
            (string)=>{return string.toUpperCase()},
            (string)=>{return string.toLowerCase()},
            (string)=>{return string.replace()},
            (string)=>{return string.charAt(0)}
        ],
        defaultValue: ''
    }],
    ['number',{
        description: 'A number value',
        functions : [
            (number)=>{return number.toString()},
            (number)=>{return number.toFixed()},
            (number)=>{return number.valueOf()},
        ],
        defaultValue: 0,
    }],
    ['float',{
        description: "numbers but not really numbers. In one word: float",
        functions : [
            (number)=>{return number.toString()},
            (number)=>{return number.toFixed()},
            (number)=>{return number.valueOf()},
        ],
        defaultValue: 0
    }],
    ['boolean',{
        description: 'A Boolean in JavaScript can have only two values: true and false, representing also state 1 and 0',
        functions : [
            (boolean)=>{return boolean.valueOf()},
        ],
        defaultValue: false,
    }],
    ['object',{
        description: 'An object is a collection of key-value',
        functions : [
            (object)=>{return object.hasOwnProperty()},
            (object)=>{return object.isPrototypeOf()},
            (object)=>{return object.propertyIsEnumerable()},
        ],
        defaultValue: {},
    }],
    ['function',{
        description: 'since ES6, functions can be declared also as lambda functions',
        functions : [
            (func)=>{return func.cal()},
            (func)=>{return func.bind()}
        ],
        defaultValue: undefined,
    }],
    ['array',{
        description: 'a collection of values, with some useful methods to',
        functions : [
            (array,condition)=>{return array.filter(x=>condition(x))},
            (array,condition)=>{return array.find(x=>condition(x))},
            (array,condition)=>{return array.some(x=>condition(x))},
            (array,condition)=>{return array.forEach(x=>condition(x))},
            (array,condition)=>{return array.indexOf(x=>condition(x))},
            (array)=>{return array.pop()},
        ],
        defaultValue: [],
    }],
])
