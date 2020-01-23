import { Signal } from "../signal";

export default class uiEventManager {

    private uiList: {[key: string]: Signal} = {};

    constructor() {
        
        const el = document.getElementById('ui');

        el.onclick = (el)=> {
            const id = (<HTMLTextAreaElement>el.target).id;  
            if(!this.uiList[id]){
                return;
            }
            this.uiList[id].call();      
        }


    }

    public addEventToButtonId(name: string, event: any){

        const signal = new Signal();
        signal.add(()=>{
            event();
        })

        this.uiList[name] = signal;



        // const event: MouseEvent = new MouseEvent('click', {view: window})

    }

    private add(name: string){

    }

}