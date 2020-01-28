import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";

export default class MoveSystem implements ISystem {

    public read( enity: Entity) {

        let step = enity.getComponent('Position').step;       
        enity.setComponentValue('Position', 'step', step - 1);

    }

}