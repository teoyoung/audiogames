import IComponent from '../../engine/ecs/ecs_component';

export default class PositionComp implements IComponent {
    public name: string = 'Position';

    constructor( public step: number = 10, public line: number = 0) {}
    
}