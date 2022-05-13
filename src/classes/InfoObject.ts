export class UfoInformationObject{
    value!: string
    type!: string
    description!: string
    formats!: UfoFormats
    mostUsedFunctions!: Function[]

    constructor(value: string,type: string,description: string,formats: UfoFormats,mostUsedFunction: Function[]){
      this.value = value
      this.type = type
      this.description = description
      this.formats = formats,
      this.mostUsedFunctions = mostUsedFunction
  }

}

export class UfoFormats{ 
    integer!: number
    float!: number
    string!: string
    object!: Object
    function!: Function
    char!: string[]
    array!: any[]

    constructor(integer: number,float: number,string: string,object: object,func: Function,char: string[],array: any[]){
      this.integer = integer
      this.float = float
      this.string = string
      this.object = object
      this.function = func
      this.char = char,
      this.array = array
    } 
}


 // Next Step : Implement an enum to be passed in all function where custom type is required
/* class UfoTypes {
    static boolean = new UfoTypes('boolean');
    static string = new UfoTypes('string');
    static number = new UfoTypes('number');
    static float = new UfoTypes('float');
    static array = new UfoTypes('array');
    static object = new UfoTypes('object');
    static function = new UfoTypes('function');
  
    constructor(name) {
      this.name = name;
    }
    toString() {
      return this.name
    }
  } */

