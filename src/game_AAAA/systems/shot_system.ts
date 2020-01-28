import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";
import Player from '../player';

export default class ShotSystem implements ISystem {

    private player: Player;

    constructor(player: Player){

        this.player = player;
        this.player.onShot.add(()=>{
            console.log('It"s work!');
        })

    }

    public read( enity: Entity) {

        let step = enity.getComponent('Position').step;       
        enity.setComponentValue('Position', 'step', step - 1);

    }

}