import Component from './ecs_component';

export interface IEntity {
    addComponent(c:Component):void;
}

export default class Entity implements IEntity{

    private components: {[name:string]: Component} = {};

    public addComponent(component: Component){
        if(this.components[component.name]){ return }

        this.components[component.name] = component;
    }

}