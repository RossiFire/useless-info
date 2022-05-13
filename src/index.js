
import { UfoInformationObject, UfoFormats } from './classes/InfoObject.js';
import {typeMap} from './static.js'
import {isObject, isFunction, isArray, isFloat} from './checking.js'

/**
 * Get an overview of your value.
 * @param {*} value - your value
 * @returns - 
 */
export function getInfo(value){
    if(!value) return null;
    return new UfoInformationObject(
        value,
        getCustomMapFromValue(value),
        getCustomMapFromValue(value).description,
        getAllFormatFromValue(value),
        getCustomMapFromValue(value).functions,
    )
}


export function getAllFormatFromValue(value){
    return new UfoFormats(
        parseInt(value) === NaN ? 0 : parseInt(value),
        parseFloat(value) === NaN ? 0 : parseFloat(value),
        JSON.stringify(value) || '-',
        isObject(value) ? value : {key: value},
        isFunction(value) ? value : function(){return value},
        JSON.stringify(value) ? JSON.stringify(value).replace(`"`,"").match(/.{1,1}/g) : [],
        [value]
    )
}



function getCustomMapFromValue(value){
    let type = typeof(value);
    switch (type) {
        case 'string': return typeMap.get(type);
        case 'number': return isFloat(value) ? typeMap.get('float') : typeMap.get('number');
        case 'object': return isArray(value) ?  typeMap.get('array') : typeMap.get('object');
        case 'boolean': return  typeMap.get(type);
        case 'function': return typeMap.get(type);
        default: return 'unknown value';
    }
}



// Export Statements
export * from './checking.js';
export * from './consistency.js';
