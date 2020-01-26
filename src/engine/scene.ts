import Services from "./services";
import loader from "./stage_manager";

export default class Scene {

    public endStage(){
        loader.applyStage('Intro');
    }

    public init(){
        console.log('Init game');
    }

}