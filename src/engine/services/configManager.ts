export default class ConfigManager {

    private config: any;

    constructor( json: any ){
        this.config = json;
    }

    public get(type: string){
        if(!this.config[type]){
            return;
        }

        return this.config[type];
    }

}