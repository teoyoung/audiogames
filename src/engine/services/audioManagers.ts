export default class AudioManagers {

    private audioList:any = {};
    private config: any;

    constructor(config: any){
        this.config = config;
    }

    public add( name: string ){
        if(this.audioList[name] && !this.config[name]){
            return;
        }
        this.audioList[name] = new Audio(this.config[name]);
    }

    public play(name: string, volume?: number, loop?: boolean){
        if(!this.audioList[name]){
            this.add(name);
        }

        if(volume){
            this.volume(name, volume);
        }

        if(loop){
            this.audioList[name].addEventListener('ended', ()=>{
                this.audioList[name].play()
            });
        }

        this.audioList[name].play();
    }

    public volume( name: string, volume: number){
        if(!this.audioList[name] || !volume || volume > 1 || volume < 0){
            return;
        }
        this.audioList[name].volume = volume;
    }

}