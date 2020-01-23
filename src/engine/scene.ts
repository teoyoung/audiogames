import Services from "./services";
import StageManager from "./stage_manager";

export default class Scene {

    public endStage(){
        console.log('End game');
        StageManager.applyStage('Intro');
    }

    public init(){
        console.log('Init game');
    }

}