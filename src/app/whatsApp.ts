import { Callable } from "./callable";

export class WhatsApp implements Callable {

    constructor(){
        console.log("Using WhatsApp")
    }

    call(): string {
        return "WhatsApp";
    }
}