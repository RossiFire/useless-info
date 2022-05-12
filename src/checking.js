

/**
 * Check if the value is an Object
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isObject = (value) =>{ return value && typeof(value) === 'object';}

/**
 * Check if the value is a Function
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isFunction = (value) =>{ return value && typeof(value) === 'function';}

/**
 * Check if the value is a String
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isString = (value) =>{ return value && typeof(value) === 'string';}

/**
 * Check if the value is a single String Character
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isChar = (value) =>{ return value && typeof(value) === 'string' && value.length === 1;}

/**
 * Check if the value is a number
 * 
 * NOTE: If you're passing a float number the conditions will return TRUE,
 * 
 * use {@link isInteger()} instead 
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isNumber = (value) =>{ return value && typeof(value) === 'number';}

/**
 * Check if the value is an Integer number
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isInteger = (value) =>{ return value && typeof(value) === 'number' && Number(value) === value && value % 1 !== 0;}

/**
 * Check if the value is a float number
 * @param {*} value Your value
 * @returns boolean rapresenting if your value match the condition
 */
export const isFloat = (value) =>{ return value && typeof(value) === 'number' && Number(value) === value && value % 1 !== 0;}

/**
 * Check if the value is an Array
 * @param {*} value Your array
 * @returns boolean rapresenting if your value match the condition
 */
export const isArray = (value) =>{ return value && isObject(value) && value.length > 0;}


/**
 * Check if all the values in the array have the same type
 * @param {*} value Your array
 * @returns boolean rapresenting if your value match the condition
 */
export const isArrayConsistent = (array) =>{ 
    if(!isArray(array)){
       return false;
    } 
    return !array.reduce((arr, val)=>{ arr.push(typeof(val)); return arr;}, []).some((val,i,arr)=> val != arr[0]);
}


export const getCustomType = (value) =>{
    let type = typeof(value)
    switch (type) {
        case 'string':
            return typeof(value)
        case 'number':
            return isFloat(value) ? 'float' : 'number'
        case 'object':
            return checking.isArray(value) ? 'array' : 'object'
        case 'boolean':
            return  typeof(value)
        case 'function':
            return  typeof(value);
        default:
            return 'unknown value';
    }
}


