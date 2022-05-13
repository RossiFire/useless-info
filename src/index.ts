
import {typeMap} from './static.js'
import {isObject, isFunction, isArray, isFloat} from './utils/checking'
import { UfoFormats, UfoInformationObject } from './classes/InfoObject';

/**
 * Get an overview of your value.
 * @param {*} value - your value
 * @returns - 
 */
export function getInfo(value: any){
    if(!value) return null;
    return new UfoInformationObject(
        value,
        getCustomType(value),
        getCustomMapFromValue(value)!.description,
        getAllFormatFromValue(value),
        getCustomMapFromValue(value)!.functions,
    )
}


export function getAllFormatFromValue(value: any){
    return new UfoFormats(
        parseInt(value) === NaN ? 0 : parseInt(value),
        parseFloat(value) === NaN ? 0 : parseFloat(value),
        JSON.stringify(value) || '-',
        isObject(value) ? value : {key: value},
        isFunction(value) ? value : function(){return value},
        JSON.stringify(value) ? JSON.stringify(value).replace(`"`,"").match(/.{1,1}/g)! : [],
        [value]
    )
}



function getCustomMapFromValue(value: any){
    let type = typeof(value);
    switch (type) {
        case 'string': return typeMap.get(type);
        case 'number': return isFloat(value) ? typeMap.get('float') : typeMap.get('number');
        case 'object': return isArray(value) ?  typeMap.get('array') : typeMap.get('object');
        case 'boolean': return  typeMap.get(type);
        case 'function': return typeMap.get(type);
        default: return typeMap.get('default');
    }
}



export const getCustomType = (value : any) =>{
    let type = typeof(value)
    switch (type) {
        case 'string': return typeof(value);
        case 'number': return isFloat(value) ? 'float' : 'number';
        case 'object': return isArray(value) ? 'array' : 'object';
        case 'boolean': return  typeof(value);
        case 'function': return typeof(value);
        default: return 'unknown value';
    }
}

// Export Statements
export * from './utils/checking';
export * from './utils/consistency';
