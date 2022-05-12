export class UFOInformationObject{
    constructor(value,type,description,format,mostUsedFunction,funFact){
        this.value = value
        this.type = type
        this.description = description
        this.format = format
        this.mostUsedFunction = mostUsedFunction
        this.funFact = funFact
    }
}

export class UFOTypes{
    constructor(integer,float,string,object,func,char){
        this.integer = integer
        this.float = float
        this.string = string
        this.object = object
        this.function = func
        this.char = char
    }    
}
