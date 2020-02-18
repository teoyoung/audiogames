import Scene from "../../engine/scene";
import Player from "../player";
import Services from "../../engine/services";

class Enemy {

    private readonly line: number;
    private step: number;

    constructor(line:number, step: number){
        this.line = line;
        this.step = step;
    }

    public getPosition(): {line: number, step: number} {
        return {line: this.line, step: this.step};
    }

    public move() {
        if(this.step === 0){ return; }
        this.step -= 1;
    }

    public kill(){
        this.step = Services.utils.getRandomInt(6, 15);
    }

}

export default class GameSc extends Scene {

    private player: Player;
    private enemyList: Enemy[] = [];
    private render: number | any;

    public init(){
        super.init();

        this.player = new Player();
        this.player.onShot.add( () => {
            this.shot();
        });

        this.createEnemy();
        this.render = setInterval(()=>{
            this.stepRender();
        }, 3000);
    }

    private createEnemy(){
        for (let line = 0; line < 3; line++) {
            const enemy = new Enemy(line, Services.utils.getRandomInt(6, 15) );
            this.enemyList.push(enemy);
        }
    }

    private shot(){
        for ( let enemy of this.enemyList) {
            const playerLine = this.player.getPositionLine();
            const shotRadius = this.player.getShotRadius();
            const {line, step} = enemy.getPosition();
            if(playerLine !== line){ continue; }
            if(step >= shotRadius){ 
                Services.talk.speak(`Мимо`, 5);
                continue; 
            }
            enemy.kill();
            Services.talk.speak(`Попал`, 5);
        }
    }

    private stepRender(){
        for ( let enemy of this.enemyList) {
            enemy.move();      
            const playerLine = this.player.getPositionLine();      
            const {line, step} = enemy.getPosition();
            if(playerLine === line){
                Services.talk.speak(`${step}`, 3);
            }
            if(step > 0) { continue; }
            this.endGame();
        }
    }

    private endGame(){
        Services.talk.speak(`Конец игры`, 3);
        clearInterval(this.render);
    }

}
