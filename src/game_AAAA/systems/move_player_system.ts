import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";

export default class MovePlayerSystem implements ISystem {

    public read( enity: Entity) {

        let line = enity.getComponent('Player').line;       

        console.log('line', line);
       // enity.setComponentValue('Position', 'step', step - 1);

    }

}