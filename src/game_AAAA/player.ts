import Services from "../engine/services";
import { Signal } from "../engine/signal";




export default class Player {

    public onShot: Signal;

    private line: number;

    constructor(){

        this.line = 1;

        this.onShot = new Signal();

        Services.uiEventManager.addEventToButtonId('left', ()=>{ 
            if(this.line <= 0){ return }
            this.line -= 1;
            console.log(this.line);
        })

        Services.uiEventManager.addEventToButtonId('right', ()=>{ 
            if(this.line >= 2){ return }
            this.line += 1;
            console.log(this.line);
        })

        Services.uiEventManager.addEventToButtonId('kill', ()=>{ 
            this.onShot.call();
        })

        

    }

    public getPositionLine(): number {
        return this.line;
    }



}