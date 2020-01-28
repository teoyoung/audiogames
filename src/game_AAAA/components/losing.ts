import IComponent from '../../engine/ecs/ecs_component';

export default class LosingComp implements IComponent {

    public name: string = 'Losing';
    public losing: boolean = false;
    
}