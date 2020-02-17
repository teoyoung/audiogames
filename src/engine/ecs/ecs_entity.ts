import Component from './ecs_component';

export interface IEntity {
    addComponent(c:Component):void;
}

export default class Entity implements IEntity{

    private components: {[name:string]: any } = {};

    public addComponent(component: Component){
        if(this.components[component.name]){ return }

        this.components[component.name] = component;
    }

    public getComponent(name: string): any {
        if(!this.components[name]){ return }
        return this.components[name];
    }

    public setComponentValue(nameComponen: string, nameValue: string, value: number | string | boolean){
        if(!this.components[nameComponen] || this.components[nameComponen][nameValue] === undefined){ return }
        this.components[nameComponen][nameValue] = value;
    }

}