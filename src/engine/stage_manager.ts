import Services from "./services";

interface IStagesLoader {[stageName: string]: any};

class StageManager {

    private stageList: IStagesLoader;
    private currentStage: any;
    protected config: any;

    public loader(stages: IStagesLoader){
        if(!stages){ return }
        this.stageList = stages;
        this.config = Services.config.get('stepStages');
    }

    public applyStage(name: string){
        if(!this.config[name]){ return }
        const stageName = this.config[name];
        if(!this.stageList[stageName]){ return }

        this.currentStage = new this.stageList[stageName]().init();
    }

}

export default new StageManager();