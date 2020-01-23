import Scene from "../../engine/scene";
import Services from "../../engine/services";

export default class IntroSc extends Scene {

    public init(){
        console.log('Hello world');
        this.endStage();
    }
}



/*
export default class IntroSc extends Scene {

    public create(){
        super.create();
        this.run();
    }

    private run(){
        Services.talk.speakEvent(this.config.audioText, ()=>{
            const nextStage = Services.config.get('stepStages');
            this.tree.select('stage', 'current').set(nextStage.intro);
        });
    }

}

*/