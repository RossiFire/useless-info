import { getCustomType } from '../index'
import { isArray, isFloat, isString} from './checking.js';

/**
 * Check if all the values in the array have the same type
 * @param {any[]} value Your array
 * @param {string} type - Optional. If provided, check if all items in your array have the same type 
 * @returns boolean representing if your value match the condition
 */
 export const isArrayTypeConsistent = (array: any[],type: string | null = null) =>{ 
    if(!isArray(array)) return false;
    return !array.reduce((arr, val)=>{ arr.push(getCustomType(val)); return arr;}, []).some((val: any,i: number,arr: any[])=> val != (type ? type : arr[0]));
}

/**
 * Iterate your array and return only elements that matches your type
 * @param {} value Your array
 * @param {string} typeYouWantToHave - Your type. If null or not provided, unmodified array is returned
 * @returns filtered array
 */
export const getElementsFromArrayWithType = (array: any[],elementsWithType: string) =>{ 
    if(!isArray(array) || !isTypeExistingInMyTypes(elementsWithType)) return [];
    if(!elementsWithType) return array;
    return array.filter(x=> getCustomType(x) == elementsWithType)
}






/**
 * Check if all the values in the array have the same class
 * @param {any[]} value Your array
 * @param {string} type - Optional. If provided, check if all items in your array have the same type. This method is Case Sensitive about this value
 * @returns boolean representing if your value match the condition
 */
export const isArrayClassConsistent = (array: any[], myClass: any = null) =>{
    if(!isArray(array) || !isArrayTypeConsistent(array,'object'))return false;
    return !array.reduce((arr: any[], val: any)=>{ arr.push(val.constructor.name); return arr;}, []).some((val: any,i: number,arr: any[])=> val != (myClass ? isString(myClass) ? myClass : myClass.name : arr[0]));
}


/**
 * Iterate your array and return only elements that matches your type
 * @param {} value Your array
 * @param {string | class} objectWithClass - Your class or class name. If not provided, unmodified array is returned. This method is Case Sensitive about this value
 * @returns filtered array
 */
 export const getElementsFromArrayWithClass = (array: any[],objectWithClass: any) =>{ 
    if(!isArray(array) || !isArrayTypeConsistent(array,'object')) return [];
    let className = isString(objectWithClass) ?  objectWithClass : objectWithClass.name
    if(!className) return array;
    return array.filter(x=> x.constructor.name == className)
}





const isTypeExistingInMyTypes = (userType: any) =>{ return ["string", "number", "float", "boolean", "object","function"].find(x=> x == userType) !== undefined}
