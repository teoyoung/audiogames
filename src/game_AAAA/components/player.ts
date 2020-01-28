import IComponent from '../../engine/ecs/ecs_component';

export default class PlayerComp implements IComponent {

    public name: string = 'Player';

    public line: number = 1;
    public maxLine: number = 2;
    
}