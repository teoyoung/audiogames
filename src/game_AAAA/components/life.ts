import IComponent from '../../engine/ecs/ecs_component';

export default class LifeComp implements IComponent {

    public name: string = 'Life';
    public hp: number = 1;
    
}