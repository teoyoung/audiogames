export class Signal {

    private signal: any;

    add( signal: any ){
        this.signal = signal;
    }

    call(){
        if(this.signal){
            this.signal();
        }        
    }

}