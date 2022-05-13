import { typeMap } from "./static.js";


/**
 * Check if the value is a Function
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isFunction = (value) =>{ return value && typeof(value) === 'function';}

/**
 * Check if the value is a String
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isString = (value) =>{ return value && typeof(value) === 'string';}

/**
 * Check if the value is a single String Character
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isChar = (value) =>{ return value && typeof(value) === 'string' && value.length === 1;}

/**
 * Check if the value is a number
 * 
 * NOTE: If you're passing a float number the conditions will return TRUE,
 * 
 * use {@link isInteger()} instead 
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isNumber = (value) =>{ return value && typeof(value) === 'number';}

/**
 * Check if the value is an Integer number
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isInteger = (value) =>{ return value && typeof(value) === 'number' && Number(value) === value && value % 1 !== 0;}

/**
 * Check if the value is a float number
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
export const isFloat = (value) =>{ return value && typeof(value) === 'number' && Number(value) === value && value % 1 !== 0;}

/**
 * Check if the value is an Object
 * @param {*} value Your value
 * @returns boolean representing if your value match the condition
 */
 export const isObject = (value) =>{ return value && typeof(value) === 'object' && value.length == undefined;}


/**
 * Check if the value is an Array
 * @param {*} value Your array
 * @returns boolean representing if your value match the condition
 */
export const isArray = (value) =>{ return value && typeof(value) === 'object' && (value.length && value.length > 0);}



/**
 * Clear an object and set default value to all properties based on their type
 * @param {*} object Object you want to clear 
 * @returns A clear Object
 */
export function clearObject(object){
    if(!checking.isObject(object)){
        return {}
    }
    let myObj = object
    Object.keys(myObj).forEach(key=>{
        let currentValue = myObj[key]
        myObj[key] = isObject(currentValue) && !isArray(currentValue) ? clearObject(currentValue) : typeMap.get(checking.getCustomType(currentValue)).defaultValue;
    })
    return myObj;
}
