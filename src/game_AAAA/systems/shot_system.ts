import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";
import Player from '../player';

export default class ShotSystem implements ISystem {

    private player: Player;

    constructor(player: Player){

        this.player = player;
        this.player.onShot.add(()=>{
            console.log("I's work!");
            this.player.onShoting();
        })

    }

    public read( enity: Entity) {

        const hp = enity.getComponent('Life').hp;      
        if(hp === 0){ return } 
        enity.setComponentValue('Life', 'hp', 0);
        this.player.offShoting();

    }

}