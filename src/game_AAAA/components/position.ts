import IComponent from '../../engine/ecs/ecs_component';

export default class PositionComp implements IComponent {
    public name: string = 'Position';
    public step: number = 10;
}