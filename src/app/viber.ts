import { Callable } from "./callable";

export class Viber implements Callable {

    constructor(){
        console.log("Using Viber")
    }

    call(): string {
        return "Viber";
    }
}