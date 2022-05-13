/**
 * Map with all types information's
 */
export const typeMap = new Map([
    ['string',{
        description: 'A string value',
        functions : [
            (string: string)=>{return string.toUpperCase()},
            (string: string)=>{return string.toLowerCase()},
            (string: string, oldValue: string, newValue: string)=>{return string.replace(oldValue, newValue)},
            (string: string)=>{return string.charAt(0)}
        ],
        defaultValue: ''
    }],
    ['number',{
        description: 'A number value',
        functions : [
            (number: number)=>{return number.toString()},
            (number: number)=>{return number.toFixed()},
            (number: number)=>{return number.valueOf()},
        ],
        defaultValue: 0,
    }],
    ['float',{
        description: "numbers but not really numbers. In one word: float",
        functions : [
            (number: number)=>{return number.toString()},
            (number: number)=>{return number.toFixed()},
            (number: number)=>{return number.valueOf()},
        ],
        defaultValue: 0
    }],
    ['boolean',{
        description: 'A Boolean in JavaScript can have only two values: true and false, representing also state 1 and 0',
        functions : [
            (boolean: boolean)=>{return boolean.valueOf()},
        ],
        defaultValue: false,
    }],
    ['object',{
        description: 'An object is a collection of key-value',
        functions : [
            (object: Object, key: string)=>{return object.hasOwnProperty(key)},
            (object: Object)=>{return object.isPrototypeOf(object)},
            (object: Object, key: string)=>{return object.propertyIsEnumerable(key)},
        ],
        defaultValue: {},
    }],
    ['function',{
        description: 'since ES6, functions can be declared also as lambda functions',
        functions : [
            (func: Function)=>{return func.call(func)},
            (func: Function)=>{return func.bind(func)}
        ],
        defaultValue: undefined,
    }],
    ['array',{
        description: 'a collection of values, with some useful methods to',
        functions : [
            (array: any[],condition: Function)=>{return array.filter(x=>condition(x))},
            (array: any[],condition: Function)=>{return array.find(x=>condition(x))},
            (array: any[],condition: Function)=>{return array.some(x=>condition(x))},
            (array: any[],condition: Function)=>{return array.forEach(x=>condition(x))},
            (array: any[],condition: Function)=>{return array.indexOf((x: any)=>condition(x))},
            (array: any[])=>{return array.pop()},
        ],
        defaultValue: [],
    }],
    ['default',{
        description: 'Default Value',
        functions : [],
        defaultValue: null,
    }],
])
