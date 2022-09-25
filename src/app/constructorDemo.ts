import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConstructorDemo{
    private name: string | undefined;
    private age: number| undefined;

    constructor(){
        console.log("Constructor Demo Object created")
    }
    
    getName():string | undefined{
        return this.name;
    }

    setName(name: string | undefined){
        this.name = name;
    }
}