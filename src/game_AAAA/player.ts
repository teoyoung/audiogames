import Services from "../engine/services";
import { Signal } from "../engine/signal";




export default class Player {

    public readonly onShot: Signal;
    private shot: boolean = false;

    private line: number;
    private speak: string;

    private readonly shotRadius: number;

    constructor(){

        const maxLine = 2;

        this.shotRadius = 3;

        this.line = 1;

        this.onShot = new Signal();

        Services.uiEventManager.addEventToButtonId('left', ()=>{ 

            this.speak = '';

            if(this.line <= 0){ 
                this.wellDetector();
                return 
            }

            this.line -= 1;
            this.speak += 'Шаг влево';
            if(this.line === 0){ 
                this.speak += 'Стена';
            }
            this.dictor();
        })

        Services.uiEventManager.addEventToButtonId('right', ()=>{ 

            this.speak = '';

            if(this.line >= 2){ 
                this.wellDetector();
                return 
            }
            this.line += 1;
            this.speak += 'Шаг вправо';
            if(this.line === 2){ 
                this.speak += 'Стена';
            }
            this.dictor();
        })

        Services.uiEventManager.addEventToButtonId('kill', ()=>{ 
            this.onShot.call();
        });        

    }

    public getPositionLine(): number {
        return this.line;
    }

    public getShotRadius():number {
        return this.shotRadius;
    }

    private dictor(){
        Services.talk.speak(this.speak,3);
    }

    private wellDetector(){
        if(this.line === 2 || this.line === 0){
            Services.talk.speak('Стена', 3);
            console.log('Стена');
        }
    }

}