import Scene from "../../engine/scene";
import Entity, {IEntity} from "../../engine/ecs/ecs_entity";
import ISystem from '../../engine/ecs/i_system';
import PositionComp from "../components/position";
import MoveSystem from "../systems/move_system";


export default class GameSc extends Scene {

    private entitys: Entity[] = [];
    private systems: ISystem[] = [];

    public init(){
        super.init();

        this.createEntity();
        this.addSystems();
        this.run();
    }

    private createEntity(){
        const entity = new Entity();
        entity.addComponent(new PositionComp());
        this.entitys.push(entity);
    }

    private addSystems(){
        this.systems = [
            new MoveSystem()

        ];
    }

    private run(){
        for ( const system of this.systems ) {

            for ( const entity of this.entitys ) {
                system.read(entity);

            }                        
        }
    }
}
