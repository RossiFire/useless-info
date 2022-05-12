
import * as checking from './checking.js';
import { UFOTypes, UFOInformationObject } from './classes/InfoObject.js';
import {typeMap} from './static.js'


/**
 * Get an overview of your value.
 * @param {*} value - your value
 * @returns - 
 */
export function getInfo(value){
    if(!value){
        return null
    }
    return new UFOInformationObject(
        value,
        typeof(value),
        getCustomMapFromValue(value).description,
        getAllFormatFromValue(value),
        getCustomMapFromValue(value).functions,
        getCustomFunFact(value)
    )
}


export function getAllFormatFromValue(value){
    return new UFOTypes(
        parseInt(value) === NaN ? 0 : parseInt(value),
        parseFloat(value) === NaN ? 0 : parseFloat(value),
        JSON.stringify(value) || '-',
        checking.isObject(value) ? value : {key: value},
        checking.isFunction(value) ? value : function(){return value},
        JSON.stringify(value) ? JSON.stringify(value).replace(`"`,"").match(/.{1,1}/g) : []
    )
}




function getCustomFunFact(value){
    let type = checking.getCustomType(value);
    if(type === 'string'){
        return value == "number" ? 'I told you!' : "if you call this function passing 'number', it will be anyway a string"
    }
    return typeMap.get(type).funFact || '-'
}


function getCustomMapFromValue(value){
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
            return typeMap.get(type);
        default:
            return 'unknown value';
    }
}
