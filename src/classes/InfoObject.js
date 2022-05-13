export class UfoInformationObject{
    constructor(value,type,description,format,mostUsedFunction,funFact){
        this.value = value
        this.type = type
        this.description = description
        this.format = format
        this.mostUsedFunction = mostUsedFunction
    }
}

export class UfoFormats{
    constructor(integer,float,string,object,func,char,array){
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

