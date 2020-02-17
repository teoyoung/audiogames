import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";
import Player from '../player';

export default class VisualSystem implements ISystem {

    constructor( private player: Player){}

    public read( enity: Entity) {
    }

}