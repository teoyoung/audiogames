import Services from "./services";

interface IStagesLoader {[stageName: string]: any};

export default class StageManager {

    private static stageList: IStagesLoader;
    private static currentStage: any;
    private static config: any;

    public static loader( stages: IStagesLoader ){
        if(!stages){ return }
        this.stageList = stages;

        this.config = Services.config.get('stepStages');
    }

    public static applyStage(name: string) {
        if(!this.config[name]){ return }
        const stageName = this.config[name];
        
        if(!this.stageList[stageName]){ return }
        this.currentStage = new this.stageList[stageName]().init();
        
    }

}