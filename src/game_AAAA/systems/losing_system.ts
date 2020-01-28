import ISystem from '../../engine/ecs/i_system';
import Entity from "../../engine/ecs/ecs_entity";

export default class LosingSystem implements ISystem {

    public read( enity: Entity) {

        const step = enity.getComponent('Position').step;
        if(step <= 0){
            enity.setComponentValue('Losing', 'losing', true);
            console.log('Game Over');
        }

    }

}