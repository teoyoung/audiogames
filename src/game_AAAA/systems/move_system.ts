import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";

export default class MoveSystem implements ISystem {

    public read( enity: Entity) {

        console.log(enity);

    }

}