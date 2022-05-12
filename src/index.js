
import * as checking from './checking.js';

const typeMap = new Map([
    ['string',{
        description: 'A string value',
        functions : [
            (string)=>{return string.toUpperCase()},
            (string)=>{return string.toLowerCase()},
            (string)=>{return string.replace()},
            (string)=>{return string.charAt(0)}
        ],
        funFact: ""
    }],
    ['number',{
        description: 'A number value',
        functions : [
            (number)=>{return number.toString()},
            (number)=>{return number.toFixed()},
            (number)=>{return number.valueOf()},
        ]
    }],
    ['float',{
        description: "numbers but not really numbers. In one word: float",
        functions : [
            (number)=>{return number.toString()},
            (number)=>{return number.toFixed()},
            (number)=>{return number.valueOf()},
        ],
        funFact: "float numbers are quite funny, because in JavaScript they don't exist. But i wanted to give them the right credit"
    }],
    ['boolean',{
        description: 'A Boolean in JavaScript can have only two values: true and false, rapresenting also state 1 and 0',
        functions : [
            (boolean)=>{return boolean.valueOf()},
        ]
    }],
    ['object',{
        description: 'An object value is simply a json string',
        functions : [
            (object)=>{return object.hasOwnProperty()},
            (object)=>{return object.isPrototypeOf()},
            (object)=>{return object.propertyIsEnumerable()},
        ]
    }],
    ['function',{
        description: 'since ES6, functions can be declared also as lamba functions',
        functions : [
            (func)=>{return func.cal()},
            (func)=>{return func.bind()}
        ],
        funFact: "What's the difference between function and method?"
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
        ]
    }],
])


export function getInfo(value){
    return{
        value: value,
        type: typeof(value),
        description: getCustomValuesFromValue(value).description,
        format: getAllFormat(value),
        mostUsedFunction: getCustomValuesFromValue(value).functions,
        funFact: getCustomFunFact(value)
    }
}


export function getAllFormat(value){
    return {
        integer: parseInt(value) === NaN ? 0 : parseInt(value),
        float:  parseFloat(value) === NaN ? 0 : parseFloat(value),
        string: JSON.stringify(value) || '-',
        object: checking.isObject(value) ? value : {key: value},
        function: checking.isFunction(value) ? value : function(){return value},
        char: JSON.stringify(value) ? JSON.stringify(value).replace(`"`,"").match(/.{1,1}/g) : []
    }
}


function getCustomFunFact(value){
    let type = checking.getCustomType(value);
    if(type === 'string'){
        return value == "number" ? 'I told you!' : "if you call this function passing 'number', it will be anyway a string"
    }
    return typeMap.get(type).funFact || '-'
}


function getCustomValuesFromValue(value){
    let type = typeof(value)
    switch (type) {
        case 'string':
            return typeMap.get(type)
        case 'number':
            return checking.isFloat(value) ? typeMap.get('float') : typeMap.get('number')
        case 'object':
            return checking.isArray(value) ?  typeMap.get('array') : typeMap.get('object')
        case 'boolean':
            return  typeMap.get(type);
        case 'function':
            return  typeMap.get(type);
        default:
            return 'unknown value';
    }
}


function resetObject(object){
    if(!checking.isObject(object)){
        return {}
    }
    let myObj = object
    Object.keys(myObj).forEach(key=>{
        myObj[key] = checking.isObject((myObj[key])) ? resetObject((myObj[key])) : inheritDefaultValue(myObj[key]);
    })
    return myObj;
}

const inheritDefaultValue = (value) =>{
    return '';
}


console.log(getInfo('ciao'));